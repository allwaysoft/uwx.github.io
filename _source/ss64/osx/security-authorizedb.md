---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="security.html">security</a> authorize db </h1> 
<pre>   authorizationdb read <right-name>

   authorizationdb write <right-name> [allow|deny|<rulename>]

   authorizationdb remove <right-name>
          Read/Modify authorization policy database. Without a rulename write will read a dictionary as a
          plist from stdin.

          Examples

          security&gt; security authorizationdb read system.privilege.admin &gt; /tmp/aewp-def
                   Read definition of system.privilege.admin right.

          security&gt; security authorizationdb write system.preferences &lt; /tmp/aewp-def
                   Set system.preferences to definition of system.privilege.admin right.

          security&gt; security authorizationdb write system.preferences authenticate-admin
                   Every change to preferences requires an Admin user to authenticate.</right-name></rulename></right-name></right-name></pre>
<p class="quote"><i>“Even in the common affairs of life, in love, friendship, and marriage, how little security have we when we trust our happiness in the hands of others!</i><i>” ~ William Hazlitt (On Living to One's-Self) </i></p>
<p><b>Related:</b></p>
<p><a href="security.html">security</a> - Administer Keychains, keys, certificates and the Security framework.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="security-authorizedb.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
