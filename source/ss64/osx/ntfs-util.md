---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>ntfs.util (/System/Library/Filesystems/ntfs.fs/ntfs.util)</h1> 
<p>NTFS file system utility, supports the mounting, probing, and unmounting of
NTFS file systems.</p>
<pre>Syntax
      ntfs.util -k <i>device</i>

      ntfs.util -m <i>device mountpoint mountflag1 mountflag2 mountflag3 mountflag4
</i>
      ntfs.util -p <i>device mountflag1 mountflag2</i>

      ntfs.util -u <i>device mountpoint</i>

Key
    -k   Get the UUID key for the NTFS file system at <i>device</i>.

    -m   Mount the NTFS file system located on device onto
         mountpoint with the flags mountflag1 mountflag2
         mountflag3 mountflag4.

    -p   Probe the device for an NTFS file system using the
         flags mountflag1 mountflag2.  If the probe is successful
         i.e. the device contains a valid NTFS file system,
         its label is printed to the standard output stream.

    -u   Unmount the NTFS file system located at device and
         mounted on mountpoint.

The mountflags referenced above are:
    •   mountflag1: removable or fixed
    •   mountflag2: readonly or writeable
    •   mountflag3: suid or nosuid
    •   mountflag4: dev or nodev</pre>
<p>
To get a list of the available attributes for use in constructing
queries, see mdimport(1), particularly the -X switch.</p>
<p class="quote"><i>“He who loves practice without theory is like the sailor who boards ship without a rudder and compass and never knows where he may cast” ~ Leonardo da Vinci</i></p>
<p><b>Related:</b></p>
<p>

hfs.util - HFS/HFS+ file system utility (Mount/unmount)<br>
ufs.util - UFS file system utility (Mount/unmount)</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ntfs-util.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
