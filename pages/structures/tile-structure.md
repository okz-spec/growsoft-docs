# Tile structure

Here you will learn how to work with the tile structure.

```lua
getTileForeground() -- Gets the tile's foreground ID.
getTileBackground() -- Gets the tile's background ID.

setTileForeground(tile, id, 0, avatar)
setTileBackground(tile, id, 0, avatar)
```

### Info about `setTileForeground` and `setTileBackground`
- `id`: ID of the tile to place.
- `0` (optional): If set to `1`, the tile is placed **visually only** (not saved in world data). Resets when player re-enters the world.
- `avatar` (optional): If given, only that player sees the visual change. If omitted, **all players** see it.

---

```lua
tile:getTileItem() -- Does the same as getItem(id) but its easier to use.
getTiles() -- Returns an array of all tiles in the world.
getTilesByActionType(actionType) -- Gets tiles with a specific action type.
```

### Tile Data Properties Example
```lua
TileDataProperties = {
    TILE_DATA_TYPE_SEED_FRUITS_COUNT = 0
}

local tree_fruits = tile:getTileData(TileDataProperties.TILE_DATA_TYPE_SEED_FRUITS_COUNT)
print("Tree fruit count is: " .. tostring(tree_fruits))

tile:setTileDataInt(TileDataProperties.TILE_DATA_TYPE_SEED_FRUITS_COUNT, 1)
world:updateTile(tile) -- Applies changes so players can see them without rejoining.
```