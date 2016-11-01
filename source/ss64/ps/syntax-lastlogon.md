---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Last Logon time</h1>
<p>In Active Directory there are two properties used to store the last logon time:</p>
<p> <span class="code">lastLogonTimeStamp</span> this is only updated sporadically so is accurate to ~ 14 days, replicated to all DNS servers. This is good for finding dormant accounts that havent been used in months.</p>
<p><span class="code">lastLogon</span> this is updated at every logon, but is Not replicated, so will only be accurate if you check the response from <i>every</i> DNS server. This is good for finding the very latest logon.</p>
<p>Using lastLogonTimeStamp to find a users last logon:</p>
<pre>$user = <a href="get-aduser.html">Get-ADUser</a> "<i><b>user64"</b></i> -Server <i><b>"dnsServer1"</b></i> -Properties lastLogonTimeStamp 
$user | select-object <a href="syntax-operators.html">@{</a>Name="Last Logon"; Expression=<b>{</b>[DateTime]::FromFileTime($_.lastLogonTimestamp)<b>}</b>}</pre>
<p> Using lastLogonTimeStamp to find a computer accounts last logon:<br>
</p>
<pre>$computer = <a href="get-adcomputer.html">Get-ADComputer</a> "<i><b>computer64</b></i>" -Properties LastLogonTimeStamp
$computer | select-object <a href="syntax-operators.html">@{</a>Name="Last Logon"; Expression=<b>{</b>[DateTime]::FromFileTime($_.lastLogonTimestamp)<b>}</b>}</pre>
<p>A function that uses <span class="code">lastLogon</span> to find when an account last logged in:</p>
<pre>function Get-ADUserLastLogon([string]$userName)
{
   $dcs = Get-ADDomainController -Filter {Name -like "*"}
   
   foreach($dc in $dcs)
   { 
     $hostname = $dc.HostName
     $user = Get-ADUser $userName -Server $hostname -Properties lastLogon
     $lngexpires = $user.lastLogon
     if (-not ($lngexpires)) {$lngexpires = 0 }
     If <b>(</b>($lngexpires -eq 0) -or ($lngexpires -gt [DateTime]::MaxValue.Ticks)<b>)</b>
     {
       $LastLogon = "&lt;Never&gt;"
     }
     Else
     {
       $Date = [DateTime]$lngexpires
       $LastLogon = $Date.AddYears(1600).ToLocalTime()
     }
  }
  Write-Host $username "last logged on at:" $LastLogon
}

Get-ADUserLastLogon "User64"</pre>
<p class="quote"><i>“Sometimes only one person is missing and the whole world seems depopulated“ ~ Alphonse de Lamartine</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-loggedon.html">LoggedOn</a> - Find who is logged into a machine.<br>
<a href="syntax-expiry.html">Password expiry</a> - Reminder email for account passwords about to expire.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

