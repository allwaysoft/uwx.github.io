---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>lpc</h1> 
<p>Line printer control program</p>
<pre>Syntax
      lpc [ <i>command</i> [ <i>parameter(s) </i>] ]

Commands
       exit
          Exit the command interpreter.

       help [<i>command</i>]
          Display a short help message.

       quit
          Exit the command interpreter.

       status [<i>queue</i>]
          Display the status of one or more printer or class queues.

       ? [<i>command</i>]
          Display a short help message.    </pre>
<p>If no command is specified on the command-line, lpc will display 
  a prompt and accept commands from the standard input.</p>
<p>Since lpc is geared towards the Berkeley printing system, it is  
  impossible to use lpc to configure printer or class queues provided by CUPS. 
  To configure printer or class queues you must use the lpadmin(8).</p>
<p><b>  </b><i class="quote">"Programming is dreadfully impermanent; it's more like performance 
    art than literature" ~ Bruce 
    Sterling</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/lpc.8.html">lpc man page</a> - Apple.com<br>
accept(8), cancel(1), disable(8), enable(8), lp(1), lpr(1), lprm(1), lpstat(1), 
reject(8),</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="lpc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
