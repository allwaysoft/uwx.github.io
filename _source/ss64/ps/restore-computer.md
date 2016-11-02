---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Restore-Computer</h1> 
<p>Restore the computer to a previous state.</p>
<pre>Syntax
      Restore-Computer [-RestorePoint] <i>int</i>
         [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -RestorePoint <i>int</i>
       The sequence number of the restore point.
       To find the sequence number, use Get-ComputerRestorePoint

   -confirm
       Prompt for confirmation before executing the command.

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>  Restore-Computer restores the local computer to the specified system restore point and restarts the computer.<br>
The restore is completed during the restart operation.</p>
<p><b>Examples</b></p>
<p>Restores the local computer to  restore point #64: </p>
<pre>PS C:&gt; restore-computer 64</pre>
<p>Check the restore status:</p>
<pre>PS C:&gt; Get-ComputerRestorePoint -LastStatus</pre>
<p class="quote"><i> 
“A hundred years cannot repair a moment's loss of honor”</i></p>
<p><b>Related:</b></p>
<p><a href="get-computerrestorepoint.html">Get-ComputerRestorePoint</a> - Get the restore points on the local computer<br>
<a href="enable-computerrestore.html">Enable-ComputerRestore</a> - Enable System Restore on a drive</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

