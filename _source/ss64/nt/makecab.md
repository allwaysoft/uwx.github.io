---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>MAKECAB.exe</h1> 
<p>Create compressed .CAB file. A .CAB <a href="http://en.wikipedia.org/wiki/Cabinet_%28file_format%29">Cabinet file</a> is a Lossless Data Compression format.</p>
<pre>Syntax
      MAKECAB [/V[<i>n</i>]] [/D <i>var</i>=<i>value</i> ...] [/L <i>dir</i>] <i>source</i> [<i>destination</i>]

      MAKECAB [/V[<i>n</i>]] [/D <i>var</i>=<i>value</i> ...] /F <i>directive_file</i> [...]

Key
   <i>source</i>         File to compress.

   <i>destination</i>    File name to give compressed file.  If omitted, the
                  last character of the source file name is replaced
                  with an underscore (_) and used as the destination.

   /F <i>directives</i>  A file containing <a href="makecab-directives.html">directives</a> for MAKECAB to use (may be repeated).
                  If more than one directive file is specified (/F file1 /F file2 ...), they
                  are processed in the order (left to right) specified on the command line.

                  Variable settings, open cabinets, open disks, etc. are all carried forward
                  from one directive file to the next (just as if all of the files had been
                  concatenated together and presented as a single file to MakeCAB).
                  For example, this is intended to simplify the work for a product shipped in
                  multiple languages. There would be a short, language-specific directives file, 
                  and then a single, master directives file that covers the bulk of the product.

   /D <i>var</i>=<i>value</i>   Defines variable with specified value. (may be repeated).
                  Equivalent to using .Set in a directives file.
                  For example, a single directive file could be used to produce layouts
                  for different disk sizes by running MakeCAB once with different values of
                  MaxDiskSize defined: /D MaxDiskSize=1.44M. Both standard MakeCAB variables
                  and custom variables can be defined in this way.

                  If .Option Explicit is specified in a directive file,
                  then <i>variable</i> must be defined with a .Define command in a directive file.
                  To use a variable substitution (as in the directive file with %)
                  use double %%

   /L <i>dir</i>         Folder location to place destination file (default is current directory).
                  most useful when <i>destination</i> is not specified.

   /V[<i>n</i>]          Verbosity level (1..3)  1=default, 3=Verbose. ( 0=none undocumented )</pre>
<p>A single  CAB file can be used to store a maximum of 65,535 files with a total size of up to 1.99 GiB. To compress multiple files into a single CAB file, use a directive file containing a list of the files to compress and package.</p>
<p>The  default destination name is constructed from the source file name                plus an extension that can be defined via the CompressedFileExtensionChar variable.               ( <span class="code">MAKECAB /D CompressedFileExtensionChar=c</span> )</p>
<p>The MakeCAB defaults are configured for a floppy disk layout.</p>
<p><b>Examples</b></p>
<p>Create a .CAB archive containing a single file:</p>
<p><span class="code">C:\&gt; makecab "recording.wav" "recording.cab" /L "C:\Archive"</span></p>
<p>Create a .CAB archive containing multiple files, first create <span class="code">SS64.ddf</span> as a plain text file:</p>
<p><span class="code">.OPTION EXPLICIT</span><br>
<span class="code">;  &nbsp;&nbsp;&nbsp;CabinetNameTemplate is the name of the output CAB file:<br>
.Set CabinetNameTemplate=Destination.CAB<br>
.Set Cabinet=on<br>
.Set Compress=on<br>
"file1.dat"<br>
"file2.iso" <br>
"file3.wav"</span><br>
<br>
<span class="code">C:\&gt; makecab /F SS64.ddf</span><br>
</p>
<p>Create a self extracting archive containing movie.mov:</p>
<p><span class="code">C:\&gt; makecab movie.mov "temp.cab"<br>
C:\&gt; copy  /b  "%windir%\system32\extrac32.exe"+"temp.cab" "movie.exe"<br>
C:\&gt; del /q /f "temp.cab"</span></p>
<p class="quote"><i>“One resolution I have made, and try always to keep, is this: To rise above little things” - John Burroughs</i> </p>
<p><b>Related:</b><br>
<br>
<a href="extract.html">EXTRACT</a> - Uncompress CAB files<br>
<a href="expand.html">EXPAND</a> - Uncompress one or more compressed files.<br>
CABARC - <a href="http://technet.microsoft.com/en-us/ie/bb219517.aspx">Internet Explorer Administration Kit</a> (previously part of the  XP SP 2 Support Tools.)<br>
<a href="syntax-genchr.html">GenChr.cmd</a> - Generate an ASCII/Unicode character<br>
<a href="http://wspbuilder.codeplex.com/">WSP Builder</a> - SharePoint WSP tool</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="makecab.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
