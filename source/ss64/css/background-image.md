---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Background-image</h1>
<p>The background image for an element.</p>
<pre>Syntax
      background-image: url(<i> URI</i>[,<i>URI</i>...] ) | none | inherit ;</pre>
<blockquote>
<p><span class="code"><i>URI</i></span> - The path to an image file.<br>
<span class="code">none</span> - Remove the background image.<br>
<span class="code">inherit</span> - Inherit from a parent element.</p>
</blockquote>
<p>The background image is drawn on top of the <a href="background-color.html">background-color</a> but underneath the <a href="border.html">borders</a>. It is possible to set both a background-color and a background-image - typically when the image is smaller than the element or contains  transparent areas. Use <a href="background-position.html">background-position</a> to place the image, and set <a href="background-repeat.html">background-repeat: no-repeat</a></p>
<p>By default background images will not be included when the page is printed. If the image is part of the content (rather than navigation /  decorative images) then it should be displayed using a foreground <span class="code">&lt;IMG&gt;</span> tag along with an ALT attribute.</p>
<p>New in CSS3 is the ability to specify multiple background images. Specify multiple images as a comma-separated list, each value will become a separate ‘background layer’. The the  first value in the list represents the top layer (closest to the user),  with subsequent layers rendered behind successively. If the images are the same or similar sizes, then you might have to use<a href="background-position.html"> background-position</a> to make them both visible and not stacked on top of one another. (supported in IE 9+ and all other major browsers)</p>
<h2>Linear-gradient</h2>
<p>Linear-gradient can  also be used to apply a color gradient to an element.</p>
<pre>Syntax
      background-image:<i> </i>linear-gradient(
          [ [ <i>angle</i> | to <i>side-or-corner</i> ] ,]?
            <i>color-stop</i>[, <i>color-stop</i>]+
      )

Key
   <i>angle</i> | to..   The first argument, specifies the gradient line, which gives the gradient a
                  direction and determines how  color-stops are positioned.
                  It may be omitted; if so, it defaults to ‘to bottom’.
                  The gradient line's direction may be specified in two ways:

                  using angles:
                  ‘0deg’ points upward, and positive angles represent clockwise rotation,
                  so ‘90deg’ point toward the right.

                  using keyword
                  If the argument is ‘to top’, ‘to right’, ‘<u>to bottom</u>’, or ‘to left’,
                  the angle of the gradient line is ‘0deg’, ‘90deg’, ‘180deg’, or ‘270deg’, respectively.
                  keywords can be combined: ‘to top left’ , ‘to bottom right’ etc

   <i>side-or-corner</i> = [top | <u>bottom</u>] <b>||</b> [left | right]</pre>
<p>Vendor prefixes:</p>
<blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/CSS/linear-gradient">-moz-linear-gradient</a>, -webkit-linear-gradient, -o-linear-gradient and <a href="http://blogs.msdn.com/b/ie/archive/2011/05/04/css3-gradients-in-ie10-platform-preview-1.aspx">-ms-linear-gradient</a>. <br>
Heres a <a href="http://westciv.com/tools/gradientsnustyle/index.html">gradient tool</a> that can generate the color codes.</p>
<p>The older experimental vendor prefixes,  use <span class="code">top</span> / <span class="code">bottom</span> instead of<span class="code"> to bottom</span> and <span class="code">to top</span>. <br>
The <a href="http://www.w3.org/TR/css3-images/#linear-gradients">standardized W3C function</a> only accepts the new syntax with the <span class="code">to</span> keyword.</p>
</blockquote>
<p>If a background image is applied to an <span class="code">&lt;a&gt;</span> anchor tag  ( or any other non-block level element), you can set  <span class="code"><a href="display.html">display</a>:block </span> that will allow you to apply <a href="height.html">height</a> and <a href="width.html">width</a> to the image.</p>
<h2>Radial-gradient</h2>
<pre><radial-gradient>Syntax
      background-image:<i> </i>radial-gradient(
      [ [ <i>shape</i> || <i>size</i> ] [ at <i>position</i> ]? , | at <i>position</i>, ]?
         [ , <i>color-stop</i> ]+
      )

