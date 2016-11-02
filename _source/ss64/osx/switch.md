---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>switch</h1> 
<p>Conditionally perform a command<span class="body">. </span></p>
<pre>Syntax 
      switch (string)
       case str1:
     ...
     breaksw
       ...
       default:
     ...
     breaksw
       endsw   </pre>
<p><span class="body">Each case label is successively matched, against the specified 
  <i>string</i> which is first command and filename expanded. </span></p>
<p><span class="body">The file metacharacters `*', `?' and `[...]' may be used 
  in the case labels, which are variable expanded. </span></p>
<p><span class="body">If none of the labels match before a `default' label is 
  found, then the execution begins after the default label. </span></p>
<p><span class="body">Each case label and the default label must appear at the 
  beginning of a line. The command breaksw causes execution to continue after 
  the endsw. Otherwise control may fall through case labels and default labels 
  as in C. </span></p>
<p><span class="body">If no label matches and there is no default, execution continues 
  after the endsw.</span> <span class="body"><br>
  <br>
  </span><span class="quote"><i>“The most important thing in an argument, next to being right, is to leave an escape hatch for your opponent, so that he can gracefully swing over to your side without too much apparent loss of face”  ~ Sydney J. Harris </i></span></p>
<p><b>Related:</b></p>
<p>
continue - Resume the next iteration of a while or if loop. <br>
<a href="for.html">for</a> - Loop, expand <i>words</i>, and execute <i>commands</i><br>
<a href="if.html">if</a> - Conditionally perform a command <br>
<a href="while.html">while</a> - Execute commands</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
