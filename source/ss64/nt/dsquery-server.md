---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsquery.html">DSQuery</a> Server    (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Search for  a server in active directory.</p>
<pre>Syntax
      DSQuery Server [-o {<u>dn</u> | rdn}] [-forest] [-domain <i>DomainName</i>] [-site <i>SiteName</i>]
            [-name <i>Name</i>] [-desc <i>Description</i>] 
               [-hasfsmo {schema | name | infr | pdc | rid}] [-isgc] 
                  [{-s <i>Server</i> | -d <i>Domain</i>}] [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
                     [-q] [-r] [-gc] [-limit <i>NumberOfObjects</i>]  [{-uc | -uco | -uci}]

Key
   -o       The format used to display the search results.
              dn = distinguished name. 
              rdn = relative distinguished name.

   -forest  Search for all domain controllers (server objects) that are part of the current forest.
 
   -domain  Search for all domain controllers (server objects) that are part of <i>domain</i> (DNS name) 
            default=current domain.

   -site    Search for all domain controllers (server objects) that are part of <i>SiteName</i>.

   -name    Search for Server object(s) whose name attribute(CN) matches <i>Name</i>.
            For example, "br*"

   -desc    Search for Server object(s) whose description matches. For example, "contractor*"

   -hasfsmo Match the Domain Controller operations master role:
                schema  Schema master of the forest.
                name    Domain naming master of the forest.
                infr    Infrastructure master of the domain.
                pdc     Primary domain controller (PDC) role owner.
                rid     Relative identifier master (RID master) 

   -isgc    Search for all domain controllers (server objects) that are Global Catalog servers.
   
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
<p>Find  all domain controllers in the current domain:</p>
<p class="code">C:\&gt; dsquery server</p>
<p>Find all domain controllers in the domain ss64.com that are global catalog servers: </p>
<p class="code">C:\&gt; dsquery server -domain ss64.com -isgc</p>
<p class="quote"> “We don’t pay taxes. Only the little people pay taxes” ~ <a href="http://en.wikipedia.org/wiki/Leona_Helmsley">Leona Helmsley</a> </p>
<p><b>Related:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
PowerShell: <a href="../ps/get-adcomputer.html">Get-adComputer</a> - Get one or more AD computers. </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsquery-server.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

