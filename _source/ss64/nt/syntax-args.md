---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Command Line arguments (Parameters)</h1> 
<p>A command line argument (or parameter) is any value passed into a batch script:</p>
<p class="code">C:&gt; MyScript.cmd January 1234 "Some value" </p>
<p> Arguments can also be passed to a subroutine with CALL:</p>
<p class="code">CALL :my_sub 2468 </p>

<p>  You can get the value of any argument using a % followed by it's numerical position on the command line. The first item passed is always %1 the second 
  item is always %2 and so on 
</p><p><span class="code">%*</span> in a batch script refers to all the arguments (e.g. %1 %2 %3 %4 %5 ...%255) <br>
only arguments %1 to %9 can be referenced by number. </p>
<h2>Parameter Extensions</h2>
<blockquote>
<p>  When an argument is used to supply a filename then the following 
  extended syntax can be applied: <br>
  <br>
we are using the variable %1 (but this works for any parameter)</p>
<p>  <span class="code">%~f1</span> Expand %1 to a Fully qualified path name - <span class="code">C:\utils\MyFile.txt</span><br>
  <span class="code"><br>
  %~d1</span> Expand %1 to a Drive letter only - <span class="code">C:</span><br>
  <br>
  <span class="code">%~p1</span> Expand %1 to a Path only e.g. <span class="code">\utils\</span>  this includes a trailing<span class="code"> \ </span>which will be interpreted as an <a href="syntax-esc.html#escape">escape character</a> by some commands.<br>
  <br>
  <span class="code">%~n1</span> Expand %1 to a file Name without file extension <span class="code">C:\utils\MyFile</span>  or if only a path is present (with no trailing backslash\) - the last folder 
  in that path.<br>
  <br>
  <span class="code">%~x1</span> Expand %1 to a file eXtension only - <span class="code">.txt</span><br>
  <br>
  <span class="code">%~s1</span> Change the meaning of <span class="code">f</span>, <span class="code">n</span>, <span class="code">s</span> and <span class="code">x</span> to reference the Short 8.3 name (if it exists.)  <br>
