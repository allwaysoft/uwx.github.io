---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>file</h1> 
<p>Determine file type.</p>
<pre>Syntax
      file  [-bcdhikLnNprsvz] [-f <i>namefile</i>] [-F <i>separator</i>] [-M <i>magic-files</i>] [-m <i>magicfiles</i>] <i>file</i> ...
<br>      file -C [-m <i>magicfile</i> ]

Key
   -b, --brief
            Do not prepend filenames to output lines (brief mode).

   -c, --checking-printout
            Cause a checking printout of the parsed form of the magic file.
            This  is  usually  used  in  conjunction with -m to debug a new
            magic file before installing it.

   -C, --compile
            Write a magic.mgc output file that contains a pre-parsed version
            of file.
   -f, --files-from <i>namefile</i>
            Read  the  names of the files to be examined from <i>namefile</i> (one
            per line) before the argument  list.   Either <i>namefile</i> or at
            least one filename argument must be present; to test the standard
            input, use `-' as a filename argument.

   -F, --separator <i>separator</i>
            Use the specified string as the separator between the  filename
            and the file result returned. Defaults to `:'.

   -h, --no-dereference
            option causes symlinks not to be followed (on systems that support
            symbolic links). This is the default  if  the  environment
            variable POSIXLY_CORRECT is not defined.

   -I, --mime
            Causes the file command to output mime type strings rather than
            the more traditional human  readable  ones.  For example:
            `text/plain;  charset=us-ascii' rather  than `ASCII text'.
            In order for this option to work, file changes the way it  han-
            dles  files  recognised  by the command itself (such as many of
            the text file types, directories etc),  and  makes  use  of  an
            alternative ``magic'' file.  (See ``FILES'' section, below).
   -i       If the file is a regular file do not classify its contents.

   -k, --keep-going
            Don't stop at the first match, keep going.

   -L, --dereference
            option causes symlinks to be followed, as the like-named option
            in ls(1) (on systems that support symbolic links).  This is the
            default if the environment variable POSIXLY_CORRECT is defined.

   -m, --magic-file <i>list</i>
            Specify an alternate list of files  containing  magic  numbers.
            This  can be a single file, or a colon-separated list of files.
            If a compiled magic file is found alongside, it  will  be  used
            instead.   With  the  -I  or  --mime  option,  the program adds
            ".mime" to each file name.

   -m list Like -m, except the default rules are not applied.

   -n, --no-buffer
            Force stdout to be flushed after checking each file.   This  is
            only  useful if checking a list of files.  It is intended to be
            used by programs that want filetype output from a pipe.

   -d       Apply default system tests, this is the default if  neither  -m
            nor -M are supplied.

   -N, --no-pad
            Don't pad filenames so that they align in the output.

   -p, --preserve-date
            On systems that support utime(2) or utimes(2), attempt to pre-
            serve the access  time  of  files  analyzed,  to  pretend  that
            file(2) never read them.

   -r, --raw
            No  operation,  included  for  historical  compatability.

   -s, --special-files
            Normally, file only attempts to read and deter-
            mine the type of argument files which stat(2) reports are ordinary
            files.  This prevents problems,  because  reading  special
            files can have peculiar consequences.  Specifying the -s option
            causes file to also read argument  files  which  are  block  or
            character  special  files.   This is useful for determining the
            filesystem types of the data in raw disk partitions, which  are
            block special files.  This option also causes file to disregard
            the file size as reported by stat(2) since on some  systems  it
            reports a zero size for raw disk partitions.

   -v, --version
            Print the version of the program and exit.

   -z, --uncompress
            Try to look inside compressed files.

   --help  Print a help message and exit.</pre>
