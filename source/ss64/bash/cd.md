---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>cd</h1>  
<p>Change Directory - change the current working 
  directory to a specific Folder.<br>
</p>
<pre>Syntax 
      cd [<i>Options</i>] [<i>Directory</i>]

Key
    -P    Do not follow symbolic links
    -L    Follow symbolic links (default)</pre>
<p>If <var>directory</var> is given, changes the shell's working directory to<var>directory</var>. If not, changes to <span class="code">HOME</span> (shell variable).<br>
<br>
If the shell variable <code>CDPATH</code> exists, it is used as a search path. 
<br>
If <var>directory</var> begins with a slash, <code>CDPATH</code> is not used. 
<br>
<br>
If <var>directory</var> is <samp>`-'</samp>, this will change to the previous 
directory location (equivalent to <code>$OLDPWD</code> ). <br>
<br>
The return status is zero if the directory is successfully changed, non-zero otherwise.</p>
<p><b>Examples</b><br>
<br>
Move to the sybase folder<br>
<span class="code">$ cd  /usr/local/sybase<br>
$ pwd<br>
/usr/local/sybase</span><br>
<br>
Change to another folder<br>
<span class="code">$ cd /var/log<br>
$ pwd<br>
/var/log</span><br>
<br>
Quickly get back<br>
<span class="code">$ cd - <br>
$ pwd<br>
/usr/local/sybase</span><br>
<br>
move up one folder<br>
<span class="code">$ cd ..<br>
$ pwd<br>
/usr/local/</span><br>
<br>
<span class="code">$ cd</span>     (Back to your home folder)</p>
<p><i class="quote">"I believe entertainment can aspire to be art, and can 
  become art, but if you set out to make art you're an idiot" ~ <a href="http://www.stevemartin.com/">Steve 
  Martin</a> </i><br>
  <br>
  <b> Related:</b><br>
  <br>
  <a href="pwd.html">pwd</a> - Print Working Directory<br>
  Equivalent Windows  command:
<a href="../nt/cd.html">CD</a> - Change Directory </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

