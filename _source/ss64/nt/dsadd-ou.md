---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsadd.html">DSADD</a> OU  (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Add an OU to active directory.</p>
<pre>Syntax
      DSADD OU <i>OrganizationalUnit_DN</i> 
         [-desc <i>Description</i>] 
            [{-s <i>Server</i> | -d <i>Domain</i>}]   [-u <i>UserName</i>]  [-p {<i>Password</i> | *}]
               [-q] [{-uc | -uco | -uci}]

Key
   <i>OrganizationalUnit_DN</i>  Distinguished name of the OU that you want to add.
                If omitted will be taken from standard input (stdin)

   -desc    Description of the OU

   -s       Server to connect to (Default=the domain controller in the logon domain.)
   -d       Domain to connect to.

   -u       Username with which the user logs on to a remote server. 
   -p       Password     (UserName or Domain\UserName or Username@domain.com)

   -q       Quiet, suppress all output

   -uc      Unicode format
   -uco     Unicode format for output only
   -uci     Unicode format for input only</pre>
<p><b>Example</b></p>
<p>Add an OU <span class="code">AcmeCo</span> to the domain SS64.com:</p>
<p class="code">C:\&gt; dsadd ou cn=AcmeCo,dc=ss64,dc=com </p>
<p> <i class="quote">“Originality is going back to origins” ~ Antoni Gaudi</i><br>
  <br>
<b> Related commands:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsquery.html">DSQuery </a>- Search for objects<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
PowerShell: <a href="../ps/new-adorganizationalunit.html">New-adOrganizationalUnit</a> - Create a new AD OU. </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsadd-ou.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

