---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.Run</h1> 
<p>Run an external Command. </p>
<pre>Syntax 
      objShell.Run (<i>strCommand</i>, [<i>intWindowStyle</i>], [<i>bWaitOnReturn</i>]) 

Key
   objShell    :  A WScript.Shell object

   strCommand  :  The Command to be executed

   intWindowStyle
   (Optional)  :  Int value indicating the appearance of 
                  the program's window. 
                  Not all programs make use of this. 

   bWaitOnReturn : Wait for the command to complete before
                   continuing execution of the wsh script.
</pre>
<p> If <span class="code">bWaitOnReturn</span> is set to TRUE, the Run method returns 
  any error code returned by the application.<br>
  <br>
  If <span class="code">bWaitOnReturn</span> is not specified or FALSE, this method immediately returns 
  to script execution rather than waiting on the process termination (and returns 
  an error code of 0)<br>
  <br>
  Specifying the <span class="code">bWaitOnReturn</span> parameter allows you to run programs synchronously 
  (one at a time). <br>
  <br>
  Environment variables within the argument <span class="code">strCommand</span> are automatically 
  expanded. <br>
  <br>
  If a file type has been properly registered to a particular program, calling 
  run on a file of that type executes the program. For example, if Word is installed 
  on your computer system, calling Run on a *.doc file starts Word, and loads 
  the document. <br>
  <br>
Settings for <span class="code">intWindowStyle</span>:</p>
<blockquote>
<p><span class="code"> &nbsp;0 </span>Hide the window (and activate another window.)<br>
<span class="code"> &nbsp;1 </span>Activate and display the window. (restore size and position) Specify this flag when displaying a window for the first time. <br>
<span class="code"> &nbsp;2 </span>Activate &amp; minimize. <br>
<span class="code"> &nbsp;3 </span>Activate &amp; maximize. <br>
<span class="code">&nbsp;4 </span>Restore. The active window remains active. <br>
<span class="code">&nbsp;5 </span>Activate &amp; Restore. <br>
<span class="code">&nbsp;6 </span>Minimize &amp; activate the next top-level window in the Z order. <br>
<span class="code">&nbsp;7 </span>Minimize. The active window remains active. <br>
<span class="code">&nbsp;8 </span>Display the window in its current state. The active window remains active. <br>
<span class="code">&nbsp;9 </span>Restore &amp; Activate. Specify this flag when restoring a minimized window. <br>
<span class="code">10 </span>Sets the show-state based on the state of the program that started the application.</p>
</blockquote>
<h2>Invisible.vbs</h2>
<blockquote>
<p>This one line VBScript can be used to run a command in an invisible window:</p>
<p class="code">CreateObject("Wscript.Shell").Run """" &amp; WScript.Arguments(0) &amp; """", 0, False </p>
<p>' An example running 'Demo.cmd' with invisible.vbs<br>
<span class="code">wscript.exe "invisible.vbs" "demo.cmd" //nologo</span></p>
</blockquote>
<p><b>Examples</b></p>
<p>Launch Notepad with the current executed script:</p>
<pre>Set objShell = WScript.CreateObject("WScript.Shell")
<b>objShell.Run</b> ("%windir%\notepad" &amp; WScript.ScriptFullName)</pre>
<p>Launch Notepad with the current executed script, specify the
 window type, wait for Notepad to be shut down by the user,
and save the error code returned from Notepad when it exits:</p>
<pre>Set objShell = WScript.CreateObject("WScript.Shell")
intReturn = <b>objShell.Run</b>("notepad " &amp; WScript.ScriptFullName, 1, true)
If intReturn &lt;&gt; 0 Then 
   Wscript.Echo "Error running program"
End If</pre>
<p>Open a cmd window, change the path to C:\ , and execute the DIR command:</p>
<pre>Dim objShell
Set objShell = WScript.CreateObject ("WScript.shell")
objShell<b>.run</b> "cmd /K CD C:\ &amp; Dir"
Set objShell = Nothing
</pre>
<p>Call one VB script from another. This can be done as shown below, although it is usually better to put everything in a single script and use <a href="function.html">Functions</a> to split up the blocks of code. </p>
<p class="code">Set objShell = CreateObject("WScript.Shell")<br>
objShell<b>.run</b>("cscript C:\scripts\demo.vbs") </p>
<p class="quote"><i>“Tell the truth and run” ~ Yugoslavian proverb</i></p>
<p><b>Related:</b></p>
<p><a href="exec.html">.Exec</a> - Execute command, returning an object<br>
<span class="body"><a href="shellexecute.html">.ShellExecute</a> - Run an application in the Windows Shell</span><br>
<a href="cscript.html">cscript</a> - Run a VB Script .vbs file<br>
<a href="arguments.html">Arguments</a> - Passing arguments to a script <br>
Equivalent Windows CMD command: <a href="../nt/start.html">START</a> - Start a 
program or command<br>
Equivalent PowerShell cmdlet: <span class="code"></span>Run</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="run.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

