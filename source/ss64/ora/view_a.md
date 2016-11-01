---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER VIEW</h1> 
<p>Recompile or redefine a view.<br>
<br>
Syntax:</p>
<pre>   ALTER VIEW [<i>schema</i>.]<i>view</i> COMPILE;

   ALTER VIEW [<i>schema</i>.]<i>view</i> ADD <a href="clause_constraint_col.html"><i>out_of_line_constraint</i></a>;

   ALTER VIEW [<i>schema</i>.]<i>view</i> MODIFY CONSTRAINT <i>constraint</i> {RELY | <u>NORELY</u>};

   ALTER VIEW [<i>schema</i>.]<i>view</i> DROP CONSTRAINT <i>constraint</i>;

   ALTER VIEW [<i>schema</i>.]<i>view</i> DROP PRIMARY KEY

   ALTER VIEW [<i>schema</i>.]<i>view</i> UNIQUE (<i>column</i> [,<i>column</i>,…])</pre>
<p>When a constraint is in <a href="syntax-constraints.html#validate">NOVALIDATE</a>  mode, Oracle does not enforce it and does not take it  into account for query rewrite. If you specify RELY Oracle will still not enforce the constraint but will  take it  into account for query rewrite.</p>
<p>An alternative to ALTER VIEW COMPILE is the built-in pl/sql package <a href="../orap/DBMS_UTILITY.html">DBMS_UTILITY</a></p>
<p><i>“The truth is not always the same as the majority decision” - Pope John XXII </i><br>
<br>
<b>Related Commands:</b></p>
<p><a href="view_c.html">CREATE VIEW</a> <br>
<a href="view_d.html">DROP VIEW</a><br>
<br>
<b>Related Views:</b></p>
<pre> <a href="../orad/DBA_VIEWS.html">DBA_VIEWS</a>            <a href="../orad/ALL_VIEWS.html">ALL_VIEWS</a>            <a href="../orad/USER_VIEWS.html">USER_VIEWS</a>
 <a href="../orad/DBA_MVIEWS.html">DBA_MVIEWS</a>           <a href="../orad/ALL_MVIEWS.html">ALL_MVIEWS</a>           <a href="../orad/USER_MVIEWS.html">USER_MVIEWS</a>
 <a href="../orav/V$FIXED_VIEW_DEFINITION.html">V$FIXED_VIEW_DEFINITION</a> 
 <a href="../orav/V$RESERVED_WORDS.html">V$RESERVED_WORDS</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="view_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

