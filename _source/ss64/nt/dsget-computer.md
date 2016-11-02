---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsget.html">DSGET</a> computer (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Display computer object(s) from active directory.</p>
<pre>Syntax
      DSGET Computer <i>Computer_DN</i> [-dn] [-samid]
         [-sid] [-desc] [-loc] [-disabled] 
            [{-s <i>Server</i> | -d <i>Domain</i>}]   [-u <i>UserName</i>]  [-p {<i>Password</i> | *}]
                [-c] [-q] [{-uc | -uco | -uci}] [-part <i>PartitionDN</i> [-qlimit] [-qused]]

      DSGET Computer <i>Computer_DN</i> [-memberof [-expand]] [{-s <i>Server</i> | -d <i>Domain</i>}]
         [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
            [-c] [-q] [-l] [{-uc | -uco | -uci}]
   
Key
   <i>Computer_DN</i>  Distinguished Name of the computer object list (first variation) or 
                single computer (second variation) to view.

   -dn      Display the distinguished name
   -samid   Display the Security Account Manager (SAM) account name
   -sid     Display the computer security IDs (SID)
   -desc    Display the description
   -loc     Display the location

  -disabled Display the disabled status (Yes/No)

  -memberof Display the immediate list of groups of which the computer is a member.
   -expand  Display the recursively expanded list of groups of which the computer is a member. 

   -s       Server to connect to (Default=the domain controller in the logon domain.)
   -d       Domain to connect to.

   -u       Username with which the user logs on to a remote server
   -p       Password     (UserName or Domain\UserName or Username@domain.com)

   -c       Report errors, but continue with the next object after any error (when you specify multiple objects)
            by default dsget will exit when the first error occurs.
   -q       Quiet, suppress all output
   -l       Display entries in a list format. By default, dsget outputs a table format.

   -part    Connect to the directory partition <i>PartitionDN</i>
   -qlimit  Display the effective quota of the computer in <i>PartitionDN</i>
   -qused   Display how much of its quota a computer has used in <i>PartitionDN</i>

   -uc      Unicode format
   -uco     Unicode format for output only
   -uci     Unicode format for input only</pre>
<p>To also make the computer  a member of a specific group (for applying group policy), use the <span class="code">-memberof </span>option. </p>
<p><b>Examples</b></p>
<p>Display the list of all groups, to which <span class="code">pc64</span> belongs:</p>
<p class="code">C:\&gt; dsget computer cn=pc64,ou=computers,dc=ss64,dc=com -memberof -expand</p>
<p>Display the descriptions of all computers in an organizational unit (OU) named France whose name starts with "pari"</p>
<p class="code">C:\&gt; dsquery computer OU=France,DC=ss64,DC=Com -name pari* | dsget computer -desc</p>
<p> <i class="quote">“Hardware: the parts of a computer that can be kicked” ~ Jeff Pesis</i><br>
  <br>
<b> Related:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>

<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
PowerShell: <a href="../ps/get-adcomputer.html">Get-adComputer</a> - Get one or more AD computers. </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsget-computer.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

