---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-Item</h1> 
<p>Delete the specified items.</p>
<pre>Syntax
      Remove-Item <b>{</b> [-path] <i>string</i>[] <b>|</b> [-literalPath] <i>string</i>[] <b>}</b>
         [-include <i>string</i>[]] [-exclude <i>string</i>[]] [-filter <i>string</i>]
            [-recurse] [-force] [-whatIf] [-confirm]
               [-credential <i>PSCredential</i>] [-UseTransaction] [<i>CommonParameters</i>]

Key
   -Path <i>string</i>
       The path(s) to the items. Wildcards are permitted.
       Use the wildcard (*) to specify all items in the current location.

   -LiteralPath <i>string</i>
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.
        
   -Include <i>string</i>
       Include only the specified items from the Path. e.g. "May*"
       this only works when the path includes a wildcard character.
        
   -Exclude <i>string</i>
       Omit the specified items from the Path e.g. "*SS64*"
       this only works when the path includes a wildcard character.
        
   -Filter <i>string</i>
       A filter in the provider's format or language. 
       The exact syntax of the filter (wildcard support etc) depends on the provider.
       Filters are more efficient than -include/-exclude, because the provider
       applies the filter when retrieving the objects, rather than having 
       PowerShell filter the objects after they are retrieved.

   -Recurse 
       Also delete child items from the specified location.
       [Does NOT Work properly yet - see example below]

   -Force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. -force will override a files read-only
       attribute, but will not change file permissions.

   -Credential <i>PSCredential</i>
       Use a credential to validate access to the file. <i>Credential</i> represents
       a user-name, such as "User01" or "Domain01\User01", or a PSCredential
       object, such as the one retrieved by using the Get-Credential cmdlet.
       If you type a user name, you will be prompted for a password.
       This parameter is not supported by any PowerShell core cmdlets or providers.

   -WhatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   -Confirm
       Prompt for confirmation before executing the command.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Remove-Item:<span class="code"> del, erase, rd, rm, rmdir, <b>ri</b></span></p>
<p>Remove-Item  deletes one or more items. It can be used to delete many different types of items, including files, directories, registry keys, variables, aliases, and functions.</p>
<p><b>Examples</b></p>
<p>Delete filenames that include a dot (.)</p>
<p><span class="code">PS C:\&gt; remove-item C:\Docs\*.*</span><br><br>
Delete from the current directory (*) all files with a .doc file name extension and a name that does not include "1".</p>
<p class="code">PS C:\&gt; remove-item * -include *.doc -exclude *1*</p>
<p>Delete a file that is both hidden and read-only.:</p>
<p class="code">PS C:\&gt; remove-item -path C:\Docs\hidden-RO-file.txt -force</p>
<p>Delete only a folder called ss64:</p>
<p class="code">PS C:\&gt; remove-item ss64 | Where { $_.PSIsContainer } </p>
<p>Delete only a file called ss64:</p>
<p class="code">PS C:\&gt; remove-item ss64 | Where { ! $_.PSIsContainer }</p>
<p>Delete all of the CSV files in the current directory and all subdirectories recursively - because <span class="code">remove-item -recurse</span> is faulty this uses <span class="code">get-childitem  -recurse</span> instead:</p>
<p class="code">PS C:\&gt; get-childitem * -include *.csv -recurse | remove-item</p>
<p>Remove a  variable called $myVar:</p>
<p class="code">PS C:\&gt; remove-item variable:myVar</p>
<p>Delete an alias named 'list'</p>
<p><span class="code">PS C:\&gt; Remove-item alias:list</span></p>
<p>Delete the 'demo' registry key and all of its subkeys and values:</p>
<p class="code">PS C:\&gt; remove-item hklm:\software\SS64\demo -recurse</p>
<p class="quote"><i>“It devoured my paper, it was a really good paper” ~ <a href="http://en.wikipedia.org/wiki/Ellen_Feiss">Ellen Feiss</a></i></p>
<p><b>Related:</b><br>
<br>
<a href="clear-item.html">Clear-item</a> - Remove content from a variable or an alias<br>
<a href="get-item.html">Get-item</a> - Return an object that represents an item in a namespace<br>
<a href="invoke-item.html">invoke-item</a> - Invoke an executable or open a file (START)<br>
<a href="move-item.html">Move-item</a> - Move an item from one location to another<br>
<a href="new-item.html">New-item</a> ni Create a new item in a namespace<br>
<a href="set-item.html">Set-item</a> - Set the value of a provider pathname<br>
<a href="rename-item.html">Rename-item</a> - Change the name of an existing item<br>
Equivalent bash command:<a href="../bash/export.html"> 
  </a><a href="../bash/rm.html">rm</a> - Remove files</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-item.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

