---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-WmiInstance</h1> 
<p>Create or update an instance of an existing Windows Management Instrumentation (WMI) class.</p>
<pre>Syntax
      Set-WmiInstance <b>[</b> <b>[-Class] <i>string</i></b> [-Arguments] <i>hashtable</i>] <b>]</b>
        [-Authentication {Default | None | Connect | Call | Packet | PacketIntegrity | PacketPrivacy | Unchanged}]
           [-Authority <i>string</i>] [-ComputerName <i>string</i>[]] [-Credential <i>PSCredential</i>] [-EnableAllPrivileges]
              [-Impersonation {Default | Anonymous | Identify | Impersonate | Delegate}]
                 [-Locale <i>string</i>] [-Namespace <i>string</i>] [-AsJob] [-PutType {None | UpdateOnly | CreateOnly | UpdateOrCreate}]
                    [-ThrottleLimit <i>int</i>] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

      Set-WmiInstance <b>-InputObject <i>ManagementObject</i></b> [-Arguments <i>hashtable</i>]
        [-AsJob] [-PutType {None | UpdateOnly | CreateOnly | UpdateOrCreate}]
           [-ThrottleLimit <i>int</i>] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

      Set-WmiInstance <b>-Path <i>string</i></b> [-Arguments <i>hashtable</i>]
        [-Authentication {Default | None | Connect | Call | Packet | PacketIntegrity | PacketPrivacy | Unchanged}]
           [-Authority <i>string</i>] [-ComputerName <i>string</i>[]] [-Credential <i>PSCredential</i>] [-EnableAllPrivileges]
              [-Impersonation {Default | Anonymous | Identify | Impersonate | Delegate}]
                 [-Locale <i>string</i>] [-Namespace <i>string</i>] [-AsJob] [-PutType {None | UpdateOnly | CreateOnly | UpdateOrCreate}]
                    [-ThrottleLimit <i>int</i>] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -Arguments <i>hashtable</i>
       The name of the property to be changed and the new value for that property.
       The name-value pair must be passed on the command-line as a <a href="syntax-arrays.html">hash table</a>. For example:
              -argument @{Setting1=1; Setting2=5; Setting3="test"}.

   -AsJob
       Run the command as a background job. Use this to run commands that take a long time to finish.
       When -AsJob is used, the command will return an object representing the background job and
       then display the command prompt. You can continue to work in the session while the job finishes.
       If Set-WmiObject is used against a remote computer, the job is created on the local computer, and
       the results from remote computers are automatically returned to the local computer.
       To manage the job, use the job- cmdlets. To get the job results, use <a href="receive-job.html">Receive-Job</a>.

       Note: To use this parameter with remote computers, the local and remote computers must be configured
       for remoting. Additionally, you must start Windows PowerShell by using the "Run as administrator" option
       in Windows Vista and later versions of Windows. For more information, see about_Remote_Requirements.
        For more information about Windows PowerShell background jobs, see  about_Jobs and about_Remote_Jobs.

   -Authentication <i>Authentication</i>
       The authentication mechanism to be used with the WMI connection. Possible values are:
        
       -1: Unchanged
        0: Default
        1: None (No authentication in performed.)
        2: Connect (Authentication is performed only when the client establishes a relationship with the application.)
        3: Call (Authentication is performed only at the beginning of each call when
                 the application receives the request.)
        4: Packet (Authentication is performed on all the data that is received from the client.)
        5: PacketIntegrity (All the data that is transferred between the client and the application is
                            authenticated and verified.)
        6: PacketPrivacy (The properties of the other authentication levels are used, and all the data is encrypted.)

   -Authority <i>string</i>
       The authority to use to authenticate the WMI connection.
       Specify standard NTLM or Kerberos authentication. To use NTLM, set the authority setting to
       ntlmdomain:<i>DomainName</i>, where <i>DomainName</i> identifies a valid NTLM domain name.
       To use Kerberos, specify kerberos:<i>DomainName</i>\<i>ServerName</i>".
       You cannot include the authority setting when you connect to the local computer.

   -Class <i>string</i>
       The name of a WMI class.

   -ComputerName <i>string</i>[]
       The computer against which you want to run the management operation.
       A fully qualified domain name, NetBIOS name, or an IP address.
       Use the local computer name, localhost, or a dot (.) to specify the local computer.
       The local computer is the default. When the remote computer is in a different domain,
       use a fully qualified domain name. You can pipe a value for ComputerName.
       (This parameter does not rely on Windows PowerShell remoting)

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action. default=current user.
       e.g. "User01", "Domain01\User01", or "User@Domain.com". Or a PSCredential object, such as 
       returned by the Get-Credential cmdlet. When you type a user name, you will be prompted for a password.
   -EnableAllPrivileges [&lt;SwitchParameter&gt;]
       Enables all the privileges of the current user before the command makes the WMI call .

   -Impersonation <i>ImpersonationLevel</i>
       The impersonation level to use. Valid values are: 

        0: Default (Reads the local registry for the default impersonation level, which is usually set to "3: Impersonate".)
        1: Anonymous (Hides the credentials of the caller.)
        2: Identify (Allows objects to query the credentials of the caller.)
        3: Impersonate (Allows objects to use the credentials of the caller.)
        4: Delegate (Allows objects to permit other objects to use the credentials of the caller.)

   -InputObject <i>ManagementObject</i>
      A ManagementObject object to use as input.
      When this parameter is used, all other parameters ,except for -Arguments, are ignored.

   -Locale <i>string</i>
      The preferred locale for WMI objects.
      The Locale parameter is specified in an array in the MS_<i>LCID</i>  format in the preferred order.

   -Namespace <i>string</i>
      When used with -Class, this specifies the WMI repository namespace where the referenced 
      WMI class is located.

   -Path <i>string</i>
       A WMI object path to the instance that you want to create or update.

   -PutType <i>PutType</i>
       Indicates whether the WMI instance should be created or updated. Valid values are:

        UpdateOnly      Update an existing WMI instance.
        CreateOnly      Create a new WMI instance.
        UpdateOrCreate  Update the WMI instance if it exists or else create a new instance.

   -ThrottleLimit <i>int</i>
       Allow the user to specify a throttling value for the number of WMI operations that can be executed simultaneously.
       This parameter is used together with the AsJob parameter. 
       The throttle limit applies only to the current command, not to the session or to the computer.

   -Confirm 
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Set-WmiInstance:<span class="code"> <b>swmi</b></span></p>
<p>Connect-WSMan  establishes a <i>persistent</i> connection to the remote computer. You can  connect to the WinRM service on a remote computer before or after you change to the WS-Management provider. The remote computer will appear in the root directory of the WS-Management provider.</p>
<p><b>Examples</b></p>
<p>Set the WMI logging level to 2, (    note the the property to be set and the value are passed together as a value pair): </p>
<p><span class="code">PS C:\&gt;    Set-WMIInstance -class Win32_WMISetting -argument @{LoggingLevel=2}</span></p>
<p>Create the testvar environment variable that has the value "testvalue" (you may need to restart Windows PowerShell to see the new environment variable): </p>
<p><span class="code">PS C:\&gt; set-wmiinstance -class win32_environment -argument @{Name="testvar";VariableValue="testvalue";UserName="&lt;SYST<br>
EM&gt;"}</span></p>
<p>Set the WMI logging level to 2 on Server64 and Server65: </p>
<p><span class="code">PS C:\&gt; Set-WMIInstance -class Win32_WMISetting -argument @{LoggingLevel=2} -computername server64, server65 </span></p>
<p class="quote"><i>“From now on, I'll connect the dots my own way” ~ Bill Watterson</i></p>
<p><b>Related:</b><br>
<br>
  <a href="get-wmiobject.html">Get-WmiObject</a> - Get WMI class information</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-wmiinstance.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

