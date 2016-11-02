---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="security.html">security</a> cert</h1> 
<pre>   add-trusted-cert [-d] [-r <i>resultType</i>] [-p <i>policy</i>] [-a <i>appPath</i>] [-s <i>policyString</i>]
      [-e <i>allowedError</i>] [-u keyUsage] [-k <i>keychain</i>] [-i <i>settingsFileIn</i>] [-o <i>settingsFileOut</i>] [-D] <i>certFile</i>

            Add certificate (in DER or PEM format) from certFile to per-user or local Admin Trust Settings.
            When modifying per-user Trust Settings, user authentication is required via an authentication
            dialog. When modifying admin Trust Settings, the process must be running as root, or admin
            authentication is required.

            Options:
            -d              Add to admin cert store; default is user.
            -r <i>resultType</i>   resultType = trustRoot|trustAsRoot|deny|unspecified; default is trustRoot.
            -p <i>policy</i>       Specify policy constraint (ssl, smime, codeSign, IPSec, iChat, basic, swUpdate,
                            pkgSign, pkinitClient, pkinitServer, eap).
            -r <i>resultType</i>   resultType = trustRoot|trustAsRoot|deny|unspecified; default is trustRoot.
            -a <i>appPath</i>      Specify application constraint.
            -s <i>policyString</i>
                            Specify policy-specific string.
            -e <i>allowedError</i>
                            Specify allowed error (an integer value, or one of: certExpired, hostnameMismatch)
                            match)
            -u <i>keyUsage</i>     Specify key usage, an integer.
            -k <i>keychain</i>     Specify keychain to which cert is added.
            -i <i>settingsFileIn</i>
                            Input trust settings file; default is user domain.
            -o <i>settingsFileOut</i>
                            Output trust settings file; default is user domain.
            -D              Add default setting instead of per-cert setting. No certFile is specified when
                            using this option

            Examples
                  security&gt; add-trusted-cert /tmp/cert.der
                  security&gt; add-trusted-cert -d .tmp/cert.der

   remove-trusted-cert [-d] [-D] <i>certFile</i>
          Remove certificate (in DER or PEM format) in certFile from per-user or local Admin Trust Settings.
          When modifying per-user Trust Settings, user authentication is required via an authentication dialog.
          log. When modifying admin Trust Settings, the process must be running as root, or admin authentication
          cation is required.

          Options:
          -d              Remove from admin cert store; default is user.
          -D              Remove Default Root Cert setting instead of an actual cert setting. No certFile is
                          specified when using this option.</pre>
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
