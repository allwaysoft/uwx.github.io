---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>screencapture</h1> 
<p>Capture an image of the whole, or part of the screen. </p>
<pre>Syntax
       screencapture [<i>options</i>] [<i>file</i>]
<br>Key
   -c   Force screen capture to go to the clipboard.
   -C   Capture the cursor as well as the screen.  Only allowed in 
        non-interactive modes.

   -d   Display errors to the user graphically.

   -i   Capture screen interactively, by selection or window.
          The control key = copy screen to the clipboard.
          The space key will toggle between mouse selection and
             window selection modes.
          The escape key will cancel the screen shot.

   -m   Only capture the main monitor, undefined if -i is set.
   -M   Open the taken picture in a new Mail message.

   -o   In window capture mode, do not capture the shadow of the window.

   -P   Open the taken picture in a Preview window.

   -s   Only allow mouse selection mode.
   -S   In window capture mode, capture the screen instead of the window.

   -t <i>format</i>   Image format to create, default is png (other options
               include pdf, jpg, tiff and others).

   -T <i>seconds</i>  Take the picture after a delay of <i>seconds</i>, default=5
               Handy for arranging windows/menus before taking the screenshot.

   -w   Only allow window selection mode.
   -W   Start interaction in window selection mode.
<br>   -x   Do not play sounds.

   -l <i>windowid</i>  Capture a specific windowsid.

   -R <i>x,y,w,h </i>  Capture a screen rectangle, top,left,width,height.
<br>  <i>file</i>  Where to save the screen capture, 1 file per screen.

  -help Display brief syntax summary.</pre>
<p><b>Examples</b></p>
<p>Wait 10 seconds, then take a screen capture of the entire screen including the cursor:</p>
<p class="code">$ screencapture -T 10 -C ~/screencap1.png</p>
<p>To take a screenshot of one window, excluding the surrounding drop shadow, point and click with the mouse to take the screenshot:</p>
<p class="code">$ screencapture -o -W ~/screencap2.png</p>
<p>Take a screen shot of the DVD player (where the normal <a href="syntax-keyboard.html">keyboard shortcuts</a> won't work) </p>
<p><span class="code">$ screencapture -i ~/Desktop/dvd.png</span></p>
<p>The mouse will turn into crosshairs,  hit the space bar for camera mode, now click the window the DVD is playing in.<br> 
A file called "dvd.png" will appear on your desktop.</p>
<h2>Drop Shadow</h2>
<blockquote>
<p>To turn off the default window drop shadows, this will make your screenshot files smaller.</p>
<p class="code"><a href="defaults.html">defaults</a> write com.apple.screencapture disable-shadow -bool true <br>
killall SystemUIServer</p>
</blockquote>
<h2>Remote captures:</h2>
<blockquote>
<p>To capture screen content while logged in via ssh, you must launch screencapture in the same mach bootstrap hierarchy as loginwindow:</p>
<p> PID=pid of loginwindow<br>
<span class="code">sudo launchctl bsexec $PID screencapture [<i>options</i>]</span></p>
</blockquote>
<p><b>  </b><i class="quote">“The photograph itself doesn't interest me. I want only to capture a minute part of reality” ~ Henri Cartier-Bresson</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/screencapture.1.html">screencapture man page</a> - Apple.com<br>
<a href="sips.html">sips</a> - Scriptable image processing system<br>
<a href="syntax-keyboard.html">OS X Keyboard shortcuts</a><br>
<a href="http://www.videolan.org/vlc/download-macosx.html">VLC</a> will also allow screenshots of DVDs </p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="screencapture.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
