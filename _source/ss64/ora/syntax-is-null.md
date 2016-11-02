---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>IS  NULL </h1> 
<p> Check for NULL (empty) values</p>
<pre>Syntax
      <i>expression </i>IS NULL;

Key
<i>   Expression</i> can be a <i>column_name</i> or a calculated value.
</pre>
<p><b>Examples</b></p>
<p>Return all the receipts where the delivery date is  null.</p>
<pre>SQL&gt; select * from receipts<br>where delivery_date IS NULL;
</pre>
<p>Return all the addresses where the zip code is  null (we do not have their zip code) </p>
<pre>SQL&gt; select * from addresses<br>where zip_code IS NULL;
</pre>
<p class="quote"><i>“Using dummy values to represent NULL or unknown is usually a bad idea, in 1979 a Los Angeles man named <a href="http://www.snopes.com/autos/law/noplate.asp">Robert Barbour</a> found this out the hard way when he sent an application to the California Department of Motor Vehicles (DMV) requesting personalized license plates for his car” </i>
</p><p><b>Related</b></p>
<p><a href="syntax-functions.html">Oracle SQL Functions</a><b><br>
</b><a href="syntax-is-not-null.html">IS NOT NULL</a> - Check for items that contain a value<br>
ORA-00932 inconsistent datatypes</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
