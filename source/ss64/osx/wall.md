---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem -->
<h1>wall</h1> 
<p>Write a message to users.</p>
<pre>Syntax
      wall [-g <i>group</i>] [<i>file</i>]

Key
   -g      Send messages to users in this group.
           This option may be specified multiple times, and any user in any of the specified groups
           will receive the message.</pre>
<p>The wall utility displays the contents of file or, by default, its standard input, on the terminals of all currently logged in users.
Only the super-user can write on the terminals of users who have chosen to deny messages or are using a program which automatically denies messages.</p>
<p>The wall utility does not recognize multibyte characters.</p>
<p><b>Examples</b></p>
<p>Replace spaces in the clipboard text with <span class="code">%20 </span></p>
<p class="code">$ echo Hello World | Wall</p>
<p class="quote"><i>“All in all it was just a brick in the wall.
<br>
All in all it was all just bricks in the wall” ~ Pink Floyd</i></p>
<p><b>Related:</b></p>
<p><a href="echo.html">echo</a> - Display text on screen<br>
<a href="say.html">say</a> - Convert text to audible speech</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="wall.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
