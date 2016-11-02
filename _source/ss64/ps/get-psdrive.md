---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-PSDrive</h1> 
<p>Get drive information (<span class="code">gdr</span>)</p>
<pre>Syntax
      Get-PSDrive { [[-name] <i>string</i>[]] | [-literalName] <i>string</i>[]  }<br>         [-Force] [-pSProvider <i>string</i>[]] [-scope <i>string</i>]
            [-UseTransaction] [<i>CommonParameters</i>]

Key
   -name <i>string</i>
       Get only the specified drives.
       Type the drive name or letter without a colon (:),
       separate multiple names with commas.

   -literalName <i>string</i>
       The Drive name which will be used exactly as typed.
       No characters are interpreted as wildcards. If the name includes escape
       characters, enclose it in single quotation marks.

   -pSProvider 
       Get only the drives supported by the specified PowerShell provider.
       Type the name of a provider, such as:
       FileSystem, Registry, or Certificate.
        
   -scope 
       The scope within which to search for the drive.
       Valid values are "Global", "Local", or "Script", or a number relative
       to the current scope (0 through the number of scopes, where 0 is the
       current scope and 1 is its parent).
       "Local" is the default. For more information, see about_Scopes.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Get-PSDrive:<span class="code"> <b>gdr</b></span></p>
<p>Get-PSDrive  gets the  PowerShell drives in the current session. You can get a particular drive or all drives in the console.<br>
<br>
Get-PSDrive gets the following drives:<br>
<br>
- Windows logical drives on the computer, including drives mapped to network shares. <br>

- Drives exposed by  PowerShell providers (such as the Certificate:, Function:, and Alias: drives) and the HKLM: and HKCU: Registry drives. <br>

- Drives created with New-PSDrive.<br>
<br>
Get-PSDrive does not get Windows mapped drives that are added or created after the  PowerShell console is opened.</p>
<p><b>Examples</b></p>
<p>Display information about all currently visible drives:</p>
<p><span class="code">PS C:\&gt; get-psdrive</span><br>
  <br>
  Display the description of a  PowerShell drive on your system:</p>
<p><span class="code">PS C:\&gt; (get-psdrive <i>DriveName</i>).description</span></p>
<p>Display information for drives with names that begin with HK (registry: HKLM,  HKCU etc):</p>
<p class="code">PS C:\&gt; get-psdrive HK*</p>
<p>Display information for FileSystem drives:</p>
<p class="code">PS C:\&gt; get-psdrive -psprovider filesystem</p>
<p class="quote"><i>"Heaven wheels above you, displaying to you her
eternal glories, and still your eyes are on
the ground"
~ Dante Alighieri</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="new-psdrive.html">New-PSDrive</a> - Install a new drive on the machine<br> 
<a href="remove-psdrive.html">Remove-PSDrive</a> - Remove a provider/drive from its location<br>
<a href="get-wmiobject.html">get-wmiobject</a> win32_logicaldisk<br>
<a href="get-wmiobject.html">get-wmiobject</a> win32_networkconnection<br>
[System.IO.DriveInfo]::getdrives()<br>

Equivalent bash command: <a href="../bash/ln.html">ln</a> - Make links between files</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-psdrive.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

