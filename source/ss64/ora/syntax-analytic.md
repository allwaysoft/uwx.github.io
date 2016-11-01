---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Analytic Features</h1> 
<p> Introduced with Oracle 8i release 2 (and extended in Oracle 9) it is now possible to perform complex analytic tasks without the need for complex sub queries or PL/SQL programming.<br>
The analytic features are defined as part of the ANSI SQL   1999 standard and have also been implemented by IBM in DB2. This new functionality can often result in <i>order of magnitude</i> gains in performance.</p>
<blockquote>
<p><a href="syntax-analytic-grouping.html">Grouping Sets</a> (GROUPING, CUBE and ROLLUP) - Instead of a UNION ALL statement that requires multiple table scans, define a grouping 
set which will result in only a single pass over the base table.<br>
<br>
<a href="syntax-analytic-with.html">The WITH Clause</a> - Define and re-use a query block when it occurs more than once within a complex query.<br> 
This will improve performance and will often make the SQL statement easier to read.<br>
<br>
<a href="syntax-analytic-topn.html">Top n Ranking </a>-
Rank, Dense_Rank, row_number, ntile, percent_rank and 
cume_dist functions. <br>
Provides answers to questions like "Show the top 10 of x" 
or "Show the bottom 20% of y"<br>
<br>
<a href="syntax-analytic-aggregate.html">Aggregate Window </a>- All aggregate functions (SUM, MAX, AVG, FIRST_VALUE, LAST_VALUE…) 
<br>
Easy calculation of moving averages, cumulative sums.<br>
<br>
<a href="syntax-analytic-aggregate-first.html">FIRST and LAST </a> - Aggregate function for the first or last value of an ordered set. <br>
e.g. find the 
largest sale during the first month of each year. <br>
<br>
<a href="syntax-analytic-reporting.html">Reporting Functions</a> - 
Like Aggregate Window Functions with the difference that the Window ranges from 
the beginning to the end of the partition, so each row in the partition is reported 
with an aggregate over the whole partition.<br>
<br>
<a href="syntax-analytic-lead.html">Lag and Lead</a> - Lag/Lead functions make it possible to access values in rows other than the 
current row without the need to perform a self join.<br>
<br>
<a href="syntax-analytic-case.html">CASE and Width_Bucket Functions</a><br>
Group data into even or unevenly sized buckets.</p>
</blockquote>
<p><span class="quote"><i>"When a team outgrows individual performance and learns team confidence, 
  excellence becomes a reality" ~ Joe Paterno </i></span><br>
<br>
<b>See also</b><br>
<a href="mview_c.html">Materialised Views</a> which can provide similar 
  performance benefits.<br>
</p><!-- #BeginLibraryItem "/Library/foot_menu.lbi" --><hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

