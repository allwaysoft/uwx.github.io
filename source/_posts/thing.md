---
title: farming simulator 15 xbox thing
date: 2016-11-23 18:20:42
tags:
---

this is a remnant from forever ago; **beware: might suck**
i converted all sorts of shit with this method, the only thing i havent tested is lua mods

you need
* xlast (included in the xbox 360 sdk)

1. Click file > new
2. Click Content Package, ok then next
3. fill in all like so changing your directory to where ever you want your files to be built.
titleid for farm sim: 464507E1
other id jus use 0000007 (keep incrementing this for every mod you convert, you want it to be unique)
game name: Farming Simulator 15
type: in game content

4. click yes this is compatable with all versions of the game. then next.
5. select your language (this allows you to change the name displayed on the dashboard) then next.
6. this is where your type your mod name. type it in both boxes then click next.
7. click finish.
8. right click on content then add file.
here is the 64x64 icon i use for the dlc files iconfile.png
http://img651.imageshack.us/img651/2757/iconfile.png

9. create a pdlc folder then the mod folder inside
10. rename modDesc.xml to dlcDesc.xml inside all the folders
11. add your pdlc folder to the project (NOT the parent folder of the pdlc folder)
12. now you can build your dlc file. click on action > test on local xbox or just click locally.
13. rename your mod file in your build directory/online/ it will be called 425307E600000001 change it to whatever you want it to be called.
then just transfer it to your jtag via ftp, samba, or usb.
it goes in the content/0000000000000000/464507E1/00000002 folder.
