---
title:
altTitle: The Ultimate NFMM Java Guide
date: 2016-09-04 19:26:55
useGithubLayout: true
---

<style type="text/css">
.comic-header { font-family: 'Comic Sans MS'; font-size: 29px; line-height: normal; }
</style>
<div align="center" class="comic-header">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div><div align="center" class="comic-header"><span style='color:#FF0000;'>T</span><span style='color:#FF3600;'>h</span><span style='color:#FF6D00;'>e</span> <span style='color:#FFDA00;'>U</span><span style='color:#ECFF00;'>l</span><span style='color:#B6FF00;'>t</span><span style='color:#7FFF00;'>i</span><span style='color:#48FF00;'>m</span><span style='color:#12FF00;'>a</span><span style='color:#00FF24;'>t</span><span style='color:#00FF5B;'>e</span> <span style='color:#00FFC8;'>N</span><span style='color:#00FEFF;'>F</span><span style='color:#00C8FF;'>M</span><span style='color:#0091FF;'>M</span> <span style='color:#0024FF;'>J</span><span style='color:#1200FF;'>a</span><span style='color:#4800FF;'>v</span><span style='color:#7F00FF;'>a</span> <span style='color:#EC00FF;'>G</span><span style='color:#FF00DA;'>u</span><span style='color:#FF00A3;'>i</span><span style='color:#FF006D;'>d</span><span style='color:#FF0036;'>e</span></div><div align="center" class="comic-header">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>

## Table of Contents

(coming soon)

## NFMM Files

*OpenNFMM on GitHub*

<div align="center"><font color="#FF0000">&gt;</font><font color="#FF0F0F">&gt;</font><font color="#FF1E1E">&gt;</font><font color="#FF2D2D">&gt;</font><font color="#FF3C3C">&gt;</font><font color="#FF4B4B">&gt;</font><font color="#FF5A5A">&gt;</font><font color="#FF6969">&gt;</font><font color="#FF7878">&gt;</font><font color="#FF8787">&gt;</font><font color="#FF9696">&gt;</font><font color="#FFA5A5">&gt;</font><font color="#FFB4B4">&gt;</font><font color="#FFC3C3">&gt;</font><font color="#FFD2D2">&gt;</font><font color="#FFE1E1">&gt;</font><font color="#FFF0F0">&gt;</font> <a href="https://github.com/rafa1231518/OpenNFMM" class="postlink" target="_blank" rel="nofollow"><strong><font color="#FF0000">g</font><font color="#FF2E00">i</font><font color="#FF5C00">t</font><font color="#FF8B00">h</font><font color="#FFB900">u</font><font color="#FFE700">b</font><font color="#E7FF00">.</font><font color="#B9FF00">c</font><font color="#8BFF00">o</font><font color="#5CFF00">m</font><font color="#2EFF00">/</font><font color="#00FF00">c</font><font color="#00FF2E">h</font><font color="#00FF5C">r</font><font color="#00FF8B">i</font><font color="#00FFB9">s</font><font color="#00FFE7">h</font><font color="#00E7FF">a</font><font color="#00B9FF">n</font><font color="#008BFF">s</font><font color="#005CFF">e</font><font color="#002EFF">n</font><font color="#0000FF">6</font><font color="#2E00FF">9</font><font color="#5C00FF">/</font><font color="#8B00FF">O</font><font color="#B900FF">p</font><font color="#E700FF">e</font><font color="#FF00E7">n</font><font color="#FF00B9">N</font><font color="#FF008B">F</font><font color="#FF005C">M</font><font color="#FF002E">M</font></strong></a> <font color="#FFFFFF">&lt;</font><font color="#FFF0F0">&lt;</font><font color="#FFE1E1">&lt;</font><font color="#FFD2D2">&lt;</font><font color="#FFC3C3">&lt;</font><font color="#FFB4B4">&lt;</font><font color="#FFA5A5">&lt;</font><font color="#FF9696">&lt;</font><font color="#FF8787">&lt;</font><font color="#FF7878">&lt;</font><font color="#FF6969">&lt;</font><font color="#FF5A5A">&lt;</font><font color="#FF4B4B">&lt;</font><font color="#FF3C3C">&lt;</font><font color="#FF2D2D">&lt;</font><font color="#FF1E1E">&lt;</font><font color="#FF0F0F">&lt;</font></div>

*UNFIXED NFMM Setup. Hope you know what you're doing...*

