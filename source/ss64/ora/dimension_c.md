---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE DIMENSION</h1> 
<p>Create a dimension (data warehouse parent-child relationship.)<br>
  <br>
  Syntax:</p>
<pre>   CREATE DIMENSION [<i>schema</i>.]<i>dimension</i> <i>level_clause(s) 
      [heirarchy_clause(s) attribute_clause(s)];</i></pre>
<p>The command should include at least one heirarchy clause or attribute clause.</p>
<pre><i>level_clause</i>:
   LEVEL level IS (table.column,…)

<i>heirarchy_clause</i>:
   HEIRARCHY heirarchy (child_level CHILD OF parent_level,… [join_clause])

<i>attribute_clause</i>:
   ATTRIBUTE level DETERMINES (dependent_column,…)

<i>join_clause</i>:
   JOIN KEY (child_key_column,…) REFERENCES parent_level</pre>
<p><a href="http://www.jlcomp.demon.co.uk/dimensions.html">Create Dimension Example </a>- from jlcomp<br>
  <br>
  <i class="quote">"If you don't ask the right questions, you don't get the right answers. A question asked in the right way often points to its own answer" ~ Edward Hodnett </i></p>
<p><b>Related Commands:</b></p>
<p>DIMENSION - <a href="dimension_a.html">ALTER DIMENSION</a> <br>
  DIMENSION - <a href="dimension_d.html">DROP DIMENSION</a><br>
  MVIEW  - <a href="mview_c.html">CREATE MATERIALIZED VIEW</a> </p>
<p><b>Related Views:</b></p>
<p class="code"> <a href="../orad/DBA_DEPENDENCIES.html">DBA_DEPENDENCIES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_DEPENDENCIES.html">ALL_DEPENDENCIES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_DEPENDENCIES.html">USER_DEPENDENCIES</a> </p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dimension_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

