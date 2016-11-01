---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>GetAllSettings</h1>
<p> List  the keys and values saved in the registry (VBA).</p>
<pre>Syntax
      GetAllSettings appname:="<i>AppName</i>", Section:="<i>Section</i>"

      GetAllSettings"<i>AppName</i>", "<i>Section</i>"
      
Key
   AppName  The name of the application or project.
<br>   Section  The name of the section where the keys are saved.<br></pre>
<p>All the registry entries will appear under <span class="code">HKEY_CURRENT_USER\Software\VB and VBA Program Settings\</span></p>
<p>If either of the arguments do not exist in the registry then GetAllSettings will return an uninitialised variant.</p>
<p><b>Example</b></p>
<p>Retrieve all the settings stored under the section named "DemoDB":</p>
<pre>Dim MySettings as Variant, intSettings as Integer
MySettings = GetAllSettings("SS64", "DemoDB")
   For intSettings = LBound(MySettings, 1) To UBound(MySettings, 1)
      Debug.Print MySettings, 0), MySettings(intSettings, 1)
   Next intSettings</pre>
<p class="quote">“The act of bell ringing is symbolic of all proselytizing religions. It implies the pointless interference with the quiet of other people” ~ Ezra Pound</p>
<p><b>Related:</b></p>
<p><a href="deletesetting.html">DeleteSetting</a> - Delete a value from the users registry<br>
<a href="getsetting.html">GetSetting</a> - Retrieve a value from the users registry<br>

<a href="savesetting.html">SaveSetting</a> - Store a value in the users registry</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

