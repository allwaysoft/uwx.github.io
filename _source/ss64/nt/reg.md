---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>REG.exe </h1> 
<p>Read, Set or Delete registry keys and values,  save and restore from a .REG file. </p>
<pre>Syntax:

   REG QUERY [<i>ROOT</i>\]<i>RegKey</i> /v <i>ValueName</i> [/s]
   REG QUERY [<i>ROOT</i>\]<i>RegKey</i> /ve  --This returns the (default) value
   
   REG ADD [<i>ROOT</i>\]<i>RegKey</i> /v <i>ValueName</i> [/t <i>DataType</i>] [/S <i>Separator</i>] [/d <i>Data</i>] [/f]
   REG ADD [<i>ROOT</i>\]<i>RegKey</i> /ve [/d <i>Data</i>] [/f]  -- Set the (default) value

   REG DELETE [<i>ROOT</i>\]<i>RegKey</i> /v <i>ValueName</i> [/f]
   REG DELETE [<i>ROOT</i>\]<i>RegKey</i> /ve [/f]  -- Remove the (default) value
   REG DELETE [<i>ROOT</i>\]<i>RegKey</i> /va [/f]  -- Delete all values under this key

   REG COPY  [\\<i>SourceMachine\</i>][<i>ROOT</i>\]<i>RegKey</i> [\\<i>DestMachine\</i>][ROOT\]<i>RegKey</i>

   REG EXPORT <i>[ROOT\]RegKey FileName</i>.reg
   REG IMPORT <i>FileName</i>.reg
   REG SAVE [<i>ROOT</i>\]<i>RegKey FileName</i>.hiv
   REG RESTORE <i>\\MachineName\</i>[<i>ROOT</i>]\<i>KeyName FileName</i>.hiv
   
   REG LOAD<i> KeyName</i> <i>FileName</i>
   REG UNLOAD <i>KeyName</i>
   
   REG COMPARE [<i>ROOT</i>\]<i>RegKey</i> [<i>ROOT</i>\]<i>RegKey</i> [/v <i>ValueName</i>] [<i>Output</i>] [/s]
   REG COMPARE [<i>ROOT</i>\]<i>RegKey</i> [<i>ROOT</i>\]<i>RegKey</i> [/ve] [Output] [/s]

Key:
   <i>ROOT</i> :
         HKLM = HKey_Local_machine (default)
         HKCU = HKey_current_user
         HKU  = HKey_users
         HKCR = HKey_classes_root

   <i>ValueName</i> : The value, under the selected RegKey, to edit.
               (default is all keys and values)

   /d <i>Data</i>   : The actual data to store as a "String", integer etc

   /f        : Force an update without prompting "Value exists, overwrite Y/N"

   \\<i>Machine</i> : Name of remote machine - omitting defaults to current machine.
               Only HKLM and HKU are available on remote machines.

   <i>FileName</i>  : The filename to save or restore a registry hive.

   <i>KeyName</i>   : A key name to load a hive file into. (Creating a new key)

   /S        : Query all subkeys and values.

   /S <i>Separator</i> : Character to use as the separator in REG_MULTI_SZ values
                  the default is "\0" 

   <i>/t DataType</i>  : <a href="reg-types.html">REG_SZ (default) | REG_DWORD | REG_EXPAND_SZ | REG_MULTI_SZ</a>

   /reg:32   : Force REG.exe to write to the 32-bit registry location
   /reg:64   : Force REG.exe to write to the 64-bit registry location

             By default a 32-bit process (such as an SCCM client or a 32 bit MSI installer)
             on a 64 bit machine, will use a 32-bit view of the registry: HKLM\SOFTWARE\Wow6432Node
             Use the /REG switch to over-ride this. See <a href="https://support.microsoft.com/kb/305097">Q305097</a> for more details.

   <i>Output</i>    : /od (only differences) /os (only matches) /oa (all) /on (no output)</pre>
