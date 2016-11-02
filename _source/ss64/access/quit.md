---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Quit</h1>
<p> Quit Microsoft Access.</p>
<pre>Syntax
      Quit(<i>Option</i>)

Key
   Option   The action to take when quitting Access:
               acQuitPrompt (0)
               Ask whether to save any changes.

               acQuitSaveAll (1) (Default)
               Save all objects without displaying a dialog box.

               acQuitSaveNone (2)
               Quit Microsoft Access without saving any objects.</pre>
<p><span class="code">DoCmd.Quit</span> was added to provide backward compatibility for running the Quit action in Visual Basic code in Microsoft Access 95. It's recommended that you use the existing <span class="code">Quit</span> method of the Application object instead.</p>
<p><b>Examples</b></p>
<p><span class="code"></span>'Exit the database<span class="code"><br> 
Quit
</span></p>
<p class="quote"><i>“You ain’t nothin’ but a hound dog<br>
Quit snoopin’ round my door
<br>
You ain't nothin’ but a hound dog
<br>
Quit snoopin’ round my door” ~ Leiber and  Stoller</i></p>
<p><b>Related:</b></p>
<p><a href="closedatabase.html">CloseDatabase</a> - Close the database.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

