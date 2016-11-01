---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="security.html">security</a> settings </h1> 
<pre>   verify-cert [-c <i>certFile</i>] [-r <i>rootCertFile</i>] [-p <i>policy</i>] [-k <i>keychain</i>] [-n] [-L] [-l] [-e <i>emailAddress</i>]
   [-s <i>sslHost</i>] [-q]
          Verify one or more certificates.

          Options:
          -c <i>certFile</i>     Certificate to verify, in DER or PEM format. Can be specified more than once; leaf
                          certificate has to be specified first.
          -r <i>rootCertFile</i>
                          Root certificate, in DER or PEM format. Can be specified more than once. If not
                          specified, the system anchor certificates are used. If one root certificate is
                          specified, and zero (non-root) certificates are specified, the root certificate is
                          verified against itself.
          -p <i>policy</i>       Specify verification policy (ssl, smime, codeSign, IPSec, iChat, basic, swUpdate,
                          pkgSign, pkinitClient, pkinitServer, eap). Default is basic.
          -k <i>keychain</i>     Keychain to search for intermediate certs. Can be specified multiple times.
                          Default is the current user's keychain search list.
          -n              Avoid searching any keychains.
          -L              Use local certificates only. If an issuing CA certificate is missing, this option
                          will avoid accessing the network to fetch it.
          -l              Specifies that the leaf certificate is a CA cert. By default, a leaf certificate
                          with a Basic Constraints extension with the CA bit set fails verification.
          -e <i>emailAddress</i>
                          Specify email address for the smime policy.
          -s <i>sslHost</i>      Specify SSL host name for the ssl policy.
          -q              Quiet, no stdout or stderr.

          Examples

          security&gt; verify-cert -c applestore0.cer -c applestore1.cer -p ssl -s store.apple.com

          security&gt; verify-cert -r serverbasic.crt</pre>
<p class="quote"><i>“Even in the common affairs of life, in love, friendship, and marriage, how little security have we when we trust our happiness in the hands of others!</i><i>” ~ William Hazlitt (On Living to One's-Self) </i></p>
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
