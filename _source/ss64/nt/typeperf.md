---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TypePerf.exe</h1> 
<p>Write performance data to the command window or to a log file.To stop Typeperf, press CTRL+C.</p>
<pre>Syntax
      typeperf <i>counter</i> [<i>counter</i> ...] [<i>options</i>]

      typeperf -cf <i>filename</i>  [<i>options</i>]

      typeperf -q [<i>object</i>] [<i>options</i>]

      typeperf -qx [<i>object</i>] [<i>options</i>]

Key
   <i>counter</i>              The <a href="syntax-performance-counters.html">Performance counters</a> to monitor.
   -f {<u>CSV</u>|TSV|BIN|SQL} Output file format. Default is CSV.
   -cf <i>filename </i>        File containing performance counters to monitor, one per line.
   -si [[<i>hh</i>:]<i>mm</i>:]<i>ss</i>     Time between samples. Default is 1 second.
   -o <i>filename</i>          Path of output file or SQL database.
                        Default is STDOUT.
   -q [<i>object</i>]          List installed counters (no instances).
                        To list counters for one object, 
                        include the object name, such as Processor.
   -qx [<i>object</i>]         List installed counters with instances.
                        To list counters for one object, 
                        include the object name, such as Processor.
   -sc <i>samples</i>          Number of samples to collect. Default is
                        to sample until CTRL+C.
   -config <i>filename</i>     Settings file containing command options.
   -s <i>computer_name</i>     Server to monitor if no server is specified in the counter path.
   -y                   Answer yes to all questions without prompting.
   -?                   Display context sensitive help.
</pre>
<p>  <i>Counter</i> is the full name of a performance counter in the format:<span class="code">"\\<i>Computer</i>\<i>Object</i>(<i>Instance</i>)\<i>Counter</i>"</span> <br> 
e.g. "<span class="code">\\Server1\Processor(0)\% User Time</span>".</p>
<p><b>Examples</b></p>
<p>Display % Processor time until interrupted:</p>
<p><span class="code">C:\&gt; typeperf "\Processor(_Total)\% Processor Time"</span></p>
<p>Gather 600 samples of % Processor time on the local computer (this will take 10 minutes):</p>
<p><span class="code">C:\&gt; 
typeperf "\processor(_Total)\% Processor Time" -O C:\SS64demo1.csv -SC 600 </span></p>
<p>Gather samples of all the counters listed in counters.txt :</p>
<p><span class="code">C:\&gt; typeperf -cf counters.txt -si 5 -sc 50 -o C:\SS64demo2.csv</span></p>
<p class="quote"><i>“Weekends don’t count unless you spend them doing something completely pointless” ~ Bill Watterson</i></p>
<p><b>Related:</b></p>
<p><a href="logman.html">LOGMAN</a> - Manage Performance Monitor<br>
Powershell: <a href="../ps/new-object.html">New-Object</a> System.Diagnostics.PerformanceCounter <br>
Powershell: <a href="../ps/get-wmiobject.html">Get-WmiObject</a> Win32_Process -Filter "Name='System idle process'" | Format-List Name, KernelModeTime</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="typeperf.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

