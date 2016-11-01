---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_SESSION</h1> 
<p>Set session preferences and security levels.<br>
  Equivalent to <a href="../ora/session_a.html">ALTER 
  SESSION</a> and <a href="../ora/role_s.html">SET ROLE</a> statements.</p>
<pre>Subprocedures:

SET_IDENTIFIER  Set the indentifier. 

SET_CONTEXT     Set the context. 

CLEAR_CONTEXT   Clear the context. 

CLEAR_IDENTIFIER  Clear the identifier. 

SET_ROLE        Set role. 

SET_SQL_TRACE   Turn tracing on or off. 

SET_NLS         Set national language support (NLS). 

CLOSE_DATABASE_LINK Close database link. 

RESET_PACKAGE   Deinstantiates all packages in the session. 

UNIQUE_SESSION_ID Function
                Returns an identifier that is unique for all sessions
                currently connected to this database. 

IS_ROLE_ENABLED Function
                Determines if the named role is enabled for the session. 

IS_SESSION_ALIVE Function
                Determine if the specified session is alive. 

SET_CLOSE_CACHED_OPEN_CURSORS
                Turn close_cached_open_cursors on or off. 

FREE_UNUSED_USER_MEMORY
                Reclaim unused memory - use after performing an operation
                that required a large amount of memory. 

SET_CONTEXT     Set or resets the value of a context attribute. 

LIST_CONTEXT    Returns a list of active namespace and context for the current session. 

SWITCH_CURRENT_CONSUMER_GROUP
                Change the current resource consumer group of
                a user's current session.  </pre>
<p><span class="body">For full documentation of the packaged procedures above see the Oracle Manual:<br>
"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
</b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
<i>by Steven Feuerstein et al</i></span></p>
<pre><span class="body"><b>Related:<br></b><br><a href="../orav/V$SESSION.html">V$SESSION</a></span></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_SESSION.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

