---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsquery.html">DSQuery</a> Contact   (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Search for  contacts  in active directory.</p>
<pre>Syntax
      DSQuery Contact [{<i>StartNode</i> | forestroot | <u>domainroot</u>}]
        [-o {<u>dn</u> | rdn | samid}]  [-scope {<u>subtree</u> | onelevel | base}]
           [-name <i>Name</i>] [-desc <i>Description</i>] 
              [{-s <i>Server</i> | -d <i>Domain</i>}] [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
                 [-q] [-r] [-gc] [-limit <i>NumberOfObjects</i>]  [{-uc | -uco | -uci}]

Key
   <i>StartNode</i> | forestroot | <u>domainroot</u>  The node in the console tree where the search starts.
                                        forestroot = search using the global catalog. 

   -o       The format used to display the search results.
               dn = distinguished name. 
               rdn = relative distinguished name.
               samid = Security Accounts Manager (SAM) account name.

   -scope   The scope of the search:
               <u>subtree</u> = subtree that is rooted at the start node in the console tree.
               onelevel = immediate children of the start node only.
               base = single object that the start node represents.
            If forestroot is the <i>StartNode</i>, then <u>subtree</u> is the only valid scope. 

   -name    Search for contact(s) whose name attribute(CN) matches <i>Name</i>.
            For example, "br*"

   -desc    Search for contact(s) whose description matches. For example, "contractor*"

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
<p>Find all contacts on the current domain with a name that starts with 'Smit'</p>
<p class="code">C:\&gt; dsquery contact  -name Smit*</p>
<p>Find all contacts in a specific OU: </p>
<p class="code">C:\&gt; dsquery contact ou=users,ou=AcmeCo,dc=ss64,dc=com </p>
<p class="quote"> "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us" ~ Calvin &amp; Hobbes</p>
<p><b>Related:</b></p>
<p><a href="dsquery-user.html">DSQuery User</a> - Search for users <br>
<a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
PowerShell: <a href="../ps/get-adobject.html">Get-adObject</a> - Get one or more AD objects. 
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsquery-contact.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

