---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>iosnoop</h1> 
<p> Snoop I/O events as they occur. Uses DTrace.</p>
<pre>Syntax
      iosnoop [-a|-A|-Deghinostv] [-d <i>device</i>] [-f <i>filename</i>] [-m <i>mount_point</i>]
         [-n <i>name</i>] [-p <i>PID</i>]

Key
   -a     print all data

   -A     dump all data, space delimited

   -D     print time delta, us (elapsed)

   -e     print device name

   -i     print device instance

   -N     print major and minor numbers

   -o     print disk delta time, us

   -s     print start time, us

   -t     print completion time, us

   -v     print completion time, string

   -d <i>device</i>
          instance name to snoop (eg, dad0)

   -f <i>filename</i>
          full pathname of file to snoop

   -m <i>mount_point</i>
          mountpoint for filesystem to snoop

   -n <i>name</i>
          process name

   -p <i>PID</i> process ID</pre>
<p> iosnoop prints I/O events as they happen, with useful details  such  as        UID, PID, block number, size, filename, etc.        This  is  useful  to  determine  the  process responsible for using the        disks, as well as details on what activity the process  is  requesting.        Behaviour  such  as random or sequential I/O can be observed by reading        the block numbers.        </p>
<p>Since this uses DTrace, only users with root privileges  can  run  this        command.</p>
<p>iosnoop will run forever until Ctrl-C is hit.</p>
<p><b>Examples</b></p>
<p>       Default output, print I/O activity as they are executed:<br>
<span class="code">$ iosnoop</span><br>
<br>
Print human readable timestamps:<br>
<span class="code">$ iosnoop -v</span><br>
<br>
Print major and minor numbers:<br>
<span class="code">$ iosnoop -N</span><br>
<br>
Snoop events on the root filesystem only:<br>
<span class="code">$ iosnoop -m /</span><br>
</p>
<h2> Fields<br>
</h2>
<pre>  UID    User ID.
  PID    Process ID.
  PPID   Parent Process ID.
  COMM   command name for the process.
  ARGS   argument listing for the process.
  SIZE   size of the operation, bytes.

  BLOCK  disk  block  for  the  operation  (location.  relative  to  this
         filesystem.  more useful with the -N option to print  major  and
         minor numbers.)

  STIME  timestamp for the disk request, us.
  TIME   timestamp for the disk completion, us.

  DELTA  elapsed time from request to completion, us (this is the elapsed
         time from the disk request (strategy)  to  the  disk  completion (iodone))

  DTIME  time  for disk to complete request, us (this is the time for the
         disk to complete that event since it's last event (time  between iodones)
         or,  the  time  to  the strategy if the disk had been idle)

  STRTIME  timestamp for the disk completion, string.
  DEVICE device name.
  INS    device instance number.
  D      direction, Read or Write.
  MOUNT  mount point.
  FILE   filename (basename) for I/O operation
</pre>
<p class="quote"><i>"Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity" ~ John Fitzgerald Kennedy</i></p><p><b>Related:</b></p>
<p>dtrace - generic front-end to the DTrace facility<br>
<a href="opensnoop.html">opensnoop</a> - Snoop file opens as they occur<br>
<a href="http://dtrace.org/blogs/brendan/2011/10/10/top-10-dtrace-scripts-for-mac-os-x/">Top 10 DTrace scripts</a> - Brandan Gregg (author of the <a href="http://www.brendangregg.com/dtracebook/index.html">dtrace book</a>)</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="iosnoop.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
