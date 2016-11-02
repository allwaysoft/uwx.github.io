---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>DSMOD.exe (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Modify active directory object.</p>
<pre>Syntax
   <a href="dsmod-computer.html">DSMOD Computer</a>
   <a href="dsmod-contact.html">DSMOD Contact</a>
   <a href="dsmod-group.html">DSMOD Group</a>
   <a href="dsmod-ou.html">DSMOD OU</a>
   <a href="dsmod-server.html">DSMOD Server</a>
   <a href="dsmod-user.html">DSMOD User</a>
   <a href="dsmod-quota.html">DSMOD Quota</a>
   <a href="dsmod-partition.html">DSMOD Partition</a></pre>
<p><b>Special characters in distinguished names</b></p>
<p>Commas within a CN must be escaped with the backslash \ character<br>
e.g. <span class="code">"CN=Company<b>\</b>, Inc.,CN=Users,DC=ss64,DC=com"</span><br>
<br>
Backslashes must also be escaped with a backslash <br>
for example, <span class="code">"CN=Sales<b>\</b>\ Latin America,OU=Distribution Lists,DC=ss64,DC=com"</span></p>
<p>If any value contains spaces, use quotation marks:<br>
e.g. <span class="code">"CN=John Smith,CN=Users,DC=SS64,DC=com"</span><br>
<br>
<b>Redirection</b><br>
You can <a href="syntax-redirection.html">pipe</a> results from DSQUERY into DSMOD in order to modify an object. If the DN contains any commas or backslashes you will need to redirect to a file first and add the escape characters as above. </p>
<p>e.g. To find all users in the Marketing OU (organizational unit) and add them to the Sales group:</p>
<pre>DSQUERY user -startnode "ou=Marketing,dc=SS64,dc=com" | DSMOD group "cn=Sales,ou=Marketing,dc=SS64,dc=com" -addmbr </pre>
<p><b>Special Tokens</b><br>
The token <span class="code">$username$</span> (case insensitive) can be used to place the SAM account name.<br>
Entering * as a password will cause DSMOD to prompt for the new password.</p>
<p> For any DS command you can enter multiple values separated by spaces.<br>
e.g. to modify several user accounts at once just supply a list of the distinguished names separated with spaces.</p>
<p><i class="quote">“The aim of science is not to open the door to infinite wisdom but to set a limit to infinite error” ~  Bertolt Brecht ‘Life of Galileo’</i><br>
<br>
<b>Related commands:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
<a href="admodcmd.html">ADmodcmd</a> - Active Directory Bulk Modify<br>
<a href="csvde.html">CSVDE</a> - Import or export AD info in CSV format.<br>
<a href="csvde.html">LDIFDE</a> - Edit AD Objects, extend schema, import or export AD information. <br>
<a href="https://support.microsoft.com/kb/322684">Q322684</a> - Directory Service Command-Line Tools<br>
Equivalent bash commands (Linux): <a href="../bash/usermod.html">usermod</a>/<a href="../bash/groupmod.html">groupmod</a></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsmod.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

