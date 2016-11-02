---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Write-Host</h1> 
<p>Write a string to the display, optionally customizing the output. Output can be to any host but is typically the console screen.</p>
<pre>Syntax
      Write-Host [[-object] <i>Object</i>] [-noNewLine] [-separator <i>Object</i>]
             [-foregroundcolor <i>ConsoleColor</i>] [-backgroundColor <i>ConsoleColor</i>]
                [<i>CommonParameters</i>]

Key
   -object Object
       Object to display, typically a string.
        
   -noNewLine 
       Do not end with a newline character.
        
   -separator
       String to output between objects displayed on the console.

   -foregroundcolor <i>ConsoleColor</i>
       The text color

   -backgroundcolor <i>ConsoleColor</i>
       Background color

   <i>ConsoleColors:</i>
       Black, DarkBlue, DarkGreen, DarkCyan, DarkRed, DarkMagenta, DarkYellow,
       Gray, DarkGray, Blue, Green, Cyan, Red, Magenta, Yellow, White

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>  Write-host (and Write-Warning) write only to the host/screen. To also have the output passed to the success pipeline, use <a href="write-output.html">Write-Output</a>. </p>
<p><b>Examples</b></p>
<p>Display  text in specific colours:</p>
<pre>PS C:\&gt; write-host "The quick brown fox jumped" -foregroundcolor DarkGreen -backgroundcolor white

PS C:\&gt; Write-Host -ForeGroundColor Red "some  text in red" -nonewline</pre>
<p class="quote"><i>“In our life there is a single color, as on an artist's palette, which provides the meaning of life and art. It is the color of love” ~ Marc Chagall</i></p>
<p><b>Related:</b></p>
<p> Clear-Host - Clear the screen<br>
  <a href="out-host.html">Out-Host</a> - Send   output to the host<br>
  
  <a href="write-debug.html">Write-Debug</a> - Write a debug message to the host display<br>
<a href="write-output.html">Write-Output</a> -  Write an object to the pipeline<br>
<a href="write-warning.html">Write-Warning</a> - Write a warning message</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="write-host.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

