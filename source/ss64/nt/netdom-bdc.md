---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="netdom.html">NETDOM</a> MoveNT4BDC   (Windows Server 2003/2008/R2/2012 + Windows 7/8)</h1>
<p>Rename an NT 4.0 backup domain controller (move it to a new domain)</p>
<pre>Syntax
      <a href="netdom.html">NETDOM</a> MOVENT4BDC <i>machine</i>
         [/Domain:<i>domain</i>] [/REBoot[:<i>Time_in_seconds</i>]]

Key:

   <i>machine</i>     The name of the backup Domain Controller to be renamed

   /Domain     The new name of the domain

   /REBoot     Shutdown and automatically reboot after the Rename
               has completed.  The number of seconds before automatic
               shutdown can also be provided.  Default = 30 seconds</pre>
<p>Netdom options can be abbreviated to just the UPPER case letters, e.g. <span class="code">/REBoot</span> can be supplied as just <span class="code">/REB</span> </p>
<p><b>Example</b></p>
<p>Join backup domain controller bdc001 to the Windows NT 4.0 domain domNew: </p>
<p class="code">netdom bdc001 moveNT4BDC /domain:domNew</p>
<p><i class="quote">“Never discourage anyone who continually makes progress, no matter how slow” ~ Aristotle</i><br>
<br>
<b> Related:</b></p>
<p><a href="browstat.html">BROWSTAT</a> - Get domain, browser and PDC info.<br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="netdom-bdc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

