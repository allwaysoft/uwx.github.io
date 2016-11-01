---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Oracle Syntax -  Clusters and Hash Clusters</h1>
<p>Clusters are groups of one or more tables physically stored together because they share common columns and are often used together. This improves disk access
time.</p>
<p>The related columns of the tables in a cluster are called the <b>cluster key</b>.
The cluster key is indexed so that rows of the cluster can be retrieved with a minimum amount of I/O.</p>
<p>No matter how many  tables within the cluster contain the <b>cluster key </b>value,
it is stored only once each in the cluster and the cluster index. Therefore, less storage is required.</p>
<p>Whether or not a table is part of a cluster is transparent to users and to applications. Data stored in a clustered table is accessed by SQL in the same way as data stored
in a nonclustered table.</p>
<p><b>Hash Clusters</b> cluster table data in a manner similar to normal, index clusters. <br>
<br>
To find or store a row in a hash cluster, Oracle applies a hash function to the row's cluster key value. The resulting hash value corresponds to a data block in the cluster.<br>
All rows with the same key value are stored together on disk.</p>
<p>Hash clusters are a better choice than using an <a href="syntax-tables.html">indexed table</a> or index cluster
when a table is often queried with equality queries (for example, WHERE product_id=123).
For such queries, the specified cluster key value is hashed. The resulting hash key value points directly to the area on disk that stores the rows.</p>
<p>This reduces the amount of I/Os that must be performed to locate and read/write a row of data.<br>
<br>
<span class="quote"><i>"The continued use of cluster bombs has cost thousands of civilian lives, denied land to the poor and disenfranchised and is now costing the
international community millions to eradicate the unexploded submunitions… ~ <a href="http://www.landmineaction.org/">Rae McGrath</a></i></span><br>
<br>
<b>Related</b></p>
<p><a href="cluster_c.html">CREATE CLUSTER</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-clusters.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

