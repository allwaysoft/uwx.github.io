---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-WSManCredSSP</h1> 
<p>Get the Credential Security Service Provider-related configuration.</p>
<pre>Syntax
      Get-WSManCredSSP [<i>CommonParameters</i>]

Key
   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> When CredSSP authentication is used, the user's credentials are passed to a remote computer to be authenticated. This type of authentication is designed for commands that create a remote session from within another remote session. For example, running a background job on a remote computer. </p>
<p>Caution: CredSSP authentication delegates the user's credentials from the local computer to a remote computer. This
practice increases the security risk of the remote operation. If the remote computer is compromised, when credentials are passed to it, the credentials can be used to control the network session.</p>
<p><b>Examples</b></p>
<p>Display CredSSP configuration information for both the client and server.: </p>
<pre>PS C:&gt; get-wsmancredssp</pre>
<p class="quote"><i>“A foolish man proclaimeth his qualifications; a wise man keepeth them secret within himself” ~ Saskya Pandita</i></p>
<p><b>Related:</b></p>
<p><a href="connect-wsman.html">Connect-WSMan</a> - Connect to the WinRM service on a remote computer<br>  
<a href="disable-wsmancredssp.html">Disable-WSManCredSSP</a> - Disable Credential Security Service Provider authentication<br>
<a href="enable-wsmancredssp.html">Enable-WSManCredSSP</a> - Enable Credential Security Service Provider authentication</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

