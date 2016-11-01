---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Conditional Execution</h1>
<p>Syntax</p>
<p>if <var>command1</var> succeeds then execute <var>command2</var>    (IF)</p>
<blockquote>
<p><span class="code">command1  <b>&amp;&amp;</b> command2</span></p>
</blockquote>
<p>Execute <var>command1</var> and then <var>execute command2</var> (AND)</p>
<blockquote>
<p><span class="code">command1 <b>&amp;</b> command2</span></p>
</blockquote>
<p>Execute <var>command2</var>   only if <var>command1</var> fails (OR) </p>
<blockquote>
<p><span class="code">command1 <b>||</b> command2</span></p>
</blockquote>
<p>  Success is defined as returning an <a href="errorlevel.html">%ERRORLEVEL%</a> = 0</p>
<p>Care must be taken in using this syntax to read and SET variables as by default variables are expanded <a href="syntax-variables.html">one line at a time</a>.</p>
<p><b>Examples</b></p>
<p>Show a message if a file copy succeeds:</p>
<pre>   COPY H:\share\TNSnames.ora C:\Oracle\<b> &amp;&amp; </b>ECHO The Copy succeeded</pre>
<p>Use parenthesis to test the success of several commands:</p>
<pre>  <b>(</b>Dir C:\Test1 &amp; Dir C:\Test2<b>)</b> || Echo One or more of the commands failed.
</pre>
<p class="quote"><i>“Conditional cooperation is like adulterated cement which does not bind” ~ Mohandas K. Gandhi </i></p>
<p><b>Related:</b><br>
<br>
<a href="if.html">IF</a> - Conditionally perform a command.<br>
<a href="syntax-redirection.html">Command redirection</a></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
