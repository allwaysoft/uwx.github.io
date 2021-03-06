---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>ps Sort Keys, Format descriptors and Env Variables</h1> 
<p>Options for the <a href="ps.html">Process Status</a> command.</p>
<pre>   SORT KEYS
       Values used in sorting are the internal values ps uses (not `cooked' values).
       If you want to sort by a `cooked' value pipe the output into <a href="sort.html">sort</a> .

       c     cmd          simple name of executable
       C     cmdline      full command line
       f     flags        flags as in long format F field
       g     pgrp         process group ID
       G     tpgid        controlling tty process group ID
       j     cutime       cumulative user time
       J     cstime       cumulative system time
       k     utime        user time
       K     stime        system time
       m     min_flt      number of minor page faults
       M     maj_flt      number of major page faults
       n     cmin_flt     cumulative minor page faults
       N     cmaj_flt     cumulative major page faults
       o     session      session ID
       p     pid          process ID
       P     ppid         parent process ID
       r     rss          resident set size
       R     resident     resident pages
       s     size         memory size in kilobytes
       S     share        amount of shared pages
       t     tty          the minor device number of tty
       T     start_time   time process was started
       U     uid          user ID number
       u     user         user name
       v     vsize        total VM size in bytes
       y     priority     kernel scheduling priority

   AIX FORMAT DESCRIPTORS
       This ps supports AIX format descriptors, which work somewhat
       like the formatting codes of <a href="printf.html">printf</a>.
       For example, the normal default  output  can  be  produced
       with this:   ps -eo "%p %y %x %c"

<b>       CODE   NORMAL   HEADER</b>
       %C     pcpu     %CPU
       %G     group    GROUP
       %P     ppid     PPID
       %U     user     USER
       %a     args     COMMAND
       %c     comm     COMMAND
       %g     rgroup   RGROUP
       %n     nice     NI
       %p     pid      PID
       %r     pgid     PGID
       %t     etime    ELAPSED
       %u     ruser    RUSER
       %x     time     TIME
       %y     tty      TTY
       %z     vsz      VSZ

       These can be used to control both output format and sorting.
       For example:  ps -eo pid,user,args --sort user

<b>       CODE          HEADER</b>
       %cpu          %CPU
       %mem          %MEM
       alarm         ALARM
       args          COMMAND
       blocked       BLOCKED
       bsdstart      START
       bsdtime       TIME
       c             C
       caught        CAUGHT
       cmd           CMD
       comm          COMMAND
       command       COMMAND
       cputime       TIME
       drs           DRS
       dsiz          DSIZ
       egid          EGID
       egroup        EGROUP
       eip           EIP
       esp           ESP
       etime         ELAPSED
       euid          EUID
       euser         EUSER
       f             F
       fgid          FGID
       fgroup        FGROUP
       flag          F
       flags         F
       fname         COMMAND
       fsgid         FSGID
       fsgroup       FSGROUP
       fsuid         FSUID
       fsuser        FSUSER
       fuid          FUID
       fuser         FUSER
       gid           GID
       group         GROUP
       ignored       IGNORED
       intpri        PRI
       lim           LIM
       longtname     TTY
       lstart        STARTED
       m_drs         DRS
       m_trs         TRS
       maj_flt       MAJFL
       majflt        MAJFLT
       min_flt       MINFL
       minflt        MINFLT
       nice          NI
       nwchan        WCHAN
       opri          PRI
       pagein        PAGEIN
       pcpu          %CPU
       pending       PENDING
       pgid          PGID
       pgrp          PGRP
       pid           PID
       pmem          %MEM
       ppid          PPID
       pri           PRI
       rgid          RGID
       rgroup        RGROUP
       rss           RSS
       rssize        RSS
       rsz           RSZ
       ruid          RUID
       ruser         RUSER
       s             S
       sess          SESS
       session       SESS
       sgi_p         P
       sgi_rss       RSS
       sgid          SGID
       sgroup        SGROUP
       sid           SID
       sig           PENDING
       sig_block     BLOCKED
       sig_catch     CATCHED
       sig_ignore    IGNORED
       sig_pend      SIGNAL
       sigcatch      CAUGHT
       sigignore     IGNORED
       sigmask       BLOCKED
       stackp        STACKP
       start         STARTED
       start_stack   STACKP
       start_time    START
       stat          STAT
       state         S
       stime         STIME
       suid          SUID
       suser         SUSER
       svgid         SVGID
       svgroup       SVGROUP
       svuid         SVUID
       svuser        SVUSER
       sz            SZ
       time          TIME
       timeout       TMOUT
       tmout         TMOUT

       tpgid         TPGID
       trs           TRS
       trss          TRSS
       tsiz          TSIZ
       tt            TT
       tty           TT
       tty4          TTY
       tty8          TTY
       ucomm         COMMAND
       uid           UID
       uid_hack      UID
       uname         USER
       user          USER
       vsize         VSZ
       vsz           VSZ
       wchan         WCHAN

   ENVIRONMENT VARIABLES
       The following environment variables could affect ps:
       COLUMNS              Override default display width
       LINES                Override default display height
       PS_PERSONALITY       Set to one of posix,old,linux,bsd,sun,digital
       CMD_ENV              Set to one of posix,old,linux,bsd,sun,digital
       I_WANT_A_BROKEN_PS   Force obsolete command line interpretation
       LC_TIME              Date format
       PS_FORMAT            Default output format override
       PS_SYSMAP            Default namelist (System.map) location
       PS_SYSTEM_MAP        Default namelist (System.map) location
       POSIXLY_CORRECT      Don't find excuses to ignore bad "features"
       UNIX95               Don't find excuses to ignore bad "features"
       _XPG                 Cancel CMD_ENV=irix non-standard behavior

       In general, it is a bad idea to set these  variables.  The
       two exceptions are CMD_ENV (or PS_PERSONALITY), to set the
       desired  default  personality,  and  POSIXLY_CORRECT   (or
       UNIX95),  which  should be set for Unix98 standard compliance.

     <b>  PS_PERSONALITY   Description</b>
       none             "Do the right thing"
       aix              like AIX ps
       bsd              like FreeBSD ps
       compaq           like Digital Unix ps
       debian           like the old Debian ps
       digital          like Digital Unix ps
       gnu              like the old Debian ps
       hp               like HP-UX ps
       hpux             like HP-UX ps
       irix             like Irix ps
       linux            deviate from Unix98 for convenience only
       old              like the original Linux ps
       sco              like SCO ps
       sgi              like Irix ps
       sun              like SunOS 4 ps
       sunos            like SunOS 4 ps
       sysv             standard
       unix             standard
       unix95           standard
       unix98           standard</pre>

<p class="quote"><i>"Life is a process of becoming, a combination of states we have to go through. Where people fail is that they wish to elect a state and remain in it. This is a kind of death" ~ Anaïs Nin</i></p>
<p><b>Related:</b><br>
<br>
<a href="ps.html">ps </a>- Process status<br>
top(1) pstree(1) proc(5)<br>
Equivalent Windows command:<a href="../nt/pslist.html"> pslist </a> - List processes</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ps_keywords.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