<div align="center"><font color="#FF0000">&gt;</font><font color="#FF0F0F">&gt;</font><font color="#FF1E1E">&gt;</font><font color="#FF2D2D">&gt;</font><font color="#FF3C3C">&gt;</font><font color="#FF4B4B">&gt;</font><font color="#FF5A5A">&gt;</font><font color="#FF6969">&gt;</font><font color="#FF7878">&gt;</font><font color="#FF8787">&gt;</font><font color="#FF9696">&gt;</font><font color="#FFA5A5">&gt;</font><font color="#FFB4B4">&gt;</font><font color="#FFC3C3">&gt;</font><font color="#FFD2D2">&gt;</font><font color="#FFE1E1">&gt;</font><font color="#FFF0F0">&gt;</font> <a href="http://www.needformadness.com/download/win/Need-for-Madness.zip" class="postlink" target="_blank" rel="nofollow"><strong><font color="#FF0000">n</font><font color="#FF1D00">e</font><font color="#FF3A00">e</font><font color="#FF5800">d</font><font color="#FF7500">f</font><font color="#FF9300">o</font><font color="#FFB000">r</font><font color="#FFCD00">m</font><font color="#FFEB00">a</font><font color="#F5FF00">d</font><font color="#D7FF00">n</font><font color="#BAFF00">e</font><font color="#9CFF00">s</font><font color="#7FFF00">s</font><font color="#62FF00">.</font><font color="#44FF00">c</font><font color="#27FF00">o</font><font color="#09FF00">m</font><font color="#00FF13">/</font><font color="#00FF31">d</font><font color="#00FF4E">o</font><font color="#00FF6B">w</font><font color="#00FF89">n</font><font color="#00FFA6">l</font><font color="#00FFC4">o</font><font color="#00FFE1">a</font><font color="#00FEFF">d</font><font color="#00E1FF">/</font><font color="#00C4FF">w</font><font color="#00A6FF">i</font><font color="#0089FF">n</font><font color="#006BFF">/</font><font color="#004EFF">N</font><font color="#0031FF">e</font><font color="#0013FF">e</font><font color="#0900FF">d</font><font color="#2700FF">-</font><font color="#4400FF">f</font><font color="#6200FF">o</font><font color="#7F00FF">r</font><font color="#9C00FF">-</font><font color="#BA00FF">M</font><font color="#D700FF">a</font><font color="#F500FF">d</font><font color="#FF00EB">n</font><font color="#FF00CD">e</font><font color="#FF00B0">s</font><font color="#FF0093">s</font><font color="#FF0075">.</font><font color="#FF0058">z</font><font color="#FF003A">i</font><font color="#FF001D">p</font></strong></a> <font color="#FFFFFF">&lt;</font><font color="#FFF0F0">&lt;</font><font color="#FFE1E1">&lt;</font><font color="#FFD2D2">&lt;</font><font color="#FFC3C3">&lt;</font><font color="#FFB4B4">&lt;</font><font color="#FFA5A5">&lt;</font><font color="#FF9696">&lt;</font><font color="#FF8787">&lt;</font><font color="#FF7878">&lt;</font><font color="#FF6969">&lt;</font><font color="#FF5A5A">&lt;</font><font color="#FF4B4B">&lt;</font><font color="#FF3C3C">&lt;</font><font color="#FF2D2D">&lt;</font><font color="#FF1E1E">&lt;</font><font color="#FF0F0F">&lt;</font></div>

## Setting up your NFMM project in Eclipse

:::
Firstly, download Eclipse. No more BlueJ. If you want to use BlueJ, annoy Kappanated until he makes a separate tutorial. Download the version corresponding to your computer. If you're not sure, download the 32-bit version.

<img src="http://i.imgur.com/ORXUN5V.png">

Now, in Eclipse, set up your project:

<img src="http://i.imgur.com/ceWyLVR.png">

Name it anything, and set the location to somewhere you'll remember. You can use the default location too.

<img src="http://i.imgur.com/qaCpREo.png">

Now, delete the default src folder Eclipse creates, since we won't need it for now.

<img src="http://i.imgur.com/vuKxHDA.png">

Copy all files from the Fixed NFMM files (above) into your project folder. Replace everything.

Now, in Eclipse's Package Explorer, right click on an empty space and select refresh or press F5.

<img src="http://i.imgur.com/TkO26CB.png">

Hopefully, the NFMM files should be there.

<img src="http://i.imgur.com/aRagqxL.png">

Now, double click Madness.java to open it and click the green button at the top to run it.

<img src="http://i.imgur.com/esfhBF0.png">

If everything loads, congratulations! You now have a working copy of NFMM, fully featured with a car maker and stage maker and LAN multiplayer!

<img src="http://i.imgur.com/RdAQmzE.png">

<p></p><p></p>

**Some things to note:**
* The class you should run is Madness, never GameSparker. This is because, in NFMM, the game runs inside of a JFrame, which allows the Car Maker, Stage Maker, Antialiasing and Motion Effects buttons to work, and reduces incompatibility with newer Java versions.
* You should play this NFM using the newest Java JDK/JRE versions, do not use old Java 7 versions!
* 99% of the NFM2 tutorials won't work! A lot has changed since NFM2's release!
* LAN multiplayer works, but there is no chat, no clans and no multiplayer dome. You do not require a full account to play, and the 3 game limit has been removed. I am not going to add online multiplayer, at least not until Omar closes down the official servers.
* Keep in mind that this is not the final version of the files, and although they've been cleaned up a little bit, they need heavy improvement.
* The car and stage limit have been hacked. There is one limit, which is sort of hardcoded into Medium, but I'd rather not mess with it.
:::

## Graphical Hacks

### Adding credits screens
:::
Go into xtGraphics, and find void credits. Look for this:
```java
if (this.flipo == 103) {
				this.flipo = 0;
```
Add to the 103 for every screen you're adding.
Above that, find this:
```java
if (this.flipo == 102) {
```
Add to the 102 for every screen you're adding.
Above that, copy all the code under
```java
if (this.flipo == 101) {
```
and paste it below that, and change the 101 to 102 etc. depending on how many screens you're adding. Customize it to your liking.
:::

### Changing the resolution
:::
Go into GameSparker, add this at the top:
```java
final int width = 1024;
	final int height = 512;
```
replace the 1024 and 512 with the resolution you want.
replace all instances of
```java
800, 450
```
with
```java
width, height
```
do the same thing for
```java
670, 400
```
find:
```java
		final Medium medium = new Medium();
```
replace that with:
```java
		final Medium medium = new Medium(this);
```
Go into Madness, and find this:
```java
		frame.setMinimumSize(new Dimension(930, 586));
		frame.setSize(930, 586);
```
replace the 930, 586 with the resolution you want.

