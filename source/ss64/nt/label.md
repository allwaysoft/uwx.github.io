---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>LABEL</h1> 
<p>Edit a disk label.</p>
<pre>Syntax
      LABEL [/MP][<i>volume</i>] [<i>drive</i>:][<i>label</i>]

Key
   <i>Drive</i>:  The drive letter of the disk to be named.
   <i>label</i>   The name for the volume.
   /MP     Treat the volume as a mount point or volume name.
   <i>volume</i>  The drive letter, mount point, or volume name.
           If a volume name is specified, the /MP parameter is unnecessary.
   /?      Display help. </pre>
<p>Originally designed as  a reminder of which floppy disk is in the machine, disk labels can also be applied to hard drives and mapped drives.</p>
<p>A volume label can contain as many as 32 characters for NTFS volumes and as many as 11 characters for FAT volumes and can include spaces but no tabs. </p>
<p>FAT volume labels are not case sensitive and cannot contain any of the following characters:<span class="code"> * ? / \ | . , ; : + = [ ] &lt; &gt; "</span> This limitation does not apply to NTFS volumes.</p>
<p>If you do not specify a label when you use the label command, label displays a message including the "Volume Serial Number" if one exists.<br>
</p>
<p>Disk labels should not be confused with the <i>drive description</i> held in the registry.<br>
<br>
<b> Example</b><br>
<br>
To label the disk drive D: as SS64, </p>
<p><span class="code">C:\ &gt; label d:SS64</span><br>
<br>
<i class="quote">“A name is a label, and as soon as there is a label, the ideas disappear and out comes label-worship and label-bashing” ~ Richard Bach </i><br>
<br>
<b><span class="body">Related:</span></b><span class="body"><br>
<br>
<a href="vol.html">VOL</a> - display the volume label<br>
Powershell: <a href="../ps/get-wmiobject.html">gwmi</a> win32_logicaldisk "volumeName"<br>
<a href="https://support.microsoft.com/kb/159865">Q159865</a> - How to distinguish a physical disk device (registry settings) <br>
Equivalent bash command (Linux): <a href="../bash/hostname.html">hostname</a> - Print or set system name 
</span></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="label.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

