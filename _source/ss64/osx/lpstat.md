---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>lpstat</h1>
<p>Printer status information, displays status information about the current classes, jobs, and printers. When run with no arguments, lpstat will list jobs queued by the user. </p>
<pre>Syntax
     lpstat  [  -E  ] [ -h <i>server</i> ] [ -l ]
           [ -W <i>which-jobs</i> ] [ -a [ destination(s) ] ]
              [ -c [ <i>class(es) </i>] [ -d ] [ -o [ destination(s) ] ]
                  [ -p  [ <i>printer(s)</i>  ]  ][ -r ] [ -R ] [ -s ]
                     [ -t ] [ -u [ <i>user(s)</i> ] ] [ -v [ <i>printer(s)</i> ] ]
Options

       -E
            Force encryption when connecting to the server.

       -a [<i>printer(s)</i>]
            Show the accepting state of printer queues. 
            If no printers are specified then all printers are listed.

       -c [<i>class(es)</i>]
            Shows the printer classes and the printers that belong to them. If
            no classes are specified then all classes are listed.

       -d   Show the current default destination.

       -h <i>server</i>
            Specify the CUPS server to communicate with.

       -l   Show a long listing of printers, classes, or jobs.

       -o [<i>destination(s)</i>]
            Show the jobs queue on the specified destinations. If no destina-
            tions are specified all jobs are shown.

       -p [<i>printer(s)</i>]
            Show  the printers and whether or not they are enabled for print-
            ing. If no printers are specified then all printers are listed.

       -r   Show whether or not the CUPS server is running.
   
       -R   Show the ranking of print jobs.
    
       -s   Show a status summary, including the default destination, a  list
            of  classes   and their member printers, and a list of printers and
            their associated devices. This is equivalent to  using  the   "-d",
            "-c", and "-p" options.

       -t   Show all status information.  This is equivalent to using the
            "-r", "-d", "-c", "-d", "-v", "-a", "-p", and "-o" options.

       -u [<i>user(s)</i>]
            Show a list of print jobs queued by the specified  users.  If  no
            users are specified, lists the jobs queued by the current user.

       -v [<i>printer(s)</i>]
            Show the printers and what device they are attached to. If no
            printers are specified then all printers are listed.

       -W [<i>which-jobs</i>]
            Specifies which jobs to show, <i>completed</i> or <i>not-completed</i>  (the
            default).  This option <b>must</b> appear before the <i>-o</i> option and/or any
            printer names, otherwise the default (not-completed) value will be
            used in the request to the scheduler.</pre>
<p class="quote"><i>“Only one thing would be worse than the status quo. And that would be for the status quo to become the norm” ~ Elizabeth 
  Dole</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/lpstat.1.html">lpstat man page</a> - Apple.com<br>
<a href="enable.html">enable</a> - Stop or start printers and classes. <br>
<a href="lpc.html">lpc</a> - Line printer control program<br>
<a href="lpr.html">lpr</a> - Off line print <br>
<a href="lprm.html">lprm</a> - Remove jobs from the print queue <br>
lprint - Print a file <br>
pr - Convert text files for printing <br>
printcap - Printer Capability database</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="lpstat.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
