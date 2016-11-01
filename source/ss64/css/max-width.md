---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Max-width</h1>
<p>Set the maximum width of an element.</p>
<pre>Syntax
      max-width: <i>length</i> | <i>percentage</i> | <u>none</u> | inherit ;</pre>
<blockquote>
<p> <span class="code"><i>Length</i></span> - The max width  in <span class="code">px, pt</span> or <span class="code">em</span>.<br>
<span class="code"><i>percentage</i></span> - 
The max width as a percentage value<br>
<span class="code">none</span> - No limit on the width. (default)<br>
<span class="code">inherit</span> - inherit from the parent element.<br>
<span class="code">min-content</span> - The intrinsic minimum width. Experimental/CSS 3. (Firefox <span class="code">moz-min-content</span> and Chrome <span class="code">webkit-min-content</span>).<br>
<span class="code">max-content</span> - The intrinsic preferred width. Experimental/CSS 3. (Firefox <span class="code">moz-max-content</span> and Chrome <span class="code">webkit-max-content</span>).<br>
<span class="code">fill-available</span> - The containing block width minus horizontal margin, border and padding. Experimental /CSS 3<br>
<span class="code">available</span> - An ancient name for fill-available (some browsers only)</p>
</blockquote>
<p>Having the right number of characters on each line of text is key to good readability, in typographic terms this is known as the 'measure'. Robert Bringhurst in<i> "The elements of Typographic style"</i> recommends 45 to 75 characters per line, 66 characters per line is widely considered the ideal. A width of 600px will hold around 75 characters of 18px text.</p>
<p>Examples:<br>
  <span class="code">p { max-width: 500px; }<br>
    .ss64class { max-width: 25em; }</span><br>
    <span class="code">#SS64id { max-width: 400pt;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border-style: solid;
max-width: 600px;
</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border. The border helps to display the width of the element. </div></td>
  </tr>
</tbody></table>
<p>(CSS 2) Browser Support:  All major browsers.</p>
<p class="quote"><i>“Somebody should tell us, right at the start of our lives, that we are dying. Then we might live life to the limit, every minute of every day. Do it! I say. Whatever you want to do, do it now! There are only so many tomorrows”   ~ Pope Paul VI</i></p><p><b>Related:</b></p>
<p><a href="width.html">width</a> - Width of an element<br>
<a href="min-width.html">min-width</a> - Minimum width of an element<br>
<a href="height.html">height</a> - Height of an element<br>
<a href="box-sizing.html">box-sizing</a> - The CSS box model used to calculate the height and width of elements.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="max-width.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

