---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Syntax : Escape Characters, Delimiters and Quotes</h1> 
<h2>Using "Double Quotes"</h2>
<blockquote>
<p>If a single parameter contains spaces, you can still pass it as one item by surrounding in "quotes" - this works well for long filenames.<br>
<br>
If a parameter is used to supply a filename like this:</p>
<pre>    MyBatch.cmd "C:\Program Files\My Data File.txt"</pre>
<p>This parameters will be:</p>
<pre>   %0 =MyBatch<br>   %1 ="C:\Program Files\My Data File.txt"</pre>
<p>To launch a batch script with spaces in the Program Path requiring "quotes"</p>
<pre><a href="cmd.html">CMD</a> /k ""c:\batch files\test.cmd" "Parameter 1 with space" "Parameter2 with space""
</pre>
<p>  In the FIND comand, the <span class="code">"</span> quote can be escaped by doubling it to <span class="code">""</span></p>
</blockquote>
<h2>Removing Quotes</h2>
<blockquote>
<p> Several methods for  removing quotes are listed on the <a href="syntax-dequote.html">dequote page</a>.</p>
</blockquote>
<h2> Working without Quotes</h2>
<blockquote>
<p> Without surrounding quotes, a long filename will be passed as %1 %2 %3... </p>
<pre>   MyBatch C:\Program Files\My Data File.txt</pre>
<p> To refer to the pathname above use %* rather than %1 %2 %3 - the %* will cover all parameters - even if there are more than %9</p>
<p>You can apply <a href="syntax-args.html">Extended Filename</a> syntax to %* with the following workaround: </p>
</blockquote>
<pre>  @ECHO OFF
  SET _params=%*

  :: pass params to a subroutine
  CALL :sub "%_params%" 
  GOTO :eof

  :sub 
  :: Now display just the filename (not path)
  ECHO %~n1</pre>
<h2><a id="delimiters"></a>Delimiters</h2>
<blockquote>
<p>Delimiters separate one parameter from the next - they split the command line up into words.</p>
<p>Parameters are most often separated by spaces, but any of the following are also valid delimiters:<br>
<br>
Comma (,)<br>
Semicolon (;)<br>
Equals (=) <br>
Space ( )<br>
Tab  ( &nbsp;&nbsp;&nbsp;&nbsp;) <br>
<br>
Notice that although / and - are commonly used to separate  command options, they are absent from the list above. This is because batch file parameters are passed to CMD.exe which can accept it's own parameters (which are invoked using / and - )<br>
<br>
One exception to this standard list of delimiters is the <a href="for.html">FOR</a> command where the default is just [space] and [tab] and you can use the <span class="code">delims=</span> option to specify something different.</p>
<p>When using the TAB character as a delimiter be aware that many text editors will insert a TAB as a series of SPACEs.<br>
<br>
When you use %* to refer to all parameters, the value returned will include the delimiters, under NT 4.0 this will include the leading space, under Windows 2000 and above it won’t.</p>
</blockquote>
<h2><b><a id="escape"></a></b>Escape Character</h2>
<blockquote>
<pre>  ^  Escape character.</pre>
<p>Adding the escape character before a command symbol allows it to be treated as ordinary text. <br>
When <a href="syntax-redirection.html">piping or redirecting</a> any of these charcters you should prefix with the escape character:<span class="code"> &amp; \ &lt; &gt; ^</span><span class="code"> |</span></p>
</blockquote>
<pre>     e.g.  ^\  ^&amp;  ^|  ^&gt;  ^&lt;  ^^ <br></pre>
<h2>Escaping CR/LF line endings. </h2>
<blockquote>
<p>The<span class="code"> ^ </span>escape character can be used to make long commands more readable by splitting them into multiple lines and escaping the Carriage Return + Line Feed (CR/LF) at the end of a line:</p>
<pre>ROBOCOPY \\FileServ1\e$\users ^
 \\FileServ2\e$\BackupUsers ^
 /COPYALL /B /SEC /MIR ^
 /R:0 /W:0 /LOG:MyLogfile.txt /NFL /NDL</pre>
