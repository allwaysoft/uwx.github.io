---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TAKEOWN</h1> 
<p>Take ownership of a  file (Windows 2003/7/2008).</p>
<pre>Syntax
      TAKEOWN [/s <i>Computer</i> [/u [<i>Domain</i>\]<i>UserName</i> [/p [<i>Password</i>]]]]
         /f <i>FileName</i> [/a] [/r [/d {Y|N}]]<br>
Key
   /s <i>Computer</i>
           The name or IP address of a remote computer (do not use backslashes).
           default = local computer.
           This parameter applies to all of the files and folders specified in the command.

   /u [<i>Domain</i>\]<i>UserName</i>
           Run the script with the permissions of the specified user account.
           default = system permissions.

   /p [<i>Password</i>]
           The password of the user account that is specified in the /u parameter.

   /f <i>FileName</i>
           The file name, UNC path or directory name pattern.
           Accepts the wildcard character *

   /a      Give ownership to the Administrators group instead of the current user.

   /r      Perform a recursive operation on all files in the specified directory
           and subdirectories.

   /d {Y | N}
           Suppress the confirmation prompt that is displayed when the current user
           does not have the "List Folder" permission on a specified directory,
           and instead use a default value:
              Y: Take ownership of the directory.
              N: Skip the directory.
           Note that you must use this option in conjunction with the /r option.</pre>
<p> If the /a parameter is not specified, file ownership is given to the user who is currently logged on to the computer.</p>
<p>Mixed patterns using (? and *) are not supported by the takeown command.</p>
<p>After changing the owner for a file/folder, you can then assign  full permissions to the files  and subsequently read or delete them.</p>
<p class="quote">“As every cat owner knows, nobody owns a cat” ~ Ellen Perry Berkeley</p>
<p><b>Related:</b></p>
<p><a href="cacls.html">CACLS</a> - Change file permissions<br>
<a href="icacls.html">iCACLS</a> - Change file and folder permissions<br>
<a href="attrib.html">ATTRIB</a> - Display or change file attributes</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

