---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-PSBreakpoint</h1> 
<p>Set a breakpoint on a line, command, or variable.</p>
<pre>Syntax
      Set-PSBreakpoint <b>-Command</b> <i>string</i>[][[-Script] <i>string</i>[]]
         [-Action <i>scriptblock</i>] [<i>CommonParameters</i>]
    
      Set-PSBreakpoint [<b>-Script</b>] <i>string</i>[] [-Line] <i>Int32</i>[]
         [[-Column] <i>int</i>] [-Action <i>scriptblock</i>] [<i>CommonParameters</i>]
      
      Set-PSBreakpoint <b>-Variable</b> <i>string</i>[] [-Script <i>string</i>[]]
         [-Mode {Read | <u>Write</u> | ReadWrite}] [-Action <i>scriptblock</i>] [<i>CommonParameters</i>]

Key
   -Action <i>scriptblock</i>
       Commands that run at each breakpoint instead of breaking.
       Enter a script block that contains the commands. Use this parameter to set
       conditional breakpoints or to perform other tasks, such as testing or logging.

       If this parameter is omitted, or no action is specified, execution stops at the
       breakpoint, and the debugger starts.

       When -Action is used, the Action script block runs at each breakpoint.
       Execution does not stop unless the script block includes the Break keyword.
       If you use the Continue keyword in the script block, execution resumes until the next breakpoint.
       see about_Script_Blocks, about_Break, and about_Continue.

   -Column <i>int</i>
       The column number of the column in the script file on which execution stops.
       Enter only one column number. The default is column 1. 

       The Column value is used with the value of the Line parameter to specify the breakpoint.
       If the Line parameter specifies multiple lines, the Column parameter sets a breakpoint
       at the specified column on each of the specified lines.
       PowerShell stops executing before the statement or expression that includes the character at
       the specified line and column position. 

       Columns are counted from the top left margin beginning with column number 1 (not 0).
       If you specify a column that does not exist in the script, an error is not declared, but
       the breakpoint is never executed.

   -Command <i>string</i>[]
       Set a command breakpoint.
       Enter command names, such as "Get-Process" or function names. Wildcards are permitted.

       Execution stops just before each instance of each command is executed.
       If the command is a function, execution stops each time the function is called and at
       each BEGIN, PROCESS, and END section.

   -Line <i>Int32</i>[]
       Set a line breakpoint in a script.
       Enter one or more line numbers, separated by commas. 
       PowerShell stops immediately before executing the statement that begins on each
       of the specified lines.

       Lines are counted from the top left margin of the script file beginning with line
       number 1 (not 0). If you specify a blank line, execution stops before the next non-blank
       line. If the line is out of range, the breakpoint is never hit.

   -Mode {Read | <u>Write</u> | ReadWrite}
       The mode of access that triggers variable breakpoints.
       The default is Write.

       This parameter is valid only when the -Variable parameter is used in the command.
       The mode applies to all breakpoints set in the command.

       Valid values are:

          Write      Stop execution immediately before a new value is written to the variable.

          Read       Stops execution when the variable is read
                     when its value is accessed, either to be assigned, displayed, or used.
                     In read mode, execution does not stop when the value of the variable changes.

          ReadWrite  Stop execution when the variable is read or written.

   -Script <i>string</i>[]
       Set a breakpoint in each of the specified script files.
       Enter the paths and file names of one or more script files.
       If the files are in the current directory, you can omit the path. Wildcards are permitted.

       By default, variable breakpoints and command breakpoints are set on
       any command that runs in the current session.
       This parameter is required only when setting a line breakpoint.
               
   -Variable <i>string</i>[]
       Set a variable breakpoint.
       Enter a comma-separated list of variables without dollar signs ($).

       Use the Mode parameters to determine the mode of access that triggers
       the breakpoints. The default mode, Write, stops execution just before a new
       value is written to the variable.<a href="common.html">

   CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> Standard <a href="get-alias.html">Aliases</a> for Set-PSBreakpoint:<span class="code"> <b>sbp</b></span></p>
<p>Use Set-PSBreakpoint to set a breakpoint before executing a script or running a command, or during debugging, when stopped at another breakpoint. 
Set-PSBreakpoint cannot set a breakpoint on a remote computer.</p>
<p>Breakpoints may be set on multiple <b>lines</b>, <b>commands</b>, or <b>variables</b>, but each Set-PSBreakpoint command will set only one type of breakpoint. </p>
<p><b>Examples</b></p>
<p>Set a breakpoint at line 5 in the Sample.ps1 script.: </p>
<pre>PS C:&gt; set-psbreakpoint -script sample.ps1 -line 5</pre>
<p>Create a command breakpoint on the Increment function in the Sample.ps1 cmdlet:</p>
<pre>PS C:&gt; set-psbreakpoint -command Increment -script sample.ps1
</pre>
<p>Create a  global variable called $today, each time its content is accessed, it will return the current time and date:</p>
<pre>PS C:&gt; $global:today = Set-PSBreakpoint -Variable today -Mode Read -Action { $global:today = <a href="get-date.html">Get-Date</a> }</pre>
<p>Stop execution at the DiskTest function in the Test.ps1 script only when the value of the $disk variable is greater than 2, The action uses the BREAK keyword to stop execution if the condition is met. The alternative (and the default) is CONTINUE:</p>
<pre>PS C:&gt; set-psbreakpoint -script test.ps1 -command DiskTest -action { (if $disk -gt 2) { break } }</pre>
<p class="quote">"If you want the ultimate, you've got to be willing to pay the ultimate price. It's not tragic to die doing what you love" ~ Bohdi (Point Break)</p>
<p><b>Related:</b></p>
<p><a href="enable-psbreakpoint.html">Enable-PSBreakpoint</a>   -   Enable breakpoints in the current console</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

