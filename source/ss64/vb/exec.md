---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.Exec </h1> 
<p>Run an external Command, returning an object. </p>
<pre>Syntax 
      <i>objShell</i>.Exec (<i>strCommand</i>) 

Key 
   objShell     A WScript.Shell object 
   strCommand   The Command to be executed
</pre>
<p>Unlike <a href="run.html">.Run</a> method,  <span class="code">.Exec</span> returns an <i>object </i>which returns additional information about the process started.</p>
<p>Example - run the calculator (calc.exe) and display the exit code:</p>
<pre>Dim objShell,oExec

Set objShell = wscript.createobject("wscript.shell")
Set oExec = objShell.Exec("calc.exe")

WScript.Echo oExec.Status
WScript.Echo oExec.ProcessID
WScript.Echo oExec.ExitCode 
</pre>
<p>The<span class="code"> .ExitCode</span> property returns the exit code set by the program (calc.exe) when it exits.</p>
<p><span class="code">.Exec</span> gives the ability to access the standard streams 
of the executable and allows read/writes to the process's 
stdout/stderr in real-time while the process executes.</p>
<pre>while(!Pipe.StdOut.AtEndOfStream)
WScript.StdOut.WriteLine(Pipe.StdOut.ReadLine())

------------
.Terminate
Instructs the script engine to end the process.

note - this type of process kill does not clean up properly
and may cause memory leaks - use only as a last resort!
</pre>
<p class="quote"><i>“First rate people hire other first rate people.   Second rate people hire third rate people. 
Third rate people hire fifth rate people” ~ André Weil</i></p>
<p><b>Related:</b></p>
<p><a href="run.html">.Run</a> - Run a command<br>
<a href="execute.html">Execute</a> - Execute one or more  statements<br>
<span class="body"><a href="shellexecute.html">.ShellExecute</a> - Run an application in the Windows Shell</span><br>
<a href="syntax-elevate.html">Run with elevated permissions</a> - Script to run as Admin<br>
<a href="cscript.html">cscript</a> - Run a VB Script .vbs file<br>
Equivalent Windows CMD command: <a href="../nt/start.html">START</a> - Start  a specified program or command<br>
Equivalent PowerShell cmdlet: <a href="../ps/call.html">Run/Call</a> - Run a command  </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

