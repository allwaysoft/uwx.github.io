---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>CLEANMGR.exe</h1>  
<p>Automated cleanup of Temp files, Internet files, downloaded files, recycle bin. </p>
<pre>Syntax
     CLEANMGR <i>option</i>

Options
       /d <i>driveletter</i>: Select the drive that you want Disk Cleanup to clean.

       /sageset:<i>n</i>      Display the Disk Cleanup Settings dialog box and create
                       a registry key to store the settings you select.
                       The <i>n</i> value is stored in the registry and allows you to
                       specify different tasks for Disk Cleanup to run.
                       <i>n</i> can be any integer from 0 to 65535.
                       Specify the %systemroot% drive to see all the available options.

      /sagerun:<i>n</i>       Run task '<i>n</i>'
                       All drives in the computer will be enumerated, and the
                       selected profile will be run against each drive. 

    Only one of the 3 options above can be run at a time

      /TUNEUP:<i>n</i>        Run sageset + sagerun for the same <i>n</i>

      /LOWDISK         Run with the default settings.

      /VERYLOWDISK     Run with the default settings, no user prompts.

      /SETUP           Undocumented
      /Help            Undocumented
      /Usage           Undocumented
      /?               Display help</pre>
<p>To enable Cleanmgr on Windows 2008, open Server Manager and choose Add feature, then select "Desktop Experience"<br>
After running cleanmgr on a server you will probably want to disable 
"Desktop Experience" again (or <a href="http://www.null-byte.org/development/missing-disk-cleanup-utility-in-windows-server-fix/">use this script</a>.)<br>
When necessary cleanmgr can take ownership of the files before deleting them.</p>
<p>Registry settings for CLEANMGR are held in:<br>
<span class="code">[HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches]</span></p>
<p><b>Examples<br>
</b><br>
<span class="code">CLEANMGR /sageset:64<br>
<br>
CLEANMGR /sagerun:64</span><br>
</p>
<p> Options that can be chosen for cleanup:</p>
<blockquote>
<p> Temporary Internet Files<br>
Temporary Setup Files<br>
Downloaded Program Files<br>
Old Chkdsk Files<br>
<b>Recycle Bin</b><br>
Temporary Files<br>
Temporary Offline Files<br>
Offline Files<br>
Compress Old Files<br>
<b>Catalog Files for the Content Indexer </b><br>
System files: Debug/chkdsk/Installer/Memory dump/Windows update/error reporting logs.
</p>
</blockquote>
<p>Items in <b>bold</b> can appear in more than one drive i.e not just in %SystemRoot%</p>
<h2>Application Data</h2>
<p>Many files in Application Data hold system data that should not be deleted, however some applications  do leave  files  which you can delete from a roaming profile, these can be selectively removed with a VBScript <a href="../vb/syntax-profile.html">like this</a>.</p>
<h2>Recent files</h2>
<p>The 'User Profile/Recent' folder (for Start, Documents) can contain many more shortcuts than are set to display in the GUI. A very large number of these can affect logon/logoff times.<br>
To clear out the shortcuts:</p>
<blockquote>
<p class="code">cd %userprofile%\Recent <br>
echo y| del *.* </p>
</blockquote>
<h2>Close Locked files by restarting Windows Explorer</h2>
<blockquote>
<p>Close all applications<br>
Open a command prompt<br> 
Type:<br>
<span class="code">taskkill /im explorer</span><br>
This should kill explorer and bring up a logout/shutdown dialogue box.<br>
Simultaneously press CTRL+SHIFT+ALT. <br>
While you keep these keys pressed, click [Cancel] in the Shut Down Windows dialog 
box. <br>
In the command prompt window, you should now be able to delete the locked
files. <br>
At the command prompt, type <span class="code">explorer</span>, and  press ENTER to restart Windows Explorer. </p>
</blockquote>
<p><i class="quote">”Mrs. Joe was a very clean housekeeper, but had an exquisite art of making her cleanliness more uncomfortable and unacceptable than dirt itself“  ~ Charles Dickens</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="delprof.html">DELPROF</a> - Delete  user profiles and/or User Profile 
cache<br>
<a href="defrag.html">DEFRAG</a> - Defragment hard drive (XP)<br>
<a href="https://support.microsoft.com/kb/253597">Q253597</a> - 
Automating Disk Cleanup in Windows<br>
<a href="https://support.microsoft.com/kb/315246">Q315246</a> - Automating  Disk Cleanup  in Windows XP  <br>
<a href="https://support.microsoft.com/kb/812248">Q812248</a> - Disk Cleanup 
stops responding while compressing old files <br>
Equivalent bash command (Linux):<a href="../bash/export.html"> 
</a> <a href="../bash/watch.html">watch</a> - Execute/display a program periodically 
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="cleanmgr.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

