---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="security.html">security</a> settings </h1> 
<pre>   dump-trust-settings [-s] [-d]
          Display Trust Settings.

          Options:
          -s              Display trusted system certs; default is user.
          -d              Display trusted admin certs; default is user.

   user-trust-settings-enable [-d] [-e]
          Display or manipulate user-level Trust Settings. With no arguments, shows the current state of the
          user-level Trust Settings enable. Otherwise enables or disables user-level Trust Settings.

          Options:
          -d              Disable user-level Trust Settings.
          -e              Enable user-level Trust Settings.

   trust-settings-export [-s] [-d] <i>settings_file</i>
          Export Trust Settings to the specified file.

          Options:
          -s              Export system Trust Settings; default is user.
          -d              Export admin Trust Settings; default is user.

   trust-settings-import [-d] <i>settings_file</i>
          Import Trust Settings from the specified file. When modifying per-user Trust Settings, user
          authentication is required via an authentication dialog. When modifying admin Trust Settings, the
          process must be running as root, or admin authentication is required.

          Options:
          -d              Import admin Trust Settings; default is user.</pre>
<p class="quote"><i>“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller</i></p>
<p><b>Related:</b></p>
<p><a href="security.html">security</a> - Administer Keychains, keys, certificates and the Security framework.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="security-settings.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
