---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Background</h1>
<p>Shorthand to set  the  CSS properties:</p>
<pre><i>      element</i> { background: <i>Background-Color&nbsp;Background-Image&nbsp;Background-repeat
                     &nbsp;Background-attachment&nbsp;Background-position <abbr title="Include a background-size value after bg-position in supported browsers">/ [background-size]</abbr>
                         background-origin background-clip</i>;}</pre>
<p>This shorthand is equivalent to the following:<br>
</p>
<pre><i>element</i> {
  <a href="background-color.html">background-color</a>: <i>color</i> | #<i>hex</i> | (<i>rgb</i> / % | 0-255);
  <a href="background-image.html">background-image</a>: url(<i>URI</i>);
  <a href="background-repeat.html">background-repeat</a>: repeat | repeat-x | repeat-y | no-repeat ;
  <a href="background-position.html">background-position</a>: <i>X Y</i> | {top|bottom|center} {left|right|center} ;
  <a href="background-attachment.html">background-attachment</a>: scroll | fixed ;
  <a href="background-origin.html">background-Origin:</a> border-box | <u>padding-box</u> | content-box ;  /*&nbsp;CSS3&nbsp;*/
  <a href="background-clip.html">background-Clip</a>:   <u>border-box</u> | padding-box | content-box ;  /*&nbsp;CSS3&nbsp;*/
}
  <a href="background-size.html">background-size</a> has <a href="http://stackoverflow.com/questions/7864448/background-size-in-shorthand-background-property-css3">limited browser support</a> and so is best listed as a separate rule.</pre>
<p>Alternatively you can choose to inherit from a parent element: <span class="code">background: inherit ;</span></p>
<p>The default background property values, any value that is not specified in the shorthand will be set to the     default, even if  set separately in another css rule.</p>
<pre>  background-color: transparent;
  background-image: none;
  background-repeat: repeat;
  background-position: top left;
  background-attachment: scroll;
  background-origin: padding-box;
  background-clip: border-box;</pre>
<p> Note that the default value of  background-color is "<span class="code">transparent</span>" so even if no inheritance is in place, elements will still show the background of a parent element if no other background has been defined.</p>
<p><b>Examples</b></p>
<p>Set the background of H1 to red and apply a background image:</p>
<p class="code">h1 { background: #ff0000 url('../images/grad.png'); }</p>
<p>Style external <span class="code">&lt;a&gt;</span> links with an image (<span class="code">class="external"</span>):</p>
<pre>a.external { background: url(/images/external.png) center right no-repeat; padding-right: 13px; }</pre>
<p> Style RSS <span class="code">&lt;a&gt;</span> links with an image (<span class="code">class="</span><span class="code">rss"</span>):<br>
</p>
<pre>a.rss { background: url(/images/feedicon.png) center right no-repeat; padding-right: 18px; }</pre>
<p>Result = <a href="http://www.w3.org/TR/CSS2/colors.html#propdef-background" class="external">Link to W3C</a> and an <a href="http://ss64.org/extern.php?action=feed&amp;type=atom" class="rss">RSS/Atom Link</a></p>
<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">background: #ff0000 url('../images/grad.png') no-repeat;</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS background image. </div></td>
  </tr>
</tbody></table>
<p>Browser Support: All major browsers (CSS 1) <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background">Firefox</a>, IE, Safari. Web browsers will interpret the shortcut values in any order.</p>
<p><span class="quote"><i>“I've learned that our background and circumstances may have influenced who we are, but we are responsible for who we become” ~ James Rhinehart</i></span></p>
<p><b>Related:</b></p>
<p><a href="background-clip.html">Background-Clip</a> - The painting area of the background. <a href="background-origin.html"><br>
Background-Origin</a> - The positioning area of the background images.<br>
<a href="background-size.html">Background-Size</a> - Size or resize a background image.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="background.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


