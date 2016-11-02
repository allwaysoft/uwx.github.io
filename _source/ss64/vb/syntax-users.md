---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>List Users</h1> 
<p>List all the user accounts in a specific domain. </p>
<pre>'ListUsers.vbs
On Error Resume Next

Set objDomain = GetObject("WinNT://<b>SS64Domain</b>")

WScript.echo "Domain : " + objDomain.name

For each objDomainItem in objDomain
  if objDomainItem.Class = "User" then
     WScript.echo objDomainItem.Name + " : Full Name: " + objDomainItem.FullName
  end if
Next</pre>
<p><b>Example</b></p>
<p class="code">cscript listusers.vbs</p>
<p class="quote"><i>“An honest tale speeds best, being plainly told” ~ William Shakespeare, Richard III, Act IV, Scene IV</i></p>
<p><b>Related:</b></p>
<p>
<a href="syntax-ad.html">SearchAD</a> - Search AD for  Users, Computers or Workgroups<br>

<a href="syntax-userinfo.html">UserInfo</a> - List properties of a User (as shown in ADUC)<br>
Powershell : <a href="../ps/get-aduser.html">Get-adUser</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-users.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

