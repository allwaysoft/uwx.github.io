---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>umask</h1> 
<p><span class="body">User's file creation mask</span>. Set the shell process's 
file creation mask to <var>mode</var>.</p>
<pre>Syntax
      umask [-p] [-S] [<var>mode</var>]

Key
   mode  File creation mask
   -S    Print the mask in symbolic format (the default is an octal number)
   -p    Output in a form that may be reused as input (if <i>mode </i>is omitted)</pre>
<p> The current value of the mask will be printed if <var>mode</var> is omitted. By default OS X will set it to 0022 (022)</p>
<p> If mode begins with a digit, it is interpreted as an octal number; otherwise it is interpreted as a symbolic mode mask similar to that accepted by <a href="chmod.html">chmod</a>. </p>
<p> Note that when the <i>mode</i> is interpreted as an octal number, each number of the umask is subtracted from <code>7</code>. Thus, a umask of <code>022</code> results in permissions of <code>755</code>. </p>
<p>The return status is 0 if the mode was successfully changed or if no <i>mode</i> argument was supplied, and false otherwise.</p>
<p> <b>Examples<br>
  </b>Example values for the mask:<br>
  022, gives read and execute access to the group and others.<br>
  <br>
  The return status is zero if the mode is successfully changed or if no <var>mode</var> 
  argument is supplied, and non-zero otherwise. <br>
  <br>
  Note that when the mode is interpreted as an octal number, each number of the 
  umask is subtracted from <code>7</code>. Thus, a umask of <code>022</code> results 
  in permissions of <code>755</code>. </p>
<p>umask is a bash built in command.<br>
  <br>
  <i class="quote">"Woe to him who doesn't know how to wear his mask, be he king or Pope!" 
  ~ Luigi Pirandello</i></p>
<p><b>Related:</b></p>
<p><a href="chmod.html">chmod</a> - Change access permissions<br>
  <a href="chown.html">chown</a> - Change file owner and group</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
