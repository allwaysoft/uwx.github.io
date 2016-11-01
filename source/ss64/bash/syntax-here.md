---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>
Here Documents </h1>
<p> A here document is a block of  text or code which is redirected to an interactive program or a command.</p>
<p class="code">#!/bin/bash<br>
<i>Command</i> &lt;&lt;MyUniqueLimitString<br> 
some text<br>
some more text
<br>
MyUniqueLimitString</p>
<p>The above is equivalent to <span class="code">Command &lt; tempfile.txt</span> where the tempfile contains the text required. </p>
<p>The <span class="code">-</span> option to mark a here document limit string (<span class="code">&lt;&lt;-LimitString</span>) will suppress leading tabs (but not spaces) in the output. This can be useful in making a script more readable.</p>
<p><b>Examples</b></p>
<p>Pass multiple lines of text to  <a href="cat.html">cat</a> </p>
<p class="code">#!/bin/bash<br>
cat &lt;&lt;End-of-message<br>
--------------------------<br>
The quick brown fox <br> 
jumped over the lazy dog
<br>
--------------------------<br>
End-of-message</p>
<p>To also write the text to a file,  change  <span class="code">cat</span> to <span class="code">cat &gt; $filename</span></p>
<p>Substituting values from  a parameter makes it possible to alter the body of the here document:</p>
<p class="code">#!/bin/bash<br>
ACTION="Quickly"<br>
cat &lt;&lt;End-of-msg<br>
--------------------------<br>
The quick brown fox $ACTION<br>
jumped over the lazy dog <br>
--------------------------<br>
End-of-msg</p>
<p>To disable parameter substitution put quotes around the limit string: <span class="code">&lt;&lt;"End-of-message</span>"</p>
<p>Here documents can also be used to supply values to variables or functions. </p>
<p> <b>Related:</b></p>
<p><a href="syntax-here-string.html">Here Strings</a><br>
<a href="syntax.html">BASH Syntax</a><br>
Windows Powershell equivalent:  <a href="../ps/syntax-esc.html#here">Here strings</a></p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-here.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
