---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>quota</h1> 
<p>Display disk usage and limits, by default only the user quotas 
are printed.</p>
<pre>Syntax
      quota [ -guv | q ]
      quota [ -uv | q ] <i>user</i>
      quota [ -gv | q ] <i>group</i>

Options
      -g     Print <b>group</b> quotas for the group of which the user
             is a member.

      -u     Print <b>user</b> quotas (this is the default)

      -v     Verbose, will display quotas on filesystems where no
             storage is allocated.

      -q     Print a more terse message, containing only information 
             on filesystems where usage is over quota.</pre>
<p> Specifying both -g and -u displays both the user quotas and the 
  group quotas (for the user). <br>
  <br>
  Only the super-user can use the -u flag and the optional user argument to view 
  the limits of other users. Non- super-users can use the the -g flag and optional 
  group argument to view only the limits of groups of which they are members. 
  <br>
  <br>
  The -q flag takes precedence over the -v flag. <br>
  <br>
  Quota reports the quotas of all the filesystems listed in /etc/fstab. For filesystems 
  that are NFS-mounted a call to the rpc.rquotad on the server machine is performed 
  to get the information. If quota exits with a non-zero status, one or more filesystems 
  are over quota. <br>
  <br>
  <b>Files </b><br>
  quota.user located at the filesystem root with user quotas <br>
  quota.group located at the filesystem root with group quotas <br>
  /etc/fstab to find filesystem names and locations<br>
  <br>
  <i class="quote">"We don't wake up for less than $10,000 a day" ~ Linda 
Evangelista </i> </p>
<p><b>Related:</b><br>
<br>
 fstab<br>
edquota<br>
<a href="quotacheck.html">quotacheck</a> - Scan a file system for disk usage<br>
quotaon<br>
repquota<br>
<a href="ulimit.html">ulimit</a> - Limit user resources <br>
Equivalent Windows command: <a href="../nt/fsutil.html">FSUTIL</a> quota - File and Volume utilities </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="quota.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

