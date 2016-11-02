---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="security.html">security</a> keychain commands </h1> 
<pre>   list-keychains [-h] [-d user|system|common|dynamic] [-s [<i>keychain</i>...]]
            Display or manipulate the keychain search list.

            -d user|system|common|dynamic
                     Use the specified preference domain.
            -s       Set the search list to the specified keychains.

   default-keychain [-h] [-d user|system|common|dynamic] [-s [<i>keychain</i>]]
            Display or set the default keychain.

            -d user|system|common|dynamic
                     Use the specified preference domain.
            -s       Set the default keychain to the specified keychain.
                     Unset it if no keychain is specified.

   login-keychain [-h] [-d user|system|common|dynamic] [-s [<i>keychain</i>]]
            Display or set the login keychain.

            -d user|system|common|dynamic
                     Use the specified preference domain.
            -s       Set the login keychain to the specified keychain.
                     Unset it if no keychain is specified.

   create-keychain [-hP] [-p <i>password</i>] [<i>keychain</i>...]
            Create keychains and add them to the search list.

            -P              Prompt the user for a password using the SecurityAgent.
            -p <i>password</i>     Use password as the password for the keychains being created.

            If neither -P or -p password are specified, the user is prompted for a password on the command
            line.

   delete-keychain [-h] [<i>keychain</i>...]
            Delete keychains and remove them from the search list.
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
