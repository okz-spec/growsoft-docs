# Event Tutorial

This tutorial shows how to create a custom server event and expose a sidebar button players can interact with.  

## 1. Full Example (Reference)

```lua
-- test event script
print("(Loaded) test event script for GrowSoft")

local lunarFestivalEventData = {
    id = 21, -- Must be from the range of 21 to 255 and must be unique!
    title = "`3Lunar Festival``",
    description = "During Lunar Festival nothing happens!",
    message = "`8It's time for the `4Lunar Festival!````"
}

local lunarFestivalSidebarButton = {
    active = true,
    buttonAction = "lunarfestivalmenu",
    buttonTemplate = "BaseEventButton",
    counter = 0,
    counterMax = 0,
    itemIdIcon = 13054,
    name = "LunarFestival",
    order = lunarFestivalEventData.id,
    rcssClass = "daily_challenge",
    text = "`#Lunar``"
}

registerLuaEvent(lunarFestivalEventData)
addSidebarButton(json.encode(lunarFestivalSidebarButton))

onEventChangedCallback(function(newEventID, oldEventID)
    if lunarFestivalEventData.id == newEventID then
        print(lunarFestivalEventData.title .. " Has started!")
    elseif lunarFestivalEventData.id == oldEventID then
        print(lunarFestivalEventData.title .. " Has ended!")
    end
end)

onPlayerLoginCallback(function(player)
    player:sendVariant({"OnEventButtonDataSet", lunarFestivalSidebarButton.name, (getCurrentServerEvent() == lunarFestivalEventData.id) and 1 or 0, json.encode(lunarFestivalSidebarButton)})
end)

onPlayerEnterWorldCallback(function(world, player)
    player:sendVariant({"OnEventButtonDataSet", lunarFestivalSidebarButton.name, (getCurrentServerEvent() == lunarFestivalEventData.id) and 1 or 0, json.encode(lunarFestivalSidebarButton)})
end)

onPlayerActionCallback(function(world, player, data)
    local action = data["action"]
    if action == lunarFestivalSidebarButton.buttonAction then
        if getCurrentServerEvent() == lunarFestivalEventData.id then
            player:sendVariant({"OnTextOverlay", lunarFestivalEventData.title})
        end
        return true
    end
    return false
end)
```

---

## 2. Step-by-Step Breakdown

### 2.1 Event Data Object

```lua
local lunarFestivalEventData = {
    id = 21,
    title = "`3Lunar Festival``",
    description = "During Lunar Festival nothing happens!",
    message = "`8It's time for the `4Lunar Festival!````"
}
```

Field notes:
- `id`: Unique numeric identifier (range 21–255). Avoid collisions with other scripts.
- `title`: Display title; backticks and color codes are formatting tokens.
- `description`: Used for internal UI or future display panels (depends on client).
- `message`: Broadcast or contextual message text (optional usage depends on engine).

### 2.2 Sidebar Button Definition

```lua
local lunarFestivalSidebarButton = {
    active = true,
    buttonAction = "lunarfestivalmenu",
    buttonTemplate = "BaseEventButton",
    counter = 0,
    counterMax = 0,
    itemIdIcon = 13054,
    name = "LunarFestival",
    order = lunarFestivalEventData.id,
    rcssClass = "daily_challenge",
    text = "`#Lunar``"
}
```

Meaning of key fields:

| Key | Purpose |
|-----|---------|
| active | Controls whether button is interactable/displayed. |
| buttonAction | String sent when player clicks (matched in `onPlayerActionCallback`). |
| buttonTemplate | Template skin / layout (engine-defined). |
| counter / counterMax | Progress display (e.g., 3/10). Use both >0 to show a bar/counter. |
| itemIdIcon | Item/icon ID used in UI (styling). |
| name | Unique internal name for referencing button in update packets. |
| order | Sorting priority (lower vs higher depends on implementation; here it mirrors event ID). |
| rcssClass | Visual style class/category. |
| text | Short label (color-coded). |

### 2.3 Registration

```lua
registerLuaEvent(lunarFestivalEventData)
addSidebarButton(json.encode(lunarFestivalSidebarButton))
```

- `registerLuaEvent(table)` expects a Lua table describing your event.
- `addSidebarButton(jsonString)` requires JSON-encoded button data (so we call `json.encode`).

### 2.4 Lifecycle Callback

```lua
onEventChangedCallback(function(newEventID, oldEventID)
    if lunarFestivalEventData.id == newEventID then
        print(lunarFestivalEventData.title .. " Has started!")
    elseif lunarFestivalEventData.id == oldEventID then
        print(lunarFestivalEventData.title .. " Has ended!")
    end
end)
```

Use cases:
- Announce starts/ends.
- Initialize timers or spawn resources.
- Cleanup ephemeral state on end.

### 2.5 Player Synchronization

Both login and world entry ensure the player UI matches server state:

```lua
player:sendVariant({"OnEventButtonDataSet",
    lunarFestivalSidebarButton.name,
    (getCurrentServerEvent() == lunarFestivalEventData.id) and 1 or 0,
    json.encode(lunarFestivalSidebarButton)
})
```

Arguments explanation (positional):
1. Packet type: `"OnEventButtonDataSet"`
2. Button internal name
3. Active flag (1 if this event is currently active, else 0)
4. JSON string describing the button

Call this:
- When player logs in
- When player changes worlds
- When button state changes (e.g. counter increment)

### 2.6 Handling Player Actions

```lua
onPlayerActionCallback(function(world, player, data)
    local action = data["action"]
    if action == lunarFestivalSidebarButton.buttonAction then
        if getCurrentServerEvent() == lunarFestivalEventData.id then
            player:sendVariant({"OnTextOverlay", lunarFestivalEventData.title})
        end
        return true
    end
    return false
end)
```

Flow:
1. Extract `action` from incoming data.
2. Match versus your `buttonAction` string.
3. Optionally ensure your event is currently active (`getCurrentServerEvent()`).
4. Respond (here: show overlay).

Return:
- `true` if you consumed the action (prevents other handlers or default processing).
- `false` otherwise.

## 3. Creating Your Own Event

Below is a reusable skeleton. Replace markers.

```lua
print("(Loaded) Custom Event Script")

