---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>umask</h1> 
<p><span class="body">User's file creation mask</span>. umask sets an environment variable which automatically sets file permissions on newly created files. i.e. it will set the shell process's 
file creation mask to <var>mode</var>.</p>
<pre>Syntax
      umask [-p] [-S] [<var>mode</var>]

Key
   mode  File creation mask

   -S    Print the mask in symbolic format

   -p    Output in a form that can be reused as input</pre>
<p> The mode specified works as a mask, if <var>mode</var> is omitted, the current value of the mask will be printed.</p>
<p>You can set umask in <span class="code"><a href="syntax-bashrc.html">/etc/bashrc</a></span> or <span class="code">/etc/profile</span> for all users. By default most Linux distros will set it to 0022 (022) or 0002 (002).</p>
<p>So the file will contain<br>
<span class="code">umask 022</span></p>
<p>If <var>mode</var> begins with a digit, it is interpreted as an octal number; if not, it is interpreted as a symbolic mode mask similar to that accepted by the <a href="chmod.html">chmod</a> command. <br>
<br>The return status is zero if the mode is successfully changed or if no <var>mode</var> argument is supplied, and non-zero otherwise. <br>
<br>Note that when the <i>mode</i> is interpreted as an octal number, each number of the umask is subtracted from <code>7</code>. Thus, a umask of <code>022</code> results in permissions of <code>755</code>. </p>
<p>umask is a bash built in command.<br>
<br>
<i class="quote">"Woe to him who doesn't know how to wear his mask, be he king or Pope!" ~ Luigi Pirandello</i></p>
<p><b>Related:</b></p>
<p><a href="export.html">export</a> - Set an environment variable<br>
<a href="chmod.html">chmod</a> - Change access permissions<br>
<a href="chown.html">chown</a> - Change file owner and group<br>
<a href="readonly.html">readonly</a> - Mark variables/functions as readonly</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

