---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>df</h1> 
<p>Disk Free - display free disk space.<br>
  With no arguments, `df' reports the space used and available on all currently 
  mounted filesystems (of all types). Otherwise, `df' reports on the filesystem 
containing each argument <i>file</i>. </p>
<pre>SYNTAX
     df [<i>option</i>]... [<i>file</i>]...

Normally the disk space is printed in units of 1024 bytes, but this
can be overridden.

OPTIONS

 -a
 --all
     Include in the listing filesystems that have a size of 0 blocks,
     which are omitted by default.  Such filesystems are typically
     special-purpose pseudo-filesystems, such as automounter entries.
     Also, filesystems of type "ignore" or "auto", supported by some
     operating systems, are only included if this option is specified.

 -h
 --human-readable
     Append a size letter such as `M' for megabytes to each size.
     Powers of 1024 are used, not 1000; `M' stands for 1,048,576 bytes.
     Use the `-H' or `--si' option if you prefer powers of 1000.

 -H
 --si
     Append a size letter such as `M' for megabytes to each size.  (SI
     is the International System of Units, which defines these letters
     as prefixes.)  Powers of 1000 are used, not 1024; `M' stands for
     1,000,000 bytes.  Use the `-h' or `--human-readable' option if you
     prefer powers of 1024.

 -i
 --inodes
     List inode usage information instead of block usage.  An inode
     (short for index node) is contains information about a file such
     as its owner, permissions, timestamps, and location on the disk.

 -k
 --kilobytes
     Print sizes in 1024-byte blocks, overriding the default block size.

 -l
 --local
     Limit the listing to local filesystems.  By default, remote
     filesystems are also listed.

 -m
 --megabytes
     Print sizes in megabyte (that is, 1,048,576-byte) blocks.

 --no-sync
     Do not invoke the `sync' system call before getting any usage data.
     This can make `df' run significantly faster on systems with many
     disks, but on some systems (notably SunOS) the results can be
     slightly out of date.  This is the default.

 -P
 --portability
     Use the POSIX output format.  This is like the default format
     except that the information about each filesystem is always
     printed on exactly one line; a mount device is never put on a line
     by itself.  This means that if the mount device name is more than
     20 characters long (e.g., for some network mounts), the columns
     are misaligned.

 --sync
     Invoke the `sync' system call before getting any usage data.  On
     some systems (notably SunOS), doing this yields more up to date
     results, but in general this option makes `df' much slower,
     especially when there are many or very busy filesystems.

 -t <i>FSTYPE</i>
 --type=<i>FSTYPE</i>
     Limit the listing to filesystems of type FSTYPE.  Multiple
     filesystem types can be specified by giving multiple `-t' options.
     By default, nothing is omitted.

 -T
 --print-type
     Print each filesystem's type.  The types printed here are the same
     ones you can include or exclude with `-t' and `-x'.  The particular
     types printed are whatever is supported by the system.  Here are
     some of the common names (this list is certainly not exhaustive):

    `nfs'
          An NFS filesystem, i.e., one mounted over a network from
          another machine.  This is the one type name which seems to be
          used uniformly by all systems.

    `4.2, ufs, efs...'
          A filesystem on a locally-mounted hard disk.  (The system
          might even support more than one type here; Linux does.)

    `hsfs, cdfs'
          A filesystem on a CD-ROM drive.  HP-UX uses `cdfs', most other
          systems use `hsfs' (`hs' for `High Sierra').

    `pcfs'
          An MS-DOS filesystem, usually on a diskette.

 -x <i>FSTYPE</i>
 --exclude-type=<i>FSTYPE</i>
     Limit the listing to filesystems not of type <i>FSTYPE</i>.  Multiple
     filesystem types can be eliminated by giving multiple `-x'
     options.  By default, no filesystem types are omitted.

 -v
     Ignored; for compatibility with System V versions of `df'.</pre>
<p> If an argument FILE is a disk device file 
  containing a mounted filesystem, `df' shows the space available on that filesystem 
  rather than on the filesystem containing the device node (i.e., the root filesystem). 
  GNU `df' does not attempt to determine the disk usage on unmounted filesystems, 
  because on most kinds of systems doing so requires extremely nonportable intimate 
  knowledge of filesystem structures.</p>
<p><b>Examples</b></p>
<p>List free disk space:</p>
<p class="code">df -h</p>
<p>Email a  disk free space report:</p>
<p><span class="code">df -h | <a href="grep.html">grep</a> 'File' -A1 | mail -s "Disk space Report" you@example.com </span><br>
<i><br>
<span class="quote">"A prediction is worth twenty explanations" ~ K. 
Brecher</span></i><b><br>
<br>
Related:</b><br>
<br>
<a href="du.html">du</a> - Estimate file space usage<br>
quot(1M), tunefs(1M), mnttab(4), attributes(5) <br>
Equivalent Windows command:  DIRUSE - resource kit utility to show size of multiple subfolders</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="df.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

