---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>WHERE (Windows 2003 + )</h1> 
<p> Locate and display files in a directory tree. <br>
  <br>
  The WHERE command is roughly equivalent to the UNIX 'which' command. By default, the search is done in the <a href="cd.html">current directory</a> 
and in the <a href="path.html">PATH</a>.
</p><pre>Syntax
      WHERE [/r <i>Dir</i>] [/q] [/f] [/t] <i>Pattern</i> ...

      WHERE [/q] [/f] [/t] [$<i>ENV</i>:<i>Pattern</i>

key
   /r      A recursive search, starting with the specified <i>Dir</i> directory.

   /q      Don’t display the files but return either an exit code of 0 for success
           or 1 for failure.

   /f      Display the output file name in quotation marks.

   /t      Display the size, time stamp, and date stamp of the file.

  <i>pattern</i>  The Drive\Directory\file, or set of files to be found.
           you can use wildcard characters ( ? * ) and UNC paths.

   <i>ENV</i>     Path to search where <i>ENV</i> is an existing environment variable containing one or more paths.</pre>
<p>By default, WHERE searches the current directory and the paths specified in the PATH environment variable. Optional search paths (in <i>pattern</i>) should not be used in conjunction with <span class="code">/r Dir</span>.</p>
<p><b>Examples</b></p>
<p>Find all files named 'Zappa' in the current system path</p>
<p><span class="code">WHERE  Zappa</span><br>
<br>
Find all files named 'Zappa' on the remote computer 'Server64' searching 
its subdirectories:<br>
<br>
<span class="code">WHERE /r \\Server64\Share1 Zappa.* </span></p>
<p><i class="quote">“Who never walks, save where he sees men's tracks, makes no discoveries” ~ Josiah Gilbert Holland </i><br>
<br>
<b>Related:</b></p>
<p><a href="syntax-which.html">Which.cmd</a> - Show full path to executable.<br>
<a href="http://www.flounder.com/whereis.htm">whereis utility</a> - Flounder.com<br>
<a href="http://www.robvanderwoude.com/unixports.php#WHICH">Which </a>  - Rob Vanderwoude (Batch/Perl/VBScript) <br>
<a href="http://blogs.msdn.com/oldnewthing/archive/2005/01/20/357225.aspx">OldNewthing</a> - which batch file + discussion <br>
<a href="cd.html">CD</a> - Change Directory<br>
<a href="type.html">TYPE</a> - Display the contents of a text file <br>
Equivalent bash command (Linux): <a href="../bash/which.html">which</a> - Show full path of commands<br>
Equivalent PowerShell cmdlet: <span class="code">(<a href="../ps/get-command.html">get-command</a> $file).Definition</span><br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="where.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

