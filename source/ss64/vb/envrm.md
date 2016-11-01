---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.Environment.Remove</h1> 
<p>Remove a Windows environment variable.</p>
<pre>Syntax 
      objShell.Environment(<i>strType</i>).Remove(<i>strName</i>)

Key

   <i>objShell</i>    A WScript.Shell object

   <i>strString</i>   The environment variable 
               to be removed

     <i>strType</i>  one of
              "System" (HKLM),
              "User"   (HKCU),
              "Volatile" or "Process"

<b>Example</b>

' Delete the LAST_LOGIN_DATE user environment variable
Set objShell = Wscript.CreateObject("Wscript.Shell")
objShell.Environment("USER").Remove("LAST_LOGIN_DATE") 
</pre>
<p>Note: for anything other than USER variables - the user needs <i>permissions</i> to delete the variable. Environment variables removed with the Remove method are not removed permanently; they are only removed for the current session. 
<br>
<br>
<i class="quote">I'm sorry Dave... I can't do that ~ HAL 9000 (2001: A Space Odyssey)</i></p>
<p><b>Related:</b></p>
<p>  Environment, read env variables - <a href="env.html">.Environment</a><br>

Equivalent Windows  CMD command:
  <a href="../nt/set.html">SET</a> - Display, set, or remove  environment 
variables<br>
Equivalent PowerShell cmdlet: <a href="../ps/get-item.html">Get-Item</a> <span class="code">env:<i>HOMEDRIVE</i></span> or <span class="code">$env:<i>HOMEDRIVE</i></span></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="envrm.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

