---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>SHIFT</h1> 
<p> Change the position of command line arguments passed to a batch file.</p>
<pre>Syntax
      SHIFT [/n]

Key
   /n    Start at the <i>n</i>th argument, where <i>n</i> is between zero and eight. </pre>
<p>You can get the value of any <a href="syntax-args.html">argument</a> using a % followed by it's numerical position on the command line. The first item passed is always %1 the second 
item is always %2 and so on. </p>
<p>Only parameters %1 to %9 can be referenced by number, but it is possibly to pass more than 9 arguments. The SHIFT command provides a way of accessing these additional argument values.</p>
<p>SHIFT will not affect the value of <span class="code">%*</span> which holds all the original arguments  %1 %2 %3...</p>
<p>The argument <span class="code">%0</span> will initially refer to the path that was used to execute the batch, e.g. MyBatch.cmd if in the current directory or a full path like C:\apps\myBatch.cmd</p>
<p>The SHIFT command will not work within <a href="syntax-brackets.html">parenthesis/brackets</a>, so place all your command line arguments in variables before running any FOR commands or other bracketed expressions. Or use the CALL syntax as explained in <a href="http://ss64.org/viewtopic.php?id=1708">this forum thread.</a></p>
<p>If you drag and drop a number of files onto a batch file, the batch will be executed and the filenames  will be passed to the batch file as arguments.</p>
<p><b>Examples:</b></p>
<p class="code">Demobatch.cmd The Quick Brown</p>
<p>As given %1=The, %2=Quick, %3=Brown<br>
<span class="code">SHIFT</span><br>
will result in %1=Quick, %2=Brown<br>
A second <br>
<span class="code">SHIFT</span><br>
will result in %1=Brown</p>
<p>Given %1=the, %2=quick, %3=brown, %4=fox<br>
<span class="code">SHIFT /2</span><br>
will result in %1=the, %2=brown, %3=fox</p>
<h2>Advanced: Making use of %0</h2>
<blockquote>
<p> If SHIFT is used to move a text argument into %0 then any references to %0 will refer instead to the current working directory, unless the new argument value happens to contain a valid path.</p>
<p>For example:<br> 
<span class="code">
%0\..\MyExecutable.exe</span>  will run  MyExecutable from the same directory as the Batch file. <br>
<br>
If the following argument is passed to myBatch.cmd<br>
<br>
<span class="code">myBatch.cmd D:\utils\</span><br>
<br>
Then the following commands in myBatch will run MyExecutable.exe from the directory 
<span class="code">D:\utils\</span><br>
<span class="code"><br>
SHIFT <br>
%0\..\MyExecutable.exe</span><br>
</p>
</blockquote>
<h2>Errorlevels</h2>
<blockquote>
<p>If the command line arguments are successfully reassigned <a href="errorlevel.html">%ERRORLEVEL%</a> = <i>unchanged</i> (this is a bug)<br>
If a bad switch is given = 1</p>
</blockquote>
<p>SHIFT is an <a href="syntax-internal.html">internal</a> command. If <a href="cmd.html">Command Extensions</a> are disabled, the SHIFT command 
will not support the /n switch </p>
<p><i class="quote">“A small key opens big doors" ~ Turkish Proverb</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="call.html">CALL</a> - Call one batch program from another<a href="set.html">.<br>
SET</a> - Display or edit environment variables.<br>
powershell: <a href="../ps/syntax-args.html">param</a>( $var1, $var2,... ) 
<br>
Equivalent bash command (Linux): <a href="../bash/shift.html">shift</a> - Shift positional arguments.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="shift.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

