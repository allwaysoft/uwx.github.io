---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem -->
<h1>Get String length - strlen.cmd</h1>
<p>This script will loop through a string of up to 8191 characters and return the length of the string.</p>
<pre> @Echo off
 Setlocal EnableDelayedExpansion
 Set _str=%*
 
 :: Remove any quotes
 Set _str=%_str:"=%
 
 :: Test if empty
 if not defined _str Echo String Length = 0 &amp; ENDLOCAL &amp; set _strlen=0&amp;goto:eof
 
 For /l %%g in (0,1,8191) do (
  REM extract one character
  Set "_char=!_str:~%%g,1!"
  REM if _char is empty we are at the end of the string
  if not defined _char Echo String Length = %%g &amp; ENDLOCAL &amp; set _strlen=%%g&amp; goto:eof
 )</pre>
<p> <b>Examples</b><br>
<span class="code">c:\&gt; strlen.cmd Hello world<br>
11<br>
c:\&gt; strlen.cmd "Hello world"<br>
11</span></p>
<p>This routine will not cope with <a href="syntax-esc.html">special</a> characters such as &amp; or ^ some more advanced <a href="http://ss64.org/viewtopic.php?pid=6478">string length functions</a> can be found over in the SS64 forum.<br>
</p>
<p><i class="quote">“You can't do anything about the length of your life, but you can do something about its width and depth” ~ </i><i class="quote">Henry Louis Mencken</i>
</p><p><b>Related</b>
</p><p><a href="syntax-substring.html">VarSubstring</a> - Extract part of a variable (substring) <br>
<a href="syntax-replace.html">VarSearch</a> - Search &amp; replace part of a variable.<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-strlen.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

