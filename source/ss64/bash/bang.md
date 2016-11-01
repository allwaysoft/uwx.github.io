---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>Bash Bang (!) commands</h1> 
<p>Re-run all or part of a previous command.</p>
<pre>Syntax
      !!       Run the last command again

      !<i>foo</i>     Run the most recent command that starts with '<i>foo</i>' (e.g. !ls)

      !<i>foo</i>:p   Print out the command that !<i>foo</i> would run
               also add it to the command <a href="history.html">history</a>

      !$       Run the last word of the previous command (same as Alt + .)

      !$:p     Print out the word that !$ would substitute

      !*       Run the previous command except for the last word

      !*:p     Print out the previous command except for the last word

     ^<i>foo</i>^<i>bar</i>  Run the previous command replacing <i>foo</i> with <i>bar</i></pre>
<p><i class="quote">“This is the way the world ends. Not with a bang but a whimper” ~ 
T.S. Eliot (The Hollow Men)</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="syntax-keyboard.html">Bash keyboard commands</a></p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="bang.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

