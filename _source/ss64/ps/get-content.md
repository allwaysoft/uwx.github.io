---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Content</h1> 
<p>Get the content of the item at the specified location. Get-Content   reads the content one line at a time and returns an object for each line.</p>
<pre>Syntax
      Get-Content <b>[</b> [-path] <b>|</b> -literalPath <b>]</b> <i>string</i>[]
         [-ReadCount <i>Int64</i>] [-TotalCount <i>Int64</i>]
            [-include <i>string</i>[]] [-exclude <i>string</i>[]] [-filter <i>string</i>]
               [-force] [-credential <i>PSCredential</i>]
                  [-Encoding] [-Delimiter <i>String</i>] [-Wait] [<abbr title="PS 3.0">-Raw</abbr>]
                     [-UseTransaction] [<i>CommonParameters</i>]

Key
   -Path <i>string</i>
       The paths to the items from which content is to be retrieved.
       Wildcards are permitted.

   -LiteralPath <i>string</i>
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.

   -TotalCount <i>Int64</i>
       Number of lines of content to retrieve. The default is -1 (all lines).

   -ReadCount <i>Int64</i>
       Send <i>n</i> lines of content through the pipeline at a time.
       The default is 1, a value of 0 sends all the content at once. 
        
       A low value for ReadCount will return the first line quickly,
       to minimise the total time for the operation choose a high value.

   -Include <i>string</i>
       Retrieve only the specified items from the Path. 
       Wildcards are permitted. e.g. "*.txt"

   -Exclude <i>string</i>
       Omit the specified items from the Path (this qualifies the Path parameter)
       Wildcards are permitted. e.g. "*.log"

   -Filter <i>string</i>
       A filter in the provider's format or language. 
       The exact syntax of the filter (wildcard support etc) depends on the provider.
       Filters are more efficient than -include/-exclude, because the provider
       applies the filter when retrieving the objects, rather than having 
       PowerShell filter the objects after they are retrieved.

   -Force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. Force will create file path directories 
       or override a files read-only attribute, but will not change file permissions.

   -Credential <i>PSCredential</i>
       Present a user/password credential to validate access to the file.
       This is not yet supported in any Windows PowerShell core commands.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   -Encoding <i>CharSet</i>  [<b>Dynamic Parameter (FileSystem Only)</b>]
       Encode in a specific character set:
           Unknown           Unknown or invalid. The data can be treated as binary.
           String            Use the encoding type for a string.                
           Unicode           UTF-16 format little-endian byte order.
           Byte              Encode characters as a sequence of bytes.
           BigEndianUnicode  UTF-16 format big-endian byte order.
           UTF8              UTF-8 format.
           UTF7              UTF-7 format.
           ASCII             ASCII (7-bit) character set.

   -Delimiter <i>String</i>  [<b>Dynamic Parameter (FileSystem Only)</b>]
      The delimiter to use when reading the file. The default is "\n" (end of line).

   -Raw
      Return multiple lines as a single string (PowerShell 3.0)
      In PowerShell 2.0 use the static method: [System.IO.File]::ReadAllText(<i>string path</i>)

   -Wait  [<b>Dynamic Parameter (FileSystem Only)</b>]
      Wait for content to be appended to the file.
      If content is appended, the appended content is returned. If the content is changed,
      the entire file is returned.  When waiting, Get-Content checks the file once each second until
      interrupted with CTRL+C.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Get-Content:<span class="code"> cat, type,<b> gc</b></span></p>
<p>Get-Content  gets the content of the item at the location specified, such as the text in a file. <br>
</p>
<p>By default PowerShell will read the content <b>one line at a time </b>and return a <i>collection </i>of System.String objects. <br>
Carriage returns (CR/LF) are stripped from the original file but when PowerShell displays a collection of strings, it will re-insert carriage returns so that the display will look just like the original file.</p>
<p>If you specify <span class="code">-raw</span>, this behaviour is reversed and the entire file will be read at once.</p>
<h2>Small files</h2>
<blockquote>
<p>If the file is small enough to be mounted in memory, then <a href="select-string.html">Select-String</a> will be much faster, there is no need to Get-Content and then pipe into Select-String, you can just pipe it directly.</p>
</blockquote>
<h2>Large files /StreamReader</h2>
<blockquote>
<p>When working with a large file (or a lot of small files) a faster option is the .Net StreamReader</p>
<pre>$file = new-object System.IO<b>.StreamReader(</b>"C:\demo\large_file.txt"<b>)</b>
<a href="try.html">try</a> {
    while (($line = $file.ReadLine()) -ne $null) {
       # do something with $line here
       $line
    }
}
finally {
    $file.Close()
}</pre>
</blockquote>
<p><b>Examples</b></p>
<p>Display the content of  a file on the console (via the pipeline):</p>
<p><span class="code">PS C:\&gt; get-content -Path C:\myFile.txt</span><br>
<br>Get   the first 50 lines from one file and write into another file:</p>
<p class="code">PS C:\&gt; get-content C:\Logs\BigLogfile.txt -totalcount 50 | set-content c:\Logs\top50.txt</p>
<p>Get the first 50 lines from one file and then uses array notation to get the last line (indicated by "-1") of the resulting set:</p>
<p class="code">PS C:\&gt; (get-content C:\Logs\Logfile.txt -totalcount 50)[-1]</p>
<p>Show the tail end of a log file in realtime:</p>
<p class="code">PS C:\&gt; Get-Content C:\Logs\Logfile.txt -Wait </p>
<p>Filter the log   using a <span class="code">-match</span> <a href="syntax-regex.html">regular expression</a>:</p>
<p class="code">PS C:\&gt; Get-Content C:\Logs\Logfile.txt -wait | where { $_ -match "WARNING" }</p>
<p>To return a single string for an entire file, several methods can be used:</p>
<p class="code">PS C:\&gt; $text = ((Get-Content -Path sample.txt -ReadCount 0) <a href="syntax-methods.html">-join</a> "<a href="syntax-esc.html">`r`n</a>") + "`r`n"</p>
<p class="code">PS C:\&gt; $text = Get-Content -Path sample.txt | Out-String</p>
<p><span class="code">PS C:\&gt; </span><span class="code">[System.Io.File]::ReadAllText("c:\demo\sample.txt")</span></p>
<p><span class="code">PS C:\&gt; $text = Get-Content -Path sample.txt -raw</span></p>
<p class="quote"><i>“It is impossible to write ancient history because we do not have enough sources, and impossible to write modern history because we
 have far too many” ~ Charles Peguy</i></p>
<p><b>Related:</b><br>
<br>
<a href="add-content.html">Add-Content</a> - Add to the content of the item<br>
<a href="set-content.html">Set-Content</a> - Set content in the item (specific location)<br>
<a href="clear-content.html">Clear-Content</a> - Remove content from a file /item. <br>
<a href="get-item.html">Get-Item</a> - Get a file object or get a registry (or other namespace) object<br>
<a href="replace.html">Replace</a> - Search and Replace in strings and files<br>
<a href="get-help.html">help</a>  about_namespace</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-content.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
