---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Disconnect-WSMan</h1> 
<p>Disconnect the client from the WinRM service on a remote computer.</p>
<pre>Syntax
      Disconnect-WSMan [-ComputerName <i>string</i>] [<i>CommonParameters</i>]

Key
   -ComputerName <i>string</i>
       The computer from which you want to disconnect.
       A fully qualified domain name, a Net BIOS name, or an IP address.
       Use the local computer name, localhost, or a dot (.) to specify the local computer.

       The local computer is the default. When the remote computer is in a different domain,
       use a fully qualified domain name. You can pipe a value for ComputerName. 

       Note: You cannot disconnect from the local host, however, if a separate connection
       is made to the local computer (for example, by using the computer name), you can remove
       that connection with Disconnect-WSMan.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>If you saved the WS-Management session in a variable, the session object remains in the variable, but the state of the WS-Management session is "Closed".</p>
<p><b>Examples</b></p>
<p>Delete the connection to the remote server64 computer: </p>
<p><span class="code">PS C:\&gt; Disconnect-WSMan -computer server64</span><br><br>
<i class="quote">“All the disconnected people I know are trying to be something they are not, to do something they cannot do” ~ David Gayson</i></p>
<p><b>Related:</b></p>
<p><a href="connect-wsman.html">Connect-WSMan</a> - Connect to the WinRM service on a remote computer</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="disconnect-wsman.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

