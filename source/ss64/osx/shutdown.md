---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>shutdown</h1> 
<p>Close down the system at a given time. <br>
  Shutdown provides an automated shutdown procedure for super-users to nicely 
  notify users when the system is shutting down, saving them from system administrators, 
hackers, and gurus, who would otherwise not bother with such niceties. </p>
<pre>Syntax
      shutdown [-] [-h [-u] | -r | -s | -k] [-o [-n]] <i>time</i> [<i>warning-message</i> ...]

Key
   -h      The system is halted at the specified time.

   -k      Kick everybody off.  The -k option does not actually halt the system, but leaves
           the system multi-user with logins disabled (for all but super-user).

   -n      If the -o is specified, prevent the file system cache from being flushed by pass-
           ing -n option to halt(8) or reboot(8).  This option should probably not be used.

   -o      If -h or -r is specified, shutdown will execute halt(8) or reboot(8) instead of
           sending a signal to launchd(8).

   -r      The system is rebooted at the specified time.

   -s      The system is put to sleep at the specified time.

   -u      The system is halted up until the point of removing system power, but waits
           before removing power for 5 minutes so that an external UPS (uninterruptible
           power supply) can forcibly remove power.  This simulates a dirty shutdown to per-
           mit a later automatic power on. OS X uses this mode automatically with supported
           UPSs in emergency shutdowns.

    <i>time</i>   Time is the time at which shutdown will bring the system down and
           may be the word <b>now</b> (indicating an immediate shutdown) or specify a
           future time in one of two formats: +number, or yymmddhhmm, where
           the year, month, and day may be defaulted to the current system
           values.  The first form brings the system down in <i>number</i> minutes
           and the second at the absolute time specified.

     <i>warning-message</i>
           Any other arguments comprise the warning message that is broadcast
           to users currently logged into the system.

     -     If `-' is supplied as an option, the warning message is read from
           the standard input.

Example
 $ shutdown -h now We are going to shut the computer down right now.</pre>
<p>  At intervals, becoming more frequent as apocalypse approaches and starting at ten hours before shutdown, warning messages are displayed on the terminals of all users logged in. </p>
<p>At shutdown time a message is written in the system log, containing the time of shutdown, who initiated the shutdown and the reason. A terminate signal is then sent to launchd to bring the system down to single-user state (depending 
on above options). </p>
<p>A scheduled shutdown can be canceled by killing the shutdown process (a SIGTERM should<br>
suffice).</p>
<p>FILES<br>
<span class="code">/etc/nologin</span> tells login not to let anyone log in <br>
<span class="code">/fastboot</span> tells rc(8) not to run fsck when rebooting<br>
<span class="code">/usr/libexec/upsshutdown</span> - Run a command when the UPS shuts down. </p>
<p class="quote"><i>“Do all men kill the things they do not love?” ~ The Merchant of Venice</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/shutdown.8.html">shutdown man page</a> - Apple.com<br>
<a href="kill.html">kill</a> - Stop a process from running<br>
<a href="login.html">login</a> - log into the computer<br>
wall - write a message to users<br>
fastboot(8)<br>
<a href="reboot.html">reboot</a>    - Stop and restart the system<br>
<a href="uptime.html">uptime</a> - Show how long system has been running</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="shutdown.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
