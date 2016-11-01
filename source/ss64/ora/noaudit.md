---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>NOAUDIT Statement</h1> 
<p>Stop auditing an SQL statement or accesss to a specific database 
  object. <br>
  <br>
  Syntax:</p>
<pre>Privileges

   NOAUDIT {ALL|ALL PRIVILEGES|<i>sql_statement</i>|<i>system_priv</i>} [<i>options</i>]
      [WHENEVER [NOT] SUCCESSFUL]

      <i>options:</i>
            BY <i>user</i>
            BY <i>proxy</i> [ON BEHALF OF ANY|<i>user</i>]

Schema Objects

   NOAUDIT {ALL|<i>action</i>} on [schema.]<i>object</i>
      [WHENEVER [NOT] SUCCESSFUL]

   NOAUDIT {ALL|<i>action</i>} on DIRECTORY <i>directory_name</i>
      [WHENEVER [NOT] SUCCESSFUL]

   NOAUDIT {ALL|<i>action</i>} on DEFAULT
      [WHENEVER [NOT] SUCCESSFUL]

<i>actions:</i>
   ALTER, AUDIT, COMMENT, DELETE, EXECUTE, GRANT,
   INDEX, INSERT, LOCK, RENAME, SELECT, UPDATE</pre>
<p>You can disable all auditing with the init.ora parameter AUDIT_TRAIL = NO</p>
<p><span class="quote"><i>"Happiness is good health and a bad memory" ~ Ingrid Bergman</i></span><br>
<br>
<b>Related:</b><br>
<br>
<a href="audit.html">AUDIT</a><br>
<a href="grant.html">GRANT</a></p>
<p class="code">&nbsp;<a href="../orad/DBA_AUDIT_EXISTS.html">DBA_AUDIT_EXISTS</a> <br> 
&nbsp;<a href="../orad/DBA_AUDIT_OBJECT.html">DBA_AUDIT_OBJECT</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_AUDIT_OBJECT.html">USER_AUDIT_OBJECT</a> <br> 
&nbsp;<a href="../orad/DBA_AUDIT_SESSION.html">DBA_AUDIT_SESSION</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_AUDIT_SESSION.html">USER_AUDIT_SESSION</a> <br> 
&nbsp;<a href="../orad/DBA_AUDIT_STATEMENT.html">DBA_AUDIT_STATEMENT</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_AUDIT_STATEMENT.html">USER_AUDIT_STATEMENT</a> <br> 
&nbsp;<a href="../orad/DBA_AUDIT_TRAIL.html">DBA_AUDIT_TRAIL</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_AUDIT_TRAIL.html">USER_AUDIT_TRAIL</a> </p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="noaudit.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

