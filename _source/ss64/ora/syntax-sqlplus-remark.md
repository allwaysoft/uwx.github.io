---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>SQL*PLUS - REM[ark] Statement </h1> 
<p>Add comments to an sql script.<br>
  <br>
  Syntax:</p>
<pre>   REMARK Single line comment 

   -- Single line comment

   /* Single line comment */

   /* 
     Multi Line
     comment
   */</pre>
<p>A common mistake is to use /* but not followed by a space (or newline) this 
  will be interpreted as "/" and will execute the previous SQL command.<br>
  Although the actual comment will be ignored this behaviour can have significant 
  unexpected results:<br>
  even if there's no previous command to execute then Oracle will error with "<i>Nothing 
  in SQL buffer to run</i>". <br>
  <br>
  UNIX style comments ( # at the beginning of a line) don't work - Oracle will 
  interpret and execute the whole line. They do however work for <a href="syntax-Imp.txt">import</a> 
  and <a href="syntax-exp.txt">export</a> parameter files.</p>
<p class="quote"><i>"It is a profitable thing, if one is wise, to seem foolish" ~ Aeschylus</i></p>
<p><b> Related Commands:</b><br><br>
<a href="syntax-sqlplus.html">SQL Plus commands</a><br>
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

