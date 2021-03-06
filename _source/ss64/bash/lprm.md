---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>lprm</h1> 
<p>Remove jobs from the line printer spooling queue</p>
<pre>Syntax
      lprm [-P<i>printer</i>] [-] [<i>job# </i>...] [<i>user</i> ...]

Options and arguments:

     -P<i>printer</i>
             Specify the queue associated with a specific printer (otherwise
             the default printer is used).

     -       If a single `-' is given, lprm will remove all jobs which a user
             owns.  If the super-user employs this flag, the spool queue will
             be emptied entirely.

     <i>user</i>    Causes lprm to attempt to remove any jobs queued belonging to
             that user (or users).  This form of invoking lprm is useful only
             to the super-user.

     <i>job#</i>   A user can dequeue an individual job by specifying its job number.
            This number can be obtained from the lpq(1) program, e.g.

                   % lpq -l

                   1st:ken                         [job #013ucbarpa]
                           (standard input)        100 bytes
                   % lprm 13

     If neither arguments or options are given, lprm will delete the currently
     active job if it is owned by the user who invoked lprm.

     lprm announces the names of any files it removes and is silent if there
     are no jobs in the queue which match the request list.

     lprm will kill off an active daemon, if necessary, before removing any
     spooling files.  If a daemon is killed, a new one is automatically
     restarted upon completion of file removals.

Environment
     If the following environment variable exists, it is utilized by lprm.

     PRINTER  If the environment variable PRINTER exists, and a printer has
              not been specified with the -P option, the default printer is
              assumed from PRINTER.

Files
     /etc/printcap       Printer characteristics file.
     /var/spool/*        Spooling directories.
     /var/spool/*/lock   Lock file used to obtain the pid of the current daemon
                         and the job number of the currently active job.
</pre>
<p><span class="body">  Lprm will remove a job, or jobs, from a printer's spool queue.  </span></p>
<p><span class="body">Since the
    spooling directory is protected from users, using Lprm is normally the
    only method by which a user can remove a job.  </span></p>
<p><span class="body">The owner of a job is determined by the user's login name and host name on the machine where the     
      lpr command was invoked.</span></p>
<p><span class="body">Bug:     
since there are race conditions possible in the update of the lock file,     
the currently active job might be incorrectly identified.<br>
  <br>
  ERROR Messages:      
        `Permission denied' if the user tries to remove files other than their own.</span></p>
<p class="quote"><i>"Because I could not stop for Death - 
He kindly stopped for me<br>
The carriage held but just ourselves - And Immortality..." ~ Emily Dickinson</i></p>
<p><b>Related:</b><br>
<br>
<a href="lpc.html">lpc</a> - Line printer control program<br>
<a href="lpr.html">lpr</a> - Off line print <br>
lprint - Print a file<br>
lprintd / lpd(8) - Abort a print job<br>
lprintq / lpq(1) - List the print queue<br>
pr(1) - Convert text files for printing <br>
printcap(5) - Printer Capability database<br>
<a href="symlink.html">symlink</a> - Make a new name for a file <br>
Equivalent Windows command: <a href="../nt/net.html">NET</a> PRINT - Manage print jobs</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="lprm.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

