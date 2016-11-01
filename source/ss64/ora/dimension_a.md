---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER DIMENSION</h1> 
<p>Alter a dimension (data warehouse parent-child relationship.)<br>
  <br>
  Syntax:</p>
<pre>   ALTER DIMENSION [schema.]dimension ADD <i>level_clause(s) 
      </i>ADD <i>[heirarchy_clause(s) </i>ADD <i>attribute_clause(s)];
</i>
   ALTER DIMENSION [schema.]dimension COMPILE;

   ALTER DIMENSION [schema.]dimension
      DROP LEVEL level [RESTRICT|CASCADE];

   ALTER DIMENSION [schema.]dimension
      DROP HEIRARCHY heirarchy;

   ALTER DIMENSION [schema.]dimension
      DROP ATTRIBUTE attribute;</pre>
<p>Multiple drop statements can be combined in a single command 
  <br>
  e.g. ALTER DIMENSION… DROP ATTRIBUTE… , DROP DIMENSION…;</p>
<pre><i>level_clause</i>:
   LEVEL level IS (table.column,…)

<i>heirarchy_clause</i>:
   HEIRARCHY heirarchy (child_level CHILD OF parent_level,… [join_clause])

<i>attribute_clause</i>:
   ATTRIBUTE level DETERMINES (dependent_column,…)

<i>join_clause</i>:
   JOIN KEY (child_key_column,…) REFERENCES parent_level</pre>
<p><span class="quote"><i>"If you don't ask the right questions, you don't get
  the right answers. A question asked in the right
  way often points to its own answer"
 ~ Edward Hodnett </i></span></p>
<p><b>Related Commands:</b></p>
<p>DIMENSION - <a href="dimension_c.html">CREATE DIMENSION</a> <br>
  DIMENSION - <a href="dimension_d.html">DROP DIMENSION</a><br>
  MVIEW - <a href="mview_c.html">CREATE MATERIALIZED VIEW</a> <br>
<a href="../orap/DBMS_UTILITY.html">DBMS_UTILITY</a> - Compile
pl/sql package</p>
<p><b>Related Views:</b></p>
<p class="code"> <a href="../orad/DBA_DEPENDENCIES.html">DBA_DEPENDENCIES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_DEPENDENCIES.html">ALL_DEPENDENCIES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_DEPENDENCIES.html">USER_DEPENDENCIES</a> </p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dimension_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

