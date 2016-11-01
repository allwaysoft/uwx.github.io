---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>MBSACLI (<a href="http://www.microsoft.com/en-us/download/details.aspx?id=7558">download v2.3</a>)</h1>
<p>Baseline Security Analyzer.</p>
<pre>Syntax
      mbsacli [/c|/i|/r|/d <i>domainname</i>|<i>ipaddress</i>|<i>ipaddressrange</i>]
                 [/n <i>option</i>] [/sus <i>SUS server</i>|SUS <i>filename</i>]
                    [/s level] [/nosum] [/nvc] [/o <i>filename</i>] [/e] [/l] [/ls]
                       [/lr <i>report name</i>] [/ld <i>report name</i>] [/v] [/?]
                          [/qp] [/qe] [/qr] [/q] [/f] [/unicode]

Options
The Computer to Scan:
  no option           - Scan the local computer.
  /c <i>domainname</i>\<i>computername</i> - Scan the named computer.
  /i xxx.xxx.xxx.xxx         - Scan the specified IP address.
  /r xxx.xxx.xxx.xxx - xxx.xxx.xxx.xxx - Scan the specified range of IP addresses.
  /d <i>domainname</i>              - Scan the named domain.

Items NOT to update

  /n IIS       - Skip IIS checks.
  /n OS        - Skip Windows operating system, IE, Office and Outlook checks.
  /n Password  - Skip password checks.
  /n SQL       - Skip SQL checks.
  /n Updates   - Skip security update checks.
   The above can be combined, for example:
   /n OS + IIS + Updates   -  skip IIS, Windows, and security update checks.

Security Update Scan Options
  /sus <i>SUS server </i>| SUS <i>filename</i> - Check only for security updates that are approved
          at the specified SUS server, or at the file path of the Approveditems.txt file.
          e.g. http://server or http://server/Approveditems.txt.
          If neither is specified, the value will default from the registry (set via Group Policy)
  /s 1    - Suppress security update check note messages.
  /s 2    - Suppress security update check note and warning messages.
  /s 3    - Suppress warnings except for service packs.
  /nosum  - Security update checks will not test file checksums.

Output File Name 
  /o <i>filename</i>    By default, the output filename uses the format "domain - computername (date)"

Display the Results
  /e              - List the errors from the latest scan.
  /l              - List all the reports that are available.
  /ls             - List the reports from the latest scan.
  /lr <i>report name </i>- Display an overview report.
  /ld <i>report name</i> - Display a detailed report.
  /v              - Display security update reason codes.

Miscellaneous Options
  /?       - Usage help.
  /qp      - Do not display progress.
  /qe      - Do not display error list.
  /qr      - Do not display report list.
  /q       - Do not display progress, error list, or report list.
  /f       - Redirect the output to a file.
  /unicode - Generate unicode output, useful for Japanese versions of Windows.
</pre>
<p>Early versions of this command were known as HFNETCHK.<br>
<b><i><br>
</i></b><i class="quote">“It's completely intuitive; it just takes a few days to learn, but then it's completely intuitive” ~ Terry Pratchett.</i><b><br>
<br>Related:</b></p>
<p><a href="https://support.microsoft.com/kb/320454/">Q320454</a> - Microsoft Baseline Security Analyzer (MBSA) version 1.2.1<br>
<a href="https://support.microsoft.com/kb/296861">Q296861</a> - Use QCHAIN to install multiple hotfixes with only one reboot.<br>
<a href="https://support.microsoft.com/kb/310747">Q310747</a> - System File Checker (Sfc.exe) <br>
Equivalent bash command (Linux): <a href="http://www.rpm.org/">rpm</a> - Remote Package Manager</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mbsacli.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

