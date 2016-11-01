---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem --><h1>Access Ribbon</h1>
<p>The Access 2010 toolbar ribbon can be minimised or hidden completely using VBA. </p>
<p>The height of the ribbon will vary according to the <a href="../nt/syntax-dpi.html">DPI</a> of the display, when minimised the ribbon height will be around 50 - 75, when maximised it will be around 150 - 200.</p>
<p>The <span class="code">MinimizeRibbon</span> command will (despite the name) toggle the ribbon state, so if the ribbon is already minimised it will maximise it. To ensure it is always minimised, run the command only if the height is greater than 100 (Maximized)</p>
<pre>If commandbars("ribbon").height &gt; 100 then
   CommandBars.ExecuteMso "MinimizeRibbon"
End if</pre>
<p>Similarly to Maximize the ribbon:</p>
<pre>If commandbars("ribbon").height &lt;= 100 then
   CommandBars.ExecuteMso "MinimizeRibbon"
End if</pre>
<p>To completely hide the ribbon:<br>
<span class="code">DoCmd.ShowToolbar "Ribbon", acToolbarNo </span><br>
</p>
<p> To unhide the ribbon:<br>
<span class="code">DoCmd.ShowToolbar "Ribbon", acToolbarYes</span></p>
<p>If you change the ribbon settings be aware this can affect other Microsoft Access databases.<br>
If you  minimise the ribbon when a database is opened it is a good idea to restore the default (maximised ribbon) when the database is closed. It does not affect other Office applications, Word etc.</p>
<p class="quote"><i>"Round her neck she wears a yeller ribbon, She wears it in winter and the summer so they say, If you ask her "Why the decoration?" She'll say "It's fur my lover who is fur, fur away ~ George A. Norton</i></p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="syntax-ribbon.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

