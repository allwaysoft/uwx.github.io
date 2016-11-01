---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE SCHEMA</h1> 
<p>Create multiple tables, views and grants in a single transaction.<br>
  <br>
  Summary of Syntax:</p>
<pre>   CREATE SCHEMA AUTHORIZATION <i>schema</i> <i>options</i>

   <i>options
      </i><a href="table_c.html">CREATE TABLE</a>
      <a href="view_c.html">CREATE VIEW</a>
      <a href="grant.html">GRANT</a>

The schema name must be an existing Oracle username.

Example:
   CREATE SCHEMA AUTHORIZATION painter
     CREATE TABLE paint
        (paint_id NUMBER PRIMARY KEY,
         paint_size NUMBER,
         colour VARCHAR2(10) )

     CREATE VIEW large_paints AS 
         SELECT paint_id,colour FROM paint WHERE paint_size=100

     GRANT select ON large_paints TO scott;</pre>
<p>This command (along with create user) is typically  used to setup a new, empty set of tables and views. An alternative method is to use export and import (EXP and IMP) </p>
<p><i class="quote">"In the small matters trust the mind, in the large ones the heart" ~ Sigmund Freud</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="user_c.html">CREATE USER</a></p>
<p><span class="code">&nbsp;<a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>&nbsp;&nbsp;<a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>&nbsp;&nbsp;&nbsp;<a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a><br>  
&nbsp;<a href="../orad/DBA_TABLES.html">DBA_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_TABLES.html">ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_TABLES.html">USER_TABLES</a>&nbsp;&nbsp;&nbsp;<a href="../orad/TAB.html">TAB</a><br>  
&nbsp;<a href="../orad/DBA_USERS.html">DBA_USERS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_USERS.html">ALL_USERS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_USERS.html">USER_USERS</a> <br>  
&nbsp;<a href="../orad/DBA_VIEWS.html">DBA_VIEWS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_VIEWS.html">ALL_VIEWS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_VIEWS.html">USER_VIEWS</a></span><br>
</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="schema_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

