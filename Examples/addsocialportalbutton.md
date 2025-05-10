# Adding Buttons to the Social Portal

Here’s an example of how to add a custom button to a social portal:

```lua
-- Define a function that will be called when the button is clicked
function mySocialPortalButton(world, player)
   -- Display player name in console when button is clicked
    print(player:getName())
end

-- Use the addSocialPortalButton function to add a custom button
addSocialPortalButton("add_custom_button|button_name_2|image:interface/large/gui_social_c_settings.rttex;image_size:400,260;width:0.19;|\n", mySocialPortalButton)
```