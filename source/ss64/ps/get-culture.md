---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Culture</h1> 
<p>Get  information about  regional settings e.g. current language and keyboard layout.</p>
<pre>Syntax
      Get-Culture [<i>CommonParameters</i>]
key

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Example</b></p>
<p>This demonstrates drilling down and displaying the properties and sub-properties of the object.</p>
<p class="code">PS C:\&gt; $c = get-culture<br>
PS C:\&gt; $c | format-list -property *<br>
PS C:\&gt; $c.calendar<br>
PS C:\&gt; $c.datetimeformat<br>
PS C:\&gt; $c.datetimeformat.firstdayofweek</p>

<p>Return type:<br>
System.Globalization.CultureInfo object</p>
<p class="quote"><i>“The eternally incomprehensible thing about the world is that it is comprehensible” ~ Albert Einstein</i></p>
<p><b>Related:</b></p>
<p>  <a href="get-uiculture.html">Get-UICulture</a> - Get  ui culture information</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-culture.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

