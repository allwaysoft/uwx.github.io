---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Add-Content </h1>
<p>Append content to a specified item or file. You can specify the content by typing the content in the command or by specifying an <i>object</i> that contains the content.</p>
<pre>Syntax
      Add-Content <b>[</b> [-path] <b>|</b> -literalPath <b>]</b> <i>string</i>[] [-value] <i>Object</i>[] 
         [-include <i>string</i>[]] [-exclude <i>string</i>[]]
            [-filter <i>string</i>] [-Encoding <i>CharSet</i>]
               [-passThru] [-force] [-credential <i>PSCredential</i>]
                  [-confirm] [-whatIf] [-UseTransaction] [<a href="common.html"><i>CommonParameters</i></a>]

      Add-Content [<b>-Encoding</b> {Unknown | String | Unicode | Byte | BigEndianUnicode
                            | UTF8 | UTF7 | UTF32 | Ascii | Default | Oem}]
         [-Force] [-Stream <i>string</i>]
            [-Confirm] [-WhatIf] [-UseTransaction] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -Path <i>path</i>
       The path to the item {may be piped} Wildcards are permitted.
       If you specify multiple paths, use commas to separate the paths.

   -LiteralPath <i>string</i>[]
       Path to the items. No wildcards.
       The value is used exactly as typed. 
       If the path includes escape characters, enclose it in single quotation marks.

   -Include <i>string</i>[]
       Qualify the Path parameter. Enter a path or wildcard pattern: "*.txt"

   -Exclude <i>string</i>[]
       Omit the specified items. Enter a path or wildcard pattern: "*.txt" 

   -Filter <i>string</i>[]
       A filter in the provider's format or language.
       The exact syntax of the filter (wildcard support etc) depends on the provider.
       Filters are more efficient than -include/-exclude, because the provider
       applies the filter when retrieving the objects, rather than having 
       PowerShell filter the objects after they are retrieved.     
 
  -Value <i>Object</i>[]
       The content to be added. Type a quoted string, such as "Sample text"
       or specify an object that contains content, such as the DateTime object
       that Get-Date generates. 
       You cannot specify the contents of a file by typing its path, because 
       the path is just a string, but you can use a <a href="get-content.html">Get-Content</a> command to get 
       the content and pass it to the Value parameter.

   -PassThru
       Pass the object created by this cmdlet through the pipeline.

   -Force
       Override restrictions that prevent the command from succeeding, just
       so the changes do not compromise security. For example, Force will
       override the read-only attribute or create directories to complete a
       file path, but it will not attempt to change file permissions.

   -Credential <i>PSCredential</i>
       Present a user/password credential to validate access to the file.
       This is not yet supported in any Windows PowerShell core commands.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing it.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

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

   -Stream <i>string</i>
        Add the content to the specified <a href="http://en.wikipedia.org/wiki/NTFS#Alternate_data_streams_.28ADS.29">alternate data stream</a>.
        If the stream does not yet, exist, Add-Content creates it.
        Enter the stream name. Wildcards are not supported.
        Stream is a dynamic FileSystem parameter (PowerShell 3.0+)

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Add-Content: <b><span class="code">ac</span></b></p>
<p><b>Examples</b></p>
<p>Add a text string to the end of every .TXT file in the current  directory:</p>
<p><span class="code">C:\PS&gt; add-content -path *.txt -value "This is the end"</span></p>
<p> Add the content of the file Cats.txt to the end of the file Pets.txt: </p>
<p><span class="code">C:\PS&gt; add-content -path pets.txt -value (get-content c:\docs\cats.txt)</span></p>
<blockquote>
<p>The parentheses above insure  <span class="code">Get-Content</span>  can complete before the <span class="code">Add-Content</span> starts. <br>
We specify <span class="code"> -value</span> to pass the contents of the file (rather than an object.)</p>
</blockquote>
<p>Add the current date to a logfile: </p>
<p><span class="code">C:\PS&gt; add-content -Path MyLogfile.txt -Value (get-date) -passthru</span><br>
<br>The -passthru option will <b>display</b> the  content as it is added, it actually passes an <i>object</i> through the pipeline, which by default is passed back to the command line.</p>
<p><i>“Content is king” - Webmonkey @Wired.com circa 1996 </i></p>
<p><b>Related:</b><br>
<br>
<a href="get-content.html">Get-Content</a> - Get content from item (specific location)<a href="set-content.html"><br>
Set-Content</a> - Set content in the item (specific location) <a href="clear-content.html"><br>
Clear-Content</a> - Remove content from a file/item<br>
<a href="syntax-esc.html">Escape characters, Delimiters and Quotes</a> - Add special characters (newlines, tabs etc) <br>
<a href="get-item.html">Get-Item</a> - Get a file object or get a registry (or other namespace) object<br>
<a href="get-help.html">get-help</a> - about_namespace</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

