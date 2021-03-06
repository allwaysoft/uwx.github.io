---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Enter-PSSession</h1> 
<p>Start an interactive session with a remote computer. This allows running multiple commands.<br>
By default only administrators are permitted to remotely execute commands, so    the session from which you launch Enter-PsSession must have administrator (or delegated admin) rights to the remote machine.
</p>
<pre>Syntax
      Enter-PSSession [-ComputerName] <i>string</i> [-ApplicationName <i>string</i>]
         [-Authentication {Default | Basic | Negotiate  | NegotiateWithImplicitCredential | CredSSP | Digest | Kerberos}]
             [-Port <i>int</i>] [-UseSSL] [-CertificateThumbprint <i>string</i>] [-ConfigurationName <i>string</i>]
                [-Credential <i>PSCredential</i>] [-SessionOption <i>PSSessionOption</i>] [<i>CommonParameters</i>]

      Enter-PSSession [[-Id] <i>int</i>] [<i>CommonParameters</i>]

      Enter-PSSession [-InstanceId <i>Guid</i>] [<i>CommonParameters</i>]

      Enter-PSSession [-Name <i>string</i>] [<i>CommonParameters</i>]

      Enter-PSSession [[-Session] <i>PSSession</i>] [<i>CommonParameters</i>]

      Enter-PSSession [[-ConnectionURI] <i>Uri</i>] [-AllowRedirection]
         [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] 
            [-CertificateThumbprint <i>string</i>] [-ConfigurationName <i>string</i>]
               [-Credential <i>PSCredential</i>] [-SessionOption <i>PSSessionOption</i>] [<i>CommonParameters</i>]

Key
   -AllowRedirection
       Allow redirection of this connection to an alternate Uniform Resource Identifier (URI).

       When you use -ConnectionURI, the remote destination can return an instruction to redirect to
       a different URI. By default, PowerShell does not redirect connections.

       You can also limit the number of times that the connection is redirected by setting the
       MaximumConnectionRedirectionCount property of the $PSSessionOption preference variable, or the
       MaximumConnectionRedirectionCount property of the value of the SessionOption parameter.
       The default value is 5. For more information, see New-PSSessionOption.

    -ApplicationName <i>string</i>
       The application name segment of the connection URI. Use -ApplicationName to specify the
       application name when you are not using -ConnectionURI.

       The default value is the value of the $PSSessionApplicationName preference variable on
       the local computer. If this variable is not defined, the default value is WSMAN.
       This value is appropriate for most uses. For more information, see about_Preference_Variables.

       The WinRM service uses the application name to select a listener to service the connection request.
       The value of this parameter should match the value of the URLPrefix property of a listener on
       the remote computer.

   -Authentication <i>Authentication</i>
       The authentication mechanism to be used at the server. Possible values are:
        
        Basic      Send username and password in clear text.
        Default    Use the authentication method implemented by WS-Management protocol. This is the default.
        Digest     Challenge-response scheme using a server-specified data string for the challenge.
        Kerberos   Authenticate by using Kerberos certificates.
        Negotiate  Challenge-response that negotiates an authentication scheme.
                    e.g. Kerberos protocol or NTLM.
        NegotiateWithImplicitCredential   Use the credentials cached on the PSSession computer.
        CredSSP    Use Credential Security Service Provider (CredSSP) authentication, delegate
                   credentials to a remote computer. This increases the security risk, if the remote 
                   computer is compromised, the credentials could be used to control the network session.
                   (Windows Vista or later versions.)

   -CertificateThumbprint <i>string</i>
       The certificate thumbprint of the digital public key certificate (X509) of a user account
       that has permission to perform this action.

       Certificates are used in client certificate-based authentication.
       They can be mapped only to local user accounts; they do not work with domain accounts.

       To get a certificate thumbprint, use the Get-Item or Get-ChildItem command
       in the PowerShell Cert: drive.

   -ComputerName <i>string</i>
       Start an interactive session with the specified remote computer.
       A fully qualified domain name, NetBIOS name, or an IP address.
       Use the local computer name, localhost, or a dot (.) to specify the local computer.

       To use an IP address in the value of the ComputerName parameter, the command must include the
       Credential parameter. Also, the computer must be configured for HTTPS transport or the IP address
       of the remote computer must be included in the WinRM TrustedHosts list on the local computer.
       For more see Help about_Remote_Troubleshooting.

       Note:  In Windows Vista and later versions of Windows, to include the local computer in the value
       of the -ComputerName parameter, you must start PowerShell with the "Run as administrator" option.

       The local computer is the default. You can pipe a value for ComputerName.
       When the remote computer is in a different domain, use a fully qualified domain name. 

   -ConfigurationName <i>string</i>
       The session configuration that is used for the interactive session.
       Enter a configuration name or the fully qualified resource URI for a session configuration.
       If you specify only the configuration name, the following schema URI is prepended:
          http://schemas.microsoft.com/powershell.

       The session configuration for a session is located on the remote computer.
       If the specified session configuration does not exist on the remote computer, the command fails.

       The default value is the value of the $PSSessionConfigurationName preference variable on the local computer.
       If this preference variable is not set, the default is Microsoft.PowerShell.
       For more information, see about_Preference_Variables.

    -ConnectionURI <i>Uri</i>
        Specifies a Uniform Resource Identifier (URI) that defines the connection endpoint for the
        interactive session. The URI must be fully qualified. 

        The format of this string is as follows: 
            <i>Transport</i>://<i>ComputerName</i>:<i>Port</i>/<i>ApplicationName</i>
        The default value is as follows:
            http://localhost:80/WSMAN

        Valid values for the Transport segment of the URI are HTTP and HTTPS.
        If you do not specify a ConnectionURI, you can use the UseSSL, ComputerName, Port, and
        ApplicationName parameters to specify the URI values.

        If the destination computer redirects the connection to a different URI, PowerShell will prevent
        the redirection unless you use -AllowRedirection in the command.

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action. default=current user.
       e.g. "User64", "Domain01\User64", or "User@Domain.com". Or a PSCredential object, such as 
       returned by <a href="get-credential.html">Get-Credential</a>. When you type a user name, you will be prompted for a password.

   -Id <i>int</i>
       The ID of an existing session. (from Get-PSSession)
       Enter-PSSession uses the specified session for the interactive session.

   -InstanceId <i>Guid</i>
       The instance ID of an existing session. Enter-PSSession will then use the
       specified session for the interactive session.
       The instance ID is a GUID. To find the instance ID of a session, use Get-PSSession.
       You can also use the Session, Name, or ID parameters to specify an existing session.
       Or, you can use the ComputerName parameter to start a temporary session.

   -Name <i>string</i>
       The friendly name of an existing session. Enter-PSSession will then use the
       specified session for the interactive session.
       If the name that you specify matches more than one session, the command fails.
       You can also use the Session, InstanceID, or ID parameters to specify an existing session.
       Or, you can use the ComputerName parameter to start a temporary session.
       To establish a friendly name for a session, use the Name parameter of New-PSSession.

    -Port <i>int</i>
       The network port on the remote computer used for this command.
       The default is port 80 (the HTTP port).
       Before using an alternate port, configure the WinRM listener on the remote computer to listen at that
       port. Use the following commands to configure the listener:
        1. winrm delete winrm/config/listener?Address=*+Transport=HTTP
        2. winrm create winrm/config/listener?Address=*+Transport=HTTP @{Port="<i>port-number</i>"}
       Do not use the Port parameter unless you must. The port setting in the command applies to
       all computers or sessions on which the command runs.
       An alternate port setting might prevent the command from running on all computers.

   -Session <i>PSSession</i>
       A Windows PowerShell session (PSSession) to use for the interactive session.
       This parameter takes a session object.
       You can also use the Name, InstanceID, or ID parameters to specify a PSSession.
       Enter a variable that contains a session object or a command that creates or gets a
       session object, such as New-PSSession or Get-PSSession.
       Session objects may also be piped to Enter-PSSession.
       Submit only one PSSession with this parameter. If you enter a variable that contains more
       than one PSSession, the command fails.
       Exit-PSSession or the EXIT keyword, will end the interactive session, but the PSSession
       that you created remains open and available for use.

   -SessionOption <i>PSSessionOption</i>
       Set advanced options for the session. Enter a SessionOption object that you create
       using New-PSSessionOption.
       The default values for the options are determined by the value of the $PSSessionOption
       preference variable, if it is set. Otherwise, the session uses the system defaults.
       For information about the $PSSessionOption preference variable, see about_Preference_Variables.

   -UseSSL
       Use the Secure Sockets Layer (SSL) protocol to establish a connection to the remote computer.
       By default, SSL is not used.
       WS-Management encrypts all Windows PowerShell content transmitted over the network.
       UseSSL is an additional protection that sends the data across an HTTPS connection instead of
       an HTTP connection.
       If you use this parameter, but SSL is not available on the port used for the command, the command fails.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Enter-PSSession:<span class="code"> etsn</span></p>
