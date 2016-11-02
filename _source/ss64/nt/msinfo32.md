---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>MSINFO32.exe</h1>
<p>System Information -  display details about  hardware configuration, computer components,  software and drivers.</p>
<pre>Syntax
      Msinfo32 [/pch] [/nfo <i>PathName</i>] [/report <i><a href="path.html#pathname">PathName</a></i>]
         [/computer <i>ComputerName</i>] [/showcategories]
            [/category <i>categoryID</i>] [/categories <i>categoryID</i>]

Key
   /nfo <i>PathName</i>   Save the information as a <a href="http://en.wikipedia.org/wiki/.nfo">.nfo</a> file  •
                   An .nfo file name extension will be appended to the name if needed.

   /report <i>PathName
               </i>    Output a text file •

   /computer       Get details from a remote computer •

   /categories     Display or output the specified categories

   /category       Set focus to a specific category at startup

   /pch            Display History View

   /showcategories<br>                   Start System Information with the category IDs displayed
                   instead of the friendly names or the localized names.
                   For example, when you use this switch, the Software Environment
                   category is displayed as the SWEnv category.
                   SWEnv is a valid categoryID argument for the /category switch
                   and the /categories switch.</pre>
<p>• = Supported in Windows Vista or above only<br>
All other options work in XP, Vista or above(including 64 bit versions) <br>
<br>
If no options are specified the GUI interface will open.</p>
<p> MSinfo can also be started from <span class="code">Help | About</span> rather than the command line, it is not normally in the system path, but can usually be found in:<br>
<span class="code">C:\Program Files\Common Files\Microsoft Shared\MSInfo\</span><br>
<br>
Generation of the text file can take some time, depending on the complexity of the system.</p>
<p>If you have problems getting MSInfo to run, check permissions on the following key: HKLM\SOFTWARE\Microsoft\Shared Tools\MSInfo\ <br>
<br>
Msinfo32 is a replacement for WINMSD</p>
<p><b>Examples: </b><br>
<br>
Create a text report file in the folder C:\Temp with a name of Test.txt:</p>
<p class="code">msinfo32 /report C:\TEMP\test.txt</p>
<p>Create an NFO report file in the folder C:\Temp with a name of Test.NFO:</p>
<p class="code">msinfo32 /nfo C:\TEMP\test.nfo</p>
<p>View System Information for a remote computer with a UNC name of Server64:</p>
<p class="code">msinfo32 /computer Server64</p>
<p>List all the available category IDs:</p>
<p class="code">msinfo32 /showcategories</p>
<p>Display only System Summary information and create an .nfo file called <span class="code">mysummary.nfo</span> containing the same information:</p>
<p class="code">msinfo32 /nfo mysummary.nfo /categories +systemsummary</p>
<p><i class="quote">“Education is not the filling of a pail, but the lighting of a fire” ~ W. B. Yeats </i> <br>
<b><br>
Related:</b><br><br>
<a href="winmsd.html">WINMSDP</a> - Windows  Diagnostics<br>
Powershell: <a href="../ps/get-wmiobject.html">Get-WMIobject</a> - Get WMI class information<br>
<a href="https://support.microsoft.com/kb/300887">Q300887</a> - Vista/Windows 7 Msinfo32<br>
<a href="https://support.microsoft.com/kb/308549">Q308549</a> - Windows XP Msinfo32</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="msinfo32.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

