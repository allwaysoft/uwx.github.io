---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>TO_NUMBER</h1> 

<p> Convert a string expression to a number</p>
<pre>Syntax
      to_number(char[,'<i>format</i>'[,<i>nls_lang</i>])

Key
   <i>char</i>      String expression that will be converted to a number
   <a href="syntax-fmt.html"><i>format</i></a>    Date format to use.
   <i>nls_lang</i>  The international language to use.
</pre>
<p> You can convert a character or expression 
  that contains a number into an actual number value.<br>
  <br>
  The 'format' must be a valid <a href="syntax-numfmt.html">Number format</a>.<br>
  <br>
  nls_lang allows international formats to be applied e.g. currency symbols and 
  numeric chars.</p>
<p>ORA-01722: invalid number - error  thrown if TO_NUMBER is passed a string that doesn't represent a number. See René Nyffenegger's <a href="http://www.adp-gmbh.ch/ora/sql/examples/save_to_number.html">safe_to_number</a> function.</p>
<p><b>Examples</b></p>
<p class="code">SQL&gt; Select to_number('1234.64') from Dual;<br>
1234.64</p>
<p class="code">SQL&gt; Select to_number('1234.64', '9999.9') from Dual;<br>
1234.6</p>
<p class="code">SQL&gt; Select to_number('$99.64', 'L99D99') from Dual;<br>
99.64</p>
<p><b>Related</b></p>
<p><a href="syntax-convert.html">CONVERT</a> -  Convert a  string from one character set to another.<br>
<a href="syntax-to_char.html">TO_CHAR</a> - Convert to character String<br>
<a href="syntax-to_date.html">TO_DATE</a> - Convert to date format<br>
<a href="syntax-functions.html">Oracle SQL Functions</a><br>
ORA-00932 inconsistent datatypes</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-to_number.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

