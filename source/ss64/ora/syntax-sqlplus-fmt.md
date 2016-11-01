---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>SQL*Plus formats</h1> 
<p> The following formats are used by the SQL*Plus ACCEPT and COLUMN commands</p>
<pre>Column FORMATS

Code eg  Description
-- ----  ------------------------------

An A20   Char, VARCHAR2 (VARCHAR), LONG
         where n is the desired display width.

9  9999  The number of digits entered=display width. 
         Does not display leading zeroes.

0  0999  Displays leading zeroes.

   9990  Display 0 as '0' instead of ' ' 

$ $9999  Prefix a dollar sign

B B9999  Display 0 as ' ' instead of '0' 

MI 9999MI    Display minus signs "-"

PR 9999PR    Display minus in <brackets>&lt;brackets&gt;

comma 9,999  Include commas

period 99.99 Align the decimal point 

V 999V99     Multiply value by 10n, where n is the number of "9's"

EEEE 9.999EEEE Display in scientific notation

DATE DATE    Display value as a date (US)
</brackets></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-sqlplus-fmt.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

