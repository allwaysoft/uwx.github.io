---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>killall</h1> 
<p>Kill processes by name.</p>
<pre>Syntax
     killall [-delmsvz] [-help] [-u <i>user</i>] [-t <i>tty</i>] [-c <i>procname</i>] [-<i>SIGNAL</i>] [<i>procname</i> ...]

Key
   -d | -v     Be more verbose about what will be done.  For a single
               -d option, a list of the processes that will be sent
               the signal will be printed, or a message indicating
               that no matching processes have been found.

   -e          Use the effective user ID instead of the (default) real
               user ID for matching processes specified with the -u option.

   -help       Give a help on the command usage and exit.

   -l          List the names of the available signals and exit, like in <a href="kill.html">kill</a>.

   -m          Match the argument procname as a (case sensitive) regular expression
               against the names of processes found.
               CAUTION!  This is dangerous, a single dot will match any process running
               under the real UID of the caller.

   -s          Show only what would be done, but do not send any signal.

   -<i>SIGNAL</i>     Send a different signal instead of the default TERM.
               The signal can be specified either as a name (with or without
               a leading SIG), or numerically.

   -u <i>user</i>     Limit potentially matching processes to those belonging
               to the specified user.

   -t tty      Limit potentially matching processes to those running
               on the specified tty.

   -c <i>procname</i>
               When used with the -u or -t flags, limit potentially matching
               processes to those matching the specified procname.

   -z          Do not skip zombies.  This should not have any effect except to print a 
               few error messages if there are zombie processes that match the specified pattern.</pre>
<h2>All Processes</h2>
<p>Sending a signal to all processes with uid XYZ is already supported by      <a href="kill.html">kill</a>.  So use kill for this job (e.g. $ kill -TERM -1 or as root $      echo kill -TERM -1 | su -m <i>user</i>)</p>
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
<h2>Exit Status      </h2>
<blockquote>
<p>0 &nbsp;Success<br>
1 &nbsp;No matching process has been found or not all processes have      been signalled successfully. <br>
2 &nbsp;Command error. </p>
</blockquote>
<p><b>Examples</b><br>
<br>
Check if the process ss64 is running:<br>
<span class="code">$ $ ps -aef | grep ss64<br>
</span></p>
<p>If so, kill it:<br>
<span class="code">$ killall ss64</span></p>
<p>Kill two processes at once:<br>
<span class="code">$ killall process1 p</span><br>
</p>
<p><b><i>  </i></b><i class="quote">"Love never dies a natural death. It dies because we don't know how to replenish it's source. It dies of blindness and errors and betrayals.<br>
It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings" ~ Anais Nin</i></p><p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/killall.1.html">killall man page</a> - Apple.com<br>
<a href="syntax-bashkeyboard.html">ctrl+z /   ctrl+c</a> - Suspend/Interrupt a program<br>
<a href="ps.html">ps</a> - List running processes (returns PID)<br>
<a href="pkill.html">pkill</a> - Kill processes by a full  or partial name.<br>
<a href="kill.html">kill</a> - Kill a process by specifying its PID.<br>
  sigaction(2)<br>
<a href="lsof.html">lsof</a> - List open files </p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="killall.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
