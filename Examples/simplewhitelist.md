# Simple whitelist for Developers

Here’s an example of how to make a whitelist for Developers:

```lua
onPlayerLoginCallback(function(player)
    player:onConsoleMessage("`2Check for whitelist``")

    if player:hasRole(51) then
        player:onConsoleMessage("`2Hello World! Oh sorry Hello Dev!``")
    else
        player:onConsoleMessage("`4You do not have the developer role to enter the server!``")
        player:disconnect()
    end

end)
```