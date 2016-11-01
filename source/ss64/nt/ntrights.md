---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NTRIGHTS.exe (<a href="../links/windows.html#kits">2003 Resource Kit</a>)</h1> 
<p>Edit  user account privileges.</p>
<pre>Syntax
       NTRIGHTS <b>+r </b><i>Right</i> -u <i>UserOrGroup</i> [-m \\<i>Computer</i>] [-e <i>Entry</i>]

       NTRIGHTS <b>-r </b><i>Right</i> -u <i>UserOrGroup</i> [-m \\<i>Computer</i>] [-e <i>Entry</i>]

Key:

   +/-r <i>Right</i>        Grant or revoke one of the rights listed below.

     -u <i>UserOrGroup</i>  Who the rights are to be granted or revoked to.

     -m \\<i>Computer</i>   The computer (machine) on which to perform the operation.
                     The default is the local computer. 

     -e <i>Entry</i>        Add a text string 'Entry' to the computer's event log.</pre>
<p>This utility does  work under all recent versions of Windows, although  (like all Resource Kit tools) it is unsupported.</p>
<p>Below are the Privileges that can be granted or revoked, <b>all are Case-Sensitive.</b></p>
<p><i>Logon Privileges</i>:</p>
<pre> Log on as a batch job            SeBatchLogonRight  
 Deny logon as a batch job    SeDenyBatchLogonRight  
 Log on locally                   SeInteractiveLogonRight 
 Deny local logon             SeDenyInteractiveLogonRight  
 Logon as a service               SeServiceLogonRight  
 Deny logon as a service      SeDenyServiceLogonRight
 Access this Computer from the Network         SeNetworkLogonRight 
 Deny Access to this computer via network  SeDenyNetworkLogonRight  
 Allow logon through RDP/Terminal Services     SeRemoteInteractiveLogonRight
 Deny logon through RDP/Terminal Services  SeDenyRemoteInteractiveLogonRight</pre>
<p><i>System Admin Privileges:</i></p>
<pre> Generate security audits         SeAuditPrivilege  
 Manage auditing and security log SeSecurityPrivilege 
 Backup files and directories     SeBackupPrivilege  
 Add workstations to the domain   SeMachineAccountPrivilege
 Shut down the system             SeShutdownPrivilege
 Force shutdown from a remote system  SeRemoteShutdownPrivilege  
 Create a pagefile                SeCreatePagefilePrivilege  
 Increase quotas                  SeIncreaseQuotaPrivilege  
 Restore files and directories    SeRestorePrivilege  
 Change the system time           SeSystemTimePrivilege  
 Take ownership of files/objects  SeTakeOwnershipPrivilege 
 Enable computer/user accounts
   to be trusted for delegation       SeEnableDelegationPrivilege  
 Remove computer from docking station SeUndockPrivilege  </pre>
<p><i>Service Privileges:</i></p>
<pre> Create permanent shared objects  SeCreatePermanentPrivilege  
 Create a token object            SeCreateTokenPrivilege  
 Replace a process-level token    SeAssignPrimaryTokenPrivilege 
 Impersonate a client after authentication  SeImpersonatePrivilege
 Increase scheduling priority     SeIncreaseBasePriorityPrivilege  
 Act as part of the operating system   SeTcbPrivilege  
 Profile a single process         SeProfileSingleProcessPrivilege
 Load and unload device drivers   SeLoadDriverPrivilege  
 Lock pages in memory             SeLockMemoryPrivilege  
 Create global objects            SeCreateGlobalPrivilege</pre>
<p><i>Misc Privileges:</i></p>
<pre> Debug programs                   SeDebugPrivilege  
 Bypass traverse checking         <a href="http://blogs.technet.com/b/markrussinovich/archive/2005/10/19/the-bypass-traverse-checking-or-is-it-the-change-notify-privilege.aspx">SeChangeNotifyPrivilege</a>  
 Synch directory service data     SeSyncAgentPrivilege  
 Edit firmware environment values SeSystemEnvironmentPrivilege  
 Profile system performance       SeSystemProfilePrivilege  
 Obsolete and unused              SeUnsolicitedInputPrivilege (has no effect)</pre>
<!--SeManageVolumePrivilege  = Win XP only -->
<p>The <span class="code">Se_Deny</span>… rights will override the corresponding account rights. <br>
An <span class="code">Se_Deny</span>… right will override any logon rights that an account may inherit as a result of its group membership(s).</p>
<p>To run NTRIGHTS you need to be an administrator.<br>
To change privileges remotely (-m option) you need to have administrator rights on the machine being changed.<br>
To change permissions for a large number of users, add them to a domain group and grant the privileges to the group.<br> 
The <a href="https://support.microsoft.com/kb/307882">group policy editor</a> can be used to view these privileges in a GUI. <br>
<br>
On a Windows 2008 Server (or Vista),  allowing logon through Terminal Services (SeRemoteInteractiveLogonRight)  requires an extra step:
Control Panel &gt; System &gt; 'Remote Settings' &gt; 'Select Users' button,
and then add users/groups.</p>
<p><b>Examples:</b></p>
<p>  Allow all members of the local 'Users' group to logon locally</p>
<p class="code">ntrights -u Users +r SeInteractiveLogonRight</p>
<p>Allow all members of the  '<span class="code">Admin_RDP</span>' group to logon remotely via RDP to "server64", also log this security change in the event log: </p>
<p class="code">ntrights -u MyDom\Admin_RDP +r SeRemoteInteractiveLogonRight -m \\server64 -e "Added RDP rights for Admin_RDP" </p>
<p>Allow all members of the domain group 'Admin_General' to shutdown this computer. </p>
<p class="code">ntrights -u MyDom\Admin_General +r SeShutdownPrivilege</p>
<p>Allow  the domain user 'JDoe' to shutdown the machine 'Server64' </p>
<p class="code">ntrights -u MyDom\JDoe +r SeShutdownPrivilege -m \\Server64</p>
<p>Specifically deny local logon rights to Henry:</p>
<p class="code">ntrights -u Henry +r SeDenyInteractiveLogonRight</p>
<p><i class="quote">“What distinguishes the majority of men from the few is their inability to act according to their beliefs” ~ Henry Miller</i><br>
<br>
<b> Related:</b><br><br>
<a href="cacls.html">CACLS</a> - Change file permissions<br>
<a href="https://support.microsoft.com/kb/267553">Q267553</a> - Reset User Rights in  Group Policy<br>
<a href="https://support.microsoft.com/kb/315276">Q315276</a> - Set Logon User Rights by Using the NTRights<br>
<a href="http://technet.microsoft.com/en-us/library/dd277311.aspx">Technet</a> - User Rights and Privileges </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ntrights.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
