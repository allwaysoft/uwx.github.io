---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Remove Quotes from a string</h1> 
<p>Several routines that can be used to remove quotes from the contents of a variable.</p>
<p>In the majority of cases running any current version of Windows, the simplest method is to use<span class="code"> <a href="syntax-args.html">%~1</a></span><a href="syntax-args.html"> Parameter Extensions</a> to remove the quotes automatically</p>
<pre>   @ECHO OFF
   Set _string=%~1
   Echo the string passed to this script is %_string% </pre>
<p>(you may also want to test <a href="if.html#exist">IF the 
variable is empty/NULL</a>)</p>
<p>This is equivalent to the following, which can be used to remove <i>outer</i> quotes from <b>any</b> string, not just a parameter string: </p>
<pre>   :: Remove quotes
   SET _string=###%_string%###
   SET _string=%_string:"###=%
   SET _string=%_string:###"=%
   SET _string=%_string:###=%</pre>
<p>If you just want to remove ALL quotes from a string, this can be done in one line with <a href="syntax-replace.html">variable replace</a> syntax:</p>
<pre>   Set _somevariable=%_somevariable:"=%</pre>
<p>File and folder names cannot (legally) contain quotes so  the above is often all that's needed.</p>
<p>A one line function, using a FOR command to run parameter expansion and remove quotes (the <span class="code">%~A</span> removes the quotes), this is a good approach when you need to dequote multiple strings, just call the function with each string:</p>
<p class="code"> {% raw %}:::{% endraw %}{% raw %}:::{% endraw %}{% raw %}:::{% endraw %} one line Dequote example {% raw %}:::{% endraw %}{% raw %}:::{% endraw %}{% raw %}:::{% endraw %}{% raw %}:::{% endraw %}<br>
@Echo Off<br>
Setlocal<br>
 Set _mypath="C:\Program Files\ss64\"<br>
CALL :dequote _mypath<br>
Echo %_mypath%<br>
Goto :eof<br>
<br>
:DeQuote<br>
<b>for /f "delims=" %%A in ('echo %%%1%%') do set %1=%%~A</b><br>
Goto :eof</p>
<p>The above will turn "C:\Program Files\ss64\" into C:\Program Files\ss64\</p>
<p>If the line in bold is saved as a single line batch file DeQuote.cmd, then it can be called from other batch scripts:</p>
<p> <span class="code"><a href="call.html">CALL</a> DeQuote.cmd VariableName</span></p>
<p>There may be cases when you only want to affect the string if it both starts and ends with a quote and raise an error or some other action if mismatched quotes are found. 
Some  more complex scripts to handle this can be found <a href="http://ss64.org/viewtopic.php?id=282">here in the forum</a>.</p>
<p class="quote"><i>“One look is worth a thousand words” ~ Fred R. Barnard</i></p>
<p><b>Related:</b><br><br>
<a href="setlocal.html">SetLocal</a> - EnableDelayedExpansion<br>
<a href="syntax-filenames.html">Long Filenames and NTFS</a> - Valid characters in filenames</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-dequote.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

