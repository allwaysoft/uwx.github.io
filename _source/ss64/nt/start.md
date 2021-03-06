---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>START</h1> 
<p>Start a  program, command or batch script (opens in a new window.)</p>
<pre>Syntax
      START "<i>title</i>" [<b>/D </b><i>path</i>] [<i>options</i>] "<i>command</i>" [<i>parameters</i>]

Key:
   <i>title</i>       Text for the CMD window title bar (required.)
   <i>path</i>        Starting directory.
   <i>command</i>     The command, batch file or executable program to run.
   <i>parameters</i>  The parameters passed to the <i>command</i>.

Options:
   /MIN         Start window Minimized.
   /MAX         Start window Maximized.
   /W or /WAIT  Start application and wait for it to terminate.
                (for an internal cmd command or a batch file this runs <a href="cmd.html">CMD /K</a>)

   /LOW         Use IDLE priority class.
   /NORMAL      Use NORMAL priority class.
   /ABOVENORMAL Use ABOVENORMAL priority class.
   /BELOWNORMAL Use BELOWNORMAL priority class.
   /HIGH        Use HIGH priority class.
   /REALTIME    Use REALTIME priority class.<br>
   /B         Start application without creating a new window. In this case
              ^C will be ignored - leaving ^Break as the only way to 
              interrupt the application.
   /I         Ignore any changes to the current environment.
              Use the original environment passed to cmd.exe

   /NODE      The preferred <a href="https://en.wikipedia.org/wiki/Non-uniform_memory_access">Non-Uniform Memory Architecture</a> (NUMA)
              node as a decimal integer.

   /AFFINITY  The processor affinity mask as a <a href="../convert.html">hexadecimal</a> number.
              The process will be restricted to running on these processors.

<i>   Options for 16-bit WINDOWS programs only</i>

   /SEPARATE  Start in separate memory space. (more robust) 32 bit only.
   /SHARED    Start in shared memory space. (default) 32 bit only.</pre>
<p>Always include a <b>TITLE</b> this can be a simple string like "My Script" or just a pair of empty quotes ""<br>
According to the Microsoft documentation, the <i>title</i> is optional, but depending on the other options chosen you can have problems if  it is omitted.</p>
<p>If <span class="code"><i>command</i></span> is an internal cmd command or a batch file then                 the command processor is run with the /K switch to cmd.exe.                 This means that the window will remain after the command                 has been run.</p>
<p>  Document files can be invoked through their file association just by typing 
  the name of the file as a command. <br>
  e.g. <span class="code">START "" MarchReport.DOC</span> will launch the application associated with the .DOC file 
