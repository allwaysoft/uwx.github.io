---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Enable-WSManCredSSP</h1> 
<p>Enable Credential Security Service Provider (CredSSP) authentication on a client computer.</p>
<pre>Syntax
      Enable-WSManCredSSP [-Role] <i>string
        </i> [[-DelegateComputer] <i>string</i>] [<i>CommonParameters</i>]

Key
   -Role { Client | Server }<br>      Whether CredSSP should be enabled as a client or as a server.  <br>        <br>      If CredSSP is enabled on the client, the WS-Management setting:
      &lt;localhost|computername&gt;\Client\Auth\CredSSP is set to True.<br>      Also removes any WSMan/* setting from the CredSSP policy AllowFreshCredentials on the client. <br>        <br>      If CredSSP is enabled on the server, the WS-Management setting:
      &lt;localhost|computername&gt;\Service\Auth\CredSSP is set to True.

   -DelegateComputer <i>string</i><br>      Allow the client credentials to be delegated to the server(s) specified.
      The value of <i>string</i> should be a fully qualified domain name.<br>        <br>      If -Role specifies a Client, then -DelegateComputer is mandatory.<br>      If -Role specifies a Server, then -DelegateComputer is not allowed.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> When CredSSP authentication is used, the user's credentials are passed to a remote computer to be authenticated. This type of authentication is designed for commands that create a remote session from within another remote session. For example, running a background job on a remote computer. </p>
<p><b>Examples</b></p>
<p>Allow the client credentials to be delegated to the server02 computer: </p>
<pre>PS C:&gt; enable-wsmancredssp -role client -delegatecomputer server02.ss64.com
</pre>
<p>Allow the client credentials to be delegated to all the computers in the SS64.com domain:</p>
<pre>PS C:&gt; enable-wsmancredssp -role client -delegatecomputer *.ss64.com
</pre>
<p>Allow a computer to act as a delegate for another:</p>
<pre>PS C:&gt; enable-wsmancredssp -role server</pre>
<p class="quote"><i>“A foolish man proclaimeth his qualifications; a wise man keepeth them secret within himself” ~ Saskya Pandita</i></p>
<p><b>Related:</b></p>
<p><a href="connect-wsman.html">Connect-WSMan</a> - Connect to the WinRM service on a remote computer<br>  
<a href="disable-wsmancredssp.html">Disable-WSManCredSSP</a> - Disable Credential Security Service Provider authentication</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="enable-wsmancredssp.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

