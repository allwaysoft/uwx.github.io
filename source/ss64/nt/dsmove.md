---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>DSMOVE.exe (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Rename or Move an active directory object  (user, computer, group..) to a different Organisational Unit (OU).</p>
<pre>Syntax
      DSMOVE <i>ObjectDN</i> [-newname <i>NewRDN</i>] [-newparent <i>ParentDN</i>]
         [{-s <i>Server</i> | -d <i>Domain</i>}]
            [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
               [-q] [{-uc | -uco | -uci}]

Options
   <i>ObjectDN</i>   Distinguished name of the computer that you want to add.
              If omitted will be taken from standard input (stdin)

   -newname   Rename the object with a new Relative Distinguished Name.

   -newparent New location for the object, enter the new parent DN.

   -q         Quiet, suppress all output

   -uc        Unicode format
   -uco       Unicode format for output only
   -uci       Unicode format for input only

   -u <i>UserName</i> The user name with which a user logs on to a remote server.
               By default, the currently logged on user.

   -p <i>Password</i> The password, or * to prompt for a password.</pre>
<p> By default, DSMOVE connects the computer to the domain controller in the logon domain.</p>
<p>For any DS command you can enter multiple values separated by spaces.<br>
e.g. to modify several user accounts at once just supply a list of the distinguished names separated with spaces.</p>
<p>Examples</p>
<p>Rename a user:</p>
<pre>C:\&gt; set _andy="CN=Andrew Gorden,OU=Europe,DC=ss64,DC=Com"
C:\&gt; dsmove %_andy% -newname "Andrew Gordon"
</pre>
<p>Move a user to a different OU </p>
<pre>C:\&gt; set _andy="CN=Andrew Gordon,OU=Europe,DC=ss64,DC=Com"
C:\&gt; set _newOrgUnit="OU=Asia,DC=ss64,DC=Com"
C:\&gt; dsmove %_andy% -newparent %_newOrgUnit%</pre>
<p><i class="quote">“All that glitters is not gold. All who wander are not lost” ~  William Shakespeare</i><br>
 <br>
<b>Related:</b></p>
<p> <a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
<a href="csvde.html">CSVDE</a> - Import or export AD info in CSV format.<br>
<a href="csvde.html">LDIFDE</a> - Edit AD Objects, extend schema, import or export AD information. <br>
<a href="https://support.microsoft.com/kb/322684">Q322684</a> - Directory Service Command-Line Tools
<br>
Equivalent bash commands (Linux):
ldapmodify - Modify Lightweight Directory Access Protocol</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsmove.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

