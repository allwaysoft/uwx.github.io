---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>Compatibility</h1>
<p>A PowerShell script to enumerate the SQL instances across multiple servers. </p>
<pre>select name, compatibility_level , version_name =
CASE compatibility_level
    WHEN 65  THEN 'SQL Server 6.5'
    WHEN 70  THEN 'SQL Server 7.0'
    WHEN 80  THEN 'SQL Server 2000'
    WHEN 90  THEN 'SQL Server 2005'
    WHEN 100 THEN 'SQL Server 2008/R2'
    WHEN 110 THEN 'SQL Server 2012'
    WHEN 120 THEN 'SQL Server 2014'
END
from sys.databases
order by name
 </pre>
<p class="quote"><i>“The majority is never right. Never, I tell you! That’s one of these lies in society that no free and intelligent man can help rebelling against. Who are the people that make up the biggest proportion of the population—the intelligent ones or the fools? I think we can agree it’s the fools, no matter where you go in this world, it’s the fools that form the overwhelming majority” ~ Henrik Ibsen, Dr. Stockmann, in An Enemy of the People, act 4 (1882)</i></p>
<p><b>Related:</b></p>
<p><span class="code">SQLCMD -L </span>~ List all SQL instances </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-compatibility.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

