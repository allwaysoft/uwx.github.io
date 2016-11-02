---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem -->
<h1>Appearance</h1>
<p>Make a FORM element look like a standard user interface element.</p>
<pre>Syntax
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: button;</pre>
<blockquote>
<p><span class="code">none</span> - Don't apply any formatting<br>
<span class="code">button</span> - Render the element as a button<br>
</p>
</blockquote>
<p> There most useful value is: <span class="code">none</span>. This will  provide (almost) full control over the style of a given widget using other CSS rules. </p>
<p>The appearance property has been deprecated by the W3C</p>
<p>The effect is not consistent, for example in the demo below, changing the border-radius will change the effect when also applying -webkit-appearance.<br>
</p>
<p>Examples:<br>
  <span class="code">    .ss64class { -webkit-appearance: none; }</span><br>
    <span class="code">#SS64id { -webkit-appearance: none;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="15" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">appearance: none;
-moz-appearance: none;
-webkit-appearance: button;
 border-radius: 0px;</textarea></td>
    <td><div><form><input id="tryresult" value="Sample input Button"></form></div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  <b>None</b>,<br>
use the equivalent <span class="code">-moz-appearance</span> for Firefox and <span class="code">-webkit-appearance</span> for Safari, Opera, and Chrome.</p>
<p class="quote"><i>“Surround yourself with people who believe in you” ~   Brian Koslow</i></p><p><b>Related:</b></p>
<p> <a href="border-radius.html">border-radius</a><br>
<a href="display.html">display</a> - Display an HTML element as a list/table/block.</p>
<!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="appearance.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

