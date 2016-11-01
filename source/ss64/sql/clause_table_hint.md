---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>Table Hint</h1>
<p>Specify a table scan, index, or locking method for the query optimizer. Normally the query optimizer will pick the best optimization method without hints being specified.</p>
<pre>Syntax
      table_hint: 
         [NOEXPAND] <b><i>hint</i></b>  [,<i>hint</i>...]

   hints:
     FASTFIRSTROW 
     HOLDLOCK 
     INDEX ( <i>index_val</i> [ ,...n ] )
     NOLOCK 
     NOWAIT
     PAGLOCK 
     READCOMMITTED 
     READCOMMITTEDLOCK 
     READPAST 
     READUNCOMMITTED 
     REPEATABLEREAD 
     ROWLOCK 
     SERIALIZABLE 
     TABLOCK 
     TABLOCKX 
     UPDLOCK 
     XLOCK 

table_hint_limited:
     KEEPIDENTITY 
     KEEPDEFAULTS 
     FASTFIRSTROW 
     HOLDLOCK 
     IGNORE_CONSTRAINTS 
     IGNORE_TRIGGERS 
     NOWAIT
     PAGLOCK 
     READCOMMITTED 
     READCOMMITTEDLOCK 
     READPAST 
     REPEATABLEREAD 
     ROWLOCK 
     SERIALIZABLE 
     TABLOCK 
     TABLOCKX 
     UPDLOCK 
     XLOCK 

Key:
   NOEXPAND  Indexed views are not expanded to access the underlying tables when
              the query optimizer processes the query. 
   Index()   Index hints - name or ID of indexes to be used by the query optimizer 
   KEEPIDENTITY  Identity values in the imported data are to be used for the identity column.
                 During INSERT...SELECT...FROM OPENROWSET(BULK...)
   KEEPDEFAULTS  Use the columns default value instead of inserting NULLs.
                 During INSERT...SELECT...FROM OPENROWSET(BULK...)
   FASTFIRSTROW  Equivalent to OPTION (FAST 1)
   HOLDLOCK      See SERIALIZABLE.
   IGNORE_CONSTRAINTS
                 Constrains on the table are ignored by the bulk-import operation
                 During INSERT...SELECT...FROM OPENROWSET(BULK...)
   IGNORE_TRIGGERS
                 Tiggers defined on the table are ignored during INSERT...SELECT...FROM OPENROWSET
   NOLOCK        See READUNCOMMITTED.
	NOWAIT        Return a message as soon as a lock is encountered on the table.
   PAGLOCK       Always lock entire pages rather than just a row, key or single table lock.
   READ COMMITTED Read operations comply with the rules for the READ COMMITTED isolation level
   READCOMMITTEDLOCK
                 Comply with the rules for the READ COMMITTED isolation level.
   READPAST      Don''t read rows that are locked by other transactions. 
                 This avoids blocking transactions - READ COMMITTED or REPEATABLE READ isolation levels.
   READUNCOMMITTED
                 Dirty reads are allowed. No shared locks are issued, read any row including 
                 exclusive locks set by other transactions.
   REPEATABLEREAD The same locking semantics as REPEATABLE READ isolation level.
   ROWLOCK       Rows are locked in preference to page or table locks
   SERIALIZABLE  Hold shared locks until a transaction is completed
   TABLOCK       Hold a shared lock until the end-of-statement. 
   TABLOCKX      An exclusive lock is taken on the table.
   UPDLOCK       Update locks are to be taken and held until the transaction completes.
   XLOCK         Exclusive locks are to be taken and held until the transaction completes. </pre>
<p>In SQL Server 2005, with some exceptions, table hints are supported in the FROM clause only when the hints are specified with the WITH keyword. Table hints also must be specified with parentheses: SELECT...FROM ... WITH (<i>hint, hint, hint</i>)</p>
<p>Example</p>
<pre>UPDATE MyTable<br>WITH (TABLOCK)<br>SET mt_Price = 5600<br>WHERE mt_ID = 1234</pre>
<p class="quote"><i>"If you can suffer without a hint of self-pity, without a hint of
  self-preoccupation, then this develops an almost limitless capacity for
  compassion for everyone everywhere" ~
John Griffin</i></p>
<p><b>Related commands:</b></p>
<p>  <span class="body"><a href="select.html">SELECT</a><br>
    <a href="insert.html">INSERT</a><br>
    <a href="update.html">UPDATE</a><br>
  <a href="delete.html">DELETE</a></span><br>
  <a href="set.html">SET</a> TRANSACTION ISOLATION LEVEL<br>
  <br>
<b>Equivalent Oracle command</b>:</p>
<p><a href="../ora/select_hints.html">Oracle Hints</a> </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clause_table_hint.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

