---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>KILL QUERY NOTIFICATION </h1>
<p>Remove a query notification subscription from the instance. </p>
<pre>Syntax:
       KILL QUERY NOTIFICATION SUBSCRIPTION <br>          {ALL | <i>subscription_id</i> }

Key:
   ALL              Remove all subscriptions in the instance.
   <i>subscription_id</i>  Remove the given subscription.

</pre>
<p>  This command is silent - does not produce a notification message.</p>
<p>Example</p>
<pre>KILL QUERY NOTIFICATION SUBSCRIPTION 64 ;</pre>
<p class="quote"><i>"Whom the gods love dies young" ~ Menander 300 BC </i></p>
<p><b>Related commands:</b></p>
<p>  sys.dm_qn_subscriptions</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="kill_qn.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