<p>One thing to be careful of with this technique is that a stray space at the end of a line (after the ^) will break the command, this can be hard to spot unless you have a text editor that displays spaces and tab characters. </p>
<p>Some commands (e.g. REG and FINDSTR) use the  standard escape character of<span class="code"> \ </span>(as used by C, Python, SQL, bash and many other languages.)<br>
The<span class="code"> \ </span>escape  can cause problems with quoted directory paths that contain a trailing backslash because the closing quote " at the end of the line will be escaped <span class="code">\"</span>.</p>
<p>To save a directory path with a trailing backslash (<span class="code">\</span>) requires adding a second backslash to 'escape the escape' <br>
so for example instead of <span class="code">"C:\My Docs\"</span> use <span class="code">"C:\My Docs\\"</span></p>
<p>To be sure that a  path includes a trailing backslash, you can test for it: </p>
<p class="code">Set _prog=C:\Program Files\SS64 App<br>
IF %_prog:~-1% NEQ \ (Set _prog=%_prog%<b>\</b>)<br>
Echo "%_prog%"</p>
</blockquote>
<h2>Escaping the pipeline</h2>
<blockquote>
<p>When a <a href="syntax-redirection.html">pipe</a> is used, the expressions are parsed twice. First when the expression before the pipe is executed and  a second time when the expression after the pipe is executed. So to escape any characters in the second expression  double escaping is needed: </p>
<p>The line below will echo a single `&amp;` character: </p>
<p class="code">break| echo ^^^&amp;</p>
</blockquote>
<h2>Escaping Percents</h2>
<blockquote>
<p>The<span class="code"> % </span>character has a special meaning for <a href="syntax-args.html">command line parameters</a> and <a href="for.html">FOR</a> parameters. <br>
To treat a percent as a regular character, double it:</p>
<p> <span class="code">%%</span><br>
<br>
Many characters such as<span class="code"> \ = ( )</span> do not need to be escaped when they are used within a <span class="code">"quoted string"</span> typically these are charcters you might find in a filename/path. The percent character is one exception to this rule, even though under NTFS<span class="code"> % </span>is a valid filename character.</p>
<h2>Escaping Exclamation marks</h2>
<p>When the shell is running in <a href="delayedexpansion.html">EnableDelayedExpansion</a> mode the<span class="code"> ! </span>character is used to denote a variable and so must be escaped (twice) if you wish to treat it as a regular character:</p>
<p><span class="code"> ^^!</span></p>
</blockquote>
<h2>Escape the Escape character</h2>
<blockquote>
<p>The escape character can be used to escape itself <span class="code">^^</span> (meaning don’t treat the first <span class="code">^</span> as an escape character), so you are escaping the  escape character:</p>
<pre>The characters in bold get escaped: 
    ^<b>&amp;</b>  =&gt;   &amp;
  ^<b>^</b>^<b>&amp;</b>  =&gt;  ^&amp;
^<b>^</b>^<b>^</b>^<b>&amp;</b>  =&gt; ^^&amp;</pre>
</blockquote>
<h2>Special Cases</h2>
<blockquote>
<p>A small number of commands follow slightly different rules, FINDSTR, REG and RUNAS all use \ as an escape character instead of ^</p>
</blockquote>
<p class="quote"><i>“All the best stories in the world are but one story in reality - the story of escape. It is the only thing which interests us all and at all times, how to escape” ~ A. C. Benson</i></p>
<p><b>Related:</b></p>
<p><a href="delayedexpansion.html">SETLOCAL EnableDelayedExpansion</a> - More examples, particularly for  HTML.<br>
<a href="syntax-filenames.html">Long Filenames and NTFS</a> - Valid characters in filenames<br>
<a href="findstr-escapes.html">FINDSTR Escapes</a> and Length limits<br>
<a href="http://stackoverflow.com/questions/4094699/how-does-the-windows-command-interpreter-cmd-exe-parse-scripts?lq=1">How does the Windows Command Interpreter (CMD.EXE) parse scripts?</a> - StackOverflow<br>
<a href="syntax.html">cmd Syntax</a><br>
<a href="../ps/syntax-esc.html">Powershell Escape Character</a><br>
In bash use <span class="code"> \ </span>to escape a line ending.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-esc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

