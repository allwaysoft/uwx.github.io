---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>mv</h1> 
<p>Move or rename files or directories.</p>
<pre>SYNTAX
      mv [<i>options</i>]... <i>Source</i> <i>Dest</i>

      mv [<i>options</i>]... <i>Source</i>... <i>Directory</i></pre>
<p><span class="body"> 
  If the last argument names an existing directory, `mv' moves each other given 
  file into a file with the same name in that directory. Otherwise, if only two 
  files are given, it renames the first as the second. It is an error if the last 
argument is not a directory and more than two files are given.</span></p>
<pre>OPTIONS  

-b
--backup
     Make a backup of each file that would otherwise be overwritten or
     removed.

-f
--force
     Remove existing destination files and never prompt the user.

-i
--interactive
     Prompt whether to overwrite each existing destination file,
     regardless of its permissions.  If the response does not begin
     with `y' or `Y', the file is skipped.

-S <i>SUFFIX</i>
--suffix=<i>SUFFIX</i>
     Append <i>SUFFIX</i> to each backup file made with `-b'.
     The backup suffix is ~, unless set with SIMPLE_BACKUP_SUFFIX.

-u
--update
     Do not move a nondirectory that has an existing destination with
     the same or newer modification time.

-v
--verbose
     Print the name of each file before moving it.

-V <i>METHOD</i>
--version-control=<i>METHOD</i>'
     Change the type of backups made with `-b'. METHOD can be:
     
       t, numbered     make numbered backups
       nil, existing   numbered if numbered backups exist, simple otherwise
       never, simple   always make simple backups

 --help                   display help and exit
 --version                output version information and exit
</pre>
<p><b>Examples</b><br>
<br>
Rename the file apple as orange.doc:<br>
<span class="code">mv apple orange.doc</span><br>
<br>
Move orange.doc to the Documents folder:<br>
<span class="code">mv orange.doc ~/Documents/orange.doc</span><br>
<br>
Rename a bunch of .txt file extensions to *.htm<br>
<span class="code"><a href="for.html">for</a> f in *.txt; do mv ./"$f" "${f%txt}htm"; done</span><br>
<br>
Rename  files that end with 'copy.txt' to just .txt<br>
this demonstrates bash shell <a href="syntax-expand.html#parameter">parameter expansion</a> <code>${<var>parameter</var>/<var>pattern</var>/<var>string</var>}</code><br>
<span class="code"><br>
for f in *copy.html; do mv "$f" "${f/copy.txt/.txt}";done</span></p>
<p>`mv' can move only regular files across filesystems.<br>
<br>
If a destination file exists but is normally unwritable, standard input is a terminal, and the `-f' or `--force' option is not given, `mv' prompts the user for whether to replace the file. (You might own the file, or have write permission on its directory.) If the response does not begin with `y' or `Y', the file is skipped.</p>
<p class="quote"><i>“Any intelligent fool can make things bigger and more complex... It takes a touch of genius - and a lot of courage to move in the opposite direction” ~
Albert Einstein </i></p>
<p><b>Related:</b><br>
<br>
<a href="cp.html">cp</a> - Copy one or more files to another location<br>
<a href="mmv.html">mmv</a> - Mass Move and rename<br>
Equivalent Windows command: 
<a href="../nt/move.html">MOVE</a> - Move files from one folder to another</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mv.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

