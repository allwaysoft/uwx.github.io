---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Get-DriveSpace.ps1</h1> 
<p>List the percentage of free disk space for multiple computers. </p>
<p># Display the drive space on all drives<br>
# if any have &lt; 20% free space, log to a file for review</p>
<pre>function DriveSpace {
param( [string] $strComputer) 
"$strComputer ---- Free Space (percentage) ----"

# Does the server responds to a ping (otherwise the WMI queries will fail)

$query = "select * from win32_pingstatus where address = '$strComputer'"
$result = Get-WmiObject -query $query
if ($result.protocoladdress) {

    # Get the Disks for this computer
    $colDisks = get-wmiobject Win32_LogicalDisk -computername $strComputer -Filter "DriveType = 3"

    # For each disk calculate the free space
    foreach ($disk in $colDisks) <b>{</b>
       if ($disk.size -gt 0) {$PercentFree = [Math]::round((($disk.freespace/$disk.size) * 100))}
       else {$PercentFree = 0}

  $Drive = $disk.DeviceID
       "$strComputer - $Drive - $PercentFree"

       # if  &lt; 20% free space, log to a file
       if ($PercentFree -le 20) {"$strComputer - $Drive - $PercentFree" | out-file -append -filepath "<span class="style1">C:\logs\Drive Space.txt</span>"}
    <b>}</b>
}
}

foreach ($computer in cat <span class="style1">C:\batch\servers.txt</span>) {DriveSpace "$computer"}</pre>
<p>
  This assumes you have saved a list of computernames to check in the file 'servers.txt' </p>
<p><b>Example</b></p>
<p>Assuming the script above is saved in the current directory as Get-DriveSpace.ps1:</p>
<p><span class="code">PS C:\&gt; ./Get-DriveSpace</span></p>
<p class="quote"><i>“In any collection of data, the figure most obviously correct, beyond all need of checking, is the mistake” ~ Finagle's third law. </i></p>
<p><b>Related:</b></p>
<p><a href="syntax-pshinfo.html">pshInfo</a> - List Ram, Disk Space, Service pack, Uptime.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

