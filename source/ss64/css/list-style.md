---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>list-style</h1>
<p>Shorthand to set  the 3 list-style properties in one declaration: </p>
<pre>Syntax
      <i>element</i> { <i><a href="list-style-type.html">List-style-type</a>&nbsp;<a href="background-position.html">List-style-position</a>&nbsp;<a href="list-style-image.html">List-style-image</a></i> ;}</pre>
<p>This shorthand is equivalent to the following:<br>
</p>
<pre><i>element</i> {
   <span class="code"><a href="list-style-type.html">list-style-type</a> <i>type</i>;
   <a href="background-position.html">list-style-position</a> {inside | outside} ;
   <a href="list-style-image.html">list-style-image</a> url("/<i>image.ext</i>");</span>
 }</pre>
<p>Alternatively you can set  <span class="code">list-style: none</span> to remove the default styles or to inherit from a parent element (not supported by IE 7):</p>
<p class="code">list-style: inherit ;</p>
<p>Note the default styles will vary by browser and by HTML element, <span class="code">&lt;ol&gt;</span> normally has a list style, <span class="code">&lt;p&gt;</span> normally doesnt.</p>
<p>Examples:<br>
  <span class="code">ol { list-style: upper-latin inside ;}<br>
.SS64class { list-style: circle inside ;}<br>
#SS64id { list-style: upper-roman outside ; }</span></p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" wrap="VIRTUAL" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">list-style: circle inside;
color: #6622aa;</textarea></td>

    <td><ol><div id="tryresult">
<li>This is a list.</li>
      <li> Containing several items.</li>
      <li> One after another.</li>
    </div></ol></td>
  </tr>
</tbody></table>

<p>(CSS 1) Browser Support: All major browsers,  IE 6/7 fail to hide a list-image with <span class="code">list-style:none</span>, (but work with <span class="code">list-style-image:none;</span> )</p>
<p class="quote"><i>“Speed kills colour... the gyroscope, when turning at full speed, shows up gray” ~ Paul Morand</i></p>
<p><b>Related:</b></p>
<p><a href="list-style-image.html">list-style-image</a> - Set an image as the list-item marker.<br>
  <a href="list-style-type.html">list-style-type</a> - Type of list-item marker.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="list-style.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


