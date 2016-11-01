---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>RASDIAL (Dial Up Networking)</h1>
<p>Manage RAS/DUN connections. </p>
<pre>Dial a RAS connection:
   RASDIAL <i>entryname</i> [/PHONEBOOK:<i>PhonebookFile</i>]
                [/PHONE:<i>PhoneNumber</i>] [<i>username</i> [<i>password</i>|*]] 
                [/CALLBACK:<i>CallBackNumber</i>]
                [/DOMAIN:<i>domain</i>][/PREFIXSUFFIX]

Hang up a RAS connection:
   RASDIAL [<i>entryname</i>] /DISCONNECT

Display RAS Status:
   RASDIAL
</pre>
<p>To use this command requires that Dial Up Networking Service be 
  installed (via Control Panel - Networking)<br>
  <br>
The default location for PhoneBook entries is \%SystemRoot%\system32\ras\</p>
<p><i class="quote">"If advanced switching
  technology had not been developed and the telephone still had one operator
  for every 120 of some 100 million telephones, it would take  2,400,000 telephone operators (on three shifts) ~ John R. Pierce</i><br>
  <br>
  <b>Related:</b><br>
  <br>
  <a href="rasphone.html">RASPHONE</a> - Manage RAS connections<br>
Connection Manager Administration Kit - VPN connections (<a href="../links/windows.html#kits">2003 Resource Kit</a>)<br>
  RASMON - Windows 2000 GUI Resource Kit tool<br>
  CHECKRAS - <a href="http://www.microsoft.com/smserver/downloads/20/tools/spsupport/default.asp">SMS 
  support tools</a></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rasdial.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

