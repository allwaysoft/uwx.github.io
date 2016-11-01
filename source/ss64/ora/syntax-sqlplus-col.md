---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>SQL*PLUS - COLUMN Statement </h1> 
<p>Specify text, alignment, format and wrapping for a given column, 
  for the duration of the current session. <br>
  <br>
  Syntax:</p>
<pre>   COL[UMN] [{column|expr} [option …]] 

options:

ALIAS alias      Assign an alias to a column, which can be used by
                 <a href="syntax-sqlplus.html">BREAK</a>, <a href="syntax-sqlplus.html">COMPUTE</a>, and other COLUMN commands.
                 COL em_salary+em_bonus ALIAS tot_income

CLEAR            Reset the display attributes for the column to default.

FOLD_AFTER       Inserts a CR after the col heading and after each row. 
FOLD_BEFORE      Inserts a CR before the col heading and before each row.

FORMAT <a href="syntax-sqlplus-fmt.html">format</a>    Format a column (e.g. COL emp_name FORMAT A15)

HEA[DING] 'text' Set a column heading

JUSTIFY {L[EFT]|C[ENTER]|C[ENTRE]|R[IGHT]}
                 By default Numbers are right justified, text is left justified.

LIKE {expr|alias}
                 Format like another column (already defined)

NEWLINE          Same as FOLD_BEFORE
    
NEW_VALUE variable
                 Specify a variable to hold a column value. (see <a href="syntax-sqlplus.html">TTITLE</a>)

NOPRINT|PRINT    Display the column

NUL[L] char      Display NULL values as Char

OLD_VALUE variable
                 Specify a variable to hold a column value. (see <a href="syntax-sqlplus.html">BTITLE</a>)

ON|OFF           Enable or disable column format attributes

WRA[PPED]|WOR[D_WRAPPED]|TRU[NCATED] 
                 How to treat long CHAR strings
</pre>
<p> Note:<br>
expressions like '<span class="code">em_salary+em_bonus</span>' must match exactly the SELECT statement being run.<br>
If no option is specified, COLUMN will list the current attributes.</p>
<p><b>Related Commands:</b><br>
</p>
<p><a href="syntax-to_char.html">to_char</a><br>
SET NUMWIDTH - default width for Number columns<br>
SET LONG - default width for LONG columns<br>
SET LONGCHUNKSIZE - default width for LONG columns<br>
SET MAXDATA - Max width for columns</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-sqlplus-col.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

