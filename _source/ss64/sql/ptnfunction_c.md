---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE PARTITION FUNCTION</h1>
<p>Create  a partition function in the current database.</p>
<pre>Syntax
      CREATE PARTITION FUNCTION <i>pf_name</i> (<i>input_parameter_type</i>)
	     AS RANGE [<u>LEFT</u> | RIGHT] 
		    FOR VALUES ( [ <i>boundary_value</i> [,...<i>n</i>] ] ) 
      [ ; ]

Key:
   <i>pf_name</i>              The partition function to create.
   <i>input_parameter_type</i> Data type of the column used for partitioning.
   <i>boundary_value</i>       The boundary values for each partition
   LEFT/RIGHT           Which side does the boundary lie</pre> 
<p>  Up to 999 boundary values may be specified (1000 partitions).</p>
<p>By default the boundaries will be to the LEFT so FOR VALUES (5,10) would result in 3 partitions:<br>
&lt;= 5 Then <b>&gt;5 and &lt;=10</b> Then &gt;10 </p>
<p>Example</p>
<pre>CREATE PARTITION FUNCTION myPtnFunct (char(12))<br>AS RANGE FOR VALUES ('EA', 'MA', 'TZ');</pre>
<p class="quote"><i>"The best way to get a bad law repealed is to enforce it strictly" ~ Abraham Lincoln </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="ptnfunction_a.html">ALTER PARTITION FUNCTION</a><br>
  <a href="ptnfunction_d.html">DROP PARTITION FUNCTION</a><br>
Equivalent Oracle command:  <a href="../ora/clause_partition.html">CREATE TABLE </a>Partitioning clause </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ptnfunction_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

