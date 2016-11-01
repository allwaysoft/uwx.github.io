---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-PSDrive</h1> 
<p>Remove a Windows PowerShell drive from its location (<span class="code">rdr</span>). </p>
<pre>Syntax
      Remove-PSDrive <b>{</b> [-name] <i>string</i>[] <b>|</b> [-literalName] <i>string</i>[] <b>}</b><br>         [-pSProvider <i>string</i>[]] [-scope <i>string</i>] [-force]
            [-Confirm] [-WhatIf] [-UseTransaction] [<i>CommonParameters</i>]

Key
   -name <i>string</i>[]
       The PowerShell drive name(s) to remove, separate multiple names with commas.
       Do not type a colon (:) after the drive name.

   -literalName <i>string</i>[]
       The Drive name which will be used exactly as typed.
       No characters are interpreted as wildcards. If the name includes escape
       characters, enclose it in single quotation marks.

   -pSProvider 
       Remove all of the drives associated with the specified PowerShell provider.
       e.g. FileSystem, Registry or Certificate.

   -scope 
       An index that identifies the scope from which the drive is being removed.

   -force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. -force will override a files read-only
       attribute, but will not change file permissions.

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
<p>Standard <a href="get-alias.html">Aliases</a> for Remove-PSDrive:<span class="code"> <b>rdr</b></span></p>
<p>Remove-PSDrive  deletes  PowerShell drives created with New-PSDrive.
Remove-PSDrive cannot delete Windows drives or mapped network drives created by using other methods and it cannot delete the current working drive.</p>
<p><b>Examples</b></p>
<p>Remove a PowerShell drive named S:</p>
<p><span class="code">PS C:\&gt; remove-psdrive -name s</span><br>
<i><br>
<span class="quote">"Peace is not the absence of war; it is a virtue; a state of mind; a disposition for benevolence,confidence, and justice" ~ Baruch Spinoza</span></i></p>
<p><b>Related:</b><br>
<br>
<a href="get-psdrive.html">Get-PSDrive</a> - Get drive information (DriveInfo)<br>
<a href="new-psdrive.html">New-PSDrive</a> - Install a new drive on the machine<br>
<a href="get-command.html">Get-Command</a> - Retrieve basic information about a command<br>
<a href="get-member.html">Get-Member</a> - Enumerate the properties of an object<br>
<a href="get-help.html">Get-Help</a> - Open the help file<br>
Equivalent bash command: umount(8) - detach/unmount a device</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-psdrive.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

