---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="security.html">security</a> password </h1> 
<pre>   add-generic-password [-h] [-a <i>account</i>] [-s <i>service</i>] [-w <i>password</i>] [options...] [<i>keychain</i>]
            Add a generic password item.

            -a account      Specify account name (required)
            -c creator      Specify item creator (optional four-character code)
            -C type         Specify item type (optional four-character code)
            -D kind         Specify kind (default is "application password")
            -G value        Specify generic attribute value (optional)
            -j comment      Specify comment string (optional)
            -l label        Specify label (if omitted, service name is used as default label)
            -s service      Specify service name (required)
            -p password     Specify password to be added (legacy option, equivalent to -w)
            -w password     Specify password to be added
            -A              Allow any application to access this item without warning (insecure, not recommended!)
                            mended!)
            -T appPath      Specify an application which may access this item (multiple -T options are
                            allowed)
            -U              Update item if it already exists (if omitted, the item cannot already exist)

            By default, the application which creates an item is trusted to access its data without warning.
            You can remove this default access by explicitly specifying an empty app pathname: -T "". If no
            keychain is specified, the password is added to the default keychain.

   add-internet-password [-h] [-a <i>account</i>] [-s <i>server</i>] [-w <i>password</i>] [<i>options</i>...] [<i>keychain</i>]
            Add an internet password item.

            -a <i>account</i>      Specify account name (required)
            -c <i>creator</i>      Specify item creator (optional four-character code)
            -C <i>type</i>         Specify item type (optional four-character code)
            -d <i>domain</i>       Specify security domain string (optional)
            -D <i>kind</i>         Specify kind (default is "application password")
            -j <i>comment</i>      Specify comment string (optional)
            -l <i>label</i>        Specify label (if omitted, service name is used as default label)
            -p <i>path</i>         Specify path string (optional)
            -P <i>port</i>         Specify port number (optional)
            -r <i>protocol</i>     Specify protocol (optional four-character SecProtocolType, e.g. "http", "ftp ")
            -s <i>server</i>       Specify server name (required)
            -t <i>authenticationType</i>
                            Specify authentication type (as a four-character SecAuthenticationType, default
                            is "dflt")
            -w <i>password</i>     Specify password to be added
            -A              Allow any application to access this item without warning (insecure, not recommended!)
                            mended!)
            -T <i>appPath</i>      Specify an application which may access this item (multiple -T options are
                            allowed)
            -U              Update item if it already exists (if omitted, the item cannot already exist)

            By default, the application which creates an item is trusted to access its data without warning.
            You can remove this default access by explicitly specifying an empty app pathname: -T "". If no
            keychain is specified, the password is added to the default keychain.

   add-certificates [-h] [-k <i>keychain</i>] <i>file</i>...
            Add certficates contained in the specified files to the default keychain.  The files must contain
            one DER encoded X509 certificate each.
            -k <i>keychain</i>     Use keychain rather than the default keychain.
</pre>
<p class="quote"><i>“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller</i></p>
<p><b>Related:</b></p>
<p><a href="security.html">security</a> - Administer Keychains, keys, certificates and the Security framework.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="security-password.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
