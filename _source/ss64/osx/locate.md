---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>locate</h1> 
<p>Find files. </p>
<pre>Syntax
      locate <i>pattern</i></pre>
<p> locate searches a database for all pathnames which match the specified pattern. The database is recomputed periodically, (about once a week) and contains the path-names of all files which are publicly accessible. </p>
<p>Shell globbing and quoting characters (`*', `?', ``\'', `[' and `]') can be used in pattern, although they will have to be escaped from the shell. </p>
<p>Preceding any character with a backslash (`\') eliminates any special meaning which it can have. The matching differs in that no characters must be matched explicitly, including slashes (`/'). </p>
<p>As a special case, a pattern containing no globbing characters (`foo') is matched as though it were `*foo*'.. </p>
<p>To force a build/update of the database:<br>
<br>
<span class="code"> $ sudo /usr/libexec/locate.updatedb</span></p>
<p><b>Examples</b><br>
<br>
 Search the database for files with names containing "foo",<br>
or in folders with names containing "foo"<br>
<br>   
<span class="code">$ locate foo</span><br>
<br>
Search the database for files (but not in folders) with names ending in ".jpg"<br>
<br>
<span class="code">$ locate '*.jpg'</span></p>
<h2> File locations</h2>
<blockquote>
<p> Database<br>
<span class="code">/var/db/locate.database</span><br>
<br>
Script to update database<br>
<span class="code">/usr/libexec/locate.updatedb</span></p>
</blockquote>
<h2>Faster Searches</h2>
<blockquote>
<p>On modern hardware it is often faster to create and search an uncompressed index file of all filenames than to use the compressed locate database, source: Julia Evans [<a href="http://jvns.ca/blog/2015/03/05/how-the-locate-command-works-and-lets-rewrite-it-in-one-minute/">x</a>]</p>
<p class="code">sudo find / &gt; database.txt<br>
grep Alanis database.txt</p>
</blockquote>
<p class="quote"> <i>[I do not] carry such information in my mind since it is readily available in books. ...The value of a college education is not the learning of many facts but the training of the mind to think ~ Albert Einstein</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/locate.1.html">locate man page</a> - Apple.com<br>
<a href="find.html">find</a> - Search for files that meet a desired criteria<br>
<a href="grep.html">grep</a> - Search file(s) for lines that match a given pattern<br>
<a href="ln.html">ln</a> - Make links between files (hard links, symbolic links)<br>
<a href="ls.html">ls</a> - List information about file(s)<br>
<a href="mdfind.html">mdfind</a> - Spotlight search<br>
<a href="whereis.html">whereis</a> - Locate a command.<br>
<a href="which.html">which</a> - Locate a program file in the user's path</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
