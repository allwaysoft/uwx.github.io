---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>FREEDISK (Windows Server 2003/2008/2012)</h1> 
<p>Checks to see if a specified amount of disk space is available.</p>
<pre>Syntax
      FREEDISK [/s <i>Computer</i> [/u [<i>Domain</i>\]<i>User</i> [/p [<i>Password</i>]]]] [/d <i>Drive</i>] [<i>Value</i>]<br>
Key
   /s <i>Computer</i>       The name or IP address of a remote computer (do not use backslashes).
                     The default is the local computer.
                     This parameter applies to all files and folders specified in the command.

   /u [<i>Domain</i>\]<i>User</i>  Run the script with the permissions of the specified user account.
                     The default is system permissions.

   /p [<i>Password</i>]     The password of the user account that is specified in /u.
   /d <i>Drive</i>          The drive for which you want to find out the availability of free space.
                     You must specify <i>Drive</i> for a remote computer.

   <i>Value</i>             Check for a specific amount of free disk space.
                     specify <i>Value</i> in bytes, KB, MB, GB, TB, PB, EB, ZB or YB.</pre>
<p> When  used in a batch file,  freedisk  returns <span class="code">errorlevel=0</span> if there is enough space and  <span class="code">errorlevel=</span><span class="code">1</span> if there is not enough space.</p>
<p>For unattended installations, you can use FREEDISK in installation batch files to check for a prerequisite amount of free space before continuing with the installation. </p>
<p><b>Example</b></p>
<p>Determine if there is at least 50 MB of free space on drive C:</p>
<p class="code">freedisk 50mb <br>
</p>
<p><i class="quote">"Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness that most frightens us. We ask ourselves, ‘Who am I to be brilliant, gorgeous, talented, fabulous?’ Actually, who are you not to be? Your playing small doesn't serve the world" ~ Marianne Williamson</i> <br>
<br>
Related:</p>
<p><a href="diruse.html">DIRUSE</a> - Display disk usage (2000 Resource Kit)<br>
DirQuota - Create and manage quotas
(File Server Resource Manager)<br>
<a href="diskuse.html">DISKUSE</a> - Show the space used in a folder/subfolders (2003 Resource Kit).<br>
<br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="freedisk.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
