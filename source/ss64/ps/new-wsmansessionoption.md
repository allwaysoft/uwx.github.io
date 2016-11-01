---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-WSManSessionOption</h1> 
<p>Configure options (session input parameters) for WSMan cmdlets: Connect-WSMan, Invoke-WSManAction, Get-WSManInstance,
Set-WSManInstance.</p>
<pre>Syntax
      New-WSManSessionOption [-NoEncryption] [-OperationTimeout <i>Int32</i>]
         [-ProxyAccessType P<i>roxyAccessType</i>] [-ProxyAuthentication <i>ProxyAuthentication</i>]
            [-ProxyCredential <i>PSCredential</i>] [-SkipCACheck] [-SkipCNCheck]
               [-SkipRevocationCheck] [-SPNPort <i>Int32</i>] [-UseUTF16] [<i>CommonParameters</i>]
    
Key
   -NoEncryption
        Do not use encryption when doing remote operations over HTTP.
        Unencrypted traffic is not allowed by default and must be enabled in the local configuration.

    -OperationTimeout <i>Int32</i>
        The timeout in milliseconds for the WS-Management operation.
        
    -ProxyAccessType <i>ProxyAccessType</i>
        Specifies the mechanism by which the proxy server is located.
        Possible values are:
        
          ProxyIEConfig - Use the Internet Explorer proxy configuration for the current user.
                          This is the default setting.
        
          ProxyWinHttpConfig - The WSMan client uses the proxy settings configured for WinHTTP,
                               using the ProxyCfg.exe utility.
        
          ProxyAutoDetect - Force auto-detection of a proxy server.
        
          ProxyNoProxyServer - Do not use a proxy server.
                               All all host names will be resolved locally.

   -ProxyAuthentication <i>string</i>
       The authentication method to use at the proxy.
       Possible values are:

         Basic      The user name and password are sent in clear-text.
         Digest     A challenge-response scheme that uses a server-specified
                    data string for the challenge.
         <u>Negotiate</u>  A challenge-response scheme that negotiates with the server
                    or proxy to determine which scheme to use for authentication.(default)
                    Examples are the Kerberos protocol and NTLM.

   -ProxyCredential <i>PSCredential</i>
       Specifies a user account that has permission to gain access through an intermediate web proxy.

   -SPNPort <i>Int32</i>
       Specifies a port number to append to the connection Service Principal Name <i>SPN</i> of the
       remote server.  An SPN is used when the authentication mechanism is Kerberos or Negotiate.

   -SkipCACheck
       Do not validate that the server certificate is signed by a trusted certificate
       authority (CA) when connecting over HTTPS. Use this option only when the remote
       computer is trusted by other means, for example, if the remote computer is part
       of a network that is physically secure and isolated or the remote computer is
       listed as a trusted host in the WS-Management configuration.

   -SkipCNCheck
       Specifies that the certificate common name (CN) of the server does not need to
       match the hostname of the server. This is used only in remote operations using HTTPS.
       This option should only be used for trusted computers.

   -SkipRevocationCheck
       Do not validate the revocation status on the server certificate.

   -SPNPort <i>int</i>
       A port number to append to the connection Service Principal Name <i>SPN</i> 
       of the remote server.  An SPN is used with Kerberos or Negotiate authentication.

   -UseUTF16
       Encode the request in UTF16 format rather than UTF8 format. The default is UTF8 encoding.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>New-WSManSessionOption reduces the number of parameters required by other cmdlets and allows the settings to be stored in a variable and reused. </p>
<p><b>Examples</b></p>
<p>Copy a file from server64 to the local machine using SSL and skipping the CA check: </p>
<p><span class="code">PS C:\&gt;    $skip = New-WSManSessionOption -SkipCACheck<br>
PS C:\&gt; invoke-command -useSSL -SessionOption $skip server64 {get-content -encoding byte -ReadCount 0 "E:\makecert.exe"} | 
set-content -encoding byte C:\Documents\makecert.exe </span></p>
<p class="quote"><i>“In photography, the smallest thing can be a great subject. The little, human detail can become a Leitmotiv” ~ Henri Cartier-Bresson</i></p>
<p><b>Related:</b></p>
<p><a href="connect-wsman.html">Connect-WSMan</a> Connect to the WinRM service on a remote computer<br>
<a href="invoke-wsmanaction.html">Invoke-WSManAction</a> - Invoke an action on a specified object<br>
<a href="get-wsmaninstance.html">Get-WSManInstance</a> Display management information (XML or value)<a href="set-wsmaninstance.html"><br>
Set-WSManInstance</a> - Modify the management information related to a resource</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="new-wsmansessionoption.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

