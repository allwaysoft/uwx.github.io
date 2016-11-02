---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Make a bootable OS X drive</h1>
<p>With OS X El Capitan, Yosemite, or Mavericks, you can use a USB flash drive or other removable media as a startup disk from which to install OS X. </p>
<p>OS X  is distributed through the  App Store which will download an installer app  to the /Applications folder. If you run the OS X installer from that default location, the installer app will be deleted. Therefore your first step after downloading the installer should be  to cancel the actual install. You can then copy the installer App and you may also want to back it up so that you won't have to download it again.</p>
<p>Installer App names:</p>
<blockquote>
<p class="code">Install OS X El Capitan.app<br>
Install OS X Yosemite.app<br>
Install OS X Mavericks.app</p>
<p>At the command line,  spaces must be escaped so these become:</p>
<p><span class="code">Install\ OS\ X\ El\ Capitan.app<br>
Install\ OS\ X\ Yosemite.app<br>
Install\ OS\ X\ Mavericks.app</span></p>
</blockquote>
<h2>Prepare the empty drive</h2>
<blockquote>
<p>You need a Mac-formatted drive big enough to hold the installer and  its data - <b>8 GiB</b>.<br>
This can be a hard drive, an SSD, or a USB stick.<br>
The drive must be formatted as a Mac OS Extended (Journaled) volume with a GUID Partition Table.</p>
<p>Name the drive '<b>Untitled</b>' this name will be changed when the new volume is initialised.  The Terminal commands below assume that the drive is named Untitled. You could name the drive to something different as long as you adjust the command line syntax below to match.</p></blockquote>
<p>The program used to create a bootable drive (<span class="code">createinstallmedia</span>) is supplied as part of the installer App.</p>
<h2>Create the drive</h2>
<blockquote>
<p>Open the terminal and copy one of the following, single line commands. Becasue we are using sudo you will be prompted for a password:</p>
<p>Create an El Capitan drive:</p>
<p class="code">sudo /Applications/Install\ OS\ X\ El\ Capitan.app/Contents/Resources/createinstallmedia --volume /Volumes/Untitled --applicationpath /Applications/Install\ OS\ X\ El\ Capitan.app --nointeraction</p>
<p>Create a Yosemite drive:</p>
<p class="code">sudo /Applications/Install\ OS\ X\ Yosemite.app/Contents/Resources/createinstallmedia --volume /Volumes/Untitled --applicationpath /Applications/Install\ OS\ X\ Yosemite.app --nointeraction</p>
<p>Create a Mavericks drive:</p>
<p class="code">sudo /Applications/Install\ OS\ X\ Mavericks.app/Contents/Resources/createinstallmedia --volume /Volumes/Untitled --applicationpath /Applications/Install\ OS\ X\ Mavericks.app --nointeraction</p>
</blockquote>
<p>If you see the message “<i>To continue we need to erase the disk at /Volumes/Untitled.</i>” Type the letter Y and  press Return.</p>
<p>The build process can take 20 minutes or so to complete, wait for the 'Done' message</p>
<blockquote>
<p class="code">Erasing Disk: 0%... 10 percent...<br>
Copying boot files... <br>
Copy complete.<br>
Done.
</p>
</blockquote>
<p> To boot from an alternate drive restart your Mac while holding down the <a href="syntax-keyboard.html">Option key</a>. <br>
The OS X Startup Manager will then appear and you can select a startup drive.</p>
<p><b>Related:</b></p>
<p><a href="https://support.apple.com/en-us/HT201372">HT201372</a> - Create a bootable installer for OS X<br>
</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