<p>File tests each argument in an attempt to classify it.  There are threesets  of tests, performed in this order:filesystem tests, magic numbertests, and language tests.  The first test  that  succeeds  causes  the file type to be printed.The  type  printed will usually contain one of the words <b>text</b> (the filecontains only printing characters and a few common  control  characters and  is  probably  safe  to read on an ASCII terminal), <b>executable</b> (the file contains the result of compiling a program in a  form  understandable  to  some  UNIX  kernel or another), or <b>data</b> meaning anything else(data is usually `binary' or non-printable).  </p>
<p>Exceptions are well-known file  formats  (core  files,  tar  archives)  that are known to contain binary data.  When modifying the file /usr/share/file/magic or the program  itself,  preserve these keywords .  People depend on knowing that all the readable files in a directory have the word  `text'  printed. Don't  do as Berkeley did and change `shell commands text' to `shellscript'.  Note that the file /usr/share/file/magic is  built  mechanically  from a large number of small files in the subdirectory Magdir inthe source distribution of this program.</p>
<p>The filesystem tests are based on examining the return from  a  stat(2)system  call.   The  program  checks to see if the file is empty, or if it's some sort of special file.  Any known file  types  appropriate  to the  system you are running on (sockets, symbolic links, or named pipes(FIFOs) on those systems that implement them) are intuited if they  are defined in the system header file &lt;sys/stat.h&gt;.The magic number tests are used to check for files with data in particular fixed formats. The canonical example of this is a binary executable (compiled program) a.out file, whose format is defined in a.out.h and possibly exec.h in the standard include directory. These files have a `magic number' stored in a particular place near the beginning of the file that tells the UNIX operating system that the file is a binary executable, and which of several types thereof. </p>
<p>The concept of `magic number' has been applied by extension to data files. Any file with some invariant identifier at a small fixed offset into the file can usually be described in this way. The information identifying these files is read from the compiled magic file <span class="code">/usr/share/file/magic.mgc</span> , or <span class="code">/usr/share/file/magic</span> if the compile file does not exist. </p>
<p>In addition file will look in $HOME/.magic.mgc ,or $HOME/.magic for magic entries. If a file does not match any of the entries in the magic file, it is examined to see if it seems to be a text file. ASCII, ISO-8859-x, non-ISO 8-bit extended-ASCII character sets (such as those used on Macintosh and IBM PC systems), UTF-8-encoded Unicode, UTF-16-encoded Unicode, and EBCDIC character sets can be distinguished by the different ranges and sequences of bytes that constitute printable text in eachset. </p>
<p>If a file passes any of these tests, its character set is reported. ASCII, ISO-8859-x, UTF-8, and extended-ASCII files are identified as `text' because they will be mostly readable on nearly any terminal; UTF-16 and EBCDIC are only `character data' because, whilethey contain text, it is text that will require translation before it can be read. In addition, file will attempt to determine other characteristics of text-type files. </p>
<p>If the lines of a file are terminated by CR, CRLF, or NEL, instead of the Unix-standard LF, this will be reported. </p>
<p>Files that contain embedded escape sequences or overstriking will also be identified.</p>
<p>Once <span class="code">file</span> has determined the character set used in a text-type file, it will attempt to determine in what language the file is written. Thelanguage tests look for particular strings (cf names.h) that can appear anywhere in the first few blocks of a file. For example, the keyword.br indicates that the file is most likely a troff(1) input file, justas the keyword struct indicates a C program. These tests are less reliable than the previous two groups, so they are performed last. The language test routines also test for some miscellany (such as tar(1)archives).</p>
<p>You can drag and drop a file from the OSX Finder into the terminal window rather than typing  out the filename.</p>
<p>Any file that cannot be identified as having been written in any of thecharacter sets listed above is simply said to be `data'.</p>
<h2>FILES</h2>
<blockquote>
<p><span class="code"> /usr/share/file/magic.mgc<br>
</span>Default compiled list of magic numbers</p>
<p> <span class="code">/usr/share/file/magic</span><br>
Default list of magic numbers</p>
<p> <span class="code">/usr/share/file/magic.mime.mgc</span><br>
Default compiled list of magic numbers, used to output mime
types when the -i option is specified.</p>
<p> <span class="code">/usr/share/file/magic.mime</span><br>
Default list of magic numbers, used to output mime types when
the -i option is specified.</p>
</blockquote>
<h2>ENVIRONMENT</h2>
<blockquote>
<p> The environment variable MAGIC can be used to set the default magic
number file name. If that variable is set, then file will not attempt
to open $HOME/.magic . file adds ".mime" and/or ".mgc" to the value of
this variable as appropriate. </p>
<p>The environment variable POSIXLY_CORRECT
controls (on systems that support symbolic links), if file will attempt
to follow symlinks or not. If set, then file follows symlink, otherwise
it does not. This is also controlled by the L and h options.</p>
<p>This manual page documents version 4.17 of the file command, this version treats any white space as a delimiter, so that spaces
in pattern strings must be escaped.</p>
</blockquote>
<p><b>Examples</b></p>
<p> Find the size of an image file:<span class="code"><br>
$ file questlove.png<br>
</span>questlove.png: PNG image data, 500 x 375, 8-bit/color RGB, non-interlaced</p>
<p>Use wildcards to retrieve properties for a list of files:<br>
<span class="code">$ file *.gif</span></p>
<p>Is a script file executable?<br>
<span class="code"> $ file myscript<br>
</span>myscript: Bourne-Again shell script text executable<span class="code"><br>
<br>
</span>Find the properties of an audio file:<span class="code"><br>
$ file track01.flac<br>
</span>track01.flac: FLAC audio bitstream data, 16 bit, stereo, 44.1 kHz, 6516216 samples</p>
<p>Find the properties of a disk:<span class="code"><br>
$ file /dev/disk0</span><br>

/dev/disk0: block special (14/0)<br>
<span class="code"><br>
$ file -s /dev/disk{0,1}</span><br>
/dev/disk0: block special (14/0)<br>
/dev/disk1: x86 boot sector<br>
<br>
<span class="code">$ file -s /dev/hda{,1,2,3,4,5}</span><br>
/dev/hda: x86 boot sector<br>
/dev/hda1: Linux/i386 ext2 filesystem<br>
/dev/hda2: x86 boot sector<br>
/dev/hda3: x86 boot sector, extended partition table<br>
/dev/hda4: Linux/i386 ext2 filesystem<br>
/dev/hda5: Linux/i386 swap file</p>
<p> <span class="code">$ file -i file.c file /dev/{wd0a,hda}</span><br>
file.c: text/x-c<br>
file: application/x-executable, dynamically linked (uses shared libs),
not stripped<br>
/dev/hda: application/x-not-regular-file<br>
/dev/wd0a: application/x-not-regular-file</p>
<p class="quote"><i>#Dance to this fix and flex every muscle<br>
Space can be filled if you rise like my lumber<br>
Advance to the tune but don't do the hustle<br>
Shake, rattle, roll to my magic number# ~ De La Soul (The Magic Number) </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/file.1.html">file man page</a> - Apple.com<br>  
magic(5) - description of magic file format.<br>
qlmanage - Quick Look Server debug and management tool.<br>
strings(1), od(1), hexdump(1), compat(5) - tools for examining non-textfiles. <br>
otool(1), otool64(1) - Mach-O object display tools</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="file.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
