---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>fsck</h1> 
<p>Filesystem consistency check and interactive repair. Journaling file systems avoid the need to run fsck.</p>
<pre>Syntax
      fsck [<i>options</i>] [<i>filesystem</i>] ...

Options
  --     Pass all subsequent options to filesystem-specific checker.
         All options that fsck doesn't recognize will also be passed.

  -r     Interactive mode; prompt before making any repairs.

  -s     Serial mode.

  -t <i>fstype
</i>         Specify the filesystem type. Do not check filesystems of any other type.

  -A     Check all filesystems listed in /etc/fstab.

  -N     Suppress normal execution; just display what would be done.

  -R     Meaningful only with -A: check all filesystems listed in /etc/fstab except the root filesystem.

  -T     Suppress printing of title.

  -V     Verbose mode.

EXIT CODES

  1    Errors were found and corrected.
  2    Reboot suggested.
  4    Errors were found but not corrected.
  8    fsck encountered an operational error.
  16   fsck was called incorrectly.
  128  A shared library error was detected.</pre>
<p><span class="body">The return status is the exit status of the last command 
  executed in <var>consequent-commands</var>, or zero if none were executed. </span></p>
<p class="quote"><i>Dennis Ritchie: “So fsck was originally called something else”<br>
Question: “What was it called?”<br>
Dennis Ritchie: "Well, the second letter was different" ~ Q&amp;A at Usenix</i></p>
<p><b>Related:</b><a href="for.html"><br>
</a><br>
reboot - Reboot the machine<br>
ext2 File System (non journaling)<br>
<a href="http://www.redhat.com/support/wpapers/redhat/ext3/index.html">ext3 File System</a> - Red Hat Journaling File System<br>
<a href="ddrescue.html">ddrescue</a> - Data recovery tool<br>
<a href="http://oss.sgi.com/projects/xfs/">XFS File System</a> -  journaling filesystem, SuSE, Mandrake, Gentoo.<br>
Equivalent Windows command: 
<a href="../nt/chkdsk.html">CHKDSK</a> - Check Disk - check and repair disk problems</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="fsck.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

