---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-Content</h1> 
<p>Write or replace the content in an item.</p>
<pre>Syntax
      Set-Content <b>[</b>[[-path] <b>|</b> [-literalPath] ]<i> string</i>[] <b>]</b>
         [-value] <i>Object</i>[] [-include <i>string</i>[]] [-exclude <i>string</i>[]] 
            [-filter <i>string</i>] [-Encoding <i>CharSet</i>]
               [-passThru] [-force] [-credential <i>PSCredential</i>]
                  [-whatIf] [-confirm] [-UseTransaction] [<i>CommonParameters</i>]
Key
   -Path <i>string</i>
       The path to the item that will receive the content.
       Wildcards are permitted.

   -LiteralPath <i>string</i>
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.

   -Value <i>Object</i>
       The new content for the item.

   -Include <i>string</i>
       Change only the specified items in the Path. 
       Wildcards are permitted. e.g. "*.txt"

   -Exclude <i>string</i>
       Omit the specified items, this qualifies the -Path parameter. 
       Wildcards are permitted. e.g. "*.log"

   -Filter <i>string</i>
       A filter in the provider's format or language. 
       The exact syntax of the filter (wildcard support etc) depends on the provider.
       Filters are more efficient than -include/-exclude, because the provider
       applies the filter when retrieving the objects, rather than having 
       PowerShell filter the objects after they are retrieved.

   -PassThru 
       Pass the object created by Set-Content through the pipeline.

   -Force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. Force will create file path directories 
       or ignore a files read-only attribute, but will not override security permissions.

   -Credential <i>PSCredential</i>
       Present a user/password credential to validate access to the file.
       This is not yet supported in any Windows PowerShell core commands.

   -WhatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   -Confirm
       Prompt for confirmation before executing the command.

   -Encoding <i>CharSet</i>[<b>Dynamic Parameter (FileSystem Only)</b>]
       Encode in a specific character set:
           Unknown           Unknown or invalid. The data can be treated as binary.
           String            Use the encoding type for a string.                
           Unicode           UTF-16 format little-endian byte order.
           Byte              Encode characters as a sequence of bytes.
           BigEndianUnicode  UTF-16 format big-endian byte order.
           UTF8              UTF-8 format.
           UTF7              UTF-7 format.
           ASCII             ASCII (7-bit) character set.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> Standard <a href="get-alias.html">Aliases</a> for Set-Content:<span class="code"> <b>sc</b></span></p>
<p><b>Examples</b></p>
<p>Write a string into a text file:</p>
<p><span class="code">PS C:\&gt; Set-content -path C:\test.txt -value "Hello World"</span><br>
<br>
Write the current date into a CSV file:</p>
<p class="code">PS C:\&gt; get-date | set-content C:\Test_date.csv</p>
<p>Change the format of a file from ASCII to UTF8:</p>
<p><span class="code">$filename = "c:\docs\demo.csv"<br>
  (Get-Content $filename) | Set-Content $filename -Encoding UTF8 </span><br>
</p>
<p>Edit &amp; Replace some text in every line of the file foo.txt :</p>
<p class="code">PS C:\&gt; (get-content foo.txt) | foreach-object {$_ -replace "oldTxt", "newTxt"} | set-content foo.txt</p>
<p>The parentheses around (Get-Content) ensure that the Get operation is completed before the Set operation begins, wthout this the two functions would both try to access the file at the same time.</p>
<p class="quote"><i>“A man should hear a little music, read a little poetry, and see a
fine picture every day of his life, in order that worldly cares may
not obliterate the sense of the beautiful which God has implanted in
the human soul” ~ Goethe</i></p>
<p><b>Related:</b><br>
<br>
<a href="add-content.html">Add-Content</a> - Add to the content of the item<br>
<a href="get-content.html">Get-Content</a> - Get the content of the item at the specified location.<br>
<a href="clear-content.html">Clear-Content</a> - Remove content from a file /item. <br>

<a href="set-item.html">Set-Item</a> - Change the value of an item<br>
<a href="get-help.html">get-help</a> - about_namespace</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-content.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

