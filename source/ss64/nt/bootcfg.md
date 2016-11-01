---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>BOOTCFG.exe (Windows XP/2003)</h1>  
<p>Edit the Windows boot settings stored in Boot.ini, for Windows 7/2008 use the <a href="bcdedit.html">BCDEdit</a>
 command instead.</p><pre>Syntax
      BOOTCFG /addsw    Add OS load options for an OS entry in boot.ini

      BOOTCFG /copy     Duplicate the entries for an OS instance.

      BOOTCFG /dbg1394  Configure 1394 port debugging

      BOOTCFG /debug    Edit the debug settings for an OS.

      BOOTCFG /default  Specify the default OS

      BOOTCFG /delete   Delete an OS entry [operating systems] section of Boot.ini

      BOOTCFG /ems      Redirect the EMS console to a remote computer (server only). 
                        (Emergency Management Services) 

      <b>BOOTCFG /list</b>     List entries in boot.ini

      BOOTCFG /query    Display section entries from Boot.ini

      BOOTCFG /raw      Add OS load options, specified as a string 

      <b>BOOTCFG /rebuild</b>  Totally rebuild boot.ini (use when Windows won't start)

      BOOTCFG /rmsw     Remove OS load options for an OS

      BOOTCFG /timeout  Change the OS time-out value.</pre>
<p> Detailed options for all the above are available from BOOTCFG /? Items in bold are only available from the <a href="syntax-recovery.html">recovery console</a> </p>
<p>Default identification strings: </p>
<p>OS Load Options = <span class="code">/Fastdetect</span><br>
 Load Identifier = <span class="code">Microsoft Windows XP Professional </span></p>
<p>If you intend to rebuild the boot.ini file, delete it first - boot into the recovery console then: </p>
<pre> ATTRIB -H -R -S  C:\Boot.ini 
 DEL C:\Boot.ini
 Bootcfg /Rebuild
 Fixboot</pre>
<p><i class="quote">“I’d rather wake up in the middle of nowhere than in any city on earth” - Steve McQueen</i><br>
<br>
<b>Related:</b></p>
<p><a href="bcdedit.html">BCDEDIT</a> - Manage Boot Configuration Data<br>
  Fixboot - Write a new partition boot sector<br>
  <a href="https://support.microsoft.com/kb/291980">Q291980</a> - The XP Bootcfg command<br>
  <a href="http://support.microsoft.com/?id=317521">Q317521</a> - The 2003 Bootcfg command<br>
  <a href="syntax-recovery.html">Recovery console</a></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="bootcfg.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

