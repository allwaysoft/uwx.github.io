---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>SYSTEMINFO</h1> 
<p>List system configuration</p>
<pre>Syntax
      SYSTEMINFO [/S <i>system</i> [/U <i>username</i> [/P [<i>password</i>]]] ]
                    [/FO <i>format</i>] [/NH]

Key:
    /S  system         Remote system to connect to.
    /U  [domain\]user  User context under which to execute.
    /P  [password]     Password for the given user (will prompt if omitted)
    /FO format         Output format: TABLE, LIST or CSV
    /NH                No "Column Header" in the Table/CSV output</pre>
<p> The output includes OS configuration, security info, product ID, RAM, disk space, and network cards.</p>
<p>Examples</p>
<p> <span class="code">SYSTEMINFO <br>
</span><span class="code">SYSTEMINFO |find "Total Physical Memory:"<br>
  SYSTEMINFO /S wkstn6324 <br>
  SYSTEMINFO /S wkstn6325 /FO CSV /NH &gt;&gt;pcaudit.csv</span><br>
  <br>
  <i class="quote">“A good question is like a miniskirt. Long enough to cover the essentials, but short enough to keep everyone interested” ~ Charles Halsey </i><br>
  <br>
  <b>Related:</b><br>
  <br>
  <a href="winmsd.html">WINMSD</a> - Windows system diagnostics<br>
  <a href="wmic.html">WMIC</a> - WMI Commands<br>
<a href="psgetsid.html">PsGetSid</a> - Display the SID of a computer or a user<br>
Powershell: <a href="../ps/get-wmiobject.html">Get-WMIobject</a> - Get WMI information</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="systeminfo.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

