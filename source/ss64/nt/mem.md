---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>MEM</h1> 
<p>Display memory usage. Available only in 32 bit systems.</p>
<pre>Syntax
      MEM 
      MEM /C
      MEM /D
      MEM /P<br>
Key<br>   /P   List programs in memory
        with the memory address and size of each 

   /D   List Programs(as /P) and also Devices

   /C   List programs in conventional memory and
        list programs in upper memory</pre>
<p> MEM will only display details about the current CMD shell environment, programs running in a separate shell (or WIN32 programs) will not be listed 
- so it won't tell you anything about total memory usage.<br>
<br>
<i class="quote">“The palest ink is better than the sharpest memory” ~ Chinese proverb</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="run.html">MDSCHED</a> - Windows Memory Diagnostic Scheduler<br>
<a href="winmsd.html">WINMSD</a> - Windows  Diagnostics (including Physical Memory)<br>
GUI Task Manager - for all program details including Win32 applications.<br>
<a href="tlist.html">TLIST</a> - Task List<br>
powershell: <a href="../ps/get-wmiobject.html">gwmi</a> Win32_PhysicalMemory / gwmi Win32_ComputerSystem
<br>
<a href="https://support.microsoft.com/kb/q184419/">Q184419</a> - DisablePagingExecutive (use  when &gt;500M RAM is available) <a href="http://support.microsoft.com/kb/q126962/"><br>
Q126962</a> - How to increase desktop heap memory for non-interactive processes<br>
<a href="http://download.microsoft.com/download/e/b/a/eba1050f-a31d-436b-9281-92cdfeae4b45/mem-mgmt.doc">Memory Management.doc</a> -  explains allocation of memory address space (Microsoft) <br>
<a href="http://www.microsoft.com/technet/prodtechnol/exchange/guides/E2k3Perf_ScalGuide/e834e9c7-708c-43bf-b877-e14ae443ecbf.mspx">3GB Startup Switch</a> (this is very rarely needed) <br>
Equivalent bash command (Linux): free -t - Display a summary of current memory usage and availability.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mem.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

