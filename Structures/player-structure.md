# Player structure

Here you will learn how to work with the player structure.

## Basic Player Info

```lua
player:getName() -- Player's display name
player:getCleanName() -- Lowercase, no formatting
player:getNetID() -- Unique player network ID
player:getUserID() -- Unique account ID
player:getWorldName() -- Name of the world the player is in
player:getCountry() -- Player's country (online only)
player:getPlatform() -- Player's platform (0=Windows, 1=iOS, 4=Android, etc.)
player:getOnlineStatus() -- Online/offline status
player:getDiscordID() -- Linked Discord ID
player:getAccountCreationDateStr() -- Account creation date as a string
```

## Currency & Items

```lua
player:getGems()
player:addGems(amount)
player:removeGems(amount)

player:getCoins()
player:removeCoins(amount)

player:getItemAmount(itemID)
player:changeItem(itemID, amount)
```

## Inventory

```lua
player:getInventorySize()
player:isMaxInventorySpace()
player:upgradeInventorySpace(amount)
player:getInventoryItems() -- Returns all items in inventory

-- Example loop:
for _, item in ipairs(player:getInventoryItems()) do
    print(item:getItemID(), item:getItemCount())
end
```

## UI & Messages

```lua
player:onConsoleMessage("Hello!") -- Console message
player:onTalkBubble(player:getNetID(), "Hi!", 0) -- Bubble message
player:onDialogRequest(dialog)
player:onTextOverlay("Overlay Text")
player:playAudio("audio.wav")
```

## Game Features & UIs

```lua
player:onStorePurchaseResult()
player:onGrow4GoodDonate()
player:onRedeemMenu()
player:enterWorld("WORLDNAME", "Welcome!")

-- Growtopia-style UIs
player:onGrowmojiUI()
player:onNotebookUI()
player:onCoinsBankUI()
player:onOnlineStatusUI()
player:onClothesUI(player) -- Shows clothes of player
player:onAchievementsUI(player)
player:onBackpackUI(player)
```

## Roles, Mods, Stats

```lua
player:hasRole(Roles.ROLE_ADMIN)
player:setRole(Roles.ROLE_MODERATOR)

player:getMod(modID)
player:addMod(modID, value)

player:getSubscription("subscriptionName")
player:updateStats(world, PlayerStats.ConsumablesUsed, 1)
```

## Dialog Styling

```lua
player:setNextDialogRGBA(255, 255, 255, 255)
player:setNextDialogBorderRGBA(0, 0, 0, 255)
player:resetDialogColor() -- Always call this after customizing dialogs
```

## Other Utilities

```lua
player:sendVariant({"OnTalkBubble", player:getNetID(), "Hi!", 0, 0})
player:sendVariant({"OnConsoleMessage", "Welcome!"})

player:sendAction("action|play_sfx\nfile|audio/sound.mp3\ndelayMS|0")

player:getWorld() -- Returns the world object or nil
player:disconnect() -- Kick the player from the server

getPlayerByName("Name") -- Get player object by name
```

## Extras

```lua
player:getGuildID()
player:getHomeWorldID()
player:getTransformProfileButtons()
player:getClassicProfileContent(category, flags)
player:getClothingItemID()
player:getClothingItemID(PlayerClothes.CHANGETHIS)
player:getUnlockedAchievementsCount()
player:getAchievementsCount()
player:getBackpackUsedSize()
getAutofarm() -- Gets the player's autofarm (if used)
setSlots(amount) -- Sets slot count (not always needed)
```