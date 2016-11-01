---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Detecting 64 bit vs 32 bit </h1>
<p>Before starting to look at this, its important to be clear about what you mean by "64 bit". <br>
You can have a 64 bit CPU, a 64 bit operating system and a 64 bit process running. <br>
It is equally possible to have 64 bit CPU, a 32 bit operating system installed and a 16 bit process running.</p>
<p>The table below shows a few of the combinations you  need to account for:</p>
<table>
<tbody><tr>
<td>&nbsp;</td>
<td>CPU Hardware</td>
<td>Operating System </td>
<td>Process</td>
</tr>
<tr>
<td>Windows 3.1</td>
<td>16</td>
<td>16</td>
<td>16</td>
</tr>
<tr>
<td><b>Windows 95/NT </b></td>
<td><b>32</b></td>
<td><b>32</b></td>
<td><b>32</b></td>
</tr>
<tr>
<td>Windows XP (16 bit compatibility)</td>
<td>32</td>
<td>32</td>
<td>16</td>
</tr>
<tr>
<td>Windows XP</td>
<td>32</td>
<td>32</td>
<td>32</td>
</tr>
<tr>
<td><b>Windows XP on new hardware</b></td>
<td><b>64</b></td>
<td><b>32</b></td>
<td><b>32</b></td>
</tr>
<tr>
<td>Windows 7+ on old hardware</td>
<td>32</td>
<td>32</td>
<td>32</td>
</tr>
<tr>
<td>Windows 7+ (32 bit compatibility)</td>
<td>64</td>
<td>64</td>
<td>32 (WOW) </td>
</tr>
<tr>
<td><b>Windows 7+</b></td>
<td><b>64</b></td>
<td><b>64</b></td>
<td><b>64</b></td>
</tr>
</tbody></table>
<h2>Detect 64 bit processor hardware</h2>
<blockquote>
<p> In Vista and greater, you can use <span class="code">wmic os get osarchitecture</span>, or in WMI <span class="code">Win32_ComputerSystem/OSArchitecture</span> sadly this is not supported in XP or 2003 <br> 
There are a number of promising looking  options in WMI and Systeminfo, but they all pertain to the OS not the CPU.</p>
</blockquote>
<h2>Detect a 64 bit Operating System </h2>
<blockquote>
<p><span class="code">:: Installed OS<br>
Set _os_bitness=64<br>
IF %PROCESSOR_ARCHITECTURE% == x86 (<br>
&nbsp;&nbsp;IF NOT DEFINED PROCESSOR_ARCHITEW6432 Set _os_bitness=32<br>
&nbsp;&nbsp;)<br>
Echo Operating System is %_os_bitness% bit</span></p>
<p>Via David Wang’s blog post: <a href="http://blogs.msdn.com/b/david.wang/archive/2006/03/26/howto-detect-process-bitness.aspx">Detect OS Bitness</a></p>
</blockquote>
<h2>Detect a 64 bit Process</h2>
<blockquote>
<p>On Windows 7, running <span class="code">C:\windows\SysWOW64\cmd.exe</span> will launch a 32 bit instance of CMD.exe even if the OS is 64 bit. Applications that are compiled for a 32 bit processor will run in a similar way. </p>
<p>We can detect this by testing either the <span class="code">%ProgramFiles%</span> or  the <span class="code">%PROCESSOR_ARCHITECTURE%</span> <a href="syntax-variables.html">environment</a> variables: </p>
<p>32bit CMD process:</p>
<p class="code"> C:\Windows\SysWOW64&gt; set ProgramFiles<br>
ProgramFiles=C:\Program Files (x86)</p>
<p class="code"> C:\Windows\SysWOW64&gt; echo %PROCESSOR_ARCHITECTURE% <br>
x86</p>
<p>64 bit  CMD process:</p>
<p class="code">C:\Windows\System32&gt; set ProgramFiles <br>
ProgramFiles=C:\Program Files</p>
<p class="code"> C:\Windows\System32&gt; echo %PROCESSOR_ARCHITECTURE% <br>
AMD64</p>
<p>Using this with a conditional <a href="if.html">IF</a> to detect process bitness in a script: </p>
<pre>If %PROCESSOR_ARCHITECTURE% == x86 (
   Set _ps_bitness=32
   ) ELSE ( Set _ps_bitness=64)
Echo Process is %_ps_bitness% Bit</pre>
</blockquote>
<h2>File locations </h2>
<blockquote>
<pre>%ProgramFiles%     <span class="body"> = 32 bit programs on 32 bit systems </span>"C:\Program Files"
%ProgramFiles%     <span class="body"> = 64 bit programs on 64 bit systems </span>"C:\Program Files"
%ProgramFiles(x86)%<span class="body"> = 32 bit programs on 64 bit systems </span>"C:\Program Files (x86)"</pre></blockquote>
<h2>System Folders</h2>
<blockquote><span class="body">64 bit</span> versions of Windows have two system folders:<br>
<span class="code">C:\Windows\system32 <span class="body"> = 64 bit programs</span></span>, (the <span class="code">system32</span> folder always stores the 'native' binary of the OS).<br>
<span class="code">C:\Windows\SysWOW64 </span><span class="body">= 32 bit programs</span></blockquote>
<h2>Run a 32 bit program</h2>
<blockquote>
<p> To run a 32 bit program or utility, the 32 bit executable file must be called from <span class="code">C:\Windows\SysWOW64\</span></p>
<p> if you run a 32 bit shell (such as <span class="code">C:\windows\syswow64\cmd.exe</span>) and then try to launch a command, it will <b>always</b> look for a 32 bit version of the command, even if you explicitly use a full path to system32, the 32 bit shell will redirect to the 32 bit equivalent  in <span class="code">syswow64</span> (if no 32 bit version of the command is found, then the new process will fail to launch.)</p>
</blockquote>
<h2>Run a 64 bit program from a 32 bit process</h2>
<blockquote>
<p>To run a 64 bit program from a 32 bit process use the virtual folder <span class="code">C:\Windows\sysnative</span><br>
If you call a command in sysnative from  a 32 bit process, Windows will automatically redirect the call to <span class="code">C:\Windows\system32</span> directory - this allows a 32 bit process to launch a 64 bit process.<br>
</p>
<p>In many cases this is not needed as most utilities (e.g. ping.exe) have both a 32 bit and 64 bit version, however a few utilities (nbtstat, bcdedit) are only  available as a 64-bit executable.<br>
n.b. The 
sysnative folder is not visible to 64 bit processes or programs and  cannot been seen in Windows Explorer.
</p>
</blockquote>
<p>By default, running CMD from the start menu will launch a 64 bit process (<span class="code">C:\Windows\System32\cmd.exe</span>)</p>
<p><i class="quote">“It's not so much that we're afraid of change or so in love with the old ways, but it's that place in between that we fear... it's like being between trapezes” ~ Marilyn Ferguson</i><br>
<br>
<b>Related:</b></p>
<p><a href="https://support.microsoft.com/kb/556009">Q556009</a> - How to check if a computer is running a 32 bit or 64 bit Operating System.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

