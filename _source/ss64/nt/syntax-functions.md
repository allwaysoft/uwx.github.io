---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Batch file Functions </h1> 
<p>Packaging up code into a discrete functions, each with a clear purpose is a very common programming technique. Re-using known, tested code, means you can solve problems very quickly by just bolting together a few functions.</p>
<p>The CMD shell does not have any documented support for functions, but you can fake it by passing <a href="syntax-args.html">arguments/parameters</a> to a subroutine and you can use <a href="setlocal.html">SETLOCAL</a>  to control the visibility of variables. </p>
<p>A common first attempt at building a function:<br>
<span class="code">:myfunct<br>
SETLOCAL<br>
SET _var1=%1<br>
SET _var2="%_var1%--%_var1%--%_var1%"<br>
SET _result=%_var2%<br>
ENDLOCAL
</span><br>
<br>
but there is a problem, the ENDLOCAL command will throw away the <span class="code">_result</span> variable and so the function returns nothing. </p>
<p><span class="code">:myfunct2<br>
SETLOCAL<br>
SET _var1=%1<br>
SET _var2="%_var1%--%_var1%--%_var1%"<br>
ENDLOCAL<br>
SET _result=%_var2%</span></p>
<p>This version is getting close, but it still fails to return a value, this time because ENDLOCAL  will throw away the <span class="code">_var2</span> variable<br>
<br>
The solution to this is to take advantage of the fact that the CMD shell evaluates variables on a line-by-line basis - so placing ENDLOCAL <b>on the same line</b> as the SET statement(s)  gives the result we want. This technique is known as 'tunneling' and works for both functions and entire batch scripts:</p>
<p><span class="code">:myfunct3<br>
SETLOCAL<br>
SET _var1=%1<br>
SET _var2="%_var1%--%_var1%--%_var1%"<br>
ENDLOCAL <a href="syntax-redirection.html">&amp;</a> SET _result=%_var2%</span><br>
<br>
In examples above there are just 2 local variables (_var1 and _var2) but in practice there could be far more, by turning the script into a function with SETLOCAL and ENDLOCAL we don’t have to worry if any variable names will clash.</p>
<p>In other words you can do this:</p>
<p class="code">@ECHO OFF <br>
SET _var1=64<br>
SET _var2=123<br>
CALL :myfunct3 Testing<br>
echo _var1 is %_var1%<br>
echo Final result %_result%<br>
goto :eof<br> 
<br>
:myfunct3<br>
SETLOCAL<br>
SET _var1=%1<br>
SET _var2="%_var1%--%_var1%--%_var1%"<br>
ENDLOCAL <a href="syntax-redirection.html">&amp;</a> SET _result=%_var2%</p>
<p>When working with functions it can be useful to use <a href="syntax-args.html">Filename Parameter Extensions</a> against the function name, <span class="code">%0</span> will contain the call label, <span class="code">%nx0</span>  the file name, see <a href="http://rhubbarb.wordpress.com/2009/06/17/batch-func-param-filename/">Rob Hubbards blog</a> for an example. Note that if you have two scripts one calling another, this will not reveal the location of the 'calling' script.</p>
<p class="quote"><i>“Cats are intended to teach us that not everything in nature has a function” ~ Garrison Keillor</i>
</p><p><b>Related:</b></p>
<p>  <a href="call.html">CALL</a> - Call one batch program from another<br>
<a href="syntax-macros.html">Macros</a> - Embed blocks of code in a variable.<br>
<a href="setlocal.html">SETLOCAL</a> - Control the visibility of environment variables<br>
<a href="shift.html">SHIFT</a> - Shift the position of replaceable parameters in a batch file<br>
<a href="http://www.dostips.com/DtCodeCmdLib.php">DosTips</a> - A collection of CMD functions </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-functions.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

