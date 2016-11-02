---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE  REMOTE SERVICE BINDING</h1>
<p>Define the security credentials used to initiate a conversation with a remote service.</p>
<pre>Syntax
      CREATE REMOTE SERVICE BINDING <i>binding</i>
         [ AUTHORIZATION <i>owner</i> ] 
            TO SERVICE '<i>service</i>' 
               WITH USER = <i>user_name</i> [ , ANONYMOUS = { ON | <u>OFF</u> } ]  [; ]

Key<i>
   binding</i>     The remote service binding to create.
   owner       Set the owner of the binding to a database user or role.
   service     The remote service to bind to the USER.
   user_name   The owner of the certificate associated with the remote service.
   ANONYMOUS   Use anonymous authentication when communicating with the service.</pre>
<p>  This command is only necessary for initiating services that communicate with target services outside of the SQL Server instance. </p>
<p>Example</p>
<pre>CREATE REMOTE SERVICE BINDING MyBinding<br>    TO SERVICE '//ss64.com/services/DemoService'<br>    WITH USER = Simon ;</pre>
<p class="quote"><i>"Service to others is the rent you pay for your room here on earth" - Muhammad Ali</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="rsb_a.html">ALTER REMOTE SERVICE BINDING</a><br>
<a href="rsb_d.html">DROP REMOTE SERVICE BINDING</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rsb_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

