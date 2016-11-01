---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Write-Warning</h1> 
<p>Write a warning message in <span class="reverse">reverse video</span> to the host display.</p>
<pre>Syntax
      Write-Warning [-message] <i>string</i> [<i>CommonParameters</i>]

Key
   -message <i>string</i>
       The warning message to send to the host.
       {may be piped}

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Setting the <span class="code">$</span><span class="code">WarningPreference</span> variable will alter the action of Write-Warning:</p>
<blockquote>
<p><span class="code"><u>Continue</u></span> Show the message on the console [this is the Default action]<br>
<span class="code">SilentlyContinue</span> do not show the message. <br>
<span class="code">Stop</span> show the message and then halt.<br>
<span class="code">Inquire</span> prompt the user.</p>
</blockquote>
<p>Write-Warning (and Write-host) write only to the host/screen. To also have the output passed to the success pipeline, use Write-Output instead. </p>
<p><b>Example</b></p>
<p>Write a warning message:</p>
<p class="code">PS C:\&gt; $WarningPreference = "Continue"<br>
PS C:\&gt; Write-Warning "The quick brown fox."</p>
<p class="quote"><i>“History is a vast early warning system” ~ Norman Cousins</i></p>
<p><b>Related:</b><br>
<br>
<a href="write-debug.html">Write-Debug</a> - Write a debug message to the host display<br>
<a href="write-error.html">Write-Error</a> - Write an object to the error pipeline.<br>
<a href="write-host.html">Write-Host</a> - Display objects through the host user interface<br>
<a href="write-output.html">Write-Output</a> - Write an object to the pipeline<br> 
<a href="write-progress.html">Write-Progress</a> -  Display a progress bar<br>
<a href="write-verbose.html">Write-Verbose</a> - Write a string to the host’s verbose display</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="write-warning.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

