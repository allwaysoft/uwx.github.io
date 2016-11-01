---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>execsnoop</h1> 
<p> Snoop new process execution. Uses DTrace.</p>
<pre>Syntax
      execsnoop [-a|-A|-ejhsvZ] [-c <i>command</i>]

Key
   -a     print all data

   -A     dump all data, space delimited

   -e     safe output, parseable. This prevents the ARGS field  containing
          "\n"s, to assist postprocessing.

   -j     print project ID

   -s     print start time, us

   -v     print start time, string

   -Z     print zonename

   -c <i>command</i>
          command name to snoop</pre>
<p> execsnoop  prints  details  of  new  processes  as  they  are executed.        Details such as UID, PID and argument listing are printed out.        This program is very useful to examine short lived processes that would        not normally appear in a prstat or "<a href="ps.html">ps -ef</a>" listing. Sometimes applications will run hundreds  of  short  lived  processes  in  their  normal        startup cycle, a behaviour that is easily monitored with execsnoop.        </p>
<p>Since  this  uses  DTrace, only users with root privileges can run this        command.</p>
<p>execsnoop will run forever until Ctrl-C is hit.</p>
<p><b>Examples</b></p>
<p>       Default output, print processes as they are executed,<br>
<span class="code">$ execsnoop</span><br>
<br>
Print human readable timestamps,<br>
<span class="code">$ execsnoop -v</span><br>
<br>
Print zonename,<br>
<span class="code">$ execsnoop -Z</span><br>
<br>
Snoop this command only,<br>
<span class="code">$ execsnoop -c ls</span><br>
</p>
<h2> Fields<br>
</h2>
<pre>  UID    User ID
  PID    Process ID
  PPID   Parent Process ID
  COMM   command name for the process
  ARGS   argument listing for the process
  ZONE   zonename
  PROJ   project ID
  TIME   timestamp for the exec event, us
  STRTIME timestamp for the exec event, string</pre>
<p class="quote"><i>"It's the way to educate your eyes. Stare. Pry, listen eavesdrop. Die knowing something. You are not here long" ~ Walker Evans</i></p><p><b>Related:</b></p>
<p><a href="iosnoop.html">iosnoop</a> - Snoop I/O events as they occur<br>
dtrace - generic front-end to the DTrace facility<br>
<a href="http://dtrace.org/blogs/brendan/2011/10/10/top-10-dtrace-scripts-for-mac-os-x/">Top 10 DTrace scripts</a> - Brandan Gregg (author of the <a href="http://www.brendangregg.com/dtracebook/index.html">dtrace book</a>)</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="execsnoop.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
