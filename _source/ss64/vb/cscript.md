---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>CScript.exe / wscript.exe</h1> 
<p>Run a VBScript / Windows Scripting Host (WSH) script.<br>
  <br>'cscript' runs entirely in the command line and is ideal for non-interactive 
  scripts.<br>
'wscript' will popup Windows dialogue boxes for user interaction.</p>
<pre>Syntax 
       cscript [<i>options</i>...] [<i>ScriptName</i>.vbs] [<i><a href="arguments.html">script_arguments</a></i>]

       wscript [<i>options</i>...] [<i>ScriptName</i>.vbs] [<i><a href="arguments.html">script_arguments</a></i>]

Options:

   <i>ScriptName</i>.vbs  : Text file containing VBS commands to be execute.
                     You must include the extension (normally .vbs)

   //T:<i>nn</i>      Timeout script after <i>nn</i> seconds

   //nologo    hide startup logo
   //Logo      or Display logo (default)

   //I         Interactive mode
   //B         or Batch mode

   //E:<i>engine</i>  Use <i>engine</i> for executing script e.g. //E:jscript

   //H:CScript Change the default vbs script host to CScript.exe
   //H:WScript Change the default vbs script host to WScript.exe (default)

   //Job:<i>xxxx</i>  Execute a WSF job

   //S         Save current command line options for this user

   //D         Enable Active Debugging
   //X         Execute script in debugger
   //U         Use Unicode for redirected I/O from the console</pre>
<p><b>Examples</b></p>
<p>Run the VB script called myscript.vbs: </p>
<p class="code">C:\&gt; cscript myscript.vbs </p>
<p>If the line above is saved as a batch script,  double clicking the batch file will run the VBScript file.</p>
<p>Call one VB script from another. This can be done as shown below, although it is usually better to put everything in a single script and use <a href="function.html">Functions</a> to split up the blocks of code. </p>
<p class="code">Set objShell = CreateObject("WScript.Shell")<br>
objShell.run("<b>cscript</b> C:\scripts\demo.vbs") </p>
<p>The VB Script scripting environment is installed by default on Windows 98 and all later versions of Windows. </p>
<p class="quote"><i>“Throw a lucky man in the sea, and he will come up with a fish in his mouth” ~ Arab proverb</i></p>
<p><b>Related</b></p>
<p><a href="exec.html">.Exec</a> - execute command<br>
<a href="run.html">.Run</a> <span class="body">- Run an external Command.<br>
<a href="shellexecute.html">.ShellExecute</a> - Run an application in the Windows Shell</span><b><br>
</b><a href="quit.html">Quit</a> - Quit vbs script</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="cscript.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

