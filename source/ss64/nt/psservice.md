---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PsService (<abbr title="Download the PsTools suite"><a href="http://technet.microsoft.com/en-us/sysinternals">PsTools</a></abbr>)</h1>
<p>View and control services</p>
<pre>Syntax
      psservice [\\computer [-u <i>user</i>] [-p <i>passwd</i>]] &lt;<i>command</i>&gt; &lt;<i>options</i>&gt;

Options:

   computer   The computer on which the service is running. Default=local system 

   -p <i>passwd</i>  Specify a password for <i>user</i> (optional). Passed as clear text.
              If omitted, you will be prompted to enter a hidden password.

   -u <i>user</i>    Specify a user name for login to remote computer(optional).

   commands:
      query      Display the status of a service
      config     Display the configuration of a service
      setconfig  Set the start type (disabled, auto, demand) of a service.
      start      Start a service
      stop       Stop a service
      restart    Stop and then restart a service
      pause      Pause a service
      cont       Resume a paused service
      depend     List the services dependent on the one specified
      security   Dump the service's security descriptor
      find       Search the network for the specified service

   -accepteula Suppress the display of the license dialog.</pre>
<p>  Typing a command followed by "- " displays the syntax for that command.</p>
<p>Service States: </p>
<p> 1 - Stopped<br>
2 - Start Pending<br>
3 - Stop Pending<br>
4 - Running</p>
<p>When launched for the first time, PsService will create the regkey <br>
<span class="code">HKCU\Software\Sysinternals\PsService\EulaAccepted=0x01</span></p>
<p><b>  Examples:</b><br>
<br>
Restart the spooler service on  \\server64</p>
<p class="code">C:\&gt; psservice \\server64 restart spooler</p>
<p class="quote"><i>“The highest reward for a person’s toil is not what they get for it but what they become by it” ~  John Ruskin</i></p>
<p><b>Related:</b></p>
<p><a href="http://forum.sysinternals.com/faq-common-pstools-issues_topic15920.html">FAQ: Common PSTools Issues</a><br>
<a href="net_service.html">NET START/STOP </a><br>
<a href="sc.html">SC</a> - Service control <br>
Powershell: <a href="../ps/get-service.html">Get-Service</a> - Get a list of services</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="psservice.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

