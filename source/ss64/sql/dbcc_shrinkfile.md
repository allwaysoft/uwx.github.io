---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC SHRINKFILE</h1>
<p>Shrink the size of the current database data / log file    or empty a file by moving the data.</p>
<pre>Syntax
      DBCC SHRINKFILE ( <i>file</i> , EMPTYFILE ) [WITH NO_INFOMSGS]

      DBCC SHRINKFILE ( <i>file</i> , <i>target_size</i>
              [, {NOTRUNCATE | TRUNCATEONLY }] )  [WITH NO_INFOMSGS ]

Key:
   <i>file</i>          -  Logical file name or file_id

   EMPTYFILE      - Migrate data to other files in the same filegroup.
                    The file can be removed with ALTER DATABASE.

   <i>target_size</i>   - The size for the file in megabytes.
                   default = that specified when the file was created, or 
                   the last size used with  ALTER DATABASE.(int)

   NOTRUNCATE    - Free space at the end of the data file is not returned to the OS
                    (pages are still moved)
   TRUNCATEONLY  - Release free space at the end of the data file to the OS
                   (do not move pages)
	NO_INFOMSGS   - Suppress all information messages (severity 0-10)
</pre>
<p>You can shrink a transaction log file while the system is in use (DML commands are also being executed), however this will only affect  the inactive portion  of the transaction log file.<br>
Discover the file_ID for each file with the SQL: 
<span class="code">SELECT file_id, name 
FROM sys.database_files;</span><br>
After using TRUNCATE_ONLY you must perform a full backup </p>
<p><b>Examples</b></p>
<p>Shrink a  datafile to 64 Mb:</p>
<pre>DBCC SHRINKFILE (<i>MyDataFile01</i>, 64);</pre>
<p>  Shrink a Log file to 8 GiB (8192 MiB):</p>
<pre>USE MyDatabase;
GO
DBCC SHRINKFILE(MyDatabase_Log, 8192)<br><a href="backup.html">BACKUP</a> LOG MyDatabase WITH TRUNCATE_ONLY<br>DBCC SHRINKFILE(MyDatabase_Log, 8192)
</pre>
<p>Afterwords, perform a full backup of the database.<br>
To make the file as small as possible you can specify <span class="code">1</span> for 1 Mb, or just leave out the <i>target_size</i> completely, be aware that doing this will slow down the system a little as the system will just have to grow the log file again as soon as another transaction is started. </p>
<p>In SQL Server 2008 the procedure is slightly different, the database must first be set to Simple recovery mode, then shrink the file, then restore FULL recovery mode: </p>
<pre>ALTER DATABASE <i>MyDatabase</i> SET RECOVERY SIMPLE
go
DBCC SHRINKFILE(<i>MyDatabase_log</i>)
go
EXEC sp_helpdb <i>MyDatabase</i>
go
ALTER DATABASE <i>MyDatabase</i> SET RECOVERY FULL
go </pre>
<p class="quote"><i>“Men shrink less from offending one who inspires love than one who inspires fear” ~ Niccolo Machiavelli</i></p>
<p><b>Related:</b></p>
<p><a href="http://www.karaszi.com/SQLServer/info_dont_shrink.asp">Why you want to be restrictive with shrink of database files</a> - karaszi.com<br> 
<a href="database_a.html">ALTER DATABASE</a>  <i>MyDatabase</i> SET RECOVERY FULL;<br>
  <a href="dbcc_shrinkdb.html">DBCC  SHRINKDATABASE</a><br>
  FILE_ID <br>
  sys.database_files <br>
Equivalent Oracle command: <a href="../ora/database_a.html">ALTER DATABASE</a> Datafile '/oradata/ss64.dbf' resize 64M;</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_shrinkfile.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

