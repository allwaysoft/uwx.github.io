---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>quotacheck</h1> 
<p>Scan a file system for disk usage</p>
<pre>Syntax
      quotacheck [-g] [-u] [-v] -a
      quotacheck [-g] [-u] [-v] filesys ...</pre>
<p><span class="body"> 
  Quotacheck performs a filesystems scan for usage of files and directories, used 
  by either user or group. The output is the quota file for the corresponding 
  filesystem. By default the names for these files are:<br>
  - A user scan: quota.user<br>
  - A group scan: quota.group<br>
  <br>
  The resulting file consist of a struct dqblk for each possible id up to the 
  highest existing uid or gid and contains the values for the disk file and block 
  usage and possibly excess time for these values. ( for definitions of struct 
  dqblk see )<br>
  <br>
  Quotacheck should be run each time the system boots and mounts non-valid file 
  systems. This is most likely to happen after a system crash.<br>
  <br>
  The speed of the scan is proportional to the number of directories/files. </span> 
</p>
<pre>OPTIONS
       -v     This way the program will give some useful  information 
               about  what  it  is  doing, plus some fancy
              stuff.

       -d     This means debug. It will result in a lot of information 
              which can be used in debugging the program.
              The output is very verbose and the scan will not be
              fast.

       -u     This flag tells the program to scan the disk and to
              count the files and directories used by  a  certain
              uid. This is the default action.

       -g     This flag forces the program to count the the files
              and directories used by a certain gid.

       -a     Check all of the quotas for  the  filesystems  mentioned 
               in  /etc/fstab.  Both user and group quotas
              are  checked  as  indictated  by   the   /etc/fstab
              options.

       -R     When  used  in conjunction with -a, all filesystems
              except the root filesystem are checked for  quotas.</pre>
<p> NOTE Quotacheck should only be run as Super User. Non-priviliged 
  users are presumably not allowed to read all the directories on the given file 
  system.<br>
  <br>
  <b>Files </b><br>
quota.user, quota.group, /etc/fstab</p>
<p class="quote"><i>"In the factory we make cosmetics. In the store we sell hope" ~ Charles Revson</i></p>
<p><b>Related:</b><br>
<br>
<a href="quota.html">quota</a> - Display disk usage and limits <br>
 fstab, quotaon, quotaoff, edquota, repquota, fsck, efsck, e2fsck, xfsck<br>
<a href="ulimit.html">ulimit</a> - Limit user resources <br>
Equivalent Windows command: <a href="../nt/fsutil.html">FSUTIL</a> quota - File and Volume utilities </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="quotacheck.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

