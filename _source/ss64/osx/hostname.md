---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>hostname</h1> 
<p>Print or Set (temporarily) the name of current host system.</p>
<pre>Syntax
   hostname [-fs] [<i>name-of-host</i>]

Key
   -f    Include domain information in the printed name.
         This is the default behavior.

   -s    Trim off any domain information from the printed name.</pre>
<p> The super-user      can set the hostname by supplying a hastname argument.  <br>
To keep the hostname      between reboots, run `scutil --set HostName name-of-host'.</p>
<p>If a NetBIOSName has been configured, (it is typically set to = the hostname) the value is stored in a preference file:<br>
<span class="code">$ defaults read /Library/Preferences/SystemConfiguration/com.apple.smb.server NetBIOSName</span></p>
<p>You can set the NetBIOSName in System Preferences &gt; Network &gt;  active network port &gt; Advanced &gt;  WINS tab.</p>
<p><b>Examples</b></p>
<p>Display the current hostname</p>
<p><span class="code">$ hostname</span></p>
<p>The hostname is also stored in a system variable named HOSTNAME</p>
<p><span class="code">$ echo $HOSTNAME</span><br>
</p>
<p class="quote"><i>“ One thing you don't want to do as a host is be running around all evening. Do as much as you can ahead of time, so all you have to do is grill the main ingredients” ~ Bobby Flay</i></p><p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/hostname.1.html">hostname man page</a> - Apple.com<br>
<a href="scutil.html">scutil</a> - Manage system configuration parameters, including hostname<br>
<a href="dscacheutil.html">dscacheutil</a> -flushcache<br>
</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
