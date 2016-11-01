---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsmod.html">DSMOD</a> Group  (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Modify a group in active directory.</p>
<pre>Syntax
      DSMOD Group <i>GroupDN</i> [-secgrp {yes | no}] [-scope {l | g | u}] [-samid <i>SAMName</i>]
         [-desc <i>Description</i>]  [{-addmbr | -rmmbr | -chmbr} <i>MemberDN</i> ...]
            [{-s <i>Server</i> | -d <i>Domain</i>}] [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
               [-q] [{-uc | -uco | -uci}]

Key
   <i>Group_DN</i>  Distinguished name of the group that you want to add.
             If omitted will be taken from standard input (stdin)

   -secgrp   A security group (yes) or a distribution group (no) default=Yes.

   -scope    <a href="syntax-permissions.html">Domain local</a> (l), <a href="syntax-permissions.html">global</a> (g), or <a href="syntax-permissions.html">universal</a> (u)   default=g

   <i>SAMName</i>   Unique SAM account name for this group
             (By default, the dn attribute from the GroupDN.)

   -addmbr   Add members to the group
|  -rmmbr    Remove members from the group
   -chmbr    Replace members in the group

   -s <i>Server</i> Connect to a remote server/domain, default=%logonserver% domain controller.

   -c        Continue with the next object after any error (when you specify multiple target objects)
             by default dsmod will exit when the first error occurs.

   -q        Quiet, suppress all output

   -uc       Unicode format
   -uco      Unicode format for output only
   -uci      Unicode format for input only</pre>
<p><b>Examples</b></p>
<p>Add  all members of the <span class="code">Finance</span> group to the <span class="code">Sales</span>  group:</p>
<p class="code">C:\&gt; set _finance="CN=Finance Dept,OU=Europe,DC=ss64,DC=com"<br>
C:\&gt; set _sales="CN=Sales Dept,OU=Europe,DC=ss64,DC=com"<br>
C:\&gt; dsget group  %_finance% -members | dsmod group %_sales% -addmbr</p>
<p>Add all users from the <span class="code">Europe</span> organizational unit (OU) to the existing group <span class="code">AfricaMarket</span>:</p>
<p class="code">C:\&gt; set _europe="OU=Europe,DC=ss64,DC=com"<br>
C:\&gt; set _AfricaMkt ="CN=AfricaMarket,OU=Africa,DC=ss64,DC=Com"<br>
C:\&gt; dsquery user %_europe% | dsmod group %_AfricaMkt% -addmbr </p>
<p>Add the user Fred to all administrator distribution list groups:</p>
<p class="code">C:\&gt; set _dls="OU=Distribution Lists,DC=ss64,DC=com"<br>
C:\&gt; set _fred="cn=fred,ou=staff,dc=ss64,dc=com"<br>
C:\&gt; dsquery group %_dls% -name adm* | dsmod group -addmbr %_fred% </p>
<p>Add the user Fred to the finance group<span class="code"> <br>
C:\&gt; dsmod group %_finance% -addmbr %_fred% </span></p>
<p> <i class="quote">"When people show you who they are, believe them" ~ Maya Angelou</i><br>
  <br>
<b> Related:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
PowerShell: <a href="../ps/set-adgroup.html">Set-adGroup</a> - Modify an AD group. <br>
Equivalent bash commands (Linux): <a href="../bash/groupmod.html">groupmod</a> - Modify Group </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsmod-group.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

