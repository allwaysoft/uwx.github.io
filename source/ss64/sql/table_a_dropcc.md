---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1><a href="table_a.html">ALTER TABLE</a></h1>
<p>Drop clustered  constraint clause:</p>
<pre>drop_clustered_constraint_option:
    { 
        MAXDOP = <i>max_degree_of_parallelism</i>
      | ONLINE = {ON | <u>OFF</u> }
      | MOVE TO { <i>partition_scheme</i> ( <i>column </i>) | <i>filegroup</i>
          | "default"}
    }
</pre>
<p>Example</p>
<pre>ALTER TABLE MyTable<i> </i>ALTER COLUMN MyOLDColumn DROP WITH MAXDOP=2;

</pre>
<p><span class="quote"><i>"At a good table we may go to school" - Thomas Fuller</i></span></p>
<p><b>Related commands:</b></p>
<p><a href="table_c.html">CREATE TABLE</a><br>
<a href="table_d.html">DROP TABLE</a><br>
Equivalent Oracle command:  <a href="../ora/table_a.html">ALTER TABLE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="table_a_dropcc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

