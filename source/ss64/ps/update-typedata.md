---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Update-TypeData</h1> 
<p>Update the current extended type configuration by reloading the *.types.ps1xml files into memory.</p>
<pre>Syntax
      Update-TypeData [[-AppendPath] <i>string</i>[]] [-PrependPath <i>string</i>[]]
               [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -AppendPath <i>string</i>[]
       Path to additional .ps1xml format files to be loaded. 
       These files will be processed in the order they are 
       specified and <b>after</b> the built-in files are loaded.

   -PrependPath <i>string</i>[]
       Path to additional .ps1xml format files to be loaded.
       These files will be processed in the order they are 
       specified and <b>before</b> the built-in files are loaded.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing it.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Extended type information is normally loaded when PowerShell requires the type information it contains.  Update-TypeData can be used to preload all type information. It is particularly useful when you are developing types and want to load those new types for testing purposes.</p>
<p><b>Examples</b></p>
<p>  Update the extended type configuration from the <span class="code">*.types.ps1xml</span> files:</p>
<p><span class="code">PS C:\&gt; update-typedata</span><br>
  <br>
  Update the extended type configuration from the <span class="code">*.types.ps1xml</span> files, processing the typesA and typesB files first:</p>
<p class="code">PS C:\&gt; update-typedata -prependpath typesA.types.Ps1xml, typesB.types.Ps1xml</p>
<p class="quote"><i>"It is relatively easy to design for the perfect cases, when everything goes right, or when all the information required is available in proper format" ~ Donald Norman</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="update-formatdata.html">Update-Formatdata</a> - Update and append format data files</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

