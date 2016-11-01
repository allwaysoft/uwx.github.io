---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>mdutil</h1> 
<p>Manage the metadata stores used by Spotlight.</p>
<pre>Syntax
      mdutil [-pEsav] [-i on | off] <i>volume</i> ...

Key
   -p  Spotlight caches indexes of some network devices locally.  This
       option requests that all local caches be flushed to the appropriate
       network device.

   -E  This flag will cause each local store for the volumes indicated to be
       erased. The stores will be rebuilt if appropriate.

   -i on | off
       Set the indexing status for the provided volumes to on or off.  Note
       that indexing can  be delayed due to low disk space or other conditions.

   -s  Display the indexing status of the listed volumes.

   -a  Apply command to all volumes.

   -v  Print verbose information when available.</pre>
<p>To get a list of the available attributes for use in constructing queries, see mdimport(1), particularly the -X switch.</p>
<p><b>Examples</b></p>
<p>Show the indexing status of the root volume:</p>
<p class="code"> $ mdutil -s /</p>
<p>Erase and rebuild the spotlight index: </p>
<p class="code"> $ mdutil -E</p>
<p class="quote"><i>“After all these years, I am still involved in the process of self-discovery. It's better to explore life and make mistakes than to play it safe. Mistakes are part of the dues one pays for a full life” ~ Sophia Loren</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/mdutil.1.html">mdutil man page</a> - Apple.com<br>
<a href="find.html">find</a> - Search for files that meet a desired criteria<br>
<a href="mdfind.html">mdfind</a> - Spotlight search<br>
mdimport - Import file hierarchies into the Spotlight datastore<br>
mdls - List the metadata attributes for a specified file.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mdutil.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
