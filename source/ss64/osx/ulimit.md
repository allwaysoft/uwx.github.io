---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>ulimit</h1> 
<p>User limits - limit the use of system-wide resources.</p>
<pre>Syntax
      ulimit [-SHacdefilmnpqrstuvx [<i>limit</i>]]<br>
Key
   -S   Set a soft limit for the given resource
   -H   Set a hard limit for the given resource

   -a   All current limits are reported
   -c   The maximum size of core files created
   -d   The maximum size of a process's data segment
   -e   The maximum scheduling priority ("nice")
   -f   The maximum size of files written by the shell and its children
   -i   The maximum number of pending signals
   -l   The maximum size that may be locked into memory
   -m   The maximum resident set size
   -n   The maximum number of open file descriptors (most systems do not allow this value to be set)
   -p   The pipe size in 512-byte blocks (this may not be set)
   -q   The maximum number of bytes in POSIX message queues
   -r   The maximum real-time scheduling priority
   -s   The maximum stack size  
   -t   The maximum amount of cpu time in seconds
   -u   The maximum number of processes available to a single user
   -v   The maximum amount of virtual memory available to the shell
   -x   The maximum number of file locks

 <i>limit </i> The new value of the specified resource (use -a to display only)</pre>
<p>ulimit provides control over the resources available to the shell and to processes started by it, on systems that allow such control. </p>
<p>The soft limit is the value that the kernel enforces for the corresponding resource. The hard limit acts as a ceiling for the soft limit.</p>
<p>An unprivileged process may only set its soft limit to a value in the range from 0 up to the hard limit, and (irreversibly) lower its hard limit. A privileged process may make arbitrary changes to either limit value.</p>
<p>A hard limit cannot be increased once it is set; a soft limit may be increased up to the value of the hard limit.<br>
If neither -H nor -S is specified, both the soft and hard limits are set. </p>
<p>The value of <i>limit</i> can be a number in the unit specified for the resource or one of the special values <span class="code">hard</span>, <span class="code">soft</span>, or <span class="code">unlimited</span>, which stand for the current hard limit, the current soft limit, and no limit, respectively. </p>
<p>If <i>limit</i> is omitted, the current value of the soft limit of the resource is printed, unless the -H option is given.<br>
When more than one resource is specified, the limit name and unit are printed before the value.</p>
<p>If no option is given, then -f is assumed. Values are in 1024-byte increments, except for -t, which is in seconds, -p, which is in units of 512-byte blocks, and -n and -u, which are unscaled values. </p>
<p>The return status is 0 unless an invalid option or argument is supplied, or an error occurs while setting a new limit.</p>
<p>ulimit is a bash built in command.</p>
<p><b>Examples</b></p>
<pre>$ ulimit -a
core file size          (blocks, -c) 0
data seg size           (kbytes, -d) 6144
file size               (blocks, -f) unlimited
max locked memory       (kbytes, -l) unlimited
max memory size         (kbytes, -m) unlimited
open files                      (-n) 256
pipe size            (512 bytes, -p) 1
stack size              (kbytes, -s) 8192
cpu time               (seconds, -t) unlimited
max user processes              (-u) 266
virtual memory          (kbytes, -v) unlimited</pre>
<pre>Setting Max User Processes too low can cause problems, but setting it too high
could potentially allow a bash <a href="http://en.wikipedia.org/wiki/Fork_bomb">forkbomb</a> to crash the system.

$ ulimit -u 300
$ ulimit -u
300</pre>
<p class="quote"><i>“Every man is a damn fool for at least five minutes every day; wisdom consists of not exceeding that limit” ~ Elbert Hubbard</i></p>
<p><b>Related:</b></p>
<p><a href="quota.html">quota</a> - Display disk usage and limits<br>
<a href="tccutil.html">tccutil</a> - Manage the privacy database</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ulimit.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
