---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsadd.html">DSADD</a> Contact (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Add a contact to active directory.</p>
<pre><i>Syntax</i>
      DSADD Contact <i>ContactDN</i> [<i>Options</i>] [-q] [{-uc | -uco | -uci}]

Key
   <i>ContactDN</i>   Distinguished name of the contact that you want to add.
               If omitted will be taken from standard input (stdin)

   -q       Quiet, suppress all output

   -uc      Unicode format
   -uco     Unicode format for output only
   -uci     Unicode format for input only

Options:

   [-fn <i>FirstName</i>] [-mi <i>Initial</i>] [-ln <i>LastName</i>] [-display <i>DisplayName</i>]
   [-desc <i>Description</i>] [-office <i>Office</i>] [-tel <i>PhoneNumber</i>]
   [-email <i>Email</i>] [-hometel <i>HomePhoneNumber</i>] [-pager <i>PagerNumber</i>]
   [-mobile <i>CellPhoneNumber</i>] [-fax <i>FaxNumber</i>] [-iptel <i>IPPhoneNumber</i>]
   [-title <i>Title</i>] [-dept <i>Department</i>]
   [-company <i>Company</i>] 

   [{-s <i>Server</i> | -d <i>Domain</i>}]
   [-u <i>UserName</i>] [-p {<i>Password</i> | *}]</pre>
<p><b>Examples</b></p>
<p class="code">C:\&gt; dsadd contact "cn=fred,ou=staff,dc=ss64,dc=com"</p>
<p class="code">C:\&gt; dsadd contact "cn=JohnS,cn=users,dc=ss64,dc=com" -fn "john" -ln "Smith"</p>
<p class="quote"><i>“The friend is the man who knows all about you, and still likes you” ~ Elbert Hubbard</i></p>
<p><b> Related commands:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
<a href="csvde.html">CSVDE</a> - Import or export AD info in CSV format.<br>
<a href="csvde.html">LDIFDE</a> - Edit AD Objects, extend schema, import or export AD information. <br>
Equivalent bash commands (Linux):
ldapmodify - Modify Lightweight Directory Access Protocol</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsadd-contact.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

