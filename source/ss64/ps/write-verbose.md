---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Write-Verbose</h1> 
<p>Write a string to the host's verbose display. This is normally used within PowerShell scripts to provide an optional message, normally hidden but available to view by setting a preference.</p>
<pre>Syntax
      Write-Verbose [-message] <i>string</i> [<i>CommonParameters</i>]

Key
   -message <i>string</i>
       The message to display.
       {may be piped}

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>  Setting  the <span class="code">$VerbosePreference</span> variable will alter the action of Write-verbose:</p>
<blockquote>
<p><span class="code">Continue</span> Show the message on the console<br>
<span class="code"><u>SilentlyContinue</u></span> do not show the message. [this is the Default action]<br>
<span class="code">Stop</span> show the message and then halt<br>
<span class="code">Inquire</span> prompt the user</p>
</blockquote>
<p>If you close and reopen PowerShell, the <span class="code">$VerbosePreference</span> variable will revert to the default.<br>
To make a permanent change, add the preference to your PowerShell <a href="syntax-profile.html">$Profile</a>.</p>
<p><b>Example</b></p>
<p>Write a  message:</p>
<p><span class="code">PS C:\&gt; $VerbosePreference = "SilentlyContinue"<br>
PS C:\&gt; Write-Verbose 'The quick red fox.'<br>
<br>
PS C:\&gt;  $VerbosePreference = 'Continue'<br>
PS C:\&gt; Write-Verbose 'The quick brown fox.'</span></p>
<p class="quote"><i> “Inebriated with the exuberance of his own verbosity, and gifted with an egotistical imagination” ~ Benjamin Disraeli </i></p>
<p><b>Related:</b></p>
<p><a href="write-debug.html">Write-Debug</a> - Write a debug message to the host display<br>
<a href="write-error.html">Write-Error</a> - Write an object to the error pipeline.<br>
<a href="write-host.html">Write-Host</a> - Display objects through the host user interface<br>
<a href="write-output.html">Write-Output</a> - Write an object to the pipeline<br> 
<a href="write-progress.html">Write-Progress</a> -  Display a progress bar<br> 
<a href="write-warning.html">Write-Warning</a> - Write a warning message</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

