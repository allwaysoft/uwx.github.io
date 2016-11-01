---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>chgrp</h1> 
<p>Change group ownership (update the group ID of files.)</p>
<pre>Syntax 
      chgrp [-fhv] [-R [-H | -L | -P]] <i>group file</i> ...

The <i>group</i> operand can be either a group name, or a numeric group ID.

Options

   -R     Recurse: Change the mode of file hierarchies rooted in the files
          instead of just the files themselves.

   -R -H  Follow symbolic links on the command line
          (by default Symbolic links within the tree are not followed.)    

   -R -L  All symbolic links are followed.

   -R -P  No symbolic links are followed. (default)

   -f     Force, ignores errors, except for usage errors and doesn't query
          about strange modes (unless the user lacks permissions).

   -h     If the file is a symbolic link, the group ID of the link itself
          is changed rather than the file that is pointed to.

   -v     Verbose, show filenames as the group is modified.</pre>
<p>The user invoking chgrp must belong to the specified 
group and be the owner of the file, or be the super-user.<br></p>
<p> The chgrp utility exits 0 on success, and &gt;0 if an error 
occurs.</p>
<p>In previous versions of this system, symbolic links did not have groups.<br>
The -v option is non-standard and its use in scripts is 
not recommended.</p>
<p><b>Examples</b><br>
<br>
Assign Ursula as the owner of "MyFile.txt" file in the Shared directory. </p>
<p class="code">sudo chown Ursula /Users/Shared/MyFile.txt </p>
<p>Assign Ursula as the owner, and staff as the group for everything in the "tmp" 
folder</p>
<p class="code">sudo chown -R Ursula:staff /Users/Shared/tmp/ </p>
<p> <i class="quote">“If an organization carries the word 'united' in its name, it means it isn’t, e. g., United Nations, United Arab Republic, United Kingdom, United 
States” - Professor 
Charles I. Issawi </i><br>
<br>
<b> Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/chgrp.1.html">chgrp man page</a> - Apple.com<br>
<a href="chflags.html">chflags</a> - Change a file or folder's flags. <br>
<a href="chmod.html">chmod</a> - Change access permissions<br> 
<a href="chown.html">chown</a> - Change file owner and group <br>
<a href="install.html">install</a> - Copy files and set attributes <br>
<a href="umask.html">umask</a> - Users file creation mask</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
