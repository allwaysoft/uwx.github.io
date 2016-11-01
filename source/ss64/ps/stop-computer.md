---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Stop-Computer</h1>
<p>Stop (shut down) local and remote computers using WMI.</p>
<pre>Syntax
      Stop-Computer [[-ComputerName] <i>string</i>[]] [[-Credential] <i>PSCredential</i>]
         [-Authentication <i>AuthenticationLevel</i>] [-Impersonation <i>ImpersonationLevel</i>]
            [-AsJob] [-Force] [-ThrottleLimit <i>int</i>] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -Authentication <i>AuthenticationLevel
</i>       The authentication level that is used for the  WMI connection.
       Valid values:
        
         Default         Windows Authentication.
         None            No COM authentication.
         Connect         Connect-level COM authentication.
         Call            Call-level COM authentication.
         <u>Packet</u>          Packet-level COM authentication.
         PacketIntegrity Packet Integrity-level COM authentication.
         PacketPrivacy   Packet Privacy-level COM authentication.
         Unchanged       The authentication level is the same as the previous command.

   -Impersonation <i>ImpersonationLevel</i>
       The impersonation level to use when calling WMI.
       Valid values:
        
         Default      Default impersonation.
         Anonymous    Hides the identity of the caller.
         Identify     Allows objects to query the credentials of the caller.
         <u>Impersonate</u>  Allows objects to use the credentials of the caller.

   -ComputerName <i>string</i>[]
       Stop the specified computers. The default is the local computer. 
                          
       Type the NETBIOS name, IP address, or fully qualified domain name of
       one or more computers in a comma-separated list.
       To specify the local computer, type the computername or "localhost".
        
       This parameter does not rely on PowerShell remoting.

   -Credential
       A user account that has permission to perform this action.
       The default is the current user.

   -Force
       Force an immediate shut down of the computers.

   -ThrottleLimit <i>int</i>
       The maximum number of concurrent connections that can be established
       to run this command. If this parameter is NULL or 0, the default value, 32, will be used.

       The throttle limit applies only to the current command, not to the session or to the computer.

   -whatIf
       Describe the command without actually executing it.

   -confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Shutdown the local computer:</p>
<p><span class="code">PS C:\&gt; stop-computer</span></p>
<p>Stop two remote computers, Server64 and Server65, and the local computer:</p>
<p><span class="code">PS C:\&gt; stop-computer -computername Server64, Server65, localhost</span></p>
<p>Run a Stop-Computer command as a background job on two remote computers: </p>
<p><span class="code">PS C:\&gt; $j = stop-computer -computername Server64, Server65 -asjob <br>
PS C:\&gt; $results = $j | receive-job<br>
PS C:\&gt; $results</span></p>
<p>Run Stop-Computer against a list of computers: </p>
<p><span class="code">C:\PS&gt; $machines = get-content servers.txt<br>
C:\PS&gt; $creds = get-credential domain64\admin64<br>
C:\PS&gt; stop-computer -computername $machines -force -throttlelimit 10 -credential $creds</span></p>
<p class="quote"><i>“Neither fire nor wind, birth nor death can erase our good deeds” ~ Buddha</i></p>
<p><b>Related:</b></p>
<p>  <a href="restart-computer.html">Restart-Computer</a> - Restart the operating system on a computer<br>
<a href="checkpoint-computer.html">Checkpoint-Computer</a> - Create a system restore point (XP)</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="stop-computer.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

