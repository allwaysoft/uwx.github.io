---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>symlink</h1> 
<p>make a new name for a file</p>
<pre>Syntax
       #include <unistd.h>

       int symlink(const char *OldPath, const char *NewPath);</unistd.h></pre>
<p><span class="body"> 
  symlink creates a symbolic link named NewPath which contains the string OldPath.<br>
  <br>
  Symbolic links are interpreted at run-time as if the contents of the link had 
  been substituted into the path being followed to find a file or directory.<br>
  <br>
  Symbolic links can contain .. path components, which (if used at the start of 
  the link) refer to the parent directories of that in which the link resides.<br>
  <br>
  A symbolic link (also known as a soft link) can point to an existing file or 
  to a nonexistent one; the latter case is known as a dangling link.<br>
  <br>
  The permissions of a symbolic link are irrelevant; the ownership is ignored 
  when following the link, but is checked when removal or renaming of the link 
  is requested and the link is in a directory with the sticky bit set.<br>
  <br>
  If NewPath exists it will NOT be overwritten.</span><br>
</p>
<pre>RETURN VALUE
       On  success,  zero is returned.  On error, -1 is returned,
       and errno is set appropriately.

ERRORS
       EPERM  The filesystem containing NewPath does not  support
              the creation of symbolic links.

       EFAULT OldPath  or  NewPath points outside your accessible
              address space.

       EACCES Write access to the directory containing NewPath is
              not allowed for the process's effective uid, or one
              of the directories in NewPath did not allow  search
              (execute) permission.

       ENAMETOOLONG
              OldPath or NewPath was too long.

       ENOENT A  directory component in NewPath does not exist or
              is a dangling symbolic  link,  or  OldPath  is  the
              empty string.

       ENOTDIR
              A  component used as a directory in NewPath is not,
              in fact, a directory.

       ENOMEM Insufficient kernel memory was available.

       EROFS  NewPath is on a read-only filesystem.

       EEXIST NewPath already exists.

       ELOOP  Too many symbolic links were encountered in resolving
              NewPath.

       ENOSPC The  device containing the file has no room for the
              new directory entry.

       EIO    An I/O error occurred.</pre>
<p>  No checking of OldPath is done. <br>
  Deleting the name referred to by a symlink will actually delete the file (unless 
  it also has other hard links). If this behaviour is not desired, use link.<br>
  <br>
  <i class="quote">"Women might be able to fake orgasms. But men can fake whole relationships" 
  ~ Sharon Stone 
  </i> </p>
<p><b>Related:</b><br>
<br>
readlink(2)<br> 
link(2), <br>
unlink(2), rename(2), open(2), lstat(2), <br>
<a href="ln.html">ln</a> - Make links between files<br>
Equivalent Windows command:
<a href="../nt/shortcut.html">SHORTCUT</a> - Create a windows shortcut (.LNK 
file)</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

