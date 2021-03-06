---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>bzip2</h1> 
<p>Compress (bzip2) or decompress (bunzip2) files.  Decompress files to stdout (bzcat) and 
 recover data from damaged bzip2 files (bzip2recover.) </p>
<pre>Syntax
       bzip2 [ -cdfkqstvzVL123456789 ] [ <i>filenames</i> ...  ]

       bunzip2 [ -fkvsVL ] [ <i>filenames</i> ...  ]

       bzcat [ -s ] [ <i>filenames</i> ...  ]

       bzip2recover <i>filename</i>
</pre>
<p>default actions: <span class="code">bzip2</span> = compress,  <span class="code">bunzip2</span> = decompress, <span class="code">bzcat</span> = decompress to stdout.<br>

If no file names are given, bzip2 compresses or decompresses
from standard input to standard output. <br>
You can combine
short flags, so `-v -4' means the same as -v4 or -4v</p>
<pre>Options
       -c --stdout --to-stdout
              Write output on standard output.

       -d --decompress --uncompress
              Force  decompression. bzip2, bunzip2 and bzcat are really the<br>              same program, and the decision about what actions to take  is<br>              done on the basis of which name is used. This flag overrides<br>              that mechanism, and forces bzip2 to decompress.

       -z --compress
              The complement to -d: force compression, regardless of the
              invocation name.

       -t --test
              Check integrity of the specified file(s), but don't decompress
              them. This really performs a trial decompression and throws
              away the result.

       -f --force
              Force overwrite of output files. Normally, bzip2 will not over-
              write existing output files. Also forces bzip2 to break hard
              links to files, which it otherwise wouldn't do.

              bzip2 normally declines to decompress files which don't have the
              correct magic header bytes.  If forced (-f), however, it  will
              pass such files through unmodified. This is how GNU gzip
              behaves.

       -k --keep
              Keep (don't delete) input files during compression or decompression.

       -s --small
              Reduce memory usage, for compression, decompression and testing.
              Files are decompressed and tested  using a modified  algorithm
              which only requires  2.5 bytes per block byte.  This means any
              file can be decompressed in 2300k of  memory, albeit at about
              half the normal speed.

              During  compression, -s selects a block size of 200k, which lim-
              its memory use to around the same figure, at the expense of your
              compression  ratio. In short, if your machine is low on memory
              (8 megabytes or less), use -s for everything.  See MEMORY  MAN-
              AGEMENT below.

       -q --quiet
              Suppress non-essential warning messages.  Messages pertaining to
              I/O errors and other critical events will not be suppressed.

       -v --verbose
              Verbose mode -- show the compression ratio for  each  file  pro-
              cessed.   Further -v's increase the verbosity level, spewing out
              lots of information which is primarily of interest for  diagnos-
              tic purposes.

       -L --license -V --version
              Display the software version, license terms and conditions.

       -1 (or --fast) to -9 (or --best)
              Set  the  block size to 100 k, 200 k ..  900 k when compressing.
              Has no effect when decompressing.  See MEMORY MANAGEMENT  below.
              The --fast and --best aliases are primarily for GNU gzip compat-
              ibility.  In particular, --fast  doesn't  make  things  signifi-
              cantly faster.  And --best merely selects the default behaviour.

       --     Treats all subsequent arguments as  file  names,  even  if  they
              start  with  a dash.  This is so you can handle files with names
              beginning with a dash, for example: bzip2 -- -myfilename.

       --repetitive-fast --repetitive-best
              These flags are redundant in versions  0.9.5  and  above.   They
              provided  some  coarse control over the behaviour of the sorting
              algorithm in  earlier  versions,  which  was  sometimes  useful.
              0.9.5  and  above have an improved algorithm which renders these
              flags irrelevant.</pre>
<p><b> MEMORY MANAGEMENT</b></p>
<p>bzip2 compresses large files in blocks.  The block  size  affects  both
the  compression  ratio  achieved,  and the amount of memory needed for
compression and decompression.  The flags -1  through  -9  specify  the
block  size  to  be  100,000  bytes through 900,000 bytes (the default)
respectively.  At decompression time, the block size used for  compression  is  read from the header of the compressed file, and bunzip2 then
allocates itself just enough memory  to  decompress  the  file.</p>
<p> Since
block  sizes  are stored in compressed files, it follows that the flags
-1 to -9 are irrelevant to and so ignored during decompression.<br>
<br>
Compression and decompression requirements, in bytes, can be  estimated       
as:</p>
<pre>              Compression:   400k + ( 8 x block size )

              Decompression: 100k + ( 4 x block size ), or
                             100k + ( 2.5 x block size )</pre>
<p>Larger  block sizes give rapidly diminishing marginal returns.  Most of
the compression comes from the first two or three hundred  k  of  block
size,  a fact worth bearing in mind when using bzip2 on small machines. 
It is also  important  to  appreciate  that  the  decompression  memory
requirement is set at compression time by the choice of block size.<br>
<br>
For  files  compressed  with  the default 900k block size, bunzip2 will
require about 3700 kbytes to decompress.  To support  decompression  of
any  file  on a 4 megabyte machine, bunzip2 has an option to decompress
using approximately half this amount  of  memory,  about  2300  kbytes.
Decompression  speed is also halved, so you should use this option only
where necessary.  The relevant flag is -s.<br>
<br>
In general, try and use  the  largest  block  size  memory  constraints
allow,  since that maximises the compression achieved.  Compression and
decompression speed are virtually unaffected by block size.<br>
<br>
Another significant point applies to files which fit in a single  block
-- that means most files you'd encounter using a large block size.  The
amount of real memory touched is proportional to the size of the  file,
since  the  file  is  smaller than a block.  For example, compressing a
file 20,000 bytes long with the flag -9 will cause  the  compressor  to
allocate  around 7600k of memory, but only touch 400k + 20000 * 8 = 560
kbytes of it.  Similarly, the decompressor will allocate 3700k but only<br>
touch 100k + 20000 * 4 = 180 kbytes.<br>
<br>
Here is a table which summarises the maximum memory usage for different
block sizes.  Also recorded is the total compressed size for  14  files
of the Calgary Text Compression Corpus totalling 3,141,622 bytes.  This       
column gives some feel for how  compression  varies  with  block  size.       
These  figures  tend  to understate the advantage of larger block sizes       
for larger files, since the Corpus is dominated by smaller files.</p>
<pre>                  Compress   Decompress   Decompress   Corpus
           Flag     usage      usage       -s usage     Size

            -1      1200k       500k         350k      914704
            -2      2000k       900k         600k      877703
            -3      2800k      1300k         850k      860338
            -4      3600k      1700k        1100k      846899
            -5      4400k      2100k        1350k      845160
            -6      5200k      2500k        1600k      838626
            -7      6100k      2900k        1850k      834096
            -8      6800k      3300k        2100k      828642
            -9      7600k      3700k        2350k      828642</pre>
<p> RECOVERING DATA FROM DAMAGED FILES<br>
<br>
bzip2 compresses files in blocks, usually 900kbytes long.   Each  block
is  handled  independently.   If a media or transmission error causes a
multi-block .bz2 file to become damaged, it might be possible to  recover
data from the undamaged blocks in the file.<br>
<br>
The  compressed  representation  of each block is delimited by a 48-bit
pattern, which makes it possible to find the block boundaries with reasonable certainty.  Each block also carries its own 32-bit CRC, so damaged blocks can be distinguished from undamaged ones.<br>
<br>
bzip2recover is a simple program whose purpose is to search for  blocks
in  .bz2  files,  and write each block out into its own .bz2 file.  You
can then use bzip2 -t to test the integrity of the resulting files, and
decompress those which are undamaged.<br>
<br>
bzip2recover takes a single argument, the name of the damaged file, and
writes a number of files "rec00001file.bz2",  "rec00002file.bz2",  etc,       
containing   the   extracted   blocks.   The   output   filenames   are       
designed  so  that the use of wildcards in subsequent processing -- for       
example,  "bzip2  -dc   rec*file.bz2 &gt; recovered_data" -- processes the       
files in the correct order.<br>
<br>       
bzip2recover should be of most use dealing with large .bz2  files,   as       
these will contain many blocks.  It is clearly futile to use it on damaged single-block  files,  since  a damaged  block  cannot   be  recovered.   If  you  wish to minimise any potential data loss through media       
or  transmission errors, you might consider compressing with a  smaller       
block size.<br>
<br>
PERFORMANCE NOTES<br>
<br>       
The  sorting  phase  of compression gathers together similar strings in the file.  Because of this, files containing very long runs of repeated       
symbols,  like "aabaabaabaab ..."  (repeated several hundred times) might compress more slowly than normal.  Versions 0.9.5 and above  fare  much       
better  than  previous  versions  in  this  respect.  The ratio between worst-case and average-case compression time is in the region of  10:1.       
For  previous  versions,  this figure was more like 100:1.  You can use the -vvvv option to monitor progress in great detail, if you want.<br>
<br>       
Decompression speed is unaffected by these phenomena.<br>
<br>       
bzip2 usually allocates several megabytes of memory to operate in,  and then  charges  all over it in a fairly random fashion.  This means that performance, both for compressing and decompressing, is largely  determined  by  the  speed  at  which your machine can service cache misses.       
Because of this, small changes to the code to reduce the miss rate have been  observed  to  give  disproportionately large performance improvements.  I imagine bzip2 will perform best on machines with  very  large       
caches.<br>
<br>
CAVEATS<br>
<br>       
I/O  error  messages  are not as helpful as they could be.  bzip2 tries       
hard to detect I/O errors and exit cleanly, but the details of what the       
problem is sometimes seem rather misleading.<br>
<br>       
This  manual  page pertains to version 1.0.4 of bzip2.  Compressed data       
created by this version is entirely forwards and  backwards  compatible       
with  the  previous  public  releases,  versions  0.1pl2, 0.9.0, 0.9.5,       
1.0.0, 1.0.1, 1.0.2 and 1.0.3, but with the following exception:  0.9.0       
and  above  can  correctly  decompress multiple concatenated compressed       
files.  0.1pl2 cannot do this; it will stop  after  decompressing  just       
the first file in the stream.<br>
<br>       
bzip2recover  versions prior to 1.0.2 used 32-bit integers to represent bit positions in compressed files, so they could not handle  compressed   
files  more  than  512  megabytes  long.   Versions 1.0.2 and above use 64-bit ints on some platforms which support them  (GNU  supported  targets, and Windows).  To establish whether or not bzip2recover was built       
with such a limitation, run it without arguments.  In any event you can build  yourself  an unlimited version if you can recompile it with MaybeUInt64 set to be an unsigned 64-bit integer.</p>
<p class="quote"><i># Zippity Doo Dah, 
Zippity Ay, 
My oh my, 
What a wonderful day # - <a href="http://en.wikipedia.org/wiki/Zip-a-Dee-Doo-Dah">Song of the South</a>, (Disney) </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/bzip2.1.html">bzip2 man page</a> - Apple.com<br>
<a href="http://fruitstandsoftware.com/bezipped/">bezipped</a> - file compression and archive utility built on top of  bzip2 <br>
<a href="http://www.bzip.org">bzip.org</a> - bzip author: Julian Seward<br>
<a href="gzip.html">gzip</a> - 
Compress  or decompress  files<br>
znew(1), zcmp(1), zmore(1), zforce(1), gzexe(1), zip(1), unzip(1), compress(1), 
pack(1), compact(1)</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="bzip.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
