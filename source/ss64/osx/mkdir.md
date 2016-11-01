---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>mkdir</h1> 
<p>Make Directory (Create folders)</p>
<p>Multiple folders will be created in the order specified, using 
mode rwx rwx rwx (0777) as modified by the current <a href="umask.html">umask</a>.</p>
<pre>Syntax
          mkdir [-pv] [-m <i>mode</i>] <i>folder</i>...

Options

     -m <i>mode</i>
       Set the file permission bits of the final created directory to
       the specified mode.  The mode can be in any of the formats
       specified to the <a href="chmod.html">chmod</a> command.  If a symbolic mode is
       specified, the operation characters `+' and `-' are interpreted
       relative to an initial mode of `a=rwx'.

     -p       Create intermediate folders as required.  If this option is
       not specified, the full path prefix of each operand must already
       exist.  On the other hand, with this option specified, no error
       will be reported if a directory given as an operand already
       exists.

     -v       Verbose = list folders as they are created.     </pre>
<p> The -v option is non-standard and its use in scripts is not recommended.</p>
<p>The user must have write permission in the parent directory.</p>
<p>If an error occurs, mkdir exits with a value &gt;0. </p>
<pre>Examples

  mkdir MyFolder MyFolder/SubFolder "My Other Folder"
</pre>
<p class="quote"><i>"The salary of the chief executive of the large corporation 
  is not a market award for achievement. It is frequently in the nature of a warm 
  personal gesture by the individual to himself" ~ J 
  K Galbraith</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/mkdir.1.html">mkdir man page</a> - Apple.com<br>
<a href="rm.html">rm</a> - Remove files or folders (including recursive delete)<br>
<a href="cp.html">cp</a> - Copy files<br>
<a href="ls.html">ls</a> - List information about files</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mkdir.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
