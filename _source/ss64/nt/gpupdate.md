---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>GPUPDATE.exe</h1> 
<p>Update Group Policy settings.</p>
<pre>Syntax
       GPUpdate  [/Force] [/Logoff] [/Boot] [/Sync]
           [/Target:{Computer | User}] [/Wait:<i>value</i>]

Key:

   /Force         Apply all policy settings, not just those that have changed.

   /Logoff        Logoff after the Group Policy settings have been updated. 
                  Some group policy client-side extensions are only processed when a
                  user logs on. (Software Install, Folder Redirection.)

   /Boot          Restart after the Group Policy settings are applied. 
                  Some group policy client-side extensions are only processed at startup
                  (e.g. computer-targeted Software Install)

   /Sync          Apply the next foreground policy synchronously (in the background).
                  This can be applied to computer boot and/or user logon. (see /Target)

   /Target:       Update only User or only Computer policy settings
                  default = both

   /Wait:          The number of seconds to wait for policy processing.
                  default = 600 (10 minutes)
                  '0'  = do not wait.
                  '-1' = wait indefinitely.
                  If the time limit is exceeded, the command prompt returns,
                  but policy processing continues.</pre>
<p>/Logoff and /Boot will have no effect if there are no client-side extensions called that require a logoff/reboot. /Force and /Wait parameters will be ignored if /sync is specified. </p>
<p> GPUPDATE will apply new and changed policies, it will not remove an existing setting <span class="body">where the policy is set to "not configured" </span></p>
<p><span class="body"><b>Example</b></span></p>
<p><span class="code">C:\&gt; GPUpdate /Force</span></p>
<p><span class="quote"><i>When the people are being beaten with a stick, they are not much happier if it is called "The People's Stick" - Mikhail Bakunin (Statism and Anarchy)</i></span><span class="body"><i><br>
  </i> <br>
  </span> <b>Related:</b><br>
  <br>
<a href="ntrights.html">NTRIGHTS</a> - Edit user account rights<br>
HKCU\Software\Microsoft\Windows\CurrentVersion\GroupPolicy\History<br>
HKLM\Software\Microsoft\Windows\CurrentVersion\GroupPolicy\History</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="gpupdate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

