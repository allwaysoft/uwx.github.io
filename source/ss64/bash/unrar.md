---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>unrar</h1> 
<p>Extract files from a rar archive.</p>
<pre>Syntax
      unrar <i>command</i> [-<i>switch_1</i> -<i>switch_N</i>] <i>archive</i> [<i>files</i>...] [<i>path</i>...]</pre>
<p>A summary of commands is  below.  Every command/switch must be separated by  whitespace.<br>
</p>
<pre>Commands
   e    Extract files to current directory. 
   l    List archive content. 
   p    Print file to stdout. 
   t    Test archive files. 
   v    Verbosely list archive. 
   x    Extract files with full path.

Switches

   -av-   Disable AV check. 
   -c-    Disable comments show. 
   -f     Freshen files. 
   -kb    Keep broken extracted files. 
   -ierr  Send all messages to stderr. 
   -inul  Disable all messages. 
   -o+    Overwrite existing files. 
   -o-    Do not overwrite existing files. 
   -p<b><i>password</i></b>  Set password. 
   -p-    Do not query password. 
   -r     Recurse subdirectories. 
   -u     Update files. 
   -v     List all volumes. 
   -x<b><i>file</i></b>   Exclude specified file. 
   -x@<b><i>list</i></b>  Exclude files in specified list file. 
   -x@    Read file names to exclude from stdin. 
   -y     Assume Yes on all queries.</pre>
<p>For a complete description, run <span class="code">unrar</span> without options. </p>
<p><b>Examples</b></p>
<p>Extract the rar archive SS64.rar:</p>
<p class="code"> $ unrar e SS64.rar</p>
<p>List the content of a rar file without uncompressing it:</p>
<p class="code">$ unrar l SS64.rar</p>
<p><i class="quote">“True faith is always on the edge of unbelief” ~ Ruth Prince</i><br>
<br>
<b>Related:</b></p>
<p><a href="bzip2.html">bzip2</a> - Compress or decompress named file(s)<br>
<a href="gzip.html">gzip</a> - Compress or decompress named file(s)<br>
<a href="rar.html">rar</a> - Archive files with compression<br>
<a href="tar.html">tar</a> - Store, list or extract files in an archive<br>
Alternative free unrar programme <a href="http://home.gna.org/unrar/">http://home.gna.org/unrar/</a><br>
</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="unrar.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
