---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>cp</h1> 
<p>Copy one or more files to another location<br>
<br>
Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY. </p>
<pre>Syntax
      cp [<i>options</i>]... <i>Source</i> <i>Dest</i>
      cp [<i>options</i>]... <i>Source</i>... <i>Directory</i>

Key

  -a, --archive                same as -dpR

  -b, --backup                 make backup before removal

  -d, --no-dereference         preserve links

  -f, --force                  remove existing destinations, never prompt

  -i, --interactive            prompt before overwrite

  -l, --link                   link files instead of copying

  -p, --preserve               preserve file attributes if possible

  -P, --parents                append source path to DIRECTORY

  -r                           copy recursively, non-directories as files

      --sparse=WHEN            control creation of sparse files

  -R, --recursive              copy directories recursively

  -s, --symbolic-link          make symbolic links instead of copying

  -S, --suffix=SUFFIX          override the usual backup suffix

  -u, --update                 copy only when the SOURCE file is newer
                                 than the destination file or when the
                                 destination file is missing

  -v, --verbose                explain what is being done

  -V, --version-control=WORD   override the usual version control

  -x, --one-file-system        stay on this file system
      --help                   display this help and exit
      --version                output version information and exit.</pre>
<p>By default, sparse SOURCE files are detected by a crude heuristic and the corresponding DEST file is made sparse as well. <br>
That is the behavior selected by --sparse=auto. </p>
<p>Specify --sparse=always to create a sparse DEST file whenever the SOURCE file contains a long enough sequence of zero bytes. <br>
<br>
Use --sparse=never to inhibit creation of sparse files.<br>
<br>
The backup suffix is ~, unless set with SIMPLE_BACKUP_SUFFIX.<br>
<br>
The version control can be set with VERSION_CONTROL, values are: t, numbered make numbered backups nil, existing numbered if numbered backups exist, simple otherwise never, simple always make simple backups <br>
<br>
As a special case, cp makes a backup of SOURCE when the force and backup options are given and SOURCE and DEST are the same name for an existing, regular file. </p>
<p><b>Examples</b></p>
<p>Copy demofile to demofile.bak : </p>
<p><span class="code">$ cp demofile demofile.bak<br>
</span>or<span class="code"><br>
$ cp demofile{,.bak}</span></p>
<p>Copy demofile.txt to demofile.bak : </p>
<p class="code">$ file="demofile.txt"<br>
$ cp $file ${file%.*}.bak</p>
<p>Copy  floppy to home directory:</p>
<p class="code">$ cp -f /mnt/floppy/* ~</p>
<p>Copy all .jpg files to the CA folder, and for those with "New York" in the filename, replace with "California_" <br>
the "${f/New York/California_}" is an application of <a href="syntax-expand.html">bash parameter expansion</a><span class="code"><br>
$ mkdir CA<br>
$ for f in *.jpg; do cp "$f" "CA/${f/New York/California_}"; done</span></p>
<p class="quote"><i>“Thank you for sending me a copy of your book; I'll waste no time reading it” ~ Moses Hadas</i></p>
<p><b>Related:</b><br>
<br>
<a href="dd.html">dd</a> - Data Dump - convert and copy a file (use for RAW storage)<br>
copy - Copy groups of files in directories<br>
<a href="install.html">install</a> - Copy files and set attributes<br>
<a href="mv.html">mv</a> - Move files<br>
<a href="rsync.html">rsync</a> - Remote file copy (Synchronize file trees) <br>
<a href="tar.html">tar</a> - store or extract files to an archive (allows symbolic links to be copied as links)<br>
Equivalent Windows command:  <a href="../nt/copy.html">COPY</a> - Copy one or more files to another location</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="cp.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
