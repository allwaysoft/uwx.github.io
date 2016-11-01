---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="security.html">security</a> keychain settings </h1> 
<pre>   lock-keychain [-h] [-a|<i>keychain</i>]
            Lock keychain, or the default keychain if none is specified.  If the -a option is specified, all
            keychains are locked.

   unlock-keychain [-hu] [-p <i>password</i>] [<i>keychain</i>]
            Unlock keychain, or the default keychain if none is specified.

   set-keychain-settings [-hlu] [-t <i>timeout</i>] [<i>keychain</i>]
            Set settings for keychain, or the default keychain if none is specified.

            -l              Lock keychain when the system sleeps.
            -u              Lock keychain after timeout interval.
            -t <i>timeout</i>      Specify timeout interval in seconds (omitting this option specifies "no timeout").
                            out").

   set-keychain-password [-h] [-o <i>oldPassword</i>] [-p <i>newPassword</i>] [<i>keychain</i>]
            Set password for keychain, or the default keychain if none is specified.

            -o <i>oldPassword</i>  Old keychain password (if not provided, will prompt)
            -p <i>newPassword</i>  New keychain password (if not provided, will prompt)

   show-keychain-info [-h] [keychain]
            Show the settings for keychain.

   dump-keychain [-adhir]
            Dump the contents of one or more keychains.

            -a              Dump access control list of items
            -d              Dump (decrypted) data of items
            -i              Interactive access control list editing mode
            -r              Dump raw (encrypted) data of items
</pre><p><b>Examples</b></p>
<p>Print all passwords stored in the default keychain this will prompt for a password (unless the keychain is already unlocked):</p>
<pre>security dump-keychain -d ~/Library/Keychains/login.keychain</pre>
<p class="quote"><i>“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller</i></p>
<p><b>Related:</b></p>
<p><a href="security.html">security</a> - Administer Keychains, keys, certificates and the Security framework.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="security-keychain-settings.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
