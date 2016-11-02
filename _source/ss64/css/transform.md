---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Transform</h1>
<p>Apply a 2D or 3D transformation to an element: rotate,  scale, move, skew, etc.</p>
<pre>Syntax
      transform: <i>transform-functions</i> | none ;</pre>
<blockquote>
<p><span class="code">matrix(<i>n,n,n,n,n,n</i>)</span> - Transformation, using a matrix of six values. <span class="code">matrix(2,1,1,7,350,50)</span><br>
<span class="code">matrix3d (<i>n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n</i>)</span> - 3D transformation, using a 4x4 matrix of 16 values.<br>
<span class="code">perspective(<i>n</i>)</span> - Perspective view for a 3D transformed element.<br>
<span class="code">rotate(<i>angle</i>)</span> - Rotation, the angle is specified in the parameter. <span class="code">rotate(400deg)</span><br>
<span class="code">&nbsp;rotateX(<i>angle</i>)</span> - 3D rotation along the X-axis. <span class="code">rotateX(180deg)</span><br>
<span class="code">&nbsp;rotateY(<i>angle</i>)</span> - 3D rotation along the Y-axis. <span class="code">rotateY(180deg)</span><br>
<span class="code">&nbsp;rotateZ(<i>angle</i>)</span> - 3D rotation along the Z-axis. <span class="code">rotateZ(60deg)</span><br>
<span class="code">rotate3d(<i>x,y,z,angle</i>)</span> - Rotate the element around an arbitrary vector in 3D space; x, y and z <br>
<span class="code">scale(<i>x,y</i>)</span> - Scale transformation.  <span class="code">scale(0.85, 1.5)</span><br>
<span class="code">&nbsp;scaleX(<i>x</i>)</span> - Scale transformation by giving a value for the X-axis. <span class="code">scalex(0.85)</span><br>
<span class="code">&nbsp;scaleY(<i>y</i>)</span> - Scale transformation by giving a value for the Y-axis. <span class="code">scaley(1.15)</span><br>
<span class="code">&nbsp;scaleZ(<i>z</i>)</span> - 3D scale transformation by giving a value for the Z-axis.<br>
<span class="code">scale3d(<i>x,y,z</i>)</span> - 3D scale transformation.<br>
<span class="code">translate(<i>x,y</i>)</span> - Translation, move across and down.  <span class="code">translate(-10px, 25px)</span><br>
<span class="code">&nbsp;translateX(<i>x</i>)</span> - Translation, move across (X-axis). <span class="code">translatex(-10px)</span><br>
<span class="code">&nbsp;translateY(<i>y</i>)</span> - Translation, move down (Y-axis). <span class="code">translatey(25px)</span><br>
<span class="code">&nbsp;translateZ(<i>z</i>)</span> - 3D translation, move towards the viewer (Z-axis).<span class="code"> translatez(25px)</span><br>
<span class="code">translate3d(<i>x,y,z</i>)</span> - 3D translation, across, down and towards the viewer.<br>
<span class="code">skew(<i>x-angle,y-angle</i>)</span> - Skew transformation along the X- and the Y-axis.  <span class="code">skew(20deg, -15deg) </span><br>
<span class="code">&nbsp;skewX(<i>angle</i>)</span> - Skew transformation along the X-axis.<span class="code"> skewx(20deg)</span><br>
<span class="code">&nbsp;skewY(<i>angle</i>)</span> - Skew transformation along the Y-axis.<span class="code"> skewy(20deg)</span><br>
<span class="code">none</span> - No transformation.</p>
</blockquote>
<p>Negative values will move in the opposite direction.<br>
Rotation values can be greater than 360
deg.<br>
Multiple functions can be applied as part of the same CSS rule, separated with spaces.</p>
<p>To apply the transformation gradually, include a <a href="transition.html">transition</a> rule.<br>
To apply the 
transformation immediately when the page loads, don't include any transition.</p>
<p>To flip text upside-down use <span class="code">transform: rotate(180deg);</span> (an alternative is <a href="../docs/flip.html">flipping text upside down using Unicode</a>)</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 2px solid blue;
-webkit-transition: all 3s ease-in-out;
        transition: all 3s ease-in-out;
-webkit-transform: rotate(45deg) ;
        transform: rotate(45deg) ;
</textarea></td>
    <td><div id="tryresult">For most transitions a timing of between 0.5 and 2 seconds will give the best results.<br>
Reloading the page will return the text to its starting position.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  IE 10, Firefox. Use the equivalent <span class="code">-webkit-transform</span> for Safari and Chrome, <span class="code">-ms-transform</span> for IE 9 and <span class="code">-moz-transform</span> for old Firefox versions.</p>
<p class="quote"><i>“Don't spend time beating on a wall, hoping to transform it into a door” ~ Coco Chanel</i></p><p><b>Related:</b></p>
<p><a href="https://developer.mozilla.org/en-US/docs/CSS/transform-function">Mozilla Transform reference page</a><br>
<a href="transform-origin.html">transform-origin</a> - Change the position of transformed elements.<br>
<b><a href="transition.html">transition</a></b> - Shorthand to set  transition- properties.<br>
<a href="top.html">top</a>, <a href="bottom.html">bottom</a>, <a href="left.html">left</a>, <a href="right.html">right</a> - Set the initial position of an element.<br>
<a href="http://css3.bradshawenterprises.com/transforms/">CSS Transform examples</a> - Rich Bradshaw</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="transform.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>

