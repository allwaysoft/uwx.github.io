---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>fsaclctl</h1>
<p>Enable or disable Access Control List support on a given file system.<br>
<i>Snow Leopard + Lion have ACLs enabled by default and therefore ship <a href="http://porkrind.org/missives/how-to-get-fsaclctl-off-your-leopard-install-dvd/">without</a>  fsaclctl.</i></p>
<p>After changing Access Control  List support either reboot the system, or remount the file system,
to make running applications aware of the change.</p>
<pre>Syntax
       fsaclctl [-v] [-p -path] [-e] [-d]

Options

     -e      Enable Access Control Lists on the given file system.

     -d      Disable Access Control Lists on the given file system.

     -v      Display version number.

     -p      Path to file system mount point.
             If no options are specified the status of Access Control List support is displayed.

Example
 sudo fsaclctl -p /Volumes/panther -e

Return Values
     0                  fsaclctl Successfully performed requested operation.
     [ENOTSUP]          The filesystem does not support this operation.
     [EPERM]            The requested operation must be performed as root.</pre>

<p class="quote"><i>"Politics is the art of looking for trouble, finding it, misdiagnosing 
  it, and then misapplying the wrong remedies." - Groucho 
  Marx</i></p>
<p><b>Related:</b></p>
<p><a href="chmod.html">chmod</a> -  Change access permissions<br>
<a href="umount.html">umount</a> - Unmount a device<br>
<a href="mount.html">mount</a> - Mount a file system</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="fsaclctl.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

