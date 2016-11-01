---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Replace()</h1> 
<p>Replace characters within a string.</p>
<pre>Syntax
      .<span class="code">Replace(<i>strOldChar</i>, <i>strNewChar</i>)</span>

Key
   <i>strOldChar  </i>The characters to find.

<i>   strNewChar</i>  The characters to replace them with.</pre>
<p><b>Examples</b></p>
<p>Replace characters in a string:</p><p><span class="code">PS C:\&gt; "abcdef" -replace "dEf","xyz"</span></p>
<p>Replace characters in a variable:</p>
<p><span class="code">PS C:\&gt; $demo = "abcdef"</span><br>
<span class="code">PS C:\&gt; </span><span class="code"> $demo.replace("dEf","xyz"</span>)<br>
<span class="code">abcxyz</span></p>
<p>Multiple replacements can be chained together in one command:</p>
<p><span class="code">PS C:\&gt;  "abcdef" -replace "dEf","xyz"</span> <span class="code">-replace "cx","-"<br>
ab-yz</span></p>
<p>Search and Replace characters in a file:</p>
<p><span class="code">PS C:\&gt; $oldfile = "C:\demo\sourcetext.txt" <br>
</span><span class="code">PS C:\&gt; $newfile = "C:\demo\newfile.txt" </span></p>
<p><span class="code">PS C:\&gt; $text = (<a href="get-content.html">Get-Content</a> -Path $oldfile -ReadCount 0) -join "`n"<br>
PS C:\&gt; $text -replace 'dEf', 'xyz' | Set-Content -Path $newfile </span><br>
</p>
Search and Replace using a <a href="syntax-hash-tables.html">hash table</a>:
<pre><span class="code"> $text = 'Any old text string'
 
 $hash = @{}
 $hash.'old' = 'new'
 $hash.A = 'B'
 $hash.' ' = '_'</span></pre>
<pre> Foreach ($key in $<span class="code">hash</span>.Keys) {
    $text = $text.Replace($key, $<span class="code">hash</span>.$key)
 }
 $text</pre>
<p> #This technique can also be used to <a href="http://powershell.com/cs/blogs/tips/archive/2015/12/02/replacing-special-characters.aspx">replace common unicode characters</a>.</p>
<p>Rename file extensions from .log to .txt</p>
<p><span class="code">PS C:\&gt; dir *.log  | rename-item $_ -newname { $_.Name -replace '\.log','.txt' }</span></p>
<p>Using  single <a href="syntax-esc.html#quotes">quotes</a> around the search strings will ensure that all punctuation is ignored by PowerShell.</p>
<p>An alternative method to read an entire file as a single long text string is  the .Net <span class="code">::<a href="http://msdn.microsoft.com/en-us/library/ms143368.aspx">ReadAllText</a></span> method:<br>
<span class="code">$allTheText = [System.Io.File]::ReadAllText($filePath)</span></p>
<p>More complex replacements can be done by combining <a href="syntax-regex.html">-match or -replace with a regular expression.</a></p>
<p class="quote">“In order to be irreplaceable one must always be different” ~ Coco Chanel</p>
<p><b>Related:</b></p>
<p><a href="syntax-regex.html">Regular Expressions</a> - Search and/or Replace.<br>
<a href="syntax-methods.html">PowerShell Methods</a><br>
<a href="set-content.html">Set-Content</a> -   Write a string into a text file.<br>
<a href="syntax-set-eol.html">set-eol</a> - Change the line endings (CR/LF) of a text file.<br>
<a href="https://github.com/3komma14/Guard/blob/master/Replace-FileString.ps1">Replace-FileString.ps1</a> - Find and Replace across multiple files (Bill Stewart)</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

