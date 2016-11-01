---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>passwd</h1> 
<p>Modify a user password.</p>
<pre>SYNTAX
      passwd [<i>options</i>...] <accountname>

OPTIONS
   -d, --delete        delete the password for the named account (root only)

   -f, --force         force operation (effectively calls `chfn'?)

   -k, --keep-tokens   keep non-expired authentication tokens

   -l, --lock          lock the named account (root only)

   -S, --status        report password status on the named account (root only)

   --stdin             read new tokens from stdin (root only)

   -u, --unlock        unlock the named account (root only)

   -?, --help          Show this help message

   --usage             Display brief usage message</accountname></pre>
<p>If no options are specified - passwd will change the password 
  of the currently logged in user - will prompt for the old and new passwords.</p>
<p>Password aging (for new accounts) can be set to
enforce a limited lifetime for each password: <i>/etc/login.defs<br>
</i> parameters: PASS_MAX_DAYS, PASS_MIN_DAYS, PASS_WARN_AGE</p>
<p><i class="quote">"Chico : you can't come in unless you give the password... <br>
Well, what is the password?... I got it! Haddock! ~ Groucho Marx</i><b><br>
<br>
Related:</b><br>
<br>
<a href="chgrp.html">chgrp</a> - Change group ownership<br>
chage - 
Set password age<br>
<a href="chmod.html">chmod</a> - Change access permissions<br>
<a href="chown.html">chown</a> - Change file owner and group<br>
<a href="who.html">who</a> - Print who is currently logged in<br>
<i>/etc/default/useradd</i><br>
<i>/etc/login.defs</i><br>
<a href="/pass/">Password generator</a><br>
Equivalent Windows command: 
<a href="../nt/net_useradmin.html">NET USER</a> <i>username</i> * /domain</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

