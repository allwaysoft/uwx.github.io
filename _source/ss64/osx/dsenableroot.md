---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>dsenableroot</h1> 
<p>Enable or disable the root account.</p>
<pre>Syntax
      dsenableroot [-d] [-u <i>username</i>] [-p <i>password</i>] [-r <i>rootPassword</i>]

Key
   -u   Username of a user that has administrative privileges on this computer.

   -p   Password to use in conjunction with the specified username.
        If this is not specified, you will be prompted for entry.

   -r   Password to be used for the root account.
        If this is not specified for enabling, you will be prompted for entry.</pre>
<p>dsenableroot sets the password for the root account if enabling the root      user account.  Otherwise, if disable [-d] is chosen, the root account      passwords are removed and the root user is disabled.</p>
<p><b>Examples</b></p>
<p>Sets a password and enable the root account, your username will be used and you will be queried for both your<br>
password and the new root password:<br>
<span class="code">$ dsenableroot</span><br>
<br>
 Disable the root account, your username will be used and you will be queried for your               password.      <br>
<span class="code">$ dsenableroot -d</span></p>
<p>The supplied arguments will be used to enable the root account:<br>
<span class="code">$ dsenableroot -u fred -p flintst003 -r rootpa55w0rd</span></p>
<p>The supplied arguments will be used to disable the root account:<br>
<span class="code">$ dsenableroot -d -u fred -p flintst003</span></p>
<p class="quote"><i>"Make mistakes, make mistakes, make mistakes. Just make sure they’re your mistakes” ~ Fiona Apple</i></p>
<p><b>Related:</b></p>
<p><a href="id.html">groups</a> - Print group names a user is in<br>
<a href="passwd.html">passwd</a> - Modify a user password</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
