---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>lpc</h1> 
<p>line printer control program</p>
<pre>SYNTAX
      lpc [<i>command</i> [<i>argument</i> ...]]

DESCRIPTION
     Lpc is used by the system administrator to control the operation of the
     line printer system.  For each line printer configured in /etc/printcap,
     lpc can be used to:

           ·   Disable or enable a printer,

           ·   Disable or enable a printer's spooling queue,

           ·   Rearrange the order of jobs in a spooling queue,

           ·   Find the status of printers, and their associated spooling
               queues and printer dameons.
</pre>
<p>Without any arguments, lpc will prompt for commands from the standard input.  If arguments are supplied, lpc interprets the first argument as a
command and the remaining arguments as parameters to the command.  The
standard input can be redirected causing lpc to read commands from file.<br>
Commands can be abreviated; </p>
<pre>COMMANDS

     ? [command ...]
     help [command ...]
             Print a short description of each command specified in the argument list, or,
             if no arguments are given, a list of the recognized commands.

     abort { all | printer }
             Terminate an active spooling daemon on the local host immediately
             and then disable printing (preventing new daemons from being
             started by lpr)  for the specified printers.

     clean { all | printer }
             Remove any temporary files, data files, and control files that
             cannot be printed (i.e., do not form a complete printer job) from
             the specified printer queue(s) on the local machine.

     disable { all | printer }
             Turn the specified printer queues off.  This prevents new printer
             jobs from being entered into the queue by lpr.

     down { all | printer } message ...
             Turn the specified printer queue off, disable printing and put
             message in the printer status file. The message doesn't need to
             be quoted, the remaining arguments are treated like echo(1).
             This is normally used to take a printer down and let others know
             why lpq(1) will indicate the printer is down and print the status
             message).

     enablee { all | printer }
             Enable spooling on the local queue for the listed printers.  This
             will allow lpr(1) to put new jobs in the spool queue.

     exit
     quit    Exit from lpc.


     restart { all | printer }
             Attempt to start a new printer daemon.  This is useful when some
             abnormal condition causes the daemon to die unexpectedly leaving
             jobs in the queue.  Lpq will report that there is no daemon present
              when this condition occurs.  If the user is the super-user,
             try to abort the current daemon first (i.e., kill and restart a
             stuck daemon).

     start { all | printer }
             Enable printing and start a spooling daemon for the listed printers.

     status { all | printer }
             Display the status of daemons and queues on the local machine.

     stop { all | printer }
             Stop a spooling daemon after the current job completes and disable
             printing.

     topq printer [ jobnum ... ] [ user ... ]
             Place the jobs in the order listed at the top of the printer
             queue.

     up { all | printer }
             Enable everything and start a new printer daemon. Undoes the effects
             of down.

FILES
     /etc/printcap       printer description file
     /var/spool/*        spool directories
     /var/spool/*/lock   lock file for queue control

ERROR Messages

     ?Ambiguous command
             abbreviation matches more than one command

     ?Invalid command
             no match was found

     ?Privileged command
             command can be executed by root only</pre>
<p class="quote"><i>"There's a thin line between being committed and being committed"
~ ComputerBob, 1992 </i></p>
<p><b>Related:</b><br>
<br>
<a href="lpr.html">lpr</a> - Off line print <br>
lprint - Print a file<br>
lprintd / lpd(8) - Abort a print job<br>
lprintq / lpq(1) - List the print queue<br>
<a href="lprm.html">lprm</a> - Remove jobs from the print queue <br>
printcap(5) - Printer Capability database<br>
Equivalent Windows command:  <a href="../nt/prncnfg.html">PRNCNFG</a> - Display, configure or rename a printer</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="lpc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

