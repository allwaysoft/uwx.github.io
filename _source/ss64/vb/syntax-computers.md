---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>List Computers</h1> 
<p>List all the computers in a given domain.</p>
<pre>' ListComputers.vbs
On Error Resume Next
Set objDomain = GetObject("WinNT://<b>SS64Domain</b>")

WScript.echo "Domain : " + objDomain.name

For each objDomainItem in objDomain
  if objDomainItem.Class = "Computer" then
     WScript.echo objDomainItem.Name
  end if
Next
</pre>
<p><b>Examples</b></p>
<p class="code">cscript listcomputers.vbs</p>
<p class="quote"><i>“Microsoft was founded with a vision of a computer on every desk, and in every home. We've never wavered from that vision” ~ Bill Gates</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-ad.html">SearchAD</a> - Search Active Directory for  Users, Computers or groups.<br>
<a href="syntax-computerinfo.html">ComputerInfo</a> - List Computer properties (as shown in ADUC)<br>
Powershell: <a href="../ps/get-adcomputer.html">Get-adComputer</a> - Get one or more AD computers.<br>
<a href="../ps/get-qadcomputer.html">Get-QADComputer</a><span class="code"> | Select-Object -Property name</span> - Retrieve computer objects</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

