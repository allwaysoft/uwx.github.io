---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Write-Debug</h1> 
<p>Write a debug message to the host display.</p>
<pre>Syntax
      Write-Debug [-message] <i>string</i> [<i>CommonParameters</i>]

Key
   -message string
       The debug message to send to the console.
       {may be piped}

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
By default, debug messages are not displayed in the console, but you can display them by using the Debug parameter or the $DebugPreference variable.</p>
<p>The action of Write-Debug is dependent on the value of <span class="code">$DebugPreference</span><br>
If $DebugPreference = "Continue" PowerShell will show the debug message.<br>
If $DebugPreference = "SilentlyContinue" PowerShell will not show the message. <br>
If $DebugPreference = "Stop" PowerShell will show the message and then halt.<br>
If $DebugPreference = "Inquire" PowerShell will prompt the user.</p>
<p><b>Example</b></p>
<p>Write a debug message:</p>
<p><span class="code">PS C:\&gt; $DebugPreference = "Continue"<br>
PS C:\&gt; Write-Debug "Something went wrong."</span><br>
<i><br>
<span class="quote">#I hope that someone gets my, 
I hope that someone gets my, Message in a bottle# ~  Sting &amp; The Police</span></i></p>
<p><b>Related:</b><br>
  <br>
<a href="write-error.html">Write-Error</a> - Write an object to the error pipeline.<br>
<a href="write-host.html">Write-Host</a> - Display objects through the host user interface<br>
<a href="write-output.html">Write-Output</a> - Write an object to the pipeline <br>
<a href="write-progress.html">Write-Progress</a> -  Display a progress bar <br>
<a href="write-verbose.html">Write-Verbose</a> - Write a string to the host’s verbose display<br>
<a href="write-warning.html">Write-Warning</a> - Write a warning message</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="write-debug.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

