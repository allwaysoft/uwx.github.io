---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>caffeinate</h1> 
<p>Prevent the system from sleeping on behalf of a utility.</p>
<pre>Syntax
      caffeinate [-disu] [-t <i>timeout</i>] [-w <i>pid</i>] [<i>utility arguments</i>...]

Key
   -d      Create an assertion to prevent the display from sleeping.

   -i      Create an assertion to prevent the system from idle sleeping.

   -m      Create an assertion to prevent the disk from idle sleeping.

   -s      Create an assertion to prevent the system from sleeping. This
           assertion is valid only when system is running on AC power.

   -u      Create an assertion to declare that user is active.
           If the display is off, this option turns the display on and prevents the display from going
           into idle sleep. If a timeout is not specified with '-t' option, then this assertion is
           taken with a default of 5 second timeout.

   -t      Specifies the timeout value in seconds for which this assertion has to be valid.
           The assertion is dropped after the specified timeout.
           Timeout value is not used when an utility is invoked with this command.

   -w      Waits for the process with the specified pid to exit. Once the  the process exits, the
           assertion is also released.  This option is ignored when used with utility option.</pre>
<p>Location: /usr/bin/caffeinate</p>
<p><b>Example</b></p>
<p>Make caffeinate fork a process, exec "make" in it, and hold an assertion that prevents idle sleep as long as that process is running:</p>
<p class="code">$ caffeinate -i make</p>
<p class="quote"><i>“A cup of coffee commits one to forty years of friendship” ~ Turkish Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="pmset.html">pmset</a> - Power Management settings</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="caffeinate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
