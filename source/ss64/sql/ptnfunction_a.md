---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER PARTITION FUNCTION</h1>
<p>Alter the boundary values for a partition function by splitting or merging the ranges.</p>
<pre>Syntax
      ALTER PARTITION FUNCTION <i>partition_function</i>()<br>        SPLIT RANGE (<i>boundary_value</i>) [ ; ]

      ALTER PARTITION FUNCTION <i>partition_function</i>()<br>        MERGE RANGE (<i>boundary_value</i>) [ ; ]

Key:
   SPLIT RANGE     Add a partition to the partition function.
   MERGE RANGE     Drop a partition and merge values to one of the remaining partitions.
   boundary_value  The range of the new/old partition
</pre> 
<p>The partition scheme(s) that use the partition function must have a filegroup marked as NEXT USED to hold the new partition. </p>
<p>If the scheme lacks a filegroup marked NEXT USED, use ALTER PARTITION SCHEME to either add a filegroup, or designate an existing one, to hold the new partition. A filegroup that already holds partitions can be designated to hold additional partitions. </p>
<p>Example</p>
<pre>CREATE PARTITION FUNCTION myPtnFunct (int)<br>AS RANGE LEFT FOR VALUES ( 1, 50, 500 );<br>GO
<br>-- Split the partition between 50 and 500<br>-- create 2 partitions:
--   50-250 and  250-500<br>ALTER PARTITION FUNCTION myPtnFunct ()<br>SPLIT RANGE (250);

-- Partitions at this point:
--  &lt;=1
--  &gt;1 and &lt;= 50
--  &gt;50 and &lt;=250
--  &gt;250 and &lt;=500

-- Merge the partitions 1-50 and 50-250<br>-- to create one partition from 1-250:
<br>ALTER PARTITION FUNCTION myPtnFunct ()<br>MERGE RANGE (50);</pre>
<p class="quote"><i>"The best way to get a bad law repealed is to enforce it strictly" ~ Abraham Lincoln </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="ptnfunction_c.html">CREATE PARTITION FUNCTION</a><br>
  <a href="ptnfunction_d.html">DROP PARTITION FUNCTION</a><br>
Equivalent Oracle command:  <a href="../ora/table_a_part.html">ALTER TABLE</a> Partitioning clause </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

