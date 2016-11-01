---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>sleep</h1> 
<p>Delay for a specified time.<br>
  Suspends execution for a minimum of <i>seconds. </i>Sleep is usually used to schedule 
the execution of other commands.</p>
<pre>Syntax
      sleep <i>seconds</i>

Examples

   To schedule the execution of a command for x number seconds later:

         (sleep 1800; sh command_file &gt;&amp; errors)&amp;

   This incantation would wait a half hour before running the script command_file.

   To reiteratively run a command (with the csh(1)):

         while (1)
                 if (! -r zzz.rawdata) then
                         sleep 300
                 else
                         foreach i (`ls *.rawdata`)
                                 sleep 70
                                 awk -f collapse_data $i &gt;&gt; results
                         end
                         break
                 endif
         end
</pre>
<p>The scenario for a script such as this might be: a program currently running is taking longer than expected to process a series of files, and it
would be nice to have another program start processing the files created
by the first program as soon as it is finished (when <span class="code">zzz.rawdata</span> is created).  </p>
<p>The script checks every five minutes for the file <span class="code">zzz.rawdata</span>,
when the file is found, then another portion processing is done courteously by sleeping for 70 seconds in between each awk job.</p>
<p>Exits with 0 on successful completion, or if the signal SIGALRM 
  was received. <br>
  exits with &gt;0 if an error occurred.</p>
<p class="quote"><i class="quote">“O sleep, O gentle sleep, nature's soft nurse, how have I frighted thee, that thou no more wilt weigh my eyelids down, and steep my senses in forgetfulness” ~   Shakespeare (Henry IV)</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/sleep.1.html">sleep man page</a> - Apple.com<br>
setitimer(2)<br>
at(1)</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="sleep.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
