---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsquery.html">DSQuery</a> user    (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Search for users  in active directory.</p>
<pre>Syntax
      DSQuery User [{<i>StartNode</i> | forestroot | <u>domainroot</u>}]
         [-o {<u>dn</u> | rdn | samid}]  [-scope {<u>subtree</u> | onelevel | base}]
            [-name <i>Name</i>] [-desc <i>Description</i>]  [-upn <i>UPN</i>] [-samid <i>Filter</i>]
               [-inactive <i>NumberOfWeeks</i>] [-stalepwd <i>NumberOfDays</i>] [-disabled]
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

   -name    Search for user(s) whose name attribute(CN) matches <i>Name</i>.
            For example, "br*"

   -desc    Search for user(s) whose description matches. For example, "contractor*"

   -upn     Users whose UPN attribute matches <i>UPN</i>
   -samid   User(s) whose SAM account name matches <i>SAMName</i>

  -inactive Users who have been inactive for <i>n</i> number of weeks
  -stalepwd Users who have not changed their passwords for <i>n</i> days
  -disabled Users with disabled accounts

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
<p>Find all users on the current domain with a name that starts with 'Admin'</p>
<p class="code">C:\&gt; dsquery user  -name Admin*</p>
<p>Echo all inactive accounts (more than 4 weeks inactive)</p>
<p><span class="code">C:\&gt; dsquery user -inactive 4</span></p>
<p>Disable all  inactive accounts (more than 4 weeks inactive)</p>
<p><span class="code">C:\&gt; dsquery user -inactive 4 | dsmod user -disabled yes</span></p>
<p>Find the distinguished names of all users in the <span class="code">LaptopUsers</span> OU: </p>
<p class="code">C:\&gt; dsquery user ou=LaptopUsers,ou=AcmeCo,dc=ss64,dc=com </p>
<p class="quote"><i>“If he is a man of honor in one thing, he is that in all things” ~ Raymond Chandler</i></p>
<p><b>Related:</b></p>
<p><a href="dsquery-group.html">DSQuery Group</a> -Search for groups <br>
<a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
PowerShell: <a href="../ps/get-aduser.html">Get-adUser</a> - Get one or more AD users. </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsquery-user.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

