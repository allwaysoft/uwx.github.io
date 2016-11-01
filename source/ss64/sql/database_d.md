---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> DROP DATABASE </h1>
<p>Remove a database from the server.</p>
<pre>Syntax
      DROP DATABASE <i>database_name</i>  [ ,...n ] [;]

      DROP DATABASE <i>database_snapshot_name</i> [ ,...n ] [;]

Key:
    <i>database_name
</i>           Name of the database. To display a list of databases, use the sys.databases catalog view.
<i>
   database_snapshot_name</i>
           Name of a database snapshot to be removed. </pre>
<p>The database context of the session runnning this command cannot be the same as the database about to be dropped.</p>
<p>You cannot drop a database if any users are currently reading or writing data, see ALTER DATABASE SINGLE_USER.</p>
<p>Before dropping the database: make a backup, drop any database snapshots and, if the database is involved in log shipping, remove log shipping.</p>
<p>Requires  CONTROL permission on the database.</p>
<p><b>Example</b></p>
<pre>DROP DATABASE MyDatabase;</pre>
<p class="quote"><i>"I would rather train someone and lose them, then not train them and keep them" ~ Zig Ziglar</i></p>
<p><b>Related commands:</b><br>
  <br>
  <a href="database_a.html">ALTER DATABASE</a><br>
  <a href="database_c.html">CREATE DATABASE</a><br>
  sys.databases  <br>
  <br>
  <b>Equivalent Oracle command</b>:<a href="../bash/export.html"><br>
  <br>
  </a>None,  delete the datafiles and stop the background processes (OraTab/Services) </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="database_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

