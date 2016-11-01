---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>.Undo</h1>
<p> Undo the last data edit.</p>
<pre>Syntax
      <i>expression</i>.Undo

Key
   <i>expression</i>   The object, a form or a form control.</pre>
<p><b>Example</b></p>
<p>Reset all  changes to the FirstName text control:</p>
<p><span class="code">Me!txtFirstName.undo<br>
</span>or<br>
<span class="code"> strControl = Me!txtFirstName<br>
Me(strControl).Undo</span></p>
<p>Reset all changes to a form:</p>
<p class="code">Me.Undo</p>
<p class="quote"><i>“Besides the noble art of getting things done, there is the noble art of leaving things undone. The wisdom of life consists in the elimination of non-essentials” ~ Lin Yutang</i></p><p><b>Related:</b></p>
<p><span class="code"><a href="runcommand.html">RunCommand</a> acCmdSaveRecord</span><br>
<span class="code">Me.Dirty</span><br>
<a href="save.html">.Save</a> (DoCmd)          - Save a database object.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

