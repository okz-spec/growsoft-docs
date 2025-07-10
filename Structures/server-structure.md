# Server structure

Here you will learn how to work with the server structure.

## Basic Server Functions

```lua
getRequiredEvent() -- Get the currently required event.
isVoucher() -- Check if an item is a voucher.
getCurrentServerDailyEvent() -- Get today's server daily event.
getServerCurrentEvent() -- Get the current active event on the server.
getItemID() -- Get the item's ID.
getTitle() -- Get the title of the item or event.
getAmount() -- Get the quantity or amount.
getIOTMItem() -- Get the Item of the Month.
getPrice() -- Get the item's price.
isGrowtoken() -- Check if an item is a Growtoken.
getCategory() -- Get the item category.
getRealGTItemsCount() -- Get the actual Growtopia item count.
getTexture() -- Get the item's texture.
getEventOffers() -- Get current event offers.
getActiveDailyOffers() -- Get today's active daily offers.
getDescription() -- Get item or event description.
getItemsDescription() -- Get description of multiple items.
isRPC() -- Check if the item is an RPC.
getTexturePosX() -- Get X position of texture.
getTexturePosY() -- Get Y position of texture.
getTopPlayerByBalance() -- Get the richest player.
getTopWorldByVisitors() -- Get the most visited world.
getStoreItems() -- Get available store items.
getEnumItem("ITEM_NAME") -- Get an item using its enum name.
getID() -- Get the ID.
getTileID() -- Get tile ID.
tile:getPosX() -- Get tile X position.
tile:getPosY() -- Get tile Y position.
getExpireTime() -- Get the expiration time.
getServerName() -- Get the server name.
getNewsBanner() -- Get the current news banner.
getNewsBannerDimensions() -- Get the size of the news banner.
getTodaysDate() -- Get today's date.
getTodaysEvents() -- Get all events for today.
getCurrentEventDescription() -- Get description of the current event.
getCurrentDailyEventDescription() -- Get daily event description.
getCurrentRoleDayDescription() -- Get role day description.
getServerID() -- Get the server's ID.
getServerPlayers() -- Get all online players.
getAllPlayers() -- Get all players (Including online & offline)
```

## Purchase & Modding Functions

```lua
makePurchaseItem(amount) -- (Server only) Purchase an item.
onStorePurchaseResult() -- (Server only) Show store purchase result.
onPurchaseItem(player, item, true/false) -- Handle an item purchase.
onPurchaseItemReq(player, itemID) -- Request to purchase item.
addDailyOfferPurchased(userID, itemID) -- Mark daily offer as bought.
registerLuaPlaymod(playmodData) -- Register a custom player mod.
addMod(modID, amount) -- Add a mod to a player.
```

## Script & Data Control

```lua
reloadScripts() -- Reload server scripts.
loadDataFromServer(key) -- Load saved server data.
saveDataToServer(key, data) -- Save data to server.
onAutoSaveRequest(function) -- Trigger auto save.
```

## World Menu Functions

```lua
addWorldMenuWorld(worldID, name, color, priority) -- Add a world to menu.
removeWorldMenuWorld(worldID) -- Remove a world from menu.
hideWorldMenuDefaultSpecialWorlds(1 or 0) -- Show/hide default worlds.
```

## Dialog Data Keys

```lua
data["selection"]
data["item"]
data["buttonClicked"]
data["dialog_name"]
```

## Example: Creating a Playmod

```lua
local greenBeerModData = {
    modID = -1100, -- Use a unique negative ID
    modName = "Envious",
    onAddMessage = "It ain't easy being you.",
    onRemoveMessage = "Healthy color restored.",
    iconID = getEnumItem("ITEM_GREEN_BEER"):getID(),
    changeSkin = {52, 235, 107, 255},
    modState = {StateFlags.STATE_DOUBLE_JUMP, StateFlags.STATE_SHINING},
    changeMovementSpeed = 500,
    changeAcceleration = 0,
    changeGravity = 0,
    changePunchStrength = 0,
    changeBuildRange = 0,
    changePunchRange = 0,
    changeWaterMovementSpeed = 0
}

registerLuaPlaymod(greenBeerModData)
```