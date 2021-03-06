---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>sched</h1> 
<p>Schedule a command to run at a later time. <br>
</p>
<pre>Syntax
      sched           Print the scheduled-event list

      sched [+]<i>hh:mm</i> <i>command</i>
                      Add <i>command </i>to the scheduled-event list

      sched -<i>n</i>        Remove item <i>n </i>from the event list
</pre>
<p><b>Examples</b><br>
<br>
Adding a command to the scheduled-event list.<br>
<br>
<span class="code">$ sched 11:00 echo It\'s eleven o\'clock.</span><br>
This causes  the shell to echo `It's eleven o'clock.' at 11 AM.<br>
<br>
The time may be in 12-hour AM/PM format:<br>
<span class="code">$ sched 5pm set prompt='[%h] It\'s after 5; go home: $'</span><br>
<br>
or may be relative to the current time:<br>
<span class="code">$ sched +2:15 /usr/lib/uucp/uucico -r1 -sother</span><br>
<br>
(A relative time specification may not use AM/PM format.)<br>
<br>
Removing an item from the event list:<br>
<br>
<span class="code">$ sched<br>
1  Wed Apr  4 15:42  /usr/lib/uucp/uucico -r1 -sother<br>
2  Wed Apr  4 17:00  set prompt=[%h] It\'s after 5; go home: $</span></p>
<p><span class="code"> $ sched -2<br>
$ sched<br>
1  Wed Apr  4 15:42  /usr/lib/uucp/uucico -r1 -sother</span></p>
<p>The <b>sched</b> shell variable may be set to define the format in which 
  the scheduled-event list is printed.</p>
<p>A command in the scheduled-event list is executed just before 
  the first prompt is printed after the time when the command is scheduled. </p>
<p>It is possible to miss the exact time when the command is to be 
  run, but an overdue command will execute at the next prompt. </p>
<p>A command which comes due while the shell is waiting for user 
  input is executed immediately. However, normal operation of an already-running 
  command will not be interrupted so that a scheduled-event list element may be 
  run. This mechanism is similar to, but not the same as, the at(1) command on 
  some Unix systems. </p>
<p>Its major disadvantage is that it may not run a command at exactly 
  the specified time. Its major advantage is that because sched runs directly 
  from the shell, it has access to shell variables and other structures. This 
  provides a mechanism for changing one's working environment based on the time 
  of day.</p>
<p>sched is a bash built-in command.</p>
<p class="quote"><i>"Management by objectives works if you know the objectives. 
  Ninety percent of the time you don't" ~ Peter 
  Drucker</i></p>
<p><b>Related:</b></p>
<p><a href="cron.html">cron</a> - Daemon to execute scheduled commands<a href="crontab.html"><br>
  crontab</a> - Schedule a command to run at a later time<br>
  <a href="jobs.html">jobs</a> - List active jobs</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="sched.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
