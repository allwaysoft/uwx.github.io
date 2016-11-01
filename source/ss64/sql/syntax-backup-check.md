---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> Check Backup files</h1>
<p>The script below can be used to check multiple locations for SQL Server backups that have completed in the last 24 hours. </p>
<pre>&lt;# check.ps1 Script to check SQL Server backups on multiple servers
   This script must be run with <b>sqlps.exe</b> (not generic PowerShell)

   Limitations: SQL 2000 is not supported, use for SQL Server 2005 and above only.
   The account running this script must have access to all the databases.
#&gt; 


# Read all the databases to be checked into a hash table

$t = Import-Csv -Path <b>C:\batch\databases.txt</b> -Header "database","server"
$Hash = @{}
foreach($r in $t)
{
	Write-Host $r.database $r.server
	$Hash[$r.database] = $r.server
}
# $Hash


# Query to retrieve backups

# n.b  compressed_backup_size is only available in 2008 and later
# so for now we just use the uncompressed backup_size.

$query = "SELECT  sdb.Name AS DatabaseName,
 COALESCE(CONVERT(VARCHAR(12), MAX(bus.backup_finish_date), 103), '') AS LastBackUpTime,
 COALESCE(CONVERT(VARCHAR(12), MAX(bus.backup_size), 103), '') AS size
 FROM sysdatabases sdb LEFT OUTER JOIN msdb.dbo.backupset bus ON bus.database_name = sdb.name
 WHERE bus.backup_finish_date &gt; getdate()-1
 GROUP BY sdb.Name
 HAVING  sdb.NAME IN ( '"
                         #$db' );"

$results = @{}
$grandTotal = 0
$countBackups = 0
$sqlcmd = 0

 # Loop through the hash table of databases/servers

$hash.keys | foreach {

   # Get the database and server names

   $db =$_
   $server =$($hash.item($_))
   # Write-Host "current server is: $server "
    Write-Host "Current db is: $db " 
   
   # complete the query string we started above
   $qry = "$query$db' );"
    # "$qry"
   # Reset the variable to clear last values out
   $sqlcmd = 0

   # Execute the query to get the last backup time/date
   $sqlcmd = Invoke-Sqlcmd -Query $qry -ServerInstance $server -database "master"

   # "$sqlcmd.LastBackUpTime"
   # $backup = $sqlcmd | Select -ExpandProperty LastBackUpTime

   # Right-pad database name to 17 characters

   [string]$name =  $_ + "                 "
   $name = $name.substring(0, 17)

   # Get the backup size

   [int]$megabytes = $sqlcmd.size/1mb
   [int]$grandTotal = $grandTotal + $megabytes
   [string]$size = "       $megabytes"
   $size = $size.substring($size.length - 7, 7) + " MB  $server"

   # Store the backup date/time + Size in another hash table called $results
   $results.add($name,$sqlcmd.LastBackUpTime + $size  )

   # Count the number of backups (this will change if/when the list of databases to check is changed.)
   $countBackups = $countBackups + 1
}

# Display results for interactive use

Write-Host "-- Display results"
$results.GetEnumerator() | sort name | ft -HideTableHeaders -autosize

# Store all the results into some text files

$results.GetEnumerator() | sort name | ft -HideTableHeaders -autosize &gt; <b>c:\batch\backups.txt</b>
$grandTotal &gt; <b>c:\batch\total.txt</b>
$countBackups &gt; <b>c:\batch\count.txt</b>
</pre>
<p><br>
To have these results emailed to a person or group use a <a href="../ps/syntax-email.html">standard PowerShell email script</a> to read and email the text files.</p>
<p class="quote"><i>"I pledge allegiance to my Flag and the Republic for which it stands, one nation, indivisible, with liberty and justice for all" ~ Francis Bellamy (1892)</i></p>
<p><b>Related:</b></p>
<p><a href="../ps/syntax-backup-check.html">PowerShell backup check</a> - Checks a list of file locations.</p>
<p class="quote">&nbsp;</p>
<p></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-backup-check.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

