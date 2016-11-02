---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PsSuspend (<abbr title="Download the PsTools suite"><a href="http://technet.microsoft.com/en-us/sysinternals">PsTools</a></abbr>)</h1>
<p>Suspend processes on the local or a remote system.</p>
<pre>Syntax
      pssuspend [- ] [-r] [\\<i>computer</i> [-u <i>user</i>] [-p <i>passwd</i>]] &lt;<i>process name</i> | <i>process id</i>&gt;

Options:

   <i>computer</i>   The computer on which the service resides. Default=local system 

   -p <i>passwd</i>  Specify a password for <i>user</i> (optional). Passed as clear text.
              If omitted, you will be prompted to enter a hidden password.

   -u <i>user</i>    Specify a user name for login to remote computer(optional).

   -r         Resume the processes specified if they are suspended.

   <i>process id/name</i>
              The process or processes to suspend or resume.

   -accepteula Suppress the display of the license dialog.

   -          Help, display the supported options.
</pre>
<p>Suspend is desirable in cases where a process is consuming a resource (e.g. network, CPU or disk) that you want to allow different processes to use. Rather than kill the process that's consuming the resource, suspending permits you to let it continue operation at some later point in time.</p>
<p>When launched for the first time, PsSuspend will create the regkey <br>
<span class="code">HKCU\Software\Sysinternals\PsSuspend\EulaAccepted=0x01</span></p>
<p><b>Examples:</b><br><br>
Suspend the notepad process on \\workstation64 </p>
<p class="code">pssuspend \\workstation64 notepad </p>
<p>  <span class="quote"><i>“Gentlemen you can't fight in here - this is the war room” ~ President Muffley (Dr. Strangelove)</i></span></p>
<p><b>Related:</b></p>
<p><a href="http://forum.sysinternals.com/faq-common-pstools-issues_topic15920.html">FAQ: Common PSTools Issues</a><br>
<a href="pskill.html">PsKill</a> - Kill processes by name or process ID</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

