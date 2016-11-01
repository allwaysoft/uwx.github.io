---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>Instances</h1>
<p>A PowerShell script to enumerate the SQL instances across multiple servers. </p>
<pre>##
# Read in a list of Server Names from a file. 
# For each server, query the services to find the SQL server instance names.
# List all the SQL instances found to a log file.

##

$servers = get-content "C:\batch\servers.txt"
$logfile = "C:\batch\sql-instances.txt"
$logerrs = "C:\batch\sql-failures.txt"

Echo "Server, Instance" &gt;&gt; $logfile

ForEach ($server in $servers) { 
   $instances = Get-WmiObject -ComputerName $server win32_service | where {$_.name -like "MSSQL*"}

   if (!$?) {
      Echo "$server - No SQL instance found" &gt;&gt; $logerrs
      Echo "$server - No SQL instance found"
   }
   Else {
      ForEach ($instance in $instances) {
         if (($instance.name -eq "MSSQLSERVER") -or ($instance.name -like "MSSQL$*")) {
            Echo "$server, $($instance.name)" &gt;&gt; $logfile
            Echo "$server, $($instance.name)"
         }
      }  
   }
}
# SS64.com/sql/syntax-instances.html</pre>
<p class="quote"><i>“The majority is never right. Never, I tell you! That’s one of these lies in society that no free and intelligent man can help rebelling against. Who are the people that make up the biggest proportion of the population—the intelligent ones or the fools? I think we can agree it’s the fools, no matter where you go in this world, it’s the fools that form the overwhelming majority” ~ Henrik Ibsen, Dr. Stockmann, in An Enemy of the People, act 4 (1882)</i></p>
<p><b>Related:</b></p>
<p><span class="code">SQLCMD -L </span>~ List all SQL instances </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-instances.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

