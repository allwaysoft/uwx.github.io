---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>mv</h1> 
<p>Move files and/or folders.</p>
<pre>Syntax
      mv [<i>options</i>] <i>source target</i>

Options
     -n     Do not overwrite any existing file.

     -i     Prompt before moving a file that would overwrite an existing file.
            A response `y' or `Y', will allow the move to proceed
            (writes to standard error)

     -f     Always Overwrite destination files
            (Do not prompt for confirmation)

     -v     Verbose, show filenames.</pre>
<p> The -n and -v options are non-standard and their use in scripts 
  is not recommended. </p>
<p><b>Examples</b></p>
<p>Move all files with names ending in ".jpg" from the current folder
to the Documents directory<br>
<span class="code">$ <b>mv</b> *.jpg ~/Documents</span><br>
<br>
Move the "Documents" folder to "Documents backup", quotes are needed because of the space in the folder name.<br>
<span class="code">$ <b>mv</b> Documents "Documents backup"</span><br>
</p>
<p>Move all .jpg files to the CA folder, and for those with "New York" in the filename, replace with "California_" <br>
the <span class="code">"$<b>{</b>f/New York/California_<b>}</b>"</span> is an application of <a href="../bash/syntax-expand.html">bash parameter expansion</a>.</p>
<p><span class="code">$ mkdir CA<br>
$ for f in *.jpg; do <b>mv</b> "$f" "CA/$<b>{</b>f/New York/California_<b>}</b>"; done</span></p>
<p>Rename .txt files to .html<br>
<span class="code">$ for f in *.txt; do <b>mv</b> ./"$f" "$<b>{</b>f%txt<b>}</b>htm"; done</span><br>
</p>
<p class="quote"><i>“Any intelligent fool can make things bigger and more complex, and more violent. It takes a touch of genius - and a lot of courage to move in the opposite direction” - Albert Einstein </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/mv.1.html">mv man page</a> - Apple.com<br>
<a href="cp.html">cp</a> - Copy files<br>
CpMac - Copy a file while preserving metadata and forks (Developer Tools)<br>
copy - Copy groups of files in folders<br>
<a href="dd.html">dd</a> - Data Dump - convert and copy a file (use for RAW 
storage)<br>
<a href="install.html">install</a> - Copy files and set attributes<br>
MvMac - Copy a filewhile preserving metadata and forks (Developer Tools)<br>
<a href="tar.html">tar</a> - store or extract files to an archive (allows symbolic links to be copied as links)</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mv.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
