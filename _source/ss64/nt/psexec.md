---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PsExec (<abbr title="Download the PsTools suite"><a href="http://technet.microsoft.com/en-us/sysinternals">PsTools</a></abbr>)</h1>
<p>Execute a command-line process on a remote machine. </p>
<pre>Syntax
      psexec \\<i>computer</i>[,<i>computer</i>[,..] [<i>options</i>] <i>command</i> [<i>arguments</i>]

      psexec @<i>run_file </i>[<i>options</i>] <i>command</i> [<i>arguments</i>]

Options:

   <i>computer</i>   The computer on which psexec will run <i>command</i>. Default = local system 
              To run against all computers in the current domain enter "\\*"
               
   @<i>run_file</i>  Run <i>command</i> on every computer listed in the text file specified.

   <i>command</i>    Name of the program to execute

   <i>arguments</i>  Arguments to pass (file paths must be absolute paths on the target system)

   -a <i>n</i>,<i>n</i>,... Set processor affinity to <i>n</i>. Processors are numbered as 1,2,3,4 etc
              so to run the application on CPU 2 and CPU 4, enter: "-a 2,4"

   -c         Copy the program (<i>command</i>)to the remote system for execution.
   -c -f      Copy even if the file already exists on the remote system.
   -c -v      Copy only if the file is a higher version or is newer than the remote copy.

   If you omit the -c option then the application must be in the system path on the remote system.

   -d         Don’t wait for the application to terminate.
              Only use for non-interactive applications.

   -e         Do NOT load the specified account’s profile.
              (In early versions of PSEXEC: Load the user account's profile, don’t use with -s)

   -f         Copy the specified program even if the file already exists on the remote system.

   -h         Run with the account's <a href="syntax-elevate.html">elevated token</a>, if available. (Vista or higher)

   -i         Interactive - Run the program so that it interacts with the desktop on the remote system.
              If no session is specified, the process runs in the console session.

   -l         Limited - Run process as limited user.  Run with Low Integrity.
              Strips the Administrators group and allows only privileges assigned to the Users group.

   -n <i>s</i>       Specify a timeout (<i>s</i> seconds) for connecting to the remote computer.

   -p <i>psswd</i>   Specify a password for <i>user</i> (optional). Passed as clear text.
              If omitted, you will be prompted to enter a hidden password.

   -r         The name of the remote service to create or interact with.

   -s         Run remote process in the SYSTEM account (use with caution).

   -u <i>user</i>    Specify a user name for login to remote computer(optional).

   -v         Copy the specified file only if it has a higher version number or is newer
              than the one on the remote system.

   -w <i>directory</i> Set the working directory of the process (relative to the remote computer).

   -x         Display the UI on the Winlogon desktop (local system only).

   -low, -belownormal, -abovenormal, -high or -realtime
              These options will run the process at a different priority.
              also -background (Vista and above) will run at low memory and I/O priority.

   -accepteula Suppress the display of the license dialog.</pre>
<p>  For PsExec to work, <i>File and Printer sharing</i> must  be enabled on the remote computer.</p>
<p>PsExec can also be used to start GUI applications, but in that case the GUI will appear on the remote machine. </p>
<p>Input is  passed to the remote system when you press the enter key -  typing Ctrl-C will terminate the remote process.</p>
<p>When you specify a <b>username </b>the remote process will execute in that account, and will have access to that account's network resources. </p>
<p>If you omit <b>username </b>the remote process will run in the same account from which you execute PsExec, but because the remote process is impersonating it will not have access to network resources on the remote system. </p>
<p>If you do specify an alternative username/password, then PsExec will send the password in clear text. This can be a security risk if unauthorized network sniffers could intercept traffic between the local and remote system.</p>
<p>PsExec does not require you to be an administrator of the local filesystem, with the correct password psexec will allow <i>UserA</i> to run commands as <i>UserB</i> - a <a href="runas.html">Runas</a> replacement.</p>
<p>If you kill a PsExec process, you might also need to manually remove the background service:<br>
<span class="code">sc.exe \\workstation64 delete psexesvc</span></p>
<p>PsExec can also be used to start a process (on a remote or local machine) as SYSTEM, this is a very privileged account similar to root on a UNIX machine ~ use with extreme caution.</p>
<h2>Accept eula</h2>
<p>When launched for the first time, PsExec will create the license registry key:<br>
<span class="code">HKCU\Software\Sysinternals\PsExec\EulaAccepted=0x01</span></p>
<p>Psexec will swallow the first "-accepteula" on the commandline, no matter where it occurs, so when using psexec to run any other ps* utilities, you will have to pass "-accepteula" twice:</p>
<p class="code">psexec -accepteula -s c:\utils\pslist.exe -accepteula</p>
<p>Surround any long filenames "with quotation marks"</p>
<p>Error <a href="errorlevel.html">codes</a> returned by PsExec are specific to the applications you execute, not PsExec.</p>
<h2>Internal commands</h2>
<p>Internal commands (such as COPY, CD, DIR  etc) are only available within the CMD shell. To run these commands from PsExec you must call <a href="cmd.html">CMD /C</a> and then pass the commands as parameters - see the examples below. <br>
<br>
<b>Examples:</b><br>
<br>
Launch an interactive command prompt on \\workstation64, the CMD prompt window will appear locally:</p>
<p class="code">psexec \\workstation64 cmd</p>
<p>Execute a program that is already installed on the remote system:</p>
<p class="code">psexec \\workstation64 "c:\Program Files\test.exe"</p>
<p>Connect to  workstation64 and run <a href="ipconfig.html">IPCONFIG</a> to display the remote PC's IP address:</p>
<p class="code">psexec \\workstation64 ipconfig</p>
<p>Connect to  workstation64 and list a directory:</p>
<p class="code">psexec \\workstation64 -s cmd /c dir c:\work</p>
<p>Connect to workstation64 and copy a file from another server:</p>
<p class="code">psexec \\workstation64 -s cmd /c copy \\server21\share45\file.ext c:\localpath</p>
<p>Execute IpConfig on the remote system, and display the output locally:</p>
<p class="code">psexec \\workstation64 ipconfig /all</p>
<p>Copy the program test.exe to the remote system and execute it interactively, running under the account DannyGlover:</p>
<p class="code">psexec \\workstation64 -c test.exe -u DannyGlover -p Pa55w0rd </p>
<p>Run Internet Explorer on the local machine but with limited-user privileges:</p>
<p class="code">psexec -l -d "c:\program files\internet explorer\iexplore.exe"</p>
<p>Run Regedit on the local machine with SYSTEM privileges:</p>
<p class="code">psexec -s -i regedit.exe</p>
<p>From PowerShell, run a VBscript on a remote workstation and pass some parameters:</p>
<p class="code">PS C:&gt; $script='C:\Program Files\demo.vbs'<br>
PS C:&gt; $args = "some more text"<br> 
PS C:&gt; psexec -s \\workstation64 c:\windows\system32\cscript.exe $script $args</p>
<p class="quote"><i>“Don’t ask what the world needs. Ask what makes you come alive, and go do it. Because what the world needs is people who have come alive” - Howard Thurman</i></p>
<p><b>Related:</b></p>
<p><a href="http://forum.sysinternals.com/faq-common-pstools-issues_topic15920.html">FAQ: Common PSTools Issues</a><br>
<a href="https://support.microsoft.com/kb/942817">Q942817</a> - Remote UAC <span class="code">LocalAccountTokenFilterPolicy</span> setting (allow remote administration for Vista/Windows7)<br>
<a href="runas.html">RUNAS</a> - Execute a program under a different user account<br>
<a href="../links/windows.html#utils">xCMD</a> - 3rd party utility<br>
Equivalent PowerShell command: <a href="../ps/invoke-command.html">Invoke-Command</a><br>
Equivalent bash command (Linux): xon - start an X program on a remote machine</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="psexec.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

