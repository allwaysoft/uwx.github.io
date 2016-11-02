---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>who</h1> 
<p>Print all usernames currently logged on, showing for each user 
the login name, tty name, the date and time of login, and hostname if not local.</p>
<pre>Syntax
      who [-mTuH] [<i>file</i>]
      who am i

Options
   -m    Only print information about the current terminal.
         This is the POSIX way of saying who am i.

   -T    Print a character after the user name indicating the state of the
         terminal line: `+' if the terminal is writable; `-' if it is not;
         and `?' if a bad line is encountered.

   -u    Print the idle time for each user.

   -H    Write column headings above the regular output.

   am I  Returns the invoker's real user name.

   <i>file</i>  By default, who gathers information from the file /var/run/utmp. An
         alternative file may be specified which is usually /var/log/wtmp
         (or /var/log/wtmp.[0-6] depending on site policy as wtmp can grow
         quite large and daily versions may or may not be kept around after
         compression by ac(8)).  The wtmp file contains a record of every
         login, logout, crash, shutdown and date change since wtmp was last
         truncated or created.</pre>
<p><b>Notes<br>
  </b>If /var/log/wtmp is being used as the file, the user name may be empty or 
  one of the special characters '|', '}' and '~'. Logouts produce an out- put 
  line without any user name. For more information on the special characters, 
  see utmp(5).</p>
<p class="quote"><i>“The more the merrier” ~ John Heywood</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/who.1.html">who man page</a> - Apple.com<br>
last - indicate last logins of users and ttys<br>
mesg - display (or do not display) messages from other users<br>
users -  Print login names of users currently logged in</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="who.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
