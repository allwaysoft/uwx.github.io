---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>slmgr.vbs (Windows7/2008)</h1> 
<p>Software Licensing Management Tool. Windows Activation and Key Management Service (KMS)</p>
<pre>Syntax
      slmgr [<i>MachineName </i>[<i>Username Password</i>]] [<i>Option</i>]<br>
Key
  <i>machinename</i>   The machine to administer, by default the current local machine.

  <i>username </i>     An administrator equivalent user account for the remote computer.

  <i>password </i>     The password for the user account on the remote computer.

   /ato   Activate Windows license and product key against Microsoft's server.

   /atp <i>Confirmation_ID</i>   Activate Windows with user-provided Confirmation ID 

   /ckms  Clear the name of KMS server used to default and port to default.

   /cpky  Clear product key from the registry (prevents disclosure attacks)
<br>   /dli   Display the current license information with activation
          status and partial product key.

   /dlv   Verbose, similar to -dli but with more information.

   /dti   Display Installation ID for offline activation

   /ipk <i>Key</i>  Enter a new product <i>key</i> supplied as xxxxx-xxxxx-xxxxx-xxxxx-xxxxx 

   /ilc <i>License_file </i>  Install license

   /rilc               Re-install system license files

   /rearm Reset the <a href="https://support.microsoft.com/kb/948472">evaluation period</a>/licensing status and activation state of the machine

   /skms <i>activationservername:port </i>
          Set the Volume Licensing KMS server and/or the port used for KMS activation
          (where supported by your Windows edition)

   /skhc  Enable KMS host caching (default), this blocks the use of DNS priority and
          weight after the initial discovery of a working KMS host.
          If the system can no longer contact the working KMS host, discovery will be attempted again.

   /ckhc  Disable KMS host caching. This setting instructs the client to use DNS auto-discovery
          each time it attempts KMS activation (recommended when using priority and weight)

   /sai <i>interval</i> 
          Sets the interval in minutes for unactivated clients to attempt KMS connection.
          The activation interval must be between 15 minutes and 30 days, although the default (2 hours)
          is recommended.
          The KMS client initially picks up this interval from the registry but switches to the KMS
          setting after the first KMS response has been received.

   /sri <i>interval</i>
          Sets the renewal interval in minutes for activated clients to attempt KMS connection.
          The renewal interval must be between 15 minutes and 30 days.
          This option is set initially on both the KMS server and client sides.
          The default is 10080 minutes (7 days).

   /spri  Set the KMS priority to normal (default).
   /cpri  Set the KMS priority to low.
          Use this option to minimize contention from KMS in a co-hosted environment.
          Note that this could lead to KMS starvation, depending on what other applications
          or server roles are active. Use with care.

   /sprt <i>port</i>
          Sets the port on which the KMS host listens for client activation requests. The default TCP port is 1688.

   /sdns  Enable DNS publishing by the KMS host (default).
   /cdns  Disable DNS publishing by the KMS host.

   /upk   Uninstall current installed product key and return license status back to trial state.

   /xpr   Show the expiry date of current license (if not permanently activated)

Token-based activation:
   /lil   List the installed token-based activation issuance licenses.

   /ril <i>ILID ILvID</i>
         Remove an installed token-based activation issuance license.

   /stao  Set the Token-based Activation Only flag, disabling automatic KMS activation.
   /ctao  Clear the Token-based Activation Only flag (default), enabling automatic KMS activation.
   /ltc   List valid token-based activation certificates that can activate installed software.
   /fta <i>Certificate Thumbprint</i> [PIN]
          Force token-based activation using the identified certificate.
          The optional personal identification number (PIN) is provided to unlock the private
          key without a PIN prompt when using certificates that are protected by hardware
          (for example, smart cards).</pre>
<p>All actions (other than displaying status)  require elevated administrator privileges.<br>
Slmgr.vbs script is not intended to work across platforms i.e. between Vista and Windows 7</p>
<p><b>Examples</b></p>
<p class="code">C:\&gt;  <a href="../vb/cscript.html">cscript</a> C:\windows\system32\slmgr.vbs wkstn64 administrator pa55w0rd1 -dli<br>
<br>
C:\&gt; cscript slmgr.vbs -skms 192.168.10.1:8090 <br>
<br>
C:\&gt; cscript slmgr.vbs -skms KMSServer:8090</p>
<p><span class="quote"><i>"One resolution I have made, and try always to keep, is this: To rise above
little things" ~ John Burroughs</i></span><i><br></i><br><b>Related:</b></p>
<p>SLUI - Software Licensing (Windows Activation) <span class="code">SLUI.exe 3 <i>XXXXX.XXXXXX.XXXXXX.XXXXX</i></span><br>
<a href="http://technet.microsoft.com/en-us/library/ff793399.aspx">Activation Error Codes</a> - TechNet<br>
<a href="certreq.html">CERTREQ</a> - Request certificate from a certification authority<br>
WINVER - Display Licence Activation status<br>
<a href="https://support.microsoft.com/kb/921471">Q921471</a> - 
Activation fails when you try to activate Windows Vista, Windows 7...<br>
<a href="perms.html">PERMS</a> - Show permissions for a user<br>
<a href="systeminfo.html">SYSTEMINFO</a> - List system configuration</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="slmgr.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

