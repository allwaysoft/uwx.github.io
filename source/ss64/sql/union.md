---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>UNION</h1>
<p>Combine the results of two or more queries into a single result set.</p>
<pre>Syntax:
      <i><a href="select.html">query_spec</a></i> UNION [ALL] <i><a href="select.html">query_spec</a></i>  [...<i>n</i> ] ;
</pre>
<p>Each <i>query_spec</i> must return the same number of columns in the same order.<br>
The column data types must be compatible.<br>ALL - Include duplicate rows in the results.</p>
<p>Example</p>
<pre>USE MyDatabase ;<br>
SELECT MyCol_INT1, MyCol_STRING2<br>FROM MySchema.MyTable;
UNION
SELECT MyCol_INTA, MyCol_STRINGB<br>FROM MySchema.MyOtherTable;
GO

<span class="quote"></span></pre>
<p class="quote"><i>"Eventually, all things merge into one, and a river runs through it. The river was cut by the world's great flood and runs over rocks from the basement of time. On some of the rocks are timeless raindrops. Under the rocks are the words, and some of the words are theirs. I am haunted by waters"
- Norman Maclean</i></p>
<p><b>Related commands:</b></p>
<p><a href="select.html">SELECT</a><br>
EXCEPT<br>
INTERSECT<br>
<a href="insert.html">INSERT</a><br>
<a href="update.html">UPDATE</a><br>
Equivalent Oracle command:  <a href="../ora/union.html">UNION</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="union.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

