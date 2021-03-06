---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>mount</h1> 
<p>mount a file system<span class="body"><br>
  All files accessible in a Unix system are arranged in one big tree, the file 
  hierarchy, rooted at /. These files can be spread out over several devices. 
  The mount command serves to attach the file system found on some device to the 
  big file tree.</span></p>
<pre>SYNTAX
       mount -a [-fFnrsvw] [-t vfstype]

       mount [-fnrsvw] [-o <i>options</i> [,...]] device | dir

       mount [-fnrsvw] [-t vfstype] [-o <i>options</i>] device dir

       mount [-hV]<span class="body"> </span> </pre>
<pre>OPTIONS

       -a     Mount  all  filesystems  (of  the given types) mentioned
              in fstab.

       -F     (Used in conjunction with  -a.)   Fork  off  a  new
              incarnation of mount for each device.  This will do
              the mounts on different devices  or  different  NFS
              servers  in  parallel.  This has the advantage that
              it is faster; also NFS timeouts go in  parallel.  A
              disadvantage  is  that the mounts are done in unde-
              fined order.  Thus, you cannot use this  option  if
              you want to mount both /usr and /usr/spool.

       -f     Causes  everything to be done except for the actual
              system call; if it's not  obvious,  this  ``fakes''
              mounting the file system.  This option is useful in
              conjunction with the -v flag to determine what  the
              mount  command is trying to do. It can also be used
              to add entries for devices that were  mounted  ear-
              lier with the -n option.

       -n     Mount without writing in /etc/mtab.  This is necessary for example
              when /etc is on a  read-only  file system.

       -s     Tolerate  sloppy mount options rather than failing.
              This option exists for support of the Linux
              autofs-based automounter.

       -r     Mount  the  file  system read-only. A synonym is -o ro

       -w     Mount the  file  system  read/write.  This  is  the
              default. A synonym is -o rw.

       -L <i>label</i>
              Mount the partition that has the specified label.

       -U <i>uuid</i>
              Mount  the  partition  that has the specified uuid.

       -o     Several -o options can be specified in a comma separated 
              string ... see info for more

              async  All  I/O  to  the file system should be done
                     asynchronously.

              atime  Update inode access time  for  each  access.
                     This is the default.

              noatime
                     Do  not  update  inode  access times on this
                     file system (e.g, for faster access  on  the
                     news spool to speed up news servers).

              auto   Can be mounted with the -a option.

              noauto Can only be mounted explicitly (i.e., the -a
                     option will not cause the file system to  be
                     mounted).

              ro     Mount the file system read-only.

              rw     Mount the file system read-write.

              suid   Allow set-user-identifier or set-group-identifier bits to take effect.

              sync   All  I/O  to  the file system should be done synchronously.

       -t <i>vfstype</i>
              The  argument  following the -t is used to indicate
              the file system type.

       -h     Print a help message.

       -V     Output version.

       -v     Verbose mode.

File system specific MOUNT options: see <b>info mount</b> for these</pre>
<p>The standard form of the mount command, is mount -t type device dir This tells the kernel to attach the file system found  on device (which is of type type) at the directory dir. The previous contents  (if any) and owner and mode of dir become invisible, and as long as this file system remains mounted, the pathname dir refers to the root of the file system 
on device.<br><br>Three forms of invocation do not actually mount anything:<br><br>print a help message:<br>
<span class="code">mount -h</span><br>
<br>
print a version string:<br>
<span class="code">mount -V</span><br>
<br>
list all mounted file systems of type 'type'<br>
<span class="code">mount [-t type]</span><br>
<br>The proc file system is not associated with a special device, and when mounting it, an arbitrary keyword, such as proc can be used instead of a device specification. 
(The customary choice none is less fortunate: the error message `none busy' from umount can be confusing.)<br>
<br>
Most devices are indicated by a file name (of a block special device), like /dev/sda1, but there are other possibilities. For example, in the case of an NFS mount, device might look like knuth.cwi.nl:/dir. It is possible to indicate a block special device using its volume label or UUID (see the -L and -U options below).<br>
<br> The file /etc/fstab (see fstab), can contain lines describing what devices are usually mounted where, using which options.</p>
<p><i class="quote">"The Ten Commandments and the Sermon on the Mount contain my religion" ~ John Adams</i><br>
  <br>
<b> Related:</b></p>
<p>autofs5 - Control Script for automounter<br>
automount - manage autofs mount points<br>
<a href="df.html">df</a> - Report filesystem disk space usage<br>
<a href="fdformat.html">fdformat</a> - Low-level format a floppy disk<br>
<a href="fdisk.html">fdisk</a> - Partition table manipulator for Linux<br>
<a href="ram.html">ram</a> - ram disk device <br>
<span class="body">umount(8) - detach/u</span>nmount a device<br>
Equivalent Windows commands: Disk Administrator GUI</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mount.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

