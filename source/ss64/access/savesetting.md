---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>SaveSetting</h1>
<p> Store a value to the users registry (VBA).</p>
<pre>Syntax
     SaveSetting appname:="<i>AppName</i>", Section:="<i>Section</i>", Key:="<i>Key</i>", setting:="<i>Setting</i>"

     SaveSetting "<i>AppName</i>", "<i>Section</i>", "<i>Key</i>", "<i>Setting</i>"
      
Key
   AppName  The name of the application or project.
<br>   Section  The name of the section in which the key setting is being saved.
<br>   Key      The name of the key setting being saved.<br>
   Setting  The value to which <i>Key</i> is being set (string or number). </pre>
<p>All the registry entries will appear under <span class="code">HKEY_CURRENT_USER\Software\VB and VBA Program Settings\</span></p>
<p><b>Example</b></p>
<p>Save a registry key named "LastOrderViewed" with a value of "1375", placing it under the key named "SS64", and a sub key named "DemoDB" (create the keys if they don't already exist):</p>
<p class="code">SaveSetting appname:="SS64", Section:="DemoDB", Key:="LastOrderViewed", setting:=1375</p>
<p class="quote"><i>“If you stuff yourself full of poems, essays, plays, stories, novels, films, comic strips, magazines, music, you automatically explode every morning like old faithful. I have never had a dry spell in my life, mainly because I feed myself well, to the point of bursting. I wake early and hear my morning voices leaping around in my head like jumping beans. I get out of bed to trap them before they escape” ~ Ray Bradbury</i></p>
<p><b>Related:</b></p>
<p><a href="deletesetting.html">DeleteSetting</a> - Delete a value from the users registry<br>
<a href="getsetting.html">GetSetting</a> - Retrieve a value from the users registry<br>
<a href="getallsettings.html">GetAllSettings</a> - List the keys and values saved in the registry</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="savesetting.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

