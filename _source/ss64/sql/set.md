---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>SET</h1>
<p>Alter transaction settings and/or output formats for  the current session.</p>
<pre>Syntax
      SET ANSI_DEFAULTS { ON | OFF }
      SET ANSI_NULL_DFLT_OFF { ON | OFF }
      SET ANSI_WARNINGS { ON | <u>OFF</u> }
      SET ARITHABORT { ON | OFF }
      SET ARITHIGNORE { ON | OFF }
      SET CONTEXT_INFO { <i>binary_str</i> | @<i>binary_var</i> }
      SET CURSOR_CLOSE_ON_COMMIT { ON | <u><b>OFF</b></u> }
      SET DATEFIRST { <i>number</i> | @<i>number_var</i> } 
      SET DATEFORMAT { <i>format</i> | @<i>format_var</i> } 
      SET DEADLOCK_PRIORITY { LOW | NORMAL | HIGH | &lt;<i>numeric-priority</i>&gt; | @<i>deadlock_var</i> | @<i>deadlock_intvar</i> }
      SET FIPS_FLAGGER '<i>level</i>'
      SET FMTONLY { ON | OFF } 
      SET FORCEPLAN { ON | OFF }
      SET IDENTITY_INSERT [<i>database</i>. [<i>schema</i>].]<i>table </i>{ ON | <u>c</u> }
      SET IMPLICIT_TRANSACTIONS { ON | OFF }
      SET LANGUAGE { [ N ] '<i>language</i>' | @<i>language_var</i> } 
      SET LOCK_TIMEOUT <i>timeout_period_in_ms </i>(-1 = forever)
      SET NOCOUNT { <u>ON</u> | OFF }  (off will boost performance)
      SET NOEXEC { ON | <u>OFF</u> }
      SET NUMERIC_ROUNDABORT { ON | <u>OFF</u> } 
      SET PARSEONLY { ON | <u>OFF</u> }
      SET QUERY_GOVERNOR_COST_LIMIT <i>value</i>  (default= 0 indefinite)
      SET QUOTED_IDENTIFIER { <u>ON</u> | OFF }
      SET ROWCOUNT { <i>number</i> | @<i>number_var</i> } 
      SET SHOWPLAN_ALL { ON | <u>OFF</u> }
      SET SHOWPLAN_TEXT { ON | <u>OFF</u> }
      SET SHOWPLAN_XML { ON | <u>OFF</u> }
      SET STATISTICS IO { ON | <u>OFF</u> }
      SET STATISTICS PROFILE { ON | <u>OFF</u> }
      SET STATISTICS TIME { ON | <u>OFF</u> }
      SET STATISTICS XML { ON | <u>OFF</u> }
      SET TEXTSIZE { <i>number</i> } 
      SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED<br>      SET TRANSACTION ISOLATION LEVEL <u>READ COMMITTED</u><br>      SET TRANSACTION ISOLATION LEVEL REPEATABLE READ<br>      SET TRANSACTION ISOLATION LEVEL SNAPSHOT<br>      SET TRANSACTION ISOLATION LEVEL SERIALIZABLE<br>      SET XACT_ABORT { ON | OFF }
      
Key
   number  First day of week 1=Monday...7=Sunday (Default)
   format  Date format e.g. dmy, ymd, ydm, myd, dym, mdy(U.S. English default)
   numeric-priority  A whole number between -10 and 10 
   level   SQL92 Compliance: ENTRY | FULL | INTERMEDIATE | OFF
</pre>

<p>     Transation Isolation settings: </p>
<p>  READ UNCOMMITTED - Statements can  read uncommitted data that has been modified by other transactions.<br>
  READ COMMITTED (Default) - Statements cannot read uncommitted data that has been modified by other transactions.<br>
  REPEATABLE READ - Locks are placed on all data read by each statement in a transaction.<br>
  SNAPSHOT - The data read by any statement in a transaction will be the transactionally consistent version of the data that existed at the start of the transaction.<br>
  SERIALIZABLE - Block other transactions from updating or inserting any rows that would qualify for any of the statements executed by the current transaction. </p>
<p>The 5 isolations levels above are set on a per transaction basis.</p>
<p>The database option READ_COMMITTED_SNAPSHOT will affect every session/transaction connected to the database. READ_COMMITTED_SNAPSHOT  will use row versioning to present each statement with a transactionally consistent snapshot of the data (like the default behaviour in Oracle). The version data is stored in tempdb. </p>
<p>READ_COMMITTED_SNAPSHOT  will apply to all SELECT statements even if they are not coded as part of a transaction. This makes it  easier to port database applications between Oracle and SQL Server.</p>
<p>When READ_COMMITTED_SNAPSHOT is set to ON the isolation level is automatically set to READ COMMITTED (the default).</p>
<p>With READ_COMMITTED_SNAPSHOT set to OFF, database locks are used as in earlier versions of SQL Server, to block the statement from reading rows modified by other transactions. </p>
<p>Examples</p>
<pre>SET ANSI_DEFAULTS ON
SET LANGUAGE <i>Italian</i>
GO
DBCC USEROPTIONS
GO
SET LANGUAGE us_english</pre>
<p class="quote"><i>"Come on baby, light my fire,
Try to set the night on fire" ~ The Doors </i></p>
<p><b>Related commands:</b></p>
<p> <a href="database_a.html">ALTER DATABASE</a> <i>Database</i> SET ALLOW_SNAPSHOT_ISOLATION ON<br>
  <a href="database_a.html">ALTER DATABASE</a> <i>Database</i> SET READ_COMMITTED_SNAPSHOT ON<br>
.BeginTransaction(IsolationLevel.Serializable)<br>
.BeginTransaction(IsolationLevel.ReadUncommitted)<br>
.BeginTransaction(IsolationLevel.ReadCommitted)<br>
sp_configure<br>
  sys.syslanguages</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

