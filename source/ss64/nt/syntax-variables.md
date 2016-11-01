---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Windows Environment Variables</h1> 
<p> Environment variables are  mainly used within batch files, they can be created, 
modified and deleted for a session using the <a href="set.html">SET</a> command. To make permanent changes, use <a href="setx.html">SETX</a> <br>
<br>Variables can be displayed using either <a href="set.html">SET</a> or 
<a href="echo.html">ECHO</a>.</p>
<p>Variables have a percent sign on both sides: <span class="code">%ThisIsAVariable%</span><br>
The variable name can include spaces, punctuation and mixed case: <span class="code">%_Another Ex.ample%<br>
</span>(This is unlike <a href="syntax-args.html">Parameter variables</a> which only have one % sign and are always one character long: <span class="code">%A </span> )</p>
<h2>Standard (built-in) Environment Variables</h2>
<table id="tbl">
<tbody><tr>
<th>Variable</th>
<th>Volatile<br>
(Read-Only)</th>
<th>Default value in
Windows 7/10/2008 (assuming the system drive is C: )</th>
</tr>
<tr>
<td class="code">ALLUSERSPROFILE</td>
<td>&nbsp;</td>
<td>C:\ProgramData</td>
</tr>
<tr>
<td class="code">APPDATA</td>
<td>&nbsp;</td>
<td>C:\Users\<i>{username}</i>\AppData\Roaming</td>
</tr>
<tr>
<td><span class="code">CD</span></td>
<td>Y</td>
<td>The current directory (string).</td>
</tr>
<tr>
<td><span class="code">ClientName</span></td>
<td>Y</td>
<td>Terminal servers only - the ComputerName of a remote host.</td>
</tr>
<tr>
<td><span class="code">CMDEXTVERSION</span></td>
<td>Y</td>
<td>The current Command Processor Extensions version number.
(NT = "1", Win2000+ =  "2".)</td>
</tr>
<tr>
<td><span class="code">CMDCMDLINE</span></td>
<td>Y</td>
<td>The original command line that invoked the <a href="cmd.html">Command Processor</a>.</td>
</tr>
<tr>
<td class="code">CommonProgramFiles</td>
<td>&nbsp;</td>
<td>C:\Program Files\Common Files</td>
</tr>

<tr>
<td class="code"> COMMONPROGRAMFILES(x86)</td>
<td>&nbsp;</td>
<td>C:\Program Files (x86)\Common Files</td>
</tr>
<tr>
<td class="code">COMPUTERNAME</td>
<td>&nbsp;</td>
<td><i>{computername}</i></td>
</tr>
<tr>
<td class="code">COMSPEC</td>
<td>&nbsp;</td>

<td>C:\Windows\System32\cmd.exe or if running a 32 bit <a href="https://en.wikipedia.org/wiki/WoW64">WOW</a> - C:\Windows\SysWOW64\cmd.exe</td>
</tr>
<tr>
<td><span class="code">DATE</span></td>
<td>Y</td>
<td>The current date using same region specific format as <a href="date.html">DATE</a>.</td>
</tr>
<tr>
<td><span class="code">ERRORLEVEL</span></td>
<td>Y</td>
<td>The current ERRORLEVEL value, automatically set when a program exits.</td>
</tr>
<tr>
<td class="code">FPS_BROWSER_APP_PROFILE_STRING<br>
FPS_BROWSER_USER_PROFILE_STRING<br><br></td>
<td>&nbsp;</td>
<td>Internet Explorer<br>
Default<br>
These are undocumented variables for the Edge browser in 
Windows 10.</td>
</tr>
<tr>
<td class="code">HighestNumaNodeNumber</td>
<td>Y (hidden)</td>
<td>The highest <a href="http://msdn.microsoft.com/en-gb/library/windows/desktop/aa363804%28v=vs.85%29.aspx">NUMA</a> node number on this computer.</td>
</tr>
<tr>
<td class="code">HOMEDRIVE</td>
<td>Y</td>
<td>C:</td>
</tr>
<tr>
<td class="code">HOMEPATH</td>

