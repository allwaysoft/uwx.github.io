---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Export-Counter</h1> 
<p>Export PerformanceCounterSampleSet objects  to log files. Export-Counter is designed to export data that is returned by  Get-Counter and Import-Counter.</p>
<pre>Syntax
      Export-Counter [-Path] <i>string</i> -InputObject <i>PerformanceCounterSampleSet</i>[]
         [-Circular] [-FileFormat <i>string</i>] [-Force] [-MaxSize <i>int</i>] [<i>CommonParameters</i>]

Key:
   -Circular
       Indicates that output file should be a circular log with first in, first
       out (FIFO) format. When you include this parameter, the -MaxSize parameter is required.

   -FileFormat
       The output format of the output log file.
       Valid values are CSV, TSV, and BLG.  The default value is BLG.

   -Force
       Overwrite and replace an existing file if one exists in the location specified by -Path.

   -InputObject <i>PerformanceCounterSampleSet</i>[]
       The counter data to export.
       Enter a variable that contains the data or a command that gets the data, 
       such as a Get-Counter or Import-Counter command.

   -MaxSize <i>int</i>
       The maximum size of the output file. 
       If the Circular parameter is specified, then when the log file reaches the
       specified maximum size, the oldest entries are deleted as newer ones are added.
       If the Circular parameter is not specified, then when the log file 
       reaches the specified maximum size, no new data is added and the cmdlet
       generates a non-terminating error.

   -Path <i>string</i>
       The path and file name of the output file.
       Enter a relative or absolute path on the local computer, or a UNC path to a remote computer,
       such as \\Computer\Share\file.blg. This parameter is required. 

       Note: The file format is determined by the value of -FileFormat, not by the file name extension.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  If you type only a filename as the Path, PowerShell will create a (.psc1) file in the current directory.</p>
<p>If Export-Console is run repeatedly in the same session, then  -Path may be omitted, in this case Export-Console will overwrite the last console file written to.</p>
<p><b>Examples</b></p>
<p>Use Get-Counter to collect processor time data and pipe this to Export-Counter creating the file myproc.blg:</p>
<p class="code">PS C:&gt; get-counter "\Processor(*)\% Processor Time" -max 50 | export-counter -path $home\myproc.blg</p>
<p>Import performance counter data from  <span class="code">myperf.csv</span> (previously exported by  Export-Counter) the pipe the imported data to Export-Counter and create a circular log that wraps at 2 GB.</p>
<p><span class="code">PS C:&gt; import-counter myperf.csv | export-counter -path threadtest.blg -circular -maxsize 2GB </span><br>
  <br>
Collect working set counter data from Server64, a remote computer and save the data in the $pws variable:</p>
<p class="code">PS C:&gt; $pws = get-counter -computername Server64 -counter "\Process(*)\Working Set - Private" -maxSamples 20</p>
<p>now pipe the data in <span class="code">$pws</span> to  Export-Counter, which saves it to ss64.blg:</p>
<p class="code">PS C:&gt; $pws  | export-counter -path \\Server64\Perf\ss64.blg</p>
<p>Filter and  re-log existing performance data, <span class="code">DiskSpace.blg</span> contains "LogicalDisk\% Free Space" counter data for hundreds of remote computers in the enterprise. The $lowSpace variable is then set to objects with CookedValues of less than 15 (percent), this data is then exported to <span class="code">LowDiskSpace.blg</span>:</p>
<p class="code">PS C:&gt; $all = import-counter DiskSpace.blg<br>
PS C:&gt; $lowSpace = $all.countersamples | where {$_.cookedvalues -lt 15}<br>
PS C:&gt; $lowSpace | export-counter -path LowDiskSpace.blg</p>
<p class="quote"><i>“Love all. Trust a few. Do wrong to none” ~ William Shakespeare</i></p>
<p><b>Related:</b></p>
<p>  <a href="get-counter.html">Get-Counter</a>             - Get performance counter data
<br>
<a href="import-counter.html">Import-Counter</a>             - Import performance counter log files</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="export-counter.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

