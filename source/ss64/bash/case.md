---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>case</h1>  
<p>Conditionally perform a command, <code>case</code> will selectively execute 
  the <var>command-list</var> corresponding to the first <var>pattern</var> that 
  matches <var>word</var>. <br>
</p>
<pre>Syntax 
      case <var>word</var> in [ [(] <var>pattern</var> [| <var>pattern</var>]...) <var>command-list</var> ;;]... esac</pre>
<span class="body">The <samp>`|'</samp> is used to separate multiple patterns, 
and the <samp>`)'</samp> operator terminates a pattern list. A list of patterns 
and an associated command-list is known as a <var>clause</var>. Each clause must 
be terminated with <samp>`;;'</samp>. <br>
<br>
The <var>word</var> undergoes tilde expansion, parameter expansion, command substitution, 
arithmetic expansion, and quote removal before matching is attempted. Each <var>pattern</var> 
undergoes tilde expansion, parameter expansion, command substitution, and arithmetic 
expansion. There can be an arbitrary number of <code>case</code> clauses, each 
terminated by a <samp>`;;'</samp>. The first pattern that matches determines the 
command-list that is executed. <br>
<br>
Here is an example using <code>case</code> in a script that could be used to describe 
one interesting feature of an animal: </span> 
<pre>echo -n "Enter the name of an animal: "
read ANIMAL
echo -n "The $ANIMAL has "
case $ANIMAL in
  horse | dog | cat) echo -n "four";;
  man | kangaroo ) echo -n "two";;
  *) echo -n "an unknown number of";;
esac
echo " legs."</pre>
<p>The return status is zero if no <var>pattern</var> is matched. 
Otherwise, the return status is the exit status of the <var>command-list</var> 
executed. </p>
<p class="quote"><i>"I saw a woman wearing a sweatshirt with "Guess" on it. I said, "Thyroid problem?" ~ Arnold Schwarzenegger </i> </p> 
<p><b>Related:</b><br>
  <br>
  <a href="if.html">if</a> - Conditionally perform a command <br>
  <a href="for.html">for</a> - Expand <var>words</var>, and execute <var>commands</var> 
  <br>
  <a href="until.html">until</a> - Execute commands (until error) <br>
  <a href="while.html">while</a> - Execute commands<br>
Equivalent Windows command:
<a href="../nt/if.html">IF</a> - Conditionally perform a command</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

