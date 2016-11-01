---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_LOCK</h1> 
<p>Lock Management services for your PL/SQL applications</p>
<pre>Subprocedures:

ALLOCATE_UNIQUE Allocate a unique lock ID to a named lock. 

REQUEST Function
                Request a lock of a specific mode.
                            nl -&gt; Null
                            ss -&gt; Sub Shared
                            sx -&gt; Sub eXclusive
                            s  -&gt; Shared
                            ssx -&gt; Shared Sub eXclusive
                            x  -&gt; eXclusive
CONVERT Function
                Convert a lock from one mode to another. 

RELEASE Function
                Releases a lock. 

SLEEP           Put a procedure to sleep for a specific time.  
<p><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b><br><br></b>See also DBMSLOCK.SQL package specification file<b>.<br>
Related Commands:<br><br></b><a href="../ora/lock.html">LOCK TABLE</a></p>
<p>p<b>Related Views:</b>p</p>
<pre> <a href="../orav/V$LOCK.html">V$LOCK</a>
 <a href="../orav/V$_LOCK.html">V$_LOCK</a>
 <a href="../orav/V$LOCKED_OBJECT.html">V$LOCKED_OBJECT</a>
 <a href="../orav/V$LOCKS_WITH_COLLISIONS.html">V$LOCKS_WITH_COLLISIONS</a>
 <a href="../orav/V$LOCK_ACTIVITY.html">V$LOCK_ACTIVITY</a>
 <a href="../orav/V$LOCK_ELEMENT.html">V$LOCK_ELEMENT</a> </pre>
<p>p<br></p>
</pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_LOCK.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
