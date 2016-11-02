---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsmod.html">DSMOD</a> Quota   (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Modify a quota in active directory.</p>
<pre>Syntax
      DSMOD Quota <i>QuotaDN</i> -qlimit <i>Value</i>  [-desc <i>Description</i>] 
            [{-s <i>Server</i> | -d <i>Domain</i>}] [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
               [-c]  [-q] [{-uc | -uco | -uci}]

Key
   <i>QuotaDN</i>  Distinguished name of the quota to modify.
            If omitted will be taken from standard input (stdin)

   -qlimit  Quota Limit - the number of objects within the directory partition that <i>Name</i> can own.
            To specify an unlimited quota, use -1.

   -desc    Description of the quota. 

   -s       Server to connect to (Default=the domain controller in the logon domain.)
   -d       Domain to connect to.

   -c       Continue with the next object after any error (when you specify multiple target objects)
            by default dsmod will exit when the first error occurs.

   -q       Quiet, suppress all output

   -uc      Unicode format
   -uco     Unicode format for output only
   -uci     Unicode format for input only</pre>
<p><b>Examples</b></p>
<p>Change the Quota FabQuota1 to have a limit of 100: </p>
<p class="code">C:\&gt; dsmod quota FabQuota1 -qlimit 100</p>
<p class="quote"><i>“The highest reward for a person's toil is not what they get for it but what they become by it” ~ John Ruskin</i></p>
<p><b> Related:</b></p>
<p><a href="dsmod-partition.html">DSMOD partition</a><br>
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
<div id="bl" class="footer"><a href="dsmod-quota.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

