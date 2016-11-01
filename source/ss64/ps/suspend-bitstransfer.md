---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Suspend-BitsTransfer</h1> 
<p>Suspend a Background Intelligent Transfer Service (BITS) transfer job.</p>
<pre>Syntax
      Suspend-BitsTransfer [-BitsJob] <i>BitsJob</i>[]
         [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -BitsJob <i>BitsJob</i>[]
       The BITS transfer job(s) to suspend.
       Pipe a value to this parameter from other cmdlets that return BitsJob objects, such as Get-BitsTransfer.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Suspend-BitsTransfer  suspends (pauses) one or more BITS transfer jobs. If the transfer is already suspended, the cmdlet does nothing. Restart the BITS transfer job with <a href="resume-bitstransfer.html">Resume-BitsTransfer</a>.</p>
<p><b>Examples</b></p>
<p>Suspend all the BITS transfer jobs that are owned by the current user:</p>
<p><span class="code">PS C:\&gt; Get-BitsTransfer | Suspend-BitsTransfer</span></p>
<p>Suspend all the BITS transfer jobs on the computer:</p>
<p><span class="code">PS C:\&gt; $allJobs = Get-BitsTransfer -AllUsers<br>
PS C:\&gt; Suspend-BitsTransfer -BitsJob $allJobs</span></p>
<p class="quote"><i>“Architecture is music in space, as it were a frozen music” ~ Friedrich Wilhelm Joseph von Schelling</i></p>
<p><b>Related:</b></p>
<p><a href="resume-bitstransfer.html">Resume-BitsTransfer</a> - Resume a suspended BITS transfer<br>
<a href="bits.html">BITS PowerShell cmdlets</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="suspend-bitstransfer.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

