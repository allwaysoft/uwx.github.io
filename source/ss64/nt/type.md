---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TYPE</h1> 
<p>Display the contents of one or more text files. </p>
<pre>Syntax
      TYPE [<i>drive</i>:]<i>pathname</i>(s)</pre>
<p>If more than one file is specified the filenames are included in the output.<br>
If a wildcard is used the filenames are  displayed even if only one file matches. The file names are printed to the error stream and so can be hidden by <a href="syntax-redirection.html">redirecting</a> to NUL <span class="code">&nbsp;TYPE * 2&gt;nul</span></p>
<h2>Errorlevels</h2>
<blockquote>
<p>If the file(s) were successfully displayed <a href="errorlevel.html">%ERRORLEVEL%</a> = 0<br>
If the file was not found or bad parameters given =1</p>
</blockquote>
<p> Output can be redirected into a new file:<br>
<br>
<span class="code">TYPE file.txt &gt; Newfile.txt</span><br>
<br>
Output can be appended to an existing file:<br>
<br>
<span class="code">TYPE file.txt &gt;&gt; ExistingFile.txt</span><br>
<br>
To do the same with user console input :<br>
<br>
<span class="code">TYPE CON &gt; Newfile.txt</span><br>
<br>
This will require typing a CTRL-Z to indicate the end of file.<br>
<br>
When using redirection to SORT a file the TYPE command is used implicitly<br>
For example:<br>
<br>
<span class="code">SORT &lt; MyFile.txt</span></p>
<p>Create an empty (zero byte)  file: <br>
<span class="code">TYPE nul &gt;filename.log</span></p>
<p>Check filesize during a download (to monitor progress of a large download) Since TYPE won't lock the file, this does not pose a threat to the download completing successfully:</p>
<pre>TYPE <i>file_being_downloaded</i> &gt;NUL 
DIR <i>file_being_downloaded</i></pre>
<p>Convert an ASCII (Windows1252) file into a  Unicode (UCS-2 le) text file: <br>
</p>
<p class="code">For /f "tokens=2 delims=:" %%G in ('CHCP') do Set _codepage=%%G<br>
  CHCP 1252 &gt;NUL<br>
  CMD.EXE /D /A /C (SET/P=ÿþ)&lt;NUL &gt; unicode.txt 2&gt;NUL<br>
CMD.EXE /D /U /C TYPE ascii_file.txt &gt;&gt; unicode.txt<br>
CHCP %_codepage%
</p>
<p>The technique above (based on a <a href="http://www.robvanderwoude.com/type.php">script</a> by Carlos M.) first creates a file with a <a href="http://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM) and then appends the content of the original file. <a href="chcp.html">CHCP</a> is used to ensure the session is running with the Windows1252 code page  so that the characters 0xFF and 0xFE (<span class="code">ÿþ</span>) are interpreted correctly.</p>
<p>It is also possible to convert files from Unicode to ASCII with TYPE or MORE see the <a href="syntax-redirection.html">redirection syntax</a> page for details.</p>
<p>TYPE is an <a href="syntax-internal.html">internal</a> command.</p>
<p class="quote"><i> “Writing is easy; all you do is sit staring at a blank sheet of paper until the drops of blood form on your forehead” ~ Gene Fowler </i></p>
<p> 
<b>Related:</b><br><br>
<a href="more.html">MORE</a> - 
Display output, one screen at a time<br>
<a href="sort.html">SORT</a> - Sort input<br>
<a href="strings.html">STRINGS</a> - Search for ANSI and UNICODE strings in binary files (SysInternals.)<br>
Powershell: <a href="../ps/get-content.html">Get-Content</a> - Get content from item (cat / type / gc)<br>
  Equivalent bash command (Linux): <a href="../bash/cat.html">cat</a> - Display the contents of a file</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="type.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

