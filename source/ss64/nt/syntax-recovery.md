---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Windows  Recovery Console</h1>
<p>When dealing with a Blue Screen of Death at boot - the first option 
  should be to boot into Safe Mode (press F8 during bootup). From safe mode you can run a system restore with <span class="code">%systemroot%\system32\restore\rstrui.exe</span></p>
<p>Some hardware failures are so severe they prevent booting into 
  Safe Mode. </p>
<p>The recovery console allows an alternative boot option giving 
  a limited command prompt - this can be used to disable services or replace system 
files until you are able to boot into safe mode.</p>
<pre>Recovery Console commands:

ATTRIB   Change file attributes
BATCH    Execute a batch file
CD       Change directory
CHKDSK   Check Disk
CLS      Clear screen
COPY     Copy files*
DEL      Delete Files*
DIR      Directory listing
DISABLE  Disable Service
DISKPART Create or delete disk Partitions (like running setup)
ENABLE   Enable Service
EXIT     Quit the recovery console and reboot
<a href="expand.html">EXPAND</a>
FIXBOOT  Write a new boot sector to the system partition
FIXMBR   Repair the Master boot Record
FORMAT   FORMAT <i>drive</i> /FS:NTFS
HELP
LISTSVC  List all services and drivers
LOGON    Logon as administrator (local)
MAP      List local physical drive mappings
MAP arc  List local physical drive mappings(ARC path)
MD       Make Directory*
<a href="more.html">MORE</a>
RD       Remove Directory*
REN      Rename file*
SYSTEMROOT Set the current directory to be %Systemroot%

* File operations are only possible on:
  system directories, floppy drive(removable media), Root directories,
  local install sources. You can copy FROM but not TO a floppy disk.</pre>
<p><b>Installation:</b><br>
  <br>
  The recovery console is not installed by default,  from 
  the install CD use the command:
  <span class="code">D:\i386\winnt32 /cmdcons</span><br>
Then restart the machine.
<br>
  <br>
<i class="quote">“When a deep injury is done us, we never recover until we forgive” ~ Alan Paton</i>
</p><p><b>Related:</b><br>
<br>
<a href="sc.html">SC</a> - Service Control<br>
<a href="winmsd.html">WinMSD</a> - List running services<br>
<a href="https://support.microsoft.com/kb/326215">Q326215  </a>- Recovery console Windows 2003<br>
<a href="https://support.microsoft.com/kb/308402">Q308402</a> - Recovery
Console and Sysprep<br>
<a href="https://support.microsoft.com/kb/812450">Q812450</a> - Program Files Are Missing or Damaged<br>
<a href="https://support.microsoft.com/kb/330184">Q330184</a> - Invalid Boot.ini / Hal.dll error message<br>
<a href="https://support.microsoft.com/kb/816579">Q816579</a> - Perform an In-Place Upgrade of Windows Server 2003<br>  
<a href="syntax-services.html">List of Windows Services</a><br>
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-recovery.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

