---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>UserName</h1> 
<p>List a users First and Last name when called with a Distinguished Name.</p>
<pre>'uname.vbs

' Display First and Last name for a given DN

On Error Resume Next
Dim  objUser, strDN

strDN = WScript.Arguments.Item(0)
Set objUser = GetObject("LDAP://" &amp; strDN)
WScript.Echo "First name: " &amp; objUser.givenName
WScript.Echo "Last name: " &amp; objUser.sn
WScript.Echo "Display name: " &amp; objUser.displayName</pre>
<p><b>Example</b></p>
<p class="code">cscript //Nologo uname.vbs "CN=johndoe,OU=Users,DC=ss64,DC=com"</p>
<p class="quote"><i>“Always end the name of your child with a vowel, so that when you yell the name will carry” ~ Bill Cosby</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-userinfo.html">UserInfo</a> - List User properties (as shown in ADUC) </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-username.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

