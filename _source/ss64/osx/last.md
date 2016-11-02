---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem -->
<h1>last</h1> 
<p> Indicate the last login of users and ttys.</p>
<p>The interfaces in file &lt;utmp.h&gt; are all DEPRECATED and are only provided for compatibility with previous releases of Mac OS X.  See pututxline(3) and utmpx(5) for the supported      interfaces.</p>
<pre>Syntax
      last [-<i>n</i>] [-h <i>host</i>] [-t <i>tty</i>] [<i>user</i> ...]

Key
   -n         Limits the report to <i>n</i> lines.

   -h <i>host</i>    Host names may be names or internet numbers.

   -t <i>tty</i>     Specify the tty.  Tty names may be given fully or abbreviated,
              for example, 'last -t 03' is equivalent to 'last -t  tty03'.
</pre>
<p> Last will list the sessions of specified users, ttys, and hosts, in      reverse time order.  Each line of output contains the user name, the tty      from which the session was conducted, any hostname, the start and stop      times for the session, and the duration of the session.  </p>
<p>If the session      is still continuing or was cut short by a crash or shutdown, last will indicate this.</p>
<p>If multiple arguments are given, the information which applies to any of      the arguments is printed, e.g., 'last root -t console' would list all      of ``root's'' sessions as well as all sessions on the console terminal.      </p>
<p>If no users, hostnames or terminals are specified, last prints a record      of all logins and logouts.</p>
<p> The pseudo-user <span class="code">reboot</span> logs in at reboots of the system, thus `last      reboot' will give an indication of mean time between reboot.</p>
<p> If last is interrupted, it indicates to what date the search has progressed.  If interrupted with a quit signal last indicates how far the      search has progressed and then continues.</p>
<p class="quote"><i>"Arithmetic is being able to count up to twenty without taking off your shoes" ~ Mickey Mouse</i></p>
<p><b>Related:</b></p>
<p><a href="login.html">login</a> - log into the computer
<br>
logout    - Exit a login shell</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="last.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
