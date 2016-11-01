---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsmod.html">DSMOD</a> computer  (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Modify a computer object in active directory.</p>
<pre>Syntax
      DSMOD computer <i>Computer_DN</i> -reset -disabled [-c] [-q] [{-uc | -uco | -uci}] [<i>options</i>]<br>
Key
   <i>Computer_DN</i>  Distinguished name of the computer that you want to add.
                If omitted will be taken from standard input (stdin)

   -reset       Reset computer account

   -disabled {yes | no}    Disable the computer account for logon

   -c       Continue with the next object after any error (when you specify multiple target objects)
            by default dsmod will exit when the first error occurs.

   -q       Quiet, suppress all output

   -uc      Unicode format
   -uco     Unicode format for output only
   -uci     Unicode format for input only

Options
   -desc <i>Description</i>
   -loc <i>Location</i>

   {-s <i>Server</i> | -d <i>Domain</i>} By default, connects the computer to the domain controller in the logon domain.

   -u <i>UserName</i>             The user name with which a user logs on to a remote server.
                           By default, the currently logged on user.
   -p {<i>Password</i> | *}</pre>
<p><b>Examples</b></p>
<p>Disable multiple computer accounts (CMD shell) </p>
<p class="code">C:\&gt; set _mc1="CN=ServerA,CN=Computers,DC=ss64,DC=Com"<br>
C:\&gt; set _mc2="CN=ServerB,CN=Computers,DC=ss64,DC=Com"<br>
C:\&gt; dsmod  computer %_mc1% %_mc2% -disabled yes</p>
<p>Reset multiple computer accounts (powershell) </p>
<p class="code">PS C:\&gt;  $mc1 = "CN=ServerA,CN=Computers,DC=ss64,DC=Com"<br>
PS C:\&gt; $mc2 = "CN=ServerB,CN=Computers,DC=ss64,DC=Com"<br>
PS C:\&gt; dsmod computer  $mc1 $mc2  -reset </p>
<p><i class="quote">“If you want a thing done well, do it yourself” ~ Napoleon Bonaparte</i><br>
<br>
<b> Related commands:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
PowerShell: <a href="../ps/set-adcomputer.html">Set-adComputer</a> - Modify an AD computer. </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