<p>Enter-PSSession  starts an interactive session with a single remote computer. During the session, the commands that you type run on the remote computer, just as though you were typing directly on the remote computer. You can have only one interactive session at a time. <br>
<br>
Use <span class="code">-ComputerName</span> to specify the name of the remote computer or reconnect to a session previously setup with <a href="new-pssession.html"><span class="code">New-PSSession</span></a>.<br>
<br>
To end the interactive session and disconnect from the remote computer, use  <a href="exit-pssession.html">Exit-PSSession</a>, or type "exit".</p>
<p><b>Examples</b></p>
<p>Start an interactive session on the local computer. The command prompt changes to indicate that you are now running  in a different session: </p>
<pre>PS C:&gt; Enter-PSSession</pre>
<p>List processes  running on server64 and create a log file on the remote server:</p>
<pre>PS C:&gt; enter-pssession -computer Server64<br>Server64\PS&gt; get-process powershell &gt; C:\ps-test\process.txt<br>Server01\PS&gt; exit-pssession
</pre>
<p>Connect to  server svrDNS1 and load the <a href="ad.html">Active Directory Module</a>, the module does not need to be installed on the client (run the server copy):</p>
<pre>PS C:&gt; PS C:\powershell&gt; Enter-PSSession "svrDNS1"
[serverDNS1]: PS C:\Users\simon\Documents&gt; Import-Module ActiveDirectory
[serverDNS1]: PS C:\Users\simon\Documents&gt; Set-Location AD:
[serverDNS1]: PS AD:\&gt;
</pre>
<p>Connect to  the users $logonserver:</p>
<pre>PS C:&gt; PS C:\powershell&gt; Enter-PSSession ($env:logonserver).replace("\\","")</pre>
<p class="quote"><i>“The real test of friendship is: can you literally do nothing with the other person? Can you enjoy those moments of life that are utterly simple?” - Eugene Kennedy</i></p>
<p><b>Related:</b></p>
<p><a href="exit-pssession.html">Exit-PSSession</a> - End an interactive session with a remote computer.<br>
<a href="new-pssession.html">New-PSSession</a> -     Create a persistent connection to a local or remote computer.<br>
<a href="invoke-command.html">Invoke-Command</a> -   Run a single command on local or remote computer.</p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="enter-pssession.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

