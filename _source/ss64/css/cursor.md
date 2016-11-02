---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Cursor</h1>
<p> The type of cursor to display as the mouse pointer moves over the object.</p>
<pre>Syntax
      cursor: <i>cursor_type</i> ;</pre>
<blockquote>
<p> Cursor_Types:<span class="code"><br>
all-scroll</span> -  Indicate that the page can be scrolled in any direction. In firefox a hand, in Webkit and IE crossed arrows.<br>
<span class="code"><u>auto</u></span> -  Browser determines which cursor to display based on the current context. (Default.)<br>
<span class="code">col-resize</span> - Arrows pointing left and right with a vertical bar separating them, indicating that the item can be resized horizontally.<br>
<span class="code">crosshair</span> - Simple cross hair.<br>
<span class="code">default</span> - Platform-dependent default cursor; usually an arrow.<br>
<span class="code">hand</span> - <span class="Limited">Hand with the first finger pointing up, as when the user moves the pointer over a link. </span><br>
<span class="code">help</span> - Question mark, indicating help is available.<br>
<span class="code">move</span> - Crossed arrows, indicating something is to be moved.<br>
<span class="code">no-drop</span> - No entry symbol, indicating that the dragged item cannot be dropped at the current cursor location. <br>
<span class="code">not-allowed</span> - No entry symbol, indicating that the requested action will not be carried out.<br>
<span class="code">pointer</span> - Hand with the first finger pointing up, as when the user moves the pointer over a link.<br>
<span class="code">progress</span> - Arrow with an hourglass next to it, indicating that a process is running in the background*.<br>
<span class="code">row-resize</span> - Arrows pointing up and down with a horizontal bar separating them, indicating that the item/row can be resized vertically.<br>
<span class="code">text</span> - Editable text; usually an I-bar.<br>
<span class="code">url(<i>uri</i>)</span> - Cursor is defined by the author, using a custom URI, such as url('mycursor.cur') or url('mycursor.ani').<br>
<span class="code">vertical-text</span> - Editable vertical text, indicated by a horizontal I-bar.<br>
<span class="code">wait</span> - Hourglass or watch, indicating that the program is busy and the user should wait*.</p>
<p><span class="code">n-resize</span> - Cursor indicating that an edge can be moved up (north)<br>
<span class="code">ne-resize</span> - Cursor indicating that an edge can be moved up and right (north/east)<br>
<span class="code">e-resize</span> - Cursor indicating that an edge can be moved right (east)<br>
<span class="code">se-resize</span> - Cursor indicating that an edge can be moved down and right (south/east)<br>
<span class="code">s-resize</span> - Cursor indicating that an edge can be moved down (south)<br>
<span class="code">sw-resize</span> - Cursor indicating that an edge can be moved down and left (south/west)<br>
<span class="code">w-resize</span> - Cursor indicating that an edge can be moved left (west)<br>
<span class="code">nw-resize</span> - Cursor indicating that an edge can be moved up and left (north/west)</p>
</blockquote>
<p>* Setting a custom cursor shape will not have any effect on user interaction with the page.<br>
</p>
<p>Examples:<br>
  <span class="code">h1 { cursor: pointer;  }<br>
    .ss64class { cursor: progress; }</span><br>
    <span class="code">#SS64id { cursor: crosshair;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 1px solid blue;
cursor: pointer;
</textarea></td>
    <td><div id="tryresult">Give us something familiar <br>
Something similar <br>
To what we know already<br>
That will keep us steady <br>
Steady, steady <br>
Steady going nowhere</div></td>
  </tr>
</tbody></table>
<p>(CSS 2) Browser Support:  All major browsers </p>
<p class="quote"><i>“An arrow may fly through the air and leave no trace; but an ill thought leaves a trail like a serpent” ~   Charles Mackay</i></p><p><b>Related:</b></p>
<p>appearance  - Make an element look like a standard user interface element</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="cursor.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

