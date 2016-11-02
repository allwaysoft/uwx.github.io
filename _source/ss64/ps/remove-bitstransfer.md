---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-BitsTransfer</h1> 
<p>Cancel a Background Intelligent Transfer Service (BITS) transfer job.</p>
<pre>Syntax
      Remove-BitsTransfer [-BitsJob] <i>BitsJob</i>[]
         [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -BitsJob <i>BitsJob</i>[]
       The BITS transfer job(s) to cancel.
       Pipe a value to this parameter from other cmdlets that return BitsJob objects, such as Get-BitsTransfer.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>When Remove-BitsTransfer  cancels a BITS transfer job it deletes all the transfers, the underlying transfer job, removes any temporary files from the client, and deletes the associated BitsJob object. In cases where the job is not complete, Remove-BitsTransfer will remove all the transferred files, even those which were completely downloaded. </p>
<p>The <a href="complete-bitstransfer.html">Complete-BitsTransfer</a> cmdlet can be used to commit any files that are completely downloaded and to cancel the pending and current transfers. This method will not delete any of the transferred files.</p>
<p><b>Examples</b></p>
<p>Cancel all the BITS transfer jobs that are owned by the current user.:</p>
<p><span class="code">PS C:\&gt; Get-BitsTransfer | Remove-BitsTransfer</span></p>
<p>Cancel all the BITS transfer jobs on the computer:</p>
<p><span class="code">PS C:\&gt; $allJobs = Get-BitsTransfer -AllUsers<br>
PS C:\&gt; Remove-BitsTransfer -BitsJob $allJobs</span></p>
<p class="quote"><i>“Nothing worth doing is completed in our lifetime; therefore we must be saved by hope. Nothing true or beautiful makes complete sense in any immediate context of history; therefore we must be saved by faith. Nothing we do, however virtuous, can be accomplished alone; therefore, we are saved by love” ~ Reinhold Niebuhr</i></p>
<p><b>Related:</b></p>
<p><a href="complete-bitstransfer.html">Complete-BitsTransfer</a> - Complete a BITS transfer<br>
<a href="set-bitstransfer.html">Set-BitsTransfer</a> - Configure BITS transfer jobs<br>
<a href="bits.html">BITS PowerShell cmdlets</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-bitstransfer.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

