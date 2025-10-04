# HTTP API

A guide to using the HTTP API

## 1. Overview

The HTTP module currently provides two basic functions:

- `http.get(url, headers)`
- `http.post(url, headers, data)`

Both functions:
- Are intended to be used inside coroutines so they do not block the main logic.
- Return two values: `body, status`
  - `body`: raw response body as a string (no automatic JSON decoding).
  - `status`: numeric HTTP status (e.g., `200`, `404`). May be `nil` if an internal/network error occurs (implementation-dependent—check before using).

Headers are passed as a plain Lua table of key → value pairs.

## 2. Rate Limiting

You MUST NOT send requests more frequently than once every 300 ms.

If you exceed this limit, request is silently skip.

## 3. Function Reference

### 3.1 `http.get(url, headers)`

Parameters:
- `url` (string): Absolute URL (HTTP or HTTPS).
- `headers` (table, optional): Header map. `{}` is valid. May be omitted if allowed in your runtime.

Returns:
- `body` (string|nil)
- `status` (number|nil)

### 3.2 `http.post(url, headers, data)`

Parameters:
- `url` (string)
- `headers` (table): Typical values include `Content-Type`, `Authorization`.
- `data` (string): Raw request body. (Binary or other types are not supported in Beta.)

Returns:
- `body` (string|nil)
- `status` (number|nil)

---

## 4. Return Values & Conventions

| Value   | Meaning                                                                 |
|---------|-------------------------------------------------------------------------|
| body    | Raw response body string (no decoding). Might be empty string.          |
| status  | HTTP status code (e.g. 200). `nil` if the request failed internally.    |

Always guard against `nil`:
```lua
local body, status = http.get("https://httpbin.org/get", {})
if not status then
    print("Request failed (nil status)")
    return
end
if status ~= 200 then
    print("Non-OK status:", status, body)
    return
end
print("Success:", body)
```

## 5. Examples

### 5.1 Basic GET Command

```lua
onPlayerCommandCallback(function(world, player, command)
    if command == "test_get" then
        coroutine.wrap(function()
            local body, status = http.get("https://httpbin.org/get", {})
            print("Response:", status, body)
            player:sendVariant({"OnConsoleMessage", body})
        end)()
        return true
    end
    return false
end)
```

### 5.2 Basic POST Command

```lua
onPlayerCommandCallback(function(world, player, command)
    if command == "test_post" then
        coroutine.wrap(function()
            local body, status = http.post("https://httpbin.org/post", {}, "hello world")
            print("Response:", status, body)
            player:sendVariant({"OnConsoleMessage", body})
        end)()
        return true
    end
    return false
end)
```

### 5.3 Minimal Rate-Limit Helper

```lua
local lastRequestAt = 0
local function throttledGet(url, headers)
    local now = os.clock()
    local elapsed = now - lastRequestAt
    if elapsed < 0.3 then
        -- Simple busy wait or yield; adjust for your environment
        local toWait = 0.3 - elapsed
        -- If you have a sleep function:
        -- sleep(toWait)
        -- Or yield to scheduler:
        coroutine.yield()
    end
    lastRequestAt = os.clock()
    return http.get(url, headers or {})
end
```

## 6. Error Handling Patterns

Typical categories:
- Network / internal error → `status == nil`
- Client error → `400–499`
- Server error → `500–599`
- Rate limit exceeded → Implementation-specific (could appear as nil or a 429 if supported)

Example robust wrapper:
```lua
local function safeRequest(method, url, headers, data)
    local body, status
    if method == "GET" then
        body, status = http.get(url, headers or {})
    elseif method == "POST" then
        body, status = http.post(url, headers or {}, data or "")
    else
        error("Unsupported method: " .. tostring(method))
    end

    if not status then
        return nil, "internal_error"
    end
    if status >= 200 and status < 300 then
        return { status = status, body = body }, nil
    elseif status == 429 then
        return nil, "rate_limited"
    elseif status >= 500 then
        return nil, "server_error_" .. status
    elseif status >= 400 then
        return nil, "client_error_" .. status
    else
        return nil, "unexpected_status_" .. status
    end
end
```

## 7. Debugging Tips

| Symptom                      | Possible Cause                          | Action |
|-----------------------------|------------------------------------------|--------|
| `status == nil`             | Internal failure or too-fast request     | Add delay; log URL; check rate limit. |
| Always non-200 statuses     | Wrong URL or headers                     | Print full URL and headers; test via external tool (curl). |
| Empty body but 200          | Valid but no content                     | Confirm endpoint; log `Content-Length` if available (future feature). |
| Unparseable JSON            | Response not JSON or truncated           | Log first 300 chars; verify `Content-Type`. |