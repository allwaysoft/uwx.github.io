---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.RegDelete</h1> 
<p>Delete a value from the Registry.</p>
<pre>Syntax 
      <i>objShell</i>.RegDelete "<i>strRegName</i>"

Arguments:

   objShell   A WScript.Shell object 

   <i>strRegName</i> : 
         To delete a key instead of a value terminate strRegName 
         with a backslash character \

         strRegName must start with one of

         HKEY_CURRENT_USER  or HKCU
         HKEY_USERS         
         HKEY_LOCAL_MACHINE or HKLM
         HKEY_CLASSES_ROOT  or HKCR
         HKEY_CURRENT_CONFIG</pre>
<p><b>Example</b></p>
<pre>Set objShell = Wscript.CreateObject("Wscript<a href="shell.html">.Shell</a>")
objShell.RegDelete "HKCU\Control Panel\Desktop\MyValue"
objShell.RegDelete "HKCU\Control Panel\Desktop\MyKey\"

Delete SubKeys in order
objShell.RegDelete ("HKCU\Control Panel\Desktop\MyKey\MySubKey\");
objShell.RegDelete ("HKCU\Control Panel\Desktop\MyKey\");</pre>
<p class="quote"><i>“The way to love anything is to realize it might be lost” ~ G. K. Chesterton</i></p>
<p><b>Related:</b></p>
<p>  Registry, read - <a href="regread.html">.RegRead</a> <br>
  Registry, write - <a href="regwrite.html">.RegWrite</a><br>
  Equivalent Windows CMD command: 
<a href="../nt/reg.html">REG</a> - Read, Set or Delete registry keys and values<br>
Equivalent PowerShell cmdlet: <a href="../ps/remove-item.html">Remove-Item</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="regdel.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
