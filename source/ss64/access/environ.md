---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Environ</h1>
<p>  Return the value of an operating system environment variable.</p>
<pre>Syntax
      Environ({<i>envstring</i> | <i>number</i>})

Key
   <i>envstring</i>   The name of an environment variable.

   <i>number</i>      A number corresponding to the numeric order
               of the environment string in the environment-string table.</pre>
<p> The Environ() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p>Relying on  environment variables such as <span class="code">username</span> and <span class="code">computername</span> can be a security issue, it is easy for an end user to change these values at the command prompt, a more secure alternative is to use API calls: <span class="code"><a href="http://www.mvps.org/access/api/api0008.htm">username</a></span> and <span class="code"><a href="http://www.mvps.org/access/api/api0009.htm">computername</a></span>.</p>
<p><b>Example</b></p>
<pre>Dim strDemo as String
strDemo = Environ("Path")<br>MsgBox strDemo</pre>
<p class="quote"><i>“Begin at the beginning, the King said, very gravely, and go on till you come to the end: then stop” ~ Lewis Carroll</i></p>
<p><b>Related:</b></p>
<p><a href="../nt/syntax-variables.html">Environment Variables </a></p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

