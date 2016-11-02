---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>local</h1> 
<p>Create variables</p>
<pre>SYNTAX
      local [<var>option</var>] <var>name</var>[=<var>value</var>]</pre>
<p> For each argument, a local variable named <var>name</var> is created, and 
  assigned <var>value</var>. <br>
  <br>
  The <var>option</var> can be any of the options accepted by <a href="declare.html">declare</a>. 
  <code><br>
  <br>
  local</code> can only be used within a function; it makes the variable <var>name</var> 
  have a visible scope restricted to that function and its children. <br>
  <br>
  The return status is zero unless <code>local</code> is used outside a function, 
  an invalid <var>name</var> is supplied, or <var>name</var> is a readonly variable. 
</p>
<p>`local' is a BASH builtin command.</p>
<p class="quote"><i>"A local shop for local people" ~ The 
  League Of Gentlemen</i></p>
<p><b>Related:</b></p>
<p><a href="declare.html">declare</a> - Declare variables and give them attributes<a href="env.html"><br>
env</a> - Display, set, or remove environment variables<br>
<a href="export.html">export</a> - Set an environment variable<br>
<a href="function.html">function</a> - Define Function Macros <br>
<a href="readonly.html">readonly</a> - Mark variables/functions as readonly<br>
<a href="set.html">set</a> - Manipulate shell variables and functions <br>
Equivalent Windows commands: <a href="../nt/set.html">SET</a> - Display, set, or remove   environment 
variable</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="local.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

