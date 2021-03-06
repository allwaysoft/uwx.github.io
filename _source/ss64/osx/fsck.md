---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>fsck</h1> 
<p>Filesystem consistency check and interactive repair.<br> 
Journaling file systems avoid the need to run fsck -  OS X Journaling is <a href="http://support.apple.com/kb/ht2355">on</a> by default in OS X 10.3 and above</p>
<pre>Syntax<i>
   Standard set of filesystems:</i>

       fsck -p [-f] [-m <i>mode</i>]

   <i>Specified filesystem:

</i>       fsck [-b <i>block</i>#] [-l <i>maxparallel</i>] [-q] [-y] [-n] [-m <i>mode</i>] [<i>filesystem</i>]...

Options<i>
</i>     -b     Use the block specified immediately after the flag as the
            super block for the filesystem.  Block 32 is usually an
            alternate super block.

     -f     Force fsck to check `clean' filesystems when preening.

     -l     Limit the number of parallel checks to the number specified
            in the following argument.  By default, the limit is the num-
            ber of disks, running one process per disk.  If a smaller
            limit is given, the disks are checked round-robin, one
            filesystem at a time.

     -m     Use the mode specified in octal immediately after the flag as
            the permission bits to use when creating the <i>lost+found</i>
            directory rather than the default 1777.  In particular, sys-
            tems that do not wish to have lost files accessible by all
            users on the system should use a more restrictive set of per-
            missions such as 700.

     -p     Without the -p option, fsck audits and interactively repairs inconsistent
            conditions for filesystems.  If the filesystem is inconsistent the opera-
            tor is prompted for concurrence before each correction is attempted.

            It should be noted that the -p option can result in some loss of data. 
            The amount and severity of data lost can be determined from the diagnostic
            output.  The default action for each consistency correction is to wait
            for the operator to respond yes or no.  If the operator does not have
            write permission on the filesystem fsck will default to a -n action.

     -q     Do a quick check to determine if the filesystem was unmounted cleanly.

     -y     Assume a yes response to all questions asked by <b>fsck</b>; this
            should be used with great caution as this is a free license
            to continue after essentially unlimited trouble has been
            encountered.

     -n     Assume a no response to all questions asked by <b>fsck</b> except
            for `CONTINUE?', which is assumed to be affirmative; do not
            open the filesystem for writing.

            In interactive mode, <b>fsck</b> will list the conversion to be made
            and ask whether the conversion should be done.   If a negative
            answer is given, no further operations are done on the
            filesystem.  In preen mode, the conversion is listed and done
            if possible without user interaction.  Conversion in preen
            mode is best used when all the filesystems are being con-
            verted at once.  The format of a filesystem can be determined
            from the first line of output from <b>dumpfs(8)</b>.

            If no filesystems are given to <b>fsck</b> then a default list of filesystems is
            read from the file <i>/etc/fstab</i>.

     Inconsistencies checked are as follows:
     1.  Blocks claimed by more than one inode or the free map.
     2.  Blocks claimed by an inode outside the range of the filesystem.
     3.  Incorrect link counts.
     4.  Size checks:
          Directory size not a multiple of DIRBLKSIZ.
          Partially truncated file.
     5.  Bad inode format.
     6.  Blocks not accounted for anywhere.
     7.  Directory checks:
          File pointing to unallocated inode.
          Inode number out of range.
          Dot or dot-dot not the first two entries of a directory
          or having the wrong inode number.
     8.  Super Block checks:
          More blocks for inodes than there are in the filesystem.
          Bad free block map format.
          Total free block and/or free inode count incorrect.

     Orphaned files and directories (allocated but unreferenced) are, with the
     operator's concurrence, reconnected by placing them in the <i>lost+found</i>

     directory.   The name assigned is the inode number.   If the <i>lost+found</i>
     directory does not exist, it is created.  If there is insufficient space
     its size is increased.

     Because of inconsistencies between the block device and the buffer cache,
     the raw device should always be used.</pre>
<h2>FILES</h2>
<pre>     /etc/fstab   contains default list of filesystems to check.</pre>
<p>The first form of fsck preens a standard set of filesystems 
  or the specified filesystems. It is normally used in the script /etc/rc during 
  automatic reboot. Here fsck reads the table /etc/fstab to determine which filesystems 
  to check. Only partitions in fstab that are mounted `rw,' `rq' or `ro' and that 
  have non-zero pass number are checked. </p>
<p>Filesystems with pass number 1 (normally 
  just the root filesystem) are checked one at a time. When pass 1 completes, 
  all remaining filesystems are checked, running one process per disk drive. The 
  disk drive containing each filesystem is inferred from the longest prefix of 
  the device name that ends in a digit; the remaining characters are assumed to 
  be the partition designator. </p>
<p>In preening mode, filesystems that are marked clean 
  are skipped. Filesystems are marked clean when they are unmounted, when they 
  have been mounted read-only, or when fsck runs on them successfully.</p>
<p>The kernel takes care that only a restricted class of innocuous 
  filesystem inconsistencies can happen unless hardware or software failures intervene. 
  These are limited to the following: <br>
  ~ Unreferenced inodes <br>
  ~ Link counts in inodes too large <br>
  ~ Missing blocks in the free map<br>
  ~ Blocks in the free map also in files <br>
  ~ Counts in the super-block wrong</p>
<p>These are the only inconsistencies that fsck with the -p option will correct; 
  if it encounters other inconsistencies, it exits with an abnormal return status 
  and an automatic reboot will then fail. For each corrected inconsistency one 
  or more lines will be printed identifying the filesystem on which the correction 
  will take place, and the nature of the correction. </p>
<p>After successfully correcting 
  a filesystem, fsck will print the number of files on that filesystem, the number 
  of used and free blocks, and the percentage of fragmentation.</p>
<p> If sent a QUIT signal, fsck will finish the filesystem checks, 
  then exit with an abnormal return status that causes an automatic reboot to 
  fail. This is useful when you want to finish the filesystem checks during an 
  automatic reboot, but do not want the machine to come up multiuser after the 
  checks complete. </p>
<p class="quote"><i>Dennis Ritchie: “So fsck was originally called something else”<br>
Question: “What was it called?”<br>
Dennis Ritchie: Well, the second letter was different ~ Q&amp;A at Usenix</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/fsck.8.html">fsck man page</a> - Apple.com<br>fs(5), fstab(5), newfs(8), reboot(8)<br>
<a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/fsck_exfat.8.html">fsck_exfat</a> - Verify and repair ExFAT file systems.<br>
<a href="shutdown.html">shutdown</a> - Shutdown or restart OS X </p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="fsck.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
