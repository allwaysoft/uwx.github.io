---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>HOSTNAME.exe</h1> 
<p> Display the host name portion of the full computer name of the computer.</p>
<pre>Syntax
      HOSTNAME

Options

   /?    Display Help</pre>
<p> 
The hostname command is only available if the Internet Protocol (TCP/IP)  is installed as a network component.</p>
<p>The computer hostname is usually (but not always) the same as the  <span class="code">%COMPUTERNAME%</span> <a href="syntax-variables.html">variable</a>.</p>
<p>When  called with any argument other than <span class="code">/?</span> hostname sets errorlevel to 1 and prints an error message.</p>
<p>If the environment variable <span class="code">_CLUSTER_NETWORK_NAME_</span> exists and is populated, then HOSTNAME will return the value of that variable in place of the true Hostname.</p>
<p><b>Examples</b></p>
<p>Display the system hostname:</p>
<p class="code">C:\&gt; hostname</p>
<p class="quote"><i>“There's a little bit of magic in everything, and some loss to even things out” ~ Lou Reed</i></p>
<p>  <b>Related:</b></p>
<p><span class="code">echo %computername%</span><br>
Equivalent PowerShell cmdlet:  <span class="code">$env:COMPUTERNAME</span><br>
Equivalent bash command: <a href="../bash/hostname.html">hostname</a><br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="hostname.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
