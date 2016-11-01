---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>onintr</h1> 
<p>On Interupt.
Control the action of a shell interrupt. </p>
<pre>Syntax
      onintr -

      onintr <i>label</i>

Options
 
   -       Ignore all interrupts

   <i>label</i>   Cause the shell to execute a `goto label' when 
           an interrupt is received or a child process terminates
           because it was interrupted.</pre>
<p>Without arguments, onintr restores the default action of the shell on interrupts, which is to terminate shell scripts or to return to the terminal command input level.</p>
<p>onintr is ignored if the shell is running detached and in system startup files (see FILES), where interrupts are disabled anyway.</p>
<p class="quote"><i>"Death is a nonmaskable interrupt"</i></p>
<p><b>Related:</b></p>
<p><a href="break.html">break</a> - Exit from a loop<br>
<a href="nice.html">nice</a> - Set the priority of a command</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="onintr.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