extension and load the document. </p>
<p>To minimise any chance of the wrong exectuable being run, specify the full path to <i>command</i> and/or (at a minimum) include the file extension: <span class="code">START notepad<b>.exe</b></span></p>
<p>If you START an application without a file extension (for example <span class="code">WinWord</span> instead of <span class="code">WinWord.exe)</span>then the <a href="syntax-variables.html">PATHEXT</a> environment variable will be read to determine 
which file extensions to search for and in what order. The default value for the PATHEXT variable is:<span class="code"> .COM;.EXE;.BAT;.CMD</span></p>
<h2>Multiprocessor systems</h2>
<blockquote>
<p>Processor affinity is assigned as a hex number but calculated from the binary positions (similar to <a href="syntax-nodrives.html">NODRIVES</a>) </p>
<p>Hex  Binary &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Processors<br>
<span class="code"> &nbsp;1  00000001 Proc 1</span>&nbsp;<br>
<span class="code"> &nbsp;3  00000011 Proc 1+2</span><br>
<span class="code">&nbsp;7  00000111 Proc 1+2+3</span><br>
<span class="code">&nbsp;C  00001100 Proc 3+4 </span> etc</p>
<p>Specifying /NODE allows processes to be created in a way that leverages memory locality on <abbr title="Non-uniform memory access">NUMA</abbr> systems.  For example, two processes that communicate with each other heavily through shared memory can be created to share the same preferred NUMA node in order to minimize memory latencies.  They allocate memory from the same NUMA node when possible, and they are free to run on processors outside the specified node.     </p>
<p class="code">start /NODE 1 app1.exe<br>
start /NODE 1 app2.exe </p>
<p> These two processes can be further constrained to run on specific processors within the same NUMA node.  </p>
<p>In the following example, app1 runs on the low-order two processors of the node, while app2 runs on the next two processors of the node.  This example assumes the specified node has at least four logical processors.  Note that the node number can be changed to any valid node number for that computer without having to change the affinity mask.</p>
<p class="code"> start /NODE 1 /AFFINITY 0x<b>3</b> app1.exe <br>
start /NODE 1 /AFFINITY 0x<b>c</b> app2.exe</p>
</blockquote>
<h2> Running executable (.EXE) files</h2>
<blockquote>
<p>When a file that contains a .exe header, is invoked  from a CMD prompt or batch file (with or without START),   it will be opened as an executable file. The filename extension does not have to be .EXE. The file header  of executable files start with the 'magic sequence' of ASCII characters 'MZ' (0x4D, 0x5A) The  'MZ' being the initials of <a href="https://en.wikipedia.org/wiki/Mark_Zbikowski">Mark Zibowski</a>, a Microsoft employee at the time the file format was designed.</p>
</blockquote>
<h2>Command Extensions</h2>
<blockquote>
<p>If Command Extensions are enabled, external command invocation through the command line or the START command changes as follows: </p>
<p>Non-executable files can be invoked through their file association just     by typing the name of the file as a command.  (e.g.  WORD.DOC would     launch the application associated with the .DOC file extension).     This is based on the setting in <span class="code">HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.ext\OpenWithList</span>, or if that is not specified, then the file associations - see <a href="assoc.html">ASSOC</a> and <a href="ftype.html">FTYPE</a>. </p>
<p>When executing a 32-bit GUI application, CMD.EXE     does not wait for the application to terminate before returning to     the command prompt.  This new behavior does NOT occur if executing     within a command script.</p>
<blockquote>
<p> In Windows XP this requires the use of  start /wait:<br>
<span class="code"> start /wait /b First.exe<br>
start /wait /b Second.exe</span><br>
</p>
</blockquote>
<p>When executing a command line whose first token is the string <span class="code">CMD</span> without an extension or path qualifier, then <span class="code">CMD</span> is replaced with the value of the COMSPEC variable.  This prevents picking up CMD.EXE from the current directory. </p>
<p>When executing a command line whose first token does NOT contain an extension, then CMD.EXE uses the value of the <a href="syntax-variables.html">COMSPEC environment variable</a>. This prevents picking up CMD.EXE     from the current directory.</p>
<p>When executing a command line whose first token does NOT contain an     extension, then CMD.EXE uses the value of the PATHEXT     environment variable to determine which extensions to look for     and in what order.  The default value for the PATHEXT variable     is: <span class="code">.COM;.EXE;.BAT;.CMD</span> Notice the syntax is the same as the <a href="path.html">PATH</a> variable, with     semicolons separating the different elements.</p>
<p>When searching for an executable, if there is no match on any extension, then looks to see if the name matches a directory name.  If it does, the START command launches the Explorer on that path. If done from the command line, it is the equivalent to doing a CD /D to that path.</p>
</blockquote>
<h2>Errorlevels</h2>
<blockquote>
<p>If the command is successfully started <a href="errorlevel.html">%ERRORLEVEL%</a> = <i>unchanged</i> (possibly a bug)<br>
If the command fails to start then ERRORLEVEL = 9059<br>
<span class="code">START /WAIT <i>batch_file</i></span> - will return the ERRORLEVEL  specified by <a href="exit.html">EXIT</a><br>
</p>
</blockquote>
<h2>Examples</h2>
<p>Run a minimised Login script:<br>
<span class="code"> START "My Login Script" /Min Login.cmd</span></p>
<p>Start a program and wait for it to complete before continuing:<br>
<span class="code"> START "" /wait autocad.exe</span></p>
<p>Open a file with a particular program<span class="code">:<br>
START "" "C:\Program Files\Microsoft Office\Winword.exe" "D:\Docs\demo.txt"</span></p>
<p>Open  Windows Explorer and list the files in the current folder (.) :<br>
<span class="code">C:\any\old\directory&gt; START .</span></p>
<p>Connect to a  new printer:  (this will setup the print connection/driver )<br>

  <span class="code">START \\print_server\printer_name</span><br>
  <br>
Start an application and specify where files will be saved (Working Directory):<br>
  <span class="code">START /D C:\Documents\ /MAX "Maximised Notes" notepad.exe<br>
  </span></p>
<p>START is an <a href="syntax-internal.html">internal</a> command.<br>
</p>
<p><i class="quote"> “Do not run; scorn running with thy heels” ~ Shakespeare, The Merchant of Venice</i><br>
<br>
<b>Related:</b></p>
<p><a href="wmic.html">WMIC process call create</a> <span class="code">"c:\some.exe","c:\exec_dir"</span>   - This method returns the PID of the started process.<br>
<a href="call.html">CALL</a> - Call one batch program from another <br>
<a href="cmd.html">CMD</a> - can be used to call a subsequent batch and ALWAYS 
return even if errors occur.<br>
Powershell: <a href="../ps/invoke-item.html">Invoke-Item</a> - Invoke an executable or open a file (ii)<br>
<a href="https://support.microsoft.com/kb/162059">Q162059</a> - Opening Office 
documents<br>
  Equivalent bash command (Linux) : <a href="../bash/open.html">open</a> - Open a file in its default application.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="start.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
