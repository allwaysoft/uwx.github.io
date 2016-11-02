---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Process</h1> 
<p>Get  a list of processes running on a machine</p>
<pre>Syntax
      Get-Process [[<b>-name</b>] <i>string</i>[]] [-ComputerName <i>string</i>[]]
         [-FileVersionInfo] [-Module] [<i>CommonParameters</i>]
    
      Get-Process <b>-id</b> <i>Int32</i>[] [-ComputerName <i>string</i>[]]
         [-FileVersionInfo] [-Module] [<i>CommonParameters</i>]
    
      Get-Process <b>-inputObject</b> <i>Process</i>[] [-ComputerName <i>string</i>[]]
         [-FileVersionInfo] [-Module] [<i>CommonParameters</i>]

Key
   -name 
       Process name(s)
       Separate multiple process names with commas or use wildcard characters. 
       The -Name is optional.
        
   -inputObject 
       Accept process object(s) as input to Get-Process.  
       A variable, command or expression that returns the process object(s)
        
   -id <i>Int32</i>
       Process ID(s) (PID). Use commas to separate multiple PIDs.
       To find the PID of a process, type "get-process".

   -ComputerName <i>string</i>[]
       Get the processes running on the specified computers.
       The default is the local computer.  

       Type the NetBIOS name, an IP address, or a fully qualified domain name
       of one or more computers. 
       To specify the local computer, type the computer name, a dot (.), or "localhost".

       This parameter does not rely on PowerShell remoting.

   -FileVersionInfo
       Get the file version information for the program that runs in the process. 

       On Windows Vista and later versions of Windows, you must open PowerShell with
       the "Run as administrator" option to use this parameter on processes that you do not own.

       Using this parameter is equivalent to getting the MainModule.FileVersionInfo property
       of each process object. When you use -FileVersionInfo, Get-Process returns a FileVersionInfo object
       (System.Diagnostics.FileVersionInfo), not a process object. So in this case, you cannot pipe 
       the output to a cmdlet that expects a process object, such as Stop-Process.

   -Module
       Get the modules that have been loaded by the processes.
       On Windows Vista and later versions of Windows, you must open PowerShell with
       the "Run as administrator" option to use this parameter on processes that you do not own.

       This parameter is equivalent to getting the Modules property of each process object.
       When you use this parameter, Get-Process returns a ProcessModule object
       (System.Diagnostics.ProcessModule), not a process object. So in this case, you cannot pipe
       the output of the command to a cmdlet that expects a process object, such as Stop-Process.

       If both -Module and -FileVersionInfo  are specified in the same command,
       Get-Process returns a FileVersionInfo object with information about the file version of all modules.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Get-Process:<span class="code"> ps, <b>gps</b></span></p>
<p><b>Examples</b></p>
<p>List  all  the  processes running on the local PC: </p>
<p class="code">PS C:&gt; get-process</p>
<p>List all available data about  Winword and Explorer processes on this computer: </p>
<p class="code">PS C:&gt; get-process winword, explorer | format-list *</p>
<p>List  the available properties of process objects: </p>
<p class="code">PS C:&gt; Get-Process | Get-Member</p>
<p>Get the  process of the current PowerShell session: </p>
<p class="code">PS C:&gt; Get-Process -id $pid </p>
<p>List the top 5 processes using the most CPU time: </p>
<p class="code">PS C:&gt; Get-Process | sort CPU | select -last 5</p>
<p>Get all processes that have a working set greater than 20 MB: </p>
<p class="code">PS C:&gt; get-process | where-object {$_.WorkingSet -gt 20000000}</p>
<p>List  processes grouped by priority.: </p>
<p class="code">PS C:&gt; $a = get-process<br>
   PS C:&gt; get-process -inputobject $a | format-table -view priority</p>
<p>List all processes beginning with "s", and see when each running program was last updated. (newly updated executables can be a sign of a malware infection) This is done by piping the pathname of each executable into DIR and sorting by the last write time:</p>
<p class="code">PS C:&gt; get-process s*|where {s$_.Path} | dir | sort LastWriteTime | <br>
format-table fullname, name,@{label="LastWriteTime";Expr={$_.LastWriteTime}</p>
<p>Get all the processes from several machines and display the memory usage: </p>
<pre>$procs = get-process -computername server64,server65 |sort "WorkingSet"
foreach($proc in $procs)
{
   $NonPagedMem = [int]($proc.NPM/1024)
   $WorkingSet = [int64]($proc.WorkingSet64/1024)
   $VirtualMem = [int]($proc.VM/1MB)
   $id= $proc.Id
   $machine = $proc.MachineName
   $process = $proc.ProcessName
   $procdata = new-object psobject
   $procdata | add-member noteproperty NonPagedMem $NonPagedMem
   $procdata | add-member noteproperty WorkingSet $WorkingSet 
   $procdata | add-member noteproperty machine $machine
   $procdata | add-member noteproperty process $process

$procdata | Select-Object machine,process,WorkingSet,NonPagedMem
}</pre>
<p>Note that on 64 bit systems, some processes can have a very large working set that will overflow the Int32 value producing a negative number. </p>
<p class="quote"><i>“Life is a process of becoming, a combination of states we have to go through. Where people fail is that they wish to elect a state and remain in it. This is a kind of death” ~ Anaïs Nin</i></p>
<p><b>Related:</b><br>
<br>
<a href="stop-process.html">Stop-Process</a> - Stop a running process (kill) <br>
Equivalent bash command: <a href="../bash/ps.html">ps</a> - <span class="body">Process status</span></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

