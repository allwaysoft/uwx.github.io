---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-ComputerRestorePoint</h1> 
<p>Gets the restore points on the local computer.</p>
<pre>Syntax
      Get-ComputerRestorePoint [[-RestorePoint] <i>Int32</i>[]] [<i>CommonParameters</i>]
    
      Get-ComputerRestorePoint -LastStatus [<i>CommonParameters</i>]

Key
   -LastStatus
       Get the status of the most recent system restore operation.

   -RestorePoint <i>int</i>
       Get the restore points with the specified sequence numbers.
       Enter the sequence numbers of one or more restore points.
       By default, Get-ComputerRestorePoint gets all restore points on the local computer.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>  You can use  Get-ComputerRestorePoint to select a restore point, and you can use the sequence number to <a href="restore-computer.html">Restore-Computer</a>.</p>
<p><b>Examples</b></p>
<p>List all  the restore points on the local computer:</p>
<pre>PS C:&gt; get-computerrestorepoint</pre>
<p>Get the sequence number of the most recently created restore point:</p>
<pre>PS C:&gt; ((get-computerrestorepoint)[-1]).sequencenumber</pre>
<p>List all the restore points on the local computer in a table:</p>
<pre>PS C:&gt; get-computerrestorepoint | format-table SequenceNumber, _<br> @{Label="Date"; Expression={$_.ConvertToDateTime($_.CreationTime)}}, Description -auto</pre>
<p>Display the status of the most recent system restore operation:</p>
<pre>PS C:&gt; get-computerrestorepoint -laststatus</pre>
<p>Get the restore points with sequence numbers 460, 461, and 464:</p>
<pre>PS C:&gt; get-computerrestorepoint -restorepoint 460, 461, 464</pre>
<p class="quote"><i>#You can't always get what you want, but if you try sometimes, you might find, you get what you need# ~ The Rolling Stones</i></p>
<p><b>Related:</b></p>
<p><a href="restore-computer.html">Restore-Computer</a> - Restore the computer to a previous state<br>
<a href="enable-computerrestore.html">Enable-ComputerRestore</a> - Enable System Restore on a drive</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-computerrestorepoint.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

