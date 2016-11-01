---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Connect-WSMan</h1> 
<p>Connect to the WinRM service (Remote Management) on a remote computer.</p>
<pre>Syntax
      Connect-WSMan [-ApplicationName <i>string</i>] [-ComputerName <i>string</i>] [-Port <i>int</i>] [-UseSSL] 
         [-Authentication <i>AuthMechanism</i>] [-ComputerName <i>string</i>] [-Credential <i>PSCredential</i>] 
            [-Port <i>int</i>] [-SessionOption hashtable] [CommonParameters]
    
      Connect-WSMan [-ConnectionURI <i>Uri</i>]
         [-Authentication <i>Authentication</i>] [-ComputerName <i>string</i>] [-Credential <i>PSCredential</i>] 
            [-Port <i>int</i>] [-SessionOption hashtable] [CommonParameters]

Key
   -ApplicationName <i>string</i>
      The application name in the connection. The default Application Name is "WSMAN"
      The complete identifier for the remote endpoint is in the following format:
           <i>transport</i>://<i>server</i>:<i>port</i>/<i>ApplicationName</i>
      For example:
           http://server64:8080/WSMAN

      IIS will forward requests with this endpoint to the specified application.

      This default setting of "WSMAN" is appropriate for most uses. This parameter
      is designed to be used when numerous computers establish remote connections to
      one computer that is running PowerShell.
      In this case, IIS hosts Web Services for Management (WS-Management) for efficiency.

   -Authentication <i>AuthMechanism</i>
      The authentication mechanism to be used at the server. Possible values are:
        
      - Basic      Send username and password in clear text.
      - Default    Use the authentication method implemented by WS-Management protocol. This is the default.
      - Digest     Challenge-response scheme using a server-specified data string for the challenge.
      - Kerberos   Authenticate by using Kerberos certificates.
      - Negotiate  Challenge-response that negotiates an authentication scheme.
                    e.g. Kerberos protocol or NTLM.
      - CredSSP    Use Credential Security Service Provider (CredSSP) authentication, delegate
                   credentials to a remote computer. This increases the security risk, if the remote 
                   computer is compromised, the credentials could be used to control the network session.

   -ComputerName <i>string</i>
      The computer against which you want to run the management operation.
      A fully qualified domain name, NetBIOS name, or an IP address.
      Use the local computer name, localhost, or a dot (.) to specify the local computer.
      The local computer is the default. When the remote computer is in a different domain,
      use a fully qualified domain name. You can pipe a value for ComputerName.
        
   -ConnectionURI <i>Uri</i>
      The connection endpoint. The format of this string is: 
        
         <i>Transport</i>://<i>Server</i>:<i>Port</i>/<i>ApplicationName</i>. 
        
      The following string is a properly formatted value for this parameter: 
        
         http://Server01:8080/WSMAN. The URI must be fully qualified.
        
   -Credential <i>PSCredential</i>
      A user account that has permission to perform this action. default=current user.
      e.g. "User01", "Domain01\User01", or "User@Domain.com". Or a PSCredential object, such as 
      returned by the Get-Credential cmdlet. When you type a user name, you will be prompted for a password.
        
   -OptionSet <i>hashtable</i>
      Pass a set of switches to the service to modify or refine the nature of the request.
      These are similar to switches used in command-line shells in that they are service specific.
      Any number of options can be specified. 
        
      The following example demonstrates the syntax that passes the values 1, 2, and 3 for
      the a, b, and c parameters:
        
              -OptionSet @{a=1;b=2;c=3}

   -Port <i>int</i>
      The port to use when the client connects to the WinRM service.
      When the transport is HTTP, the default port is 80.
      When the transport is HTTPS, the default port is 443.
      When you use HTTPS as the transport, the value of the -ComputerName parameter must match the server's 
      certificate common name (CN). However, if the SkipCNCheck parameter is specified as 
      part of the SessionOption parameter, then the certificate common name of the server does not have 
      to match the host name of the server. The SkipCNCheck parameter should be used only for trusted
      computers.
        
   -SessionOption <i>hashtable</i>
      Define a set of extended options for the WS-Management session.
      Enter a SessionOption object that you create by using <a href="new-wsmansessionoption.html">New-WSManSessionOption</a>.
        
   -UseSSL
      Use the Secure Sockets Layer (SSL) protocol to establish a connection to the remote computer.
      By default, SSL is not used. 
        
      WS-Management encrypts all PowerShell content that is transmitted over the network.
      The UseSSL parameter lets you specify the additional protection of HTTPS instead of HTTP.
      This will fail if SSL is not available on the port that is used for the connection.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Connect-WSMan  establishes a <i>persistent</i> connection to the remote computer. <br>
You can  connect to the WinRM service on a remote computer before or after you change to the WS-Management provider. </p>
<p>The remote computer will appear in the root directory of the <a href="https://technet.microsoft.com/en-gb/library/hh847813.aspx">WS-Management provider</a>.</p>
<p><b>Examples</b></p>
<p>Create a connection to the remote  computer, PC64: </p>
<p><span class="code">PS C:\&gt;    Connect-WSMan -computer PC64 <br>
PS C:\Users\testuser&gt; cd wsman:<br>
PS WSMan:\&gt; 
    <br>
PS WSMan:\&gt; dir</span><br>
<i><br>
<span class="quote">“From now on, I'll connect the dots my own way” ~ Bill Watterson</span></i></p>
<p><b>Related:</b><br>
<br>
  <a href="disconnect-wsman.html">Disconnect-WSMan</a>           - Disconnect from the WinRM service on a remote computer.<br>
<a href="invoke-command.html">Invoke-Command</a> -   Run a single command on local or remote computer.<br>
<a href="enter-pssession.html">Enter-PSSession</a> -     Start an interactive session with a remote computer.<br>
<a href="test-wsman.html">Test-WSMan</a> - Test whether the WinRM service is running.<br>
<a href="../nt/psexec.html">psExec</a> - Execute process remotely.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="connect-wsman.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

