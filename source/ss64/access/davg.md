---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DAvg</h1>
<p>  Return the average from a set of numeric values in a set of records.</p>
<pre>Syntax
      DAvg ( <i>expression, domain</i>, [<i>criteria</i>] )

      =DAvg("[<i>Field</i>]", "<i>Table</i>")

Key
   <i>expression</i> The numeric values to average.

   <i>domain</i>     The set of records, a table or a query name.

   <i>criteria</i>   Equivalent to an (optional) WHERE clause.
              Any field that is included in <i>criteria</i> must
              also be a field in <i>domain</i>.
</pre>
<p>The DAvg() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><b>Examples</b></p>
<p>In a query:</p>
<blockquote>
<p><img src="davg.png" width="385" height="88" alt="davg"></p>
</blockquote>
<p>In VBA:</p>
<p class="code">intAveragePrice = DAvg("UnitPrice", "T_Orders", "SupplierID = 64 ")</p>
<p class="quote"><i>“If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people” ~ Chinese Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="avg.html">Avg</a> (SQL) - Average<br>
<a href="http://allenbrowne.com/ser-68.html">Eavg</a> (Allen Browne) - Get the average of just the TOP values.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="davg.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

