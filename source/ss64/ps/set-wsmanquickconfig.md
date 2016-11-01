---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-WSManQuickConfig</h1> 
<p>Configure the local computer for remote management.</p>
<pre>Syntax
      Set-WSManQuickConfig [-UseSSL] [<i>CommonParameters</i>]

Key
   -UseSSL 
      Use the Secure Sockets Layer (SSL) protocol to establish a
      connnection to the remote computer. By default, SSL is not used. 
        
      WS-Management encrypts all Windows PowerShell content transmitted
      over the network. Adding the protection of HTTPS requires that
      SSL is available on the port used for the connection.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> Set-WSManQuickConfig will perform the following:<br>
1. Start the WinRM <a href="../nt/syntax-services.html">service</a> if it is not already  running. <br>
2. Set the WinRM service startup type to automatic.<br>
3. Create a listener to accept requests on any IP address. By default, the transport is HTTP.<br>
4. Enable a firewall exception for WinRM traffic .<br>
<br>
To run Set-WSManQuickConfig in  Vista/Windows 7/Windows Server 2008, and later versions of Windows, you must start PowerShell with the "Run as administrator" option.</p>
<p><b>Examples</b></p>
<p>Set the required configuration to enable remote management of the local computer.: </p>
<p><span class="code">PS C:\&gt;    Set-WSManQuickConfig</span></p>
<p class="quote"><i>“It is easy to be brave from a safe distance” ~ Aesop</i></p>
<p><b>Related:</b></p>
<p>  <a href="get-wsmaninstance.html">Get-WSManInstance</a> - Display management information (XML or value)<br>
<a href="set-wsmaninstance.html">Set-WSManInstance</a> - Modify the management information related to a resource</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-wsmanquickconfig.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

