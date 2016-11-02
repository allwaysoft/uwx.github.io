---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.LockNavigationPane</h1>
<p> Prevent users from deleting database objects  in the Navigation Pane. (Access 2007+) </p>
<pre>Syntax
      DoCmd.LockNavigationPane(<i>Lock</i>)

Key
   <i>Lock</i>     Set to True to lock the Navigation Pane.</pre>
<p> Locking the Navigation Pane prevents the user from deleting database objects or cutting database objects to the clipboard. It does not prevent the user from performing any of the following operations:</p>
<ul>
<li> Copying database objects to the clipboard</li>
<li> Pasting database objects from the clipboard</li>
<li> Displaying or hiding the Navigation Pane</li>
<li> Selecting different Navigation Pane organization schemes</li>
<li> Showing or hiding sections of the Navigation Pane</li>
</ul>
<p><b>Example</b></p>
<p class="code">DoCmd.LockNavigationPane True</p>
<p class="quote">“The only thing that helps me pass the time away; is knowing I'll be back at Echo Beach some day” ~&nbsp;Martha and the Muffins</p>
<p><b>Related:</b></p>
<p><a href="echo.html">Echo</a> - Turn screen updating on or off.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

