---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>decode</h1> 
<p> Return different values based on the content of a column/expression. </p>
<pre>   decode(<i>expression </i><i>,search1 </i>,<i>return1</i>
                    [,<i>search2 </i><i>,return2</i>] [,<i>searchN </i>,<i>returnN</i>]
                       [,<i>default</i>] )</pre>
<p>Examples</p>
<pre>   SELECT decode(emp_sex, 'M', 'Male',
                      'F', 'Female', 'Unknown')
   FROM   employees;</pre>
<p>Return the Order_Date if the invoice_date is &gt; Order_date otherwise return the invoice_date:</p>
<pre>   SELECT DECODE(SIGN(Invoice_Date-Order_Date), 1, Order_Date, Invoice_Date)
   FROM ORDERS;</pre>
<p>You can convert a character or expression that contains a number into an actual number value.<br>
<br>
The 'format' must be a valid <a href="syntax-numfmt.html">Number format</a>.<br>
<br>
nls_lang allows international formats to be applied e.g. currency symbols and 
numeric chars.</p>
<p><span class="quote">“They told me that to make her fall in love I had to make her laugh. And everytime she laughs I’m the one who falls in love” ~ Tommaso Ferraris</span><br>
<br>
<b>Related</b></p>
<p><a href="syntax-functions.html">Oracle SQL Functions</a><br>
<a href="syntax-analytic-case.html">CASE</a> function</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-decode.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

