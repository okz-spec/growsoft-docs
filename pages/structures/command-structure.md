# Command structure

Here you can learn how to create commands.

## Command Data Structure
To create a custom command, you need to define a Lua table like this:

```lua
local myCommand = {
    command = "hello", -- This is the command players will type: /hello
    roleRequired = Roles.ROLE_NONE, -- Who can use this command (e.g. ROLE_ADMIN, ROLE_MODERATOR, etc.)
    description = "Greets the player" -- This is the description that will be displayed on usage.
}
```

## Registering a Command
After defining your command table, register it like this:

```lua
registerLuaCommand(myCommand)
```

## Handling Player Commands
Use this callback to listen for when a player uses any command:

```lua
onPlayerCommandCallback(function(world, player, fullCommand)
    local command, args = fullCommand:match("^(%S+)%s*(.*)") -- Separate command and its arguments

    if command == myCommand.command then
        -- Call your function or logic here
        greetPlayer(player, args)
        return true
    end

    return false -- If it's not your command, let others handle it
end)
```

## Example Command Handler Function
You can define your logic in a separate function, like this:

```lua
function greetPlayer(player, args)
    player:onConsoleMessage("Hello, " .. player:getName() .. "!")
end
```
