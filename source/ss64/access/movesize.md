---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.MoveSize</h1>
<p> Move or Resize a Window.</p>
<pre>Syntax
      DoCmd.MoveSize(<i>Right, Down, Width, Height</i>)

Key
<i>   Right</i>  The new horizontal position of the window’s upper-left corner,
          measured from the left edge of its containing window.<i>

   Down</i>   The new vertical position of the window’s upper-left corner,
          measured from the top edge of its containing window.<i>

   Width</i>  The window’s new width.<i>

   Height</i> The window’s new height.</pre>
<p>The units for the arguments are <a href="http://en.wikipedia.org/wiki/Twip">twips</a> (twentieth of a point).</p>
<p>You must include at least one argument for the MoveSize method. If you leave an argument blank, the current setting for the window is used.</p>
<p><b>Examples</b></p>
<p>'Change the height of the current form to approximately 2 cm<br>
<span class="code">DoCmd.MoveSize , , , 2500<br>
<br>
</span>'Change the width of the current form to approximately 16 cm<span class="code"><br>
DoCmd.MoveSize , , 10000</span></p>
<p class="quote">“I have little interest in streamlining government or in making it more efficient, for I mean to reduce its size” ~&nbsp;Barry Goldwater</p>
<p><b>Related:</b></p>
<p><a href="minimise.html">Minimize</a> - Minimise a window<br>
<a href="restore.html">Restore</a> - Restore a maximized or minimized window.<br>
<span class="code">Me.Detail.Height = 2500</span> - Change the height of a forms detail section </p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="movesize.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

