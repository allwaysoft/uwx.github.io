---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>set-eol.ps1</h1>
<p>A PowerShell script to change the line endings of a text file.<br>
This script will work even for a source file that contains a mixture of different file endings.</p>
<pre># set-eol.ps1
# Change the line endings of a text file to: Windows (CR/LF), Unix (LF) or Mac (CR)
# Requires PowerShell 3.0 or greater

# Syntax
#       ./set-eol.ps1 -lineEnding {mac|unix|win} -file FullFilename

#     mac, unix or win  : The file endings desired.
#     FullFilename      : The full pathname of the file to be modified.

#     ./set-eol win "c:\demo\data.txt"

[CmdletBinding()]
Param(
  [Parameter(Mandatory=$True,Position=1)]
    [ValidateSet("mac","unix","win")] 
    [string]$lineEnding,
  [Parameter(Mandatory=$True)]
    [string]$file
)

# Convert the friendly name into a PowerShell EOL character
Switch ($lineEnding) {
  "mac"  { $eol="`r" }
  "unix" { $eol="`n" }
  "win"  { $eol="`r`n" }
} 

# Replace CR+LF with LF
$text = [IO.File]::ReadAllText($file) -replace "`r`n", "`n"
[IO.File]::WriteAllText($file, $text)

# Replace CR with LF
$text = [IO.File]::ReadAllText($file) -replace "`r", "`n"
[IO.File]::WriteAllText($file, $text)

#  At this point all line-endings should be LF.

# Replace LF with intended EOL char
if ($eol -ne "`n") {
  $text = [IO.File]::ReadAllText($file) -replace "`n", $eol
  [IO.File]::WriteAllText($file, $text)
}
Echo "   ** Completed **"
</pre>
<p> The script loads the whole file into memory so may not be suitable for very large files. 
 

The normal PowerShell routine  to replace characters is  <a href="replace.html">.replace</a> but
that will add a trailing CR/LF, so we use <span class="code">::WriteAllText</span> instead.</p>
<p>A simple but less flexible method <a href="http://powershell.com/cs/blogs/tips/archive/2014/10/03/normalizing-line-endings.aspx">from PowerShell.com</a>, is below. Get-Content will identify even non-standard line breaks, so the result is a string array of lines. When these are written these back to a new file, <a href="set-content.html">Set-Content</a> will replace the default Windows CR/LF line endings.</p>
<pre>$OldFile = "$home\input.txt"
$NewFile = "$home\output.txt"
Get-Content $OldFile | Set-Content -Path $NewFile</pre>
<p class="quote"><i>“Well, it's all right, if you live the life you please, Well, it's all right, even if the sun don't shine, Well, it's all right, we're going to the end of the line” ~ Traveling Wilburys, End Of The Line</i></p>
<p><b>Related:</b></p>
<p><a href="../ascii.html">ASCII table</a><br>
<a href="syntax-stampme.html">StampMe</a> - Rename a file with the current Date/Time.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

