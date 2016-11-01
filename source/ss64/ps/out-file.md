---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Out-File</h1> 
<p>Send output to a file. When you wish to specify parameters, use Out-File instead of the redirection operator (&gt;).</p>
<pre>Syntax
      Out-File [-filePath] <i>string</i> [[-encoding] <i>string</i>]
            [-append] [-width <i>int</i>] [-inputObject <i>psobject</i>]
               [-force] [-noClobber] [-whatIf]
                  [-confirm] [<i>CommonParameters</i>]
Key
   -filePath <i>path</i>
       The path to the output file. 
   
   -encoding <i>string</i>
       The character encoding used in the file. 
       "Unicode", "UTF7", "UTF8", "UTF32", "ASCII", "BigEndianUnicode",
       "Default", or "OEM". The default is Unicode.
       Default=system ANSI code page. 
       OEM=OEM code page identifier for the OS.

   -append 
       Add the output to the end of an existing file, instead of replacing 
       the file contents.

   -width <i>int</i>
       The number of characters in each line of output. Any additional
       characters are truncated, not wrapped. If you omit this parameter, 
       the width is determined by the characteristics of the host. The default 
       for the PowerShell.exe host is 80 (characters).

   -inputObject <i>psobject</i>
       The object to be written to file. {may be piped}
       A command, expression or variabale that contains the objects.

   -force 
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. Force will create file path directories 
       or override a files read-only attribute, but will not change file permissions.
        
   -noClobber 
       Do not overwrite (replace the contents) of an existing file. 
       By default Out-File will overwrite an existing file without warning.
       If both -Append and -NoClobber are specified, the output is appended.
        
   -whatIf
       Describe what would happen if you executed the command without
       actually executing the command.
        
   -confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>If the current location is a registry key, then <span class="code">-filepath</span> must either be specified as<span class="code"> filesystem::yourfilename.txt </span>or use a full path C:\docs\yourfile.txt</p>
<p>The final part of displaying output is a hidden background call to an Output cmdlet, by default as the last part of the execution process PowerShell calls the default output cmdlet which is typically Out-Host.</p>
<p><b>Examples</b></p>
<p>Send a list of processes  to  process.txt:</p>
<p><span class="code">PS C:\&gt; get-process | out-file -filepath C:\docs\process.txt</span><br>
<span class="code">PS C:\&gt; get-process | out-file C:\docs\process.txt</span><br>
  <br>
  The same thing, but storing the list of processes in a variable first and truncating the output at 50 characters:</p>
<p class="code">PS C:\&gt; $a = get-process<br>   
out-file -filepath C:\docs\process.txt -inputobject $a -width 50</p>
<p>Save a registry key to file :</p>
<p class="code">PS C:\&gt; set-location hklm:\software<br>
PS HKLM:\software&gt; get-acl ODBC | out-file c:\docs\acl.txt -width 200 </p>
<p class="quote"><i>"Imagine sitting at your computer and, in less than a second, searching the full text of every book ever written" ~ <a href="http://googleblog.blogspot.com/2005/10/point-of-google-print.html">Eric Schmidt</a></i></p>
<p><b>Related:</b><br>
  <br>
<a href="out-default.html">Out-Default</a> - Send output to default<br>

<a href="out-host.html">Out-Host</a> - Send the pipelined output to the host <br>
<a href="out-null.html">Out-Null</a> - Send output to null <br>
<a href="out-printer.html">Out-Printer</a> - Send the output to a printer <br>
<a href="out-string.html">Out-String</a> - Send output to the pipleline as strings<br>
<a href="tee-object.html">Tee-Object</a> - Send input objects to two places<br>
Equivalent bash commands: <a href="../bash/syntax-redirection.html">redirection</a> - Redirection and Process Substitution, <a href="../bash/cat.html">cat</a> &gt; file2.txt – Redirect standard input into a file</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="out-file.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

