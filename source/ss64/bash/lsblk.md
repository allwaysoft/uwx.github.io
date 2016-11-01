---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>lsblk</h1> 
<p>List block devices.</p>
<pre>Syntax
      lsblk [<i>options</i>] [<i>device</i>...]

Options:
       -a, --all
              Also list empty devices.  (By default they are skipped.)

       -b, --bytes
              Print the SIZE column in bytes rather than in a human-readable
              format.

       -D, --discard
              Print information about the discarding capabilities (TRIM,
              UNMAP) for each device.

       -d, --nodeps
              Do not print holder devices or slaves.  For example, lsblk
              --nodeps /dev/sda prints information about the sda device
              only.

       -e, --exclude <i>list</i>
              Exclude the devices specified by the comma-separated list of
              major device numbers.  Note that RAM disks (major=1) are
              excluded by default.  The filter is applied to the top-level
              devices only.

       -f, --fs
              Output info about filesystems.  This option is equivalent to
              -o NAME,FSTYPE,LABEL,UUID,MOUNTPOINT.  The authoritative
              information about filesystems and raids is provided by the
              blkid(8) command.

       -h, --help
              Display help text and exit.

       -I, --include <i>list</i>
              Include devices specified by the comma-separated list of major
              device numbers.  The filter is applied to the top-level
              devices only.

       -i, --ascii
              Use ASCII characters for tree formatting.

       -J, --json
              Use JSON output format.

       -l, --list
              Produce output in the form of a list.

       -m, --perms
              Output info about device owner, group and mode.  This option
              is equivalent to -o NAME,SIZE,OWNER,GROUP,MODE.

       -n, --noheadings
              Do not print a header line.

       -o, --output <i>list</i>
              Specify which output columns to print.  Use --help to get a
              list of all supported columns.

              The default list of columns may be extended if list is
              specified in the format +list (e.g. lsblk -o +UUID).

       -O, --output-all
              Output all available columns.

       -P, --pairs
              Produce output in the form of key="value" pairs.  All
              potentially unsafe characters are hex-escaped (\x<i>code</i>).

       -p, --paths
              Print full device paths.

       -r, --raw
              Produce output in raw format.  All potentially unsafe
              characters are hex-escaped (\x<i>code</i>) in the NAME, KNAME,
              LABEL, PARTLABEL and MOUNTPOINT columns.

       -S, --scsi
              Output info about SCSI devices only.  All partitions, slaves
              and holder devices are ignored.

       -s, --inverse
              Print dependencies in inverse order.

       -t, --topology
              Output info about block-device topology.  This option is
              equivalent to -o NAME,ALIGNMENT,MIN-IO,OPT-IO,PHY-SEC,LOG-
              SEC,ROTA,SCHED,RQ-SIZE,RA,WSAME.

       -V, --version
              Display version information and exit.

       -x, --sort column
              Sort output lines by column.</pre>
<p>lsblk lists information about all available or the specified block devices.  The lsblk command reads the sysfs filesystem and udev db to gather information. The command prints all block devices (except RAM disks) in a tree-like format by default.  </p>
<p> Use <span class="code">lsblk --help</span> to get a list of all available columns. </p>
<p>The default output, as well as the default output from options like --fs and --topology, is subject to change.  So whenever possible, you should avoid using default outputs in your scripts.  Always explicitly define expected columns by using --output columns-list in environments where a stable output is required. </p>
<p>Note that lsblk might be executed in time when udev does not have all information about recently added or modified devices yet. In this case it is recommended to use <span class="code">udevadm settle</span> before <span class="code">lsblk</span> to synchronize with udev.</p>
<p>For partitions, some information (e.g. queue attributes) is inherited        from the parent device.        The lsblk command needs to be able to look up each block device by        major:minor numbers, which is done by using /sys/dev/block.</p>
<p>The lsblk command is part of the <a href="https://www.kernel.org/pub/linux/utils/util-linux/">util-linux package</a> and is available        from ftp://ftp.kernel.org/pub/linux/utils/util-linux/</p>
<h2>Return Codes</h2>
<blockquote>
<p> 0      &nbsp;&nbsp;Success <br>
1      &nbsp;&nbsp;Failure <br>
32     Not found all specified devices        <br>
64     Some specified devices found, some not found.</p>
</blockquote>
<p><b>Examples</b></p>
<p>List all block devices in a tree-like format:<span class="code"><br>
$ lsblk</span></p>
<p>List all devices including empty ones:<br>
<span class="code">$ lsblk -a</span></p>
<p>List the device owner, group and mode:<br>
<span class="code">$ lsblk -m</span></p>
<p>List the size in bytes of the hard drive sda:<br>
<span class="code">$ lsblk --bytes /dev/sda</span><br>
</p>
<p class="quote"><i>"People become attached to their burdens sometimes more than the burdens are attached to them" ~ George Bernard Shaw</i></p><p><b>Related bash commands</b>:<br>
<br>
findmnt(8), 
blkid(8)<br>
lspci - List PCI devices<br>
<a href="ls.html">ls</a> - List information about file(s)<br>
Equivalent in macOS: 
<a href="../osx/diskutil.html">diskutil list</a></p>
<!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

