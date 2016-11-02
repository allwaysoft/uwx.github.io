---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>IsEmpty</h1> 
<p> Returns a Boolean value indicating whether a variable has been initialized. </p>
<pre>Syntax
      IsEmpty(<i>expression</i>)

Key
   <i>expression</i>    Any expression. However, because IsEmpty() is used to determine if
                 variables are initialized, this is most often a variable name.</pre>
<p>IsEmpty returns True if the variable is uninitialized, or is explicitly set to Empty; otherwise, it returns False. False is always returned if expression contains more than one variable.</p>
<p><b>Examples</b></p>
<p>Test  whether a variable has been initialized:</p>
<p class="code">Dim MyVar, MyCheck</p>
<p><span class="code">MyCheck = IsEmpty(MyVar) </span>' Returns True.</p>
<p><span class="code">MyVar = Null<br>
MyCheck = IsEmpty(MyVar)</span> ' Returns False.</p>
<p><span class="code">MyVar = Empty<br>
MyCheck = IsEmpty(MyVar)</span> ' Returns True.</p>
<p class="quote"><i>“I have no money, no resources, no hopes. I am the happiest man alive” ~ Henry Miller </i></p>
<p><b>Related:</b></p>
<p><a href="syntax-null.html">Syntax - IsBlank function</a> to detect Empty or NULL or Zero.</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="isempty.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

