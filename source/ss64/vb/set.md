---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem -->
<h1>Set</h1> 
<p>Assign an object reference.</p>
<pre>Syntax 
      Set <i>variable</i> = <i>object</i>   

</pre>
<p>The variable name, can be anything but <a href="syntax-naming.html">typically</a> will start with <span class="code">obj</span> to indicate it is a programmable object with properties and methods.</p>
<blockquote>
<p>Methods can be run against the object variable using the syntax <span class="code">objSomething.</span><i><span class="code">methodName</span></i></p>
<p>Properties can be accessed by assigning a variable: <span class="code"><i>varValue</i> = objSomething<i>.propertyX</i></span></p>
</blockquote>
<p>Unless you are using ADO objects that have to be explicitly cleaned up in the right order before they go out of scope, it is not necessary to assign object to <span class="code">nothing</span> at the end of your scripts</p>
<p><b>Example</b></p>
<pre><span class="code">Set objWshController = WScript.CreateObject("<a href="http://technet.microsoft.com/en-us/library/ee156594.aspx">WshController</a>")</span></pre>
<p class="quote"><i>“We can make good tests run fast but we can't make fast tests be good” - Ryan Tomayko</i></p>
<p><b>Related:</b></p>
<p><br>
<a href="dim.html">Dim</a> - Declare a new variable or array variable<br>
<a href="syntax-variables.html">VB Script Constants and Variables</a><br>
<a href="https://blogs.msdn.microsoft.com/ericlippert/2004/04/28/when-are-you-required-to-set-objects-to-nothing/">Set Objects To Nothing?</a> - Eric Lippert</p>
<!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

