---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>ConvertFrom-StringData</h1> 
<p>Convert  a string containing one or more key/value pairs to a <a href="syntax-hash-tables.html">hash table</a>.</p>
<pre>Syntax
      ConvertFrom-StringData [-StringData] <i>string</i>
            [<i>CommonParameters</i>]

Key
   -StringData <i>string</i><br>      The string to be converted. Accepts piped data (string)
<br>      The value of this parameter must be a string enclosed in
      single or double quotes or a <a href="syntax-esc.html">here-string</a> containing one or
      more key/value pairs. Each key/value pair must be on a
      separate line, or each pair must be separated by newline
      characters (`n).<br>                <br>      You can include comments in the string, but the #comments
      cannot be on the same line as a key/value pair. The comments
      are not included in the hash table. <br>
   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  ConvertFrom-StringData  converts a string that contains one or more key/value pairs into a <a href="syntax-arrays.html">hash table</a>. Because each key/value pair must be on a separate line, here-strings are often used as the input format.</p>
<p>ConvertFrom-StringData  is considered to be a safe cmdlet that can be used in the DATA section of a script or function.  For more information, see help about_Data_Sections.</p>
<p><b>Example</b></p>
<p>Create a here string and convert to a hash table:</p>
<p><span class="code">C:\PS&gt;$my_here_string = @'<br>
ss64 = The first line of data.<br>
# This is a comment<br>
ss65 = Another line of data.<br>
ss66 = The last  line of data.<br>
'@<br>
<br>
C:\PS&gt; convertfrom-stringdata -stringdata $my_here_string</span><br>
  <br>
<i class="quote">“A few can touch the magic string, and noisy fame is proud to win them: Alas for those that never sing, but die with all their music in them!” -  Oliver Wendell Holmes</i></p>
<p><b>Related:</b></p>
<p> <a href="select-string.html">Select-String</a> - Search through strings or files for patterns</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="convertfrom-stringdata.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

