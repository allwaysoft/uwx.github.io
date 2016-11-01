---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DeleteSetting</h1>
<p> Delete a value from the users registry (VBA).</p>
<pre>Syntax
     DeleteSetting appname:="<i>AppName</i>", Section:="<i>Section</i>" [, Key:="<i>Key</i>"]

     DeleteSetting "<i>AppName</i>", "<i>Section</i>" [, "<i>Key</i>"]
      
Key
   AppName  The name of the application or project.
<br>   Section  The name of the section in which the key is saved.
<br>   Key      The name of the key setting to be deleted.<br></pre>
<p>All the registry entries will appear under <span class="code">HKEY_CURRENT_USER\Software\VB and VBA Program Settings\</span></p>
<p>If only <i>AppName</i> and <i>Section</i> are provided, then the entire section will be deleted (along with all its keys.) <br>
If the registry key does not exist an error will be raised.
</p>
<p><b>Example</b></p>
<p>Delete the registry key named "LastOrderViewed":</p>
<p class="code">On Error resume next<br>
DeleteSetting "SS64", "DemoDB", "LastOrderViewed"</p>
<p class="quote"><i>“When making a fire people like to join you, when cleaning the ashes you are often alone” ~ African Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="getsetting.html">GetSetting</a> - Retrieve a value from the users registry<br>
<a href="getallsettings.html">GetAllSettings</a> - List the keys and values saved in the registry<br>
<a href="savesetting.html">SaveSetting</a> - Store a value in the users registry</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="deletesetting.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

