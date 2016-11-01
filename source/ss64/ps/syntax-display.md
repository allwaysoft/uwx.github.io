---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>DisplayRes.ps1</h1> 
<p>Get the display resolution for all the computers listed in a text file:</p>
<pre># read in the workstation names
$workstation_list=get-content "C:\scripts\workstations.txt"

foreach($pc in $workstation_list)
{
   # Ping the machine to see if it's turned on
   $query = "select * from win32_pingstatus where address = '$pc'"
   $result = Get-WmiObject -query $query
   
   if ($result.protocoladdress) {

      # Get the display details via WMI
      $displays= Get-WmiObject -class "Win32_DisplayConfiguration" -computername $pc
      
      foreach ($display in $displays) {
         $w=$display.PelsWidth
         $h=$display.PelsHeight
         "$pc Width: $w Height: $h"
         "$pc Width: $w Height: $h" &gt;&gt;C:\scripts\DisplayRes.txt
      }

   } else {
            "$pc : Not Responding"
            "$pc : Not Responding" &gt;&gt;C:\scripts\DisplayRes.txt
          }
}
# End</pre>
<p> <b>Example</b></p>
<p>Assuming DisplayRes.ps1 is saved in the current directory:</p>
<pre>PS C:\scripts\&gt; ./DisplayRes.ps1</pre>
<p class="quote"><i>“The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery” ~ Anais Nin</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-pshinfo.html">pshInfo</a> - List Ram, Disk Space, Service pack, Uptime</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-display.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

