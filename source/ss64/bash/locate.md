---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>locate</h1> 
<p>Find files. </p>
<pre>Syntax
      locate [<i>options</i>]<i> pattern</i>

Options

   -d path, --database=path
                Search databases in path.
                path must be a colon- separated list.

   -h, --help   Print a help message and exit.

   --version    Print version information and then exit.</pre>
<p>Search database(s) of filenames and print matches. *, ?, [, and ] are treated specially; / and . are not. </p>
<p>Matches include all files that contain pattern, unless pattern includes metacharacters, in which case locate requires an exact match.</p>
<p>If locate does not work, run the command: <a href="slocate.html">slocate -u</a> to rebuild the index.</p>
<h2>Faster Searches</h2>
<blockquote>
<p>On modern hardware it is often faster to create and search an uncompressed index file of all filenames than to use the compressed locate database, source: Julia Evans [<a href="http://jvns.ca/blog/2015/03/05/how-the-locate-command-works-and-lets-rewrite-it-in-one-minute/">x</a>]</p>
<p class="code">sudo find / &gt; database.txt<br>
grep Alanis database.txt</p>
</blockquote>
<p class="quote"><i>[I do not] carry such information in my mind since it is readily available in books. ...The value of a college education is not the learning of many facts but the training of the mind to think ~ Albert Einstein</i></p>
<p><b>Related:</b></p>
<p>udpatedb - Update the database for locate (usually run daily by <a href="cron.html">cron</a> to update the default database.)<br>
<a href="slocate.html">slocate</a> - Security Enhanced version of GNU Locate (users won't see files they don't have access to.)<br>
<a href="find.html"> find</a> - Search for files that meet a desired criteria<br>
fnmatch<br>
weekly.conf<br>
Equivalent Windows command: <a href="dir.html">DIR</a> /S - Display a list of files and folders</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="locate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

