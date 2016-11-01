---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>%Errorlevel%</h1>
<p>Almost all applications and utilities will set an Exit Code when they complete/terminate.</p>
<p>The exit codes that are set  do vary, in general a code of 0 (false) will indicate successful completion.</p>
<p>The exit codes set by resource kit utilities are not always consistent, they can vary between machines with different Service packs/Resource kit updates applied. Some utilities will return negative numbers as an exit code.</p>
<p>If you attempt to execute a non-existent command %ERRORLEVEL% = 9009</p>
<h2>Detecting Errors</h2>
<blockquote>
<p>In the CMD shell the exit code is made available via the <span class="code">%ERRORLEVEL%</span> variable or via <a href="if.html">IF ERRORLEVEL </a>...</p>
<p><span class="code">IF ERRORLEVEL <i>n</i></span> statements should be read as IF <i>Errorlevel</i> <span class="code">&gt;=</span> <i>number</i><br>
i.e.<br>
<span class="code">IF ERRORLEVEL 1</span> will return TRUE when the  ERRORLEVEL is greater than or equal to 1</p>
<p><span class="code">IF NOT ERRORLEVEL 1</span> means if ERRORLEVEL is less than 1 (Zero or negative).</p>
<p>When ending a <a href="call.html">subroutine</a>, you can use <a href="exit.html">EXIT /b <i>N</i></a> to set a specific ERRORLEVEL <i>N</i>.</p>
<p>You should never attempt to write to the <span class="code">%ERRORLEVEL%</span> variable  because the value you set  will create a user variable named <span class="code">ERRORLEVEL</span> which then <a href="http://blogs.msdn.com/b/oldnewthing/archive/2008/09/26/8965755.aspx">takes precedence</a> over the internal pseudo variable <span class="code">ERRORLEVEL</span>.</p>
<p>When an external command is run by CMD.EXE, it will detect the executable's return code and set the ERRORLEVEL to match. In most cases the ERRORLEVEL will be the same as the exit code, but there are a few buggy cases where this fails.</p>
<p>The Exit Codes can be detected directly with  <a href="syntax-redirection.html">redirection operators</a> (Success/Failure ignoring the ERRORLEVEL)</p>
</blockquote>
<h2>Some commands don't follow the rules</h2>
<blockquote>
<p>Commands that do NOT affect the ERRORLEVEL: <br>
<span class="code">BREAK, ECHO, ENDLOCAL, FOR,       IF,       PAUSE, REM,  RD/RMDIR, SET,      TITLE</span></p>
<p>Commands that will set but not clear an ERRORLEVEL: <br>
<span class="code">CLS, GOTO, KEYS, POPD, SHIFT </span></p>
<p>Commands that set an Exit Code but not the ERRORLEVEL: <br>
<span class="code">RD/RMDIR</span></p>
<p>Commands that set an ERRORLEVEL but not the Exit Code (<a href="http://stackoverflow.com/questions/34936240/batch-goto-loses-errorlevel/34937706#34937706">SO explanation</a>): <br>
<span class="code">MD/MKDIR</span></p>
</blockquote>
<h2>Batch files</h2>
<blockquote>
<p> You can make a <a href="syntax-run.html">batch file</a> return a non-zero exit code by using the <a href="exit.html">EXIT</a> command.</p>
<p class="code">Exit 0<br>
Exit /B 5</p>
<p> To force an <span class="code">ERRORLEVEL</span> of 1 to be set <i>without</i> exiting, run a small but invalid command like <span class="code"><a href="color.html">COLOR</a> 00</span> <br>
</p>
<p>There is a key difference between the way .CMD and .BAT batch files set errorlevels:</p>
<blockquote>
<p> An old  .BAT batch script running the 'new' internal commands: APPEND, ASSOC, PATH, PROMPT,  FTYPE and SET will only set <span class="code">ERRORLEVEL</span> if an error occurs. 
So if you have two  commands in the batch script and the first fails, the <span class="code">ERRORLEVEL</span> will remain set even after the second command succeeds.</p>
<p> This can make debugging a problem BAT script more difficult, a CMD batch script is more consistent and will set <span class="code">ERRORLEVEL</span> after every command that you run [<a href="https://groups.google.com/forum/#!msg/microsoft.public.win2000.cmdprompt.admin/XHeUq8oe2wk/LIEViGNmkK0J">source</a>]. </p>
</blockquote>
</blockquote>
<h2>PowerShell</h2>
<blockquote>
<p>In PowerShell<span class="code"> $? </span>contains <span class="code">True</span> if last operation succeeded and <span class="code">False</span> otherwise.</p>
<p>The exit code of the last Win32 executable execution is stored in the automatic variable <span class="code">$LASTEXITCODE</span></p>
<p>To read exit codes (other than 0 or 1) launch the PowerShell script and return the <span class="code">$LASTEXITCODE</span> in a single line like this:</p>
<p><span class="code"><a href="../ps/powershell.html">powershell.exe</a> -noprofile C:\scripts\script.ps1; exit $LASTEXITCODE</span><br>
</p>
</blockquote>
<p><i class="quote">“I’d rather wake up in the middle of nowhere than in any city on earth” ~ Steve McQueen</i><br>
<b><br>
Related:</b></p>
<p><a href="robocopy-exit.html">Robocopy exit codes </a><br>
<a href="syntax-conditional.html">Conditional Execution</a> - if <var>command1</var> succeeds then execute <var>command2</var></p>
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="errorlevel.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

