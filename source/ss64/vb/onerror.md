---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>On Error</h1> 
<p>Error handling. For scripts designed to run against multiple computers or printers it is important to including error handling in case the remote machine is off-line. </p>
<pre>Syntax 
      On Error resume next    - Enable error handling

      On Error goto 0         - Disable error handling

Error properties:

   err.Number (default)
   err.Source
   err.Description</pre>
<p>Examples</p>
<p>In  the examples below - replace the 'code goes here' line with your VBScript commands. </p>
<p>Example 1) Trap an error </p>
<pre>On Error Resume Next<br>' code goes here<br>If Err.Number &lt;&gt; 0 Then<br>    'error handling:
    WScript.Echo Err.Number &amp; " Srce: " &amp; Err.Source &amp; " Desc: " &amp;  Err.Description<br>    Err.Clear<br>End If
</pre>

<p>Example 2) Trap an error or success </p>
<pre>On Error Resume Next<br>' code goes here<br>If Err.Number = 0 Then
    WScript.Echo "It worked!"
Else<br>    WScript.Echo "Error:"
    WScript.Echo Err.Number &amp; " Srce: " &amp; Err.Source &amp; " Desc: " &amp;  Err.Description<br>    Err.Clear<br>End If
</pre>
<p>Example 3) Trap an error </p>
<pre>On Error Resume Next<br>' code goes here<br>If Err.Number &lt;&gt; 0 Then ShowError("It failed")<br>

Sub ShowError(strMessage)
    WScript.Echo strMessage
    WScript.Echo Err.Number &amp; " Srce: " &amp; Err.Source &amp; " Desc: " &amp;  Err.Description<br>    Err.Clear
End Sub
</pre>
<p class="quote"><i>“Success is falling nine times and getting up ten” ~ Jon Bon Jovi</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-errors.html">Syntax - error codes</a><br>
<a href="inputbox.html">InputBox</a> - Prompt for user input<br>
Equivalent in PowerShell: <a href="../ps/common.html">ErrorAction</a> and <span class="code">$errorActionPreference</span></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

