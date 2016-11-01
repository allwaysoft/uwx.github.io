---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE SYNONYM</h1> 
<p>Create a synonym.<br>
  <br>
  Syntax:</p>
<pre>   CREATE [OR REPLACE] [PUBLIC] SYNONYM [<i>schema</i>.]<i>synonym</i> 
      FOR [<i>schema</i>.]<i>object</i> [@<i>dblink</i>]
</pre>
<p><i> </i>'PUBLIC' will  create a public synonym, accessible to all users (with the appropriate privileges.)/p&gt;
</p><p>Unlike Views, Synonyms do not need to be recompiled when the underlying table is redefined. </p>
<p>There is a <a href="http://www.ixora.com.au/newsletter/2001_05.htm#synonyms">small performance hit</a> when accessing data through a public synonym.</p>
<p>Oracle will  resolve object names in the following order:</p>
<p>current user<br>
  private synonym<br>
  public synonym </p>
<p>An alternative method to access data in another schema is to use:</p>
<p><a href="session_a.html">ALTER SESSION</a> set current_schema = <i>Other_Schema </i></p>
<p>Script to drop and recreate synonyms for every object in a schema.<br>
The output of this select is a SQL script with all the 'Create Synonym…' statements: <br>
<br>
<span class="code">Select 'DROP PUBLIC SYNONYM '||object_name||' ;'||chr(13)||chr(10)||'Create<br>
public synonym '||object_name||' for <b>MySchemaName</b>.'||object_name||' ;'<br>
from user_objects<br>
where object_type in (<br>
'TABLE',<br>
'VIEW',<br>
'SEQUENCE',<br>
'PROCEDURE',<br>
'PACKAGE',<br>
'FUNCTION'<br>
)</span></p>
<p><span class="quote"><i>"A synonym is a word you use when you can't spell the word you first thought of" - Burt Bacharach</i></span></p>
<p><b>Related Commands:</b><br>
<br>
<a href="syn_d.html">DROP SYNONYM</a><br>
<a href="view_c.html">CREATE VIEW</a><b> <br>
<br>
Commands that can use synonyms: </b></p>
<p><a href="audit.html">AUDIT</a><br>
  <a href="comment.html">COMMENT</a><br>
  <a href="delete.html">DELETE</a> <br>
  <a href="explain.html">EXPLAIN PLAN</a><br>
  <a href="grant.html">GRANT</a><br>
  <a href="insert.html">INSERT</a> <br>
  <a href="lock.html">LOCK TABLE</a> <br>
  <a href="noaudit.html">NOAUDIT</a><br>
  <a href="revoke.html">REVOKE</a><br>
  <a href="select.html">SELECT</a> <br>
  <a href="update.html">UPDATE</a> <br>
  <br>
  <b>Related Views:</b></p>
<pre> <a href="../orad/DBA_SYNONYMS.html">DBA_SYNONYMS</a>         <a href="../orad/ALL_SYNONYMS.html">ALL_SYNONYMS</a>         <a href="../orad/USER_SYNONYMS.html">USER_SYNONYMS</a>      <a href="../orad/PUBLICSYN.html">PUBLICSYN</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syn_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

