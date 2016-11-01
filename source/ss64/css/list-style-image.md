---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>list-style-image</h1>
<p> Specify an image to use as a list marker for an item in a list (<span class="code">url</span>). </p>
<pre>Syntax
      list-style-image: url(<i>uri</i>) | none | inherit ;</pre>
<blockquote>
<p><span class="code">url</span> - If the specified image is available, it will replace any marker specified by <a href="list-style-type.html">list-style-type</a>.<br>
<span class="code">none</span> - Don't display an image<br>
<span class="code">inherit</span> - Inherit from the parent element.</p>
</blockquote>
<p>Examples:</p>
<p><span class="code">ol { list-style-image: url("/images/save-icon.gif"); }<br>
  .SS64class { list-style-image: none; }<br>
  #SS64id { list-style-image: url("/images/save-icon.png"); }</span></p>
<p>If set to <span class="code">none</span>, no list marker image will be used. Instead, <a href="list-style-type.html">list-style-type</a>  will be used.</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" wrap="VIRTUAL" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">list-style-image: url("/images/save-icon.gif");</textarea></td>

    <td><ol><div id="tryresult">
<li>This is a list</li>
      <li>Containing  several items</li>
      <li> One after another</li>
    </div></ol></td>
  </tr>
</tbody></table>

<p>(CSS 1) Browser Support: All major browsers apart from Internet Explorer.</p>
<p class="quote"><i>“Speed kills colour... the gyroscope, when turning at full speed, shows up gray” ~ Paul Morand</i></p>
<p><b>Related:</b></p>
<p><a href="list-style-position.html">list-style-position</a> - Position of list-item markers - inside or outside the content flow.<br>
<a href="list-style-type.html">list-style-type</a> - Type of list-item marker.<br>
<b><a href="list-style.html">list-style</a></b> - Set all the properties for a list in one declaration.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="list-style-image.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

