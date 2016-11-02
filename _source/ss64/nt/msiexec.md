---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>MSIEXEC</h1>  
<p>Microsoft Windows Installer (Windows 7/2008).
</p><pre>Syntax
      MSIEXEC /Option <i>RequiredParameter</i> [<i>OptionalParameter</i>]

Install Options
   Install or configure a product:
      MSIEXEC /package <i>Product.msi</i>
      MSIEXEC /i <i>Product.msi</i>

   Administrative install, Install a product on the network:
      MSIEXEC /a <i>Product.msi</i>

   Advertise a product to all users:
      MSIEXEC /j <b>m</b> <i>Product.msi</i> [/t <i>TransformList</i>] [/g <i>LanguageID</i>]

   Advertise a product to current user:
      MSIEXEC /j <b>u</b> <i>Product.msi</i> [/t <i>TransformList</i>] [/g <i>LanguageID</i>]

   Uninstall the product:
      MSIEXEC /uninstall <i>Product.msi</i>
      MSIEXEC /x <i>Product.msi</i>
      MSIEXEC /uninstall <i>ProductCode</i>
      MSIEXEC /x <i>ProductCode

</i>Display Options

   Quiet mode, no user interaction
      /quiet

   Unattended mode - progress bar only
      /passive

   Set user interface level: None
      /qn

   Set user interface level: Basic UI
      /qb

   Set user interface level: Reduced UI
      /qr

   Set user interface level: Full UI (default)
      /qf

   Help information
      /help
                
Restart Options
   Do not restart after the installation is complete:
      /norestart

   Prompt the user for restart if necessary:
      /promptrestart

   Always restart the computer after installation:
      /forcerestart
             
Logging Options
   /le <i>Logfile</i>  Log All error messages
   /lw <i>Logfile</i>  Log Non-fatal warnings
   /li <i>Logfile</i>  Log Status messages
   /la <i>Logfile</i>  Log Start up of actions
   /lr <i>Logfile</i>  Log Action-specific records
   /lu <i>Logfile</i>  Log User requests
   /lc <i>Logfile</i>  Log Initial (UI) parameters
   /lm <i>Logfile</i>  Log Out-of-memory or fatal exit information
   /lo <i>Logfile</i>  Log Out-of-disk-space messages
   /lp <i>Logfile</i>  Log Terminal properties
   /lv <i>Logfile</i>  Log Verbose output
   /lx <i>Logfile</i>  Log Extra debugging information

   /l* <i>Logfile</i>  Log all information, except for v and x options
   /log <i>Logfile</i> Equivalent of /l* <logfile>

   /l+ <i>Logfile</i>  Append to an existing log file.
   /l! <i>Logfile</i>  Flush each line to the log.

Update Options
   Apply update(s)
      /update <update1.msp>[;<i>Update2.msp</i>]

   Remove update(s) for a product:
      /uninstall <patchcodeguid>[;<i>Update2.msp</i>] /package <product.msi |="" productcode="">
                
Repair Options - Repair a previously installed product
   /fp          Repair/fix - re<b>p</b>lace missing files
   /fo          Repair/fix - replace <b>O</b>lder files(default)
   /fe          Repair/fix - replace older or <b>E</b>qual date files
   /fd          Repair/fix - replace <b>D</b>ifferent version files
   /fc          Repair/fix - replace files based on <b>C</b>hecksum differences
   /fa          Repair/fix - replace <b>A</b>ll files
   /fu          Repair/fix - rewrite HKCU registry(default)
   /fm          Repair/fix - rewrite HKLM registry(default)
   /fs          Repair/fix - recreate shortcuts(default)
   /fv          Repair/fix - rewrite local cache from source

Set Public Properties
        [PROPERTY=<i>PropertyValue</i>]</product.msi></patchcodeguid></update1.msp></logfile></pre>
<p>Windows installer (and msiexec) have been updated with each major release of Windows (from 2000 to XP to 2008 R2)
Windows Installer redistributables are available at the <a href="http://www.microsoft.com/download/">Microsoft Download Center</a>.</p>
<p>Registry Keys:<br>
<span class="code">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall </span></p>
<p>Product codes - the ProductCode for each application is a GUID that can be retrieved with a WMI query in VBScript or PowerShell, <span class="code"><a href="../ps/get-wmiobject.html">Get-WmiObject</a> Win32_Product</span> will return the <span class="code">IdentifyingNumber</span> which is the Product code:<br> 
<span class="code">PS C:\&gt; gwmi Win32_Product -Filter "Name LIKE 'Paint.net v3%'"</span></p>
<p>Do not use the  domain controller SYSVOL folder as a Windows Installer installation point, doing so can result in the following error when you attempt to run the Windows Installer (.msi) package:</p>
<blockquote>
  <p><i>This installation package could not be opened. Verify that the package exists and that you can access it, or contact the application vendor to verify that this is a valid Windows Installer package.</i></p>
</blockquote>
<p>This is because the SYSVOL folder is created with the SHI1005_FLAGS_RESTRICT_EXCLUSIVE_OPENS attribute, which prevents it from being exclusively locked by Windows Installer. Having locked files on a SYSVOL will  create Active Directory directory service
synchronization problems.</p>
<p><b>Examples:</b></p>
<p>Install:<br>
<span class="code">msiexec /i "C:\Install\ss64app.msi"</span><br>
<br>
UnInstall:<br>
<span class="code">msiexec /uninstall "{5AFF6499-63BA-4A36-83B2-8D256404AC3D}" /log "C:\install\ss64app.txt"</span></p>
<p>or remotely with <a href="psexec.html">psexec</a><br>
<span class="code">psexec \\$workstation -s msiexec /uninstall "{5AFF6499-63BA-4A36-83B2-8D256404AC3D}" /log "C:\install\ss64app.txt"</span></p>
<p>Extracting files from an MSI</p>
<p class="code">msiexec /a <i>MSIFile</i> /qb TARGETDIR=<i>DestinationDirectory</i></p>
<p>Extract the files from <a href="../links/windows.html">adminpak.msi</a>: </p>
<p><span class="code">msiexec /a adminpak.msi /qb TARGETDIR=C:\reskit\adminpak</span><br>
</p>
<p><span class="quote"><i>“People don’t resist change. They resist being changed!” - Peter Senge.</i></span><b><br>
<br>
Related:</b><br>
<br>
<a href="change.html">CHANGE</a> -  Terminal Server session install mode.<br>
<a href="regsvr32.html">REGSVR32</a> - Register or unregister a DLL<br>
<a href="rundll32.html">RunDll32</a> - Uninstall DLL's e.g. MS Java<br>
<a href="http://msdn.microsoft.com/en-us/library/windows/desktop/aa371185(v=vs.85).aspx">MSDN/Dev Centre</a> - Released Versions of Windows Installer<br>
<a href="https://support.microsoft.com/kb/310747">Q310747</a> - System File Checker (Sfc.exe) <br>
Equivalent bash command (Linux): <a href="http://www.tfug.org/helpdesk/linux/rpm.html">RPM</a> - Rpm Package Manager</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="msiexec.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
