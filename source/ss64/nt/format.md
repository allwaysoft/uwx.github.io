---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>FORMAT.com </h1> 
<p>Format a disk for use with Windows. </p>
<pre>Syntax
      FORMAT <i>volume</i> [/FS:<i>file-system</i>] [/V:<i>label</i>] [/Q] [/L] [/A:<i>size</i>] [/C] [/I:<i>state</i>] [ /X] [/P:<i>passes</i>] [/S:<i>state</i>]
      FORMAT <i>volume</i> [/V:<i>label</i>] [/Q] [/F:<i>size</i>] [/P:<i>passes</i>]
      FORMAT <i>volume</i> [/V:<i>label</i>] [/Q] [/T:<i>tracks</i> /N:<i>sectors</i>] [/P:<i>passes</i>]
      FORMAT <i>volume</i> [/V:<i>label</i>] [/Q] [/P:<i>passes</i>]
      FORMAT <i>volume</i> [/Q]

Key
   <i>volume</i>          The drive letter (followed by a colon), mount point, or volume name.

   /FS:<i>file-system</i> The type of the file system (FAT, FAT32, exFAT, NTFS, <a href="https://en.wikipedia.org/wiki/Universal_Disk_Format">UDF</a>, <a href="https://en.wikipedia.org/wiki/ReFS">ReFS</a>).<br>
   /V:<i>label</i>        The volume label.<br>
   /Q              Perform a quick format. This switch overrides /P (zero out bytes).<br>
   /C              Compression - files added to the new disk will be compressed by default (NTFS only).

   /X              Force the volume to dismount first if necessary.
                   All opened handles to the volume would no longer be valid.

   /R:<i>revision</i>     UDF only: Force the format to a specific UDF version
                   (1.02, 1.50, 2.00, 2.01, 2.50).  default= 2.01

   /D              UDF 2.50 only: Metadata will be duplicated.

   /L              NTFS Only: Use large size file records.
                   By default, the volume will be formatted with small size file records.

   /A:<i>size</i>         Override the default allocation unit size. Default settings are
                   strongly recommended for general use. See below for allocation unit sizes.
                   NTFS compression is not supported for allocation unit sizes above 4096.

   /T:<i>tracks</i>       The number of tracks per disk side.

   /N:<i>sectors</i>      The number of sectors per track.

   /P:<i>count</i>        Zero every sector on the volume.  After that, the volume will be
                   overwritten "<i>count</i>" times using a different random number each time.
                   If "count" is zero, no additional overwrites are made after 
                   zeroing every sector.
                   This switchis ignored when /Q is specified.

   /S:<i>state</i>        Support for short filenames (enable, disable)
                   Short names are disabled by default

   /I:<i>state</i>        ReFS only: enable integrity on the new volume.
                   "state" is either "enable" or "disable"
                   Integrity is enabled on storage that supports data redundancy
                   by default.

   /F:<i>size</i>         The size of the floppy disk to format (720, 1.2, 1.44, 2.88, or 20.8).

Allocation unit sizes:
   ReFS supports 64K.
   NTFS supports 512, 1024, 2048, 4096, 8192, 16K, 32K, 64K.
   FAT supports 512, 1024, 2048, 4096, 8192, 16K, 32K, 64K,
     (128K, 256K for sector size &gt; 512 bytes).
   FAT32 supports 512, 1024, 2048, 4096, 8192, 16K, 32K, 64K,
     (128K, 256K for sector size &gt; 512 bytes).
   exFAT supports 512, 1024, 2048, 4096, 8192, 16K, 32K, 64K,
   128K, 256K, 512K, 1M, 2M, 4M, 8M, 16M, 32M.</pre>
<p> The FAT and FAT32 files systems impose the
following restrictions on the number of clusters on a volume:<br>
FAT: Number of clusters &lt;= <span class="code">65526</span><br>
FAT32: <span class="code">65526</span> &lt; Number of clusters &lt; <span class="code">4177918</span><br>
</p>
<p><b>Example</b></p>
<p class="code">@echo off<br>
Echo Warning this will reformat the entire D: disk!<br>PAUSE<br>
format D: /FS:NTFS /x</p>
<p><i class="quote">"The disks had a recording density of 1,100 bits per inch, and could move data out of the drive at 77 kilobytes per second" ~ <a href="http://www.itjungle.com/tfh/tfh091806-story03.html">Early hard drive specs. </a></i><b><br>
<br>
Related:</b><br><br>
<a href="https://support.microsoft.com/kb/314878">Q314878</a> - Choosing Cluster Size when formatting a hard drive<br>
<a href="http://www.microsoft.com/downloads/en/details.aspx?FamilyID=1cbe3906-ddd1-4ca2-b727-c2dff5e30f61">KB955704</a> - WinXP support   for the <a href="http://en.wikipedia.org/wiki/ExFAT">exFAT</a> file system format<br>
<a href="https://support.microsoft.com/kb/252448">Q252448</a> - How to create an NT <a href="http://www.bootdisk.com/">Bootdisk</a><br>
<a href="http://en.wikipedia.org/wiki/Floppy_disk">Floppy Disks</a> - History from Wikipedia <br>
Equivalent bash command (Linux): <span class="code">mkfs</span>, in FreeBSD &amp; OSX: <span class="code">newfs, fsck_exfat</span></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="format.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
