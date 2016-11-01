---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Write-Progress</h1> 
<p> Display a progress bar</p>
<pre>Syntax
      Write-Progress [-activity] <i>string</i> [-status] <i>string</i> [[-id] <i>int</i>]
             [-percentComplete <i>int</i>] [-secondsRemaining <i>int</i>]
                [-currentOperation <i>string</i>] [-parentId <i>int</i>]
                   [-completed] [-sourceId <i>int</i>] [<i>CommonParameters</i>]

Key
   -activity <i>string</i>
       A string that describes the activity about which progress is being reported.
       Will appear as the first heading above the progress bar.
        
   -status <i>string
</i>       A string that describes current state of the activity about which progress
       is being reported. Will appear as the second heading above the progress bar.
        
   -id <i>int</i>
       The activity identifier for this progress record.
        
   -percentComplete <i>int</i>
       The percentage of the activity that is completed.
       Use the value -1 if the percentage is unknown or not applicable.
        
   -secondsRemaining <i>int</i>
       The projected number of seconds remaining until the activity is completed.
       Use the value -1 if the number of seconds remaining is unknown or not applicable.
        
   -currentOperation <i>string</i>
       Describes the operation that is currently taking place.
        
   -parentId <i>int</i>
       The parent activity of the current activity. 
       Use the value -1 if the current activity has no parent activity.
        
   -completed 
       Hide the progress bar, to indicate the activity is complete.
        
   -sourceId <i>int</i>
       Identify the source of the record

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Write-Progress  displays a progress bar in a PowerShell command window that depicts the status of
a running command or script.</p>
<p><b>Examples</b></p>
<p>Display progress of a for loop:</p>
<p><span class="code">PS C:\&gt; for($i = 1; $i -lt 101; $i++ ) 
    {for($j=0;$j -lt 10000;$j++) {} write-progress "Search in Progress" "% Complete:" -perc $i;}</span><br>
  <br>
  Display progress while searching through the system event log messages:</p>
<p class="code">PS C:\&gt; $events = get-eventlog -logname system<br>
PS C:\&gt; $events | foreach-object -begin {clear-host;$i=0;$out=""} 
    -process {if($_.message -like "<b>*bios*</b>") {$out=$out + $_.Message};
$i = $i+1; write-progress -activity "Searching Events" -status "Progress:" -percentcomplete ($i/$events.count*100)} 
-end {$out}</p>
<p class="quote"><i>“I don't like to write, but I love to have written” ~ Michael Kanin</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="write-debug.html">Write-Debug</a> - Write a debug message to the host display<br>
<a href="write-error.html">Write-Error</a> - Write an object to the error pipeline.<br>
<a href="write-host.html">Write-Host</a> - Display objects through the host user interface<br>
<a href="write-output.html">Write-Output</a> - Write an object to the pipeline <a href="write-progress.html"><br>
</a><a href="write-verbose.html">
Write-Verbose</a> - Write a string to the host’s verbose display<br>
<a href="write-warning.html">Write-Warning</a> - Write a warning message</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="write-progress.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

