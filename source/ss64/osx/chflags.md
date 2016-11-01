---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>chflags</h1> 
<p>Change a file or folder's flags.</p>
<pre>Syntax 
      chflags [-R [-H | -L | -P]] <i>flags file </i>...

Options
   -R      Recurse: Change the file flags of file hierarchies rooted in the files
           instead of just the files themselves.

   -R -H   Follow symbolic links on the command line
          (by default Symbolic links within the tree are not followed.)      

   -R -L   All symbolic links are followed.

   -R -P   No symbolic links are followed. (default)
</pre>
<p>The flags are specified as an octal number or a comma separated list of keywords.</p>
<pre>             hidden           set the hidden flag [Hide item from GUI]</pre>
<p>Keywords and keyword aliases - Owner or Super-user only:</p>
<pre>             opaque           set the opaque flag 
             nodump           set the nodump flag 
             uappnd, uappend  set the user append-only flag
   uchg, uchange, uimmutable  set the user immutable flag
             uunlnk, uunlink  set the user undeletable flag
</pre>
<p>Keywords and keyword aliases - Ssuper-user only:</p>
<pre>             arch, archived   set the archived flag
             sappnd, sappend  set the system append-only flag
   schg, schange, simmutable  set the system immutable flag
             sunlnk, sunlink  set the system undeletable flag</pre>
<p>The immutable flag is equivalent to locking the file in the Finder's Show Info box.<br>
<br>
Putting the letters <span class="code">no</span> before an option causes the flag to be turned off.</p>
<pre>  For example:
       uchg    Means the file cannot be changed
     <b>no</b>uchg    Means the file can be changed (immutable bit cleared)
        hidden  Will set the hidden flag
      <b>no</b>hidden  Will remove the hidden flag</pre>
<p>Symbolic links do not have flags, so unless the -H or -L option is set,
chflags on a symbolic link always succeeds and has no effect.  The -H, -L
and -P options are ignored unless the -R option is specified.  In addition, these options override each other and the command's actions are<br>
determined by the last one specified.</p>
<p>The sappnd and schg flags can only be unset
when the system is in single-user mode. chflags(2).<br>
<br>
Use <span class="code">ls -lo</span> to see the flags of existing files.</p>
<p>The return status is zero if the mode is successfully changed,and &gt;0 if an error occurs.</p>
<p><b>Examples</b><br>
<br>
Lock the file or folder named "finance" against changes<br>
<span class="code">$ chflags uchg finance</span><br>
<br>
Make the folder <span class="code">~/Library</span> visible (this was the default setting prior to OS X Lion )<br>
<span class="code">$ chflags nohidden ~/Library</span>
</p><p>(An alternative method is to use the 'Go' drop down menu in Finder and hold down the <span class="code">option</span> key.)
</p><p>Hide the folder <span class="code">~/Library</span><br>
<span class="code">$ chflags hidden ~/Library</span>
</p><p>Make the file <span class="code">MyLogs.txt</span> append-only<br>
<span class="code">$ chflags uappnd MyLogs.txt</span><br>
<br>
Unlock your Documents directory and everything in it<br>
<span class="code">$ chflags -R nouchg ~/Documents </span>
</p><p><i class="quote">“Fifteen referees. I want fifteen referees to be at this fight because there ain't no one man who can keep up with the pace I'm gonna set except me. There's not a man alive who can whup me. I'm too fast. I'm too smart. I'm too pretty. I should be a postage stamp. That's the only way I'll ever get licked” 
~ Muhammad Ali</i><br>
<br>
<b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/chflags.1.html">chflags man page</a> - Apple.com<br>
<a href="http://support.apple.com/kb/ht1526">ht1526</a> - Empty the (locked) trash with chflags<br>
<a href="ln.html">ln</a> - Make links between files (hard links, symbolic links)<br>
<a href="ls.html">ls</a> - List information about file(s) <br>
<a href="setfile.html">setfile</a> - Set attributes of HFS+ files</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="chflags.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
