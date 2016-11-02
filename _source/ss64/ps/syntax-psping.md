---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1> psp (PowerShell Ping) </h1> 
<p>How to ping   computers to test for network connectivity. </p>
<p>If you only need to ping a single machine with <a href="test-connection.html"><span class="code">Test-Connection</span></a> then using the -quiet parameter will return a True/False value that can be used as part of a simple If statement: </p>
<p class="code">If (Test-Connection <i>remotehost</i> -count 1 -quiet) {<br>
&nbsp;Write 'The host responded'<br>
&nbsp;# Add other statements here.. <br>
}</p>
<p>The function below may be used two ways: <a href="syntax-pipeline.html">pipe</a> one, or a whole list of machines to <span class="code">psp</span>, or   alternatively  type<span class="code"> psp <i>remotehost</i></span> on the command line. Examples below. The function is named psp rather than ping because you may still wish to run <a href="../nt/ping.html">ping.exe</a> from the PowerShell command prompt. </p>
<pre>Function psp {
   param($InputObject = $null)

   BEGIN {$status = $True}

   PROCESS {
      if ($InputObject -and $_) {
         throw 'ParameterBinderStrings\AmbiguousParameterSet'
      } elseif ($InputObject -or $_) {
         $processObject = $(if ($InputObject) {$InputObject} else {$_})

         write-host "Ping [$processObject]"

         if( (<b>Test-Connection</b> $processObject <b>-Quiet</b> -count 1)) {
            write-host "Ping response OK" -ForegroundColor DarkGreen
         }
         else {
            write-host "Ping failed - host not found" -ForegroundColor red
            $status = $False
         }
      }
      else {throw 'ParameterBinderStrings\InputObjectNotBound'}

    # next processObject
    }

    # Return True if pings to all machines succeed:
    END {return $status}
}</pre>
<p>This function will return a True or False value, $True will only be returned if the pings to ALL the machines succeed.</p>
<p>Note: PowerShell does not save functions or aliases permanently by default. So if you close and reopen PowerShell, this function will no longer be available. To make it permanent, add the function to your <a href="syntax-profile.html">PowerShell $Profile</a> file.</p>
<p>An alternative, to ping a  number of hosts in parallel rather than sequentially, use the WMI class <span class="code">Win32_PingStatus</span></p>
<p class="code">Get-WmiObject -Class Win32_PingStatus -Filter 'Address="example.com" and Timeout=2000 or Address="SS64.com" and Timeout=2000' |   Select-Object -Property Address, ProtocolAddress, ResponseTime, Timeout</p>
<p><b>Examples</b></p>
<p>Ping server64:<br>
<span class="code"> PS C:\&gt; psp server64</span></p>
<p>Ping three servers:<span class="code"><br>
PS C:\&gt; "server64" ,"server65" , "10.164.199.200" | psp</span></p>
<p>Ping a list of workstations:<br>
<span class="code">PS C:\&gt; $workstations = <a href="get-content.html">cat</a> E:\MachineNames.txt<br>
PS C:\&gt; $workstations | psp</span><br>
or using foreach:<span class="code"><br>
PS C:\&gt; foreach($workstation in $workstations){psp $workstation}</span></p>
<p>Perform a command only if the machine <span class="code">server64</span> responds to a ping:</p>
<p class="code">if (psp "server64"){ <br>
  &nbsp;&nbsp; echo "responding" <br>
  &nbsp;&nbsp; } else { <br>
  &nbsp;&nbsp; echo "machine not found" <br>
&nbsp;&nbsp; }</p>
<p class="quote"><i>“And now I see with eye serene<br>
The very pulse of the machine” ~ William Wordsworth, (She Was a Phantom of Delight)</i></p>
<p><b>Related:</b></p>
<p><a href="test-connection.html">Test-Connection</a> - Ping one or more computers<br>

<a href="syntax-functions.html">Functions and Filters</a> - Write a named block of code<br>
<a href="write-warning.html">Write-Warning</a> - Write a warning message</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-psping.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

