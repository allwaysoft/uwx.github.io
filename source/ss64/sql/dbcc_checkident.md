---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC CHECKIDENT - Check and/or reseed the current identity value for a table. </h1>
<pre>Syntax
      <b>DBCC CHECKIDENT <br></b>        ( '<i>table</i>'<br>                [ , { NORESEED | { RESEED [ , <i>new_reseed_value</i> ] } } ]<br>        ) [WITH NO_INFOMSGS]

 Key:
   NORESEED     -  The current identity value should not be changed.
   RESEED       -  Change the identity value.
   new_reseed_value - The new seed value to be used for the identity column.
   WITH NO_INFOMSGS - Suppresses all information messages.</pre>
<p>  Example</p>
<pre>-- Reset the current identity value
USE MyDatabase;<br>GO<br>DBCC CHECKIDENT ('MySchema.MyTable', RESEED, 5000);<br>GO
</pre>
<p class="quote"><i>I finally got it all together and now I forgot where I put it! </i>~ anon</p>
<p>  <b>Related commands </b></p>
<p><a href="dbcc_checkconstraints.html">DBCC CHECKCONSTRAINTS</a> - Check integrity of table constraints.
</p><p><b>Equivalent Oracle command</b>:
</p><p>SELECT <i>Sequence_for_my_Table</i>.currval into CurrIdentity from dual;</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

