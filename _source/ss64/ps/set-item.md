---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-Item</h1> 
<p>Change the value of an item.</p>
<pre>Syntax
      Set-Item <b>{</b> [-path] <i>string</i>[] <b>|</b> [-literalPath] <i>string</i>[] <b>}</b>  
          [[-value] <i>Object</i>] [-include <i>string</i>[]] [-exclude <i>string</i>[]]
             [-filter <i>string</i>] [-force] [-passThru] [-credential <i>PSCredential</i>]
                [-whatIf] [-confirm] [-UseTransaction] [<i>CommonParameters</i>]
Key
   -Path <i>string</i>
       The path(s) to the items. Wildcards are permitted.
       Use a dot (.) to specify the current location. 
       Use the wildcard (*) to specify all items in the current location.

   -LiteralPath <i>string</i>
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.

   -Value <i>Object</i>
       A new value for the item.

   -include <i>string</i>
       Include only the specified items from the Path. e.g. "May*"
       this only works when the path includes a wildcard character.
        
   -Exclude <i>string</i>
       Omit the specified items from the Path.
       Enter a path element or pattern, such as "*.txt". Wildcards are permitted.
        
   -Filter <i>string</i>
       A filter in the provider's format or language. 
       The exact syntax of the filter (wildcard support etc) depends on the provider.
       Filters are more efficient than -include/-exclude, because the provider
       applies the filter when retrieving the objects, rather than having 
       PowerShell filter the objects after they are retrieved.

   -Option <i>ScopedItemOptions</i>
       Possible values include None,ReadOnly,Constant,AllScope and Private.
       (only valid when used with the Alias or Function provider)

   -Force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. Force will create file path directories 
       or override a files read-only attribute, but will not change file permissions.

   -PassThru
       Pass an object representing the item to the pipeline.

   -Credential <i>PSCredential</i>
       Use a credential to validate access to the file. <i>Credential</i> represents
       a user-name, such as "User64" or "Domain64\User64", or a PSCredential
       object, such as the one retrieved by using the Get-Credential cmdlet.
       If you type a user name, you will be prompted for a password.
       This parameter is not supported by any PowerShell core cmdlets or providers.
 
   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Set-Item:<span class="code"> si</span></p>
<p><b>Examples</b></p>
<p>Set the AllScope and ReadOnly options for the "prompt" function:</p>
<p><span class="code">PS C:\&gt; set-item -path function:prompt -options "AllScope,ReadOnly"</span></p>
<p>Create an alias of "np" for Notepad:</p>
<p><span class="code">PS C:\&gt; set-item -path alias:np -value c:\windows\notepad.exe</span><br>
  <br>
Change the value of the "UserRole" environment variable to "Administrator":</p>
<p class="code">PS C:\&gt; set-item -path env:UserRole -value Administrator</p>
<p class="quote"><i>"More people are killed every year by pigs than by sharks, which shows just how good we are at evaluating risks" ~ Bruce Schneier</i></p>
<p><b>Related:</b></p>
<p>  <a href="set-content.html">Set-Content</a> - Set content in an item (specific location)<br>
  <a href="clear-item.html">Clear-item</a> - Remove content from a variable or an alias<br>
<a href="get-item.html">Get-item</a> - Return an object that represents an item in a namespace<br>
<a href="invoke-item.html">Invoke-item</a> - Invoke an executable or open a file (START)<br>
<a href="move-item.html">Move-item</a> - Move an item from one location to another<br>
<a href="new-item.html">New-item</a> - Create a new item in a namespace<br>
<a href="remove-item.html">Remove-item</a> - Remove an item<br>
<a href="rename-item.html">Rename-item</a> - Change the name of an existing item<br>
Equivalent bash command: <a href="../bash/builtin.html">builtin</a> - Run a shell builtin</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-item.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

