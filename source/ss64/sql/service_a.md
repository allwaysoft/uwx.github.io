---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER SERVICE</h1>
<p>Change a  service (a  task or set of tasks)</p>
<pre>Syntax
      ALTER SERVICE <i>service</i>
         [ON QUEUE [<i>schema</i>.]<i>queue</i>]
            [(ADD | DROP CONTRACT <i>contract</i> [,...<i>n</i>])]  [;]
	  
Key
   service     The service to create.
   queue       The queue that receives messages for this service
   contract    A contract for which this service may be a target
</pre>
<p>   Each service may be a target for one (or more) contracts, each of these will expose  functionality to other services.</p>
<p>Example</p>
<pre>ALTER SERVICE [//ss64.com/Demo]<br>    ON QUEUE [dbo].[NewQueue] ;</pre>
<p class="quote"><i>"Every man has a right to risk his own life for the preservation of it" ~ Jean Jacques Rousseau, The Social Contract</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="service_c.html">CREATE SERVICE</a><br>
  <a href="service_d.html">DROP SERVICE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="service_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

