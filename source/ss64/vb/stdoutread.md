---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.StdOut.ReadLine </h1> 
<p>Obtain User Input from the command prompt or retrieve (screen 
  scrape) text from the output of a program.</p>
<pre>Syntax 
      .StdOut.ReadLine()

<b>Examples
</b>
' Read a single line into a variable<br>Dim strMyName
WScript.StdOut.Write("Enter Your full Name&gt;")
WScript.StdIn.Read(0)
strMyName = WScript.StdIn.ReadLine()
WScript.StdOut.Write(strMyName)

<br>' Read program output into a variable line by line
Dim ObjExec
Dim strFromProc

Set objShell = WScript.CreateObject("WScript.Shell")
Set ObjExec = objShell.Exec("cmd.exe /c dir")
Do
    strFromProc = ObjExec.StdOut.ReadLine()
    WScript.Echo "ABC " &amp; strFromProc &amp; " DEF"
Loop While Not ObjExec.Stdout.atEndOfStream
</pre>
<p class="quote"><i>“The unexamined life is not worth living” ~ Socrates</i> </p>
<p><b>Related:</b></p>
<p><a href="inputbox.html">InputBox</a> - Prompt for user input<br>
<a href="stdoutwrite.html">.StdOut.Write</a> - Text output<br>
Equivalent PowerShell cmdlet: <a href="../ps/read-host.html">Read-Host</a>                  - Read a line of input from the host console</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

