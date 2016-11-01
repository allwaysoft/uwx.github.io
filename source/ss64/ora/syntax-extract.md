---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>EXTRACT</h1> 
<p> Convert a numeric or date expression to a character String.</p>
<pre>Syntax
      EXTRACT (<i>type</i> FROM <i>datetime </i>| <i>interval</i>)

Key
Types that can be extracted:
  YEAR
  MONTH
  DAY
  HOUR
  MINUTE
  SECOND
  TIMEZONE_HOUR
  TIMEZONE_MINUTE
  TIMEZONE_REGION
  TIMEZONE_ABBR</pre>
<p><b>Examples</b></p>
<pre>SQL&gt; SELECT EXTRACT(YEAR FROM DATE '2009-01-04') FROM dual;

SQL&gt; Select expiry_date,<br>Extract(YEAR from expiry_date) YR,<br>Extract(month from expiry_date) MTH<br>From dba_users<br>Where expiry_date is not null; 

SQL&gt; select to_char(sysdate,'HH24:MI:SS') "Time Now" from dual;
 '14:35:56'</pre>
<p class="quote">“Wall Street and the City Spivs, together with their sycophantic friends in the media, are all part of a big club, and you ain't in it” ~ George Carlin</p>
<p><b>Related</b></p>
<p><a href="syntax-functions.html">Oracle SQL Functions</a><b><br>
</b><a href="syntax-to_date.html">TO_DATE</a> - Convert to a date <br>
<a href="syntax-to_number.html">TO_NUMBER</a> - Convert to numeric format<br>
<a href="syntax-convert.html">CONVERT</a> - Convert a string from one character set to another.<br>
ORA-00932 inconsistent datatypes</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-extract.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
