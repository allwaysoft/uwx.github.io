---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>xdg-open</h1> 
<p>Open a file or URL in the user's preferred application.</p>
<pre>Syntax
      xdg-open <i>file

      </i>xdg-open<i> URL</i>

      xdg-open --help

      xdg-open --manual

      xdg-open --version 

Options:
   files    The filename(s) to open, wildcards are accepted.</pre>
<p> If a URL is provided the URL will be opened in the user's preferred web browser. If a file is provided the file will be opened in the preferred application for files of that type. xdg-open supports file, ftp, http and https URLs.</p>
<p>xdg-open is for use inside a desktop session only. It is not recommended to use xdg-open as root. </p>
<p><b>Exit Codes
</b></p>
<blockquote>
<p>A non-zero exit code indicates failure:</p>
<p>0 Success<br>1 Error in command line syntax.<br>2 One of the files passed on the command line did not exist.<br>3 A required tool could not be found.<br>4 The action failed.</p>
</blockquote>
<p><b>Examples</b></p>
<p>Open the SS64.com website in the user's default browser:</p>
<p><span class="code">$ xdg-open 'http://www.ss64.com/'</span></p>
<p>Open a cat picture in the user's default image viewing application:</p>
<p><span class="code">$ xdg-open /tmp/foxtrot_the_cat.png</span></p>
<p class="quote"><i>“Do not run; scorn running with thy heels”  ~ Shakespeare</i></p>
<p><b>Related:</b><br>
<br>
<a href="kill.html">kill</a> - Stop a process from running<br>
<a href="open.html">open</a> - Open a file in its default application<br>
Equivalent Windows command: <a href="../nt/start.html">START</a> - Start a  program or command.</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="xdg-open.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