<td>Y</td>
<td>\Users\<i>{username}</i></td>
</tr>
<tr>
<td class="code">LOCALAPPDATA</td>
<td>&nbsp;</td>
<td>C:\Users\<i>{username}</i>\AppData\Local</td>
</tr>
<tr>
<td class="code">LOGONSERVER</td>
<td>&nbsp;</td>
<td>\\{domain_logon_server}</td>
</tr>
<tr>
<td><span class="code">NUMBER_OF_PROCESSORS</span></td>
<td>Y</td>
<td>The Number of processors running on the machine.</td>
</tr>
<tr>
<td><span class="code">OS</span></td>
<td>Y</td>
<td>Operating system on the user's workstation.</td>
</tr>
<tr>
<td><a href="path.html" class="code">PATH</a></td>

<td>User and<br>
System</td>
<td>C:\Windows\System32\;C:\Windows\;C:\Windows\System32\Wbem;<i>{plus program paths}</i></td>
</tr>
<tr>
<td class="code">PATHEXT</td>
<td><br></td>
<td>.COM; .EXE; .BAT; .CMD; .VBS; .VBE; .JS ; .WSF; .WSH; .MSC<br>
The syntax is like the PATH variable - semicolon separators.</td>
</tr>
<tr>
<td><span class="code">PROCESSOR_ARCHITECTURE</span></td>
<td>Y</td>
<td><span class="code">AMD64/IA64/x86 </span>This doesn't tell you the architecture of the processor but only of the current process, so it returns "x86" for a 32 bit <a href="https://en.wikipedia.org/wiki/WoW64">WOW</a> process running on 64 bit Windows. See <a href="syntax-64bit.html">detecting OS 32/64 bit</a></td>
</tr>
<tr>
<td class="code">PROCESSOR_ARCHITEW6432</td>
<td>&nbsp;</td>
<td>=<span class="code">%ProgramFiles%</span> (only available on <a href="syntax-64bit.html">64 bit</a> systems)</td>
</tr>
<tr>
<td><span class="code">PROCESSOR_IDENTIFIER</span></td>
<td>Y</td>
<td>Processor ID of the user's workstation.</td>
</tr>
<tr>
<td><span class="code">PROCESSOR_LEVEL</span></td>
<td>Y</td>
<td> Processor level of the user's workstation.</td>
</tr>
<tr>
<td><span class="code">PROCESSOR_REVISION</span></td>
<td>Y</td>
<td> Processor version of the user's workstation.</td>
</tr>
<tr>
<td><span class="code">ProgramW6432</span></td>
<td>&nbsp;</td>
<td>=<span class="code">%PROCESSOR_ARCHITECTURE%</span> (only available on <a href="syntax-64bit.html">64 bit</a> systems)</td>
</tr>
<tr>

<td class="code">ProgramData</td>
<td>&nbsp;</td>
<td>C:\ProgramData</td>
</tr>

<tr>
<td class="code">ProgramFiles</td>
<td>&nbsp;</td>
<td><a href="syntax-64bit.html">C:\Program Files or C:\Program Files (x86)</a></td>
</tr>
<tr>
<td><span class="code">ProgramFiles(x86)</span> <sup>1</sup></td>
<td>&nbsp;</td>

<td>C:\Program Files (x86)</td>
</tr>
<tr>
<td class="code">PROMPT</td>
<td>&nbsp;</td>
<td>Code for current command <a href="prompt.html">prompt</a> format,usually $P$G<br>
<span class="code">C:&gt;</span> </td>
</tr>
<tr>
<td class="code">PSModulePath</td>
<td>&nbsp;</td>
<td>%SystemRoot%\system32\WindowsPowerShell\v1.0\Modules\</td>
</tr>
<tr>
<td class="code">Public</td>

<td>&nbsp;</td>
<td>C:\Users\Public</td>
</tr>
<tr>
<td><a href="syntax-random.html" class="code">RANDOM</a></td>
<td>Y</td>
<td>A random integer number, anything from 0 to 32,767 (inclusive).</td>
</tr>
<tr>
<td><span class="code">%SessionName%</span></td>
<td>&nbsp;</td>
<td>Terminal servers only -  for a terminal server session, SessionName is a combination of the connection name, followed by #S<i>essionNumber</i>. For a console session, SessionName returns "Console". </td>
</tr>
<tr>
<td class="code">SYSTEMDRIVE</td>
<td>&nbsp;</td>
<td>C:</td>
</tr>
<tr>

