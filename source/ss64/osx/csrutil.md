---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>csrutil</h1> 
<p>Configure System Integrity Protection (SIP). SIP is available in El Capitan (10.11) and later.</p>
<pre>Syntax
      csrutil status   View the SIP status

      csrutil enable   Turn SIP on, when booted in Recovery mode

      csrutil disable  Turn SIP off, when booted in Recovery mode

      csrutil netboot  Configure a list of allowed NetBoot sources.

      csrutil help</pre>
<p> SIP can prevent applications from:     modifying system files, runtime attachment to system binaries and unsigned kernel extensions (KEXTs)</p>
<p>SIP is turned on by default.</p>
<p>SIP maintains file system permissions  automatically - they are checked and repaired  when system updates are performed.</p>
<p>System-only locations  now forbidden:<br>
<span class="code">/bin<br>
/sbin<br>
/usr (except for /usr/local)<br>
/System </span></p>
<p>Folders which are still protected by permissions, but not by SIP:<br>
<span class="code">/usr/local<br>
/Applications<br>
/Library</span></p>
<p><i class="quote">“I don’t want to live in a world where everything that I say, everything I do, everyone I talk to, every expression of creativity or love or friendship is recorded” - Edward Snowden</i></p><p><b>Related:</b></p>
<p><a href="security.html">security</a> - Administer Keychains, keys, certificates and the Security framework<br>
<a href="softwareupdate.html">softwareupdate</a> - System software update tool</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
