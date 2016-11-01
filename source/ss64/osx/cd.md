---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>cd</h1> 
<p>Change Directory - change the current working Folder.</p>
<pre>Syntax 
      cd [-L|-P] [<i>dir</i>]

Key
   -P   Use the physical directory structure instead of following symbolic links
        (see also the -P option to the set builtin command)

   -L   Force symbolic links to be followed</pre>
<p>If a <i>dir</i> is given, changes the shell's working directory to <i>dir</i>. If not, changes to <span class="code">HOME</span> (shell variable).</p>
<p><span class="code">$ cd -</span> will go back to the last folder you looked at. (Previous 
directory - equivalent to $OLDPWD)</p>
<p>CDPATH</p>
<p>The shell variable CDPATH provides a useful  feature,  this variable is similar to PATH but it sets up a list of   paths where <span class="code">cd</span> will search for  subdirectories. CDPATH can be set on the command line for use in the current session, or in<span class="code"> .bash_profile</span> for permanent use, the list of paths must be colon separated (<span class="code">:</span>)</p>
<p class="code">$ CDPATH=".:~:~/Library"</p>
<p>If <i>dir</i> begins with a slash (/), then CDPATH is not used. </p>
<p>If a non-empty directory name from CDPATH is used, or if - is the first argument, and the directory change is successful, the absolute pathname of the new working directory is written to the standard output. </p>
<p>The return value is true if the directory was successfully changed; false otherwise.</p>
<p><b>Examples<br>
</b><br>
Move to a subfolder named "Documents"<br> 
<span class="code">$ cd Documents</span><br>
<br>
move to the fonts folder<br> 
<span class="code">$ cd /library/fonts<br> 
$ pwd<br> 
cd /library/fonts</span><br>
<br>
Change to another folder<br> 
<span class="code">$ cd ~/music<br> 
$ pwd<br> 
/Users/kate/music</span><br>
<br>
Move up to the parent directory (<span class="code">/Users/kate/</span>)<br> 
<span class="code">cd ..</span><br>
<br>
To move up two levels:<br> 
<span class="code">$ cd ../..</span><br>
<br>
Move to the top of the boot volume<br> 
<span class="code">$ cd /</span><br>
<br>

Move to your home directory<br> 
<span class="code">$ cd ~</span><br>
or simply:
<br>
<span class="code">$ cd</span><br>
<br>
Move to a folder when the folder name includes spaces, parentheses
or any other punctuation:<br> 
<span class="code">$ cd 'AppleWorks User Data'</span><br>
<span class="quote"><br>
<i>“In times of change, learners inherit the earth, while the learned find themselves equipped to deal with a world that no longer exists” ~ Eric Hoffer</i></span><br>
<br>
<b> Related:</b></p>
<p><a href="pwd.html">pwd</a> - Print Working Directory</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="cd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
