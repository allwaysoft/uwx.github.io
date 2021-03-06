---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Import-Counter</h1> 
<p>Import performance counter log files (.blg, .csv, .tsv) and create the objects that represent each counter sample in the log.</p>
<pre>Syntax
      Import-Counter [-Path] <i>string</i>[] [-Counter <i>string</i>[]] [-EndTime <i>DateTime</i>]
        [-MaxSamples <i>Int64</i>] [-StartTime <i>DateTime</i>] [<i>CommonParameters</i>]

      Import-Counter [-Path] <i>string</i>[] -ListSet &lt;string[]&gt; [<i>CommonParameters</i>]

      Import-Counter [-Path] <i>string</i>[] -Summary [<i>CommonParameters</i>]

Key:
   -Counter <i>string</i>[]
       Import data only for the specified performance counters.
       By default, Import-Counter imports all data from all counters in the input files.
       Enter one or more counter paths. Wildcards are permitted in the Instance part of
       the path. 
       Each counter path has the following format. Notice that the ComputerName value is
       required in the path, even on the local computer.

               "\\<i>ComputerName</i>\<i>CounterSet</i>(<i>Instance</i>)\<i>CounterName</i>"

        For example: 
                "\\Server64\Processor(2)\% User Time"
                "\Processor(*)\% Processor Time

   -EndTime <i>DateTime</i>
       Imports only counter data with a timestamp &lt;= <i>DateTime</i>
       Enter a DateTime object, such as one created by <a href="get-date.html">Get-Date</a>
       By default, Import-Counter imports all counter data in the files specified by -Path.

   -ListSet <i>string</i>[]
       Get the performance counter sets that are represented in the exported files.
       Commands with this parameter do not import any data.

       Enter one or more counter set names. Wildcards are permitted.
       To get all counter sets in the file, type "import-counter -listset *"

   -MaxSamples <i>Int64</i>
       The maximum number of samples of each counter to import.
       By default, all counter data will be imported from the files specified by -Path.

   -Path <i>string</i>[]
       The file paths of the files to be imported. This parameter is required. 

       Enter the path and file name of a, .csv,, .tsv, or .blg file that was
       exported with <a href="export-counter.html">Export-Counter</a>.
       Specify one .csv or .tsv file, or multiple .blg files (up to 32) in each command.

       The file path strings (in quotation marks) can also be piped to Import-Counter.

   -StartTime <i>DateTime</i>
       Import only counter data with a timestamp &gt;= <i>DateTime</i>
       Enter a DateTime object, such as one created by <a href="get-date.html">Get-Date</a>. 
       By default, all counter data will be imported from the files specified by -Path.

   -Summary
       Get a summary of the imported data, instead of getting individual counter data samples.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  When using .blg files, you can import up to 32 different files in 
each command. The data being imported can be filtered.</p>
<p><b>Examples</b></p>
<p>Import all  the counter data from services.csv file into the $svc variable.:</p>
<p class="code">PS C:&gt; $svc = import-counter -path C:\services.csv</p>
<p>Import  only the <span class="code">Processor(_total)\Interrupts\sec</span> counter data  into the $i variable:</p>
<p><span class="code">PS C:&gt; $i = import-counter -path C:\ProcessorData.blg -counter "\\SERVER64\Processor(_Total)\Interrupts/sec"</span><br>
  <br>
Select data from a performance counter log file (.blg) and then export to a .csv file.:</p>
<p class="code">PS C:&gt; $mycpu = import-counter C:\CPUdata.blg<br>
PS C:&gt; $mycpu[0].countersamples | format-table path<br>
PS C:&gt; $CounterPaths = $data[0].countersamples | where {$_.path -like "*interrupts/sec"} | foreach {$_.path}<br>
PS C:&gt; $CounterPaths<br>
PS C:&gt; $i = import-counter -path .\CPUdata.blg -counter $CounterPaths<br>
PS C:&gt; $i | export-counter -path .\interrupts.csv -format CSV</p>
<p>Display all the counter paths in a group of imported counter sets.:</p>
<p class="code">PS C:&gt; import-counter -path cpudata.csv -listset *<br>
PS C:&gt; import-counter -path cpudata.csv -listset * | foreach {$_.paths}</p>
<p>List the time stamps of all of the data in the <span class="code">disc.blg</span> file:</p>
<p class="code">PS C:&gt; import-counter -path .\disk.blg | format-table timestamp</p>
<p>Import only counter data from <span class="code">disc.blg</span> that has a time stamp between a given start / end:</p>
<p class="code">PS C:&gt; $start = [datetime]"7/12/2010 3:47:00 PM"<br>
PS C:&gt; $end = [datetime]"7/12/2010 3:47:59 PM"<br>
PS C:&gt; $timedata = import-counter -path disk.blg -starttime $start -endtime $end</p>
<p>Summarise the counter data in Memory.blg:</p>
<p class="code">PS C:&gt; import-counter D:\memory.blg -summary</p>
<p>Update a performance counter log file with fresh data:</p>
<p class="code">PS C:&gt; $counters = import-counter c:\olddata.blg -ListSet * | foreach {$_.PathsWithInstances}<br>
PS C:&gt; get-counter -counter $counters -maxSamples 20 | export-counter c:\newdata.blg</p>
<p>Import two performance logs and save the data in a variable. Then pipe this to Import-Counter:</p>
<p class="code">PS C:&gt; $counters = "d:\pdata.blg", "d:\netlog.blg" | import-counter</p>
<p class="quote"><i>“Actors should be overheard, not listened to, and the audience is 50 percent of the performance” ~ Shirley Booth</i></p>
<p><b>Related:</b></p>
<p>  <a href="get-counter.html">Get-Counter</a>             - Get performance counter data<br>
<a href="export-counter.html">Export-Counter</a> - Export Performance Counter data to log files</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

