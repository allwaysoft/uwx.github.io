---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>ditto</h1> 
<p>Copy files and folders.</p>
<pre>Syntax
     ditto [<i>options</i>] <i>Source_file  Destination_file</i>

     ditto [<i>options</i>] <i>Source  Destination_folder</i>

     ditto -x [<i>options</i>] <i>Source_Archive  Destination_folder</i>

     ditto -c [<i>options</i>] <i>Source  Destination_archive
</i>
     Where <i>Source </i>= a file, folder or archive.

Options
     -c   create an archive at the destination path.
          Use a file extension, .zip, .cpio or .cpgz (for Compressed CPIO archives)

     -v   Print a line of output for each source folder copied.

     -k   Instead of CPIO, assume PKZip archives.

     -V   Print a line of output for every file, symbolic link, and device copied.

     -x   the first source is an archive to extract.

     -X   When copying one or more source folders, do not descend into
           folders that have a different device ID.

     -z   -x implies -z.  CPIO archives should be compressed.  Uncompressed
          data flows through the decompressor unmodified.

     --keepParent
          The parent directory of src should be embedded in Destination_archive.
          --keepParent only applies to the creation of archives.

     --arch <i>arch</i>
          Copy thin multi-architecture binaries ("fat binaries") to the specified
          architecture. If multiple -arch options are specified then the
          resulting destination file will be multi-architectural containing
          each of the specified architectures (if they are present in the
          source file).  arch should be specified as "ppc", "i386", etc.

     --bom <i>bom</i>
          If this option is given then only files, links, devices, and folders
          that are present in the specified BOM file are copied.

     --rsrc
          Preserve resource forks and HFS meta-data.  ditto will store this
          data in Carbon-compatible ._ AppleDouble files on filesystems that
          do not natively support resource forks.

     -rsrcFork
          synonym for --rsrc

     --sequesterRsrc
          ditto will preserve resource forks and HFS meta-data in the directory
           __MACOSX within PKZip archives.</pre>
<p>Unlike <a href="cp.html">cp -R</a>, if the destination folder already exists, the existing contents will be <i>merged</i> with the contents of the folder being copied. </p>
<p><b>Examples</b><br>
<br>
Copy the "Documents" folder to "Documents backup".<br>
<span class="code">ditto Documents "Documents backup"</span><br>
quotes are needed because of the space in the folder name.<br>
<br>
To also preserve the Mac resource forks, type and creator codes use:<br>
<span class="code">ditto -rsrcFork Documents "Documents backup"</span><br>
</p>
<p class="quote"><i>“The Borgesian meta-library contains a copy of every book ever written, but my dream-artifact is already, and always, every book ever written, on demand” - William Gibson </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/ditto.1.html">ditto man page</a> - Apple.com<br>
<a href="cp.html">cp</a> - Copy files<br>
copy - Copy groups of files in folders<br>
<a href="dd.html">dd</a> - Data Dump - convert and copy a file (use for RAW 
storage)<br>
<a href="install.html">install</a> - Copy files and set attributes<br>
<a href="mv.html">mv</a> - Move Files<br>
<a href="tar.html">tar</a> - store or extract files to an archive (allows symbolic 
links to be copied as links)</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ditto.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
