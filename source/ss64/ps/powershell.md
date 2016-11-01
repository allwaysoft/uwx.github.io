---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Powershell </h1>
<p>Launch a PowerShell session.</p>
<pre>Syntax
      powershell[.exe] [-PSConsoleFile <i>file</i> | -Version <i>version</i>]
         [-NoLogo] [-NoExit] [-Sta] [-Mta] [-NoProfile] [-NonInteractive]
            [-InputFormat {Text | XML}] [-OutputFormat {Text | XML}]
               [-WindowStyle <i>Style</i>] [EncodedCommand <i>Base64EncodedCommand</i>]
                  [-File <i>FilePath Args</i>] [-ExecutionPolicy <i>ExecutionPolicy</i>]
                     [-Command { - | <i>script-block</i> [-args <i>arg-array</i>]
                                   | <i>string</i> [<i>CommandParameters</i>] } ]

      powershell[.exe] -Help | -? | /?
Key
 
   -PSConsole <i>File</i>   Load a PowerShell console file. (created with <a href="export-console.html">export-console</a>)

   -Version          Start the specified version of Windows PowerShell.

   -NoLogo           Hide the copyright banner at startup.

   -NoExit           Do not exit after running startup commands.

   -Sta              Start the shell using a single threaded apartment

   -Mta              Start the shell using a multi-threaded apartment

   -NoProfile        Do not use the user profile.

   -Noninteractive   Don't present an interactive prompt to the user.

   -InputFormat      Format of data sent to Windows PowerShell. Valid values are
                     "Text" (string) or "XML" (serialized CLIXML format). 

   -OutputFormat     Format the output. Valid values are "Text" (string)
                     or "XML" (serialized CLIXML format).
 

   -Command          Execute commands or a script file of commands 
                     If Command is "-", the command text is read from standard input.

   -WindowStyle      Set the window style to Normal, Minimised, Maximised or Hidden.

   -EncodedCommand   Accepts a base-64 encoded string version of a command, Use this to
                     submit commands to PowerShell that require complex quotation marks
                     or curly braces.

   -File             Execute a script file.

   -ExecutionPolicy  Set the default <a href="set-executionpolicy.html">execution policy</a> for the session.

   -Command          Execute the specified commands (and any parameters) as though they
                     were typed at the PowerShell prompt, and then exit, unless NoExit is specified.
                     The value of Command can be "-", a string. or a script block.

                     If the value of Command is "-", the command is read from standard input.

                     Script blocks must be enclosed in braces ({}).
                     Specify a script block only when running PowerShell.exe from PowerShell.

                     The results of the script are returned to the parent shell as
                     deserialized XML objects, not live objects.

                     If the value of Command is a string, it must be the last parameter
                     in the command , any characters typed after command are interpreted
                     as the command arguments.

                     To write a string that runs a PowerShell command, use the format:

                     "&amp; {<i>command</i>}"

                     where the quotation marks indicate a string and the <a href="call.html">call operator</a> (&amp;)
                     causes the command to be executed.

   -Help, -?, /?     Display Help</pre>
<p><br>
Standard <a href="get-alias.html">Aliases</a> for Powershell_ISE.exe:<span class="code"> ise</span></p>
<p>When launching a .ps1 script you may wish to specify <span class="code">-noprofile</span> to make sure that the script runs in a default PowerShell environment and does not load any profile scripts.</p>
<p>If you are launching PowerShell from a CMD shell and passing a command that includes any special characters (such as '<span class="code">%</span>') then you will have to apply a suitable <a href="../nt/syntax-esc.html#escape">CMD escape character</a> e.g. <span class="code">%%</span></p>
<h2>Exit Codes</h2>
<p>In PowerShell the <a href="exit-pssession.html">exit</a> code is stored in the automatic variable <span class="code">$LASTEXITCODE</span>.</p>
<p>To read exit codes (other than 0 or 1) launch the PowerShell script and return the <span class="code">$LASTEXITCODE</span> in a single line like this:</p>
<p><span class="code"><a href="powershell.html">powershell.exe</a> -noprofile C:\scripts\script.ps1; exit $LASTEXITCODE</span></p>
<p>
<b>Examples</b></p>
<p>Load a console and run a Script: </p>
<p><span class="code">PowerShell.exe -PSConsoleFile "C:\scripting\MyShell.psc1" -Command ". 'MyScript.ps1'"</span></p>
<p>Run a Script <a href="syntax-elevate.html">As Admin</a>: </p>
<p class="code">powershell.exe -noprofile -command "&amp;{ start-process powershell -ArgumentList '-noprofile -file MyScript.ps1' -verb RunAs}"</p>
<p>Run a command to display the security event log: </p>
<p class="code"> powershell.exe -command {get-eventlog -logname security}</p>
<p>Run a simple calculation and return (supports Long numbers): </p>
<p class="code"> powershell.exe 200000000*2</p>
<p>Or the same thing but calling PowerShell from the CMD shell:</p>
<p class="code"> powershell.exe -command "&amp; {get-eventlog -logname security}"</p>
<p>PS.cmd - a simple batch file to launch PowerShell with less typing:<span class="code"><br>
@echo off<br>
Powershell.exe %1</span></p>
<p class="quote">“If you want to launch big ships you have to go where the water is deep” ~ Anon</p>
<p><b>Related:</b></p>
<p><a href="index.html">List of all PowerShell cmdlets </a><br>
Equivalent bash command: <a href="../bash/index.html">bash</a> - launch bash shell</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="powershell.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

