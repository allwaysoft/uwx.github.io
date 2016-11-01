---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PsPasswd (<abbr title="Download the PsTools suite"><a href="http://technet.microsoft.com/en-us/sysinternals">PsTools</a></abbr>)</h1>
<p>Change account password</p>
<pre>Syntax
      pspasswd [[\\<i>computer</i>[,<i>computer</i>[,..] | @<i>file</i> 
         [-u <i>user </i>[-p <i>passwd</i>]]] <i>Username </i>[<i>NewPassword</i>]

Options:

   computer   The computer on which the user account resides. Default=local system 

   -p <i>passwd</i>  Specify a password for <i>user</i> (optional). Passed as clear text.
              If omitted, you will be prompted to enter a hidden password.

   -u <i>user</i>    Specify a user name for login to remote computer(optional).

   @file      Execute the command on each of the computers listed in the file.

   Username   Name of account for password change.

  <i>NewPassword</i>  The new password, If ommitted a NULL password is applied.

   -accepteula Suppress the display of the license dialog.</pre>
<p>This tool allows administrators to create a batch file that will run against multiple computers to perform a mass change of the administrator password. </p>
<p>When launched for the first time, PsPasswd will create the regkey <br>
<span class="code">HKCU\Software\Sysinternals\PsPasswd\EulaAccepted=0x01</span></p>
<p><b>  Examples:</b><br>
<br>
Change the password for user JDoe on \\workstation64 </p>
<p class="code"><span class="code">C:\&gt; </span>pspasswd \\workstation64 jdoe password567</p>
<p class="quote"><i>“Drunk with power isn't the same as being drunk with booze” ~ <a href="https://twitter.com/#!/CraigyFerg">Craig Ferguson</a> </i></p>
<p><b>Related:</b></p>
<p><a href="http://forum.sysinternals.com/faq-common-pstools-issues_topic15920.html">FAQ: Common PSTools Issues</a><br>
<a href="netuseroptions.html">NET USER </a><br>
Equivalent  bash command (Linux): <a href="../bash/passwd.html">passwd</a> - Modify a user password<br>
<a href="../pass/pass.html">Password generator</a></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="pspasswd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

