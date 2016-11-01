---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1> Get-Bandwidth</h1> 
<p>The script below can be used to measure the average IO as a percentage of available bandwidth from the network card(s) of a machine. Similar to the Network information in Task Manager. Where more than one Network interface is fitted, the result will be an average. The script includes a small delay (<a href="start-sleep.html">Start-Sleep</a>) because you probably don't want to hammer a production machine with too many WMI queries.</p>
<pre>#Get-Bandwidth.ps1
# Measure the Network interface IO over a period of half a minute (0.5)

$startTime = get-date
$endTime = $startTime.addMinutes(<b>0.5</b>)
$timeSpan = new-timespan $startTime $endTime

$count = 0
$totalBandwidth = 0

while ($timeSpan -gt 0)
{
   # Get an object for the network interfaces, excluding any that are currently disabled.
   $colInterfaces = Get-WmiObject -class Win32_PerfFormattedData_Tcpip_NetworkInterface |select BytesTotalPersec, CurrentBandwidth,PacketsPersec|where {$_.PacketsPersec -gt 0}

   foreach ($interface in $colInterfaces) {
      $bitsPerSec = $interface.BytesTotalPersec * 8
      $totalBits = $interface.CurrentBandwidth

      # Exclude Nulls (any WMI failures)
      if ($totalBits -gt 0) {
         $result = (( $bitsPerSec / $totalBits) * 100)
         Write-Host "Bandwidth utilized:`t $result %"
         $totalBandwidth = $totalBandwidth + $result
         $count++
      }
   }
   Start-Sleep <b>-milliseconds 100</b>

   # recalculate the remaining time
   $timeSpan = new-timespan $(Get-Date) $endTime
}

"Measurements:`t`t $count"

$averageBandwidth = $totalBandwidth / $count
$value = "{0:N2}" -f $averageBandwidth
Write-Host "Average Bandwidth utilized:`t $value %"</pre>
<p class="quote"><i><br>
“If you stuff yourself full of poems, essays, plays, stories, novels, films, comic strips, magazines, music, you automatically explode every morning like old faithful. I have never had a dry spell in my life, mainly because I feed myself well, to the point of bursting. I wake early and hear my morning voices leaping around in my head like jumping beans. I get out of bed to trap them before they escape” ~ Ray Bradbury</i></p>
<p><b>Related:</b></p>
<p><a href="get-wmiobject.html">Get-WmiObject</a> -   Get WMI class information (gwmi)</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-get-bandwidth.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

