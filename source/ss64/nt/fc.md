---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>FC.exe </h1> 
<p>Compare the contents of two files or sets of files. Display any lines which do NOT match.</p>
<pre>Syntax
      FC /B <i>pathname1</i> <i>pathname2</i>

      FC [<i>options</i>] <i>pathname1</i> <i>pathname2</i>

Key
   /B  : Perform a binary comparison.

options
   /C  : Do a case insensitive string comparison

   /A  : Displays only first and last lines for each set of differences.

   /U  : Compare files as UNICODE text files.
   /L  : Compares files as ASCII text. (default)

   /N  : Display line numbers (ASCII only)

   /LB<i>n</i>: Limit the number of lines that will be read, "<i>n</i>" sets a maximum number
         of consecutive differing lines after which the File Comparison will abort (resync failed)
         When FC aborts then "<i>n</i>" number of mismatches will be shown.
         default=100 lines.

  /<i>nnnn</i>  : Specify a number of consecutive lines that must match after a mismatch.
           This can be used to prevent the display of the two files from getting 
           too out of sync

  /T     : Do not expand tabs to spaces.
  /W     : Compress white space (tabs and spaces) for comparison.</pre>
<p> To compare sets of files, use wildcards in pathname1 and pathname2 
  parameters.</p>
<p>Powershell also has an Alias <span class="code">FC</span> for the <a href="../ps/format-custom.html">Format-Custom</a> cmdlet, therefore to run the 'old' FC under powershell you need to explicitly run C:\windows\system32\fc.exe<br>
  <br>
The messages returned by FC are language/locale dependent, so to identify 2 identical files use <a href="syntax-redirection.html">redirection</a> syntax:</p>
<pre>   FC File1.txt File2.txt &gt;NUL <b>&amp;&amp;</b> Echo Same <b>||</b> Echo Different or error 
</pre>
<p> <b>Errorlevels</b></p>
<p>FC will set an <a href="errorlevel.html">ErrorLevel</a> as follows:</p>
<blockquote>
<p> <span class="code">-1 </span>Invalid syntax (e.g. only one file passed) <br>
<span class="code">0 </span>The files are identical.<br>
<span class="code">1 </span>The files are different.<br>
<span class="code">2 </span>Cannot find at least one of the files.<br>
For an invalid switch (with two passed files) an error message is printed  but the errorlevel is not changed.</p>
</blockquote>
<p><b>Example:</b><br>
<br>
If two files are compared and the four lines of text match as follows<br>
<br>
1: different<br>
2: same<br>
3: same<br>
4: different<br><br>
Specifying <span class="code">/nnnn =2</span> the file compare will display the 4th line and continue <br>
Specifying <span class="code">/nnnn =3</span> the file compare will halt at the 4th line (files too different)<br>
Specifying <span class="code">/LB1</span> the file compare will halt after the first line<br><br>
<i class="quote"># Oh lord won't you buy me a Mercedes Benz, my friends all drive Porsches, I must make amends # - Janice Joplin </i> <br>
<br>
<b>Related:</b></p>
<p><a href="https://support.microsoft.com/kb/953929">Q953929</a> - FC.exe command does not work correctly in Windows XP when  files differ on every 128th byte<br>
<a href="comp.html">COMP</a> - Compare two files and display any characters which do NOT match<br>
<a href="find.html">FIND</a> - Search for a text string in a file<br>
<a href="findstr.html">FINDSTR</a> - Search for strings in files<br>
<a href="windiff.html">WinDiff</a> - GUI to compare files <br>
Powershell: <a href="../ps/compare-object.html">Compare-Object</a> - Compare the properties of objects, e.g. compare content of files. <br>
Equivalent bash command (Linux):<a href="../bash/export.html">
</a><a href="../bash/cmp.html">cmp</a> - Compare two files</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="fc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

