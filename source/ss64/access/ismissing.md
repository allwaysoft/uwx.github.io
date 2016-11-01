---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>IsMissing</h1>
<p>  Return  TRUE if the optional variant argument has been passed to a procedure.</p>
<pre>Syntax
      IsMissing(<i>argname</i>)

Key
   <i>argname</i>    The name of an optional variant procedure argument.</pre>
<p>The IsMissing() function can be used in VBA.</p>
<p><b>Examples</b></p>
<p><span class="code">Function Demo1 (Optional ArgA)<br> 
If IsMissing(ArgA) Then <br>
&nbsp;Msgbox "Value not supplied", vbOKCancel, "SS64 IsMissing Demo"<br>
</span><span class="code">End If</span><span class="code"></span></p>
<p class="quote">“Sometimes only one person is missing and the whole world seems depopulated” ~ Alphonse de Lamartine</p>
<p><b>Related:</b></p>
<p><a href="isnull.html">IsNull</a> - Is <i>expression</i> NULL? True/False<br>
<a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