<p> Any of the above commands can be run against  a remote machine by adding <span class="code">\\<i>MachineName</i> </span>to the command line, assuming the <a href="syntax-services.html">Remote Registry Service</a> is running.</p>
<p> Depending on the registry permissions, REG ADD may require running REG.exe from an <a href="syntax-elevate.html">elevated</a> command prompt.<br>
Registry data stored under HKCU will be visible and writable by the currently logged in user.<br>
Registry data stored under HKLM will be visible to all users and writable by administrators. <br>
</p>
<p>REG RESTORE has a tendency not to work, possibly due to firewall issues, Export and Import are much more reliable. </p>
<h2>Backslash characters</h2>
<blockquote>
<p>The REG command will interpret <span class="code">\</span> as an <a href="syntax-esc.html#escape">escape</a> for the character that immediately follows it. <br>
To include a quote mark (") in the data, prefix it with the escape character  e.g. Here is <span class="code">\</span>" a quote</p>
<p>This can cause problems with quoted directory paths because  <span class="code">\"</span> at the end of the line will be escaped.</p>
<p>To save a directory path with a trailing backslash (<span class="code">\</span>) requires adding a second backslash to 'escape' the escape<br>
so for example instead of <span class="code">"C:\My Docs\"</span> use <span class="code">"C:\My Docs\\"</span></p>
</blockquote>
<h2>Activate</h2>
<blockquote>
<p>To activate registry changes in HKEY_CURRENT_USER without logging off: <br>
<span class="code"><a href="rundll32.html">RUNDLL32.EXE</a> USER32.DLL,UpdatePerUserSystemParameters ,1 ,True</span></p>
</blockquote>
<h2>Elevation</h2>
<blockquote>
<p>Unlike <a href="regedit.html">REGEDIT</a>, REG.exe  does not always require <a href="syntax-elevate.html">elevation</a> <br>
When adding an item to HKCU,  REG will be automatically manifested “asInvoker”, and will work without elevation,<br>
when adding an item to HKLM then it does need to be run elevated.</p>
</blockquote>
<p><b>Examples</b></p>
<p>Querying the console settings:</p>
<pre>REG QUERY HKCU\Console\
REG QUERY HKCU\Console /v ScreenBufferSize</pre>
<p> Add the registry key 'Sample' along with some data and then query to check that it worked:<br>
<span class="code">REG ADD HKCU\Software\SS64 /v Sample /d "some test data"<br>
REG QUERY HKCU\Software\SS64 /v Sample</span><br>
</p>
<p> Add the registry key to disable  Fast User Switching on the current PC (requires elevation)<br>
</p>
<pre>REG ADD HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System /v HideFastUserSwitching /t REG_DWORD /d 1</pre>
<p> Add a REG_BINARY registry key to HKLM and overwrite if it already exists (requires elevation)<br>
<br>
<span class="code">REG ADD HKLM\Software\DiLithium /v WarpSpeed /t REG_BINARY /d ffffffff /f<br>
REG QUERY HKLM\Software\DiLithium /v WarpSpeed</span></p>
<p><span class="body">Find the location of the <a href="syntax-folders.html">Start Menu</a> folder</span>:</p>
<p class="code">REG QUERY "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders" /v "Start Menu"</p>
<p>List IE Proxy overrides:</p>
<p><span class="code">REG QUERY "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings"  /v ProxyOverride</span></p>
<p>Save a directory/registry path  that ends with a backslash:</p>
<pre>Set _reg=HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SS64.EXE<b>\</b><br>Set _prog=C:\Program Files\SS64 App<b>\</b><br>REG ADD "%_reg%<b>\</b>" /f /v "SS64.EXE" /t REG_SZ /d "%_prog%<b>\</b>" 
</pre>
<p>Save a REG_Expand_SZ value of %systemroot% </p>
<pre>REG ADD HKLM\Software\SS64 /v Path /t REG_EXPAND_SZ /d <b>^</b>%systemroot<b>^</b>%

REG COPY \\Wks580\HKCU\Software\SS64 HKCU\Software\SS64
REG COPY HKCU\Software\SS64 HKCU\Software\SS64Copy

REG EXPORT HKCU\Software\SS64 C:\MyReg.REG
REG IMPORT C:\MyReg.REG
REG SAVE HKCU\Software\SS64 C:\MyRegHive.hiv
REG RESTORE \\Wks580\HKCU\Software\SS64 C:\MyRegHive.hiv</pre>
<p> Run a script at first logon (Run Once) to do this we edit the Default User profile by temporarily loading it as <span class="code">TEMP</span>:</p>
<pre>REG LOAD HKU\TEMP "C:\Documents and Settings\Default User\NTUSER.DAT"
REG ADD HKU\TEMP\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce /v newUserProfile /t REG_EXPAND_SZ /d "D:\setup.cmd" /f
REG UNLOAD HKU\TEMP</pre>
<p>To save a progress log as part of a RunOnce command you can include <a href="syntax-redirection.html">redirection</a> to a log file as part of the command string, however to make this work the redirection chars and quotes must be <a href="syntax-esc.html#escape">escaped</a>:<br>
<span class="code">... "setup.cmd ^&gt;^&gt; \"C:\Temp\setup.log\"\"" /f</span></p>
<p>More  examples are available via: REG QUERY /? REG ADD /? etc<br>
<br>
<i class="quote"> "The way to a mans heart is through his stomach" ~ Fanny Fern (writer)</i> <br>
<br>
<b>Related:</b><br>
<br>
<a href="setx.html">SETX</a> - Set environment variables permanently, can also read a registry key and write the value to a text file.<br>
<a href="regedit.html">REGEDIT</a> - Load Registry settings from a .REG file<br>
 Powershell: <a href="../ps/get-itemproperty.html">Get-ItemProperty</a> / <a href="../ps/set-itemproperty.html">Set-ItemProperty</a> - Retrieve / save registry Keys.<br>
<a href="https://support.microsoft.com/kb/305097">Q305097</a> - View the system registry  using a 64-bit version of Windows.<br>
<a href="https://support.microsoft.com/kb/325347">Q325347</a> - Run a Logon Script once when a new user logs on,  Windows 2003.<br>
<a href="https://support.microsoft.com/kb/945219">Q945219</a> - Reg.exe fails for  REG_EXPAND_SZ registry types.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="reg.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

