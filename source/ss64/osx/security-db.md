---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="security.html">security</a> Create db </h1> 
<pre>   create-db [-aho0] [-g dl|cspdl] [-m <i>mode</i>] [<i>name</i>]
            Create a db using the DL.  If name isn't provided security will prompt the user to type a name.

            Options:
            -a              Turn off autocommit
            -g dl|cspdl     Use the AppleDL (default) or AppleCspDL
            -m <i>mode</i>         Set the file permissions to mode.
            -o              Force using openparams argument
            -0              Force using version 0 openparams

            Examples

            security&gt; create-db -m 0644 test.db

            security&gt; create-db -g cspdl -a test2.db</pre>
<p class="quote"><i>“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller</i></p>
<p><b>Related:</b></p>
<p><a href="security.html">security</a> - Administer Keychains, keys, certificates and the Security framework.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="security-db.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
