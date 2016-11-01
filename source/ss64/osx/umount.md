---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>umount</h1> 
<p>Unmount filesystems. Remove a special device or the remote node 
  (rhost:path) from the filesystem tree at the point node. If either special or 
  node are not provided, the appropriate information is taken from the fstab(5) 
file.</p>
<pre>Syntax
      umount [-fv] special | node

      umount -a | -A [-fv] [-h <i>host</i>] [-t <i>type</i>]

Options<i>
</i>     <b>-a</b>      All the filesystems described in <b>fstab(5)</b> are unmounted.

     <b>-A</b>      All the currently mounted filesystems except the root are
             unmounted.

     <b>-f</b>      The filesystem is forcibly unmounted.  Active special devices
      continue to work, but all other files return errors if further
      accesses are attempted.  The root filesystem cannot be forcibly
      unmounted.

     <b>-h</b> <i>host</i>
      Only filesystems mounted from the specified host will be
      unmounted.  This option is implies the <b>-A</b> option and, unless oth-
      erwise specified with the <b>-t</b> option, will only unmount NFS
      filesystems.

     <b>-t</b> <i>type</i>
      Is used to indicate the actions should only be taken on filesys-
      tems of the specified type.  More than one type may be specified
      in a comma separated list.  The list of filesystem types can be
      prefixed with ``no'' to specify the filesystem types for which
      action should <i>not</i> be taken.  For example, the <b>umount</b> command:

      umount -a -t nfs,hfs

      umounts all filesystems of the type NFS and HFS.

     <b>-v</b>
      Verbose, additional information is printed out as each filesystem
      is unmounted.

FILES
     /etc/fstab  filesystem table</pre>
<p class="quote"><i>“Be nice to people on the way up, because you'll meet them on your way down” ~ Wilson Mizner</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/umount.8.html">umount man page</a> - Apple.com<br>hdiutil - manipulate disk images <a href="mount.html"><br>
mount</a> - Mount a file system<br>
fstab(5) - </p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="umount.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
