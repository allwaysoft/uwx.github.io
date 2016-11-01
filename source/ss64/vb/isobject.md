---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>IsObject</h1> 
<p> Returns a  Boolean value indicating whether an expression references a valid Automation object. </p>
<pre>Syntax
      IsObject(<i>expression</i>)

Key
   <i>expression</i>    Any expression.</pre>
<p>IsObject returns True if expression is a variable of Object subtype or a user-defined object; otherwise, it returns False.</p>
<p><b>Examples</b></p>
<p>Test   if an identifier represents an object variable:</p>
<p class="code">Dim MyInt, MyCheck, MyObject</p>
<p class="code">Set MyObject = Me</p>
<p><span class="code">MyCheck = IsObject(MyObject)</span> ' Returns True.</p>
<p><span class="code">MyCheck = IsObject(MyInt)</span> ' Returns False.</p>
<p class="quote"><i>“I have no money, no resources, no hopes. I am the happiest man alive” ~ Henry Miller </i></p>
<p><b>Related:</b></p>
<p><a href="syntax-null.html">Syntax - IsBlank function</a> to detect Empty or NULL or Zero.</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="isobject.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

