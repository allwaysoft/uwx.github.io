---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>open</h1> 
<p>Open a file or folder.<br>
The open command opens a file (or a folder or URL), just as if you had double-clicked the file's icon. </p>
<pre>Syntax
      open [<i>options</i>] [-b <i>bundle_identifier</i>] [-a <i>application</i>] file ...
         [--args <i>arg1 </i>...]

Key
   -a <i>application</i>
         The application to use for opening the file

   -b <i>bundle_indentifier</i>
         The bundle identifier for the application to use when opening the file.

   -D    Reveal the enclosing folder in finder. 

   -e    Open the file with /Applications/TextEdit

   -t    Open the file with the default text editor, as determined via Launch-Services

   -f    Read input from standard input and open the results in the default text editor.
         End input by sending EOF character (type Control-D).  Also useful for piping output
         to open and having it open in the default text editor.

   -F    Open the application "fresh," that is, without restoring windows. Saved persistent
         state is lost, except for Untitled documents.

   -W    Wait until the applications exit (even if they were already open).
         Use with the -n flag to allow open to function as an appropriate app for the
         $EDITOR environment variable.

   -R    Reveal the file(s) in the Finder instead of opening them.

   -n    Open a new instance of the application(s) even if one is already running.

   -g    Do not bring the application to the foreground.

   -h    Search header locations for a header whose name matches the given string and then
         open it.  Pass a full header name (such as NSView.h) for increased performance.

   --args
         All remaining arguments are passed to the opened application in the argv parameter to
         main().  These arguments are not opened or interpreted by the open tool.</pre>
<p> If no application name is specified, the default application as determined via LaunchServices is used to open the specified files.<br>
You can specify one or more file names (or pathnames), which are interpreted relative to the shell or Terminal window's current working directory. e.g. open *.doc</p>
<p><b>Examples</b></p>
<p>Open the current terminal working directory<br> 
<span class="code">$ open .</span><br>
<br>
Open demo.txt in the default application (as determined by LaunchServices).<br> 
<span class="code">$ open demo.txt </span><br>    
or<br>
<span class="code">$ open /Volumes/Macintosh HD/demo.txt </span><br>
or<br> 
<span class="code">$ open file://localhost/Volumes/Macintosh HD/demo.txt</span><br>
<br>
Reveal in finder, the enclosing folder for a directory or file<br>
<span class="code">$ open -D demo.txt</span></p>
<p>Open a folder in the Mac  Finder.<br> 
<span class="code">$ open /Volumes/Macintosh HD/Applications/</span><br>    
or<br> 
<span class="code">$ open file://localhost/Volumes/Macintosh HD/Applications/</span><br>
<br>Open demo.txt with a specific application (in this case, TextEdit).<br> 
<span class="code">$ open -a /Applications/TextEdit.app /Volumes/Macintosh HD/demo.txt</span><br>
<br>Open a URL <br> 
<span class="code">$ open http://ss64.com/</span></p>
<p>Pipe the output of <a href="cal.html">cal</a> into TextEdit<br>
<span class="code">$ cal | open -a TextEdit -f</span><br>
<br>
Edit demo.txt (will open in TextEdit)<br>  
<span class="code">$ open -e /Volumes/Macintosh HD/foo.txt</span></p>
<p class="quote"><i>“Clothes make the man. Naked people have little or no influence on society” ~ Mark Twain </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/open.1.html">open man page</a> - Apple.com<br>lesskey - <br>
<a href="echo.html">echo</a> - Display message on screen<br>
<a href="tee.html">tee</a> - Redirect output to multiple files <br>
The <a href="http://www.greenwoodsoftware.com/less/">less home page</a> (Mark Nudelman)<br>
<a href="http://support.apple.com/kb/TA24770">Article: TA24770</a> - Clear the Finder "Open With" contextual menu (rename <span class="code">/Library/Preferences/com.apple.LaunchServices.plist</span>).</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="open.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
