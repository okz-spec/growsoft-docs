# Callback structure

Here you can learn how to hook callbacks.

## onPlayerVariantCallback
```lua
onPlayerVariantCallback(function(player, variant, delay, netID)
```

*Note: With onPlayerVariantCallback you can view all things that server sends to player and even change / edit them (Not exactly good idea but possible)*

## onPlayerDialogCallback
```lua
onPlayerDialogCallback(function(world, player, data)
```

*Note: The data to get the dialog name and button clicked, is always data["dialog_name"] and data["buttonClicked"] respectively, nothing else, it's a built in function.*

## onPlayerConsumableCallback
```lua
onPlayerConsumableCallback(function(world, player, tile, clickedPlayer, itemID)
```

## onTileWrenchCallback
```lua
onTileWrenchCallback(function(world, player, tile)
```

## onPlayerLoginCallback
```lua
onPlayerLoginCallback(function(player)
```

## onPlayerAddFriendCallback
```lua
onPlayerAddFriendCallback(function(world, player, addedPlayer)
```

## onTilePlaceCallback
```lua
onTilePlaceCallback(function(world, player, tile, placingID)
```

## onTick
```lua
onTick(function()
```

*Note: Call exactly every 100ms*

## onPlayerTick
```lua
onPlayerTick(function(player)
```

*Note: Called every second*

## onWorldTick
```lua
onWorldTick(function(world)
```

*Note: Called every 100ms*

## onPlayerFirstTimeLoginCallback
```lua
onPlayerFirstTimeLoginCallback(function(player)
```

## onPlayerEnterWorldCallback
```lua
onPlayerEnterWorldCallback(function(world, player)
```

## onPlayerLeaveWorldCallback
```lua
onPlayerLeaveWorldCallback(function(world, player)
```

## onTilePunchCallback
```lua
onTilePunchCallback(function(world, avatar, tile)
    return false -- False does not prevent default action of player breaking tiles, true does (making player unable to break tiles)
end)
```

## onPlayerDisconnectCallback
```lua
onPlayerDisconnectCallback(function(player)
```

## onPlayerRawPacketCallback
```lua
onPlayerRawPacketCallback(function(player, data)
    if data then
        local packet_bytes = {data:byte(1, #data)}
        local packet_type = packet_bytes[1] -- 1 byte
        print(packet_type)
    end

    return false
end)
```

*Note: You can block default packets that server sends to client, however you need to have deeper Growtopia packets structure knowledge.*

## onPlayerTradeCallback
```lua
onPlayerTradeCallback(function(world, player1, player2, items1, items2)
    for _, item in ipairs(items1) do
        print("Traded " .. tostring(item.id) .. " x" .. tostring(item.count))
    end
end)
```

## onPlayerDeathCallBack
```lua
onPlayerDeathCallback(world, player, isRespawn)
```

*Note: isRespawn is true if player respawns, if not true then the player dead from spikes or lava etc...*

## onPlayerDropCallback
```lua
onPlayerDropCallback(world, player, itemID, itemCount)
```

*Note: need to return true or false, return true to make it unable to drop the item, return false if u want the drop to work as usual.*

## onPlayerLevelUPCallback
```lua
onPlayerLevelUPCallback(world, player, levelReached)
```

## onPlayerEquipClothingCallback
```lua
onPlayerEquipClothingCallback(world, player, itemID)
```

*Note: need to return true or false, return true to make it unable to equip the item, return false if u want the equip to work as usual.*

## onPlayerUnequipClothingCallback
```lua
onPlayerUnequipClothingCallback(world, player, itemID)
```

*Note: need to return true or false, return true to make it unable to unequip the item, return false if u want the unequip to work as usual.*

## onPlayerPickupItemCallback
```lua
onPlayerPickupItemCallback(world, player, itemID, itemCount)
```

*Note: need to return true or false, return true to make it unable to pickup the item, return false if u want the pickup to work as usual.*

## onPlayerEnterDoorCallback
```lua
onPlayerEnterDoorCallback(world, player, targetWorldName, doorID)
```

*Note: need to return true or false, return true to make it unable to enter the door, return false if u want the enter door to work as usual.*

## onPlayerPlantCallback
```lua
onPlayerPlantCallback(world, player, tile)
```

## onPlayerHarvestCallback
```lua
onPlayerHarvestCallback(world, player, tile)
```

## onPlayerCatchFishCallback
```lua
onPlayerCatchFishCallback(world, player, itemID, itemCount)
```

## onPlayerCrimeCallback
```lua
onPlayerCrimeCallback(world, player, itemID, itemCount)
```

## onPlayerSurgeryCallback
```lua
onPlayerSurgeryCallback(world, player, itemID, itemCount)
```

## onPlayerKillCallback
```lua
onPlayerKillCallback(world, player, killedPlayer)
```

## onPlayerProviderCallback
```lua
onPlayerProviderCallback(world, player, tile, itemID, itemCount)
```

## onPlayerHarmonicCallback
```lua
onPlayerHarmonicCallback(world, player, tile, itemID, itemCount)
```

## onPlayerGeigerCallback
```lua
onPlayerGeigerCallback(world, player, itemID, itemCount)
```

## onPlayerCatchGhostCallback
```lua
onPlayerCatchGhostCallback(world, player, itemID, itemCount)
```

## onPlayerXPCallback
```lua
onPlayerXPCallback(world, player, amount)
```

## onPlayerFirePutOutCallback
```lua
onPlayerFirePutOutCallback(world, player, tile)
```

## onPlayerEarnGrowtokenCallback
```lua
onPlayerEarnGrowtokenCallback(world, player, itemCount)
```

## onPlayerTrainFishCallback
```lua
onPlayerTrainFishCallback(world, player)
```

*Note: Called once the player has trained a fish*

## onPlayerGemsObtainedCallback
```lua
onPlayerGemsObtainedCallback(world, player, amount)
```