---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE  PARTITION SCHEME</h1>
<p>Create a partition scheme in the current database - map the partitions of a partitioned table or index to filegroups. </p>
<pre>Syntax
      CREATE PARTITION SCHEME <i>partition_scheme</i>
         AS PARTITION <i>partition_function</i>
            [ALL] TO ( { <i>file_group</i> | [PRIMARY]} [ ,...n ] )
               [; ]

Key<i>
   </i>partition_function  The function using the partition scheme. Must already exist.
   ALL                 All partitions will map to this (one) file group.
   file_group          Names of the filegroup(s) to hold the partitions. Must already exist.
</pre> 
<p>In the example below the last file group (fg3) is not actually needed, so it will be marked as the 'next used' filegroup in the partition scheme.</p>
<p>Example</p>
<pre>CREATE PARTITION FUNCTION myPtnFunct (int)<br>AS RANGE LEFT FOR VALUES (1, 50, 500);<br>GO<br>CREATE PARTITION SCHEME myRangePtnScheme<br>AS PARTITION myPtnFunct<br>TO ( fg1, fg1, fg1, fg2, fg3 );</pre>
<p><i>"Most of the things we do have never been done before" - Enron corporate, 'who we are' statement </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="ptnfunction_c.html">CREATE PARTITION FUNCTION</a><br>
  <a href="ptnscheme_a.html">ALTER PARTITION SCHEME</a><br>
  <a href="ptnscheme_d.html">DROP PARTITION SCHEME</a>  <br>
Equivalent Oracle command:  <a href="../ora/table_a_part.html">ALTER TABLE</a> Partitioning clause</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ptnscheme_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

