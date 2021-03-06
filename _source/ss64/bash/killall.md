---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>killall</h1> 
<p>kill processes by name.</p>
<pre>Syntax
      killall [<i>option(s)</i>] [--] <i>name</i> ...

      killall -l

      killall -V,--version 

Options

   -e
   --exact
          Require an exact match for very long names.
          If a command name is longer than 15 characters, the full name might be
          unavailable (i.e. it is swapped out). In this case, killall will kill everything
          that matches within the first 15 characters. With -e, such entries are skipped. 
          killall prints a message for each skipped entry if -v is specified in addition to -e, 

   -g
   --process-group
          Kill the process group to which the process belongs.
          The kill signal is only sent once per group, even if multiple processes belonging
          to the same process group were found.

   -I     Do case insensitive process name match. 
   --ignore-case
     
   -i     Interactively ask for confirmation before killing. 
   --interactive
     
   -l     List all known signal names.
   --list

   <i>name</i>   The command/process to be killed

   -q     Do not complain if no processes were killed.
   --quiet
     
   -r     Interpret process name pattern as an extended regular expression.
   --regexp
     
   -<i>s</i> <i>signal</i>
   --signal <i>signal</i>
          Send <i>signal </i>instead of the default SIGTERM.  e.g. -9 = SIGKILL

   -u <i>user</i>
   --user <i>user</i>
          Kill only processes the specified user owns. Command names are optional.

   -v     Report if the signal was successfully sent.
   --verbose
     
   -V     Display version information.
   --version
     
   -w
   --wait
          Wait for all killed processes to die. killall checks once per second if any
          of the killed processes still exist and only returns if none are left.
          Note that killall can wait forever if the signal was ignored, had no effect, or
          if the process stays in zombie state. 

   -Z <i>pattern</i>
   --context <i>pattern</i> 
          Specify security context: kill only processes having security context that match
          with given expended regular expression pattern. Must precede other arguments on
          the command line. Command names are optional. (SELinux Only)

   --     Each parameter after a '--' parameter is always interpreted as a non-option parameter.</pre>
<p>killall sends a signal to all processes running any of the specified commands. If no signal name is specified, SIGTERM is sent.</p>
<p>Signals can be specified either by name (e.g. -HUP) or by number (e.g. -1) or by option -s.</p>
<p>If the command name is not regular expression (option -r) and contains a slash (/), processes executing that particular file will be selected for killing, independent of their name.</p>
<p>killall returns a zero return code if at least one process has been killed for each listed command, or no commands were listed and at least one process matched the -u and -Z search criteria. killall returns non-zero otherwise.</p>
<p>A killall process never kills itself (but can kill other killall processes). </p>
<blockquote>
<table>
<caption>
Common Kill Signals
</caption>
<tbody><tr>
<th scope="col">Signal name</th>
<th scope="col">Signal value</th>
<th scope="col">Effect</th>
</tr>
<tr>
<td>SIGHUP</td>
<td>1</td>
<td>Hangup</td>
</tr>
<tr>
<td>SIGINT</td>
<td>2</td>
<td>Interrupt from keyboard </td>
</tr>
<tr>
<td>SIGQUIT</td>
<td>3</td>
<td>Quit</td>
</tr>
<tr>
<td>SIGABRT</td>
<td>6</td>
<td>Abort</td>
</tr>
<tr>
<td>SIGKILL</td>
<td>9</td>
<td>Kill signal </td>
</tr>
<tr>
<td>SIGTERM</td>
<td>15</td>
<td>Termination signal - allow an orderly shutdown</td>
</tr>
<tr>
<td>SIGSTOP</td>
<td>17,19,23</td>
<td>Stop the process</td>
</tr>
</tbody></table>
</blockquote>
<p>Files<b><br>
</b><span class="code">/proc</span><br>
location of the proc file system</p>
<h2>Known Bugs</h2>
<blockquote>
<p>Typing<span class="code"> killall <i>name</i></span> might not have the desired effect on non-Linux systems, especially when done by a privileged user. e.g. on Solaris it will kill all active processes.</p>
<p>Killing by file only works for executables that are kept open during execution, i.e. impure executables can't be killed this way.</p>
<p>killall -w doesn't detect if a process disappears and is replaced by a new process with the same PID between scans.</p>
<p>If processes change their name, killall might not be able to match them correctly. </p>
</blockquote>
<p><b>Examples</b></p>
<p>Kill firefox:</p>
<p class="code">$ killall -9 mozilla-bin</p>
<p class="quote">“If future generations are to remember us with gratitude rather than contempt, we must leave them more than the miracles of technology. We must leave them a glimpse of the world as it was in the beginning, not just after we got through with it” ~ President Lyndon B. Johnson</p>
<p><b>Related:</b></p>
<p><a href="syntax-keyboard.html">ctrl+z / ctrl+c</a> - Suspend/Interrupt a program<br>
<a href="kill.html">kill</a> - Kill a process by specifying its PID.<br>
<a href="ps.html">ps</a> - List running processes (returns PID)<br>
<a href="pkill.html">pkill</a> - Kill processes by a full  or partial name.<br>
<a href="fuser.html">fuser</a> - identify processes using files or sockets<br>
<a href="jobs.html">jobs</a> - List your own processes (returns Job No.)<br>
<a href="bg.html">bg</a> - Put a process in the background<br>
</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="killall.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

