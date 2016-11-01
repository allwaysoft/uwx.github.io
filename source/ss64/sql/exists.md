---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>Exists</h1>
<p>Use a subquery to test for the existence of rows.</p>
<pre>Syntax
      EXISTS <i>subquery</i>

      NOT EXISTS <i>subquery</i>

Key<i>
   </i><i>subquery</i>  A restricted <a href="select.html">SELECT</a> statement.
             (The COMPUTE clause and the INTO keyword are not allowed.)</pre>

<p>Examples</p>
<pre>IF EXISTS (select *<br>	        from sales<br>	        where customer_id = 123)<br>  Print 'Record exits'<br>ELSE<br>  Print 'Record doesn''t exist'


SELECT sal.sales_id<br>FROM Sales AS sal<br>WHERE NOT EXISTS<br>(SELECT * <br>    FROM Discounts AS disc<br>    WHERE sal.sales_id = disc.sales_id 
    );</pre>
<p class="quote"><i>“If you can dream - and not make dreams your master;<br>
If you can think - and not make thoughts your aim...” ~ Rudyard Kipling 1899 </i></p>
<p><b>Related:</b></p>
<p> <a href="if.html">IF</a> <br>
Equivalent Oracle  command: 
Select into a cursor then: <span class="code">IF SQL%FOUND THEN</span>...</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="exists.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

