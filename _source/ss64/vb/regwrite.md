---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.RegWrite </h1> 
<p>Write a value to the Registry </p>
<pre>Syntax 
      <i>objShell</i>.RegWrite <i>strRegName, anyValue</i>, [<i>strType</i>]

Arguments:

   objShell   A WScript.Shell object

   strRegName 
         To set a key instead of a value terminate strRegName 
         with a backslash character \

         strRegName must start with one of

         HKEY_CURRENT_USER  or HKCU
         HKEY_USERS         
         HKEY_LOCAL_MACHINE or HKLM
         HKEY_CLASSES_ROOT  or HKCR
         HKEY_CURRENT_CONFIG

   strType
         The data type, one of:
         REG_SZ, REG_EXPAND_SZ, (String values)
         REG_DWORD  (convert to Integer value)
         REG_BINARY (Integer value)</pre>
<p>When you specify a key-name (as opposed to a value-name),
RegRead returns the default value.</p>
<p><b>Examples</b></p>
<p>Set the <a href="../nt/syntax-reghacks.html">registry flag</a> to display Hidden and System files in Windows Explorer:</p>
<pre>Set WshShell = CreateObject("WScript<a href="shell.html">.Shell</a>")<br>myKey = "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Hidden"<br>WshShell<b>.RegWrite</b> myKey,<b>1</b>,"REG_DWORD"<br></pre>
<p> Set the registry flag to hide Hidden and System files in Windows Explorer (the default)</p>
<pre>Set WshShell = CreateObject("WScript.Shell")<br>myKey = "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Hidden"<br>WshShell<b>.RegWrite</b> myKey,<b>0</b>,"REG_DWORD"<br></pre>
<p>Create a "default value" at HKCU\KeyName\ n.b. the trailing backslash is required:</p>
<p class="code">Set WshShell = WScript.CreateObject("WScript.Shell") <br>
WshShell<b>.RegWrite</b> "HKCU\KeyName\","", "REG_SZ"</p>
<p class="quote"><i>“Nothing is permanent” - Buddha</i></p>
<p><b>Related:</b></p>
<p>  Registry, delete - <a href="regdel.html">WshShell.RegDelete</a> <br>
  Registry, read - <a href="regread.html">WshShell.RegRead</a><br>
<a href="http://support.microsoft.com/kb/281309">Q281309</a> - Unable to Use a "\" in a Key Name with  RegWrite<br>
Equivalent Windows CMD command: <a href="../nt/reg.html">REG</a> - Read, Set or Delete registry keys and values<br>
Equivalent PowerShell cmdlet: <a href="../ps/set-item.html">Set-Item</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

