---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>RASPHONE (Dial Up Networking)</h1>
<p>Manage Remote Access Service (RAS) connections.<br>
  This is a part of the 
  Dial-Up Networking service, typically used to connect a PC to an Internet Service
Provider.</p>
<pre>Dial a RAS connection:
   RASPHONE [-v] -f <i>PhoneBook_file</i> -d "<i>PhoneBook_entry</i>" 

Hang up a RAS connection:
   RASPHONE [-v] -f <i>PhoneBook_file</i> -h "<i>PhoneBook_entry</i>" 

Display RAS Status dialogue box
   RASPHONE -S

Other RAS options:
   RASPHONE [-v] -f <i>PhoneBook_file</i> <i>options</i> "<i>PhoneBook_entry</i>"

OPTIONS
   -a   : Add new PhoneBook entry
   -e   : Edit an existing PhoneBook entry
   -c   : Clone an existing PhoneBook entry
   -r   : Delete/remove an existing PhoneBook entry
   -v   : Disable - 'grey out' the option to rename the PhoneBook_entry</pre>
<p>To use this command requires that Dial Up Networking Service be 
  installed (via Control Panel - Networking)<br>
  <br>
The default location for PhoneBook entries is %SystemRoot%\System32\ras\</p>
<p><i class="quote">"Someone invented the telephone,
  And interrupted a nation's slumber,
  Ringing wrong but similar numbers"
- Ogden Nash</i><br>
  <br>
  <b>Related:</b><br>
  <br>
  <a href="rasdial.html">RASDIAL</a> - Manage RAS connections<br>
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
<div id="bl" class="footer"><a href="rasphone.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

