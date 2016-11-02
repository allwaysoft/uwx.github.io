---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Shell</h1>
<p> Run an external executable program and return a Variant (Double) representing the program's task ID if successful, otherwise return zero.</p>
<pre>Syntax
      Shell(<i>pathname</i> [, <i>windowstyle</i> ] )</pre>
<p> To run non-executables, shortcuts or programs that require parameters to be passed you can use a simple batch file. </p>
<p>The <b><i>windowstyle</i></b> named argument has these values:</p>
<table border="1" cellpadding="2" cellspacing="0">
<tbody><tr>
<th><b>Constant</b></th>
<th><b>Value</b></th>
<th><b>Description</b></th>
</tr>
<tr>
<td>vbHide</td>
<td>0</td>
<td>Window is hidden and focus is passed to the hidden window. <br>
(not applicable on Macintosh platforms.)</td>
</tr>
<tr>
<td>vbNormalFocus</td>
<td>1</td>
<td>Window has focus and is restored to its original size and position.</td></tr>
<tr>
<td>vbMinimizedFocus</td>
<td>2</td>
<td>Window is displayed as an icon with focus.</td></tr>
<tr>
<td>vbMaximizedFocus</td>
<td>3</td>
<td>Window is maximized with focus.</td></tr>
<tr>
<td>vbNormalNoFocus</td>
<td>4</td>
<td>Window is restored to its most recent size and position. The currently active window remains active.</td></tr>
<tr>
<td>vbMinimizedNoFocus</td>
<td>6</td>
<td>Window is displayed as an icon. The currently active window remains active.</td></tr>
</tbody></table>
<p><b>Example</b></p>
<p class="code">Dim dblDemo as Double </p>
<p class="code">dblDemo = Shell("C:\programs\demo.cmd", vbNormalFocus)</p>
<p class="quote"><i>“Do not run; scorn running with thy heels” ~  Shakespeare, The Merchant of Venice</i></p>
<p><b>Related:</b></p>
<p>RunSQL - Run a Microsoft Access action query.<br>
RunMacro - Run a macro.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="shell.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

