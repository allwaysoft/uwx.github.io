---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>First</h1>
<p>  Return the first value from the result set of a query. (SQL).</p>
<pre>Syntax
      First (<i>expression</i>)

Key
   <i>expression</i>   The value/column to return.
</pre>
<p>The First and Last functions are analogous to the MoveFirst and MoveLast methods of a DAO Recordset object. They simply return the value of a specified field in the first or last record, respectively, of the result set returned by a query. </p>
<p>The First() function can be used in  a Group By (Aggregate) <a href="syntax-functions.html">SQL query</a>.</p>
<blockquote>
<p><img src="first-last.png" width="457" height="261" alt="First Function"></p>
<p>This will return, for each surname the largest and smallest StaffID for the people with that surname.</p>
</blockquote>
<p><b>Example</b></p>
<pre>Select First(sales_id) 
from T_Sales 
Group By Department;</pre>
<p class="quote"><i>“Winning takes talent; to repeat takes character.” ~ John Wooden</i></p>
<p><b>Related:</b></p>
<p><a href="last.html">Last</a> -         Return the last value from a query.</p>
<!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

