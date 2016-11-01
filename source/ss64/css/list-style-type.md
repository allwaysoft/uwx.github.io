---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>list-style-type</h1>
<p>The type of list-item marker in a ordered list <span class="code">&lt;ol&gt;</span>. List-style-type only applies if     <a href="list-style-image.html">list-style-image</a> is set to <span class="code">none</span>,     or to a URI that can’t be displayed.</p>
<pre>Syntax
      list-style-type: <i>marker</i> | inherit ;
</pre>
<blockquote>
<p><span class="code">inherit</span> - Inherit from the parent element.</p>
<p>Numeric markers:<br>
  <span class="code">armenian;<br>
  <u>decimal</u>;<br>
  decimal-leading-zero;<br>
  georgian;<br>
  lower-roman;<br>
upper-roman;  </span></p>
<p>Alphabetic markers:<br>
  <span class="code">hebrew;<br>
  lower-alpha; / lower-latin;<br>
  lower-greek;<br>
  none;<br>
  upper-alpha; / 
upper-latin;</span></p>
<p>Graphic markers – these give the appearance of an <span class="code">&lt;ul&gt;</span> unordered list:<br>
  <span class="code">circle;<br>
  disc;<br>
  square;</span><br>
</p>
</blockquote>
<p>Examples:<br>
<span class="code">ol { list-style-type: upper-roman; }<br>
.SS64class { list-style-type: lower-greek; }<br>
#SS64id { list-style-type: upper-latin; }</span></p>
<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" wrap="VIRTUAL" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">list-style-type: upper-alpha;</textarea></td>

    <td><ol><div id="tryresult"><li>This is a list</li>
      <li>Containing  several items</li>
      <li> One after another</li>
    </div></ol></td>
  </tr>
</tbody></table>

<p>(CSS 1) Browser Support: All major browsers,  Internet Explorer 6/7 do not support: armenian, decimal-leading-zero, georgian, or lower-greek, lower-latin or upper-latin (<a href="http://www.brunildo.org/test/IEul1.html">details</a>)</p>
<p class="quote"><i>“Style is knowing who you are, what you want to say, and not giving a damn”   ~ Gore Vidal </i></p><p><b>Related:</b></p>
<p><a href="list-style-image.html">list-style-image</a> - Set an image as the list-item marker.<br>
<a href="list-style-position.html">list-style-position</a> - Position of list-item markers - inside or outside the content flow.<br>
<b><a href="list-style.html">list-style</a></b> - Set all the properties for a list in one declaration.<!-- #BeginLibraryItem "/Library/foot_css.lbi" --></p><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="list-style-type.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>


