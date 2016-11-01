---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>notify-send</h1>  
<p>A program to send desktop notifications, inform the user about an event or display some form of information without getting in the user’s way.</p>
<pre>Syntax 
      notify-send [<i>OPTIONS</i>] <summary>[<i>body</i>]
 
Key
   -u, --urgency=<i>LEVEL
            </i>   The urgency level (low,  normal,  critical).
 
   -t, --expire-time=<i>TIME</i>
               The  timeout in milliseconds at which to expire the
               notification.
 
   -i, --icon=<i>ICON</i>[,<i>ICON</i>...]
               An icon filename or stock icon to display.
 
   -c, --category=TYPE[,TYPE...]
               Specifies the notification category.
 
   -?, --help
               Show a help message
 
   -h, --hint=<i>TYPE</i>:<i>NAME</i>:<i>VALUE</i>
               Pass extra data. Valid TYPEs are int, double, string and byte.
 
<p>To use notify-send, you might need to install the following package:<br>
<span class="code">$ sudo apt-get install libnotify-bin</span></p>
<p><b>Examples</b></p>
<p class="code">$ notify-send "Hello World"</p>
<p class="code">$ notify-send -t 5000 -u low "Hello World"</p>
<p>The return status is zero if all information was written successfully. 
</p>
<p class="quote"><i>“Those who know, do not speak. Those who speak, do not know” ~ The Tao</i> </p> 
<p><b>Related:</b><br>
<br>
<a href="http://www.galago-project.org/specs/notification/">Desktop    Notification    Spec</a> - Galago  desktop presence framework.<br>
<a href="echo.html">echo</a> - Display message on screen<br>
Equivalent Windows command:
<a href="../nt/if.html">IF</a> - Conditionally perform a command</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="notify-send.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

</summary></pre>