<br>
<span class="code">%~1</span> &nbsp;&nbsp;Expand %1 removing any <a href="syntax-dequote.html">surrounding quotes</a> (")<br>
<br>    
<span class="code">%~a1</span> Display the file attributes of %1<br>
<br>    
<span class="code">%~t1</span> Display the date/time of %1<br>
<br>    
<span class="code">%~z1</span> Display the file size of %1<br>
<br>    
<span class="code">%~$PATH:1</span> Search the PATH environment variable and expand %1 to the fully qualified name of the first match found.
</p>
</blockquote>
<p>The modifiers above can be combined:
</p><blockquote>
<p><span class="code">%~dp1</span> Expand %1 to a drive letter and path only</p>
<p><span class="code">%~sp1</span> Expand %1 to a path shortened to 8.3 characters<br>
  <br>
<span class="code">%~nx2</span> Expand %2 to a file name and extension only</p>
</blockquote>
<p>These parameter/ argument variables are always denoted with a single leading <span class="code">%</span><br>
This is unlike regular <a href="syntax-variables.html">variables</a> which have both leading and trailing <span class="code">%'s</span> such as <span class="code">%variable%</span>, or <a href="for.html">FOR</a> command variables which use a single leading <span class="code">%</span> on the command line or a double leading <span class="code">%%</span> when used in a batch file.
</p><p>if a filename with no drive letter/path is expanded to display a drive letter/path the command shell will assume; often incorrectly; that the file resides in the <a href="cd.html">current</a> directory.
</p><p>When writing batch scripts  it's a good idea to store the values in a variable <span class="code">SET _LogFile=%~dp1</span>, the rest of the script can then refer to the easy-to-read variable name <span class="code">%_LogFile%</span> This will also make life easier if you later need to change around the order of the parameters.
</p><h2>Tokenization</h2>
<blockquote>
<p>Tokenization of the command line arguments is not always done by the cmd.exe shell. Most often the tokenization is done by the newly formed processes'  runtime, at the OS level, Windows passes a command line untokenized as a single string to the new process.  You can read more about the low-level details of the batch language/cmd escaping from the excellent answers by jeb and dbenham on <a href="http://stackoverflow.com/questions/4094699/how-does-the-windows-command-interpreter-cmd-exe-parse-scripts">this StackOverflow question</a>.
</p>
</blockquote>
<h2>Passing by Reference</h2>
<blockquote>
<p>In addition to passing numeric or string values on the command line, it is also possible to pass a <a href="syntax-variables.html">variable</a> name and then use the variable to transfer data between scripts or subroutines. Passing by reference is a slightly more advanced technique but can be particularly useful when the string contains characters that are CMD <a href="syntax-esc.html#delimiters">delimiters</a> or quotes.
</p>
</blockquote>
<h2> Links relative to the Batch Script</h2>
<blockquote>
<p> You can get the pathname of the batch script itself with <span class="code">%0</span>, parameter extensions can be applied to this so <span class="code">%~dp0</span> will return the Drive and Path to the batch script e.g. <span class="code">W:\scripts\</span> and <span class="code">%~f0</span> will return the full pathname <span class="code">W:\scripts\mybatch.cmd</span></p>
<p>You can refer to other 
  files in the same folder as the batch script by using this syntax:</p>
<pre>  CALL %0\..\SecondBatch.cmd</pre>
<p> This can even be used in a <a href="call.html">subroutine</a>, <span class="code">Echo %0</span> will give the call label but, <span class="code">echo "%~nx0"</span> will give you the filename of the batch script.<a id="Thanksto_Rob_Hubbard_forfindingthis"></a>
</p>
<p> When the %0 variable is expanded, the result is enclosed in quotation marks.
</p>
</blockquote>
<h2><a id="attributes"></a>Use <span class="code">%~a1</span> to display the Extended Attributes of a file.</h2>
<blockquote>
<p>FOR's <span class="code">%%~aI </span> recognizes 9 NTFS file <a href="attrib.html">attributes</a>. The expansion of a file attribute produces a series of 9 dashes, with each recognized attribute replacing a dash with a letter. A file with no recognized attributes or with none set will  expand to 9 dashes like this: <span class="code">---------</span>
</p>
<pre> Attribute                    Expansion 
 FILE_ATTRIBUTE_DIRECTORY     d-------- 
 FILE_ATTRIBUTE_READONLY      -r------- 
 FILE_ATTRIBUTE_ARCHIVE       --a------ 
 FILE_ATTRIBUTE_HIDDEN        ---h----- 
 FILE_ATTRIBUTE_SYSTEM        ----s---- 
 FILE_ATTRIBUTE_COMPRESSED    -----c--- 
 FILE_ATTRIBUTE_OFFLINE       ------o-- 
 FILE_ATTRIBUTE_TEMPORARY     -------t- 
 FILE_ATTRIBUTE_REPARSE_POINT --------l
 FILE_ATTRIBUTE_NORMAL        --------- </pre>
<p>Other NTFS attributes not recognised by  <span class="code">%%~aI</span> can be read using <a href="attrib.html#attributes">FSUTIL usn command</a>: <br>
 <span class="code">FILE_ATTRIBUTE_ENCRYPTED <br>
FILE_ATTRIBUTE_NOT_CONTENT_INDEXED <br>
FILE_ATTRIBUTE_SPARSE_FILE 
</span>
</p>
<p>Example:   Expansion of a file with the Hidden and System attributes:<br>
<span class="code">---hs----</span>
</p>
</blockquote>
<h2>Maximum line length</h2>
<blockquote>
<p>The maximum length of any command line (or variable) within CMD is <a href="https://support.microsoft.com/en-gb/kb/830473">8191</a> characters.</p>
</blockquote>
<h2>Terminology: Command-line Argument or Parameter?</h2>
<blockquote>
<p>In mathematical terms a <b>parameter</b> is <i>"a numerical or other measurable factor"</i> so typically a number.</p>
<p>In programming terminology:<br>
A parameter represents a value that the procedure expects you to pass when you call it.<br>
An argument represents the actual value that you pass to a procedure.</p>
<p> In practice the phrases <i>argument</i> and <i>parameter</i> tend to be used interchangeably,  CMD batch files do not perform any type checking.</p>
</blockquote>
<h2>FOR  parameters</h2>
<blockquote>
<p>The <a href="for.html">FOR</a> command creates parameter variables which are identified with a letter rather than a number (e.g. <span class="code">%%G</span>). <br>
The Parameter Expansions described above can also be applied to these. <br>
To avoid confusion between the two sets of letters,  avoid using  the letters (a, d, f, n, p, s, t, x, z) as FOR parameters or just choose a FOR parameter letter that is UPPER case.<br>
So for example in a reference like <span class="code">%%~fG</span> the <span class="code">%%G</span> is the FOR parameter, and the <span class="code">~f</span> is the Parameter Expansion. </p>
</blockquote>
<p><b>Examples: </b>
</p><p>  Pass parameters from one batch to another: 
</p><pre>   MyBatch.cmd SMITH 100</pre>
<p> Or as part of a <a href="call.html">CALL</a> :</p>
<pre>   CALL MyBatch.cmd SMITH 100</pre>
<p> Get the file size of <span class="code">C:\demo\sample.xlsx</span> using the <span class="code">%~z</span> parameter extension:<br>
</p>
<pre>   @Echo off
   For %%G in ("C:\demo\sample.xlsx") do set _var=%%~zG
   Echo File size is %_var%</pre>
<p> Passing values from one part of a script to another:
</p><pre>   :: Using <a href="call.html">CALL</a> to jump to a subroutine
   CALL :s_staff SMITH 100

   :: Calling a subroutine from a <a href="for.html">FOR</a> command
   FOR /F %%G IN ('DIR /b *.*') DO call :s_subroutine %%G</pre>
<p class="quote"><i>“A gift is pure when it is given from the heart to the right person at the right time and at the right place, and when we expect nothing in return” ~ The Bhagavad Gita</i></p>
<p><b>Related:</b></p>
<p><a href="https://groups.google.com/forum/#!topic/alt.msdos.batch.nt/TkUsCQuL_bg">Bug</a> when using <span class="code">~s</span> to display short file/folder names<br>
<a href="call.html">CALL</a> - Call one batch program from another.<br>
<a href="cmd.html">CMD</a> - Start a new DOS shell (cmd.exe) <br>
<a href="if.html">IF</a> - Test that required inputs are in place (not NULL)<br>
<a href="for.html">FOR</a> - Conditionally perform a command several times.<br>
<a href="setlocal.html">SETLOCAL</a> - Control the visibility of environment variables<br>
<a href="shift.html">SHIFT</a> - Shift the position of replaceable parameters in a batch file.<br>
<a href="http://stackoverflow.com/questions/4094699/how-does-the-windows-command-interpreter-cmd-exe-parse-scripts/4095133#4095133">StackOverflow</a> - How does the Windows Command Interpreter (CMD.EXE) parse scripts?<br>
Equivalent bash command (Linux): <a href="../bash/dirname.html">dirname</a> - Convert a full pathname to just a path.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-args.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

