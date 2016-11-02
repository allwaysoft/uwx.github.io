
<style type="text/css">
.demo {height: 60px; border: solid 10px blue; padding: 20px; margin: 40px; background-color: #fff; outline: green dotted 3px;}
#trycode{height: 150px;}
</style><!-- #BeginLibraryItem "/Library/head_csssyntax.lbi" --><!-- #EndLibraryItem --><h1>The CSS Box Model</h1>
<p>An illustration of the visual relationship between Margins, Borders and Padding:</p>
<blockquote>
<p><img src="boxmodel.png" width="294" height="159" alt="Box Model"></p>
</blockquote>
<p>The <a href="margin.html" class="code">margin</a> is the gap between the border and the edge of the box, it is always transparent. The default margin is 0. <br>
Setting a margin creates a gap between adjacent boxes. <br>
The vertical space between  two adjacent boxes is the same as the outer edges - the browser does not add together the bottom and top margins of adjacent boxes, they are merged -  the larger of the two will be used. This collapsing of margins only applies to vertical, not horizontal margins.</p>
<p>An <span class="code"><a href="outline.html">outline</a></span> is  shown in dotted green. Outlines differ from borders in that they  do not take up space, they are drawn above the content and extend out towards the margin. The default <span class="code">&lt;A&gt;</span> outline in many browsers is a dotted line that is used primarily as an aid for keyboard navigation. If made large enough an outline  can overlap the margin but this is not common. </p>
<p> A <span class="code"><a href="border.html">border</a></span> is shown in blue, this sits outside both the content and the padding.   </p>
<p><a href="background.html">Background</a> settings for an element apply to  the area  inside the borders  including both the padding and content areas. The background will also be visible in the gaps of a dashed or dotted border.</p>
<p>The gap between the blue border and the text is called <a href="padding.html" class="code">padding</a>, padding applies to any of the content within a box and helps to increase readability.</p>

<div style="border: 1px solid red"><p>
</p><div class="demo">This text is the content area of the Box model, it is surrounded by padding, a border and margins on all four sides. The size, appearance and visibility of the various elements of the box model can be modified by adjusting the relevant CSS properties.</div><div class="demo">This text is the content area of the Box model, it is surrounded by padding, a border and margins on all four sides. The size, appearance and visibility of the various elements of the box model can be modified by adjusting the relevant CSS properties.</div><p></p></div>
<p>The boxes above have a fixed <span class="code">height: 60px</span> watch what happens if you make the browser window very narror so that the text no longer fits inside a 60px height (also see <a href="https://en.wikipedia.org/wiki/Responsive_web_design">responsive web design.</a>)</p>
<h1>Element size</h1>
<p>By default the height and width of an element will be changed by adding a border e.g. if an element has a <span class="code">height: 100px;</span> and the top and bottom borders are both <span class="code">10px</span>, then the total height will become <span class="code">120px</span></p>
<p>Padding will also affect the size of the element, so if we add <span class="code">5px</span> of top and bottom padding to the example, the total height of the element becomes <span class="code">130px</span></p>
<p>If <a href="box-sizing.html">box-sizing</a> is set to <span class="code">border-box</span> then this behaviour will change, the border will extend inwards without making the element larger <i>unless</i> the two borders are larger than the element, e.g. if an element has a <span class="code">height: 100px;</span> and the top and bottom borders are both <span class="code">10px</span>, then the total height will stay as <span class="code">100px</span> but if the borders are increased to <span class="code">55px</span> then the element would grow to <span class="code">110px</span>.<br>
Similarly adding padding will not change the size of the element unless the height or width are too small to accomodate it.</p>
<p>Box-sizing has no effect on margins or outlines.</p>
<p>A box can contain any number of other boxes.</p>
<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1"> margin: 40px;
 outline: green dotted 3px;
 border: solid 10px blue;
 padding: 20px;
 background-color: #fff;
 height: 60px;
</textarea></td>
    <td><div style="border: 1px solid red">
<div id="tryresult">This text is the content area of the Box model, it is surrounded by padding, a border, an outline and margins on all four sides. The size, appearance and visibility of the various elements of the box model can be modified by adjusting the relevant CSS properties.</div></div></td>
  </tr>
</tbody></table>
<p class="quote"><i>“When working with CSS finally drives you mad the padded cell that they will put you in<br>
has the padding on the inside of the walls” ~&nbsp;<a href="http://stackoverflow.com/a/32692/1720814">Simon Keep</a></i></p><p><b>Related:</b></p>
<p><a href="border-width.html">border-width</a> - Width of the four borders.<br>
<a href="box-sizing.html">box-sizing</a> - The CSS box model used to calculate the height and width of elements. (CSS 3)<br>
<a href="display.html">display</a> - How to display an HTML element:  block or inline boxes.<br>
<a href="margin.html">margin</a> - Set all the margin properties.<br>
<a href="padding.html">padding</a> - Set all the padding properties.<br>
BrainJar <a href="http://www.brainjar.com/css/positioning/default.asp">explanation of CSS positioning</a></p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

