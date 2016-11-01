---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>SQL Server Version and Service pack</h1>
<p>The select statement below will return the version of SQL Server (2000,2005, 2008, 2008 R2, 2012), the product level (Standard, Enterprise) and the edition (32/64 bit, Service pack or RTM.) </p>
<p class="code">SELECT 'Version ' <br>
+ CAST(SERVERPROPERTY('productversion') AS VARCHAR) + ' - ' <br>
+ CAST(SERVERPROPERTY('productlevel') AS VARCHAR) + ' (' <br>
+ CAST(SERVERPROPERTY('edition') AS VARCHAR) + ') :: ' + @@VERSION as 'SQL Server '</p>
<p>Simple version:</p>
<p class="code">SELECT SERVERPROPERTY('productversion'), SERVERPROPERTY ('productlevel'), SERVERPROPERTY ('edition')<br>
select @@VERSION </p>
<p>Show the database collation: </p>
<p class="code">SELECT DATABASEPROPERTYEX('your_database_name', 'Collation') SQLversion;</p>
<p class="quote"><i>“I'd call it a new version of voodoo economics, but I'm afraid that would give witch doctors a bad name” - Geraldine A. Ferraro</i></p>
<p><b>Related:</b></p>
<p><a href="http://support.microsoft.com/kb/321185">Q321185</a> - Find the SQL Server version <br>  
<a href="http://www.sqlteam.com/article/sql-server-versions"> SQL Server Version numbers</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-sqlversion.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

