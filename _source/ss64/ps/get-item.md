---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Item</h1> 
<p>Get a file/registry object (or any other namespace object)</p>
<pre>Syntax
      Get-Item { [-path] <i>string</i>[] | [-literalPath] <i>string</i>[] }
         [-include <i>string</i>[]] [-exclude <i>string</i>[]]
            [-filter <i>string</i>] [-force] [-credential <i>PSCredential</i>] 
               [-UseTransaction] [<i>CommonParameters</i>]

Key
   -path <i>string</i>
       The path(s) to the items. Wildcards are permitted.
       Use a dot (.) to specify the current location. 
       Use the wildcard (*) to specify all items in the current location.

   -literalPath <i>string</i>
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.

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

   -credential <i>PSCredential</i>
       Use a credential to validate access to the file. <i>Credential</i> represents
       a user-name, such as "User01" or "Domain01\User01", or a PSCredential
       object, such as the one retrieved by using the Get-Credential cmdlet.
       If you type a user name, you will be prompted for a password.
       This parameter is not supported by any PowerShell core cmdlets or providers.
 
   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Get-Item:<span class="code"> <b>gi</b></span></p>
<p><b>Examples</b></p>
<p>Get the current directory. This represents the <i>item</i> at the current location (not its contents).<br>
<span class="code">PS C:\&gt; get-item .</span><br>
<br>
Get the root directory of the C: drive. This represents only the directory, not its contents:<br>
<span class="code">PS C:\&gt; get-item C:\</span>
</p><p>Get all items in the current directory. :<br>
<span class="code">PS C:\&gt; get-item *</span>
</p><p>Get all items in the C: drive:<br>
<span class="code">PS C:\&gt; get-item C:\*</span>
</p><p>List all properties of C:\Windows:<br>
<span class="code">PS C:\&gt; (Get-Item C:\Windows) | Get-Member</span></p><p>Get the LastAccessTime property of  C:\Windows:<br>
<span class="code">PS C:\&gt; (get-item C:\Windows).LastAccessTime</span>
</p><p>Get a registry key.:<br>
<span class="code">PS C:\&gt; get-item hklm:\software\microsoft\exchange</span>
</p><p>Get-Item will get registry keys and subkeys, but you must use <a href="get-itemproperty.html">Get-ItemProperty</a> to get the registry values and data.</p>
<p>In PowerShell, use a single asterisk (*) to get contents, instead of the traditional *.*<br> 
The format is interpreted literally, so *.* would not retrieve directories or file names without a dot.</p>
<p class="quote"><i>#If you want it, here it is, come and get it, but you better hurry 'cos it's going fast# ~ <a href="http://en.wikipedia.org/wiki/Come_and_Get_It_(song)">Paul McCartney</a> </i></p>
<p><b>Related:</b></p>
<p><a href="get-childitem.html">Get-ChildItem</a> - Get child items (contents of a folder or registry key)<br>
<a href="clear-item.html">Clear-item</a> - Remove content from a variable or an alias<br>
<a href="copy-item.html">Copy-Item</a> - Copy an item from a namespace location<br>
<a href="get-itemproperty.html">Get-ItemProperty</a> - Retrieve the properties of an object<br>
<a href="invoke-item.html">Invoke-item</a> - Invoke an executable or open a file (START)<br>
<a href="move-item.html">Move-item</a> - Move an item from one location to another<br>
<a href="new-item.html">New-item</a> - Create a new item in a namespace<br>
<a href="set-item.html">Set-item</a> - Set the value of a provider pathname<br>
<a href="remove-item.html">Remove-item</a> - Remove an item<br>
<a href="rename-item.html">Rename-item</a> - Change the name of an existing item</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-item.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

