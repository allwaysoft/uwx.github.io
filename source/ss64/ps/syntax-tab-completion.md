---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Tab Completion in PowerShell</h1> 
<p>Command completion when working at the PowerShell prompt.<br>
The [TAB] key can be used to automatically complete cmdlets, Filenames, Variable names and Parameters: </p>
<p><b>Examples - </b></p>
<p><b>Cmdlets</b>:<br>
<br>
<span class="code">PS C:\&gt; get-c </span>[tab] [tab] [tab]...</p>
<p><b>Files:</b></p>
<p><span class="code">PS C:\&gt; dir "C:\WINDOWS\system32\ </span>[tab] [tab] [tab]...<br>
<span class="code">PS C:\&gt; Get-Content -path C:\ </span>[tab] [tab] [tab]...<br>
<br>
Note this will not complete any folder names which have the 'hidden' 
attribute set</p>
<p><b>Variables:</b></p>
<p><span class="code">PS C:\&gt; $t </span>[tab] =&gt; $true</p>
<p><span class="code">PS C:\&gt; $m </span>[tab] [tab] [tab]...</p>
<p><b>Parameters:</b></p>
<p><span class="code">PS C:\&gt; gci -f </span>[tab] [tab] [tab]...<br>
<br>
<span class="code">PS C:\&gt; Get-Content -Cr </span>[tab]...</p>
<p>Even more flexible and complex tab completions can be added by
installing the <a href="http://powertab.codeplex.com/">PowerTab function</a>, this is particularly handy for
browsing .NET namesspaces.</p>
<p class="quote"><i>“Everything you need you already have. You are complete right now, you are a whole, total person, not an apprentice person on the way to someplace else” ~ Wayne Dyer</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-comments.html">Comments and Tab-Expansion</a><br>
<a href="get-command.html">Get-Command</a>        -   Get basic information about cmdlets</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-tab-completion.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

