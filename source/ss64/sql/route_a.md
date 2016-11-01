---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER ROUTE</h1>
<p>Modify properties of a route. </p>
<pre>Syntax
      ALTER ROUTE <i>route</i> 
            WITH [SERVICE_NAME = '<i>service</i>', ]
               [BROKER_INSTANCE = '<i>broker_instance_identifier</i>' , ]
                  [LIFETIME = <i>route_lifetime</i> , ]
                     ADDRESS =  '<i>next_hop_address</i>'
                        [, MIRROR_ADDRESS = '<i>next_hop_mirror_address</i>' ] [; ]
	  
Key:
   route           The route to create
   owner           Owner of the route
   service         The remote service that this route points to
                   must match the remote name exactly.
   broker_instance The database that hosts the target service. (any)
   route_lifetime  Time, in seconds, to retain the route in the routing table. (Never)
   address         TCP://address:port
</pre>
<p>  Service Broker does not remove expired routes from the routing table. An expired route can be made active with ALTER ROUTE.</p>
<p>Example</p>
<pre>SELECT service_broker_guid<br>FROM sys.databases<br>WHERE database_id = DB_ID()

ALTER ROUTE DemoRoute<br>    WITH<br>    SERVICE_NAME = '//ss64.com/Demo',<br>    BROKER_INSTANCE = 'c4g576-12A3-5th2-g591-6289B56C1E735',<br>    ADDRESS = 'TCP://192.168.10.2:1234' ;</pre>
<p class="quote"><i>"Get your kicks on ROUTE 66" - Jack Kerouac</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="route_c.html">CREATE ROUTE</a><br>
  <a href="route_d.html">DROP ROUTE</a>  <br>
  sys.routes - List routing table</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="route_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

