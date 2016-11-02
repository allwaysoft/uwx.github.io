---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>ServiceStatus.ps1</h1> 
<p>List  the services installed on one or more machines along with the status (running, stopped, disabled etc)<br>
Call the script below passing the name of a text file containing the machines to query.<br>
The output is written to a set of csv files in the current directory, one per machine:  Services_&lt;machine_name&gt;.csv</p>
<pre>Param($file)

function ServiceInfo{
    Param($mc)
    # Ping the machine to see if it is online
    $online=PingMachine $mc
    if ($online -eq $true)

    {
    # List services and service status
    get-wmiobject win32_service -computer $mc  | select displayname,name,startmode,`
       status,state |  sort-object -property displayName | `
          export-csv -path "Services_$mc.csv" -noTypeInformation
    }
    else
    {
        Write-Verbose "     - Ping Failed!"
        Write-Host "Error: $mc not Pingable" -fore RED
    }
}

function PingMachine {
   Param([string]$machinename)
   $pingresult = Get-WmiObject win32_pingstatus -f "address='$machinename'"
   if($pingresult.statuscode -eq 0) {$true} else {$false}
}

## Main

if($file -and (test-Path $file))
{
    foreach($comp in (get-Content $file))
    {
        Write-Host " +++ Processing Computer [$Comp] +++"
        ServiceInfo $comp
    }
}</pre>
<p>
  <b>Example</b></p>
<p> Call the script above passing the name of a text file containing the machines to query, one per line.<br>
Assuming the script above is saved in the current directory as ServiceStatus.ps1</p>
<p><span class="code">PS C:\&gt; ./ServiceStatus workstations.txt </span></p>
<p class="quote"><i>“In any collection of data, the figure most obviously correct, beyond all need of checking, is the mistake” ~ Finagle's third law </i></p>
<p><b>Related:</b></p>
<p><a href="../nt/psinfo.html">psinfo</a> - List information about a system<br>
<a href="get-service.html">Get-Service</a> - Get a list of services</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

