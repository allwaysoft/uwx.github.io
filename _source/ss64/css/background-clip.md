---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Background-Clip</h1>
<p>The  painting area of the background color.</p>
<pre>Syntax
      background-clip: border-box | padding-box | content-box ; </pre>
<blockquote>
<p><span class="code"><u>border-box</u></span> The background color fills the border <a href="syntax-box-model.html">box</a>.<span class="code"><br>
padding-box</span> The background color fills the padding <a href="syntax-box-model.html">box</a>.<br>
<span class="code">content-box</span>. The background color fills the content <a href="syntax-box-model.html">box</a>.</p>
</blockquote>
<p>New in CSS3 is the ability to specify multiple background images. You can (optionally) specify the background-clip for multiple images as a comma-separated list, these will then be applied (in order) to each of the images specified by <a href="background-image.html">background-image</a>.</p>
<p>Examples:<br>
  <span class="code">h1 { background-clip: border-box; }<br>
    .ss64class { background-clip: padding-box; }</span><br>
    <span class="code">#SS64id { background-clip: content-box;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">padding:10px;
border: 10px dotted red;
background-color: lightblue;
background-clip: content-box;</textarea></td>

    <td><div id="tryresult">This is a sample of text with a CSS background color.</div></td>
  </tr>
</tbody></table>

<p>Browser Support:  (CSS3+) IE9+, Firefox 4+, Opera, and Chrome. <br>
  In 
Safari use the alternative: <span class="code">-webkit-background-clip</span></p>
<p class="quote"><i>“The business of the advertiser is to see that we go about our business with some magic spell or tune or slogan throbbing quietly in the background of our minds”  ~ Marshall McLuhan</i></p>
<p><b>Related:</b></p>
<p><a href="background-image.html">Background-Image</a> - The background image for an element.<br>
  <br>
</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="background-clip.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
&gt;