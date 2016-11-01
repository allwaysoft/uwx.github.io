---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsquery.html">DSQuery</a> *    (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Find objects in the directory using a Lightweight Directory Access Protocol (LDAP) query.</p>
<pre>Syntax
      DSQuery *  [{<i>StartNode</i> | forestroot | <u>domainroot</u>}] [-scope {subtree | onelevel | base}]
             [-filter <i>LDAPFilter</i>] [-attr {<i>AttributeList</i> | *}] [-attrsonly] [-l]
                [{-s <i>Server</i> | -d <i>Domain</i>}] [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
                   [-q] [-r] [-gc] [-limit <i>NumberOfObjects</i>]  [{-uc | -uco | -uci}]

Key
   <i>StartNode</i> | forestroot | <u>domainroot</u>  The node in the console tree where the search starts.
                                        forestroot = search using the global catalog.

   -scope   The scope of the search:
               <u>subtree</u>  = subtree that is rooted at the start node in the console tree.
               onelevel = immediate children of the start node only.
               base     = single object that the start node represents.
            If forestroot is the <i>StartNode</i>, then <u>subtree</u> is the only valid scope.

   -filter  Apply an explicit LDAP search filter  e.g. (&amp;(objectCategory=Person)(sn=smith*))
            Default = (objectClass=*)

   -attr    Select the Attributes to display - semicolon separated LDAP display names.
            ( -attr * will display all the attributes in a list.)
            Default <i>=</i> DN.

 -attrsonly Display only attribute types, not their values. Default=display both.

   -l       Display entries in a list instead of a table.
 
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
<p>Display  all the attributes of an object given its distinguished name:</p>
<p class="code">C:\&gt; dsquery * OU=Demo,DC=ss64,DC=Com -scope base -attr *</p>
<p>Display the SAM account name of an object given its distinguished name:</p>
<p class="code">C:\&gt; dsquery * OU=Demo,DC=ss64,DC=Com -scope base -attr sAMAccountName</p>
<p class="quote"> "Some say Lady Gaga is a lie. And they are right, I am a lie and everyday I kill to make it true" ~ Lady Gaga</p>
<p><b>Related:</b></p>
<p><a href="dsquery-computer.html">DSQuery Computer</a><br>
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
<div id="bl" class="footer"><a href="dsquery-ldap.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

