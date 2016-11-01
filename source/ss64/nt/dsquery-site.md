---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsquery.html">DSQuery</a> Site    (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Search for  a site in active directory.</p>
<pre>Syntax
      DSQuery Site  [-o {<u>dn</u> | rdn}]  
            [-name <i>Name</i>] [-desc <i>Description</i>] 
               [{-s <i>Server</i> | -d <i>Domain</i>}] [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
                  [-q] [-r] [-gc] [-limit <i>NumberOfObjects</i>]  [{-uc | -uco | -uci}]

Key

   -o       The format used to display the search results.
              dn = distinguished name. 
              rdn = relative distinguished name.
              samid = Security Accounts Manager (SAM) account name.

   -name    Search for site(s) whose name attribute(CN) matches <i>Name</i>.
            For example, "br*"

   -desc    Search for site(s) whose description matches. For example, "contractor*"

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
<p>Find all Sites in the current domain with a name that starts with 'south'</p>
<p class="code">C:\&gt; dsquery site  -name south*</p>
<p class="quote"><i>“I’d rather wake up in the middle of nowhere than in any city on earth” ~  Steve McQueen</i></p>
<p><b>Related:</b></p>
<p><a href="dsquery-ou.html">DSQuery OU</a> - Search for OU <br>
<a href="dsadd.html">DSAdd</a> - Add object<br>
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
<div id="bl" class="footer"><a href="dsquery-site.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

