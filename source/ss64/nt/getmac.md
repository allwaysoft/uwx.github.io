---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>GetMac.exe</h1>
<p>Display the Media Access Control (MAC) address and list of network protocols associated with each address for all network cards in each computer, either locally or across a network.</p>
<pre>Syntax
      getmac [/s <i>Computer</i> [/u <i>Domain</i>\<i>User</i> [/p <i>Password</i>]]]
         [/fo {TABLE|LIST|CSV}] [/nh] [/v]

Key
   /s <i>Computer</i>     The name or IP address of a remote computer
                  (do not use backslashes). Default = local computer.

   /u <i>Domain</i>\<i>User</i>  Run the command with the account permissions of the
                   user specified. Default = the currently logged on user.

   /p <i>Password</i>     The password of the user account that is specified in the /u parameter.

   /fo { TABLE | LIST | CSV } 
                   Format the output. Default = TABLE.

   /nh   Omit the header row from the displayed driver information.
         Valid when the /fo parameter is set to TABLE or CSV.

   /v    Display verbose information.

   /?    Display Help. </pre>
<p>
<b>Examples</b></p>
<p>Show all MAC addresses in Table output:<br>
<span class="code">getmac /fo table /nh /v</span><br>
<br>
Show  MAC addresses on server64 <br>
<span class="code">getmac /s server64</span><br>
<br>
Show  MAC addresses on server64 and authenticate as a different user:<br>
<span class="code">getmac /s server64 /u ss64Dom\user583</span><br>
<br>
Export a verbose listing of MAC addresses to a CSV file<span class="code"> <br>
getmac /v /fo csv &gt; T:\macaddresses.csv</span></p>
<p>PowerShell script to get the Mac address of the current machine:<br>
<span class="code">$Mac = getmac /fo csv | ConvertFrom-Csv </span></p>
<p>PowerShell script to collect Mac addresses for multiple machines by calling GetMac:</p>
<pre># Create empty hash table
$macHash=@{}
# Load a list of machine names
$servers=get-content c:\batch\servers.txt
foreach ($server in $servers) {
   if (<span class="code">Test-Connection </span>$server<span class="code"> -quiet</span>) {   # if it responds to a Ping
      # Call the GetMac utility
      $getmac=<b>getmac /nh /fo csv /s $server</b>
      $macAddresses=$getmac -split ","
      $interface = 1
      $macAddresses | foreach {
         if ($_ -ne ""){
            # check for a '-' to see if we have a mac address
            if ($_.substring(3,1) -eq "-") {
               # Remove quotes
               $addr = $_.replace("""","")
               $adapter = $interface/2
               Echo "$server  Adapter:$adapter  $addr"
               # Save in the hash variable
               $macHash.add("$server Adapter:$adapter",$addr)
            }
         }
      $interface += 1
      }
   }
}
# Export the hash table to a spreadsheet
$macHash.GetEnumerator() | select name, value | Sort-Object Name | Export-CSV -Path "c:\batch\macaddresses.csv" -NoTypeInformation
</pre>
<p class="quote">“I am the literary equivalent of a Big Mac and Fries” ~ Stephen King (Writer, best known for horror novels.) </p>
<p><b>Related:</b><br>
<br>
<a href="devcon.html">DevCon</a> - Device Manager Command Line Utility<br>
WMI :  Win32_NetworkAdapter</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="getmac.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

