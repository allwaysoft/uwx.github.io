---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CALL</h1> 
<p>Execute a procedure or function from within SQL (may be used
  for  both stored rocedures/packages and standalone routines). <br>
  <br>
  Syntax:</p>
<pre>   CALL [<i>schema</i>.] <i>item_to_call</i> 

   CALL [<i>schema</i>.] [package.] <i>item_to_call</i> [INTO :host_variable [[INDICATOR] :<i>indicator_var</i>] ]

   CALL [<i>schema</i>.] [type.] <i>item_to_call</i> [INTO :host_variable [[INDICATOR] :<i>indicator_var</i>] ]

Key

   <i>item_to_call:    </i><i>function</i>  [<i>@dblink</i>]<i> (expr,…)
                    procedure</i> [<i>@dblink</i>]<i> (expr,…)
                    method</i>    [<i>@dblink</i>] <i>(expr,…)

   indicator_var: </i>  The value or condition of the host variable.</pre>
<p><b>Example</b></p>
<p> CALL place_order(453);</p>
<p><i class="quote">"Ever notice that 'What the hell' is always the right decision?" ~ Marilyn Monroe</i><b><br>  <br>
Related Commands:</b><br><br>
PACKAGE - <a href="package_a.html">ALTER PACKAGE</a><br>
PROCEDURE - <a href="procedure_a.html">ALTER PROCEDURE</a><br>
<a href="exec.html">EXEC</a></p>
<pre> <a href="../orad/CODE_PIECES.html">CODE_PIECES</a>
 <a href="../orad/CODE_SIZE.html">CODE_SIZE</a>
 <a href="../orad/DBA_SOURCE.html">DBA_SOURCE</a>         <a href="../orad/ALL_SOURCE.html">ALL_SOURCE</a>          <a href="../orad/USER_SOURCE.html">USER_SOURCE</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

