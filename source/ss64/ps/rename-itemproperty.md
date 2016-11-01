---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Rename-ItemProperty</h1> 
<p>Rename a property of an item, the <i>value </i>of the property is not changed.</p>
<pre>Syntax
      Rename-ItemProperty <b>{</b> [-path] <i>string</i>[] <b>|</b> [-literalPath] <i>string</i>[] <b>}</b>
             [[-name] <i>string</i>[]] [-newName] <i>string</i>
                [-passThru] [-force] [-filter <i>string</i>] 
                   [-include <i>string</i>[]] [-exclude <i>string</i>[]]
                      [-credential <i>PSCredential</i>] [-whatIf]
                         [-confirm] [-UseTransaction] [<i>CommonParameters</i>]

Key
   -Path <i>string</i>
       The path(s) to the item to be renamed. Wildcards are permitted.

   -LiteralPath <i>string</i>
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.

   -Name <i>string</i>
       The name(s) of the property to rename.

   -NewName <i>string</i>
       The new name for the property.

   -PassThru 
       Pass the object created by Rename-ItemProperty along the pipeline. 

   -Force
       Override restrictions that prevent the command from succeeding, apart
       from security settings.

   -Filter <i>string</i>
       A filter in the provider's format or language. 
       The exact syntax of the filter (wildcard support etc) depends on the provider.
       Filters are more efficient than -include/-exclude, because the provider
       applies the filter when retrieving the objects, rather than having 
       PowerShell filter the objects after they are retrieved.

   -Exclude <i>string</i>
       Omit the specified items from the Path e.g. "*SS64*"
       this only works when the path includes a wildcard character.

   -include <i>string</i>
       Include only the specified items from the Path. e.g. "May*"
       this only works when the path includes a wildcard character.
         
   -Credential <i>PSCredential</i>
       Use a credential to validate access to the file. <i>Credential</i> represents
       a user-name, such as "User64" or "Domain64\User64", or a PSCredential
       object, such as the one retrieved by using the Get-Credential cmdlet.
       If you type a user name, you will be prompted for a password.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing it.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Standard <a href="get-alias.html">Aliases</a> for Rename-ItemProperty:<span class="code"> <b>rnp</b></span></p>
<p><b>Examples</b></p>
<p>Rename the config registry entry contained in the HKLM\Software\SS64 key to oldconfig:</p>
<p><span class="code">PS C:\&gt; rename-itemproperty -path HKLM:\Software\SS64 `<br>
-name config -newname oldconfig</span><br>
  <br>
<i class="quote">"It is the final proof of God's omnipotence that he need not exist in order to
save us" ~ Peter De Vries</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="clear-itemproperty.html">Clear-ItemProperty</a> - Delete the value of a property<br>
<a href="copy-itemproperty.html">Copy-ItemProperty</a> - Copy a property along with its value<br>
<a href="get-itemproperty.html">Get-ItemProperty</a> - Retrieve the properties of an object<br>
<a href="move-itemproperty.html">Move-ItemProperty</a> - Move a property from one location to another<br>
<a href="new-itemproperty.html">New-ItemProperty</a> - Set a new property of an item at a location<br>
<a href="remove-itemproperty.html">Remove-ItemProperty</a> - Delete the property and its value from an item<br>
<a href="rename-item.html"><b>Rename-Item</b></a> - Change the name of an existing item<br>
<a href="set-itemproperty.html">Set-ItemProperty</a> - Set the value of a property</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

