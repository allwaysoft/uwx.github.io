---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>mtools</h1> 
<p>Mtools is a public domain collection of tools to allow Unix systems to manipulate MS-DOS files: read, write, and move around files on an MS-DOS 
filesystem <br><br>Mtools are typically used to manipulate FAT formatted floppy disks. Each program attempts to emulate the MS-DOS equivalent command.<br>
<br>Mtools is sufficient to give access to MS-DOS filesystems. For instance, commands such as <span class="code">mdir a:</span> work on the <span class="code">a:</span> floppy without any preliminary mounting or 
initialization (assuming the default `/etc/mtools.conf' works on your machine). With mtools, one can change floppies  without unmounting and mounting.</p>
<pre>MTOOLS Programs

floppyd           floppy daemon to run on your X server box
floppyd_installtest small utility to check for the presence of floppyd
mattrib           change MS-DOS file attribute flags
<a href="mbadblocks.html">mbadblocks</a>        tests a floppy disk, and marks the bad blocks in the FAT
mcat              same as cat. Only useful with floppyd.
mcd               change MS-DOS directory
mcopy             copy MS-DOS files to/from Unix
mdel              delete an MS-DOS file
mdeltree          recursively delete an MS-DOS directory
mdir              display an MS-DOS directory
mdu               list space occupied by directory and its contents
mformat           add an MS-DOS filesystem to a low-level formatted floppy disk
minfo             get information about an MS-DOS filesystem.
mlabel            make an MS-DOS volume label
mkmanifest        makes a list of short name equivalents
mmd               make an MS-DOS subdirectory
mmount            mount an MS-DOS disk
mpartition        create an MS-DOS as a partition
mrd               remove an MS-DOS subdirectory
mmove             move or rename an MS-DOS file or subdirectory
mren              rename an existing MS-DOS file
mshowfat          shows the FAT map of a file
mtoolstest        tests and displays the configuration
mtype             display contents of an MS-DOS file
mzip              zip disk specific commands
xcopy             recursively copy a dos directory into another</pre>
<p class="quote"> <i>"We become what we behold. We shape our tools and then our tools shape us" ~ Marshall McLuhan</i></p>
<p><b>Equivalent Windows commands:</b><br>
<br>In the same way that mtools are DOS/Windows commands ported to run under UNIX, most UNIX commands have been ported to run under Windows.<br>
A limited selection of POSIX tools were included in the Windows NT resource kits, more can be found on the net.</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

