---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>rm</h1> 
<p>Remove files (delete/unlink) </p>
<pre>Syntax
      rm [<i>options</i>]... <i>file</i>...

Options

   -f, --force
       ignore nonexistent files, never prompt 
   -i
       Prompt before every removal 
   -I
       Prompt once before removing more than three files, or when removing recursively.
       Less intrusive than -i, while still giving protection against most mistakes 
   --interactive[=WHEN]
       Prompt according to WHEN: never, once (-I), or always (-i). Without WHEN, prompt always 
   --one-file-system
       When removing a hierarchy recursively, skip any directory that is on a file system
       different from that of the corresponding command line argument 
   --no-preserve-root
       Do not treat '/' specially 
   --preserve-root
       Do not remove '/' (default) 
   -r, -R, --recursive
       Remove directories and their contents recursively 
   -v, --verbose
       Explain what is being done 
   --help
       Display this help and exit 
   --version
       Output version information and exit</pre>
<p>To remove a file you must have write permission on the file and 
  the folder where it is stored.  The OWNER of a file does not need rw permissions in order to rm it. </p>
<p>By default, rm does not remove directories. Use the --recursive (-r or -R) option to remove each listed directory, too, along with all of its contents. </p>
<p>Note that if you use rm to remove a file, it is usually possible to recover the contents of that file. If you want more assurance that the contents are truly unrecoverable, consider using <span class="code">shred</span>. </p>
<h2>Undeletable files</h2>
<blockquote>
<p> The rm command 
accepts the<span class="code"> -- </span>option which will cause it to stop processing flag
options from that point forward. This  allows the removal of file names that
begin with a dash <span class="code">-</span>. <br>
<span class="code">rm -- -filename</span><br>
Alternatively use an absolute or relative path reference. <br>
<span class="code">rm /home/user/-filename<br>
rm ./-filename </span></p>
<p>To delete a file with non-printable characters in the name: 'bad file name' Use the shell wildcard "?" for each character</p>
<p class="code">rm bad?file?name</p>
</blockquote>
<p>Older file systems such as ext2fs, perform badly for massive bulk deletes. The newer ext3fs doesn't have this performance problem.<br>
To remove a very large number of files from a directory it can be quicker to rm them one at a time in a loop:</p>
<p class="code">find my_dir -type f | while read -r; do rm -v "$REPLY"; sleep 0.2; done</p>
<p class="quote"><i>"It devoured my paper, it was a really good paper" ~ <a href="http://en.wikipedia.org/wiki/Ellen_Feiss">Ellen Feiss</a></i></p>
<p><b>Related:</b><br>
<br>
<a href="ls.html">ls</a> - List information about files.<br>
<a href="find.html">find</a> - Find and optionally Delete files.<br>
<a href="rmdir.html">rmdir</a> - Remove folder(s) <br>
Equivalent Windows command: 
  <a href="../nt/del.html">DEL</a> - Delete one or more files</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rm.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

