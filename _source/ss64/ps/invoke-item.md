---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Invoke-Item</h1> 
<p>Invoke the (provider-specific) default action on an item (like a <a href="../nt/start.html">START</a> command or double click.) This will force the default action to be run on the item. For example a .PDF file will open  in whatever program is associated with PDF files.</p>
<pre>Syntax
      Invoke-Item  <b>{</b> [-path] <i>string</i>[] <b>|</b> [-literalPath] <i>string</i>[] <b>}</b>
         [-include <i>string</i>[]] [-exclude <i>string</i>[]]
            [-filter <i>string</i>] [-whatIf] [-confirm] [-UseTransaction]
               [-credential <i>PSCredential</i>] [<i>CommonParameters</i>]

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

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.
        
   -confirm
       Prompt for confirmation before executing the command.

   -credential <i>PSCredential</i>
       Use a credential to validate access to the file. <i>Credential</i> represents
       a user-name, such as "User01" or "Domain01\User01", or a PSCredential
       object, such as the one retrieved by using the Get-Credential cmdlet.
       If you type a user name, you will be prompted for a password.
       This parameter is not supported by any PowerShell core cmdlets or providers.
 
   -UseTransaction
       Include the command in the active transaction.
       This parameter is valid only when a transaction is in progress.
       For more, see help about_Transactions.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Standard <a href="get-alias.html">Aliases</a> for Invoke-Item:<span class="code"> <b>ii</b></span></p>
<p><b>Examples</b></p>
<p>Opens a file in Microsoft Word:</p>
<p><span class="code">PS C:\&gt; invoke-item C:\finances.doc</span><br>
  <br>
  Open multiple Excel spreadsheets at once by using a wildcard:</p>
<p class="code">PS C:\&gt; invoke-item "F:\My Documents\*.xls"</p>
<p class="quote"><i>“Do not run; scorn running with thy heels” ~ Shakespeare, The Merchant of Venice</i></p>
<p><b>Related:</b></p>
<p><a href="invoke-command.html">Invoke-Command</a> -   Run commands on local and remote computers.<br>
<a href="invoke-expression.html">Invoke-Expression</a> - Run a PowerShell expression.<br>
<a href="invoke-history.html">Invoke-History</a> - Invoke a previously executed Cmdlet.<br>
<a href="clear-item.html">clear-item</a> - Remove content from a variable or an alias.<br>
<a href="move-item.html">move-item</a> - Move an item from one location to another.<br>
<a href="new-item.html">new-item</a> - Create a new item in a namespace.<br>
<a href="remove-item.html">remove-item</a> - Remove an item.<br>
<a href="rename-item.html">rename-item</a> - Change the name of an existing item.<br>
<a href="set-item.html">set-item</a> - Set the value of a provider pathname.<br>
<a href="source.html">. (source)</a> - Run a command script in the current shell (persist variables and functions.)<br>
<a href="call.html">&amp; (call)</a> - Run a command script.<br>
<a href="stop-parsing.html">--% </a> - Stop parsing input<br>
Equivalent Windows CMD command:<a href="../bash/export.html"> </a><a href="../nt/start.html">START</a> - Execute a command.<br>
Equivalent bash command: <a href="../bash/exec.html">exec</a> - Execute a command.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

