---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>stat</h1> 
<p>Display file or file system status. Mandatory arguments to long options are mandatory for short options
too.</p>
<pre>Syntax:
       stat [<i>OPTION</i>]... <i>FILE</i>...

Key:
    -L, --dereference
              follow links

    -f, --file-system
              display file system status instead of file status

    -c  --format=<i>FORMAT</i>
              use the specified FORMAT instead of the default; output a
              newline after each use of FORMAT

    --printf=<i>FORMAT</i>
              like --format, but interpret backslash escapes, and do not
              output a mandatory trailing newline; if you want a newline,
              include \n in FORMAT

    -t, --terse
              print the information in terse form

    --help display this help and exit

    --version
              output version information and exit

The valid format sequences for files (without --file-system):

    %a     Access rights in octal
    %A     Access rights in human readable form
    %b     Number of blocks allocated (see %B)
    %B     The size in bytes of each block reported by %b
    %C     SELinux security context string
    %d     Device number in decimal
    %D     Device number in hex
    %f     Raw mode in hex
    %F     File type
    %g     Group ID of owner
    %G     Group name of owner
    %h     Number of hard links
    %i     inode number
    %m     Mount point
    %n     File name
    %N     Quoted file name with dereference if symbolic link
    %o     Optimal I/O transfer size hint
    %s     Total size, in bytes
    %t     Major device type in hex, for character/block device special files
    %T     Minor device type in hex, for character/block device special files
    %u     User ID of owner
    %U     User name of owner
    %w     Time of file birth, human-readable; - if unknown
    %W     Time of file birth, seconds since Epoch; 0 if unknown
    %x     Time of last access, human-readable
    %X     Time of last access, seconds since Epoch
    %y     Time of last data modification, human-readable
    %Y     Time of last data modification, seconds since Epoch
    %z     Time of last status change, human-readable
    %Z     Time of last status change, seconds since Epoch

Valid format sequences for file systems:

    %a     Free blocks available to non-superuser
    %b     Total data blocks in file system
    %c     Total file nodes in file system
    %d     Free file nodes in file system
    %f     Free blocks in file system
    %i     File system ID in hex
    %l     Maximum length of filenames
    %n     File name
    %s     Block size (for faster transfers)
    %S     Fundamental block size (for block counts)
    %t     File system type in hex
    %T     File system type in human readable form</pre>
<p>Your shell can have its own version of stat, which usually
    supersedes the version described here.  Please refer to your shell's
documentation for details about the options it supports.</p>
<p> <b>Examples</b></p>
<p>List the  file permissions for ss64.sh:</p>
<p class="code"><b>$  stat -c</b>%A ss64.sh<br>
-rw-r--r--<br>
</p>
<p>Display permissions in octal form (%a) and the filename (%n) for all files in the directory:</p>
<p><span class="code"><b>$ stat -c</b> "%a %n" * </span></p>
<p>or with owner group size in different forms:<span class="code"><br>
<b>$ stat -c</b> "%a %A %G:%U %g:%g %n %s" *</span></p>
<p>Display file system (directory) information for /etc:</p>
<p class="code"><b>$ stat -f</b> /etc<br>
File: "/etc" <br>
ID: 0        Namelen: 255     Type: reiserfs <br>
Block size: 4096       Fundamental block size: 4096 <br>
Blocks: Total: 1977922    Free: 1272318    Available: 1272318 <br>
Inodes: Total: 0          Free: 0</p>
<p class="quote"><i>“If it disagrees with experiment it is wrong. In that simple statement is the key to science. It does not make any difference how beautiful your guess is. It does not make any difference how smart you are, who made the guess, or what his name is – if it disagrees with experiment it is wrong” ~ <a href="http://www.youtube.com/watch?v=EYPapE-3FRw">Richard Feynman</a></i></p>
<p><b>Related:</b></p>
<p><a href="chmod.html">chmod</a> - Change access permissions<br>
<a href="ls.html">ls</a> - List information about file(s)<br>
</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="stat.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

