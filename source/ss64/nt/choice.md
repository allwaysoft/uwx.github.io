---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>CHOICE.exe</h1>
<p>Accept user input to a batch file.  Choice allows single key-presses to be captured from the keyboard.</p>
<pre>    CHOICE [/c [choiceKeys]] [/N] [/CS] [/t <i>Timeout</i> /d <i>Choice</i>] [/m <i>Text</i>]

key
   /C[:]<i>choiceKeys</i> : One or more keys the user can press. Default is YN.

   /N              : Do not display <i>choiceKeys</i> at the end of the prompt string.

   /CS             : Make the <i>choiceKeys</i> Case Sensitive.

   /T <i>Timeout</i>      : Timeout in <i>Timeout</i> seconds
                     If <i>Timeout</i> is 0 there will be no pause and the
                     default will be selected.

   /d <i>choice   </i>    : Default choice made on Timeout.

   /m <i>text</i>         : Message string to describe the choices available.</pre>
<p><span class="code">ERRORLEVEL</span> will return the numerical offset of choiceKeys.<br>
Choice.exe is a standard command in Windows 2003, Vista and Windows 7 (for XP you can use  the early resource kit versions).</p>
<p><b>Bugs</b><br>
Early versions of Choice.<b>com</b> (not Choice<b>.exe</b>)  burn a lot of CPU's when in a wait state, plus there are some issues where multiple concurrent invocations will clobber each other.</p>
<p><b>Examples:</b><br>
<br>
<span class="code">CHOICE /C CH /M Select [C] CD or [H] Hard drive <br>
IF errorlevel 2 goto sub_hard<br>
IF errorlevel 1 goto sub_cd</span><b><br>
<br>
</b>The order of the IF statements above matters, <span class="code">IF errorlevel 1</span> will return TRUE for an errorlevel of 2 <b><br>
<br>
</b>
CHOICE can be used to set a specific %errorlevel% <br>
for example to set the %errorlevel% to 6 :<br>
<span class="code">ECHO 6| CHOICE /C 123456 /N &gt;NUL</span><b><br>
</b><br>
<i class="quote">“If you limit your choices only to what seems possible or reasonable, you disconnect yourself from what you truly want, and all that is left is compromise” - Robert Fritz</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="if.html">IF</a> - Conditionally perform a command<br>
<a href="set.html">SET /P</a> - Prompt for user input (accepts a whole string instead of one keypress) <br>
PowerShell: <a href="../ps/read-host.html">Read-Host</a> - Read a line of input from the console.<br>
Equivalent bash command (Linux): <a href="../bash/case.html"> case</a> / <a href="../bash/select.html">select</a> - Accept keyboard input</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="choice.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
