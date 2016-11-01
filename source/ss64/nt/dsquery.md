---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>DSQUERY.exe (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Search for an  active directory object.</p>
<pre>Syntax
   <a href="dsquery-computer.html">DSQuery Computer</a> 
   <a href="dsquery-contact.html">DSQuery Contact</a>
   <a href="dsquery-group.html">DSQuery Group</a>
   <a href="dsquery-ou.html">DSQuery OU</a>
   <a href="dsquery-site.html">DSQuery Site</a>
   <a href="dsquery-server.html">DSQuery Server</a> 
   <a href="dsquery-user.html">DSQuery User</a>
   <a href="dsquery-quota.html">DSQuery Quota</a>
   <a href="dsquery-partition.html">DSQuery Partition</a>
   <a href="dsquery-ldap.html">DSQuery *</a>  (LDAP query)
</pre>
<p>Commas within a CN must be escaped with the backslash \ character <span class="code">CN=Company<b>\</b>, Incorporated...</span></p>
<p>Escape Backslashes with a second backslash <span class="code">CN=Sales<b>\</b>\ Latin America...</span></p>
<p>If any value contains spaces, use quotation marks: <span class="code"><b>"</b>CN=John Smith,CN=Users,DC=SS64,DC=com<b>"</b></span></p>
<p> <b>Special Tokens</b><br>
The token <span class="code">$username$</span> (case insensitive) can be used to place the SAM account name.<br>
Entering * as a password will  prompt for a new password.</p>
<p> <b>Adding multiple Objects<br>
</b>For any DS command you can enter multiple values separated by spaces.<br>
e.g. to add several user accounts at once just supply a list of the distinguished names separated with spaces.<br>
<br>
It is also possible to store multiple values in a text file and redirect into DSQUERY. </p>
<p><b>PowerShell</b><br>
To call dsquery and store the resulting string in a powershell array variable (from PowershellHell.com): <br>
<span class="code">$arrComputerList = $(&amp;dsquery computer -limit 0)|%{$_.Split("=")[1].replace(",OU","").replace(",CN","")}</span></p>
<p class="quote"><i>"A good question is like a miniskirt. Long enough to cover the essentials, but short enough to keep everyone interested" ~ Charles Halsey </i></p>
<p> <b> Related:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
<a href="csvde.html">CSVDE</a> - Import or export AD info in CSV format.<br>
<a href="csvde.html">LDIFDE</a> - Edit AD Objects, extend schema, import or export AD information.<br>
<a href="http://social.technet.microsoft.com/wiki/contents/articles/5392.active-directory-ldap-syntax-filters.aspx?Sort=MostUseful&amp;PageIndex=1">LDAP Syntax Filters</a> - TechNet Wiki<br>
<a href="http://www.joeware.net/freetools/tools/adfind/">AdFind</a> - Command line Active Directory query tool (JoeWare). <br>
Equivalent bash commands (Linux): ldapmodify - Modify Lightweight Directory Access Protocol</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsquery.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

