---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Dlookup</h1>
<p>Get the value of a particular field from a specified set of records.</p>
<pre>Syntax
      Dlookup ( <i>expression, domain</i>, [<i>criteria</i>] )

      =Dlookup("[<i>Field</i>]", "<i>Table</i>", "[<i>Field</i>] = 'MyValue'")

Key
   <i>expression</i> The field to return.

   <i>domain</i>     The set of records, a table or a query name.

   <i>criteria</i>   Equivalent to an (optional) WHERE clause.
              Any field that is included in <i>criteria</i> must
              also be a field in <i>domain</i>.</pre>
<p>For numerical criteria use <span class="code">"abc=<i>Num</i>"</span><br>
for strings use <span class="code">"abc='<i>string</i>'"<br>
</span>for dates use<span class="code"> "abc=#<i>date</i>#"</span></p>
<p>The DLookup() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><b>Examples</b></p>
<p>In a query:</p>
<blockquote>
<p><img src="dlookup.png" width="582" height="105" alt="dlookup"></p>
</blockquote>
<p>In VBA:</p>
<p class="code">Dlookup("price", "T_Orders", "SupplierID = 64 ")</p>
<p class="quote"><i>“If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people” ~ Chinese Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="last.html">Last</a> (SQL) - Return the last value from a query.<br>
<a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="dlookup.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

