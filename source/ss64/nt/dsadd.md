---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>DSADD.exe (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Add active directory object.</p>
<pre>Syntax
   <a href="dsadd-computer.html">DSADD Computer</a>
   <a href="dsadd-contact.html">DSADD Contact</a> 
   <a href="dsadd-group.html">DSADD Group</a>
   <a href="dsadd-ou.html">DSADD OU</a>
   <a href="dsadd-user.html">DSADD User</a>
   <a href="dsadd-quota.html">DSADD Quota</a>
</pre>
<p>Special characters in distinguished names </p>
<p>Commas within a CN must be escaped with the backslash \ character<br>
e.g. <span class="code">"CN=Company<b>\</b>, Inc.,CN=Users,DC=ss64,DC=com"</span><br>
<br>
Backslashes must also be escaped with a backslash <br>
for example, <span class="code">"CN=Sales<b>\</b>\ Latin America,OU=Distribution Lists,DC=ss64,DC=com"</span></p>
<p>If any value contains spaces, use quotation marks:<br>
e.g. <span class="code">"CN=John Smith,CN=Users,DC=SS64,DC=com"</span></p>
<p>Redirection<br>
You can <a href="syntax-redirection.html">pipe</a> results from DSQUERY into DSMOD in order to modify an object. If the DN contains any commas or backslashes you will need to redirect to a file first and add the escape characters as above. </p>
<p> Special Tokens<br>
The token <span class="code">$username$</span> (case insensitive) can be used to place the SAM account name.<br>
Entering * as a password will cause DSADD to prompt for the new password.</p>
<h2> Adding multiple Objects</h2>
<p>For any DS command you can enter multiple values separated by spaces.<br>
  e.g. to add several user accounts at once just supply a list of the distinguished names separated with spaces.   <br>
  It is also possible to store multiple values in a text file and redirect into DSADD.
</p>
<h2>How to organize Active Directory</h2>
<p>An example AD layout using the domain name SS64.com, obviously customise that to your own domain.</p>
<p>The general principle is to create as few OU's as possible, don't attempt to use AD as a configuration database.</p>
<p>Keep it simple with separate OU's  for Users, Groups, Servers, Workstations  and the IT department (Admin). Avoid deeply nested OUs and punctuation.</p>
<pre>AcmeCo
AcmeCo/Admin        (OU=Admin,OU=AcmeCo,DC=ss64,DC=com)
AcmeCo/Groups       (OU=Groups,OU=AcmeCo,DC=ss64,DC=com)
AcmeCo/Users        (OU=Users,OU=AcmeCo,DC=ss64,DC=com)
AcmeCo/Servers      (OU=Servers,OU=AcmeCo,DC=ss64,DC=com)
AcmeCo/Laptops      (OU=Laptops,OU=AcmeCo,DC=ss64,DC=com)
AcmeCo/Workstations (OU=Workstations,OU=AcmeCo,DC=ss64,DC=com)
AcmeCo/Workstations/Site1
AcmeCo/Workstations/Site2
AcmeCo/Workstations/Site3

PartnerCo           An OU for external contacts
PartnerCo/Users        (OU=Users,OU=PartnerCo,DC=ss64,DC=com)
PartnerCo/Workstations (OU=Workstations,OU=PartnerCo,DC=ss64,DC=com)</pre>
<p>If possible store all USER accounts in a single OU. Organisations change and people move around, there is rarely any reason to reflect every such change in Active Directory. One reason for adding additional USER OUs is to allow delegated rights i.e. to allow super users to do password resets. </p>
<p>The default (built in) Organizational Units (OUs) for Users (<span class="code">CN=Computers,DC=ss64,DC=com</span>) and Computers (<span class="code">CN=Users,DC=ss64,DC=com</span>) will often be used by application installers when creating service accounts. </p>
<p class="quote"><i>“Find a job you like and you add five days to every week” ~ H. Jackson Brown, Jr</i></p>
<p><b> Related commands:</b></p>
<p><a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
<a href="csvde.html">CSVDE</a> - Import or export AD info in CSV format.<br>
<a href="csvde.html">LDIFDE</a> - Edit AD Objects, extend schema, import or export AD information.<br>
Equivalent bash commands (Linux): <a href="../bash/useradd.html">useradd</a>/<a href="../bash/groupadd.html">groupadd</a></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsadd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