<td class="code">SYSTEMROOT</td>
<td>&nbsp;</td>
<td>By default, Windows is installed to <span class="code">C:\Windows</span> but there's no guarantee of that, Windows can be installed to a different folder, or  a different drive letter.<br>
<span class="code">systemroot</span> is a read-only system variable that will resolve to the correct location.<br>
NT 4.0, Windows 2000 and Windows NT 3.1 default to <span class="code">C:\WINNT</span></td>
</tr>
<tr>
<td><span class="code">TEMP</span> and <span class="code"><a href="http://blogs.msdn.com/b/oldnewthing/archive/2015/04/17/10608077.aspx">TMP</a></span></td>
<td>User Variable</td>

<td>C:\Users\<i>{Username}</i>\AppData\Local\Temp<br>
Under XP this was \<i>{username}</i>\<b>Local Settings</b>\Temp </td>
</tr>
<tr>
<td><span class="code">TIME</span></td>
<td>Y</td>
<td>The current time using same format as <a href="time.html">TIME</a>. </td>
</tr>
<tr>
<td class="code"><a href="http://blogs.msdn.com/b/tihot/archive/2004/05/28/144226.aspx">UserDnsDomain</a></td>
<td>Y<br>
User Variable</td>
<td>Set if a user is a logged on to a domain and returns the fully qualified DNS domain that the currently logged on user's account belongs to.</td>
</tr>
<tr>
<td class="code"> USERDOMAIN</td>
<td>&nbsp;</td>
<td>{userdomain}</td>
</tr>
<tr>
<td class="code">USERDOMAIN_roamingprofile</td>
<td>&nbsp;</td>
<td>The user domain  for RDS or standard roaming profile paths. Windows 8/10/2012  (or Windows 7/2008 with <a href="https://support.microsoft.com/kb/2664408">Q2664408</a>)</td>
</tr>
<tr>
<td class="code">USERNAME</td>
<td>&nbsp;</td>
<td><i>{username}</i></td>
</tr>
<tr>
<td class="code">USERPROFILE</td>

<td>&nbsp;</td>
<td>%SystemDrive%\Users\<i>{username}</i><br>
This is equivalent to the <span class="code">$HOME</span> environment variable in Unix/Linux </td>
</tr>
<tr>
<td class="code">WINDIR</td>
<td>&nbsp;</td>
<td><p>%WinDir% pre-dates Windows NT and seems to be superseded by %SystemRoot%<br>
Set by default as windir=%SystemRoot%<br>
%windir% is a regular variable and can be changed, which makes it less robust than %systemroot%</p></td>
</tr>
</tbody></table>
<p><sup>1</sup> Only on <a href="syntax-64bit.html">64 bit systems</a>, is used to store 32 bit programs.</p>
<p>Unless stated otherwise, all the variables above are System variables</p>
<p>Environment variables are stored in the registry:</p>
<p> User Variables: <span class="code">HKEY_CURRENT_USER\Environment</span><br>
  System Variables: <span class="code">HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment</span></p>
