---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Padding</h1>
<p>Shorthand to set the top, right, bottom and left padding properties in <span class="code">px, pt, %, em,</span> <a href="syntax-units.html">etc</a>. Padding is on the inside of the <a href="syntax-box-model.html">box model</a> while <a href="margin.html">margins</a> are on the outside. Use padding to move the contents away from the edges of the block.</p>
<pre><i>element</i> { padding: <i>TopPadding RightPadding BottomPadding LeftPadding </i>;}

<i>element</i> { padding: <i>TopPadding &nbsp;Right&amp;LeftPadding &nbsp;BottomPadding </i>;}

<i>element</i> { padding: <i>Top&amp;BottomPadding &nbsp;Right&amp;LeftPadding </i>;}

<i>element</i> { padding:<i> Padding</i>;}
</pre>
<p>Alternatively you can choose to inherit from a parent element:<span class="code"> padding: inherit ;</span></p>
<p>This shorthand is equivalent to the following:<br>
</p>
<pre><i>element</i> {
  <a href="padding-top.html">padding-top</a> <i>length</i>;
  <a href="padding-right.html">padding-right</a>: <i>length</i>;
  <a href="padding-bottom.html">padding-bottom</a>: <i>length</i>;
  <a href="padding-left.html">padding-left</a>: <i>length</i>;
}</pre>
<p>The default padding is 0.<br>
If your stylesheets contains many <span class="code">padding:0</span> definitions then  consider using a CSS <a href="http://meyerweb.com/eric/thoughts/2011/01/03/reset-revisited/">reset</a>, even a simple <span class="code">body {margin 0; padding: 0;}</span></p>
<p><span class="code">padding</span> is equivalent to the old <span class="code">cellpadding</span> property. </p>
<p>Examples:<br>
  <span class="code">h1 { padding: 5px;  }<br>
    .ss64class { padding: 2px 5px; }</span><br>
    <span class="code">#SS64id { padding: 2px 50px 10px 75px;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 1px solid blue;
padding: 1px 40px 10px;
</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border. The padding on each side of an element can be styled together or separately using CSS.</div></td>
  </tr>
</tbody></table>
<p>Browser Support:  All major browsers (CSS 1+)</p>
<p class="quote"><i>“The world wonders” was a phrase used as <a href="http://en.wikipedia.org/wiki/The_world_wonders">security padding</a> in an encrypted message sent during the Battle of Leyte Gulf  on October 25, 1944”</i></p><p><b>Related:</b></p>
<p><a href="padding-bottom.html">padding-bottom</a> - Bottom padding of an element. <br>
<a href="padding-left.html">padding-left</a> - Left padding of an element.<br>
<a href="padding-right.html">padding-right</a> - Right padding of an element.<br>
<a href="padding-top.html">padding-top</a> - Top padding of an element.<br>
<a href="https://developer.mozilla.org/en-US/docs/CSS/padding">padding properties</a> - Mozilla.org</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="padding.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
