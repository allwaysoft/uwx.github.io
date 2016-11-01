---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsget.html">DSGET</a> Subnet  (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Display subnet(s) from active directory.</p>
<pre>Syntax
      DSGET Subnet <i>SubnetDN</i> [-dn] [-desc] [-loc] [-site]
         [{-s <i>Server</i> | -d <i>Domain</i>}] [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
            [-c] [-q] [-l] [{-uc | -uco | -uci}]

Key
  <i>SubnetDN</i>  Distinguished Name of the subnet to view.

   -dn      Display the Distinguished Names of the subnets. 
   -desc    Display the descriptions of the subnets.
   -loc     Display the subnet locations.
   -site    Display the site names associated with the subnets.

   -s       Server to connect to (Default=the domain controller in the logon domain.)
   -d       Domain to connect to

   -u       Username with which the user logs on to a remote server. 
   -p       Password     (UserName or Domain\UserName or Username@domain.com)

   -c       Report errors, but continue with the next object after any error (when you specify multiple objects)
            by default dsget will exit when the first error occurs.

   -q       Quiet, suppress all output
   -l       Display entries in a list format. By default, dsget outputs a table format.

   -uc      Unicode format
   -uco     Unicode format for output only
   -uci     Unicode format for input only</pre>
<p>Dsget can accept <span class="code">stdin</span> from the keyboard, from a redirected file, or as <a href="syntax-redirection.html">piped</a> output from another command e.g. <a href="dsquery.html">DSQuery</a></p>
<p><b>Examples</b></p>
<p>Display   properties for the subnets 10.55.130.*</p>
<pre>C:\&gt; dsquery subnet -name 10.55.130.*
 "CN=10.55.130.0/24,CN=Subnets,CN=Sites,CN=Configuration,DC=example,DC=com"

C:\&gt;dsget subnet "CN=10.55.130.0/24,CN=Subnets,CN=Sites,CN=Configuration,DC=example,DC=com"
   dn                                                                        desc       site
   CN=10.55.130.0/24,CN=Subnets,CN=Sites,CN=Configuration,DC=example,DC=com  EXAMPLECR  EXAMPLE-MSY
 dsget succeeded</pre>
<p>The output from DSQuery can be piped directly to DSGet: <br>
</p>
<pre>C:\&gt; dsquery subnet -name 10.55.130.* | dsget subnet -site
   site
   EXAMPLE-MSY
 dsget succeeded
</pre>
<p class="quote"><i>“All day long the door of the sub-conscious remains just ajar; we slip through to the other side, and return again, as easily and secretly as a cat” ~ Walter de La Mare</i></p>
<p> <b>Related:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsget-subnet.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

