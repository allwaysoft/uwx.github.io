---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>dot_clean</h1> 
<p>Remove dot-underscore files. Merges<span class="code"> ._* </span>files with corresponding native files.</p>
<pre>Syntax
      dot_clean [-fmnsv] [--keep=[mostrecent|dotbar|native]] [<i>dir</i> ...]

Key
   -f    Flat merge.  Do not recursively merge all directories in the
         given dir.  This is off by default.

   -h    Help. Prints verbose usage message.

   -m    Always delete dot underbar files.

   -n    Delete dot underbar file if there is no matching native file.

   -s    Follow symbolic links.  This will follow symbolic dot underbar
         files when they are found.

   -v    Print verbose output.

   --keep=mostrecent
         The default option.  If an attribute is associated with a data
         fork, use that.  Otherwise, use information stored in the Apple-
         Double file.

   --keep=dotbar
         Always use information stored in the AppleDouble file, replacing
         any extended attributes associated with the native file.

   --keep=native
         Always use the information associated with the data fork, ignoring
         any AppleDouble files.</pre>
<p>For each <i><span class="code">dir</span></i>, dot_clean recursively merges all ._* files with their corresponding native files according to the rules specified with the given arguments.  By default, if there is an attribute on the native file that is also present in the ._ file, the most recent attribute will be used. If no operands are given, a usage message is output. If more than one directory is given, directories are merged in the order in which they are specified.</p>
<p>The dot_clean utility exits 0 on success, and &gt;0 if an error occurs.</p>
<p><b>Example</b></p>
<p> Perform a dot_clean merge on the mounted volume 'test',      always using the dot underbar information.            </p>
<p class="code">dot_clean --keep=dotbar /Volumes/test</p>
<p><span class="quote"><i>“Don’t waste your crazy” ~ <a href="http://www.elle.com/pop-culture/celebrities/a-new-albumand-lifefor-fiona-apple-656787">Fiona Apple</a></i></span></p>
<p><b>Related:</b></p>
<p><a href="bless.html">bless</a> - Set volume bootability and startup disk options</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dot_clean.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
