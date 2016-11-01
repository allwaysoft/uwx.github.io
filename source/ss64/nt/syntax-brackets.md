---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Using parenthesis/brackets to group expressions</h1>
<p>Parenthesis can be used to split commands  across multiple lines. This can make code more
  readable. Variables will be evaluated for the code block just as if the command was  a single line.</p>
<pre>      (command)

      (
       command
       command )</pre>
<p>  Example<br>
</p>
<pre>   IF EXIST C:\pagefile.sys <b>(</b>
        ECHO pagefile found on C: drive<b>)</b></pre>
<p>  If the command will fit on a single line, then the parenthesis can be omitted e.g.<br>
    <br>
  <span class="code">IF EXIST data.xls Echo The file was  found.</span></p>
<p>vs</p>
<pre>IF EXIST data.xls <b>(</b>
   Echo The file was  found.
<b>)</b></pre>
<h2>Using variables within parenthesis</h2>
<blockquote>
<p>The CMD shell will  expand [read into memory] all the <a href="syntax-variables.html">variables</a> at the beginning of a code block and use those values even if the variable’s value is  changed within the code block. 
Turning on <a href="delayedexpansion.html">DelayedExpansion</a> will force the shell to read variables at the start of every line.</p>
<p>Code blocks can be used to expand variables in places where they would not otherwise be accepted such as the "tokens" parameter of the <a href="for.html">FOR</a> command:</p>
<pre>@echo off
set tknz="tokens=1-2"
<b>(</b>
   for /f %tknz% %%A in ('echo') do (
     echo %%B
     echo %%A
   )
<b>)</b></pre>
</blockquote>
<h2>Things that break inside parenthesis</h2>
<blockquote>
<p>The CMD shell  does not use any great intelligence when evaluating parenthesis, so for example the command below will fail:</p>
<blockquote>
<p class="code"> IF EXIST MyFile.txt <b>(</b>ECHO Some(more<b>)</b>Potatoes)</p>
<p>This version will work: </p>
<p class="code">IF EXIST MyFile.txt <b>(</b>ECHO Some[more]Potatoes<b>)</b></p>
<p>You could also <a href="syntax-esc.html">escape</a> the extra parenthesis like <span class="code"><b>(</b>ECHO Some^(more^<b>)</b>Potatoes)<br>
</span>Or use quotes; though they will appear in the output <span class="code"><b>(</b>ECHO "Some(more)Potatoes"<b>)</b></span></p>
<p>Although parenthesis are legal in NTFS pathnames, they are often  misinterpreted.</p>
</blockquote>
<p>Chaining to a second batch file (without using <a href="call.html">CALL</a>)  will normally exit the first batch file completely, but if you do this from a code block within parentheses then execution will return to the first batch file and continue where it left off.</p>
<p> This action appears to be very similar to just using CALL, but in some cases; particularly using 
parenthesis within the DO section of a FOR loop; the behaviour becomes buggy. A recommended coding style is to always explicitly use CALL when running a second batch file.</p>
<p> The CMD shell will read the entire content of a code block in parenthesis into memory at once. That code will  always be executed unless you break out of the block by executing a <span class="code">goto :<i>label</i></span> or <span class="code">goto :eof</span><br>
</p>
<p>A <a href="goto.html">GOTO</a> command inside a bracketed code block will break the parenthesis context and may cause errors. For example within a For-Do Loop, a GOTO command will exit the entire loop not just the current iteration.</p>
<p>The interpretation of <a href="rem.html">comments</a>/Labels within a  code block is problematic, so  put all comments outside the parenthesis.</p>
</blockquote>
<h2>Testing Numeric values </h2>
<blockquote>
<p> Do not use parenthesis or quotes if you are comparing numeric values with an <a href="if.html">IF</a> command.<br>
  For example<br>
  <span class="code">IF (2) GEQ (15) echo "bigger"<br>
  </span>or<span class="code"><br>
  IF "2" GEQ "15" echo "bigger"</span><br>
  Will perform a <b>character</b> comparison and will echo "bigger"</p>
<p>  however the commands:<br>
<span class="code">IF 2 GEQ 15 echo "bigger"</span><br>
  or
  <br>
  <span class="code">IF (2 GEQ 15) echo "bigger"<br>
  </span>
  Will perform a <b>numeric</b> comparison and return the correct result.</p>
<p>This behaviour is opposite to the <a href="set.html">SET</a> /a command where quotes <i>are </i>required.</p>
</blockquote>
<p>The maximum number of nested expressions in parenthesis is <a href="http://www.dostips.com/forum/viewtopic.php?f=3&amp;t=6438">256</a> (more will cause a buffer overrun).</p>
<p class="quote"><i>“Yes, we are the richest major nation. But because so much of our national income is concentrated in relatively few hands, large numbers of Americans are worse off economically than their counterparts in other advanced countries” - <a href="http://www.nytimes.com/2002/10/20/magazine/for-richer.html">Paul Krugman</a></i></p>
<p>Related</p>
<p><a href="delayedexpansion.html">DelayedExpansion</a> - Force the shell to read variables at the start of every line.<br>
<a href="if.html">IF</a> - conditional command</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-brackets.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

