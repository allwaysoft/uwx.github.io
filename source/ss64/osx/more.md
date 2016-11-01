---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>more</h1> 
<p>Page through text one screenful at a time, <a href="less.html">less</a> 
provides <i>more</i> emulation and extensive enhancements.</p>
<pre>Syntax

     more [-dlfpcsu] [-num] [+/ <i>pattern</i>] [+ <i>linenum</i>] [<i>file</i> ...]

Options
     -num  This option specifies an integer which is the screen size (in
           lines).

     -d    more will prompt the user with the message "[Press space to continue,
           'q' to quit.]" and will display "[Press 'h' for instructions.]"
           instead of ringing the bell when an illegal key is pressed.

     -l    more usually treats ^L (form feed) as a special character, and will
           pause after any line that contains a form feed.  The -l option will
           prevent this behavior.

     -f    Causes more to count logical, rather than screen lines (i.e., long
           lines are not folded).

     -p    Do not scroll.  Instead, clear the whole screen and then display
           the text.

     -c    Do not scroll.  Instead, paint each screen from the top, clearing
           the remainder of each line as it is displayed.

     -s    Squeeze multiple blank lines into one.

     -u    Suppress underlining.

     +/    The +/ option specifies a string that will be searched for before
           each file is displayed.

     +num  Start at line number num.</pre>
<p> The -n and -v options are non-standard and their use in scripts 
  is not recommended. </p>
<p>When the output of <span class="code">more</span> is redirected to a file, it outputs a small header for each file:<br>
<span class="code">{% raw %}:::{% endraw %}{% raw %}:::{% endraw %}{% raw %}:::{% endraw %}{% raw %}:::{% endraw %}:: filename.txt {% raw %}:::{% endraw %}{% raw %}:::{% endraw %}{% raw %}:::{% endraw %}{% raw %}:::{% endraw %}::</span></p>
<p class="quote"><i>"If I had my life to live over, I'd make more mistakes next time. I would relax. I would limber up..." ~ Jenny Joseph</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/less.1.html">lsss man page</a> - Apple.com<br>
<a href="echo.html">echo</a> - Display message on screen<br>
<a href="less.html">less</a> - Display output one screen at a time<br>
<a href="tee.html">tee</a> - Redirect output to multiple files</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="more.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
