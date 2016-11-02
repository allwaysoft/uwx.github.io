---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Wildcards</h1> 
<p>The <span class="code">*</span> wildcard will match zero or more characters<br>
<br>
The <span class="code">?</span> wildcard will match a single character</p>
<p><span class="code">[<i>m</i>-<i>n</i>] </span>Match a range of characters from <i>m</i> to <i>n,</i> so <span class="code">[f-m]ake</span> will match fake/jake/make</p>
<p><span class="code">[<i>abc</i>] </span>Match a set of characters <i>a,b,c.., </i>so <span class="code">[fm]ake</span> will match fake/make</p>
<p>PowerShell wildcards are consistent in their meaning so using *.* will match <i>any</i> characters  followed by a period (<span class="code">.</span>) followed by <i>any</i> characters. In other words *.* will return only files that have an extension, not directories. To return all items just use a single * <br>
This is quite different to the behaviour seen
under the CMD shell.</p>
<p>When recursing down through a file heirarchy, it is necessary to use the wildcard in an <span class="code">-include</span> clause:<br>
<span class="code">Get-ChildItem c:\windows -include *.exe -recurse</span></p>
<p>Writing the above like this will fail:<br>
<span class="code"> Get-ChildItem c:\windows\*.exe -recurse<br>
</span>the above will not  match a file such as C:\windows\test\demo.exe</p>
<p>When using WMI filters use  the WMI specific wildcards: <span class="code">%</span> for zero or more characters, <span class="code">_</span> for a single character.</p>
<p>Wildcards will also work within both single and double quotes, to prevent wildcard expansion use the <span class="code">-LiteralPath</span> parameter where available.</p>
<p><b>Examples</b></p>
<p class="code">PS C:\&gt; Get-ChildItem c:\work\*.xls</p>
<p class="code">PS C:\&gt; Get-ChildItem c:\work\[a-f]*.txt</p>
<p class="code">PS C:\&gt; Get-ChildItem -literalpath 'c:\work\test[1].txt'</p>
<p class="quote"><i>“We usually see only the things we are looking for, so much that we sometimes see them where they are not” ~ Eric Hoffer </i></p>
<p><b>Related:</b></p>
<p><a href="syntax-regex.html">Regular Expressions</a> - Search for a string.<br>
<a href="get-childitem.html">Get-ChildItem</a> - Get child items (contents of a folder or registry key)<br>
<a href="syntax-compare.html">Comparison operators</a> -like, -lt, -gt, -eq, -ne, -match</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-wildcards.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

