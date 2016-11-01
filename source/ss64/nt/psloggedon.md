---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PsLoggedOn (<abbr title="Download the PsTools suite"><a href="http://technet.microsoft.com/en-us/sysinternals">PsTools</a></abbr>)</h1>
<p>See who is logged onto a computer, either locally or remotely</p>
<pre>Syntax
      psloggedon [- ] [-l] [-x] [\\<i>computer</i> | <i>username</i>]

Options:

   computer   The computer on which the process is running. Default=local system 

   -l         Show only local logons instead of both local and network resource logons.

   -x         Don’t show logon times.

   username   Search the network for computers to which that user is loggedon.

   -accepteula Suppress the display of the license dialog.

   -          Help, display all options and units of measurement used.</pre>
<p>PsLoggedOn's definition of a locally logged on user is one that has their profile loaded into the Registry.   If no one is currently logged on, PsLoggedOn will return the last logged on user.</p>
<p>Note that PsLoggedOn will show you as logged on via resource share to remote computers that you query because a logon is required for PsLoggedOn to access the Registry of a remote system.</p>
<p>When launched for the first time, PsLoggedOn will create the regkey <br>
<span class="code">HKCU\Software\Sysinternals\PsLoggedOn\EulaAccepted=0x01</span></p>
<p><b>Examples:</b><br><br>
List all processes running on \\workstation64:</p>
<p class="code">pslist \\workstation64 </p>
<p class="code"><a href="psloggedon_example.html">WhoIsLoggedOnWhere.cmd</a> -  script to list all workstations</p>
<p class="quote"><i>“If you are coasting, it means you are going downhill” ~ C. P. Fulford Jr.</i></p>
<p><b>Related:</b></p>
<p><a href="http://forum.sysinternals.com/faq-common-pstools-issues_topic15920.html">FAQ: Common PSTools Issues</a><br>
<a href="net_share.html">net session</a> - List or disconnect user sessions (Local machine only)<br>
Powershell: <a href="../ps/get-wmiobject.html">Get-WMIobject</a> Win32_ComputerSystem (UserName ) <br>
Equivalent bash command (Linux): <a href="../bash/who.html">who</a> - Print who is currently logged in </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="psloggedon.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

