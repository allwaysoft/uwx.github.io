---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Layout of the OS X Filesystem</h1>
<p>A historical sketch of the filesystem hierarchy. (The
modern Mac OS X filesystem adds many other folders to this basic structure).</p>
<pre>     /             root directory of the filesystem

     /bin/         user utilities fundamental to both single-user and multi-user environments

     /dev/         block and character device files

                   fd/  file descriptor files; see fd(4)

     /etc/         system configuration files and scripts

     /mach_kernel  kernel executable (the operating system loaded into memory at boot time).

     /sbin/        system programs and administration utilities fundamental to both single-
                   user and multi-user environments

     /tmp/         temporary files

     /usr/         contains the majority of user utilities and applications

                   bin/      common utilities, programming tools, and applications
                   include/  standard C include files

                             arpa/       C include files for Internet service protocols
                             hfs/        C include files for HFS
                             machine/    machine specific C include files
                             net/        misc network C include files
                             netinet/    C include files for Internet standard protocols; see
                                         inet(4)
                             nfs/        C include files for NFS (Network File System)
                             objc/       C include files for Objective-C
                             protocols/  C include files for Berkeley service protocols
                             sys/        system C include files (kernel data structures)
                             ufs/        C include files for UFS

                   lib/      archive libraries
                   libexec/  system daemons &amp; system utilities (executed by other programs)
                   local/    executables, libraries, etc. not included by the basic operating
                             system
                   sbin/     system daemons &amp; system utilities (executed by users)
                   share/    architecture-independent data files

                             calendar/  a variety of pre-fab calendar files; see <a href="calendar.html">calendar</a>
                             dict/      word lists; see look(1)

                                        web2        words from Webster's 2nd International
                                        words       common words

                             man/       manual pages
                             misc/      misc system-wide ascii text files
                             mk/        templates for make; see make(1)
                             skel/      example . (dot) files for new accounts
                             tabset/    tab description files for a variety of terminals; used
                                        in the termcap file; see termcap(5)
                             zoneinfo/  timezone configuration information; see tzfile(5)

     /var/         multi-purpose log, temporary, transient, and spool files

                   at/        timed command scheduling files; see at(1)
                   backups/   misc. backup files
                   db/        misc. automatically generated system-specific database files
                   log/       misc. system log files

                   mail/      user mailbox files
                   run/       system information files describing various info about system
                              since it was booted

                              utmpx       database of current users; see utmpx(5)

                   rwho/      rwho data files; see rwhod(8), rwho(1), and ruptime(1)
                   spool/     misc. printer and mail system spooling directories

                              mqueue/     undelivered mail queue; see sendmail(8)

                   tmp/       temporary files that are kept between system reboots
                   folders/   per-user temporary files and caches</pre>
<p><b>Related:</b></p>
<p><a href="syntax.html">OS X Syntax</a><br>
<a href="ls.html">ls</a>, apropos(1), <a href="whatis.html">whatis</a>, whereis(1), finger(1), <a href="which.html">which</a>, <a href="find.html">find</a>, <a href="grep.html">grep</a>, <a href="fsck.html">fsck</a></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
