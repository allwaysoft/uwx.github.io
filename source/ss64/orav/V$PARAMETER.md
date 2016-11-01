---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$PARAMETER </h1>  
 <p> 
Displays information about the initialization parameters that are currently in effect for the <b>session</b>. A new session inherits parameter values from the instance-wide values displayed by the V$SYSTEM_PARAMETER view.</p> 
 
<pre>Columns
   ___________________________
 
   NUM
   <b>NAME</b>
   TYPE
   <b>VALUE</b>
   ISDEFAULT
   ISSES_MODIFIABLE
   ISSYS_MODIFIABLE
   ISMODIFIED
   ISADJUSTED
   DESCRIPTION
   UPDATE_COMMENT</pre>
<p>The issys_modifiable column shows the type of parameter: </p>
<p><span class="code">FALSE</span> = <b>Static</b> parameter that cannot change its value in the lifetime of the instance. <br>
<span class="code">IMMEDIATE</span> = dynamic, can change the active instance as well as future database restarts. <br>
<span class="code">DEFERRED</span> = dynamic, changes only affect subsequent sessions.</p>
<p><b>Related:</b></p>
<p><a href="../ora/syntax-initora.html">List of all init.ora Parameters</a>
<br>
<a href="../ora/syntax-parameters.html">Server Parameter Files</a> - Examples - How to Edit <br>
<a href="V$NLS_PARAMETERS.html">V$NLS_PARAMETERS</a> <br>
<a href="V$NLS_VALID_VALUES.html">V$NLS_VALID_VALUES</a> <br>
<a href="V$SYSTEM_PARAMETER.html">V$SYSTEM_PARAMETER</a> <br>
<a href="V$PARAMETER2.html">V$PARAMETER2</a>  - Formatted with one value per row</p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$PARAMETER.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

