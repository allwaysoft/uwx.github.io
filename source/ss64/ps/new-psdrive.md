---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-PSDrive</h1> 
<p>Create a temporary or persistent mapped network drive. (<span class="code">ndr, mount</span>)</p>
<pre>Syntax
      New-PSDrive [-name] <i>string</i> -PSProvider <i>string</i> [-Persist]
         [-root] <i>string</i> [-description <i>string</i>] [-scope <i>string</i>]
            [-credential <i>PSCredential</i>] [-WhatIf] [-confirm] [-UseTransaction] [<i>CommonParameters</i>]

Key
   -name 
       The PowerShell drive name to be added.
       This is not limited to drive letters,any valid string may be used.
       PowerShell drives names are case-sensitive.

   -PSProvider 
       The name of the provider, if omitted you will be prompted.
       e.g. FileSystem, Registry or Certificate.
       type <a href="get-psprovider.html">get-psprovider</a> for a list of providers.

    -Persist
       Create a mapped network drive. Mapped network drives are persistent, not session-specific, and can be
       viewed and managed in File Explorer and other tools. (PowerShell 3.0+)

       The name of the drive must be a letter, such as D or E. The value of the Root parameter must be a UNC path
       to a different computer. The value of the PSProvider parameter must be FileSystem.

       To disconnect a mapped network drive, use <a href="remove-psdrive.html">Remove-PSDrive</a>.
       When you disconnect a mapped network drive, the mapping is permanently deleted from the computer, not just
       deleted from the current session.

       Mapped network drives are specific to a user account.
       Mapped network drives that you create in sessions that are started with the "Run as administrator" option or
       with the credential of another user are not visible in a session that started without explicit credentials or
       with the credentials of the current user.

   -root <i>string</i>
       The data store location that the PowerShell drive will be mapped to.

       e.g. a network share (\\Server64\files), a local directory (C:\Programs),
       or a registry key (HKLM:\Software\Microsoft).

   -description string
       A short description of the drive.

   -scope 
       A scope for the drive.
       Valid values are "Global", "Local", or "Script", or a number relative
       to the current scope (0 through the number of scopes, where 0 is the
       current scope and 1 is its parent).
       "Local" is the default. For more information, see about_Scopes.

   -credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user.
       a user-name, such as "User01" or "Domain01\User01", or a PSCredential
       object, such as the one retrieved by using the Get-Credential cmdlet.
       If you type a user name, you will be prompted for a password.
       This parameter is not supported by any providers installed with PowerShell.

   -whatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   -confirm
       Prompt for confirmation before executing the command.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for New-PSDrive:<span class="code"> mount, <b>ndr</b></span></p>
<p>New-PSDrive creates a  PowerShell drive that is "mapped" to a location in a data store, such as a network drive, a directory on the local computer, or a registry key.</p>
<p>If a non-persistent drive is mapped (without the -Persist option) the drive will  be visible only within PowerShell, not to Windows Explorer, <span class="code"><a href="../nt/net_use.html">net use</a></span> or <span class="code">Get-WmiObject Win32_NetworkConnection</span></p>
<p><b>Examples</b></p>
<p>Install a drive called 'SS64' using the file system provider. The drive will be rooted at "C:\MyDocs":</p>
<p><span class="code">PS C:\&gt; new-psdrive -name SS64 -psProvider FileSystem -root C:\MyDocs -persist<br>
DIR SS64:
</span><br><br>
Install a drive called 'S:'  using the file system provider. The drive will be rooted at <span class="code">\\Server64\teams</span>:</p>
<p class="code">PS C:\&gt; new-psdrive -name S -PsProvider FileSystem -root \\Server64\teams -persist<br>
S:<br>
PS S:\&gt; DIR S:</p>
<p>The  parameters are positional, so <br>
<span class="code">PS C:\&gt; New-PSDrive -name M -psprovider FileSystem -root \\Server\Share</span></p>
<p>is the same as <br>
<span class="code">PS C:\&gt; New-PSDrive M FileSystem \\Server\Share</span></p>
<p>Map a drive using VBScript, calling <span class="code"><a href="../vb/mapnetworkdrive.html">.MapNetworkDrive</a></span> from a Wscript.Network COM object, this method will make a persistent drive map:</p>
<p><span class="code">PS C:\&gt; $drive = new-object -com wscript.network<br>
PS C:\&gt; $drive.MapNetworkDrive("S:", "\\Server64\teams")</span></p>
<p class="quote"><i>"If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside" ~ <a href="http://www.cringely.com/">Robert X. Cringely</a>, InfoWorld </i></p>
<p><b>Related:</b><br>
<br>
<a href="get-psdrive.html">Get-PSDrive</a> - Get drive information (DriveInfo)<br>
<a href="remove-psdrive.html">Remove-PSDrive</a> - Remove a provider/drive from its location<br>
<a href="get-command.html">Get-Command</a> - Retrieve basic information about a command<br>
<a href="get-member.html">Get-Member</a> - Enumerate the properties of an object<br>
Equivalent bash command: <a href="../bash/mount.html">mount</a> - Mount a file system</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="new-psdrive.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

