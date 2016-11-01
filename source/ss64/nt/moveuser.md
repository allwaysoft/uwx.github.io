---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>MOVEUSER.exe (<a href="../links/windows.html#kits">Windows 2003 Resource Kit</a>)</h1> 
<p>Move a  local user account into a  domain or move a user account between machines. </p>
<pre>Syntax
      MOVEUSER [DOMAIN/]<i>user1</i> [DOMAIN/]<i>user2</i> [/c:<i>computer</i>] [/k] [/y]

Key:

   <i>user1</i>   The existing user (who has a local profile)
           Specify domain users in 'DOMAIN/user' format
           or just 'user' for a local account. 

   <i>user2</i>   The user acount that will inherit the user1 profile.
           This account must already exist.
           Specify domain users in DOMAIN/user format
           specify only user for local accounts.

 /c:<i>computer</i>   The computer on which to make the changes. 

   /k      Keep user account <i>user1</i> (only applies to local users) 

   /y      Overwrite an existing profile for <i>user2</i>.</pre>
<p>To use MOVEUSER, you must be logged in with  admin rights to create and modify user accounts on both the source and target machine.</p>
<p><b>Examples</b></p>
<pre>MOVEUSER fred MyDomain\newfred</pre>
<p>Or if the account 'fred' is on the remote PC called 'wks0123' </p>
<pre>MOVEUSER fred MyDomain\newfred /c:\\wks0123 </pre>
<p> <i class="quote">“You don’t sew with a fork, so I see no reason to eat with knitting needles” - Miss Piggy, on eating Chinese Food</i><br>
<br>
<b> Related:</b><br>
<br>
<a href="https://support.microsoft.com/kb/838191">Q838191</a>- RestrictRemoteClients registry keys for MOVEUSER under XP sp2 <br>
<a href="shutdown.html">SHUTDOWN</a> - Shutdown the computer<br>
ADMT -  Active Directory Migration Tool (domain to domain) </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="moveuser.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

