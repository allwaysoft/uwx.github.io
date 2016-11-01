---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>bless</h1> 
<p>Set volume bootability and set the active boot volume.<br>
bless has 5 modes of execution: Folder Mode, Mount Mode, Device Mode, NetBoot Mode, and Info Mode.</p>
<pre>Syntax (brief)

Info Mode:
   --info [dir]    Print blessing information for a specific volume, or the
                   currently active boot volume if <i>dir</i> is not specified
   --getBoot       Suppress normal output and print the active boot volume
   --version       Print bless version number
   --plist         For any output type, use a plist representation
   --verbose       Verbose output

File/Folder Mode:
   --file <i>file</i>     Set <i>file</i> as the blessed boot file
   --folder <i>dir</i>    Set <i>dir</i> as the blessed directory
   --bootinfo [file]
                   Use <i>file</i> to create a "BootX" file in the blessed dir
   --bootefi [file]
                   Use <i>file</i> to create a "boot.efi" file in the blessed dir
   --setBoot       Set firmware to boot from this volume
   --openfolder <i>dir</i> Set <i>dir</i> to be the visible Finder directory
   --verbose       Verbose output

Mount Mode:
   --mount <i>dir</i>     Use this mountpoint in conjunction with --setBoot
   --file <i>file</i>     Set firmware to boot from <i>file</i>
   --setBoot       Set firmware to boot from this volume
   --verbose       Verbose output

Device Mode:
   --device <i>dev</i>    Use this block device in conjunction with --setBoot
   --setBoot       Set firmware to boot from this volume
   --verbose       Verbose output

NetBoot Mode:
   --netboot       Set firmware to boot from the network
   --server <i>url</i>    Use BDSP to fetch boot parameters from <i>url</i>
   --verbose       Verbose output

Syntax (Detailed)

     <b>bless --folder</b> <i>directory</i> [--folder9 <i>directory</i>] [--file <i>file</i>]
           [--bootinfo [<i>file</i>]] [--bootefi [<i>file</i>]] [--bootBlockFile <i>file</i>]
           [--save9] [--saveX] [--use9] [--label <i>name</i> | --labelfile <i>file</i>]
           [--setBoot] [--openfolder <i>directory</i>] [--nextonly] [--shortform]
           [--legacy] [--legacydrivehint <i>device</i>] [--options string]
           [--quiet | --verbose]

     <b>bless --mount</b> directory [--file <i>file</i>] [--setBoot] [--nextonly]
           [--shortform] [--legacy] [--legacydrivehint <i>device</i>]
           [--options <i>string</i>] [--quiet | --verbose]

     <b>bless --device</b> device [--label <i>name</i> | --labelfile <i>file</i>]
           [--startupfile <i>file</i>] [--setBoot] [--nextonly] [--shortform]
           [--legacy] [--legacydrivehint <i>device</i>] [--options <i>string</i>]
           [--quiet | --verbose]

     <b>bless --netboot</b> --server <i>url</i> [--nextonly] [--options <i>string</i>]
           [--quiet | --verbose]

     <b>bless --info</b> [directory] [--getBoot] [--plist] [--quiet | --verbose]
           [--version]
     <b>bless -help</b></pre>
<p><b>Examples</b></p>
<p>FOLDER MODE<br>
To bless a volume with only Mac OS 9:</p>
<p class="code"> bless --folder9 "/Volumes/Mac OS 9/System Folder" --bootBlockFile "/usr/share/misc/bootblockdata"</p>
<p> To bless a volume with only Mac OS X or Darwin, and create the BootX and
boot.efi files as needed:</p>
<p class="code"> bless --folder "/Volumes/Mac OS X/System/Library/CoreServices"
--bootinfo --bootefi</p>
<p> MOUNT MODE<br>
To set a volume containing either Mac OS 9 and Mac OS X to be the active
volume:</p>
<p class="code"> bless --mount "/Volumes/Mac OS" --setBoot</p>
<p> NETBOOT MODE<br>
To set the system to NetBoot and broadcast for an available server:</p>
<p class="code"> bless --netboot --server bsdp://255.255.255.255</p>
<p> INFO MODE<br>
To gather information about the currently selected volume (as determined
by the firmware), suitable for piping to a program capable of parsing
Property Lists:</p>
<p class="code"> bless --info --plist</p>
<p>For a full description of all the bless options see<span class="code"> man bless</span><span class="body"> the options available for bless will vary according to the version of OS X you are running. </span></p>
<p class="quote"><i>“If everything seems under control, then you're not going fast enough” - Mario Andretti</i> 
</p>
<p><b>Related:</b></p>
<p><a href="asr.html">asr</a> - Apple Software Restore<br>
<a href="diskutil.html">diskutil</a> - Disk utilities - Format, Verify, Repair<br>
<a href="mount.html">mount</a> - Mount a file system <br>
newfs(8)<br>
nvram(8)</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="bless.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
