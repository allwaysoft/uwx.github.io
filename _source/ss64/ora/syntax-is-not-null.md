---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>IS NOT NULL </h1> 
<p> Check for items that contain a value.</p>
<pre>Syntax
      <i>expression </i>IS NOT NULL;

Key
<i>   Expression</i> can be a column_name or a calculated value.
</pre>
<p><b>Examples</b></p>
<p>Return all the receipts where the delivery date is NOT null (so it has been delivered on one date or another) </p>
<pre>SQL&gt; select * from receipts<br>where delivery_date IS NOT NULL;
</pre>
<p>Return all the addresses where the zip code is NOT null (so they do have a zip code) </p>
<pre>SQL&gt; select * from addresses<br>where zip_code IS NOT NULL;</pre>
<p>This can also be used in <a href="../oraplsql/index.html">PL/SQL</a> in much the same way: <span class="code">IF myvariable IS NOT NULL then…</span></p>
<p class="quote"><i>“I call it my billion-dollar mistake.  It was the invention of the null reference in 1965. At that time, I was designing the first comprehensive type system for references in an object oriented language” ~ Tony Hoare </i>
</p><p><b>Related</b>
</p><p><a href="syntax-functions.html">Oracle SQL Functions</a><br>
<a href="syntax-is-null.html">IS NULL</a> - Check for NULL (empty) values<br>
ORA-00932 inconsistent datatypes</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-is-not-null.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