Key
   <i>shape</i>       Either ‘circle’ or ‘ellipse’; determines the gradient's ending shape.
               If <i>shape</i> is omitted, the ending shape defaults to a circle if the <i>size</i>
               is a single <i>length</i>, and to an ellipse otherwise.

   <i>size</i>        The size of the gradient's ending shape:
               closest-side     The ending shape is sized so that that it exactly meets
                                the side of the gradient box closest to the gradient's center.
                                If the shape is an ellipse, it exactly meets the closest side in each dimension.

               farthest-side    Same as ‘closest-side’, except the ending shape is sized based on the farthest side(s).

               closest-corner   The ending shape is sized so that that it passes through
                                the corner of the gradient box closest to the gradient's center.
                                If the shape is an ellipse, the ending shape is given the same
                                aspect-ratio it would have if ‘closest-side’ were specified.

               farthest-corner  Same as ‘closest-corner’, except the ending shape is sized based on the farthest corner. 

               If <i>shape</i> is specified as ‘circle’ or is omitted, the <i>size</i> may be given
               explicitly as: <i>length</i> (The radius of the circle.)

               If <i>shape</i> is specified as ‘ellipse’ or is omitted, the <i>size</i> may be given
               explicitly as: [<i>Horizlength</i> | <i>HorizPercentage</i>] [VerticalL<i>ength</i> | <i>VerticalPercentage</i>]

   <i>position</i>    The center of the gradient.
               [ [ <i>percentage</i> | <i>length</i> | left | <u>center</u> | right ] [ <i>percentage</i> |
                  <i>length</i> | top | center | bottom ]? ] |
                  <b>[</b> [ left | center | right ] <b>||</b> [ top | center | bottom ] <b>]</b> | inherit</radial-gradient></pre>
<pre><span class="body"><b>Examples:</b></span>

body {
     background-image: url("header.jpg");
}

h1 { background-image: url('arrow.gif'); }

#ss64id { background-image: url('http://www.google.com/favicon.ico'); }

.ss64class {
   background-image:    -moz-linear-gradient(top, #FFF 0px, #E4E4E4 100%);
   background-image: -webkit-linear-gradient(top, #FFF 0, #E4E4E4 100%); 
   background-image:         linear-gradient(to bottom, #FFF 0px, #E4E4E4 100%);
}</pre>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="50" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">background-image: url('../images/grad.png');</textarea></td>
<td><div id="tryresult">
<p>This is a sample of text with a CSS background image. New in CSS3 is the ability to specify multiple background images. Specify multiple images as a comma-separated list.</p>
<p>By default background images will not be included when the page is printed.</p>
</div>
</td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support: <a href="http://caniuse.com/#feat=css-gradients">All major browsers, including IE 10 and greater</a></p>
<p class="quote"><i>“Beauty itself is but the sensible image of the Infinite” ~ Francis Bacon</i></p>
<p><b>Related:</b></p>
<p><a href="https://css-tricks.com/css3-gradients/">CSS 3 Linear Gradients</a> - CSS Tricks<br>
<a href="background-attachment.html">Background-Attachment</a> - Position of a background image relative to the page.<br>
  <a href="background-color.html">Background-Color</a> - The background color of an element.<br>
  <a href="background-position.html">Background-Position</a> - Starting position of a background image.<br>
  <a href="background-repeat.html">Background-Repeat</a> - How a background image will be repeated.<br>
<a href="background.html"><b> Background</b></a> - A shorthand  for the  background properties above.<br>
<a href="background-size.html">Background-Size</a> - Size or resize a background image.<br>
<a href="http://subtlepatterns.com/">subtlepatterns.com</a><br>
</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="background-image.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


