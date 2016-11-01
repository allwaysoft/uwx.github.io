---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TOUCH (Windows 2000 <a href="../links/windows.html#kits">Resource Kit</a>)</h1> 
<p>Change file timestamps
</p><pre>Syntax
      TOUCH [<i>option</i>]... <i>files</i> ...

Key
   /t <i>year month day hour minute second</i></pre>
<p> This is a POSIX utility.<br>
  <br>
  Use the optional argument /t to specify a date other than the current time.<br>
( four-digit years, two-digit months, days, hours, minutes, seconds)</p>
<p> <b>Example</b></p>
<pre>   To set the date to 7:30 am 1st October 2015

   TOUCH /t 2015 10 01 07 30 00 MyFile.txt</pre>
<p><i class="quote">#And smiles you'll give and tears you'll cry<br>
And all you touch and all you see<br>
Is all your life will ever be# ~ Pink Floyd (Breathe)</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="https://support.microsoft.com/kb/299648"> Q299648</a> - Date and 
Time Stamps for Files and Folders<br>
<a href="copy.html">COPY</a> - Copy one or more files to another location<br>
Equivalent PowerShell Script: <a href="../ps/syntax-touch.html">touch</a> - Change file timestamps<br>
  Equivalent bash command (Linux): <a href="../bash/touch.html">touch</a> - Change file timestamps</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

