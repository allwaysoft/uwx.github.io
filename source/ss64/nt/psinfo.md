---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PsInfo (<abbr title="Download the PsTools suite"><a href="http://technet.microsoft.com/en-us/sysinternals">PsTools</a></abbr>)</h1>
<p>List information about a system including the type of installation, kernel build, registered organization,  owner, processor details, physical memory and the system install date.</p>
<pre>Syntax
      psinfo [\\<i>computer</i>[,<i>computer</i>[,..]] [<i>options</i>] [<i>filter</i>]

      psinfo @<i>file</i> [<i>options</i>] [<i>filter</i>]

Options:

   <i>computer</i>   The computer(s) on which psinfo will list information. Default=local system 
               
   @<i>file</i>      List info for every computer listed in the text file specified.

   -c         Print in CSV format.
   -c -t <i>d</i>    Print in CSV format, separate items with delimiter <i>d</i>.

   -h         Show list of installed hotfixes.

   -s         Show list of installed applications.

   -d         Show disk volume information: drive letter, format, capacity.

   -p <i>psswd</i>   Specify a password for <i>user</i> (optional). Passed as clear text.
              If omitted, you will be prompted to enter a hidden password.

   -u <i>user</i>    Specify a user name for login to remote computer(optional).

   <i>filter</i>     Psinfo will only show data for the field matching the filter. 
               e.g. "psinfo service" lists only the service pack field.

   -accepteula Suppress the display of the license dialog.</pre>
<p>PsInfo relies on remote Registry access to obtain its data, the remote system must be running the Remote Registry service and the account from which you run PsInfo must have access to the HKLM\System portion of the remote Registry.</p>
<p>In order to aid in automated Service Pack updates, PsInfo returns as a value the Service Pack number of system (e.g. 0 for no service pack, 1 for SP 1, etc).</p>
<p>When launched for the first time, PsInfo will create the regkey <br>
<span class="code">HKCU\Software\Sysinternals\PsInfo\EulaAccepted=0x01</span></p>
<p><b>Examples:</b><br>
<br>
List disc information about  \\workstation64:</p>
<p class="code">psinfo \\workstation64 -d</p>
<p class="code">psinfo  -d | find "%"</p>
<p class="quote"><i>“If you hear that someone is speaking ill of you, instead of trying to defend yourself you should say: “He obviously does not know me very well, since there are so many other faults he could have mentioned” ~ Epictetus</i></p>
<p><b>Related:</b></p>
<p><a href="http://forum.sysinternals.com/faq-common-pstools-issues_topic15920.html">FAQ: Common PSTools Issues</a><br>
<a href="psgetsid.html">PsGetSid</a> - Display the SID of a computer or a user<br>
<a href="systeminfo.html">SYSTEMINFO</a> - List system configuration<br>
<a href="fsutil.html">FSUTIL fsinfo</a> - <span class="body">File and Volume specific commands</span><br>
Equivalent bash command (Linux): <span class="code">cat /proc/*</span></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="psinfo.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

