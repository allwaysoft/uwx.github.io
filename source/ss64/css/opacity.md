---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Opacity</h1>
<p>Opacity level for an element.</p>
<pre>Syntax
      opacity: <i>value</i> | inherit ;</pre>
<blockquote>
<p><span class="code"><i>value</i></span> - From <span class="code">0.0</span> (transparent) to <span class="code">1.0</span> (opaque) <br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>The default value is <span class="code">1.0</span></p>
<p>Opacity sets the opacity  for an element and <b>all of its children</b>, an alternative which  sets the opacity value only for a single element is an <a href="color.html">RGBA color</a> value.</p>
<p>Examples:<br>
  <span class="code">h1 { opacity: 0.5;  }<br>
    .ss64class { opacity: 0.25; }</span><br>
    <span class="code">#SS64id { opacity: 0.8;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">opacity: 0.6;
filter: alpha(opacity=60); /* For IE8 and earlier */
background-image: url('../images/smile.jpg');
background-repeat: no-repeat;
</textarea></td>
    <td><div id="tryresult">This is some sample text.<br>
Using CSS to change the opacity will affect the text and any background images.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  All major browsers, For  IE 8 and older (or IE 9 in <a href="http://blogs.msdn.com/b/ie/archive/2010/08/17/ie9-opacity-and-alpha.aspx">quirks mode</a>) use <span class="code">filter: alpha(opacity=50); </span></p>
<p class="quote"><i>“I felt that it's best just to be as transparent as possible” ~ Rupert Murdoch</i></p><p><b>Related:</b></p>
<p><a href="font-weight.html">font-weight</a> - Normal, bold, bolder<br>
<a href="visibility.html">visibility</a> - Hide or show an element.<br>
<a href="http://css3.me/">CSS 3 generator</a> for rounded corners, opacity and box-shadow</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

