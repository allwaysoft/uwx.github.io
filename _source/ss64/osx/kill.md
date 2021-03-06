---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>kill</h1> 
<p>Kill a process by specifying its PID, either via a signal or forced termination.</p>
<pre>Syntax
     kill [-s <i>signal_name</i>] <i>pid</i> ...
     kill -<i>signal_name pid</i> ...
     kill -<i>signal_number pid</i> ...
     kill -l [<i>exit_status</i>]

Key
   -s <i>signal_name</i>
       A symbolic signal name specifying the signal to be sent instead
       of the default TERM.

   -<i>signal_name</i>
       A symbolic signal name specifying the signal to be sent instead
       of the default TERM.

   -<i>signal_number</i>
       A non-negative decimal integer, specifying the signal to be sent
       instead of the default TERM.

   -l [<i>exit_status</i>]
       If no operand is given, list the signal names; otherwise, write
       the signal name corresponding to exit_status.

   The following pids have special meanings:
   -1 If superuser, broadcast the signal to all processes; otherwise
       broadcast to all processes belonging to the user.</pre>
<p> Some shells  provide a builtin <span class="code">kill</span> command which is similar or identical to this utility.</p>
<p>The kill utility sends a signal to the processes specified by the pid operand(s). Only the super-user can send signals to other users' processes.</p>
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
<p><b>Examples</b><br>
<br>
List the running process<br>
<span class="code">$ <b>ps</b><br>
PID TTY TIME CMD<br>
1293 pts/5 00:00:00 MyProgram</span><br>
<br>
Then kill it<br>
<span class="code">$ <b>kill 1293</b><br>
[2]+ Terminated MyProgram</span><br>
<br>
Or to really really kill it<br>
<span class="code">$ <b>kill -9 1293</b></span><br>
<br>
To close an application you can also send an applescript quit command:<br>
<span class="code">$ <a href="osascript.html">osascript</a> -e 'quit app "safari.app"'</span></p>
<p><b><i>  </i></b><i class="quote">"Love never dies a natural death. It dies because we don't know how to replenish it's source. It dies of blindness and errors and betrayals.<br>
It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings" ~ Anais Nin</i></p><p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/kill.1.html">kill man page</a> - Apple.com<br>
<a href="syntax-bashkeyboard.html">ctrl+z /   ctrl+c</a> - Suspend/Interrupt a program<br>
<a href="ps.html">ps</a> - List running processes (returns PID)<br>
<a href="pkill.html">pkill</a> - Kill processes by a full  or partial name.<br>
  <a href="killall.html">killall</a> - Kill processes by name.<br>
  sigaction(2) - <br>
<a href="lsof.html">lsof</a> - List open files </p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="kill.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