local EVENT_ID = 42  -- Choose unique number between 21 and 255
local EVENT_KEY = "HarvestFestival"  -- Short internal key

local eventData = {
    id = EVENT_ID,
    title = "`2Harvest Festival``",
    description = "Collect harvest tokens during the festival!",
    message = "`6The Harvest Festival has begun! Gather resources!``"
}

local sidebarButton = {
    active = true,
    buttonAction = "harvestmenu",
    buttonTemplate = "BaseEventButton",
    counter = 0,
    counterMax = 100, -- show progress bar if desired
    itemIdIcon = 1234,
    name = EVENT_KEY,
    order = EVENT_ID,
    rcssClass = "seasonal_event",
    text = "`#Harvest``"
}

registerLuaEvent(eventData)
addSidebarButton(json.encode(sidebarButton))

local function syncButton(player)
    local isActive = (getCurrentServerEvent() == EVENT_ID) and 1 or 0
    player:sendVariant({"OnEventButtonDataSet", sidebarButton.name, isActive, json.encode(sidebarButton)})
end

onEventChangedCallback(function(newID, oldID)
    if newID == EVENT_ID then
        print(eventData.title .. " started")
        -- Optionally broadcast message or set counters
    elseif oldID == EVENT_ID then
        print(eventData.title .. " ended")
        -- Cleanup / finalize / rewards
    end
end)

onPlayerLoginCallback(function(player)
    syncButton(player)
end)

onPlayerEnterWorldCallback(function(world, player)
    syncButton(player)
end)

onPlayerActionCallback(function(world, player, data)
    if data.action == sidebarButton.buttonAction then
        if getCurrentServerEvent() == EVENT_ID then
            player:sendVariant({"OnTextOverlay", eventData.title})
            -- Open custom menu, show progress, etc.
        else
            player:sendVariant({"OnTextOverlay", "`4Event is not active.``"})
        end
        return true
    end
    return false
end)
```

## 4. Counters & Progress

To update `counter` dynamically:

```lua
sidebarButton.counter = sidebarButton.counter + 1
player:sendVariant({"OnEventButtonDataSet", sidebarButton.name,
    (getCurrentServerEvent() == EVENT_ID) and 1 or 0,
    json.encode(sidebarButton)
})
```

If `counterMax > 0`, the client may display a progress bar or numeric fraction (implementation-dependent).