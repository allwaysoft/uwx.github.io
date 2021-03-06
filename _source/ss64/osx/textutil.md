---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>textutil</h1> 
<p>Manipulate text files in various formats, textutil first appeared in  OS X 10.4</p>
<pre>Syntax

       textutil -info [<i>options</i>] <i>file</i> ...
       textutil -convert <i>fmt</i> [<i>options</i>] <i>file</i> ...
       textutil -cat <i>fmt</i> [<i>options</i>] <i>file</i> ...
       textutil -<u>help</u> [<i>options</i>] <i>file</i> ...

Key
     -help         Show the usage information and exit.

     -info         Display information about the specified files.

     -convert <i>fmt</i>  Convert the files to format <i>fmt</i> and
                   write each one back to the file system.

     -cat <i>fmt</i>      Read the specified files, concatenate them, and write the
                   result out as a single file in the indicated format.

     <i>fmt</i>           One of:  txt, html, rtf, rtfd, doc, wordml, or webarchive

     -extension <i>ext</i>  Specify an extension to be used for output files (by
                     default, the extension will be determined from the format).

     -output <i>path</i>    The file name to be used for the first output file.

     -stdout         Send the first output file to stdout.

     -encoding <i>IANA_name</i> | <i>NSStringEncoding</i>
                     The encoding to be used for plain text or HTML output
                     (by default, the output encoding will be UTF-8).

     -inputencoding <i>IANA_name</i> | <i>NSStringEncoding</i>
                     Force all plain text input files to be interpreted using
                     the specified encoding (by default, a file's encoding
                     will be determined from its BOM).

     -format <i>fmt</i>     Force all input files to be interpreted using the indicated 
                     cated format (by default, a file's format will be determined
                     mined from its contents).

     -font <i>font</i>      The font to be used when converting to rich text.

     -fontsize <i>size</i>  Font size (in points) to be used for converting plain to rich text.

     --              Specify that all further arguments are file names.

Additional options for HTML and WebArchive files:

     -noload          Do not load subsidiary resources.
     -nostore         Do not write out subsidiary resources.
     -baseurl <i>url</i>     Specify a base URL to be used for relative URLs.
     -timeout <i>t</i>       Specify the time in seconds to wait for resources to
                      load.
     -textsizemultiplier <i>x</i>
                      Specify a numeric factor by which to multiply font
                      sizes.
     -excludedelements (<i>tag1, tag2</i>, ...)
                      Specify which HTML elements should not be used in generated 
                      ated HTML (the list should be a single argument, and so
                      will usually need to be quoted in a shell context).
     -prefixspaces <i>n</i>  Specify the number of spaces by which to indent nested
                      elements in generated HTML (default is 2).

Additional options for treating metadata:

     -strip        Do not copy metadata from input files to output files.
     -title <i>val</i>    Specify the title metadata attribute for output files.
     -author <i>val</i>   Specify the author metadata attribute for output files.
     -subject <i>val</i>  Specify the subject metadata attribute for output files.
     -keywords (<i>val1, val2</i>, ...)
                   Specify the keywords metadata attribute for output files
                   (the list should be a single argument, and so will usually
                   need to be quoted in a shell context).

     -comment <i>val</i>  Specify the comment metadata attribute for output files.
     -editor <i>val</i>   Specify the editor metadata attribute for output files.
     -company <i>val</i>  Specify the company metadata attribute for output files.
     -creationtime <i>yyyy-mm-ddThh:mm:ssZ</i>
                   Specify the creation time metadata attribute for output
                   files.

     -modificationtime <i>yyyy-mm-ddThh:mm:ssZ</i>
                   Specify the modification time metadata attribute for output
                   files.
</pre>
<p><b>Examples</b>:<br>
<br>
Display information about foo.rtf.<br>
<span class="code">$ textutil -info foo.rtf</span><br>
<br>
Convert foo.rtf into foo.html.<br>
<span class="code">$ textutil -convert html foo.rtf</span><br>
<br>
Convert foo.txt into foo.rtf, using Times 10 for the font.<br>
<span class="code">$ textutil -convert rtf -font Times -fontsize 10 foo.txt</span><br>
<br>
Load all RTF files in the current directory, concatenate their contents,
and write the result out as index.html with the HTML title set to
Several Files".<br>
<br>         
<span class="code">$ textutil -cat html -title "Several Files" -output index.html *.rtf</span><br>
<br>   
Create a .txt file for each .doc file in the directory.<br>       
<span class="code">$ textutil -convert txt *.doc</span></p>
<p>Notes:<br>
The textutil command exits 0 on success, and 1 on failure. <br>
Some options may require a connection to the window server.</p>
<p class="quote"><i>“A lot of people are afraid to say what they want, that's why a lot of people don't get what they want” ~ Madonna</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/textutil.1.html">textutil man page</a> - Apple.com<br>  
<a href="getfileinfo.html">GetFileInfo</a> - Get attributes of HFS+ files<br>
<a href="pr.html">pr</a> - Convert text files for printing<br>
<a href="say.html">say</a> - Convert text to audible speech<br>
<a href="setfile.html">setfile</a> - Set attributes of HFS+ files<br>
<a href="sips.html">sips</a> - Scriptable image processing system</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="textutil.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
