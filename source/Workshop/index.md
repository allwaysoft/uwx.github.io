---
title: Steam Games Workshop Installation Guides
date: 2016-09-04 19:26:55
---

# GMOD Workshop Installation

1. Get [GWTool](https://github.com/fgblomqvist/gwtool/releases/download/v0.3/GWTool-v3.zip).
2. Download the add-on using [Steam Workshop Downloader](http://steamworkshopdownloader.com/).
3. Open GWTool.
4. Drag the add-on thing into the window.
5. Extract the archive with [7-zip](http://www.7-zip.org/).
6. Drag the extracted file into the window.
7. You are done! Simply put the folder in your `addons` folder in the Garry's Mod install folder.

# Plague Inc. Workshop Installation

1. Download the mod via [Steam Workshop Downloader](http://steamworkshopdownloader.com/)
2. You should get a file with no extension
3. Open the PlagueIncSC.exe (scenario editor)
4. Create a new scenario (make sure you select all parts - disease lab, world lab, gov. actions lab), name it after the mod you want to play, save it and exit the Scenario editor
5. Go to `%APPDATA%\Local\Ndemic Creations\Plague Inc. Evolved\Scenario Creator\`Name of the scenario you just created`\`
6. In there you will see:

    `countries.txt`
    `disease.txt`
    `govactions_standard.txt`
    `publish.txt`
    `routes.txt`
    `scenario.txt`
    `picture.png`

7. Now comes the annoying part: open the mod file you downloaded from "steam workshop downloader" with text editor (I recommend Notepad++), you should see a lot of text (never mind the black squares at the beginning and at the end)
8. Now go back and start opening the .txt files in the "scenario editor" folder.
9. For example open `disease.txt`, the code starts with `global:`
10. Now look for the same line in the mod file (which you have opened in text editor). When you find it, copy all the code below it (it will be a lot of code). You need to be careful to copy only the code belonging to "disease" section. How to know if you got all the code? Simple; when you see, for example title "Government action:" you got all the code that belonged to the "Disease (or any other section that started above it)" section. Now copy the selected code and paste it into "Disease.txt" in your Scenario Creator map. Make sure you overwrite the previous code.
To make it easier use search function in mod file for:

* `global_air_rate:` >>> copy into `disease.txt`
* `government_actions:` >>> copy code into `govactions_standard.txt`
* `Scenario Information:` >>> copy code into `scenario.txt` (note: correct the line scen_icon:xxx.png by replacing xxx with the name of the .png in your Scenario Creator folder to see the picture)
* `air_routes/ocean_routes:` >>> copy into `routes.txt`
* `usa/canada/...:` >>> copy into `countries.txt`

Try to find all sections (if you don’t find it, it means it uses the default value). If you can’t find air_routes (for example), it means that the mod doesn't modify routes.txt/uses default values, so just leave the original routes.txt intact.

11. Repeat the steps for all .txt files in the Scenario Creator map. Basically, imagine the mod file you downloaded like a single big text file, all you have to do is copy/paste the code into the appropriate text files on HDD.

12. When you copied all code into appropriate .txt files, save them, start the game, select "single player > custom scenario > local files > name of your scenario > play". All you lose using this method (to my knowledge) are pictures added to the mod.

Note:
[Here](http://www35.zippyshare.com/v/57858155/file.html) are the files for [Lycanthropy](http://steamcommunity.com/sharedfiles/filedetails/?id=315369447&searchtext=) (since I saw you asking for this one in another topic) mod that were created using the method above. Extract the files into `%APPDATA%\Local\Ndemic Creations\Plague Inc. Evolved\Scenario Creator\`

# Tabletop Simulator Workshop Installation

> Workshop mods may not work properly since update v3.3! Try this fix: If the mod's number starts with a "3", save it as .json. If it starts with a 2, save as .cjc.
> For workshop mods, we will be using the website [Steam Workshop Downloader](http://steamworkshopdownloader.com/).
> If the website doesn't do anything, try a different browser / disable your ad blocker!

1. Go to the [Tabletop Simulator workshop page](http://steamcommunity.com/workshop/browse/?appid=286160)
2. Find the mod you want to download and copy the URL. For example, the UNO mod is [here](http://steamcommunity.com/sharedfiles/filedetails/?id=260389428).
3. Paste the mod URL into the [Steam Workshop Downloader](http://steamworkshopdownloader.com/) website, it should show you the mod name and a download button
4. Click download and save it with the same name as the mod ID number from the URL and the proper file extension [see above fix]. In our example, we would save UNO as `260389428.cjc`
5. Put the mod file in this folder (create it if you don't have one): `C:\Users\<Username>\Documents\My Games\Tabletop Simulator\Mods\Workshop`

# Turbo Dismount Workshop Installation

You can use the [Steam Workshop Downloader](http://steamworkshopdownloader.com/) and manually download maps you want, extract them with 7-Zip and then load them as "Load Custom Level" from the Options menu. Not all will work that way, but most will.

# Don't Starve Workshop Installation

Use the [Steam Workshop Downloader](http://steamworkshopdownloader.com/) and download mods you want and place them in the `\mods` folder. Works only with standalone edition.

# RPG Maker VX Ace Workshop Installation

Use the [Steam Workshop Downloader](http://steamworkshopdownloader.com/) and place files anywhere for games; don’t know for specific files like script.

# CS: GO Workshop Installation

Use the [Steam Workshop Downloader](http://steamworkshopdownloader.com/) and place files in the `\maps` folder (you might have to extract them) if it’s not working then place them in `\maps\workshop\<Workshop ID>\`

# Civilization V Workshop Installation

Use the [Steam Workshop Downloader](http://steamworkshopdownloader.com/) and place files in the `C:\Users\<Username>\Documents\My Games\Sid Meier's Civilization 5\mods` folder.

# Killing Floor Workshop Installation

Use the [Steam Workshop Downloader](http://steamworkshopdownloader.com/) and place files in the \maps folder. Maps should be .rom extension.

# Audiosurf 2 Workshop Installation

1. Get the MOD file using [Steam Workshop Downloader](http://steamworkshopdownloader.com/).
    * If you've downloaded a file without extension - just add .zip extension.
2. Extract the archive anywhere. We recommend using original mod/skin name for folder name.
3. Now put the folder into required place:
    * If you've downloaded a skin, put the folder into `\skins\`.
    * If you've downloaded a mod, put the folder into `\mods\`.
4. Now go into the game, and if you downloaded a mod, select it in "Mods" tab, and if you've downloaded a Skin, select it in "Skins" tab.
5. Also, I'd personally recommend extracting it with WinRAR, as it shows how the folder should be called on the right (Archive comments).

# Divinity: Original Sin Workshop Installation

Use the [Steam Workshop Downloader](http://steamworkshopdownloader.com/) and place files in the `\mods` folder.
Copy .pak files. Select Mods on Menu, and check if the new Mod is enabled.

# Age of Empires II: HD Edition Workshop Installation
Workshop URL: http://steamcommunity.com/app/221380/workshop/

1. Get the MOD file using [Steam Workshop Downloader](http://steamworkshopdownloader.com/).
2. Change the extension of .MOD file to .ZIP and Extract it!
3. Move the contents to root directory of Age of Empires II: HD Edition
    * Note: some mods will conflict with each other, this also happens in legitimate copies of the game

# Age of Mythology: Extended Edition Workshop Installation
Workshop URL: http://steamcommunity.com/app/266840/workshop/

1. Get the MOD file using [Steam Workshop Downloader](http://steamworkshopdownloader.com/).
2. Change the extension of .MOD file to .ZIP and Extract it!
3. Move the folder to directory `\Age of Mythology Extended Edition\mods\` (for example `\Age of Mythology Extended Edition\mods\Example\` )
4. Launch the game, select Workshop on Menu, and check if the new "MOD" is enabled.

# Age of Wonders III Workshop Installation
Workshop URL: http://steamcommunity.com/app/226840/workshop/

1. Get the MOD file using [Steam Workshop Downloader](http://steamworkshopdownloader.com/).
2. Copy file ".taf" to `C:\Users\<Username>\Documents\My Games\AoW3\UserContent`
3. Run AoW3Launcher.exe found on root game directory and wait AoW III extract ".taf" files

# X Rebirth Workshop Installation
Workshop URL: http://steamcommunity.com/app/2870/workshop/

1. Get the MOD file using [Steam Workshop Downloader](http://steamworkshopdownloader.com/).
2. Download X Rebirth Workshop .DAT Extractor: https://www.mediafire.com/?xq29dzrdaso4wf1
3. Then Drag & Drop the `DOWNLOADED.DAT` onto `XR_Workshop_Extractor_2.0.0.0.exe`
4. Move the MOD Folder to directory `\X_Rebirth\extensions\<Example>\X_Rebirth\extensions\<Example>\`
5. Launch the game, select Extension on Menu, and check if the new "Extension" is enabled.

PS: If you want, you can use this tool in command line mode.  

Usage: `xr_workshop_extractor_2.0.0.0.exe extension_name.dat ws_id#`  
Example: `xr_workshop_extractor_2.0.0.0.exe extensions_litauen_capital_ship_bridge_v181.dat 314225272`

ws_id is optional, but inserting ws_id is really recommended, it will fix eventual extension dependency.

Use the extractor in command line is the only method to input a ws_id.

Tip: the ws_id can be found in the Steam Workshop URL  
`http://steamcommunity.com/sharedfiles/filedetails/?id=`**`314225272`**

# Men of War Assault Squad 2 Workshop Installation

1. Get the MOD file using [Steam Workshop Downloader](http://steamworkshopdownloader.com/).
2. Change the extension of MOD file to .ZIP and Extract it!
3. Move the folder to directory `\Men of War Assault Squad 2\mods\` for example `\Men of War Assault Squad 2\mods\<Example>\`
4. Launch the game, select Options and Mods on Menu, and check if the new mod is enabled

# Prison Architect Workshop Installation

1. Get the MOD file using [Steam Workshop Downloader](http://steamworkshopdownloader.com/).
2. Extract the file using 7-zip, make sure to create a new folder.
    * 7-zip may not always extract the file successfully, in that case you will need to use WinRAR.
3. Move the folder to `C:\Users\your Windows user name\AppData\Local\Introversion\Prison Architect\mods\<Example>_mod\`
4. Launch the game, select Options and then Mods, then check if your new mod is there.

# Trackmania Turbo Custom Map Installation
This game's custom maps are stored in the UPlay servers, however I'll leave this here since the game is on Steam.

1. Download maps from https://players.turbo.trackmania.com (use [this userscript](https://github.com/HulaSamsquanch/aimgames/raw/master/other/tmturbo-track-downloader.user.js))
2. Put files in `Documents\TrackmaniaTurbo\aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee\MapsGhosts\`
3. Rename files sequentially like “1.Map.Gbx”, “2.Map.Gbx” etc. A bulk rename tool is recommended. (This step may not be necessary, but that is unconfirmed)
4. Delete `FileList.Gbx`

# Trackmania² Canyon / Stadium / Valley Workshop Installation
Workshop URL: http://steamcommunity.com/workshop/browse/?appid=232910

1. Download the mod using [Steam Workshop Downloader](http://steamworkshopdownloader.com/).
    1. If the mod is a car file tagged StadiumCar, move the .zip file to `Documents\ManiaPlanet\Skins\Models\StadiumCar\Downloaded`. If the `Downloaded` folder does not exist, create it.
    2. If the mod is a car file tagged CarCommon, move the .zip file to `Documents\ManiaPlanet\Skins\Models\CarCommon\Downloaded`. If the `Downloaded` folder does not exist, create it.
        * The same pattern might apply to cars tagged 'Working'
        * You might need to extract the .zip file.
    4. If it is a track file, move it to `Documents\ManiaPlanet\Maps\Downloaded`. If the `Downloaded` folder does not exist, create it.
2. The file name of the mod itself shows how the directory structure should be (just noting this for future reference)
3. Also, consider downloading your mods from http://www.maniapark.com/ instead. (However the installation process is slightly different)

# Cities Skylines Workshop Installation
Mods can be downloaded from [this post at cs.rin.ru](http://cs.rin.ru/forum/viewtopic.php?f=10&t=67326).

**INSTRUCTION WHERE TO PUT WORKSHOP MODS/ASSETS/MAPS**

HOW TO DO MODS (there is two methods - choose one):

METHOD 1.  
Put mod in your game folder -> `\Cities Skylines\Files\Mods\[MAKE A FOLDER]`  
If a mod doesn't have a folder then make it. Name it same as game file. And now put that file in the folder.  
Now this would look like this -> `\Cities Skylines\Files\Mods\AllSpacesUnlockable\AllSpacesUnlockable.dll`

METHOD 2.
`C:\Users\<USER NAME>\AppData\Local\Colossal Order\Cities_Skylines\Addons\Mods\[MAKE A FOLDER]`
If a mod doesn't have a folder then make it. Name it same as game file. And now put that file in the folder.
Now this would look like this -> `...\Cities Skylines\Addons\Mods\AllSpacesUnlockable\AllSpacesUnlockable.dll`

HOW TO DO ASSETS:
`C:\Users\<USER NAME>\AppData\Local\Colossal Order\Cities_Skylines\Addons\Assets\[PUT HERE FILES]`

HOW TO DO MAPS:
`C:\Users\<USER NAME>\AppData\Local\Colossal Order\Cities_Skylines\Maps\[PUT HERE FILES]`

# Portal 2 Workshop Installation

TODO. This is definitely possible.

# Postal 2 Workshop Installation

This used to be possible, but is no longer possible since the game no longer allows downloading of workshop items.

# Garry's Mod Asset Mount Tutorial

I found a way to mount Source games in Garry's mod without installing addons from other people
things you need:
1. Notepad++ (or a .cfg editor that works i recommend Notepad++)
2. The game you want to get assets from, i will get the assets from Half-Life 2 Episode 2 (You need to have the game downloaded on your Laptop,PC etc.)
----
OK so let's start
1. go to your Garry's mod folder (For me is C:\Program Files\Garrys mod\Garrysmod) (where the assets are located) then go to the folder called "cfg" after you done that open the file called "Mount.cfg" or "Mount" with a text editor i recommend to use notepad++, DO NOT USE MICROSOFT NOTEPAD

2. in Mount.cfg it should type this
```
//
// Use this file to mount additional paths to the filesystem
// DO NOT add a slash to the end of the filename
//

"mountcfg"
{
// "cstrike" "C:\steamcmd\steamapps\common\Counter-Strike Source Dedicated Server\cstrike"
// "tf" "C:\mytf2server\tf"
}
```

if you want to mount Team-Fortress 2 assets then remove the two slashes `//` from the start of tf, after you removed them, remove the `C:\mytf2server\tf` and replace with the location of where Team-Fotress 2 is located here is a example:

`"tf" "C:\Program Files\Steam\Steamapps\Team-Fotress 2\tf"`  
or  
`"tf" "C:\Program Files\Team-Fortress 2\tf"`

after you have put the location of team-fortress 2, you can start Garry's mod and you will have the maps,textures,spawnlist etc.

now what if you want with counter strike source or Half-Life 2 episode 1?
So here is the thing

every game has it's own folder with the game's content  
in Counter-Strike Source it have a folder called "cstrike"  
In Half-Life 2 episode 1 it has "episodic"  
and in Half-Life 2 Episode 2 it has "ep2"  
you have to add the folder name with the game content in the first line

if you want to mount Half-Life 2 episode 2  
add a new line in mount.cfg next to tf  
like this:

```
//
// Use this file to mount additional paths to the filesystem
// DO NOT add a slash to the end of the filename
//

"mountcfg"
{
// "cstrike" "C:\steamcmd\steamapps\common\Counter-Strike Source Dedicated Server\cstrike"
"tf" "C:\mytf2server\tf"
"ep2" "Half-Life2locationhere"
}```

replace the `Half-Life2locationhere` with Half-Life 2 Episode 2's location  
the location for me is `C:\Program Files\Half-Life 2\ep2`  
so it has to be like this 

```
//
// Use this file to mount additional paths to the filesystem
// DO NOT add a slash to the end of the filename
//

"mountcfg"
{
// "cstrike" "C:\steamcmd\steamapps\common\Counter-Strike Source Dedicated Server\cstrike"
"tf" "C:\mytf2server\tf"
"ep2" "C:\Program Files\Half-Life 2\ep2)
}```

and you don't have to mount the games in garry's mod after you did this, it will be automatically mounted

If you didn't understood PM me and i will be happy to help

and if you are new here you can open the spoilers and welcome to cs.rin.ru hope you have a great time

Things that you need to do  
1. Install the spawn lists for the games  
[Download Spawnlists](https://mega.nz/#!DdAUWIxI!Z4xfXUxZSUi1_6G22cp9SJhVjFmXjDvHosLw_mXsco4)  
extract the zip file and there will be a ton of .txt files you need to put them in `GarrysMod/garrysmod/settings/spawnlists​`  
then restart the game

and the new npc's won't appear in the npc tab, i will find a way to appear. The only way to spawn them is in console,

For hunter from half life 2 episode 2  
`npc_create npc_hunter`

# Other games

You can use a tool such as GreenLuma (discontinued) or Steam Nostalgia to make Steam think you own a game and download its items from the Workshop, but this won't work for all games.  
http://cs.rin.ru/forum/viewtopic.php?f=29&t=68783  
http://cs.rin.ru/forum/viewtopic.php?f=29&t=67096