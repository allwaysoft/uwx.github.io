---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Clear-Content</h1> 
<p>Delete all the contents of a file without deleting the file itself.</p>
<pre>Syntax
      Clear-Content [ [-path] | -literalPath ] <i>string</i>[]
         [-include <i>string</i>[]] [-exclude <i>string</i>[] ]
            [-filter <i>string</i>] [-force] [-credential <i>PSCredential</i>] [-whatIf]
               [-confirm] [-UseTransaction] [<i>CommonParameters</i>]


      Clear-Content [-Stream <i>string</i>] [<i>CommonParameters</i>]    (PowerShell 3.0+)

Key
   -path <i>string</i>[]
       The paths to the items (not containers) from which content is deleted.
       Wildcards are permitted.
       e.g., you may specify a path to one more files, but not a path to a folder.

   -literalPath <i>string</i>[]
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.

   -include <i>string</i>[]
       Clear only the specified items.  e.g. "*.txt"
       The value of this parameter qualifies the -Path parameter.

   -exclude <i>string</i>[]
       Omit the specified items.  e.g. "*.txt"
       The value of this parameter qualifies the -Path parameter.

   -filter <i>string</i>
       A filter in the provider's format or language.
       The value of this parameter qualifies the -Path parameter. 
       The exact syntax of the filter (wildcard support etc) depends on the provider.
       Filters are more efficient than -include/-exclude, because the provider
       applies the filter when retrieving the objects, rather than having 
       PowerShell filter the objects after they are retrieved.

   -Stream <i>string</i>
       Delete the content in the specified alternate data stream, but do not delete
       the alternate data stream. Enter the stream name. Wildcards are not supported.
       -Stream is a dynamic parameter that the FileSystem provider adds to the
       Set-Content cmdlet. This parameter works only in file system drives.
       You can use Clear-Content to clear the content of an alternate data stream. However,
       it is not the recommended way to eliminate security checks that block files
       that are downloaded from the Internet.
       If you verify that a downloaded file is safe, use <a href="unblock-file.html">Unblock-File</a>.

   -force <i>SwitchParameter</i>
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. Force will create file path directories 
       or override a files read-only attribute, but will not change file permissions.

   -credential <i>PSCredential</i>
       Uses a <i>credential</i> to validate access to the file. Credential represents
       a user-name, such as "User01" or "Domain01\User01", or a PSCredential
       object, such as the one retrieved using <a href="get-credential.html">Get-Credential</a>.
       This parameter is not supported by any providers installed with PowerShell.

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   -confirm
       Prompt for confirmation before executing the command.
 
   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction,
        -WarningVariable, -OutBuffer and -OutVariable</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Clear-Content: <span class="code"><b>clc</b></span></p>
<p><b>Example</b></p>
<p>Delete the content of all files in the temp directory with the ".log" file name extension,</p>
<pre>PS C:&gt; clear-content c:\Temp\* -filter *.log
</pre>
<p>Delete the content of all files in the temp directory with the ".log" file name extension, unless the file name includes  "ERR", then display what this command would do without actually changing anything (-whatif):</p>
<pre>PS C:&gt; Clear-Content c:\Temp\* -Include *.txt -Exclude *ERR* -WhatIf</pre>
<p class="quote"><i>"A matter that becomes clear ceases to concern us" ~ Nietzsche</i></p><p><b>Related:</b></p>
<p><a href="clear-item.html">Clear-Item</a> is similar to Clear-Content, but works on aliases and variables, instead of files.<br>
<a href="add-content.html">Add-Content</a> - Add to the content of the item<br>
Equivalent bash commands: <a href="../bash/useradd.html">useradd</a> - Create new user accounts</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clear-content.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

