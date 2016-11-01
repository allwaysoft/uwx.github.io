---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapl.lbi" --><!-- #EndLibraryItem --><h1> IF Statement</h1> 
<p>Syntax:</p>
<pre>   IF <i>condition</i> THEN
      <i>statements</i>;
   [ELSIF <i>condition</i> THEN
      <i>statements</i>;]
   [ELSE
      <i>statement</i>;]
   END IF;
</pre>
<p>Note the spelling is ElsIF not ElseIF which you might expect from other languages. <br>
<br>
<i>'condition'</i> may include logical comparisons...</p>
<pre>true AND true = true
true OR true = true

false AND false = false
false OR false = false

null AND null = null
null OR null = null

true AND false = false
true OR false = true

true AND null = null
true OR null = true

false AND null = false
false OR null = null

NOT TRUE = FALSE
NOT FALSE = TRUE
NOT NULL = NULL<span class="body"><b> <br>
Related :</b></span> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="if.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

