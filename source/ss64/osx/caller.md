---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>caller</h1> 
<p>Return the context of any active subroutine call (a shell function or a script) executed with the . or <span class="code">source</span> builtins.</p>
<pre>Syntax
      caller [expr]</pre>
<p>Without <i>expr</i>, caller displays the line number and source filename
of the current subroutine call.  If a non-negative integer is supplied as  expr,  caller  displays
  the line number, subroutine name, and source file corresponding to that position in the
current execution call stack.  This extra information can be used, for  example,  to  print  a
stack  trace.   </p>
<p>The  current  frame is frame 0.  </p>
<p>The return value is 0 unless the shell is not
executing a subroutine call or <i>expr</i> does not correspond to a valid position in the call stack.</p>
<p><b>Example</b></p>
<pre>$ caller</pre>
<p> caller is a builtin command</p>
<p class="quote"><i>“...for the Pot to call the Kettle black” - William Penn</i></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="caller.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
