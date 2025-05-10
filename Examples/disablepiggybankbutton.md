# Disable a Piggy Bank button

Here’s an example of how to disable a Piggy Bank button:

```lua
onPlayerVariantCallback(function(player, variant, delay, netID)
    local first_element = variant[1]
    if first_element == "OnEventButtonDataSet" and variant[2] == "PiggyBankButton" then
        player:sendVariant({"OnEventButtonDataSet", variant[2], 0, variant[4]}, delay, netID)
        return true
    end
    return false
end)
```