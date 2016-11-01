---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>SQL*PLUS - COMPUTE Statement</h1> 
<p>Calculate an aggregate or summary value for row(s). <br>
  <br>
  Syntax:</p>
<pre>   COMP[UTE] [function … 
      OF {expr|column|alias}…
         ON {expr|column|alias|REPORT|ROW}] 

options:

 OF        The source of the data used in the calculation.
 ON        The event SQL*Plus will use as a break.

functions:

 AVG       Average of non-null values
 COU[NT]   Count of non-null values 
 MAX[IMUM] Maximum value
 MIN[IMUM] Minimum value
 NUM(BER)  Count of rows
 STD       Standard deviation of non-null values
 SUM       Sum of non-null values
 VAR(IANCE)Variance

Entering COMPUTE without any options will list the current definitions.</pre>
<p><b>  Related Commands:</b></p>
<p><a href="syntax-to_char.html">to_char</a><br>
  SET NUMWIDTH - default width for Number columns<br>
  SET LONG - default width for LONG columns<br>
  SET LONGCHUNKSIZE - default width for LONG columns<br>
  SET MAXDATA - Max width for columns</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

