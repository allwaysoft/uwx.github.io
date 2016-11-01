---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>AD Path Defaults</h1> 
<p>In many cases, a default value will be used for <span class="code">-Path</span> if no value is specified. <br>
The rules for determining the default value are given below. </p>
<p>Note that rules listed first are evaluated first and once a default value can be determined, no further rules will be evaluated.</p>
<p>In AD DS environments, a default value for <span class="code">-Path</span> will be set in the following cases:</p>
<ul>
  <li>   If the cmdlet is run from an Active Directory PowerShell provider drive, the parameter
    is set to the current path of the provider drive.</li>
  <li> If the cmdlet has a default path, this will be used.    For example: in New-ADUser, the Path parameter would default to the Users container.</li>
  <li> If none of the previous cases apply, the default value of Path will be set to the default
  partition or naming context of the target domain.</li>
</ul>
<p> In AD LDS environments, a default value for <span class="code">-Path</span> will be set in the following cases:</p>
<ul>
  <li>   If the cmdlet is run from an Active Directory PowerShell provider drive, the parameter is set to the current path of the provider drive.</li>
  <li> If the cmdlet has a default path, this will be used.  For example: in New-ADUser, the Path parameter would default to the Users container.</li>
</ul>
<p> If the target AD LDS instance has a default naming context, the default value of Path
    will be set to the default naming context.<br>
  <br>
  To specify a default naming context for an AD LDS environment, set the msDS-defaultNamingContext<br>
property of the Active Directory directory service agent (DSA) object (nTDSDSA) for the AD LDS instance.</p>
<ul>
  <li> If none of the previous cases apply, the Path parameter will not take any default value.<br>
  </li>
</ul>
<p class="quote"><i>“If the path be beautiful, let us not ask where it leads” ~ Anatole France </i></p>
<p><b>Related:</b></p>
<p><a href="ad.html">AD commands</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="path-defaults.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

