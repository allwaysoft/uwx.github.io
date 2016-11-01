---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DISABLE TRIGGER</h1>
<p>Disable a trigger.</p>
<pre>Syntax
      DISABLE TRIGGER { [<i>schema</i>.] <i>trigger</i> [,...<i>n</i> ] | ALL }
         ON { <i>object_name</i> | DATABASE | ALL SERVER } [ ; ]

Key:
   object_name - The table or view on which the trigger was created to execute. 
   DATABASE    - The DDL trigger applies to the current database.
   ALL SERVER  - The DDL trigger applies to the current server.
</pre>
<p> Specifying DISABLE... ALL in a database that is published for <b>merge replication</b> will disable the merge triggers created by SQL Server, and will disrupt replication.</p>
<p>Example</p>
<pre>DISABLE TRIGGER MySchema.MyTrigger1 ON MySchema.MyTable;
DISABLE TRIGGER MyTrigger2 ON DATABASE;<br>GO</pre>
<p class="quote"><i># When they kick at your front door,
  How you gonna come?<br>
  With your hands on your head,
  Or on the trigger of your gun #
  - The Clash,
  London Calling</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="trigger_e.html">ENABLE TRIGGER</a><br>
  <a href="trigger_a.html">ALTER TRIGGER</a>  <br>
  sys.triggers  <br>
sp_settriggerorder<br>
<a href="table_c.html">CREATE TABLE</a> <br>

  COLUMNS_UPDATED<br>
  TRIGGER_NESTLEVEL<br>
  EVENTDATA<br>
Equivalent Oracle command:  <a href="../ora/trigger_a.html">ALTER TRIGGER</a>..<b>.DISABLE</b></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

