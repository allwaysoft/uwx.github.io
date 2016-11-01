---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Performance Counters </h1>
<p>These Performance Monitor counters can be used with <a href="typeperf.html">TypePerf</a> or <a href="logman.html">LogMan</a> to record Performance data:</p>
<pre>Disk:
\LogicalDisk(*)\Avg. Disk sec/Read     The average time, in seconds, to read a block of data
\LogicalDisk(*)\Avg. Disk sec/Write    The average time, in seconds, to write a block of data
\LogicalDisk(*)\Disk Transfers/sec     Rate of read and write operations on the disk (&gt;80/sec)
\PhysicalDisk(*)\% Disk Time
\PhysicalDisk(*)\Avg. Disk Bytes/Read
\PhysicalDisk(*)\Avg. Disk Bytes/Write
\PhysicalDisk(*)\Avg. Disk Queue Length
\PhysicalDisk(*)\Avg. Disk Read Queue Length
\PhysicalDisk(*)\Avg. Disk sec/Read          Average time, in seconds, to read a block of data
\PhysicalDisk(*)\Avg. Disk sec/Write         Average time, in seconds, to write a block of data
\PhysicalDisk(*)\Avg. Disk Write Queue Length
\PhysicalDisk(*)\Disk Read Bytes/sec
\PhysicalDisk(*)\Disk Reads/sec
\PhysicalDisk(*)\Disk Transfers/sec
\PhysicalDisk(*)\Disk Write Bytes/sec
\PhysicalDisk(*)\Disk Writes/sec

Processes:
\Process(*)\IO Data Operations/sec      The rate of file, network and device Reads/Writes.
\Process(*)\IO Other Operations/sec     The rate of file, network and device I/O's (not read/write)

Memory:
\Memory\Available MBytes                Amount of physical memory available MB (&gt;10%)
\Memory\Free System Page Table Entries  The no. of page table entries not currently in use (&gt;10000)
\Memory\Pages Input/sec                 The rate at which pages are read from disk (&gt; 10/Sec)
\Memory\Pages/sec                       The rate at which hard page faults are resolved (&lt;1000)
\Memory\Page Reads/sec
\Memory\Page Writes/sec
\Memory\Pages Input/sec
\Memory\Pages Output/sec
\Memory\Pool Nonpaged Bytes        (&gt;40% available)
\Memory\Pool Paged Bytes           (&gt;40% available)

User Mode Memory:
\Process(*)\Private Bytes  The current non-shared memory consumed by this process, in bytes.
\Process(*)\Working Set    The current private + shared memory for this process, in bytes.
                           (On Win32 target a 250MB delta between Min size and Max size) (Win64 = 500MB)

\Process(*)\Thread Count   The no. of threads currently active in this process.
\Process(*)\Handle Count   How many handles each process has open.

Network:
\Network Interface(*)\Packets/sec
\Network Interface(*)\Output Queue Length  (&lt;1 thread waiting)
\Network Interface(*)\Bytes Total/sec      The rate bytes are sent over each network adapter
\Network Interface(*)\Current Bandwidth    (&lt;50%)
\Server\Bytes Total/sec                    The no. of bytes sent over the network (&lt;50% of capacity). 

Processor:
\Processor\% Processor Time       The primary indicator of processor activity. (&lt;70%) 
\Processor\% Privileged Time      (&lt;75%)
\Processor(*)\% Interrupt Time    Receiving and servicing hardware interrupts. (&lt;30%)
\System\Context Switches/sec      Thread re-prioritisation (5000/Sec)
\System\Processor Queue Length    Threads waiting to execute (&lt;3)
\Processor(*)\% User Time

SQL Server:
\Process(sqlservr)\% Privileged Time
\Process(sqlservr)\% Processor Time
\Process(sqlservr)\% User Time
\Process(sqlservr)\IO Data Operations/sec
\Process(sqlservr)\Page Faults/sec
\Process(sqlservr)\Private Bytes
\Process(sqlservr)\Thread Count
\Process(sqlservr)\Virtual Bytes
\Process(sqlservr)\Working Set
\SQLServer:Buffer Manager\*
\SQLServer:Cache Manager(*)\*
\SQLServer:Databases(*)\Data File(s) Size (KB)
\SQLServer:Databases(*)\Log File(s) Size (KB)
\SQLServer:Databases(*)\Transactions/sec
\SQLServer:General Statistics\*
\SQLServer:Locks(*)\*
\SQLServer:Memory Manager\*
\SQLServer:SQL Statistics\Batch Requests/sec
\SQLServer:SQL Statistics\SQL Compilations/sec
\SQLServer:SQL Statistics\SQL Re-Compilations/sec
</pre>
<p>The values in parenthesis are recommended/typical values, items consistently outside these ranges normally indicate a performance bottleneck. High Memory and CPU figures are not automatically a bad thing, combined with low disk activity this often indicates a well tuned, if busy, system.
</p><p><b>Example</b>
</p><p>The % processor on the local machine: <span class="code">\Processor\% Processor Time<br>
</span>The % processor on a remote machine: <span class="code">\\server214\Processor\% Processor Time</span>
</p><p class="quote"><i>"The time you enjoy wasting is not wasted time” ~ Bertrand Russell</i>
</p><p><b>Related</b>
</p><p><a href="typeperf.html">TypePerf</a> - Write performance data to a log file.<br>
<a href="logman.html">LOGMAN</a> - Manage Performance Monitor.<br>
<a href="http://technet.microsoft.com/en-us/sysinternals/bb896653.aspx">Process Explorer</a> - 
Map processes to DLLs and executables. <br>
<a href="http://www.brentozar.com/archive/2006/12/dba-101-using-perfmon-for-sql-performance-tuning/">Using perfmon for Sql Server</a> 
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-performance-counters.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

