---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-FormatData</h1> 
<p>Save formatting data from the current session to a  file.</p>
<pre>Syntax
      Get-FormatData [[-TypeName] <i>string</i>[]] [<i>CommonParameters</i>] 

Key:
   -TypeName <i>string</i>[]
       Get only the formatting data with the specified type names.
       Enter the type names. Wildcards are permitted.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Examples</b></p>
<p>Get all the formatting data in the session:</p>
<p class="code">PS C:&gt; get-formatdata</p>
<p>Get the formatting data items whose names begin with "Microsoft.Wsman":</p>
<p class="code">PS C:&gt; get-formatdata -typename Microsoft.Wsman*</p>
<p>Get  a formatting data object and examine its properties:</p>
<p class="code">PS C:&gt; $f = get-formatdata -typename helpinfoshort<br>
PS C:&gt; $f</p>
<p class="quote"><i>“What we imagine is order is merely the prevailing form of chaos” ~ Kerry Thornley</i></p>
<p><b>Related:</b></p>
<p><a href="export-formatdata.html">Export-FormatData</a> - Save formatting data from the current session</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-formatdata.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

