---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Stop-Process</h1> 
<p>Stop one or more running processes. (<span class="code">Kill</span>)</p>
<pre>Syntax
      Stop-Process -name <i>string</i>[] [-passThru] [-Force]
            [-confirm] [-whatIf] [<i>CommonParameters</i>]
    
      Stop-Process [-id] <i>Int32</i>[] [-passThru] [-Force]
            [-confirm] [-whatIf] [<i>CommonParameters</i>]
    
      Stop-Process -inputObject <i>Process</i>[] [-passThru] [-Force]
            [-confirm] [-whatIf] [<i>CommonParameters</i>]
Key
   -Name 
       Process name(s)
       Separate multiple process names with commas or use wildcard characters. 

   -id <i>Int32</i>
       Process ID(s) (PID). Use commas to separate multiple PIDs.
       To find the PID of a process, type "get-process".
   
   -inputObject 
       Accept a process object as input to Stop-Process.  
       A variable, command or expression that returns the process object(s)

   -PassThru 
       Pass the object created by Stop-Process along the pipeline. 

   -Force
       Stop the specified processes without prompting for confirmation.
       By default, Stop-Process prompts for confirmation before stopping
       any process that is not owned by the current user.

       To find the owner of a process, use Get-WmiMethod to get
       a Win32_Process object that represents the process, and then
       use the GetOwner method of the object.

   -WhatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   -Confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Stop-Process: <span class="code">kill, </span><b><span class="code">spps</span></b></p>
<p>Stop-Process works only on processes running on the local computer.<br>
<br>
On Vista and later versions of Windows, to stop a process that is not owned by the current user, you must start PowerShell with "Run as administrator".</p>
<p><b>Examples</b></p>
<p>Stop all instances of the Notepad process:</p>
<p><span class="code">PS C:\&gt; stop-process -name notepad</span><br>
<br>
Stop process ID# 6464 and prompt before stopping the process (this will display the process name first):</p>
<p class="code">PS C:\&gt; stop-process -id 6464 -confirm -passthru</p>
<p>Display  processes that were running on the computer, but are now stopped:</p>
<p class="code">PS C:\&gt; get-process | where-object {$_.HasExited}</p>
<p class="quote"><i>"Whom the gods love dies young" ~ Menander 300 BC </i></p>
<p><b>Related:</b></p>
<p><a href="invoke-command.html">Invoke-Command</a> -   Run commands on local and remote computers.<br>
<a href="start-process.html">Start-Process</a> -  Start one or more processes, optionally as a specific user.<br>
<a href="get-process.html">Get-Process</a> - Get a list of processes on a machine.<br>
<a href="start-process.html">Start-Process</a> - Start one or more processes.<br>
<span class="code"><a href="stop-parsing.html">--%</a></span> - Stop parsing input as PowerShell commands.<br>
Equivalent bash command: <a href="../bash/kill.html">kill</a> - Stop a process from running</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="stop-process.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

