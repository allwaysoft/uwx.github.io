---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>TO_LOB</h1>
<p> Convert LONG values to CLOB or NCLOB values
              or convert LONG RAW values to BLOB values</p>
<pre>Syntax
      to_lob(<i>long_column</i>)

Key
   <i>long_column</i> A LONG or LONG RAW value.</pre>
<p> Before using this function, you must create a LOB column to receive the converted data. Create either a character CLOB or a Binary BLOB column.)</p>
<p><b>Examples</b></p>
<p>Use as part of an "<a href="insert.html">INSERT</a> INTO … SELECT…" subquery.</p>
<pre>SQL&gt; insert into products (product_id, description_lob)<br>select prod_id, TO_LOB(description_long)<br>from item_catalogue;</pre>
 <p><b>Related</b></p>
<p><a href="syntax-to_char.html">TO_CHAR</a> - Convert to character String<br>
TO_CLOB - Convert character or NCLOB values to the database character set.<br>
<a href="syntax-to_number.html">TO_NUMBER</a> - Convert to numeric format<br>
<a href="syntax-functions.html">Oracle SQL Functions</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

