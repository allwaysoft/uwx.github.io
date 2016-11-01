---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.RefreshRecord</h1>
<p> Refresh the data in a form. (Access 2010 +)</p>
<pre>Syntax
      DoCmd.RefreshRecord</pre>
<p> RefreshRecord will update the current records to reflect  changes. If a row in the record source has been deleted, it will change to show <span class="code">#Deleted</span>.</p>
<p>RefreshRecord does not requery the database, the current set will not include records that have been added (or hide those that have been deleted) since the database was last queried.</p>
<p>The RefreshRecord method is equivalent to the Refresh method of the Form object.</p>
<p><b>Example</b></p>
<p><span class="code">DoCmd.RefreshRecord</span></p>
<p class="quote"><i>“The rest and the spell of sleep in the middle of the day refresh the human frame far more than a long night” ~ Winston Churchill</i></p>
<p><b>Related:</b></p>
<p><a href="requery.html">Requery</a> - Requery the data in a form or a control.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

