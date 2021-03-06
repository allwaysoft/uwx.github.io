---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>du</h1> 
<p>Display disk usage statistics.<br>
Lists the file system usage for individual files, if a folder argument is passed argument, du will list usage for each sub folder in that hierarchy. If no file is specified, the current folder (hierarchy) is displayed. </p>
<pre>Syntax
      du [-H | -L | -P] 
            [-a | -s | -d <i>depth</i>] [-c]
               [-h | -k | -m | -g]
                  [-x] [-I <i>mask</i>]
                     [<i>file</i> ...]

Options
   -H    Symbolic links on the command line are followed, symbolic links
         in file hierarchies are not followed.

   -L    Symbolic links on the command line and in file hierarchies are
         followed.

   -P    No symbolic links are followed (default)

   -a    Display an entry for each file in a file hierarchy.

   -s    Display an entry for each specified file.  (Equivalent to -d 0)

   -d <i>depth</i>
         Display an entry for all files and folders <i>depth</i> folders deep.

   -h   "Human-readable" output.  Use unit suffixes: Byte, Kilobyte,
         Megabyte, Gigabyte, Terabyte and Petabyte

   -k    KB Display block counts in 1024-byte (1-Kbyte) blocks.

   -m    MB Display block counts in 1048576-byte (1-Mbyte) blocks.

   -g    GB Display block counts in 1073741824-byte (1-Gbyte) blocks.

   -r    Generate any read error messages, on by default, this option
         exists solely for conformance with X/Open Portability Guide 4

   -c    Display a grand total.

   -x    File system mount points are not traversed.

   -I <i>mask</i>
         Ignore files and folders matching the specified <i>mask</i>.</pre>
<p>The du utility counts the storage used by symbolic links and not the files they reference unless the -H or -L option is specified. If either the -H or -L options are specified, storage used by any symbolic links which are followed is not counted or displayed. </p>
<p>Files having multiple hard links are counted (and displayed) a single time per du execution. </p>
<p>If the -k flag is specified, the number of 1024-byte blocks used by the file is displayed, otherwise getbsize(3) is used to determine the preferred block size. Partial numbers of blocks are rounded up.</p>
<p>Examples</p>
<p>List files and folders - totalling the size to include subfolders:</p>
<p class="code">du -sk * | sort -nr</p>
<p>List  folders and hidden (system folders) - totalling the size to include subfolders:</p>
<p class="code">du -d 1 . | sort -nr</p>
<p>ENVIRONMENT</p>
<p> If the environment variable BLOCKSIZE is set, and the -k option is not specified, the block counts will be displayed in units of that size block. If BLOCKSIZE is not set, and the -k option is not specified, the block counts will be displayed in 512-byte blocks. </p>
<p><b>Examples</b></p>
<p>Display only files on this disk, show  "Human-readable" output and traverse to a depth of 2 levels down, starting from  the home directory:</p>
<p class="code">$  du -cxhd 2 ~</p>
<p>Display a grand total of  files on this disk, show  "Human-readable" output and traverse to a depth of 1 level down, starting from / the root directory:</p>
<p class="code">$ sudo du -cxhd 1 /</p>
<p>In Mountain Lion and greater, <span class="code">./DocumentRevisions-V100</span> is used to store previous versions of auto-saved documents, this can be turned off in OSX preferences.</p>
<p class="quote"><i>“Never go to a doctor whose office plants have died” ~ Erma Bombeck</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/du.1.html">du man page</a> - Apple.com<br>
<a href="df.html">df</a> - Display free disk space<br>
<a href="ln.html">ln</a> - Make links between files (hard links, symbolic links)<br>
<a href="quota.html">quota</a> - Display disk usage and limits<br>
<a href="open.html">open</a> - open a file or folder<br>
fts(3), compat(5), symlink(7), quot(8)</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
