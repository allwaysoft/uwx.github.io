---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Clear-EventLog</h1> 
<p> Delete all entries from a specified event log on a local or remote computer.</p>
<pre>Syntax
      Clear-EventLog [-LogName] <i>string</i>[] [[-ComputerName] <i>string</i>[]]
         [-Confirm] [-WhatIf]  [<i>CommonParameters</i>]

Key:
   -logName <i>string</i>
        Name of the log file from which to clear log events.

   -ComputerName <i>string</i>[]
        Clear events from a remote computer.
        The default is the local computer.

   -confirm
       Prompt for confirmation before executing the command.

   -whatIf
       Describe the command without actually executing it.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  The ComputerName may be a NetBIOS name, an Internet Protocol (IP) address, or a fully qualified domain name. To specify the local computer, type the computer name, a dot (.), or "localhost". <span class="code">-ComputerName</span>  does not rely on Windows PowerShell remoting. </p>
<p><b>Example</b></p>
<p>Clear the Application, System and PowerShell event logs:</p>
<p><span class="code">PS C:\&gt; Clear-eventlog -log application, system, "Windows PowerShell"</span> </p>
<p class="quote"><i>“Beware the barrenness of a busy life” ~ Socrates </i></p>
<p><b>Related:</b></p>
<p>  <a href="get-eventlog.html">Get-Eventlog</a> - Get event log data</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clear-eventlog.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

