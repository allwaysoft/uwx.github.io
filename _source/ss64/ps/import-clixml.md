---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Import-Clixml</h1> 
<p>Import a CLIXML file and create corresponding objects within PowerShell.</p>
<pre>Syntax
      Import-Clixml [-path] <i>string</i>[] [<i>CommonParameters</i>]]

Key
   -Path <i>string</i>[]
       The path to the XML files {may be piped}

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Examples</b></p>
<p>Save a serialized copy of process information to an XML file, then use Import-Clixml to retrieve the contents of the  file and recreate as an object stored in the $processes variable.</p>
<p><span class="code">PS C:&gt; get-process | export-clixml proc.xml<br>
    $processes = import-clixml proc.xml</span><br>
<i><br>
<span class="quote">“The real danger is the gradual erosion of individual liberties through the automation, integration, and interconnection of many small, separate record-keeping systems, each of which alone may seem innocuous, even benevolent, and wholly justifiable” ~ U.S. Privacy Protection Study Commission, 1977</span></i></p>
<p><b>Related:</b></p>
<p>  <a href="export-clixml.html">export-clixml</a> - Produce a clixml representation of PowerShell objects<br>
<a href="export-csv.html">export-csv</a> - Export to Comma Separated Values (spreadsheet)<br>
<a href="convertto-html.html">convertTo-Html</a> - Convert the input into an HTML table</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

