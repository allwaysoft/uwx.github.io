---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1> StampMe.ps1</h1> 
<p>Rename a  file or a folder by appending the current date and time to the existing file or folder name:</p>
<pre>#StampMe.ps1
param( [string] $fileName)

# Check the file exists
if (-not(Test-Path $fileName)) {break}

# Display the original name
"Original filename: $fileName"

$fileObj = get-item $fileName

# Get the date
$DateStamp = get-date -uformat "%Y-%m-%d@%H-%M-%S"

$extOnly = $fileObj.extension

if ($extOnly.length -eq 0) {
   $nameOnly = $fileObj.Name
   rename-item "$fileObj" "$nameOnly-$DateStamp"
   }
else {
   $nameOnly = $fileObj.Name.Replace( $fileObj.Extension,'')
   rename-item "$fileName" "$nameOnly-$DateStamp$extOnly"
   }

# Display the new name
"New filename: $nameOnly-$DateStamp$extOnly"</pre>
<p> <b>Example</b>s</p>
<p>Assuming stampme.ps1 is saved in the current directory:</p>
<pre>PS C:\&gt;./stampme.ps1 "F:\work\some file.txt"

  &gt; F:\work\some file-2009-11-30@09-30-00.txt
</pre>
<p>Rename  a collection of .txt files:</p>
<p class="code">foreach ($file in get-ChildItem *.txt) { ./stampme.ps1 $file.name }</p>
<p class="quote"><i>“Two roads diverged in a wood, and I, I took the one less traveled by, And that has made all the difference” ~ Robert Frost</i></p>
<p><b>Related:</b></p>
<p><a href="rename-item.html">Rename-Item</a> - Change the name of an existing item.<br>
<a href="syntax-touch.html">Touch</a> - Change the date/time of a file/folder.<br>
<a href="syntax-set-eol.html">set-eol</a> - Change the line endings of a text file.<br>
<a href="../dates.html">Standard date and time notation</a> - YYYY-MM-DD<br>
<a href="../nt/syntax-stampme.html">StampMe.cmd</a> - Rename a file (CMD script)
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-stampme.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

