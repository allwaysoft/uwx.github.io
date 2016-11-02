---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>COLOR</h1>  
<p>Sets the default console foreground and background colours. 
</p><pre>Syntax
      COLOR [<i>background</i>][<i>foreground</i>]
</pre>
<p> Colour attributes are specified by 2 of the following hex digits. There should be no space between the two color numbers.</p>
<p>Each digit can be 
  any of the following values: <br>
  <br>
  0 = Black <br>
  8 = Gray <br>
  <br>
  1 = Blue <br>
  9 = Light Blue <br>
  <br>
  2 = Green <br>
  A = Light Green <br>
  <br>
  3 = Aqua <br>
  B = Light Aqua <br>
  <br>
  4 = Red <br>
  C = Light Red <br>
  <br>
  5 = Purple <br>
  D = Light Purple <br>
  <br>
  6 = Yellow <br>
  E = Light Yellow <br>
  <br>
  7 = White <br>
  F = Bright White <br>
  <br>
  If no argument is given, COLOR restores the colour to what it was when CMD.EXE 
  started. <br>
  <br>
  Colour values are assigned in the following order:<br>
  <br>
  The DefaultColor registry value. <br>
  The <a href="cmd.html">CMD</a> /T command line switch<br>
  The current colour settings when cmd was launched<br>
  <br>
  The COLOR command sets ERRORLEVEL to 1 if an attempt is made to execute the 
  COLOR command with a foreground and background colour that are the same. <br>
  <br>
  <b>Examples: </b></p>
<blockquote>
<p><img src="color.gif" alt="Samples" width="88" height="145"></p>
</blockquote>
<p><br>
The default terminal color is <span class="code">COLOR 07</span>, white on black</p>
<p>The COLOR command will change the color of <b>all</b> the text in the window.<span class="code"></span></p>
<h2>Errorlevels</h2>
<blockquote>If the color was successfully changed <a href="errorlevel.html">%ERRORLEVEL%</a> = 0<br>
Background and foreground colors are the same (will fail) = 1<br>
e.g. <span class="code">COLOR 00</span> 
</blockquote>
<p>COLOR is an <a href="syntax-internal.html">internal</a> command.</p>
<p><i class="quote">“How much more black could this be?" and the answer is "None...none more black” ~ Spinal Tap</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="cmd.html">CMD</a> - Start a new CMD shell<br>
<a href="exit.html">EXIT</a> - Set a specific errorlevel
<br>
PowerShell: <a href="../ps/write-host.html">Write-Host</a> - Write  output to the screen (colour can be set for individual strings).<br>
<a href="../colour.html">Colour codes</a> - HTML/CSS <br>
<a href="http://blogs.msdn.com/aaron_margosis/archive/2007/02/22/setting-color-for-all-cmd-shells-based-on-admin-elevation-status.aspx">Aaron Margosis</a> - Change prompt colors for all Admin level prompts<br>
<a href="http://colorschemedesigner.com/">Color Scheme Designer </a> - Design colour themes <br>
Equivalent bash command (Linux): <a href="../bash/dircolors.html">dircolors</a> - Colour setup for `ls'</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="color.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p><br>
  <br>
</p>


