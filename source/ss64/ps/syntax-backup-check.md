---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1> Check Backup files</h1> 
<p>The script below can be used to check multiple locations for files that have changed in the last 24 hours. </p>
<p>If used to check backup files, be aware that this is not checking that the backup completed successfully, just that it generated an output file. Use it to check that your backup software isn’t reporting successful backups when in fact they may have failed or the backup file could have been deleted in error.</p>
<pre># check-backups.ps1

$now=Get-Date -format "<a href="syntax-dateformats.html">yyyy-MM-dd HH:mm</a>"
Echo "_______________________"
Echo " "
Echo "Backups completed -- $now"
Echo "_______________________"
Echo ""

   # Edit the names and paths below:
$hash = @{
"System 1      " = "\\svr-system-01\e$\backups\";
"System 2      " = "\\svr-system-02\d$\backups\";
"DataWarehouse " = "\\svr-dw-02\e$\backups\";
"HR database   " = "\\svr-ora-01\e$\backups\";
"Stock control " = "\\svr-ora-02\f$\backups\";
"EPR           " = "\\svr-sybase-12\e$\backups\";
}

$results = @{}
$grandTotal = 0

$hash.keys | sort | foreach {
   # Add up the size of all backup files &lt; 24 hours old   
   $total = get-childitem $hash.item($_) -recurse | where{$_.LastWriteTime -gt ((get-date).adddays(-1))} | measure-object -property length -sum

   # Store the results (in another hash table)
   $results.add($_,[math]::Round($total.sum/1mb))

   # Add to the grand total
   $grandTotal = $grandTotal + $total.sum
}

# display results
# $results.keys | Sort |foreach {"$_ " + $results[$_]} | ft @{label="Backup";expression='name';alignment='left';width=15},@{label="MB";expression='value';alignment='right';width=7}

$results | Sort | ft @{label="Backup";expression='name';alignment='left';width=15},@{label="MB";expression='value';alignment='right';width=7}

# build email body
$mailBody = "Backups completed: $now`r`n`r`n"

$results.keys | sort | foreach {
   # Left pad with spaces and keep the rightmost 7 digits (up to 9999 GB)
   $size = "       " + $results[$_]
   $size = $size.substring($size.length - 7, 7)
   $mailBody = $mailBody + "$_ " + $size + " MB `r`n"
}

$mailBody = $mailBody + "`r`nTotal: " + [math]::Round($grandTotal/1gb) + " GB `r`n"

# email the results
send-mailmessage fred@example.com,IT_ops@example.com "Backup report" -body $mailBody -from fred@example.com -SmtpServer svr-mail01</pre>
<p class="quote"><i>“The difference between false memories and true ones is the same as for jewels: it is always the false ones that look the most real, the most brilliant” ~ Salvador Dalí</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-arrays.html#hash">Hash tables</a><br>
<a href="../sql/syntax-backup-check.html">SQL Server backup check</a> - check  database backups within the last 24 hours.<br>
<a href="syntax-diskspace.html">Get-DiskSpace</a> - List the free disk space for multiple computers.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-backup-check.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

