---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Host</h1> 
<p>Get host information (PowerShell Version and Region), Gets a reference to the current console host object. </p>
<pre>Syntax
      Get-Host [<i>CommonParameters</i>]

Key
   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Examples</b></p>
<p>Display PowerShell version and regional information:</p>
<p><span class="code">PS C:\&gt; get-host</span></p>
<p>Display PowerShell version only:</p>
<p><span class="code">PS C:\&gt; get-host | select version<br>
Version<br>
-------<br>
4.0
</span><br>
</p>
<p>Or to get the major and minor PowerShell version numbers use the <span class="code">$host</span> <a href="syntax-automatic-variables.html">automatic variable</a>:</p>
<p><span class="code">PS C:\&gt; $Host.Version</span><br>
  <br>
To get the Operating System version use the <span class="code">OSVersion</span> .Net  <a href="syntax-env.html">environment variable</a>:</p>
<p><span class="code">PS C:\&gt;</span> <span class="code">[Environment]::OSVersion</span></p>
<p>Resize the  PowerShell window to 50 pixels high by 80 pixels wide:</p>
<p class="code">PS C:\&gt; $h = get-host
    <br>
$win = $h.ui.rawui.windowsize
    <br>
$win.height = 50
    <br>
$win.width  = 80
    <br>
$h.ui.rawui.set_windowsize($win)</p>
<p class="quote"><i>“I do a show. It comes on late at night on TV. And if that means I'm a late-night talk show host, then I guess I am, but in every other regard I resign my commission, I don't care for it” ~ Craig Ferguson</i></p><p><b>Related:</b><br>
  <br>
  <a href="read-host.html">Read-Host</a> - Read a line of input from the host console<br>
Clear-Host - Clear screen (cls) <br>    
<a href="out-host.html">Out-Host</a> - Send the pipelined output to the host<br>
<a href="write-host.html">Write-Host</a> - Display objects through the user feedback mechanism
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --></p><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-host.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

