---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Select-XML</h1>
<p>Find text in an XML string or document using an XPath query.</p>
<pre>Syntax
      Select-XML -Content <i>string</i>[] [-Xpath] <i>string
        </i> [-Namespace <i>hashtable</i>] [<i>CommonParameters</i>]

      Select-XML [-Path] <i>string</i>[] [-Xpath] <i>string</i>
         [-Namespace <i>hashtable</i>] [<i>CommonParameters</i>]

      Select-XML [-Xml] <i>XmlNode</i>[] [-Xpath] <i>string</i>
         [-Namespace <i>hashtable</i>] [<i>CommonParameters</i>]

Key
   -Content <i>string</i>[]
       A string that contains the XML to search.
       You can also pipe strings to Select-XML.

    -Namespace <i>hashtable</i>
       A hash table of the namespaces used in the XML.
       Use the format @{<i>namespaceName</i> = <i>namespaceValue</i>}.

   -Path <i>path</i>
       The path and file names of the XML files to search.
       Wildcards are permitted.

   -Xml <i>XmlNode</i>[]<br>       One or more XML nodes.
       A Path or XML parameter is required in every command.<br>        <br>       An XML document will be processed as a collection of XML nodes.
       If an XML document is passed to Select-XML, each<br>       document node will be searched separately as it comes through the pipeline.<br>        <br>   -Xpath <i>string</i><br>       An XPath search query.
       The query language is case-sensitive. This parameter is required.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Examples</b></p>
<p>Search the Types.ps1xml file for child items of the AliasProperty node:</p>
<p><span class="code">C:\PS&gt; $path = "$env:windir\System32\WindowsPowerShell\v1.0\Types.ps1xml"<br>

C:\PS&gt; select-xml -path $path -xpath "/Types/Type/Members/AliasProperty"</span></p>
<p>Search in several XML files: </p>
<p><span class="code">C:\PS&gt; select-xml -path test*.xml, help.xml -xpath "/Tests/Test[1]/Name"</span></p>
<p> Pipe an XML document to Select-XML: </p>
<p><span class="code">C:\PS&gt; [xml]$Types = get-content "$env:windir\System32\WindowsPowerShell\v1.0\Types.ps1xml"<br>

C:\PS&gt; select-xml -xml $Types -xpath "//MethodName"</span></p>
<p class="quote"><i>"Content is king" - Webmonkey @Wired.com circa 1996 </i></p>
<p><b>Related:</b><br>
  <br>
<a href="convertto-xml.html">ConvertTo-Xml</a> - Convert the input into XML</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="select-xml.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

