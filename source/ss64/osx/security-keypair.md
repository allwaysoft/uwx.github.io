---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="security.html">security</a> keypair</h1> 
<pre>   create-keypair [-h] [-a <i>alg</i>] [-s <i>size</i>] [-f <i>date</i>] [-t <i>date</i>]
      [-d <i>days</i>] [-k <i>keychain</i>] [-A|-T <i>appPath</i>] [name]

            Create an asymmetric key pair.

            -a <i>alg</i>          Use alg as the algorithm, can be rsa, dh, dsa or fee (default rsa)
            -s <i>size</i>         Specify the keysize in bits (default 512)
            -f <i>date</i>         Make a key valid from the specified date
            -t <i>date</i>         Make a key valid to the specified date
            -d <i>days</i>         Make a key valid for the number of days specified from today
            -k <i>keychain</i>     Use the specified keychain rather than the default
            -A              Allow any application to access this key without warning (insecure, not recommended!)
                            mended!)
            -T <i>appPath</i>      Specify an application which may access this key (multiple -T options are
                            allowed)</pre>
<p class="quote"><i>“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller</i></p>
<p><b>Related:</b></p>
<p><a href="security.html">security</a> - Administer Keychains, keys, certificates and the Security framework.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="security-keypair.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
