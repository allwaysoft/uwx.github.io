---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>opensnoop</h1> 
<p>Snoop file opens as they occur (Dtrace).</p>
<pre>Syntax
      opensnoop [-a|-A|-ceghsvxZ] [-f <i>pathname</i>] [-n <i>name</i>] [-p <i>PID</i>]

  opensnoop will run forever until Ctrl-C is hit

Key
   -a     print all data

   -A     dump all data, space delimited

   -c     print current working directory of process

   -e     print errno value

   -g     print full command arguments

   -s     print start time, us

   -v     print start time, string

   -x     only print failed opens

   -Z     print zonename

   -f <i>pathname</i>   A file to snoop

   -n <i>name</i>       A process name to snoop

   -p <i>PID</i>        A process ID to snoop</pre>
<p>opensnoop  tracks  file opens. As a process issues a file open, details such as UID, PID and pathname are printed out.</p>
<p>The returned file descriptor is printed, a value of -1 indicates an error. This can be useful for troubleshooting to determine if applications are attempting to open files that do not exist.</p>
<p>Since this uses DTrace, only the root user or users with the dtrace_kernel privilege can run this command.</p>
<p>Occasionally the pathname for the file open cannot be read and the following error will be seen:<br>
<span class="code"> dtrace: error on enabled probe ID 6 (...): invalid address</span> this is normal behaviour.</p>
<p><b>Fields displayed:</b></p>
<p>ZONE Zone name<br> UID User ID<br> 
PID Process ID<br>
PPID Parent Process ID<br>
FD File Descriptor (-1 is error)<br>
ERR errno value (see /usr/include/sys/errno.h)<br>
CWD current working directory of process<br>
PATH pathname for file open<br>
COMM command name for the process<br>
ARGS argument listing for the process<br>
TIME timestamp for the open event, us<br>
STRTIME
timestamp for the open event, string</p>
<p><b>Examples</b></p>
<p>Print all file opens (by process) as they occur, default:<br> 
<span class="code">$ sudo opensnoop</span><br>
<br> 
See errors only
<br> 
<span class="code">$ sudo opensnoop -e</span><br>
<br>
Snoop the passwd file only:<br> 
<span class="code">$ sudo opensnoop -f /etc/passwd</span><br>
<br>
Snoop the preview application only<br> 
<span class="code">$ sudo opensnoop -n Preview</span></p>
<p class="quote"><i>“Clothes make the man. Naked people have little or no influence on society” ~ Mark Twain </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/opensnoop.1m.html">opensnoop man page</a> - Apple.com<br>See the DTraceToolkit for further documentation<br>
<span class="code">apropos dtrace</span> - list other trace scripts in OSX <br>
<a href="lsof.html">lsof</a> - List open files<br>
<a href="open.html">open</a> - Open a file/folder/URL/Application<br>
<a href="ps.html">ps</a> - Process status<br>
dtrace(1M), truss(1)</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="opensnoop.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
