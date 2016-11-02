---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsadd.html">DSADD</a> Quota  (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Add a quota to active directory.</p>
<pre>Syntax
      DSADD quota -part <i>PartitionDN</i> [-rdn <i>RelativeDistinguishedName</i>]
         -acct <i>Name</i> -qlimit <i>Value</i>  [-desc <i>Description</i>] 
            [{-s <i>Server</i> | -d <i>Domain</i>}] [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
               [-q] [{-uc | -uco | -uci}]

Key
   <i>PartitionDN</i>  Distinguished name of the quota to add.
            If omitted will be taken from standard input (stdin)

   -rdn     The Relative Distinguished Name of the quota specification to be created.
            Default=<i>Domain_AccountName</i> (based on -acct name)

   -acct    Assign the quota specifications to <i>name</i> (a user, group, computer, or InetOrgPerson)
            This can be either a Distinguished Name or Domain\SAMAccountName

   -qlimit  Quota Limit - the number of objects within the directory partition that <i>Name</i> can own.
            To specify an unlimited quota, use -1.

   -desc    Description of the quota. 

   -s       Server to connect to (Default=the domain controller in the logon domain.)<br>   -d       Domain to connect to.

   -q       Quiet, suppress all output

   -uc      Unicode format
   -uco     Unicode format for output only
   -uci     Unicode format for input only</pre>
<p><b>Example</b></p>
<p>Add a quota of 500 objects for the <span class="code">Spain</span> partition to user Fabrizio:</p>
<p class="code">C:\&gt; dsdd quota -acct Fabrizio -rdn FabQuota1 -part CN=spain,dc=ss64,dc=com"  -qlimit 500</p>
<p> <i class="quote">“If he is a man of honor in one thing, he is that in all things” ~ Raymond Chandler</i><br>
  <br>
<b> Related:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsadd-quota.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

