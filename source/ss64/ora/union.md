---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>UNION Statement</h1> 
<p>Combine data from one or more SELECT statements.<br>
  <br>
  In Oracle 8i and above the UNION command has been supplemented by the 
  new <a href="syntax-analytic.html">Analytic Features</a> <br>
  <br>
  Syntax:</p>
<pre><b>SELECT <i>command</i></b>  {UNION | UNION ALL | INTERSECT | MINUS} <b>SELECT <i>command</i></b></pre>
<p> key: </p>
<blockquote> 
  <p>UNION - Combine the unique rows returned by 2 SELECT statements<br>
    <br>
    UNION ALL - Combine the rows returned by 2 SELECT statements (including all 
    duplicates)<br>
    <br>
    INTERSECT - Return only those rows that are in *both* SELECT statements<br>
    <br>
    MINUS - Return the rows that are in the first SELECT but not the second</p>
</blockquote>
<p>To combine more than two SELECTs simply nest the expressions<br>
  <br>
  SELECT expr1 UNION (SELECT expr2 UNION SELECT expr3)</p>
<p><b>  Related Commands:</b></p>
<p><a href="select.html">SELECT</a> - Retrieve data from one or more tables, views, or snapshots.<br>
  <br>
  <b>Related Views:</b></p>
<pre>  <a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>       <a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>       <a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a>
  <a href="../orad/DBA_TABLES.html">DBA_TABLES</a>           <a href="../orad/ALL_TABLES.html">ALL_TABLES</a>           <a href="../orad/USER_TABLES.html">USER_TABLES</a>         <a href="../orad/TAB.html">TAB</a>
  <a href="../orad/DBA_VIEWS.html">DBA_VIEWS</a>            <a href="../orad/ALL_VIEWS.html">ALL_VIEWS</a>            <a href="../orad/USER_VIEWS.html">USER_VIEWS</a> 
                                                                <a href="../orad/DICTIONARY.html">DICTIONARY</a>
                                                                <a href="../orad/DICT_COLUMNS.html">DICT_COLUMNS</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="union.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

