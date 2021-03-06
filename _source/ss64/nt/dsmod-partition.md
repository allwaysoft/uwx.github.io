---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsmod.html">DSMOD</a> Partition   (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Modify a partition in active directory.</p>
<pre>      DSMod partition <i>PartitionDN</i> 
         [-qdefault <i>Value</i>] [-qTmbstnWt <i>Percent</i>]
            [{-s <i>Server</i> | -d <i>Domain</i>}]   [-u <i>UserName</i>]  [-p {<i>Password</i> | *}]
               [-c] [-q] [{-uc | -uco | -uci}]

Key
   <i>PartitionDN</i>  Distinguished name of the partition that you want to modify.
                If omitted will be taken from standard input (stdin)

  -qdefault Set the default Quota for <i>PartitionDN</i> to <i>Value</i>.
            This default can apply to any User, Group, Computer or InetOrgPerson)
            A value of -1 will specify an unlimited quota.
  
 -qTmbstnWt Tombstone Weight Percent (0-100) Reduce the effect of the Quota limit for tombstone (deleted) objects.
            A weight of 100 % will treat tombstone objects the same as normal objects.
            A weight of 50 % will allow twice as many tombstone objects.
            e.g. a limit of 500 with -qTmbstnWt 50 will allow 400 objects + 200 tombstone objects

   -s       Server to connect to (Default=the domain controller in the logon domain.)
   -d       Domain to connect to.

   -u       Username with which the user logs on to a remote server. 
   -p       Password     (UserName or Domain\UserName or Username@domain.com)

   -c       Continue with the next object after any error (when you specify multiple target objects)
            by default dsmod will exit when the first error occurs.

   -q       Quiet, suppress all output

   -uc      Unicode format
   -uco     Unicode format for output only
   -uci     Unicode format for input only</pre>
<p><b>Examples</b></p>
<p>Change the default quota limit for a directory partition named <span class="code">FabQuota1</span> to a value of 1000: </p>
<p class="code">C:\&gt; dsmod partition FabQuota1 -qdefault 1000</p>
<p class="quote"><i>"Let him that would move the world, first move himself" ~ Socrates</i></p>
<p><b> Related:</b></p>
<p><a href="dsmod-quota.html">DSMOD Quota</a><br>
<a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
Equivalent bash commands (Linux):
ldapmodify - Modify Lightweight Directory Access Protocol</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsmod-partition.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
