---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>WUAUCLT</h1>  
<p>Windows Update Agent, download new <a href="http://windowsupdate.microsoft.com/">Windows Update</a> files. </p>
<pre>Syntax
      wuauclt <i>Options</i>

Options:

   /a or /ResetAuthorization  Initiate an asynchronous background search for applicable updates.
                              If Automatic Updates are disabled, this has no effect.

   /r or /ReportNow           Send all queued reporting events to the server asynchronously.

   /DetectNow                 Initiate detection right away, Query the WSUS server immediately 
                              to see if any new updates are needed.
</pre>
<p> 
WSUS uses a cookie on client computers to store  computer group membership when client-side targeting is used. By default this cookie expires an hour after WSUS creates it. If you are using client-side targeting and change group membership, use <span class="code">/ResetAuthorization /detectnow</span> to expire the cookie, initiate detection, and have WSUS update computer group membership. </p>
<p><b>Examples:</b></p>
<p>  <span class="code">C:\&gt; wuauclt /a /DetectNow</span></p>
<p><span class="code">C:\&gt; wuauclt /r /DetectNow</span></p>
<p>  <i class="quote">“We must always change, renew, rejuvenate ourselves; otherwise we harden” ~ Johann Wolfgang von Goethe</i><br>
  <br>
  <b>Related:</b><br>
  <br>
  wuauserv - The Windows Update <a href="syntax-services.html">Service</a> <br>
%systemroot%<span class="code">\WindowsUpdate.log<br>
HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate</span><br>
<br>
<span class="code">HKLM:\Software\Policies\Microsoft\Windows\WindowsUpdate\AU<br>
NoAutoRebootWithLoggedOnUsers</span>  (DWORD=1 to disable automatic reboots)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="wuauclt.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

