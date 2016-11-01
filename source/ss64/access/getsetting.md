---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>GetSetting</h1>
<p> Retrieve a value from the users registry (VBA).</p>
<pre>Syntax
     GetSetting appname:="<i>AppName</i>", Section:="<i>Section</i>", Key:="<i>Key</i>", default:="<i>Default</i>"

     GetSetting "<i>AppName</i>", "<i>Section</i>", "<i>Key</i>", "<i>Default</i>"
      
Key
   AppName  The name of the application or project.
<br>   Section  The name of the section where the key is saved.
<br>   Key      The name of the key setting to be retrieved.

   Default  A value to return if no value is set in the key setting.<br></pre>
<p>All the registry entries will appear under <span class="code">HKEY_CURRENT_USER\Software\VB and VBA Program Settings\</span></p>
<p>If any of the arguments do not exist in the registry then GetSetting will return the value of <i>Default</i>. If default is not set then a Zero length string "" will be returned. </p>
<p><b>Example</b></p>
<p>Retrieve the value from the registry key named "LastOrderViewed":</p>
<p class="code">Dim strLastOrder as String<br>
strLastOrder = GetSetting("SS64", "DemoDB", "LastOrderViewed", 0)</p>
<p class="quote">“The difference between false memories and true ones is the same as for jewels: it is always the false ones that look the most real, the most brilliant” ~ Salvador Dalí</p>
<p><b>Related:</b></p>
<p><a href="deletesetting.html">DeleteSetting</a> - Delete a value from the users registry<br>

<a href="getallsettings.html">GetAllSettings</a> - List the keys and values saved in the registry<br>
<a href="savesetting.html">SaveSetting</a> - Store a value in the users registry</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="getsetting.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

