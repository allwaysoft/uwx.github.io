---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Transform-origin</h1>
<p>Change the position (origin) of elements that have been <a href="transform.html">transformed</a>. By default, transforms are applied using the center point of an element  as the origin; for example rotation spins an object about its center  and scaling expands or contracts an element from the center point. Change this origin by setting  <span class="code">transform-origin</span>.</p>
<pre>Syntax
      transform-origin: <i>x-axis y-axis z-axis</i> ;</pre>
<blockquote>
<p><span class="code">x-axis</span> - Move the origin horizontally :<span class="code"> left |     <u>center</u> | right | <i>length</i> | % </span><br>
<span class="code">y-axis</span> - Move the origin vertically:<span class="code"> top |    <u>center</u> | bottom | <i>length</i> | %</span><br>
<span class="code">z-axis</span> - Move the  origins z-axis (stack):<i><span class="code"> length</span></i><br>
</p>
</blockquote>
<p>The values <span class="code">left</span> and <span class="code">top</span> are equivalent to 0% (zero length/height)<br>
The value <span class="code">center</span><span class="code"></span> is equivalent to 50% (half box length/height)<br>
The values <span class="code">right</span> and <span class="code">bottom</span> are equivalent to 100% (full box  length/height)</p>
<p>Examples:<br>
<span class="code">h1 { transform-origin: 30% 60%;  }<br>
.ss64class { transform-origin: left bottom; }</span><br>
<span class="code">#SS64id { transform-origin: 30% 60% 25%;  }</span><br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 2px solid blue;
-webkit-transition: all 2s ease-in-out;
        transition: all 2s ease-in-out;
-webkit-transform: rotate(45deg) ;
        transform: rotate(45deg) ;

-webkit-transform-origin: 25% 50%;
   -moz-transform-origin: 25% 50%;
    -ms-transform-origin: 25% 50%;
     -o-transform-origin: 25% 50%; 
        transform-origin: 25% 50%;
</textarea></td>
    <td><div id="tryresult">For most transitions a timing of between 0.5 and 2 seconds will give the best results.<br>
Reloading the page will return the text to its starting position.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  IE 10, Firefox. Use the equivalent <span class="code">-webkit-transform-origin</span> for Safari and Chrome, <span class="code">-ms-transform-origin</span> for IE 9 and <span class="code">-moz-transform-origin</span> for old Firefox versions.</p>
<p class="quote"><i>“Don't become a mere recorder of facts, but try to penetrate the mystery of their origin” ~ Ivan Pavlov</i></p><p><b>Related:</b></p>
<p><a href="transform.html">transform</a> - Apply a 2D or 3D transformation to an element.<br>
 transform-style  - How nested elements are rendered in 3D space.<br>
<b><a href="transition.html">transition</a></b> - Shorthand to set  transition- properties.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="transform-origin.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

