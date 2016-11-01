---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Trim()</h1> 
<p>Remove characters (by default, spaces) from the beginning or end of a string.</p>
<pre>Syntax
      .Trim([<i>Characters_to_remove</i>])
      .TrimEnd([<i>Characters_to_remove</i>])
      .TrimStart([<i>Characters_to_remove</i>])

Key
   <i>Characters_to_remove</i>  The characters to remove from the beginning and/or end of the string.
                         Multiple characters can be specified.
                         The order of the characters does not affect the result.</pre>
<p>By default <span class="code">trim()</span> will remove leading and trailing spaces and leading and trailing line breaks. <br>
The <i>characters_to_remove</i> may include  <a href="syntax-esc.html">special characters</a> such as tabs <span class="code">`t</span>, new lines <span class="code">`n</span> or carriage returns <span class="code">`r</span>.</p>
<p><b>Examples</b></p>
<p><span class="code">PS C:\&gt; $result = $myvariable.trim()</span></p>
<p>Remove spaces from the beginning and end of the string <span class="code">" abcxyz "</span></p>
<p><span class="code">PS C:\&gt; Echo " abcxyz ".trim()<br>
abcxyz</span></p>
<p>Remove characters from the beginning and end of the string <span class="code">"abc xyz"</span></p>
<p><span class="code">PS C:\&gt; Echo "abc xyz".trim("xa")<br>
bc xyz <br>
  PS C:\&gt; Echo "abc xyz".trim("za")<br>
bc xy<br>
PS C:\&gt; Echo "abc xyz".trim("zay")
<br>
bc x</span></p>
<p>Remove characters from the beginning and end of the string <span class="code">"abc xyz "</span><br>
  <span class="code">PS C:\&gt; Echo "abc xyz ".trim("yaz")<br>
  bc xyz</span><br>
  <br>
  Remove characters from the beginning of the string <span class="code">"abc xyz"</span></p>
<p><span class="code">PS C:\&gt; Echo "abc xyz".trimstart("za")
    <br>
bc xyz</span></p>
<p>Remove characters from the end of the string <span class="code">"abc xyz"</span></p>
<p><span class="code">PS C:\&gt; Echo "abc xyz".trimend("xa") <br>
abc xyz</span><span class="code"><br>
</span></p>
<p class="quote"><i>“Two roads diverged in a wood, and I, I took the one less traveled by,And that has made all the difference” ~ Robert Frost (The Road Not Taken) </i></p>
<p><b>Related:</b></p>
<p><a href="syntax-methods.html">PowerShell Methods</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="trim.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

