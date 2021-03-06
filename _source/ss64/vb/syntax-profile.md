---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>CleanRoamingProfile.vbs</h1> 
<p>Roaming profiles can cause slow logon and logoff times. Over time each users  roaming profile will increase in size until it becomes so large and/or contains so many files that logon times will become noticably affected [<i>Loading your Personal Settings...</i>]</p>
<p>This script will delete selected files from the user profile of the account currently logged on. Typically it would be run as part of a logon script. The   script normally runs in a fraction of a second, it displays the elasped time so you can see exactly how long it takes. </p>
<p>Rather than clearing out everything, this script deletes files based on their <i>last modified</i> date.</p>
<p> By default it is set to delete <i>cookies</i> over 90 days old, <i>'Recent document' shortcuts </i>over 14 days old and cached <i>Internet Explorer, Flash &amp; Java </i>files over 5 days old.  You can of course edit the  settings to suit your environment. </p>
<p>For compatibility with both XP and Vista/Windows 7 the script detects the OS and clears out the appropriate <a href="../nt/syntax-folders.html">User Profile folders</a>.</p>
<p>This script will delete files - make a backup before running it on any live system.</p>
<pre>Option Explicit

'Variables
Dim objShell,FSO,dtmStart,dtmEnd
Dim strUserProfile,strAppData
Dim objFolder,objFile,strOSversion

Wscript.echo "Profile cleanup starting"
dtmStart = Timer()

'Get the current users Profile and ApplicationData folders
Set objShell = CreateObject("WScript.Shell")
strUserProfile=objShell.ExpandEnvironmentStrings("%USERPROFILE%")
strAppData=objShell.ExpandEnvironmentStrings("%APPDATA%")
'Wscript.echo strAppData

'Set reference to the file system
Set FSO = createobject("Scripting.FileSystemObject")

'Get the windows version
strOSversion = objShell.RegRead("HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\CurrentVersion")
'Wscript.echo strOSversion
'Call the DeleteOlder subroutine for each folder

'Application temp files

DeleteOlder <b>14</b>, strAppData &amp; "\Microsoft\Office\Recent" 'Days to keep recent MS Office files
DeleteOlder <b>5</b>, strAppData &amp; "\Microsoft\CryptnetUrlCache\Content"  'IE certificate cache
DeleteOlder <b>5</b>, strAppData &amp; "\Microsoft\CryptnetUrlCache\MetaData" 'IE cert info
DeleteOlder <b>5</b>, strAppData &amp; "\Sun\Java\Deployment\cache" 'Days to keep Java cache
DeleteOlder <b>5</b>, strAppData &amp; "\Macromedia\Flash Player"   'Days to keep flash data

'OS specific temp files
if Cint(Left(strOSversion,1)) &gt; 5 Then
   Wscript.echo "Windows Vista/7/2008..."
   DeleteOlder <b>90</b>, strAppData &amp; "\Microsoft\Windows\Cookies"  'Days to keep cookies
   DeleteOlder <b>14</b>, strAppData &amp; "\Microsoft\Windows\Recent"   'Days to keep recent files
Else
   Wscript.echo "Windows 2000/2003/XP..."
   DeleteOlder <b>90</b>, strUserProfile &amp; "\Cookies"  'Days to keep cookies
   DeleteOlder <b>14</b>, strUserProfile &amp; "\Recent"   'Days to keep recent files
End if

'Print completed message

dtmEnd = Timer()
Wscript.echo "Profile cleanup complete, elapsed time: " &amp; FormatNumber(dtmEnd-dtmStart,2) &amp; " seconds"

'Subroutines below

Sub DeleteOlder(intDays,strPath)
' Delete files from strPath that are more than intDays old
If FSO.FolderExists(strPath) = True Then
   Set objFolder = FSO.GetFolder(strPath)
   For each objFile in objFolder.files
      If DateDiff("d", objFile.DateLastModified,Now) &gt; intDays Then
         'Wscript.echo "File: " &amp; objFile.Name
         objFile.Delete(True)
      End If
   Next
End If
End Sub</pre>
<p>Run this script using <a href="cscript.html">cscript</a> like this:</p>
<p class="code">C:\&gt; cscript CleanRoamingProfile.vbs //nologo</p>
<p>The performance benefits of reducing the profile folder size may not appear until the second time the script is run. For example for a user with 1000 recent document shortcuts the script might parse through 1000 files, keep the most recent 200 and delete the rest. That process will  likely be slower than just copying all 1000 files. However the next time the user logs on they will see a faster logon with  fewer files needing to be processed. </p>
<p>Copying a large number of small files can take a disproportionately long time due to disc <a href="http://support.microsoft.com/kb/140365">cluster sizes</a> and <a href="http://technet.microsoft.com/en-us/library/ff625695%28WS.10%29.aspx">SMB</a> limitations. This is why <i>Temporary Internet Files</i> are excluded from roaming profiles by default. </p>
<p>On a typical user profile the script should run to completion in less than a quarter of a second.</p>
<p class="quote"><i>“Let him that would move the world, first move himself” ~ Socrates</i></p>
<p><b>Related:</b></p>
<p><a href="../nt/syntax-folders.html">ProfileFolders</a> - Location of User profile folders under XP and Vista/Windows 7.<br>
<a href="http://support.microsoft.com/kb/319909">Q319909</a> - Slow Logoff process due to an open registry handle<br>
<a href="http://support.microsoft.com/kb/325376">Q325376</a> - Enable verbose  logon and logoff status messages<br>
<a href="http://blogs.technet.com/b/askds/archive/2009/09/24/so-you-have-a-slow-logon-part-2.aspx">Troubleshooting slow logons</a> - NedPyle<br>
<a href="../nt/slow_browsing.html">Explorer - Slow Network Browsing</a><br>
PROQUOTA - Limit user profile size<br>
<a href="http://www.vmware.com/products/view/">VM Ware View</a> - Virtualised desktops + virtual Profiles</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-profile.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

