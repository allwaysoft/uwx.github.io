---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-Zipfile, Expand-Zipfile</h1>
<p>PowerShell 5.0 we have the <a href="compress-archive.html">Compress-Archive</a> and <a href="expand-archive.html">Expand-Archive</a> cmdlets.</p>
<p>Prior to PowerShell 5.0 there is no built-in cmdlet for zipping files, but in PowerShell 3/4 with .Net 4.5 (or greater) we can use the classes <a href="http://msdn.microsoft.com/en-us/library/system.io.compression.zipfile.aspx">ZipFile</a> and <a href="http://msdn.microsoft.com/en-us/library/system.io.compression.ziparchive.aspx">ZipArchive</a>. <br>
To use these new classes,  use<span class="code"> Add-Type</span> to import the System.IO.Compression.FileSystem assembly, like so: </p>
<p class="code">Add-Type -As System.IO.Compression.FileSystem [IO.Compression.ZipFile]<br>
::CreateFromDirectory( ('C:work\demo'), "demo.zip", "Optimal", $true )</p>
<p>To make this a little easier to type use the Zipfile functions (from  Joel Bennett), which you can download <a href="zip.txt">here</a> or <a href="http://poshcode.org/4845">here</a>.</p>
<pre>Syntax
      New-Zipfile [-ZipFilePath] <i>object</i> [-InputObject] <i>string</i>[]
         [-Append] [-compression {Optimal | Fastest | nocompression}] [<i>CommonParameters</i>]

key
    -ZipFilePath    The path of the zip to create.
    -InputObject    Items that we want to add to the ZipFile.
    -Append         Append to an existing zip file instead of overwriting it.
    -Compression    The compression level (defaults to Optimal):
        Optimal   - The compression operation should be optimally compressed, even if
                    the operation takes a longer time to complete.
        Fastest   - The compression operation should complete as quickly as possible,
                    even if the resulting file is not optimally compressed.
        NoCompression - No compression should be performed on the file.
     <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer, -PipelineVariable, -OutVariable.<br></pre>
<p>Expand a zip file to a  folder:</p>
<pre>Syntax
      Expand-ZipFile [-FilePath] <i>Object</i> [[-OutputPath] <i>Object</i>] [-Force] [<i>CommonParameters</i>]

Key
    -FilePath      The path of the zip file that needs to be extracted.
    -OutputPath    The path where we want the output folder to end up.
    -Force         Name the resulting folder the same as the archive.
    <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer, -PipelineVariable, -OutVariable.</pre>
<p>To make these Zip functions available all the time, add them to your PowerShell <a href="syntax-profile.html">profile</a>.</p>
<p><b>Examples</b></p>
<p>Zip the folder <span class="code">C:work\demo</span>:</p>
<p><span class="code">PS C:\&gt; New-Zipfile 'c:\scripts\demo.zip' 'C:work\demo</span>'</p>
<p>Un-Zip the file <span class="code">backup.zip</span>:</p>
<p class="code">PS C:\&gt; Expand-Zipfile 'c:\scripts\backup.zip'</p>
<p class="quote"><i>“Since time is the one immaterial object which we cannot influence--neither speed up nor slow down, add to nor diminish--it is an imponderably valuable gift” ~ Maya Angelou</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-functions.html">Functions and Filters</a> - Named blocks of code.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
