---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>CONVERT</h1> 

<p> Convert a  string from one character set to another.</p>
<pre>Syntax
      convert( <i>string</i> , <i>char_set_to</i> , [ <i>char_set_from</i> ] )

Key
   <i>string</i>         String to be converted
   <i>char_set_to</i>    Character set to convert to.
   <i>char_set_from</i>  Character set to convert from.</pre>
<p>Common character sets: <br>
<br>
<span class="code">WE8ISO8859P1</span> ISO 8859-1 West European 8-bit character set<br>
<span class="code">US7ASCII</span>  US 7-bit ASCII character set<br>
<span class="code">JA16SJIS</span> Japanese 16-bit Shifted Japanese Industrial Standard</p>
<p>The database character encoding scheme   is defined as part of the <a href="database_c.html">CREATE DATABASE</a> statement. <br>
All SQL CHAR datatype columns (CHAR, CLOB, VARCHAR2, and LONG), including columns in the data dictionary, have their data stored in the database character set. In addition, the  character set determines which characters can be used to name objects in the database.</p>
<p><b>Example</b></p>
<p class="code">SQL&gt; SELECT CONVERT('SÄMPLE TÊXT','US7ASCII','WE8ISO8859P1')
FROM dual;</p>
<p><b>Related</b></p>
<p><a href="syntax-functions.html">Oracle SQL Functions</a><br>
<a href="syntax-to_number.html">TO_NUMBER</a> - Convert to numeric format<br>
  <a href="syntax-to_char.html">TO_CHAR</a> - Convert to character String<br>
  <a href="syntax-to_date.html">TO_DATE</a> - Convert to date format<br>
</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

