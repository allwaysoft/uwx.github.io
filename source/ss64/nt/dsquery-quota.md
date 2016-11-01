---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsquery.html">DSQuery</a> Quota    (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Search for  a Quota in active directory.</p>
<pre>Syntax
      DSQuery Quota {domainroot | <i>ObjectDN</i>}
         [-o {<u>dn</u> | rdn}]  [-acct <i>Name</i>] [-qlimit <i>Filter</i>] 
             [-desc <i>Description</i>] 
                [{-s <i>Server</i> | -d <i>Domain</i>}] [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
                   [-q] [-r] [-gc] [-limit <i>NumberOfObjects</i>]  [{-uc | -uco | -uci}]

Key
   <i>StartNode</i> | forestroot | <u>domainroot</u>  The node in the console tree where the search starts.
                                        forestroot = search using the global catalog. 

   -o       The format used to display the search results.
              dn = distinguished name. 
              rdn = relative distinguished name.

   -acct    Find the quota specifications that are assigned to <i>name</i> (a user, group, computer, or InetOrgPerson)

   -qlimit  find quota specifications whose limit matches <i>Filter</i>

   -desc    Search for quota object(s) whose description matches. For example, "super*"

   -s       Server to connect to (Default=the domain controller in the logon domain.)
   -d       Domain to connect to.
   -u       Username with which the user logs on to a remote server. 
   -p       Password     (UserName or Domain\UserName or Username@domain.com)

   -q       Quiet, suppress all output
   -r       Recursive search (follow referrals)
   -gc      Use the AD global catalog during the search.
   -limit   The maximum number of objects to return, default=100.

   -uc      Unicode format
   -uco     Unicode format for output only
   -uci     Unicode format for input only</pre>
<p><b>Examples</b></p>
<p>Find  all accounts  that have quota specifications:</p>
<p class="code">C:\&gt; dsquery quota</p>
<p>Pipe the output of <a href="dsquery-user.html">DSQuery User</a> to show the quotas for a selection of accounts: </p>
<p class="code">C:\&gt; dsquery user -name K* | dsquery quota</p>
<p class="quote"> “Find purpose, the means will follow” ~ Mohandas Gandhi</p>
<p>   <b>Related:</b></p>
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
<div id="bl" class="footer"><a href="dsquery-quota.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

