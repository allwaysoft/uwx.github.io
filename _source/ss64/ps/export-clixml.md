---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Export-Clixml</h1>
<p>Export to an XML file,  any text string or PowerShell object can be represented in XML.</p>
<pre>Syntax
      Export-Clixml [-path] <i>string</i> -inputObject <i>psobject</i>
         [-depth <i>int</i>] [-force] [-encoding <i>string</i>]
            [-noClobber] [-whatIf] [-confirm] [CommonParameters]

Key
   -Path <i>string
  </i>      The XML file to be created.

   -inputObject <i>psobject</i>
        The object to be converted. {may be piped}
        A variable containing the object(s) 
        or a command/expression that returns the object(s).

   -depth <i>int</i> 
        How many levels of contained objects to include in the XML
        A depth of 1 will include Object &gt; properties
        a depth of 2 will include Object &gt; properties &gt;Objects &gt;Properties
        and so on *

   -force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. Force will override a files read-only attribute,
       but will attempt to reset the read-only attribute when the command completes.

    -noClobber
       Do not overwrite the contents of an existing file.
       The default is to overwrite without warning.

    -encoding <i>string</i>
       The type of encoding for the target file. Valid values are:
       ASCII, <u>UTF8</u>, UTF7, UTF32, Unicode, BigEndianUnicode, Default, and OEM.

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   -confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> * If the object being exported has a type-specific depth (specified in the *.types.psxml file), then that depth will be used unless you specify the -Depth parameter.</p>

<p><b>Examples</b></p>
<p>Create an XML file that represents  the string, "This text will become XML"</p>
<p><span class="code">PS C:&gt; "This text will become XML" | export-clixml c:\SimpleDemo.xml</span><br>
  <br>
  Use <span class="code">Get-Acl </span>to retrieve an object containg the ACLs (security descriptors) for a file, and pipe the result into an XML file.</p>
<p class="code">PS C:&gt; get-acl C:\ss64.txt | export-clixml -Path E:\ss64_acl.xml</p>
<p>Retrieve the ACL object from a saved XML file and store in the variable $my_acl:</p>
<p class="code">PS C:&gt; $my_acl = import-clixml E:\ss64_acl.xml</p>
<p class="quote"><i>"Beware the man of one book" ~ St. Thomas Aquinas</i></p>
<p><b>Related:</b></p>
<p><a href="import-clixml.html">import-clixml</a> - Import a clixml file and rebuild the PS object<br>
<a href="export-csv.html">export-csv</a> - Export to Comma Separated Values (spreadsheet)<br>    
<a href="convertto-html.html">convertTo-Html</a> - Convert the input into an HTML table</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="export-clixml.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

