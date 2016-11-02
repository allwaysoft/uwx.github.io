---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>rmdir</h1> 
<p>Remove Directory (Delete folders)</p>
<pre>Syntax
          rmdir [-p] <i>folder</i> ...

key
   -p      Each folder argument is treated as a pathname of which all
           components will be removed, if they are empty, starting with the
           last most component. (See <a href="rm.html">rm</a> for fully non-discriminant recursive removal.)</pre>
<p> The rmdir utility removes the entry specified by each folder argument, provided it is empty. </p>
<p>Arguments are processed in the order given. To remove both a parent and subfolder, the subfolder must be specified first so the parent is empty 
  when rmdir tries to remove it.</p>
<p>If an error occurs, rmdir exits with a value &gt;0. </p>
<pre>EXAMPLES

To delete all these folders:
    MyFolder/
    MyFolder/SubFolder
    My Other Folder/
Use the command
  rmdir MyFolder/SubFolder MyFolder "My Other Folder"
</pre>
<p class="quote"><i>"Two years ago, I reported that Katherine Harris and Jeb Bush ordered county election officials to erase 57,000 voters from voter rolls - most of them Black. It cost Gore the White House" ~ Greg Palast</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/rmdir.1.html">rmdir man page</a> - Apple.com<br>
<a href="rm.html">rm</a> - Remove files or folders (including recursive delete)<br>
<a href="cp.html">cp</a> - Copy files<br>
<a href="ls.html">ls</a> - List information about files</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rmdir.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