Go into Medium, find
```java
	int cx = 400;
	int cy = 225;
```
replace that with:
```java
	int cx;
	int cy;
```
find
```java
	int w = 800;
	int h = 450;
```
replace with
```java
	int w;
	int h;
```
find
```java
public Medium() {
```
add this to it:
```java
		cx = 400;
		cy = 225;
		w = 800;
		h = 450;
```
now, before that public Medium() { add this:
```java
	public Medium(GameSparker gs) {
		cx = gs.width/2;
		cy = gs.height/2;
		w = gs.width;
		h = gs.height;
		for (int i = 0; i < 360; i++)
			tcos[i] = (float) Math.cos(i * 0.017453292519943295);
		for (int i = 0; i < 360; i++)
			tsin[i] = (float) Math.sin(i * 0.017453292519943295);
	}
```
in xtGraphics, find
```java
int[] smokey = new int[94132];
```
replace the 94132 with the width times the height of the resolution you're using.
now find
```java
	public xtGraphics(final Medium medium, final CarDefine cardefine, final Graphics2D graphics2d,
			final GameSparker gamesparker) {
```
add this right after the first {
```java
width = gamesparker.width;
		height = gamesparker.height;
```
now, replace all instances of
```java
800, 450
```
with
```java
width, height
```
do the same thing for
```java
670, 400
```
find
```java
flexpix = new int[360000];
```
replace the 360000 with the width times the height of the resolution you're using.
do the same thing for
```java
for (int i306 = 0; i306 < 1048576; i306++) {
```
and
```java
for (int i346 = 0; i346 < 1048576; i346++) {
```
and
```java
final int[] is = new int[360000];
```
and
```java
for (int i356 = 0; i356 < 360000; i356++) {
```

you're done!
:::

### Instant car select
:::
in xtgraphics, find:
```java
if (control.right) {
				control.right = false;
				if (sc[0] != maxsl && flipo == 0) {
					if (flatrstart > 1)
						flatrstart = 0;
					nextc = 1;
					flipo = 20;
				}
			}
			if (control.left) {
				control.left = false;
				if (sc[0] != minsl && flipo == 0) {
					if (flatrstart > 1)
						flatrstart = 0;
					nextc = -1;
					flipo = 20;
				}
			}
```
replace with:
```java
if(control.right)
	        {
	            control.right = false;
	            if(sc[0] != maxsl)
	            	sc[0]++;
	        }
	        if(control.left)
	        {
	            control.left = false;
	            if(sc[0] != minsl)
	            	sc[0]--;
	        }
```### Adding random colors for AI cars[spoiler="]Go into xtGraphics, add this before (or after) void colorCar:
```java
public void colorCarSP(final ContO conto, final int i) {
		if (i == 0) //player
			for (int i132 = 0; i132 < conto.npl; i132++) {
				if (conto.p[i132].colnum == 1) {
					final Color color = Color.getHSBColor(arnp[0], arnp[1], 1.0F - arnp[2]);
					conto.p[i132].oc[0] = color.getRed();
					conto.p[i132].oc[1] = color.getGreen();
					conto.p[i132].oc[2] = color.getBlue();
				}
				if (conto.p[i132].colnum == 2) {
					final Color color = Color.getHSBColor(arnp[3], arnp[4], 1.0F - arnp[5]);
					conto.p[i132].oc[0] = color.getRed();
					conto.p[i132].oc[1] = color.getGreen();
					conto.p[i132].oc[2] = color.getBlue();
				}
			}
		else {//bot
			final int colr = (int) Math.round(Math.random() * 255);
			final int colg = (int) Math.round(Math.random() * 255);
			final int colb = (int) Math.round(Math.random() * 255);
			final int scolr = (int) Math.round(Math.random() * 255);
			final int scolg = (int) Math.round(Math.random() * 255);
			final int scolb = (int) Math.round(Math.random() * 255);
			for (int i133 = 0; i133 < conto.npl; i133++) {
				if (conto.p[i133].colnum == 1) {
					conto.p[i133].oc[0] = colr;
					conto.p[i133].oc[1] = colg;
					conto.p[i133].oc[2] = colb;
				}
				if (conto.p[i133].colnum == 2) {
					conto.p[i133].oc[0] = scolr;
					conto.p[i133].oc[1] = scolg;
					conto.p[i133].oc[2] = scolb;
				}
			}
		}
	}
```Now go into GameSparker and find this:
```java
if (xtgraphics.fase == 22)
					xtgraphics.colorCar(contos108[xtgraphics.sc[i145]], i145);
```Replace that with this:
```java
if (xtgraphics.fase == 22)
					xtgraphics.colorCar(contos108[xtgraphics.sc[i145]], i145);
				else
					xtgraphics.colorCarSP(contos108[xtgraphics.sc[i145]], i145);
```
:::

### Customize polygon outlines
:::
Go into a .rad file, go to the polygon you want and add this after the &lt;p&gt;:

```java
customOutline()
```
This will enable custom outlines. Now, this won't actually do anything since it's still using the default settings. To change them, add any of these (you can add multiple and mix them) below customOutline:

`$outlineW(number)` - changes the outline width (default is 1)
`$outlineCap(butt)` or `$outlineCap(round)` or `$outlineCap(square)` - changes the dash segments' end algorithm (default is butt)
`$outlineJoin(bevel)` or `$outlineJoin(miter)` or `$outlineJoin(round)` - changes the path segments' connections (default is miter)
`$outlineMtlimit(number)` - if you used `$outlineJoin(miter)`, this is how far the dash will go to extend its outside edges until 2 ends meet (default is 10)
:::

### Stage on fire/Cars on fire
:::
Go to the end of void loadstage in GameSparker and add this before `System.gc();`

#### Stage on fire
```java

if (checkpoints.stage == 1)
        for (int k = 0; k < nob; k++)
            for (int j = 0; j < contos[k].npl; j++)
                contos[k].p[j].embos = 1;
```
`checkpoints.stage == 1` means Stage 1 will be on fire. If you want more than one stage, you can do something like this:
`if (checkpoints.stage == 1 || checkpoints.stage == 2)`
This would make Stage 1 and Stage 2 be on fire.

#### Cars on fire
```java
if (checkpoints.stage == 1)
        for (int k = 0; k < xtgraphics.nplayers; k++)
            for (int j = 0; j < contos[k].npl; j++)
                contos[k].p[j].embos = 1;
```
`checkpoints.stage == 1` means the cars in Stage 1 will be on fire. If you want more than one stage, you can do something like this:
`if (checkpoints.stage == 1 || checkpoints.stage == 2)`
This would make the cars in Stage 1 and Stage 2 be on fire.
:::

## Core Hacks

### Floating track pieces
:::
Find:
```java
if (string.startsWith("set")) {
                    int i124 = getint("set", string, 0);
                    if (xtgraphics.nplayers == 8) {
                        if (i124 == 47)
                            i124 = 76;
                        if (i124 == 48)
                            i124 = 77;
                    }
                    boolean bool = true;
                    if (i124 >= 65 && i124 <= 75 && checkpoints.notb)
                        bool = false;
                    if (bool) {
                        if (i124 == 49 || i124 == 64 || i124 >= 56 && i124 <= 61)
                            xtgraphics.newparts = true;
                        if ((checkpoints.stage < 0 || checkpoints.stage >= 28) && i124 >= 10 && i124 <= 25)
                            medium.loadnew = true;
                        i124 += partskips - 10;
                        contos[nob] = new ContO(contos108[i124], getint("set", string, 1),
                                medium.ground - contos108[i124].grat, getint("set", string, 2),
                                getint("set", string, 3));
                        if (string.indexOf(")p") != -1) {
                            checkpoints.x[checkpoints.n] = getint("set", string, 1);
                            checkpoints.z[checkpoints.n] = getint("set", string, 2);
                            checkpoints.y[checkpoints.n] = 0;
                            checkpoints.typ[checkpoints.n] = 0;
                            if (string.indexOf(")pt") != -1)
                                checkpoints.typ[checkpoints.n] = -1;
                            if (string.indexOf(")pr") != -1)
                                checkpoints.typ[checkpoints.n] = -2;
                            if (string.indexOf(")po") != -1)
                                checkpoints.typ[checkpoints.n] = -3;
                            if (string.indexOf(")ph") != -1)
                                checkpoints.typ[checkpoints.n] = -4;
                            if (string.indexOf("out") != -1)
                                System.out
                                        .println(new StringBuilder().append("out: ").append(checkpoints.n).toString());
                            checkpoints.n++;
                            notb = nob + 1;
                        }
                        nob++;
                        if (medium.loadnew)
                            medium.loadnew = false;
                    }
                }
```
add this below it:
```java

if (string.startsWith("fset")) {
                    int i124 = getint("fset", string, 0);
                    if (xtgraphics.nplayers == 8) {
                        if (i124 == 47)
                            i124 = 76;
                        if (i124 == 48)
                            i124 = 77;
                    }
                    boolean bool = true;
                    if (i124 >= 65 && i124 <= 75 && checkpoints.notb)
                        bool = false;
                    if (bool) {
                        if (i124 == 49 || i124 == 64 || i124 >= 56 && i124 <= 61)
                            xtgraphics.newparts = true;
                        if ((checkpoints.stage < 0 || checkpoints.stage >= 28) && i124 >= 10 && i124 <= 25)
                            medium.loadnew = true;
                        i124 += partskips - 10;
                        contos[nob] = new ContO(contos108[i124], getint("fset", string, 1),
                                getint("fset", string, 3), getint("fset", string, 2),
                                getint("fset", string, 4));
                        if (string.indexOf(")p") != -1) {
                            checkpoints.x[checkpoints.n] = getint("fset", string, 1);
                            checkpoints.z[checkpoints.n] = getint("fset", string, 2);
                            checkpoints.y[checkpoints.n] = getint("fset", string, 3);
                            checkpoints.typ[checkpoints.n] = 0;
                            if (string.indexOf(")pt") != -1)
                                checkpoints.typ[checkpoints.n] = -1;
                            if (string.indexOf(")pr") != -1)
                                checkpoints.typ[checkpoints.n] = -2;
                            if (string.indexOf(")po") != -1)
                                checkpoints.typ[checkpoints.n] = -3;
                            if (string.indexOf(")ph") != -1)
                                checkpoints.typ[checkpoints.n] = -4;
                            if (string.indexOf("out") != -1)
                                System.out
                                        .println(new StringBuilder().append("out: ").append(checkpoints.n).toString());
                            checkpoints.n++;
                            notb = nob + 1;
                        }
                        nob++;
                        if (medium.loadnew)
                            medium.loadnew = false;
                    }
                }
```
To make flying pieces, use `fset(MODEL,X,Z,Y,ROTATION)`
:::

## Gameplay Hacks

### Teleport hack
:::
In ContO, find public void fixit and add this before it:

```java
    public void teleflash(Graphics2D rd)
        {
            int ai[] = new int[8];
            int ai1[] = new int[8];
            int ai2[] = new int[4];
            int j1 = 0;
            do
            {
                ai[j1] = (keyx[j1] + x) - m.x;
                ai1[j1] = (grat + y) - m.y;
                ai2[j1] = (keyz[j1] + z) - m.z;
            } while(++j1 < 4);
            rot(ai, ai1, x - m.x, y - m.y, xy, 4);
            rot(ai1, ai2, y - m.y, z - m.y, zy, 4);
            rot(ai, ai2, x - m.x, z - m.z, xz, 4);
            rot(ai, ai2, m.cx, m.cz, m.xz, 4);
            rot(ai1, ai2, m.cy, m.cz, m.zy, 4);
            j1 = 0;
            int l1 = 0;
            int i2 = 0;
            int j2 = 0;
            do
            {
                int k2 = 0;
                do
                {
                    if(Math.abs(ai[j2] - ai[k2]) > j1)
                    {
                        j1 = Math.abs(ai[j2] - ai[k2]);
                    }
                    if(Math.abs(ai1[j2] - ai1[k2]) > l1)
                    {
                        l1 = Math.abs(ai1[j2] - ai1[k2]);
                    }
                    if(py(ai[j2], ai[k2], ai1[j2], ai1[k2]) > i2)
                    {
                        i2 = py(ai[j2], ai[k2], ai1[j2], ai1[k2]);
                    }
                } while(++k2 < 4);
            } while(++j2 < 4);
            i2 = (int)(Math.sqrt(i2) / 1.5D);
            if(j1 < i2)
            {
                j1 = i2;
            }
            if(l1 < i2)
            {
                l1 = i2;
            }
            j2 = m.cx + (int)((float)(x - m.x - m.cx) * m.cos(m.xz) - (float)(z - m.z - m.cz) * m.sin(m.xz));
            int l2 = m.cz + (int)((float)(x - m.x - m.cx) * m.sin(m.xz) + (float)(z - m.z - m.cz) * m.cos(m.xz));
            int i3 = m.cy + (int)((float)(y - m.y - m.cy) * m.cos(m.zy) - (float)(l2 - m.cz) * m.sin(m.zy));
            l2 = m.cz + (int)((float)(y - m.y - m.cy) * m.sin(m.zy) + (float)(l2 - m.cz) * m.cos(m.zy));
            ai[0] = xs((int)((double)j2 - (double)j1 / 0.80000000000000004D - (double)m.random() * ((double)j1 / 2.3999999999999999D)), l2);
            ai1[0] = ys((int)((double)i3 - (double)l1 / 1.9199999999999999D - (double)m.random() * ((double)l1 / 5.6699999999999999D)), l2);
            ai[1] = xs((int)((double)j2 - (double)j1 / 0.80000000000000004D - (double)m.random() * ((double)j1 / 2.3999999999999999D)), l2);
            ai1[1] = ys((int)((double)i3 + (double)l1 / 1.9199999999999999D + (double)m.random() * ((double)l1 / 5.6699999999999999D)), l2);
            ai[2] = xs((int)((double)j2 - (double)j1 / 1.9199999999999999D - (double)m.random() * ((double)j1 / 5.6699999999999999D)), l2);
            ai1[2] = ys((int)((double)i3 + (double)l1 / 0.80000000000000004D + (double)m.random() * ((double)l1 / 2.3999999999999999D)), l2);
            ai[3] = xs((int)((double)j2 + (double)j1 / 1.9199999999999999D + (double)m.random() * ((double)j1 / 5.6699999999999999D)), l2);
            ai1[3] = ys((int)((double)i3 + (double)l1 / 0.80000000000000004D + (double)m.random() * ((double)l1 / 2.3999999999999999D)), l2);
            ai[4] = xs((int)((double)j2 + (double)j1 / 0.80000000000000004D + (double)m.random() * ((double)j1 / 2.3999999999999999D)), l2);
            ai1[4] = ys((int)((double)i3 + (double)l1 / 1.9199999999999999D + (double)m.random() * ((double)l1 / 5.6699999999999999D)), l2);
            ai[5] = xs((int)((double)j2 + (double)j1 / 0.80000000000000004D + (double)m.random() * ((double)j1 / 2.3999999999999999D)), l2);
            ai1[5] = ys((int)((double)i3 - (double)l1 / 1.9199999999999999D - (double)m.random() * ((double)l1 / 5.6699999999999999D)), l2);
            ai[6] = xs((int)((double)j2 + (double)j1 / 1.9199999999999999D + (double)m.random() * ((double)j1 / 5.6699999999999999D)), l2);
            ai1[6] = ys((int)((double)i3 - (double)l1 / 0.80000000000000004D - (double)m.random() * ((double)l1 / 2.3999999999999999D)), l2);
            ai[7] = xs((int)((double)j2 - (double)j1 / 1.9199999999999999D - (double)m.random() * ((double)j1 / 5.6699999999999999D)), l2);
            ai1[7] = ys((int)((double)i3 - (double)l1 / 0.80000000000000004D - (double)m.random() * ((double)l1 / 2.3999999999999999D)), l2);


                rot(ai, ai1, xs(j2, l2), ys(i3, l2), 22, 8);


            //FIX HOOP COLOR
            int j3 = (int)(25F + 25F * ((float)m.snap[0] / 200F));
            if(j3 > 25)
            {
                j3 = 25;
            }
            if(j3 < 0)
            {
                j3 = 0;
            }
            int k3 = (int)(0F + 0F * ((float)m.snap[1] / 200F));
            if(k3 > 0)
            {
                k3 = 0;
            }
            if(k3 < 0)
            {
                k3 = 0;
            }
            int l3 = (int)(0F + 0F * ((float)m.snap[2] / 200F));
            if(l3 > 0)
            {
                l3 = 0;
            }
            if(l3 < 0)
            {
                l3 = 0;
            }
            rd.setColor(new Color(j3, k3, l3));
            rd.fillPolygon(ai, ai1, 8);
            ai[0] = xs((int)((float)(j2 - j1) - m.random() * (float)(j1 / 4)), l2);
            ai1[0] = ys((int)((double)i3 - (double)l1 / 2.3999999999999999D - (double)m.random() * ((double)l1 / 9.5999999999999996D)), l2);
            ai[1] = xs((int)((float)(j2 - j1) - m.random() * (float)(j1 / 4)), l2);
            ai1[1] = ys((int)((double)i3 + (double)l1 / 2.3999999999999999D + (double)m.random() * ((double)l1 / 9.5999999999999996D)), l2);
            ai[2] = xs((int)((double)j2 - (double)j1 / 2.3999999999999999D - (double)m.random() * ((double)j1 / 9.5999999999999996D)), l2);
            ai1[2] = ys((int)((float)(i3 + l1) + m.random() * (float)(l1 / 4)), l2);
            ai[3] = xs((int)((double)j2 + (double)j1 / 2.3999999999999999D + (double)m.random() * ((double)j1 / 9.5999999999999996D)), l2);
            ai1[3] = ys((int)((float)(i3 + l1) + m.random() * (float)(l1 / 4)), l2);
            ai[4] = xs((int)((float)(j2 + j1) + m.random() * (float)(j1 / 4)), l2);
            ai1[4] = ys((int)((double)i3 + (double)l1 / 2.3999999999999999D + (double)m.random() * ((double)l1 / 9.5999999999999996D)), l2);
            ai[5] = xs((int)((float)(j2 + j1) + m.random() * (float)(j1 / 4)), l2);
            ai1[5] = ys((int)((double)i3 - (double)l1 / 2.3999999999999999D - (double)m.random() * ((double)l1 / 9.5999999999999996D)), l2);
            ai[6] = xs((int)((double)j2 + (double)j1 / 2.3999999999999999D + (double)m.random() * ((double)j1 / 9.5999999999999996D)), l2);
            ai1[6] = ys((int)((float)(i3 - l1) - m.random() * (float)(l1 / 4)), l2);
            ai[7] = xs((int)((double)j2 - (double)j1 / 2.3999999999999999D - (double)m.random() * ((double)j1 / 9.5999999999999996D)), l2);
            ai1[7] = ys((int)((float)(i3 - l1) - m.random() * (float)(l1 / 4)), l2);
            //CARFIX COLOR #2
            j3 = (int)(255F + 255F * ((float)m.snap[0] / 200F));
            if(j3 > 255)
            {
                j3 = 255;
            }
            if(j3 < 0)
            {
                j3 = 0;
            }
            k3 = (int)(25F + 25F * ((float)m.snap[1] / 200F));
            if(k3 > 255)
            {
                k3 = 255;
            }
            if(k3 < 0)
            {
                k3 = 0;
            }
            l3 = (int)(25F + 25F * ((float)m.snap[2] / 200F));
            if(l3 > 255)
            {
                l3 = 255;
            }
            if(l3 < 0)
            {
                l3 = 0;
            }
            rd.setColor(new Color(j3, k3, l3));
            rd.fillPolygon(ai, ai1, 8);
        }
```

Add this to the top of Control:

```java
    boolean tele = false;
```

Add this to public Control:

```java
    tele = false;
```

Add this to public void reset:

```java
    tele = false;
```

Find all instances of:

```java
    xtgraphics.stat(mads[0], contos0[0], checkpoints, u[0], true);
```

and

```java
    xtgraphics.stat(mads[0], contos0[0], checkpoints, u[0], false);
```

and

```java
    xtgraphics.stat(mads[xtgraphics.im], contos0[xtgraphics.im], checkpoints, u[0],
                                    false);
```
and

```java
    xtgraphics.stat(mads[xtgraphics.im], contos0[xtgraphics.im], checkpoints, u[0],
                                    true);
```

And add this right after them:

```java
    xtgraphics.attack(rd, contos0, u[0]);
```

Now, find this:

```java
    if (e.getKeyCode() == KeyEvent.VK_V) {
                    view++;
                    if (view == 3)
                        view = 0;
                }
```

and add this right after it:

```java
    if (e.getKeyCode() == KeyEvent.VK_C)
                    u[0].tele = true;
```

Find this:

```java
                    if (e.getKeyCode() == KeyEvent.VK_SPACE)
                        u[0].handb = false;
```

and add this right after it:

```java
    if (e.getKeyCode() == KeyEvent.VK_C)
                        u[0].tele = false;
```

Now, go to xtGraphics and find:

```java
    int[] zstart = {
                -760, -380, -380, 0, 380, 380, 760, 0
        };
```

and add this right after it:

```java
    private int arrowvar = -1;
```

Now, find this:

```java
    public void arrow(final int i, final int i216, final CheckPoints checkpoints, final boolean bool) {
            final int[] is = new int[7];
            final int[] is217 = new int[7];
            final int[] is218 = new int[7];
            final int i219 = 400;
            final int i220 = -90;
            final int i221 = 700;
            for (int i222 = 0; i222 < 7; i222++)
                is217[i222] = i220;
            is[0] = i219;
            is218[0] = i221 + 110;
            is[1] = i219 - 35;
            is218[1] = i221 + 50;
            is[2] = i219 - 15;
            is218[2] = i221 + 50;
            is[3] = i219 - 15;
            is218[3] = i221 - 50;
            is[4] = i219 + 15;
            is218[4] = i221 - 50;
            is[5] = i219 + 15;
            is218[5] = i221 + 50;
            is[6] = i219 + 35;
            is218[6] = i221 + 50;
            int i224;
            if (!bool) {
    			// ...
            }
    }
```

Add this right after it:

```java
                arrowvar = -1;
```

Then find:

```java
    } else
                    i226 = alocked;
```

Add this right after it:

```java
    arrowvar = i226;
```

Now, add this before public void stat:

```java
        public void attack(Graphics2D rd, ContO conto[], Control control)
      {
          if(control.tele && arrowvar != -1)
          {
              conto[im].teleflash(rd);

              conto[im].x = conto[arrowvar].x;// + 400;
              conto[im].z = conto[arrowvar].z;// - 400;
              ///conto[im].y = conto[arrowvar].y; ////this makes it really overpowered (lel like its not already), plus glitchy

              // you can add some other features here, for example:
              // conto[im].xz = conto[arrowvar].xz; // this will rotate the player to the angle of the teleported car

              wasay = true;
              say = "Sucessfully teleported to " + cd.names[sc[arrowvar]];

              tcnt = -5;
          }
      }
```
:::

## Control Hacks

### Disabling AB
:::
Go into GameSparker and find this:

```java
if (e.getKeyCode() == KeyEvent.VK_UP)
u[0].up = true;
if (e.getKeyCode() == KeyEvent.VK_DOWN)
u[0].down = true;
```
Replace it with this:

```java
if (e.getKeyCode() == KeyEvent.VK_UP) {
u[0].down = false;
u[0].up = true;
}
if (e.getKeyCode() == KeyEvent.VK_DOWN) {
u[0].up = false;
u[0].down = true;
}
```
:::

## Stat Hacks

### The Car Stats (in NFMM)
:::
**acelf** - The Acceleration stat.
*3 values inside of it, first value being how fast the car can move from rest (not moving). Second and third value meaning how much speed it gains while the car is moving (Higher number means faster).*
```java
float[][] acelf = { { 11.0F, 5.0F, 5.0F }, { 14.0F, 7.0F, 5.0F }, { 10.0F, 5.0F, 8.0F }, { 11.0F, 6.0F, 8.0F },
            { 10.0F, 5.0F, 8.0F }, { 12.0F, 6.0F, 5.0F }, { 7.0F, 9.0F, 4.0F }, { 11.0F, 5.0F, 5.0F },
            { 12.0F, 7.0F, 4.0F }, { 12.0F, 7.0F, 8.0F }, { 11.5F, 6.5F, 8.0F }, { 9.0F, 5.0F, 5.0F },
            { 13.0F, 7.0F, 4.5F }, { 13.0F, 8.0F, 5.0F }, { 11.0F, 13.0F, 4.0F }, { 12.0F, 6.0F, 8.0F },
            { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F },
            { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F },
            { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F },
            { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F },
            { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F },
            { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F },
            { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F },
            { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F },
            { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F },
            { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F }, { 0.0F, 0.0F, 0.0F } };
```

**acname** - Added car name.
*Used for custom cars, should not be touched.*
```java
String acname = "Radical One";
```

**adds** - Top 20 adds.
*How many people added car X (displayed on the "Top 20 cars" screen). Should not be touched.*
```java
int[] adds = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

```
**bounce** - The bounciness of your car (mainly the wheels). 
*The higher the value, the more bouncy they are.*
```java
float[] bounce = { 1.2F, 1.05F, 1.3F, 1.15F, 1.3F, 1.2F, 1.15F, 1.1F, 1.2F, 1.1F, 1.15F, 0.8F, 1.05F, 0.8F, 1.1F,
            1.15F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F };
```

**cclass** - Car class.
**0** = _Class C_
**1** = _Class B & C_
**2** = _Class B_
**3** = _Class A & B_
**4** = _Class A_
```java
int[] cclass = { 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
```

***clrad** - Collision Radius.
_Clrad is the radius around each point that gets collided._
_So if you have a car with many points, you need the **clrad** to be low or it will get damaged very fast as so many points will get affected._
_If a car has low points you need the **clrad** to be bigger so the damage reaches other points or else the car will be indestructible._
```java
    int[] clrad = { 3300, 1700, 4700, 3000, 2000, 4500, 3500, 5000, 10000, 15000, 4000, 7000, 10000, 15000, 5500, 5000,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0 };

```
**comprad** - Tolerance towards other Cars.
*This is what makes a car prone to getting hit by other cars.*
```java
﻿float[] comprad = { 0.5F, 0.4F, 0.8F, 0.5F, 0.4F, 0.5F, 0.5F, 0.5F, 0.5F, 0.8F, 0.5F, 1.5F, 0.5F, 0.8F, 0.5F, 0.8F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F };

```
**dammult** - Damage Multiplier.
_The amount of damage based on the hit that should affect the points in the **clrad** around the point of collision._
```java
﻿float[] dammult = { 0.75F, 0.8F, 0.45F, 0.8F, 0.42F, 0.7F, 0.72F, 0.6F, 0.58F, 0.41F, 0.67F, 0.45F, 0.61F, 0.01F,
            0.38F, 0.52F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F };
```

**dishandle** - The Handling statbar.
*Does not affect the actual car's handling, just like in the Car Maker.*
```java
float[] dishandle = { 0.65F, 0.6F, 0.55F, 0.77F, 0.62F, 0.9F, 0.6F, 0.72F, 0.45F, 0.8F, 0.95F, 0.4F, 0.87F, 0.42F,
            1.0F, 0.95F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F };
```

**enginsignature** - Engine sound effect.
**0** = _Normal Engine_
**1** = _V8 Engine_
**2** = _Retro Engine_
**3** = _Power Engine_
**4** = _Diesel Engine_
```java
int[] enginsignature = { 0, 1, 2, 1, 0, 3, 2, 2, 1, 0, 3, 4, 1, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
```

**flipy** - The height at which your car will be put at after recovering from a Bad Landing.
```java
int[] flipy = { -50, -60, -92, -44, -60, -57, -54, -60, -77, -57, -82, -85, -28, -100, -63, -127, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
```

**grip** - Tire Traction.
__Drifter X has this low.__ The higher the grip, the less it slides and spins out and the less it drifts.
__Also note__: This stat somehow affects the Acceleration statbar, but not the car's Acceleration.
```java
float[] grip = { 20.0F, 27.0F, 18.0F, 22.0F, 19.0F, 20.0F, 25.0F, 20.0F, 19.0F, 24.0F, 22.5F, 25.0F, 30.0F, 27.0F,
            25.0F, 27.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F };
```

**handb** - The handbrake power.
*Basically, the braking power. Any negative value, would make you shoot forward instead of backward.*
*The reason being is that when the speed is 100 for example and you subtract negative a handb value, you add to it instead of subtract.*
*7 is the lowest handb you should use.*
```java
int[] handb = { 7, 10, 7, 15, 12, 8, 9, 10, 5, 7, 8, 10, 8, 12, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
```

**lcardate **- The date a custom car was added to your account [sup](?)[/sup]
```java
int[] lcardate = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
```

**lift** - Lifts Others
*This defines if the car lifts up other cars when it collides with them from the front and*
*how high it can lift them.*
*Does the car have a pointy nose like MAX Revenge, Radical One or La Vita Crab, a*
*pointy nose/front part that can go under the wheels of other cars and lift them?*
*If so then give it some Lifts Others.*
*If it has a nose/front part that is a block like most cars then give it 0 Lifts Others.*
```java
int[] lift = { 0, 30, 0, 20, 0, 30, 0, 0, 20, 0, 0, 0, 10, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

```
**maxmag** - Maximum Damage.
*The amount of Damage that a car can take before it is considered as "wasted".*
```java
int[] maxmag = { 7600, 4200, 7200, 6000, 6000, 15000, 17200, 17000, 18000, 11000, 19000, 10700, 13000, 9999999,
            5800, 18000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0 };
```

**moment** - A cars' actual strength.
*This does not affect the strength statbar in the __Car Select__ menu. See* **outdam** *for that.*
```java
float[] moment = { 1.3F, 0.75F, 1.4F, 1.2F, 1.1F, 1.38F, 1.43F, 1.48F, 1.35F, 1.7F, 1.42F, 2.0F, 1.26F, 5.0F, 1.5F,
            2.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F };
```

**msquash** - Roof Destruction.
*The amount of breakage that can happen to a cars' top.*
```java
int[] msquash = { 7, 4, 7, 2, 8, 4, 6, 4, 3, 8, 4, 10, 3, 20, 3, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

```
**names** - The names of all the cars.
```java
String[] names = { "Tornado Shark", "Formula 7", "Wow Caninaro", "La Vita Crab", "Nimi", "MAX Revenge",
            "Lead Oxide", "Kool Kat", "Drifter X", "Sword of Justice", "High Rider", "EL KING", "Mighty Eight",
            "M A S H E E N", "Radical One", "DR Monstaa", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
            "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" };
```

**outdam** - Strength statbar.
*Just changes the Strength statbar according to the value the game reads.*
*NOT affected by **moment**.*
```java
float[] outdam = { 0.68F, 0.35F, 0.8F, 0.5F, 0.42F, 0.76F, 0.82F, 0.76F, 0.72F, 0.62F, 0.79F, 0.95F, 0.77F, 1.0F,
            0.85F, 1.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F };
```

**powerloss** - Endurance.
```java
int[] powerloss = { 2500000, 2500000, 3500000, 2500000, 4000000, 2500000, 3200000, 3200000, 2750000, 5500000,
            2750000, 4500000, 3500000, 4500000, 3000000, 5500000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
```

**push** - Pushes Others.
*This defines if the car pushes other cars away when it collides with them and how far it*
*can push them.*
*Is the car a heavy car with a strong body like MASHEEN or El King, where when it*
*collides with other cars it pushes them away?*
*Or does the car have special bumpers or body parts for pushing cars away like Sword of*
*Justice has?*
*If so then give it some Pushes Others depending how strong you think it can push cars.*
*If it is a car like any other car, with an average weight and body strength then you should*
*give it 0 Pushes Others.*
```java
int[] push = { 2, 2, 3, 3, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
```

**revlift** - Gets Lifted.
*This defines if the car can get lifted over other cars when it collides with them and how*
*high it can get lifted.*
*Is the car higher off the ground like Wow Caninaro or has big wheels like Dr Monstaa,*
*should its jump over cars when it collides with them?*
*If so then give it some Gets Lifted depending on how high it should go.*
*If the car is lowered to the ground like most cars then it should have 0 Gets Lifted.*
```java
int[] revlift = { 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
```

**revpush** - Gets Pushed
*This defines if the car gets pushed away when it collides with other cars and how far it*
*gets pushed away.*
*If the car is lighter then most cars, then it should get pushed away when it collides with*
*others cars.*
*Getting pushed can be helpful if the car is week because it gets it away from the danger*
*(from the car that hit it) faster, making it take lesser hits and escape better.*
*However getting pushed is not helpful when racing.*
```java
int[] revpush = { 2, 3, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
```

**simag** - Tolerance towards Track Pieces.
```java
float[] simag = { 0.9F, 0.85F, 1.05F, 0.9F, 0.85F, 0.9F, 1.05F, 0.9F, 1.0F, 1.05F, 0.9F, 1.1F, 0.9F, 1.3F, 0.9F,
            1.15F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 0.0F, 0.0F };
```

**swits** - Top Speed.
*Take the values as if each one was a gear from a gearbox. 1st to 2nd, 2nd to 3rd, dependent on power obtained.*
```java
int[][] swits = { { 50, 185, 282 }, { 100, 200, 310 }, { 60, 180, 275 }, { 76, 195, 298 }, { 70, 170, 275 },
            { 70, 202, 293 }, { 60, 170, 289 }, { 70, 206, 291 }, { 90, 210, 295 }, { 90, 190, 276 }, { 70, 200, 295 },
            { 50, 160, 270 }, { 90, 200, 305 }, { 50, 130, 210 }, { 80, 200, 300 }, { 70, 210, 290 }, { 0, 0, 0 },
            { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 },
            { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 },
            { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 },
            { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 },
            { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 } };
```

**turn** - Turn Speed.
*The car's turning speed/response.*
```java
int[] turn = { 6, 9, 5, 7, 8, 7, 5, 5, 9, 7, 7, 4, 6, 5, 7, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
```


Stats which may be found in `xtGraphics.java`

**sndsize** - Track Sound Size.
*That's just the sound size written in the "loading stage sound track" part.*
```java
int[] sndsize = { 39, 128, 23, 58, 106, 140, 81, 135, 38, 141, 106, 76, 56, 116, 92, 208, 70, 80, 152, 102, 27, 65,
            52, 30, 151, 129, 80, 44, 57, 123, 202, 210, 111 };
```

:::