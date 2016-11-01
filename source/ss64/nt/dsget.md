---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>DSGET.exe (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>View active directory objects.</p>
<pre>Syntax
   <a href="dsget-computer.html">DSGet Computer</a>
   <a href="dsget-contact.html">DSGet Contact</a>
   <a href="dsget-group.html">DSGet Group</a>
   <a href="dsget-ou.html">DSGet OU</a>
   <a href="dsget-partition.html">DSGet Partition</a>
   <a href="dsget-quota.html">DSGet Quota</a>
   <a href="dsget-server.html">DSGet Server</a>
   <a href="dsget-subnet.html">DSGet Subnet</a>
   <a href="dsget-user.html">DSGet User</a>
</pre>
<p><b>Special characters in distinguished names</b></p>
<p>Commas within a CN must be escaped with the backslash \ character<br>
e.g. <span class="code">"CN=Company<b>\</b>, Inc.,CN=Users,DC=ss64,DC=com"</span><br>
<br>
Backslashes  must also be escaped with a backslash <br>
for example, <span class="code">"CN=Sales<b>\</b>\ Latin America,OU=Distribution Lists,DC=ss64,DC=com"</span></p>
<p>If any value contains spaces, use quotation marks:<br>
e.g. <span class="code">"CN=John Smith,CN=Users,DC=SS64,DC=com"</span><span class="body"><br>
<br>
<b>Redirection</b><br>
You can <a href="syntax-redirection.html">pipe</a> results from DSQUERY into DSGet in order to view multiple objects. If the DN contains any commas or backslashes you will need to redirect to a file first and add the escape characters as above. </span></p>
<p><span class="body"> 
</span><b>Special Tokens</b><br>
The token <span class="code">$username$</span> (case insensitive) can be used to place the SAM account name.<br>
Entering * as a password will cause DSMOD to prompt for the new password.</p>
<p> For any DS command you can enter multiple values separated by spaces.<br>
e.g. to modify several user accounts at once just supply a list of the distinguished names separated with spaces.</p>
<p <i="" class="quote">“A good reputation is more valuable than money” - Publilius Syrus<br>
<br>
<b>Related:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
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
<div id="bl" class="footer"><a href="dsget.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

