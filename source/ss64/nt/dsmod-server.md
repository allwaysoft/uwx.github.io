---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsmod.html">DSMOD</a> Server   (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Modify a server in active directory.</p>
<pre>Syntax
      DSMod server <i>ServerDN</i> 
         [-desc <i>Description</i>] [-isgc {yes | no}]
            [{-s <i>Server</i> | -d <i>Domain</i>}] [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
               [-c] [-q] [{-uc | -uco | -uci}]

Key
   <i>ServerDN</i>  Distinguished name of the server that you want to modify.
                If omitted will be taken from standard input (stdin)

   -desc    Description of the server
   
   -isgc    Add the global catalog to (yes) or remove it from (no) a domain controller.
   
   -s       Server to connect to (Default=the domain controller in the logon domain.)
   -d       Domain to connect to.

   -u       Username with which the user logs on to a remote server. 
   -p       Password     (UserName or Domain\UserName or Username@domain.com)

   -c       Continue with the next object after any error (when you specify multiple target objects)<br>            by default dsmod will exit when the first error occurs.

   -q       Quiet, suppress all output

   -uc      Unicode format
   -uco     Unicode format for output only
   -uci     Unicode format for input only</pre>
<p><b>Examples</b></p>
<p>Make Svr-DC1 a Global Catalogue Server: </p>
<p class="code">C:\&gt; dsmod server "CN=Svr-DC1,CN=Servers,CN=AcmeCo,DC=ss64,DC=Com"  -isgc yes</p>
<p class="quote"><i>“Let him that would move the world, first move himself” ~ Socrates</i></p>
<p><b> Related:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
  Equivalent bash commands (Linux):
ldapmodify - Modify Lightweight Directory Access Protocol</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsmod-server.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