<p>By default, files stored under <b>Local Settings </b>do not roam with a roaming profile.</p>
<p>Dynamic environment variables are read-only and are computed each time the variable is expanded. When all variables are listed with SET, these will not appear in the list. Do not attempt to directly SET a dynamic variable.&nbsp; <br>
</p>
<h2><abbr title="Discovered by SmartGenius, Menno Vogels, npocmaka and Carlos"><a id="undocumented"></a>Undocumented</abbr> Dynamic variables (read only)</h2>
<blockquote>
<p><span class="code">%__APPDIR__%</span> &nbsp; The directory path to the current application .exe,  terminated with a trailing backslash. (Global) - <a href="http://ss64.org/viewtopic.php?id=1950">discuss</a><br>
<span class="code">%__CD__%</span> &nbsp; The current directory,  terminated with a trailing backslash. (Global)<br>
<span class="code">%=C:%</span> &nbsp; The current directory  of the C: drive.<br>
<span class="code">%=D:%</span> &nbsp; The current directory  of the D: drive if drive D: has been accessed in the current CMD session.<br>
<span class="code">%DPATH%</span> &nbsp; Related to the (deprecated) <a href="path.html#dpath">DPATH</a> command.<br>
<span class="code">%=ExitCode%</span> &nbsp; The<b> </b> most recent exit code returned by an external command, such as CMD /C EXIT <i>n</i>, converted to <b>hex</b>.<br>
<span class="code">%=ExitCodeAscii%</span> &nbsp; The<b> </b> most recent exit code returned by an external command, as <a href="../ascii.html">ASCII</a>. 
(Values 0-32 do not display because those map to  ASCII control codes.)<br>
<span class="code">%FIRMWARE_TYPE%</span> The boot type of the system: <span class="code"><u>Legacy</u> ,UEFI,Not implemented ,Unknown</span> Windows 8/2012.<br>
<span class="code">%KEYS%</span> &nbsp; Related to the (deprecated) KEYS command.<br>
More detail on these undocumented variables can be found in <a href="http://stackoverflow.com/questions/20156490/why-cant-i-access-a-variable-named-cd-on-windows-7/20169219#20169219">this stackoverflow answer</a> from Dave Benham. </p>
</blockquote>
<h2>Undocumented  Dynamic variables (read/write)</h2>
<blockquote>
<p><span class="code">%__COMPAT_LAYER%</span> &nbsp; Set the ExecutionLevel to either <span class="code">RunAsInvoker</span> (asInvoker), <span class="code"><u>RunAsHighest</u></span>(highestAvailable) or <span class="code">RunAsAdmin</span>(requireAdministrator) for more see <a href="syntax-elevate.html">elevation</a> and <a href="https://support.microsoft.com/en-us/kb/286705">Q286705</a> / <a href="http://www.microsoft.com/en-us/download/details.aspx?id=7352">Application Compatibility Toolkit</a> for other Compatibility Layers (colours,themes etc).</p>
</blockquote>
<h2>Pass variables between batch scripts</h2>
<blockquote>
<p>There are several ways to pass values between batch files, or between a batch file and the command line, see the <a href="call.html">CALL</a> and <a href="setlocal.html">SETLOCAL</a> pages for full details. </p>
<p>A child process by default inherits a copy of all environment variables  from its parent,  this makes environment variables unsuitable for storing <i>secret</i> information such as API keys or user passwords, especially in rare occasions like crashes where a crash log will often include the full OS environment at the time of the crash. PowerShell/Get-Credential is a more secure approach.</p>
</blockquote>
<p><i class="quote">“Men may be convinced, but they cannot be pleased against their will. But though taste is obstinate, it is very variable, and time often prevails when arguments have failed” ~ Samuel Johnson</i><br>
<br>
<b>Related:</b></p>
<p><a href="../ps/syntax-env.html">PowerShell</a> - Working with Environment variables<br>
<a href="syntax-folders.html">User Shell Folders</a> - Standard folder locations.<br>
<a href="syntax-64bit.html">Detecting 32 vs 64 bit Windows</a><br>
<a href="call.html">CALL</a> - Evaluate environment variables<br>
<a href="set.html">SET</a> - View environment variables, set local variables<br>
<a href="setx.html">SETX</a> - Set environment variables<br>
<a href="https://support.microsoft.com/kb/100843">Q100843</a> - The four types of environment variable <br>
<a href="https://support.microsoft.com/kb/286705">Q286705</a> - Set compatibility variables<br>
<a href="https://support.microsoft.com/kb/242557">Q242557</a> - Registry Settings for Folder Redirection<br>
<a href="http://stackoverflow.com/questions/6379619/explain-how-dos-batch-newline-variable-hack-works">StackOverflow</a> - 
Storing a Newline in a variable<br>
<a href="http://download.microsoft.com/download/3/b/a/3ba6d659-6e39-4cd7-b3a2-9c96482f5353/Managing%20Roaming%20User%20Data%20Deployment%20Guide.doc">Managing Roaming User Data Deployment Guide</a> - Microsoft.com (Word Doc)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
