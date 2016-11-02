---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="security.html">security</a> Find Certificate </h1> 
<pre>   find-certificate [-h] [-a] [-c <i>name</i>] [-e <i>emailAddress</i>] [-m] [-p] [-Z] [<i>keychain</i>...]
            Find a certificate item.  If no keychain arguments are provided, the default search list is
            used.

            Options:
            -a              Find all matching certificates, not just the first one
            -c <i>name</i>         Match on name when searching (optional)
            -e <i>emailAddress</i>
                            Match on emailAddress when searching (optional)
            -m              Show the email addresses in the certificate
            -p              Output certificate in pem format.  Default is to dump the attributes and keychain
                            the cert is in.
            -Z              Print SHA-1 hash of the certificate

            Examples

            security&gt; find-certificate -a -p &gt; allcerts.pem
                     Exports all certificates from all keychains into a pem file called allcerts.pem.

            security&gt; find-certificate -a -e me@foo.com -p &gt; certs.pem
                     Exports all certificates from all keychains with the email address me@foo.com into a
                     pem file called certs.pem.

            security&gt; find-certificate -a -c MyName -Z login.keychain | grep ^SHA-1
                     Print the SHA-1 hash of every certificate in 'login.keychain' whose common name
                     includes 'MyName'</pre>
<p class="quote"><i>“Even in the common affairs of life, in love, friendship, and marriage, how little security have we when we trust our happiness in the hands of others!</i><i>” ~ William Hazlitt (On Living to One's-Self) </i></p>
<p><b>Related:</b></p>
<p><a href="security.html">security</a> - Administer Keychains, keys, certificates and the Security framework.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="security-find-cert.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
