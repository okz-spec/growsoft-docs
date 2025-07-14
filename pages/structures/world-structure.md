# World structure

Here you will learn how to work with the world structure.

## World Data Structure

```lua
getOwner() -- Get the world's owner.
getName() -- Get the name of the world's owner.
getWorldName() -- Get the world's name.
enterWorld(WorldName, "Message") -- Enter the specified world with a message.
useItemEffect(player:getNetID(), itemID, replacethis:getNetID(), arg1) -- Use the item effect on a player.
updateClothing(player) -- Update the player's clothing.
spawnGems(x, y, amount, player) -- Spawn gems at the specified coordinates.
useItemEffect(player:getNetID(), itemID, arg1, replacethis) -- Use the item effect on another player.
world:getVisiblePlayersCount() -- Get the number of visible players in the world.
world:isGameActive() -- Check if the game is active.
world:onGameWinHighestScore() -- Get the highest score in the game.
world:onCreateChatBubble(x, y, text, netid) -- Create a chat bubble at (x, y) with text.
world:onCreateExplosion(x, y, radius, power) -- Create an explosion at (x, y) with a given radius and power.
world:addXP(player, amount) -- Add experience points to a player.
world:setPlayerPosition(player, x, y) -- Teleport the player to the specified coordinates.
world:getDroppedItems() -- Get a list of all dropped items.
world:sendPlayerMessage(player, "something") -- You can also run player commands.
world:getTileDroppedItems(tile) -- Get a list of all dropped items on a specific tile.
world:removeDroppedItem(DropUID) -- Remove a dropped item.
world:kill(player) -- Kill player.
world:hasAccess(player)
world:hasTileAccess(player, tile)
world:punchTile(tile)
world:getID() -- Get the world's ID.
world:createNPC(NPC, X, Y)
world:findNPCByName("npc_name")
world:removeNPC("npc_name")
world:setClothing(NPC, ID)
getWorldSizeX() -- Get the world’s size horizontally.
getWorldSizeY() -- Get the world’s size vertically.
getTile(x, y) -- Get the tile at the specified coordinates.
```
