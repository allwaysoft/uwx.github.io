---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Conditional Execution</h1>
<pre>An AND list has the form </pre>
<pre><var>      command1</var> &amp;&amp; <var>command2</var></pre>
<pre><var>command2</var> is executed if, and only if, <var>command1</var> succeeds
</pre>
<pre>An OR list has the form </pre>
<pre><var>      command1</var> || <var>command2</var></pre>
<pre><var>command2</var> is executed if, and only if, <var>command1</var> fails  </pre>
<p>A <code>list</code> is a sequence of one or more pipelines separated by one 
  of the operators <samp>`;'</samp>, <samp>`&amp;'</samp>, <samp>`&amp;&amp;'</samp>, 
  or <samp>`||'</samp>, and optionally terminated by one of <samp>`;'</samp>, 
  <samp>`&amp;'</samp>, or a <code>newline</code>. </p>
<p>Of these list operators, <samp>`&amp;&amp;'</samp> and <samp>`||'</samp> have 
  equal precedence, followed by <samp>`;'</samp> and <samp>`&amp;'</samp>, which 
  have equal precedence. </p>
<p>If a command is terminated by the control operator <samp>`&amp;'</samp>, the 
  shell executes the command asynchronously in a subshell. This is known as executing 
  the command in the <var>background</var>. The shell does not wait for the command 
  to finish, and the return status is 0 (true).</p>
<p> <b>Related:</b></p>
<p><a href="syntax.html">OS X Syntax</a></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
