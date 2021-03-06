---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>ddrescue</h1> 
<p>Data recovery tool, save data from a crashed partition. </p>
<pre>Syntax
      ddrescue [<i>options</i>] <i>infile outfile</i> [<i>logfile</i>]

Options:<br>   -b=<i>bytes</i>          Hardware block size of input device [512]
   --block-size=<i>bytes</i><br><br>   -B                Show binary multipliers in numbers [default SI] 
   --binary-prefixes<br><br>   -c=<i>blocks</i>         Hardware blocks to copy at a time [128] 
   --cluster-size=<i>blocks</i><br><br>   -C                Do not read new data beyond logfile limits 
   --complete-only<br><br>   -d                Use direct disc access for input file 
   --direct<br><br>   -e=<i>n</i>              Maximum number of error areas allowed
   --max-errors=<i>n</i><br><br>   -i=<i>pos</i>            Starting position in input file [0]
   --input-position=<i>pos</i><br><br>   -n                Do not try to split error areas 
   --no-split<br><br>   -o=<i>pos</i>            Starting position in output file [ipos] 
   --output-position=<i>pos</i><br><br>   -q                Quiet operation 
   --quiet<br><br>   -r=<i>n</i>              Exit after given retries (-1=infinity) [0]
   --max-retries=<i>n</i><br><br>   -s=<i>bytes</i>          Maximum size of data to be copied 
   --max-size=<i>bytes</i><br><br>   -t                Truncate output file
   --truncate<br><br>   -v                Verbose operation
   --verbose<br>
   -V                Output version information and exit
   --version</pre>
<p>Numbers can be followed by a multiplier: b = blocks, k = kB = 10^3 = 1000, Ki = KiB = 2^10 = 1024, M = 10^6, Mi = 2^20, G = 10^9, Gi = 2^30, etc...</p>
<p><b>  Installation</b></p>
<p>Debian / Ubuntu Linux:<br>
<span class="code"># apt-get install ddrescue</span></p>
<p>RedHat /Fedora /CentOS Linux:<br>
<span class="code"># yum -y install ddrescue</span></p>
<p>GNU ddrescue is a data recovery tool. It copies data from one file or block device (hard disc, cdrom, etc) to another, trying hard to rescue data in case of read errors.</p>
<p>The basic operation of ddrescue is fully automatic. That is, you don't have to wait for an error, stop the program, read the log, run it in reverse mode, etc.</p>
<p>If you use the logfile feature of ddrescue, the data is rescued very efficiently (only the needed blocks are read). Also you can interrupt the rescue at any time and resume it later at the same point.</p>
<p>Ddrescue does not write zeros to the output when it finds bad sectors in the input, and does not truncate the output file if not asked to. So, every time you run it on the same output file, it tries to fill in the gaps without wiping out the data already rescued.</p>
<p>Automatic merging of backups: If you have two or more damaged copies of a file, cdrom, etc, and run ddrescue on all of them, one at a time, with the same output file, you will probably obtain a complete and error-free file. This is so because the probability of having damaged areas at the same places on different input files is very low. Using the logfile, only the needed blocks are read from the second and successive copies.</p>
<p>Ddrescue recommends <a href="http://www.nongnu.org/lzip/lzip.html">lzip</a> for compression of backups, because of its reliability and data recovery capabilities, including error-checked merging of backup copies. The combination ddrescue + lziprecover is the best option for recovering data from multiple damaged copies.</p>
<p>Recordable CD and DVD media keep their data only for a finite time (typically for many years). After that time, data loss develops slowly with read errors growing from the outer media region towards the inside. Just make two (or more) copies of every important CD/DVD you burn so that you can later recover them with ddrescue.</p>
<p>The logfile is periodically saved to disc. So in case of a crash you can resume the rescue with little recopying.</p>
<p>Also, the same logfile can be used for multiple commands that copy different areas of the file, and for multiple recovery attempts over different subsets.</p>
<p>Ddrescue also features a "fill mode" able to selectively overwrite parts of the output file, which has a number of interesting uses like wiping data, marking bad areas or even, in some cases, "repair" damaged sectors. </p>
<p>ddrescue written by Antonio Diaz Diaz, download from the <a href="http://www.gnu.org/software/ddrescue/ddrescue.html">GNU</a> web site.<br>
Installs as /usr/bin/ddrescue</p>
<p><b>Example:</b></p>
<p>To  copy /dev/sda (damaged \device\harddisk0) to another drive /dev/sdb (empty \device\harddisk1)</p>
<p class="code"># ddrescue /dev/sda /dev/sdb</p>
<p>To recover the partition data  run <a href="fsck.html">fsck</a>, for example if /home (user data) is on /dev/sd<b>a</b>2,  run fsck on partition /dev/sd<b>b</b>2:<br>
<span class="code"># fsck /dev/sdb2</span></p>
<p>This avoids  touching the  damaged /dev/sda, if the procedure fails you can send the original disk to a professional data recovery service. </p>
<p>Lastly mount the partition somewhere and see if you can access the data:<br>
<span class="code"># mount /dev/sdb2 /mnt/data</span></p>
<p><i class="quote">"Rescue me,
Oh take me in your arms, Rescue me" ~ Aretha Franklin</i><br>
<br>
<b> Related:</b><br>
<br>
info ddrescue - full ddrescue manual<br>
dd_rescue - written by Kurt Garloff for Debian <br>
<a href="http://www.macosxhints.com/article.php?story=20050720092514388">ddrescue for OS X</a> - macosxhints<br>
<a href="dd.html">dd</a> - Data Dump - Convert and copy a file</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ddrescue.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

