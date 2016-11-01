---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>lsbom</h1> 
<p>List the contents of an installer's bom (bill of materials) file. 
  This can be used to find out what files an installer will add/replace in your 
system before running it. It can also list details of a previous install.</p>
<pre>Syntax
      lsbom [<i>options</i>] [--arch <i>archVal</i>] [-p <i>parameters</i>] bom ...

Options
     -b     list block devices

     -c     list character devices

     -d     list directories

     -f     list files

     -l     list symbolic links

     -m     print modified times (for plain files only)

     -s     print only the path of each file

     -x     suppress modes for directories and symlinks

     --arch <i>archVal</i>
     when displaying plain files that represent fat macho binaries
     print the size and checksum of the file contents for
     the specified <i>archVal</i> (either "ppc" or i386")

     -p parameters
     print only some of the results Note: each option can only be
     used once:
           c       32-bit checksum
           f       file name
           F       file name with quotes (ie "/usr/bin/lsbom")
           g       group id
           G       group name
           m       file mode (permissions)
           M       symbolic file mode (ie "dr-xr-xr-x")
           s       file size
           S       formatted size
           t       mod time
           T       formatted mod time
           u       user id
           U       user name
           /       user id/group id
           ?       user name/group name</pre>
<p><span class="body"> For each file in a bom, lsbom prints the file path and/or 
  requested information. If no options are given, lsbom will display the output 
  formatted such that each line contains the path of the entry, its mode (octal), 
  and its UID/GID. There are slight differences in the output for plain files, 
  directories, symbolic links, and device files.</span></p>
<p>The -p option can be used to specify a user-defined format for lsbom's output. 
  The format string consists of one or more characters described above where each 
  character represents a datatype. </p>
<p>Datatypes will be separated by tab characters, and each line will end with 
  a newline character. One can use this mechanism to create output similar to 
  the <a href="ls.html">ls</a> command.<br>
</p>
<pre>EXAMPLES

    lsbom bomfile       list the contents of bomfile

    lsbom -s bomfile       list only the paths of the contents of the bomfile

    lsbom -f -l bomfile      list the plain files and symbolic links of the
           bomfiles (but not directories or devices)

    lsbom -p MUGsf bomfiles  list the contents of bomfile displaying only the
           files' modes, user name, group name, size, and filename

    lsbom DevTools.pkg/Contents/Resources/DevTools.bom &gt;contents.txt
                             List the files that will be installed by the "DevTools" package,
                             saving the list to contents.txt.

    lsbom DevTools.pkg/Contents/Resources/DevTools.bom | more
                             List the files that were installed by the "DevTools" package
                             and pipe it through <a href="more.html">more</a>.</pre>
<p class="quote"><i>"Be who you are and say what you feel, because those who mind 
  don't matter and those who matter don't mind" ~ Dr. 
  Seuss</i></p>
<p><b>Related:</b></p>
<p>
<a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/lsbom.8.html">lsbom man page</a> - Apple.com<br>
<a href="ditto.html">ditto</a> - Copy files and folders<br>
mkbom - Make bill of Materials</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="lsbom.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
