---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-ItemProperty</h1> 
<p>Set a new property, for an item at a given location.</p>
<pre>Syntax
      New-ItemProperty { [-path] <i>string</i>[] | [-literalPath] <i>string</i>[] }
         [[-name] <i>string</i>[]] [-propertyType <i>string</i>] [-value <i>Object</i>] 
            [-include <i>string</i>[]] [-exclude <i>string</i>[]]
               [-filter <i>string</i>] [-force] [-credential <i>PSCredential</i>]
                   [-whatIf] [-confirm] [-UseTransaction] [<i>CommonParameters</i>]

Key
   -path <i>string</i>
       The path(s) to the item for which a new property is to be created.
       Wildcards are permitted.

   -literalPath <i>string</i>
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.

   -name <i>string</i>
       The name of the property to create.

   -propertyType <i>string</i>
       The Type of the property.

   -value <i>Object</i>
       The Value of the property.

   -include <i>string</i>
       Include only the specified items from the Path. e.g. "May*"
       this only works when the path includes a wildcard character.
        
   -exclude <i>string</i>
       Omit the specified items from the Path e.g. "*SS64*"
       this only works when the path includes a wildcard character.
        
   -filter <i>string</i>
       A filter in the provider's format or language. 
       The exact syntax of the filter (wildcard support etc) depends on the provider.
       Filters are more efficient than -include/-exclude, because the provider
       applies the filter when retrieving the objects, rather than having 
       PowerShell filter the objects after they are retrieved.

   -force 
       Override restrictions such as renaming existing files as long
       as security is not compromised.

   -credential <i>PSCredential</i>
       Use a credential to validate access to the file. <i>Credential</i> represents
       a user-name, such as "User01" or "Domain64\User64", or a PSCredential
       object, such as the one retrieved by using the Get-Credential cmdlet.
       If you type a user name, you will be prompted for a password.

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
<p>
  <b>Examples</b></p>
<p>Add a new int property named "Demo" to HKLM\Software\SS64App:</p>
<p><span class="code">PS HKLM:\Software&gt; new-itemproperty SS64App -name Demo -Type int -Value 1</span></p>
<p>Disable UAC (<a href="../nt/syntax-uac.html">User Account Control</a>) </p>
<p><span class="code">PS HKLM:\&gt; New-ItemProperty "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" -Name "ConsentPromptBehaviorAdmin" -Value 00000000 -PropertyType "DWord"</span><br>
  <br>
<i class="quote">“All good things are wild and free” ~ Henry David Thoreau</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="clear-itemproperty.html">Clear-ItemProperty</a> - Delete the value of a property<br>
<a href="copy-itemproperty.html">Copy-ItemProperty</a> - Copy a property along with its value<br>
<a href="get-itemproperty.html">Get-ItemProperty</a> - Retrieve the properties of an object<br>
<a href="move-itemproperty.html">Move-ItemProperty</a> - Move a property from one location to another<br>
<a href="new-item.html">New-Item</a> - Create a new item in a namespace<br>
<a href="remove-itemproperty.html">Remove-ItemProperty</a> - Delete the property and its value from an item<br>
<a href="rename-itemproperty.html">Rename-ItemProperty</a> - Rename a property of an item<br>
<a href="set-itemproperty.html">Set-ItemProperty</a> - Set the value of a property</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="new-itemproperty.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

