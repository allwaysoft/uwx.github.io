---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Move-ItemProperty</h1> 
<p>Move a property from one location to another.</p>
<pre>Syntax
      Move-ItemProperty { [-path] <i>string</i>[] | [-literalPath] <i>string</i>[] }
         [[-destination] <i>string</i>] [-name] <i>string</i>[]
            [-include <i>string</i>[]] [-exclude <i>string</i>[]]
               [-filter <i>string</i>] [-force] [-passThru] [-whatIf] [-confirm]
                  [-credential <i>PSCredential</i>] [-UseTransaction][<i>CommonParameters</i>]

Key
   -path <i>string</i>
       The path(s) to the items. Wildcards are permitted.
       Use a dot (.) to specify the current location. 
       Use the wildcard (*) to specify all items in the current location.

   -literalPath <i>string</i>
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.

   -destination <i>string</i>
       The path to the location where the items are to be moved.
       (default = current directory)
       Wildcards are permitted, but the result must specify a single location.
       To rename the item being moved, specify a new name in the value of Destination.

   -name <i>string</i>
       The name of the property to be moved.

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
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. Force will create file path directories 
       or override a files read-only attribute, but will not change file permissions.

   -passThru
       Pass the object created by this cmdlet through the pipeline.

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.
        
   -confirm
       Prompt for confirmation before executing the command.

   -credential <i>PSCredential</i>
       Use a credential to validate access to the file. <i>Credential</i> represents
       a user-name, such as "User01" or "Domain64\User64", or a PSCredential
       object, such as the one retrieved by using the Get-Credential cmdlet.
       If you type a user name, you will be prompted for a password.
       This parameter is not supported by any PowerShell core cmdlets or providers.
 
   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Standard <a href="get-alias.html">Aliases</a> for New-ItemProperty:<span class="code"> <b>mp</b></span></p>
<p><b>Examples</b></p>
<p>Move the "install_date" registry value, and its data to a different registry subkey location:</p>
<p><span class="code">PS C:\&gt; move-itemproperty HKLM:\Software\SS64\Demo1 `<br>
-Name install_date -Destination HKLM:\Software\SS64\Demo2</span><br>
  <br>
<i class="quote">#So pack your toys away, Your old tie-dyes away, You're moving out today# - Carole Bayer Sager</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="clear-itemproperty.html">Clear-ItemProperty</a> - Delete the value of a property<br> 
<a href="copy-itemproperty.html">Copy-ItemProperty</a> - Copy a property along with its value<br>
 <a href="get-itemproperty.html">Get-ItemProperty</a> - Retrieve the properties of an object<br>
<a href="move-item.html">Move-Item</a> - Move an item from one location to another<br>
 <a href="new-itemproperty.html">New-ItemProperty</a> - Set a new property of an item at a location<br>
 <a href="remove-itemproperty.html">Remove-ItemProperty</a> - Delete the property and its value from an item<br>
 <a href="rename-itemproperty.html">Rename-ItemProperty</a> - Rename a property of an item<br>
 <a href="set-itemproperty.html">Set-ItemProperty</a> - Set the value of a property<br>
help about_namespace</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="move-itemproperty.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

