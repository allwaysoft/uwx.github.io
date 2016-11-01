---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Dcount</h1>
<p>  Count the number of records in a table/query.</p>
<pre>Syntax
      DCount ( <i>expression, domain</i>, [<i>criteria</i>] )

      =DCount("[<i>Field</i>]", "<i>Table</i>", "[<i>Field</i>] = 'MyValue'")

Key
   <i>expression</i> The field to count.

   <i>domain</i>     The set of records, a table or a query name.

   <i>criteria</i>   Equivalent to an (optional) WHERE clause.
              Any field that is included in <i>criteria</i> must
              also be a field in <i>domain</i>.
</pre>
<p>The DCount() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><b>Examples</b></p>
<p>In a query:</p>
<blockquote>
<p><img src="dcount.png" width="385" height="88" alt="dcount"></p>
</blockquote>
<p>In VBA:</p>
<p class="code">DCount("OrderID", "T_Orders", "SupplierID = 64 ")</p>
<p>This is equivalent to:<span class="code"><br>
SELECT DCount([T_Orders].OrderID)<br>
FROM [T_Orders]<br>
WHERE (([T_Orders].SupplierID)=64);</span></p>
<p class="quote"><i>“If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people” ~ Chinese Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="count.html">Count</a> (SQL) - Count records<br>
<a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="dcount.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

