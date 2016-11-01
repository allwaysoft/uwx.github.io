---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>case</h1> 
<p>Expand <var>words</var>, and match against patern.</p>
<pre>Syntax
      case <i>word</i> in [ [(] <i>pattern</i> [ | <i>pattern</i> ] ... ) <i>list</i> ;; ] ... esac</pre>
<p>A case command first expands <i>word</i>, and tries to match it against each <i>pattern</i> in turn, using
the same matching rules as for pathname expansion (see Pathname Expansion). </p>
<p>The <i>word</i> is
expanded using tilde expansion, parameter and variable expansion, arithmetic substitution,
command substitution, process substitution and quote removal. </p>
<p>Each <i>pattern</i> examined is
expanded using tilde expansion, parameter and variable expansion, arithmetic substitution,
command substitution, and process substitution. If the shell option nocasematch is enabled,
the match is performed without regard to the case of alphabetic characters. </p>
<p>When a match is
found, the corresponding <i>list</i> is executed. After the first match, no subsequent matches are
attempted. </p>
<p>The exit status is zero if no pattern matches. Otherwise, it is the exit status
of the last command executed in list.</p>
<p>case is a bash builtin command </p>
<p class="quote"><i>“In expanding the field of knowledge, we but increase the horizon of ignorance” ~ Henry Miller </i> </p>
<p><b>Related:</b></p>
<p><a href="break.html">break</a> - Exit from a loop<br>
<a href="for.html">for</a> - Loop command<br>
<a href="while.html">while</a> - Loop command<br>
continue - Resume the next iteration of a while or for loop</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="case.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
