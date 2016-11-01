---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>WHOAMI.exe (Windows 7/2008 or <a href="../links/windows.html#kits">XP Resource kit</a>)</h1>
<p>Display user, group and privileges  for the current user.</p>
<pre>Syntax
      whoami [/upn | /fqdn | /logonid]

      whoami {[/user] [/groups] [/priv]} [/fo <i>Format</i>] [/nh]

      whoami /all [/fo <i>Format</i>] [/nh]

Key

   /upn      Display the user name in user principal name (UPN) format.

   /fqdn     Display the user name in fully qualified domain name (FQDN) format.

   /logonid  Display the logon ID of the current user.

   /user     Display the current domain and user name and the security identifier (SID).

   /groups   Display the user groups to which the current user belongs.

   /priv     Display the security privileges of the current user.

   /fo <format>      The output format. Valid values:
                <u>table</u>  Table format (default)
                list   List format.
                csv    Comma-separated value (CSV) format.

   /all      Display all information in the current access token, including
             the current user name, security identifiers (SID), privileges,
             and groups that the current user belongs to.

   /nh       Don't display the column header in the output.
             This is valid only for table and CSV formats.

   /?        Help</format></pre>
<p><b>Examples</b></p>
<p>Display the domain and user name of the current user:<br> 
<span class="code">whoami</span></p>
<p>Display all of the information in the current access token:<br>
<span class="code">whoami /all</span><br>
<br>
<i class="quote">“We can now manipulate images to such an extrodinary extent that there's no lie you cannot tell” ~ Sir David Attenborough </i> <br>
<br>
<b>Related:</b><br>
<a href="set.html"><br>
SET</a> - Display, set, or remove Windows  environment variables<br>
VER - Display version information <br>
<a href="vol.html">VOL</a> - Display a disk label<br>
<a href="whereami.txt">Whereami.cmd</a> - Display user information<br>
Environment variables: <span class="code">%USERDOMAIN%</span> and <span class="code">%USERNAME%</span><br>
Powershell: PS&gt; <span class="code"> whoami /groups /fo csv | <a href="../ps/convertfrom-csv.html">convertfrom-csv</a></span><br>
Equivalent bash command (Linux): whoami - Print the current user id and name (`<a href="../bash/id.html">id</a> -un')</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="whoami.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

