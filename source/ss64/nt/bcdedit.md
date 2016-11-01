---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>BCDEDIT.exe (Vista+)</h1>  
<p>Manage Boot Configuration Data (BCD) data stores.
The objects and elements in the store effectively replace Boot.ini.<br>
BCDEdit improves upon and replaces the <a href="bootcfg.html">Bootcfg</a> command on earlier versions of Windows.</p><pre>Syntax
      BCDEdit /Command [<i>Argument1</i>] [<i>Argument2</i>] ...

Key
   Store commands:

      /createstore  Creates a new empty boot configuration data store.
                    The created store is not a system store.

      /export       Export the contents of the system store into a file.
                    This file can be used later to restore the state of the system store.
                    Valid only for the system store.

      /import       Restore the state of the system store by using a backup data file
                    previously generated with /export.
                    This command deletes any existing entries in the system store before
                    the import takes place. Valid only for the system store.

      /store        This option can be used with most BCDedit commands to specify
                    the store to be used. If this option is not specified, then
                    BCDEdit operates on the system store.
                    Running the bcdedit /store command by itself is equivalent to running
                    the bcdedit /enum active command.</pre>
<p>Administrative privileges are required to use BCDEdit to modify BCD.</p>
<p><i class="quote">“I’d rather wake up in the middle of nowhere than in any city on earth” - Steve McQueen</i><br>
<br>
<b>Related:</b></p>
<p><a href="bcdboot.html">BCDBOOT</a> - Create or repair a system partition<br>
<a href="bootcfg.html">BOOTCFG</a> - Edit Windows boot settings<br>
Fixboot - Write a new partition boot sector<br>
<a href="syntax-recovery.html">Recovery console</a></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="bcdedit.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
