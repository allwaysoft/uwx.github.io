---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NET.exe</h1> 
<p>The <a href="net.html">NET Command</a> is used to manage user accounts and groups as follows:<br>
  <br>
  View  the current password &amp; logon restrictions for the computer (plus machine 
  role:  Server/ Workstation).<br>
  <span class="code">NET ACCOUNTS</span><br>
  <br>
  View   the current password &amp; logon restrictions for the  domain.<br>
  <span class="code">NET ACCOUNTS /DOMAIN</span><br>
  <br>
  Set the number of minutes a user has before being forced to log off when the 
  account expires or valid logon hours expire<br>
  <span class="code">NET ACCOUNTS /FORCELOGOFF:<i>minutes</i> /DOMAIN</span><br>
  <br>
  Prevent forced logoff when user accounts expire<br>
  <span class="code">NET ACCOUNTS /FORCELOGOFF:NO /DOMAIN</span><br>
  <br>
  Set the minimum number of characters for a password. <br>
  <span class="code">NET ACCOUNTS /MINPWLEN:<i>C</i> /DOMAIN</span><br>
  The range is 0-14 characters; the default is 6 characters.<br>
  <br>
  Set the maximum number of days that a password is valid.<br>
  <span class="code">NET ACCOUNTS /MAXPWAGE:<i>dd</i> /DOMAIN</span><br>
  The range is 1-49710; the default is 90 days.<br>
  <br>
  Set passwords to never expire.<br>
  <span class="code">NET ACCOUNTS /MAXPWAGE:UNLIMITED /DOMAIN</span><br>
  <br>
  Set a minimum number of days that must pass before a user can change a password 
  (default = 0)<br>
  <span class="code">NET ACCOUNTS /MINPWAGE:<i>dd</i> /DOMAIN</span><br>
  <br>
  Require that new passwords be different from 'x' number of previous passwords<br>
  <span class="code">NET ACCOUNTS /UNIQUEPW:<i>x</i> /DOMAIN</span><br>
  The range for 'x' is 1-24<br>
  <br>
  Synchoronise the user accounts database (PDC and BDC)<br>
  <span class="code">NET ACCOUNTS /SYNC /DOMAIN</span><br>
  <br>
  View user account details<br>
  <span class="code">NET USER [/DOMAIN]</span><br>
  <br>
  Add a user account.<br>
  <span class="code">NET USER <i>username</i> {password | *} /ADD [<a href="netuseroptions.html">options</a>] 
  [/DOMAIN]</span><br>
  <br>
  Modify a user account. <br>
  <span class="code">NET USER [<i>username</i> [password | *] [<a href="netuseroptions.html">options</a>]] 
  [/DOMAIN]</span><br>
  <br>
  Delete a username<br>
  <span class="code">NET USER <i>username</i> [/DELETE] [/DOMAIN]</span></p>
<p>Generate a random <a href="../pass/index.html">password</a>:<br>
<span class="code">NET USER administrator /random</span><br>
  <br>
  Add a group<br>
  <span class="code">NET GROUP <i>groupname</i> /ADD [/COMMENT:"text"] [/DOMAIN]</span><br>
<span class="code">NET LOCALGROUP <i>groupname</i> /ADD [/COMMENT:"text"] [/DOMAIN]</span><br>
  <br>
  Edit a group<br>
  <span class="code">NET GROUP [<i>groupname</i> [/COMMENT:"text"]] [/DOMAIN]</span><br>
<span class="code">NET LOCALGROUP [<i>groupname</i> [/COMMENT:"text"]] [/DOMAIN]</span><br>
  <br>
  Delete a group<br>
  <span class="code">NET GROUP <i>groupname</i> /DELETE [/DOMAIN]</span><br>
<span class="code">NET LOCALGROUP <i>groupname</i> /DELETE [/DOMAIN]</span><br>
  <br>
  Add a user to a group<br>
  <span class="code">NET GROUP <i>groupname username</i> [...] /ADD [/DOMAIN]</span><br>
<span class="code">NET LOCALGROUP <i>groupname username</i> [...] /ADD [/DOMAIN]</span><br>
  <br>
  Delete a user from a group<br>
  <span class="code">NET GROUP <i>groupname username</i> [...] /DELETE [/DOMAIN]</span><br>
<span class="code">NET LOCALGROUP <i>groupname username</i> [...] /DELETE [/DOMAIN]</span><br>
  <br>
LOCALGROUP will  create/modify a  group that is local to the computer rather than an Active Directory domain-wide group.</p>
<p><b>Examples</b></p>
<p>Create a group</p>
<p class="code">C:\&gt; NET LOCALGROUP spud /add</p>
<p>Add to guests</p>
<p class="code">C:\&gt; NET LOCALGROUP guests spud /add</p>
<p>Then remove</p>
<p class="code">C:\&gt; NET LOCALGROUP guests spud /delete</p>
<p class="code">C:\&gt; NET LOCALGROUP spud /delete</p>
<p>  <b>Related:</b></p>
<p><a href="net.html">NET</a> - Manage network resources<br>
<a href="ntrights.html">NTRIGHTS</a> - Edit user account rights (Logon Locally etc) <br>
<a href="dsadd.html">DSADD</a> - Add user (computer, contact, group..) to active directory.<br>
<a href="dsmod.html">DSMOD</a> - Modify user (computer, contact, group..) in active directory.<br>
<a href="prnmngr.html">PRNMNGR</a> - Add, delete, list printers and printer connections.<br>
<a href="https://support.microsoft.com/kb/186632">TSPROF</a> - Copy Terminal Server User Profile<br>
<a href="wmic.html">WMIC GROUP</a> - WMI access to Group membership.<br>
<a href="wmic.html">WMIC USERACCOUNT</a> - WMI access to User info.<br>
<a href="https://support.microsoft.com/kb/149427">Q149427</a> 
- Change Password from the CMD prompt<br>
  Equivalent bash command (Linux): <a href="../bash/useradd.html"> useradd</a> - Add user account
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="net_useradmin.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

