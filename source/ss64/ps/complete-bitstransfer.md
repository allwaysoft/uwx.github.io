---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Complete-BitsTransfer</h1> 
<p>Complete a Background Intelligent Transfer Service (BITS) transfer job.</p>
<pre>Syntax
      Complete-BitsTransfer [-BitsJob] <i>BitsJob</i>[]
         [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -BitsJob <i>BitsJob</i>[]
       The BITS transfer job(s) to complete.
       Pipe a value to this parameter from other cmdlets that return BitsJob objects, such as Get-BitsTransfer.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Complete-BitsTransfer  ends one or more BITS transfer jobs and then saves the files on the client computer. If an error occurs, the associated BitsJob object is written to the error pipeline.</p>
<p><b>Examples</b></p>
<p>Complete all the BITS transfer jobs that are owned by the current user:</p>
<p><span class="code">PS C:\&gt; Get-BitsTransfer | Complete-BitsTransfer</span></p>
<p>Complete all the BITS transfer jobs on the computer:</p>
<p><span class="code">PS C:\&gt; $myJob = Get-BitsTransfer -AllUsers<br>
PS C:\&gt; Complete-BitsTransfer -BitsJob $myJob</span></p>
<p>Complete the BITS transfer job called 'SS64':</p>
<p><span class="code">PS C:\&gt; Get-BitsTransfer -Name SS64 | Complete-BitsTransfer</span></p>
<p><i>“Writing is not like painting where you add. It is not what you put on the canvas that the reader sees. Writing is more like a sculpture where you remove, you eliminate in order to make the work visible. Even those pages you remove somehow remain”- Elie Wiesel (American Writer.) </i></p>
<p><b>Related:</b></p>
<p><a href="remove-bitstransfer.html">Remove-BitsTransfer</a> - Delete a BITS transfer.<br>
<a href="bits.html">BITS PowerShell cmdlets</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="complete-bitstransfer.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

