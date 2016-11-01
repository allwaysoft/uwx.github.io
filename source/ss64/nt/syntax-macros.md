---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Batch file macros</h1> 
<p>A macro allows you to embed blocks of code in a variable. Like calling a <a href="call.html">subroutine</a> or <a href="syntax-functions.html">function</a> this allows reusing the same block of code multiple times, the difference is that by placing the code in a variable the performance will be much faster. </p>
<p>This is an advanced technique but can be very useful in scripts that include large blocks of code or looping commands where the performance of other methods is too slow.</p>
<p>A  macro which runs <a href="exit.html">exit /b</a></p>
<p class="code">set _ex=exit /b</p>
<p>You can then exit a subroutine with:</p>
<p class="code">%_ex%</p>
<p>A   macro which lists all the .XLS files in a folder:</p>
<pre>Set _macro=Dir c:\demo\*.xls</pre>
<p> We can now run the Macro like this:<br>
</p>
<pre>%_macro%
</pre>
<p>So far so like the <a href="doskey.html">DOSKEY</a> command, but to make this more powerfull you will want to pass arguments to the macro, in the example above you might want to pass the name of the folder to be listed.</p>
<p>Passing arguments to a macro is not particularly easy, the best method (discovered by <a href="http://www.dostips.com/forum/viewtopic.php?f=3&amp;t=2518">Jeb</a>) is to place a <span class="code"><a href="for_l.html">For /L</a></span> command within the macro, set to run 2 steps each time the macro is run:</p>
<ul>
<li> In the first step the arguments are stored in a variable (<span class="code">argv</span>) </li>
<li> In the second step the main body of the macro runs and can (optionally) read the variable</li>
</ul>
<p>The basic structure of the macro definition:<br>
</p>
<pre>Set _macro=For /l %%n in (1 1 2) do if %%n==2 (Echo Main MACRO goes here.) else setlocal enableDelayedExpansion ^&amp; Set argv=, 

%_macro% arg1 arg2

 :: The macro will expand to:
 :: for /l %%n in (1 1 2) do if %%n==2 (Echo Main MACRO goes here.) else setlocal enableDelayedExpansion &amp; Set argv=, arg1 arg2

 :: which is equivalent to:
 ::    setlocal enableDelayedExpansion
 ::    Set argv= arg1 arg2
 ::    Echo Main MACRO goes here.</pre>
<p> Example:<br>
</p>
<pre>@echo off
cls
setlocal DisableDelayedExpansion
set LF=^


::Above 2 blank lines are required - do not remove
set ^"\n=^^^%LF%%LF%^%LF%%LF%^^"

set _macrodemo=for /L %%n in (1 1 2) do if %%n==2 <b>(</b>%\n%
      for /F "tokens=1 delims=, " %%G in ("!argv!") do (%\n%
         echo _argument1=%%G %\n%
         set "_argument1=!%%~G!"%\n%
         dir !_argument1!<b>\*.xls</b>%\n%
      ) %\n%
<b>)</b> ELSE setlocal enableDelayedExpansion ^&amp; set argv=,

set "_testfolder=<b>c:\demo</b>"
%_macrodemo% _testfolder</pre>
<p>In a macro where more than one argument need to be passed, these will become tokens 2,3,4... in the FOR / F command.</p>
<p>A library of macros can be defined by running a single MACROS.CMD batch file, allowing the library macros to be used in multiple batch files.</p>
<p>Credits: <a href="http://ss64.org/profile.php?id=539">Ed Dyreen</a>, <a href="http://ss64.org/profile.php?id=1666">Jeb</a> and <a href="http://ss64.org/profile.php?id=2650">Dave Benham</a>, the original dostips forum threads are <a href="http://www.dostips.com/forum/viewtopic.php?f=3&amp;t=2518">here</a> and <a href="http://www.dostips.com/forum/viewtopic.php?f=3&amp;t=1827">here</a>.</p>
<p><span class="quote"><i>“Macro dictionary definition: 1. Large 2. Long 3. Inclusive” ~ from the Greek 'makros'</i></span></p>
<p><b>Related:</b></p>
<p><a href="syntax-functions.html">functions</a> - How to package blocks of code.<br>
<a href="call.html">CALL</a> - Call one batch program/subroutine from another<br>
<a href="http://stackoverflow.com/questions/6379619/explain-how-dos-batch-newline-variable-hack-works">How the %LF% newline variable hack works</a> - StackOverflow<br>
<a href="doskey.html">DOSKEY</a> - Edit command line, recall commands, and create macros</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-macros.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

