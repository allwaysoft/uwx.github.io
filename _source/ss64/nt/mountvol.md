---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>MOUNTVOL</h1> 
<p>Link volumes without requiring a drive letter. Create, delete or list a volume mount point.
NTFS junction mount points can only be used with <b>local </b>NTFS directories, (unlike DFS junction points which will target a network share). MOUNTVOL can be found on the Windows CD  i386 folder.
</p><pre>Syntax
      MOUNTVOL [<i>drive</i>:]<i>path</i> <i>VolumeName</i>
      MOUNTVOL [<i>drive</i>:]<i>path</i> /d
      MOUNTVOL [<i>drive</i>:]<i>path</i> /l
      MOUNTVOL [<i>drive</i>:]<i>path</i> /p
      MOUNTVOL /r
      MOUNTVOL [/n | /e]
      MOUNTVOL <i>drive</i>: /s

Options

    path     : An existing NTFS folder where the mount point will reside.

 VolumeName  : The volume name that is the target of the mount point.
               In the form \\?\Volume{GUID}\, where {GUID} is a globally unique identifier
               e.g.   <b>\\?\Volume\{</b>2eca078d-5cbc-43d3-aff8-7e8511f60d0e<b>}\</b>

    /D       : Remove the volume mount point from the specified folder.

    /E       : Re-enable automatic mounting of new basic volumes.

    /L       : List the mounted volume name for the specified folder.

    /S       : Itanium-based computers only. Mount the EFI System Partition on the specified drive. 

    /p       : Remove the volume mount point from the specified directory, 
               dismount the basic volume, and take the basic volume offline,
               making it unmountable. (Win7/Server 2008+)

    /R       : Remove volume mount point directories and registry settings for
               volumes that are no longer in the system,this prevents them from
               being automatically mounted and given their former volume mount
               point(s) when added back to the system.(Win7/Server 2008+)

    /N       : Disable automatic mounting of new basic volumes. (Win7/Server 2008+)
               New volumes are not mounted automatically when added to the system.</pre>
<p>   The GUID is used to identify a unique volume even if the drive letter changes.</p>
<p>If other processes are using the volume, mountvol closes any open handles before dismounting the volume.</p>
<p>Volumes that are dismounted by using /p are listed in the volumes list as "NOT MOUNTED UNTIL A VOLUME MOUNT POINT IS CREATED." <br>If the volume has more than one mount point, use /d to remove the additional mount points before using /p. You can make the basic volume mountable again by assigning a volume mount point.</p>
<p>If you need to expand your volume space without reformatting or replacing a hard drive, you can add a mount path to another volume. The benefit of using one volume with several mount paths is that you can access all<b> local volumes</b> by using a single drive letter (such as C:). You do not need to remember which volume corresponds to which drive letter—although you can still mount local volumes and assign them drive letters.</p>
<p>When using junction points:<br>
• Use NTFS ACLs to protect junction points from inadvertent deletion.<br>
• Use NTFS ACLs to protect files and directories that are targeted by junction points from inadvertent deletion or other file system operations.<br>
• Never delete a junction point by using Explorer, a del /s command, or other file system utilities that walk recursively into directory trees. These utilities affect the target directory and all subdirectories.<br>
• Use caution when you apply ACLs or change file compression in a directory tree that includes NTFS junction points.<br>
• Do not create namespace cycles with NTFS or DFS junction points.<br>
• Put all your junction points in a secure location in a namespace where you can test them out in safety, and where other users will not mistakenly delete them or walk through them.</p>
<p><b>Examples</b></p>
<p>List the  volume GUID for the C: drive on your system </p>
<p class="code">C:\&gt; mountvol C:</p>
<p>Create a mount point called ss64 </p>
<p class="code">C:\&gt; md ss64 <br>
C:\&gt; mountvol c:\ss64 \\?\Volume\{2eca078d-5cbc-43d3-aff8-7e8511f60d0e}\</p>
<p>List all the  volumes, mount points and GUIDs on your system </p>
<p class="code">C:\&gt; mountvol</p>
<p>Delete the mount point </p>
<p class="code">C:\&gt; mountvol c:\ss64 /d </p>
<p class="quote"><i>“The shortest and surest way of arriving at real knowledge is to unlearn the lessons we have been taught, to mount the first principles, and take nobody's word about them” ~ Henry Bolingbroke</i></p>
<p><b>Related:</b></p>
<p><a href="mklink.html">MKLINK</a> - Create a symbolic link (linkd)<br>
<a href="https://support.microsoft.com/kb/205524">Q205524</a> - How to create and manipulate NTFS junction points<br>
Delrp.exe - Delete NTFS junction points (Aimed primarily at developers) Win2000 ResKit <br>
<a href="bootcfg.html">BootCFG</a> - Edit Boot.ini settings.<br>
Equivalent bash command (Linux):  <a href="../bash/mount.html">mount</a> - Mount a file system</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mountvol.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

