---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>DelOlder.ps1</h1> 
<p>Delete files and folders older than <i>N </i>days:</p>
<pre># Delolder.ps1
# Syntax: DelOlder <i>path_to_files Days</i>

param( [<i>string</i>] $Folder, [int] $days)

"Delete from folder:$Folder items older than $days days"

if (test-path $Folder)
{
  dir -recurse $Folder | ? {$_.LastWriteTime -lt (get-date).AddDays(-$days)} `
  | del -recurse <b>-whatif</b>
  # To delete for real, remove -whatif in the line above
} </pre>
<p> <b>Example</b></p>
<p>Assuming Delolder.ps1 is saved in the current directory:</p>
<pre>PS C:\&gt; ./DelOlder.ps1 "F:\work\" 90
</pre>
<p class="quote"><i>“The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery” ~ Anais Nin</i></p>
<p><b>Related:</b></p>
<p><a href="../nt/syntax-delolder.html">DelOlder.cmd</a> - Delete files older than N days.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

