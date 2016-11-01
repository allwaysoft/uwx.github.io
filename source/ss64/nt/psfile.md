---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PsFile (<abbr title="Download the PsTools suite"><a href="http://technet.microsoft.com/en-us/sysinternals">PsTools</a></abbr>)</h1>
<p>Show files opened remotely, or close an open file (kill file locks)</p>
<pre>Syntax
      psfile [\\<i>Computer</i> [-u <i>User</i> [-p <i>Passwd</i>]]]  [[Id | path]  [-c]]

Options:

   computer   The remote computer on which to list files. Default = local system 

              
   -p <i>passwd</i>  Specify a password for <i>user</i> (optional). Passed as clear text.
              If omitted, you will be prompted to enter a hidden password.

   -u <i>user</i>    Specify a username for login to remote computer(optional).

   Id         Identifier (as assigned by PsFile) of the file for which to display info or to close.

   Path       Full or partial path of files to match for information display or close.

   -c         Close the files identifed by ID or path.

   -accepteula Suppress the display of the license dialog.</pre>
<p> Unlike the NET FILE command, PsFile does not truncate long filenames.</p>
<p>When launched for the first time, PsFile will create the regkey <br>
<span class="code">HKCU\Software\Sysinternals\PsFile\EulaAccepted=0x01</span><br>
<br>
<b>Examples:</b><br>
<br>
List all the  files on \\workstation64 that have been opened remotely:</p>
<p class="code"> psfile \\workstation64</p>
<p class="quote"><i>“Faith does not consist in the belief that we are saved; it consists in the belief that we are loved” ~  Alexandre Vinet</i></p>
<p>  <b>Related:</b></p>
<p><a href="http://forum.sysinternals.com/faq-common-pstools-issues_topic15920.html">FAQ: Common PSTools Issues</a><br>
<a href="net_share.html">NET FILE</a> - Display all the open shared files on a server and the lock-id<br>
<a href="openfiles.html">OPENFILES</a> - Query or display open files<br>  Equivalent bash command (Linux): <a href="http://www-128.ibm.com/developerworks/linux/library/l-inotify.html?ca=dgr-lnxw52Inotify">inotify</a> - file-monitoring mechanism</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="psfile.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

