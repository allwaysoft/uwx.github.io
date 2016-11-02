---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-UICulture</h1> 
<p>Get information about the current User Interface Culture for  PowerShell</p>
<pre>Syntax
      Get-UICulture [<i>CommonParameters</i>]

Key
   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Examples</b></p>
<p>Get  the current UI culture information:</p>
<p><span class="code">PS C:\&gt;get-uiculture<br>
PS C:\&gt;get-uiculture | format-list *</span></p>
<p>List all the properties available:</p>
<p class="code">PS C:\&gt;Get-UICulture | Get-Member</p>
<p>Displays the  Calendar property/short date pattern:</p>
<p class="code">PS C:\&gt;(get-uiculture).calendar<br>
PS C:\&gt;(get-uiculture).datetimeformat.shortdatepattern</p>
<p class="quote"><i>"The great law of culture is: Let each become all that he was created capable of
becoming"
~ Carlyle</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="get-culture.html">Get-Culture</a> - Get region information (language and keyboard layout)</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

