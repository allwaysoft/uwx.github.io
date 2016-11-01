---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP SERVICE</h1>
<p>Remove a service from the database.</p>
<pre>Syntax
      DROP SERVICE <i>service</i> [;]
	  
Key<i>
   </i><i>service</i>     The service to drop. </pre>
<p>   Dropping a service will delete any messages currently queued for that service, the remote side of any open conversations using the service will receive an error from the Service Broker.</p>
<p>Example</p>
<pre>DROP SERVICE [//ss64.com/TestService] ;</pre>
<p class="quote"><i>"We cheat the other guy and pass the savings on to you" ~ sign outside US car dealership</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="service_c.html">CREATE SERVICE</a><br>
  <a href="service_a.html">ALTER SERVICE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="service_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

