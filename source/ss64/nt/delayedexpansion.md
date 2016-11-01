---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>EnableDelayedExpansion</h1> 
<p> Delayed Expansion will cause   variables to be expanded at execution time rather than at parse time, this option is turned on with the <a href="setlocal.html">SETLOCAL</a> command. When delayed expansion is in effect variables can be referenced using <span class="code">!variable_name!</span> (in addition to the normal <span class="code">%variable_name%</span> ) </p>
<p><b>Example</b></p>
<p><span class="code">Setlocal EnableDelayedExpansion<br>
Set _var=first<br>
<b>Set _var=second&amp; Echo %_var% !_var!</b><br>
</span><br>
You might expect that to produce the output <span class="code">second</span> <span class="code">second</span> but in fact it will  output:<span class="code"> first second
</span></p>
<p>Looking at the line in <b>bold</b> above,
 the line is <i>parsed </i>and the variable <span class="code">%_var%</span> is expanded to "first"<br>
Then the line is <i>executed</i> (changing the value of <span class="code">_var</span>) <br> 
finally
<span class="code">!_var!</span> is expanded (because it is using delayed expansion) and it now shows the updated value "second"</p>
<p>In the same way, setting DelayedExpansion also affects the point at which <a href="syntax-esc.html">escape characters</a> (^) and <a href="syntax-redirection.html">redirection characters</a> are evaluated:</p>
<pre>@echo off
Setlocal
Set _html=Hello^&gt;World
Echo %_html%</pre>
<p> In the above, the Echo command will create a text file called 'world' - not quite what we wanted! This is because the variable is expanded at parse time, so the last line is executing <span class="code">Echo Hello &gt; World</span> and the &gt; character is interpreted as a redirection operator.</p>
<p>If we now try the same thing with <span class="code">EnableDelayedExpansion</span>:</p>
<p><span class="code">Setlocal EnableDelayedExpansion<br>
Set _html=Hello^&gt;World<br>
Echo !_html!</span></p>
<p>With delayed expansion, the  variable (including the <span class="code">&gt;</span> ) is only expanded at execution time so the <span class="code">&gt;</span> character is never interpreted as a redirection operator.<br>
<br>
This makes it possible to work with HTML and XML formatted strings in a variable.</p>
<p>Delayed  variable expansion is often useful when working with FOR Loops, normally an entire FOR loop is evaluated as a single command even if it spans multiple lines of a batch script.<br>
This is the default behaviour of a FOR loop:</p>
<pre>@echo off
setlocal
:: count to 5 storing the results in a variable
set _tst=0
FOR /l %%G in (1,1,5) Do (echo [<b>%_tst%</b>] &amp; set /a _tst+=1)
echo Total = %_tst%

C:\&gt; demo_batch.cmd
[0]
[0]
[0]
[0]
[0]
Total = 5</pre>
<p>Notice that  when the FOR loop finishes we get the correct total, so the variable correctly increments,  but during each iteration of the loop<br>
the variable is stuck at it's initial value of 0 </p>
<p>The same script with <b>EnableDelayedExpansion</b>, gives the same final result but also displays the intermediate values:</p>
<pre>@echo off
setlocal EnableDelayedExpansion 
:: count to 5 storing the results in a variable
set _tst=0
FOR /l %%G in (1,1,5) Do (echo [<b>!_tst!</b>] &amp; set /a _tst+=1)
echo Total = %_tst%

C:\&gt; demo_batch.cmd
[0]
[1]
[2]
[3]
[4]
Total = 5</pre>
<p>Notice that within the for loop we use <span class="code">!variable!</span> instead of <span class="code">%variable%.</span></p>
<p>A one line example - Setting and then Echoing the same variable within a FOR command:</p>
<p><span class="code">Setlocal EnableDelayedExpansion <br>
  for /f %%G in ("abc") do ( set _demo=%%G &amp; echo !_demo!) </span><br>
</p>
<p>Example of <a href="syntax-replace.html">replacing</a> one variable with values from  another:</p>
<pre>@echo off
setlocal EnableDelayedExpansion
Set var1=Hello ABC how are you
Set var2=ABC
Set result=!var1:%var2%=Beautiful!
Echo [!result!]</pre>
<p>An alternative method for achieving the above is <a href="call.html#advanced">CALL SET</a></p>
<h2>Bugs when using delayed variable expansion</h2>
<blockquote>
<p>If <i>DelayedExpansion</i> is processing a file with a<span class="code"> ! </span>in the <a href="syntax-filenames.html">filename</a>, that will be interpreted as a variable, this is not a common character used in filenames, but it can cause scripts to fail.</p>
<p>When <i>DelayedExpansion</i> is used inside a <i>code block</i> (one or several commands grouped between parentheses) whose output is <a href="syntax-redirection.html"><i>Piped</i></a>, the <a href="http://www.robvanderwoude.com/variableexpansionbug.php">variable expansion will be skipped</a>. This is an incompatibility when using these three features together.</p>
</blockquote>
<p><i>EnableDelayedExpansion</i> is Disabled by default.<br>
<i>EnableDelayedExpansion</i> can also be enabled by starting <a href="cmd.html">CMD</a> with the<span class="code"> /v </span>switch.</p>
<p><i>EnableDelayedExpansion</i> can also be set in the registry under HKLM or HKCU:</p>
<p><span class="code">[HKEY_CURRENT_USER\Software\Microsoft\Command Processor]<br>
</span><span class="code">"DelayedExpansion"= </span>(REG_DWORD)<br> 
<span class="code">1</span>=enabled <span class="code">0</span>=disabled (default)</p>
<p class="quote"><i>“At times it is folly to hasten at other times, to delay. The wise do everything in its proper time” - Ovid</i></p>
<p> <b>Related:</b></p>
<p><a href="http://ss64.org/viewtopic.php?id=985">Forum discussion</a> - EnableDelayedExpansion<br>
<a href="http://blogs.msdn.com/b/oldnewthing/archive/2006/08/23/714650.aspx">OldNewThing</a> - Longer explanation of EnableDelayedExpansion<br>
  <a href="setlocal.html">SETLOCAL</a> - Start localisation of environment changes 
  in a batch file.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

