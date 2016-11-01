---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>tail</h1> 
<p>Display the last part of a file. Display the contents of file 
or, by default, its standard input, to the standard output.</p>
<pre>Syntax
      tail [-F | -f | -r] [-b <i>number</i> | -c <i>number</i> | -n <i>number</i>] [<i>file</i> ...]

Key 
<b>   -b</b> <i>number</i>
       The location is <i>number</i> 512-byte blocks.

   <b>-c</b> <i>number</i>
       The location is <i>number</i> bytes.

   <b>-f
</b>       Don't stop when end of file is reached, but rather to wait for  
       additional data to be appended to the input.
       (ignored if the standard input is a pipe, but not if it is a FIFO)

   <b>-F</b>
       The <b>-F</b> option implies the <b>-f</b> option, but <b>tail</b> will also check to
       see if the file being followed has been renamed or rotated.  The
       file is closed and reopened when <b>tail</b> detects that the filename
       being read from has a new inode number.  The <b>-F</b> option is ignored
       if reading from standard input rather than a file.

   <b>-n</b> <i>number</i>
       The location is <i>number</i> lines.

   <b>-r</b>
       Causes the input to be displayed in reverse order,by line.
       Additionally, this option changes the meaning of the
       <b>-b</b>, <b>-c</b> and <b>-n</b> options.  When the <b>-r</b> option is specified, these
       options specify the number of bytes, lines or 512-byte blocks to
       display, instead of the bytes, lines or blocks from the beginning
       or end of the input from which to begin the display.  The default
       for the <b>-r</b> option is to display all of the input.    </pre>
<p>If more than a single file is specified, each file is preceded by a header consisting of the string ``==&gt; XXX &lt;=='' where ``XXX'' is the name of the file.</p>
<p>The Process Control <a href="syntax-bashkeyboard.html">keyboard shortcuts</a> can be used while <span class="code">tail</span> is running.</p>
<p>The display begins at a byte, line or 512-byte block location in the input. </p>
<p>Numbers having a leading plus (`+') sign are relative to the beginning of the input, for example, `-c +2' starts the display at the second byte of the input. Numbers having a leading minus (`-') sign or no explicit sign are relative to the end of the input, for example, `-n 2' displays the last two lines of the input. </p>
<p>The default starting location is `-n 10', or the last 10 lines of the input.</p>
<h2>Common Log File locations</h2>
<blockquote>
<p class="code">/private/var/log<br>
/Library/Logs<br>
~/Library/Logs</p>
<p>The /private folder is hidden for protection. To view it with Finder, select Go &gt; Go to Folder</p>
</blockquote>
<p><b>Examples</b></p>
<p>Extract the last 20 lines from a file: </p>
<p class="code"> $ tail -20 file,txt</p>
<p>Output the newly appended lines of a file instantly:</p>
<p class="code">$ tail -f /var/log/wifi.log</p>
<p>Output newly appended lines, and keep trying if the file  is temporarily inaccessible:</p>
<p><span class="code"> $ tail -F /var/log/wifi.log</span></p>
<p>DIsplay the last 40 lines from the system.log, continue until Ctrl-C is pressed:</p>
<p class="code">$ tail -40 -f /var/log/system.log</p>
<p>Extract lines 40-50 from a file, first using <span class="body"><a href="head.html">head</a></span> to get the first 50 lines then tail to get the last 10: </p>
<p class="code"> $ head -50 file.txt | tail -10</p>
<p class="quote"><i>"Money will buy a pretty good dog, but it won't buy the wag of his tail" ~ Henry Wheeler Shaw</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/tail.1.html">tail man page</a> - Apple.com<br>
<a href="head.html">  head</a> - Display the first lines of a file<br>
Console.app (Applications/Utilities) - Display OS X log files<br>
<a href="http://lnav.org/">LNav.org</a> - Log file Navigator</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="tail.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
