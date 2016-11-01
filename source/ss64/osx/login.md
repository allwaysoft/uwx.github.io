---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>login</h1> 
<p>Log into the computer.<br>
  If no user is specified, or if password authentication of the user fails, login 
prompts for a user name.</p>
<pre>Syntax
       login [-fp] [-h <i>hostname</i>] [<i>user</i>]

       login -f [-lpq] [-h <i>hostname</i>] [<i>user</i> [<i>prog</i> [<i>args</i>...]]]

Options
   -f   The -f option is used when a user name is specified to indicate
        that proper authentication has already been done and that no
        password need be requested.  This option can only be used by the
        super-user or when an already logged in user is logging in as
        themselves.

   -h   The -h option specifies the host from which the connection was
        received. It is used by various daemons such as telnetd(8).
        This option can only be used by the super-user.

   -l   Tells the program executed by login that this is not a login session 
        (by convention, a login session is signalled to the program with a hyphen as
        the first character of argv[0]; this option disables that), and prevents it
        from chdir(2)ing to the user's home directory. The default is to add
        the hyphen (this is a login session).

   -p   By default, login discards any previous environment. The -p
        option disables this behavior.

   -q   This forces quiet logins, as if a .hushlogin is present.</pre>
<p>If the file /etc/nologin exists, login dislays its contents to 
  the user and exits. This is used by <a href="shutdown.html">shutdown</a> to 
  prevent users from logging in when the system is about to go down.</p>
<p>Immediately after logging a user in, login displays the system 
  copyright notice, the date and time the user last logged in, the message of 
  the day as well as other information. If the file `.hushlogin' exists in the 
  user's home directory, all of these messages are suppressed. This is to simplify 
  logins for non-human users, such as uucp(1). Login then records an entry in 
  the wtmp(5) and utmp(5) files and executes the user's command interpreter.</p>
<p>Login enters information into the environment (see environ(7)) 
  specifying the user's home directory (HOME), command interpreter (SHELL), search 
  path (PATH), terminal type (TERM) and user name (both LOGNAME and USER). </p>
<p>The login utility will submit an audit record when login succeeds or fails.  Failure to      determine the current auditing state will result in an error exit from login.</p>
<p>FILES<br>
  /etc/motd message-of-the-day <br>
  /etc/nologin disallows logins <br>
  /var/run/utmpx current logins<br>
 /var/mail/user system mailboxes <br>
.hushlogin makes login quieter <br>
/etc/security/audit_user                         user flags for auditing      <br>
/etc/security/audit_control                         global flags for auditing</p>
<p class="quote"><i>“Leave behind all hope, ye who enter here“ ~ sign above the entrance to Dante's hell </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/login.1.html">login man page</a> - Apple.com<br>
<a href="passwd.html">passwd</a> - Modify a user password<br>
<a href="syntax-bashrc.html">bashrc</a><br>
rlogin - Connect to remote host system</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
