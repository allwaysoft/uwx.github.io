---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsmod.html">DSMOD</a> Contact  (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Modify a contact in active directory.</p>
<pre><i>Syntax</i>
      DSMOD contact <i>ContactDN</i> [<i>Options</i>] [-c] [-q] [{-uc | -uco | -uci}]

Key
   <i>ContactDN</i>   Distinguished name of the contact that you want to add.
               If omitted will be taken from standard input (stdin)

   -c       Continue with the next object after any error (when you specify multiple target objects)
            by default dsmod will exit when the first error occurs.

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
   [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
</pre>
<p><b>Examples</b></p>
<p class="code">C:\&gt; set _fred="cn=fred,ou=staff,dc=ss64,dc=com"<br>
C:\&gt; dsmod contact %_fred% -tel "01234 5678" </p>
<p class="code">C:\&gt; set _john="cn=JohnS,cn=users,dc=ss64,dc=com"<br>
C:\&gt; dsmod contact %_fred% %_john% -dept "Warehouse" </p>
<p class="quote"><i>"The highest reward for a person's toil is not what they get for it but what they become by it" ~ John Ruskin</i></p>
<p><b> Related commands:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
<a href="csvde.html">LDIFDE</a> - Edit AD Objects, extend schema, import or export AD information.<br>
PowerShell: <a href="../ps/set-adobject.html">Set-adObject</a> - Modify an AD object. <br>
Equivalent bash commands (Linux):
ldapmodify - Modify Lightweight Directory Access Protocol</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsmod-contact.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

