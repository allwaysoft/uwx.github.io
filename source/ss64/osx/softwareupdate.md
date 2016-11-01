---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>softwareupdate</h1> 
<p>Check for new and updated versions of your software based on information 
about your computer and current software.</p>
<pre>Syntax
     softwareupdate <i>command</i> [<i>args</i> ...]

Options

   <b>-l</b> | <b>--list</b>
       List all available updates.

   <b>-d | --download</b>

   <b>-i</b> | <b>--install</b>
       Each update specified by <i>args</i> is downloaded, unarchived, and
       installed.  This command requires root.  <i>args</i> can be one of
       the following:

     <i>item</i> <i>...</i>    One or more update names.

     <i>-a</i> | <i>--all</i>  All available active updates.

     <i>-r</i> | <i>--req</i>  All required active updates.

   <b>--ignore ...</b><br>       Manage the per-user list of ignored updates.

   <b>--reset-ignored</b><br>       Clear the list of all ignored updates.

   <b>--schedule on</b>
   <b>--schedule off</b>
       Enable or disable automatic checking.

   <b>-h</b> | <b>--help</b>
       Print command usage.</pre>
<p><b>Examples</b><br>
<br>
The following examples are shown as given to the shell:</p>
<pre> $ softwareupdate --list

     ! iPhoto-2.0
         iPhoto, 2.0, 34100K [recommended]
     ! iSync-1.0
         iSync, 1.0, 4840K [recommended]
     ! StuffItExpander7-7.0
         StuffIt Expander Security Update, 7.0, 4420K [recommended]

$ softwareupdate --install iCal-1.0.2

     Software Update Tool
     Copyright 2002-2003 Apple Computer, Inc.

     Installing iCal:
     0...10...20...30...40...50...60...70...80...90...100 Done.

$ softwareupdate --ignore iCal iPhoto

$ softwareupdate --schedule

     Automatic check is on</pre>
<p>File:<span class="code"> /usr/sbin/softwareupdate</span></p>
<p> Variable: <span class="code">COMMAND_LINE_INSTALL</span> Set when downloading or installing using the softwareupdate command. Scripts can check for the existence of this variable to determine if they are executing in a command line environment (i.e. there
may be no WindowServer available).</p>
<p>Softwareupdate was first introduced in OS X Leopard.</p>
<p class="quote"> <i>“If you stuff yourself full of poems, essays, plays, stories, novels, films, comic strips, magazines, music, you automatically explode every morning like old faithful. I have never had a dry spell in my life, mainly because I feed myself well, to the point of bursting. I wake early and hear my morning voices leaping around in my head like jumping beans. I get out of bed to trap them before they escape” ~ Ray Bradbury</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/softwareupdate.8.html">softwareupdate man page</a> - Apple.com<br>
<a href="install.html">install</a> - Copy files and set attributes</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="softwareupdate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
