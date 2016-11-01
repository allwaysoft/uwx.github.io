---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>su</h1> 
<p>Substitute user identity<br>
  Run a command with substitute user and 
  group id, allow one user to temporarily become another user. It runs a command 
  (often an interactive shell) with the real and effective user id, group id, 
and supplemental groups of a given <i>user</i>. </p>
<pre>Syntax
      su [<i>options</i>]... [<i>user</i> [<i>arg</i>]...]

Options

-c <i>COMMAND</i>
--command=<i>COMMAND</i>
     Pass <i>COMMAND</i>, a single command line to run, to the shell with a
     -c option instead of starting an interactive shell.

-f
--fast
     Pass the `-f' option to the shell.  This probably only makes sense
     if the shell run is `csh' or `tcsh', for which the `-f' option
     prevents reading the startup file (`.cshrc').  With Bourne-like
     shells, the `-f' option disables file name pattern expansion
     (globbing), which is not likely to be useful.

-
-l
--login
     Make the shell a login shell.  This means the following.  Unset all
     environment variables except `TERM', `HOME', and `SHELL' (which
     are set as described above), and `USER' and `LOGNAME' (which are
     set, even for the super-user, as described above), and set `PATH'
     to a compiled-in default value.  Change to USER's home directory.
     Prepend `-' to the shell's name, intended to make it read its
     login startup file(s).

-m
-p
--preserve-environment
     Do not change the environment variables `HOME', `USER', `LOGNAME',
     or `SHELL'.  Run the shell given in the environment variable
     `SHELL' instead of the shell from USER's passwd entry, unless the
     user running `su' is not the superuser and USER's shell is
     restricted.  A "restricted shell" is one that is not listed in the
     file `/etc/shells', or in a compiled-in list if that file does not
     exist.  Parts of what this option does can be overridden by
     `--login' and `--shell'.

-s <i>SHELL</i>
--shell=<i>SHELL</i>
     Run <i>SHELL</i> instead of the shell from USER's passwd entry, unless
     the user running `su' is not the superuser and USER's shell is
     restricted (see `-m' just above).</pre>
<p> If no <i>user</i> is given, the default is 'root', the super-user. <br>
  <br>
  The shell to use is taken from user's 'passwd' entry, or /bin/sh if none is 
  specified there.<br>
  <br>
  If USER has a password, `su' prompts for the password unless run by a user with 
  effective user id of zero (the super-user). <br>
  <br>
  By default, su does not change the current directory. It sets the environment 
  variables `HOME' and `SHELL' from the password entry for USER, and if USER is 
  not the super-user, sets `USER' and `LOGNAME' to USER. <br>
  <br>
  By default, the shell is not a login shell. Any additional ARGs are passed as 
  additional arguments to the shell. <br>
  <br>
  GNU su does not treat `/bin/sh' or any other shells specially (e.g., by setting 
  `argv[0]' to -su, passing `-c' only to certain shells, etc.). su can optionally 
  be compiled to use syslog to report failed, and optionally successful, su 
  attempts. (If the system supports syslog.) However, GNU su does not check 
  if the user is a member of the `wheel' group; see options above. </p>
<p><i class="quote">"It was just like Romeo and Juliet, only it ended in tragedy" ~ Milhouse</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="chroot.html">chroot</a> - Run a command with a different root directory<br>
<a href="id.html">id</a> - Print user and group id's <br>
<a href="logname.html">logname</a> - Print current login name<br>
Equivalent Windows command:  <a href="../nt/runas.html">RUNAS</a> /user</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="su.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

