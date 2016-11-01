---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>TO_CHAR</h1> 
<p> Convert a numeric or date expression to a character String.</p>
<pre>Syntax
      to_char(<i>expression</i> [,'<i>format</i>'] [,<i>nls_format</i>])

Key
   <i>char</i>      The DATE, NUMBER or expression to convert
   <a href="syntax-fmt.html"><i>format</i></a>    Format to use.
   <i>nls_lang</i>  The international language to use.</pre>
<p>   The <i>format</i> can be either a <a href="syntax-fmt.html">DATE format</a> (<span class="code">YYYY</span>=year, <span class="code">MM</span>=month, <span class="code">DD</span>=Day, <span class="code">HH</span>=Hour, <span class="code">Mi</span>=Minute )<br> 
or a <a href="syntax-numfmt.html">NUMBER 
  format</a> (<span class="code">0999</span>=include leading zero).<br>
  <br>
  If no <i>format</i> is specified Oracle will use the default date format.<br>
  <i>nls_format</i> allows international formats to be applied.</p>
<p>TO_CHAR will convert NCHAR, NVARCHAR2, CLOB, or NCLOB data to the database character set.</p>
<p><b>Examples</b></p>
<pre>SQL&gt; Select to_char(sysdate, 'yyyy/mm/dd') FROM dual;
 '2010/12/24'

SQL&gt; Select to_char(sysdate, 'FMMonth DD, YYYY') FROM dual;
 'June 9, 2005'

SQL&gt; select to_char(sysdate,'HH24:MI:SS') "Time Now" from dual;
 '14:35:56'

SQL&gt; Select to_char(1.234, '9999.9') FROM dual;
 '1.2'

SQL&gt; Select to_char(1000.25, '9,999.99') FROM dual;
 '1,000.25'

SQL&gt; Select to_char(1000.25, '$9,999.00') FROM dual;
 '$1,000.25'

SQL&gt; Select to_char(25, '000099') FROM dual;
 '000025'

SQL&gt; Select to_char(-50, 'PR999') FROM dual;
 '&lt;50&gt;'

SQL&gt; Select to_char(17, 'RN99') FROM dual;
 'XVII'

SQL&gt; Select to_char('01110' + 1) FROM dual;
 1111

SQL&gt; Select to_char(<i>timestamp</i>, 'DD-MM-YYYY HH24:MI') FROM dual;
 31-12-2005 23.30
</pre>
<p>Convert a character string into an Oracle date, then convert back to a string with a different date format:</p>
<pre>SQL&gt; Select to_char(mydate,'DD-MON-RR HH12:MI') Short_Date_Time
 from (
   select to_date('1-MAR-2010 23:24','DD-MON-RRRR HH24:MI') mydate
   from dual
 );</pre>
<p><b>Related</b>
</p><p><a href="syntax-to_date.html">TO_DATE</a> - Convert to a date <br>
<a href="syntax-to_number.html">TO_NUMBER</a> - Convert to numeric format<br>
<a href="syntax-convert.html">CONVERT</a> - Convert a string from one character set to another.<br>
<a href="syntax-functions.html">Oracle SQL Functions</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-to_char.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

