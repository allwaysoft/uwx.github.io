---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Get-Uptime.ps1</h1> 
<p>Get the system uptime for one or more computers.</p>
<pre># Accept input from the pipeline
Param([Parameter(mandatory=$true,ValueFromPipeline=$true)] [string[]]$ComputerName = @("."))

# Process the piped input (one computer at a time)
process { 

    # See if it responds to a ping, otherwise the WMI queries will fail
    $query = "select * from win32_pingstatus where address = '$ComputerName'"
    $ping = Get-WmiObject -query $query
if ($ping.protocoladdress) {
    # Ping responded, so connect to the computer via WMI
    $os = Get-WmiObject Win32_OperatingSystem -ComputerName $ComputerName -ev myError -ea SilentlyContinue 

if ($myError -ne $null)
 {
  # Error: WMI did not respond
  "$ComputerName did not respond"
 } 
else
 { 
   $LastBootUpTime = $os.ConvertToDateTime($os.LastBootUpTime)
   $LocalDateTime = $os.ConvertToDateTime($os.LocalDateTime)
   
   # Calculate uptime - this is automatically a timespan
   $up = $LocalDateTime - $LastBootUpTime

   # Split into Days/Hours/Mins
   $uptime = "$($up.Days) days, $($up.Hours)h, $($up.Minutes)mins" 

   # Save the results for this computer in an object
   $results = new-object psobject
   $results | add-member noteproperty LastBootUpTime $LastBootUpTime
   $results | add-member noteproperty ComputerName $os.csname
   $results | add-member noteproperty uptime $uptime

   # Display the results
   $results | Select-Object ComputerName,LastBootUpTime, uptime
 }

# Next Ping result
}

# End of the process block
}</pre>
<p>
<b>Examples</b></p>
<p>Assuming the script above is saved in the current directory as get-uptime.ps1 :</p>
<p><span class="code">PS C:\&gt; ./get-uptime "server64","server65","server66" -AsPSObject</span></p>
<p><span class="code"> PS C:\&gt; $servers = cat servers.txt |sort<br>
PS C:\&gt; $servers |./get-uptime -AsPSObject<br>
</span></p>
<p>This script is based on an original by <a href="https://groups.google.com/forum/?hl=en#!topic/microsoft.public.windows.powershell/aexJbfokBfw">Alex K. Angelopoulos</a></p>
<p class="quote"><i>“In any collection of data, the figure most obviously correct, beyond all need of checking, is the mistake” ~ Finagle's third law. </i></p>
<p><b>Related:</b></p>
<p><a href="../nt/psinfo.html">psinfo</a> - List information about a system<br>
<a href="syntax-pshinfo.html">pshinfo</a> - Get information about a machine - Ram, Disk Space, Service pack, Uptime</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-get-uptime.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
