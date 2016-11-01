---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="security.html">security</a> authorize </h1> 
<pre>   authorize [-updPiew] [right...]
          Authorize requested right(s).  The extend-rights flag will be passed by default.

          Options:
          -u              Allow user interaction.
          -p              Allow returning partial rights.
          -d              Destroy acquired rights.
          -P              Pre-authorize rights only.
          -l              Operate authorization in least privileged mode.
          -i              Internalize authref passed on stdin.
          -e              Externalize authref to stdout
          -w              Wait while holding AuthorizationRef until stdout is closed. This will allow client
                          to read externalized AuthorizationRef from pipe.

          Examples

          security&gt; security authorize -ud my-right
                   Basic authorization of my-right.

          security&gt; security -q authorize -uew my-right | security -q authorize -i my-right
                   Authorizing a right and passing it to another command as a way to add authorization to
                   shell scripts.</pre>
<p class="quote"><i>“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller</i></p>
<p><b>Related:</b></p>
<p><a href="security.html">security</a> - Administer Keychains, keys, certificates and the Security framework.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="security-authorize.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
