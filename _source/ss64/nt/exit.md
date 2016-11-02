---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>EXIT</h1> 
<p>Quit the current batch script, quit the current subroutine or quit the command processor (CMD.EXE) optionally setting an errorlevel code.</p>
<pre>Syntax
      EXIT [/B] [<i>exitCode</i>]

Key
    /B        When used in a batch script, this option will exit 
              only the script (or subroutine) but not CMD.EXE

   <i>exitCode</i>   Sets the %ERRORLEVEL% to a numeric number.
              If quitting CMD.EXE, set the process exit code no.</pre>
<p>To close an interactive command prompt, the <a href="syntax-keyboard.html">keyboard shortcut</a> ALT + F4 is an alternative to typing EXIT.</p>
<h2>Errorlevels</h2>
<blockquote>
<p>EXIT /b  has the option to set a specific errorlevel, <span class="code">0</span> for sucess, <span class="code">1</span> or greater for an error. <br>
EXIT without an ExitCode acts the same as <a href="goto.html">goto:eof</a> and will not alter the <a href="errorlevel.html">%ERRORLEVEL%</a></p>
<p>You should never attempt to directly write to the <span class="code">%ERRORLEVEL%</span> variable, (SET errorlevel...) instead use the EXIT command as a safe way to alter the value of the internal <span class="code">ERRORLEVEL</span> pseudo variable.</p>
</blockquote>
<p>When EXIT /b used with <a href="for_l.html">FOR /L</a>, the execution of the commands in the loop is stopped, but the loop itself continues until the end count is reached. This will cause slow performance if the loop is (pointlessly) counting up to a large number. <br>
In the case of an infinite loop, this EXIT /b behaviour will cause the script to hang until manually terminated with Ctrl + C</p>
<p>Exiting nested <a href="for.html">FOR</a> loops, if <span class="code">EXIT /b</span> can be used to exit a FOR loop that is nested within another FOR loop.<br>
This will only work if the inner FOR loop is contained in a separate <a href="call.html">subroutine</a>, <span class="code">EXIT /b</span> terminates the subroutine.</p>
<p><b>Examples</b></p>
<p> Exit if a required file is missing<span class="code"> <br>
@Echo Off<br>
If not exist MyimportantFile.txt <b>Exit /b</b><br>
Echo If we get this far the file was  found
</span></p>
<p>Set the <a href="errorlevel.html">errorlevel</a> to 5<br>
<span class="code">@Echo Off<br>
call :setError<br>
echo %errorlevel%<br>
goto :eof</span></p>
<p class="code">:setError<br>
Exit /B 5</p>
<p>Using EXIT /b to exit a nested FOR loop (so skipping the values X,Y andZ), but still continuing the main loop:</p>
<pre>@Echo Off
Setlocal 
For %%A in (alpha beta gamma) DO (
   Echo Outer loop %%A
   call :inner 
)
goto :eof

:inner
For %%B in (U V W X Y Z) DO (
   if %%B==X ( <b>exit /b 2</b> )
   echo    Inner loop    Outer=%%A Inner=%%B
)</pre>
<p>EXIT is an <a href="syntax-internal.html">internal</a> command.</p>
<p class="quote"><i>“Making music is not about a place you go. It’s about a place you get out of. I’m underwater most of the time, and music is like a tube to the surface that I can breathe through. It’s my air hole up to the world. If I didn’t have the music I’d be under water, dead” ~ Fiona Apple </i></p>
<p><span class="body"> </span> <b>Related:</b></p>
<p><span class="body"><a href="verify.html">VERIFY</a> - Provides an alternative method of raising an error</span>level without exiting<br>
<a href="tskill.html">TSKILL</a> - End a running process<br>
Powershell: <a href="../ps/exit-pssession.html">Exit</a> - Exit Powershell or <a href="../ps/break.html">break</a> - Exit a program loop<br>
Equivalent bash command (Linux):<a href="../bash/export.html">   </a><a href="../bash/break.html">break</a> - Exit from a loop</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
