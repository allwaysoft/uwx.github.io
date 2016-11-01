---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="security.html">security</a> Find Identity </h1> 
<pre>   find-identity [-h] [-p <i>policy</i>] [-s <i>string</i>] [-v] [<i>keychain</i>...]
            Find an identity (certificate + private key) satisfying a given policy. If no policy arguments
            are provided, the X.509 basic policy is assumed. If no keychain arguments are provided, the
            default search list is used.

            Options:
            -p <i>policy</i>       Specify policy to evaluate (multiple -p options are allowed). Supported policies:
                            basic, ssl-client, ssl-server, smime, eap, ipsec, ichat, codesigning, sysdefault,
                            default, sys-kerberos-kdc
            -s <i>string</i>       Specify optional policy-specific string (e.g. a DNS hostname for SSL, or RFC822
                            email address for S/MIME)
            -v              Show valid identities only (default is to show all identities)

            Examples

            security&gt; find-identity -v -p ssl-client
                     Display valid identities that can be used for SSL client authentication

            security&gt; find-identity -p ssl-server -s www.domain.com
                     Display identities for a SSL server running on the host 'www.domain.com'

            security&gt; find-identity -p smime -s user@domain.com
                     Display identities that can be used to sign a message from 'user@domain.com'
</pre>
<p class="quote"><i>“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller</i></p>
<p><b>Related:</b></p>
<p><a href="security.html">security</a> - Administer Keychains, keys, certificates and the Security framework.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
