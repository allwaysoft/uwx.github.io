---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Trap</h1> 
<p>Handle      a terminating error (exception).</p>
<pre>Syntax
      trap [[<i>error_type</i>]] <b>{</b><i>statement_list</i><b>}</b>

Key
   error_type       The terminating error to trap, requires [brackets].
   <i>statement_list</i>   A scriptblock of code to be run.
</pre>
<p>The Trap statement includes a list of statements to run when a        terminating error occurs. </p>
<p>By default, this will trap <b>any</b> terminating error or optionally you may specify an        error type.</p>
<p>A script or command can have multiple Trap statements. Trap statements        can appear anywhere in the script or command. </p>
<p><b>Examples</b></p>
<p>A simple trap that will traps any terminating error displays the error        by using the <span class="code">$_</span> <a href="syntax-automatic-variables.html">automatic variable</a>:</p>
<pre>function TrapTest {
   trap {"Error found: $_"}
   thiswontwork
   }
   
C:\PS&gt; TrapTest
Error found: The term 'thiswontwork' is not recognized as the name
of a cmdlet, function, script file, or operable program. Check the
spelling of the name, or if a path was included verify that the path
is correct, and then try again. </pre>
<p>Use the <a href="break.html">Break</a> and <a href="continue.html">Continue</a> keywords in a Trap statement to        determine whether a script or command will continue to run after a        terminating error. </p>
<p>A Break statement within a Trap statement will stop the function or script:           <br>
<span class="code">{               trap {"Error trapped"; break;}</span></p>
<p>A Continue statement within a Trap statement will resume execution after the statement that caused the error, just as it        would without Break or Continue.<br>
<span class="code">{ trap {"Error trapped"; continue;}</span></p>
<p class="quote"><i>"When elephant steps on a trap, no more trap" ~ African proverb</i></p>
<p><b>Related:</b></p>
<p><a href="try.html">Try ... Catch</a> - Handle a terminating error within a scriptblock<br>
about_Try_Catch_Finally</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="trap.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

