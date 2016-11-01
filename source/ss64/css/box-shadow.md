---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Box-shadow</h1>
<p>Add a box-shadow below/around an element.</p>
<pre>Syntax
      Box-shadow: <i>h-shadow v-shadow</i> [<i>blur</i>] [<i>spread</i>] [<a href="color.html">color</a>] [<i>inset</i>]

   v-shadow  The position of the horizontal shadow. (+/-) <span class="code">px, pt or em</span>
   v-shadow  The position of the vertical shadow. (+/-) <span class="code">px, pt or em</span> 
   blur      The blur distance  <span class="code"> px, pt or em</span>
   spread    The size of shadow <span class="code"> px, pt or em</span>
   color     The color of the shadow.
   inset     Set an 'inside' shadow</pre>
<p>If the spread is zero or a negative number then the box shadow will be smaller than the element making it visible only against  one or two edges, depending where it has been positioned horizontally or vertically.</p>
<p>If the spread/blur is larger that the horizontal/vertical offset position, then the box shadow will be visible on all 4 sides.</p>
<p>A box shadow with a negative spread will be smaller than its element. When shifted down a few pixels this will only be visible  on the bottom edge. This can be used to create an underline thats a different colour to the text.</p>
<p>If an <a href="color.html">RGBA colour</a> is used with an opacity &lt; 1 then the background colour will bleed through.</p>
<p>Examples:<br>
  <span class="code"><br>
.ss64class { box-shadow: 0.5em 0.5em 3em red; }</span><br>
    <span class="code">.sample { box-shadow: -6pt 6pt 3pt 1pt #f4a460 inset;  }</span>    <br>
<span class="code">#SS64id { box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.3);  }</span><br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border-style: none;
box-shadow: 10px 10px 6px 0px dodgerblue;
</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border. A drop shadow will only appear for elements that have a border style. </div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  IE 9 and up, and all other modern browsers.</p>
<p class="quote"><i>“The reason most people never reach their goals is that they don't define them, learn about them, or even seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will”   ~ Denis Waitley</i></p><p><b>Related:</b></p>
<p><a href="border-style.html">border-style</a> - Set the border style.<br>
<a href="border-radius.html">border-radius</a> - Shorthand to set all four border-*-radius properties.<br>
<a href="http://css3.me/">CSS3 generator</a> for rounded corners and box-shadow</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

