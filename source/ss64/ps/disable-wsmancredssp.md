---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Disable-WSManCredSSP</h1> 
<p>Disable Credential Security Service Provider (CredSSP) authentication on a client computer.</p>
<pre>Syntax
      Disable-WSManCredSSP [-Role] <i>string</i> [<i>CommonParameters</i>]

Key
   -Role { Client | Server }<br>       Whether CredSSP should be disabled as a client or as a server.  <br>        <br>       If CredSSP is disabled on the client, the WS-Management setting:
       &lt;localhost|computername&gt;\Client\Auth\CredSSP is set to false.<br>       Also removes any WSMan/* setting from the CredSSP policy AllowFreshCredentials on the client. <br>        <br>       If CredSSP is disabled on the server, the WS-Management setting:
       &lt;localhost|computername&gt;\Service\Auth\CredSSP is set to false.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> When CredSSP authentication is used, the user's credentials are passed to a remote computer to be authenticated. This type of authentication is designed for commands that create a remote session from within another remote session. For example, running a background job on a remote computer. </p>
<p><b>Examples</b></p>
<p>Disable CredSSP on the client, which prevents delegation to servers: </p>
<pre>PS C:&gt; Disable-WSManCredSSP -Role Client
</pre>
<p>Disable CredSSP on the server, which prevents delegation from clients:</p>
<pre>PS C:&gt; Disable-WSManCredSSP -Role Server</pre>
<p class="quote"><i>“It [the Cheshire Cat] vanished quite slowly, beginning with the end of the tail, and ending with the grin, which remained some time after the rest of it had gone” ~ Lewis Carroll </i></p>
<p><b>Related:</b></p>
<p>  <a href="enable-wsmancredssp.html">Enable-WSManCredSSP</a>        - Enable Credential Security Service Provider authentication</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="disable-wsmancredssp.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

