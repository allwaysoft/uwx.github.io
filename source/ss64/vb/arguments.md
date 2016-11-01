---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>WScript.Arguments </h1> 
<p>Return command-line parameters.</p>
<pre>Syntax 
       WScript.Arguments

       WScript.Arguments(<i>n</i>)

       WScript.Arguments.item(<i>n</i>)

<i>   n</i>  = Return the single argument <i>n</i>
        counting from 0</pre>
<p> To pass named arguments use:<br>
</p>
<pre>       WScript<a href="syntax-args.html">.Arguments.named</a></pre>
<p>In addition to the argument itself : <span class="code">MyObject.item(I)</span>you can also retrieve a count or length:<br>
<i>MyObject</i><span class="code">.Count 
 </span><br>
<i>MyObject</i><span class="code">.Length</span></p>
<p>The default property is <span class="code">.item</span></p>
<p><b>Examples</b></p>
<p><span class="code"> C:&gt; cscript demo.vbs arg1 value2 33 456 "Last Arg"<br>
<br>
</span>[demo.vbs]<span class="code"><br>
' Store the arguments in a variable:<br>
Set objArgs = Wscript.Arguments<br>
<br>
'Count the arguments<br>
WScript.Echo objArgs.Count<br>
<br>
' Display all command-line arguments<br>
For Each strArg in objArgs<br>
&nbsp;&nbsp;WScript.Echo strArg<br>
Next<br>
<br>
' Display the first 3 command-line arguments<br>
For I = 0 to 2<br>
&nbsp;&nbsp;Wscript.Echo objArgs(I)<br>
Next<br>
<br>
'Display just the third argument<br>
Wscript.Echo objArgs(2)<br>
<br>
'Or without the reference<br>
WScript.Echo "The third argument is", WScript.Arguments(2) </span><br>
</p>
<p><i class="quote">Rule #1: Don't sweat the small stuff. <br>
  Rule #2: It's all small stuff - Dr Robert S Eliot, University of Nebraska cardiologist</i><br>
<b><br>
Related:</b></p>
<p><a href="syntax-args.html">Agruments</a> - Command Line arguments <br>
<a href="shortcut.html">.Shortcut</a>.Arguments<br>
Equivalent Windows CMD command: <a href="../nt/syntax-args.html">Parameters</a> - Command Line Parameters</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="arguments.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

