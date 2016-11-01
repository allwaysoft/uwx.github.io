---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Requery</h1>
<p> Requery the data in a form or a control.</p>
<pre>Syntax
      DoCmd.Requery(<i>ControlName</i>)

      <i>Form</i>.Requery

Key
   <i>ControlName</i>  The name of a control to requery.

   <i>Form</i>         The name of a form to requery.</pre>
<p> The <span class="code">Requery</span> method will update the data underlying a form or control to reflect new/ deleted records since last queried.</p>
<p>The <span class="code">RefreshRecord</span> method will update the current records to reflect  changes. If a row in the record source has been deleted, it will change to show <span class="code">#Deleted</span>. </p>
<p>The <span class="code"><i>form</i>.Repaint</span> method simply repaints the specified form and its controls.</p>
<p>The Requery method in Visual Basic is faster than the Requery action or the DoCmd.Requery method. </p>
<p><b>Examples</b></p>
<p><span class="code">DoCmd.Requery "cmbSuppliers"</span></p>
<p class="quote"><i>“My mother made me a scientist without ever intending to. Every other Jewish mother in Brooklyn would ask her child after school: So? Did you learn anything today? But not my mother. “Izzy”, she would say, “did you ask a good question today?” That difference – asking good questions – made me become a scientist” ~ Isidor Isaac Rabi</i></p>
<p><b>Related:</b></p>
<p><a href="refreshrecord.html">RefreshRecord</a> - Refresh the data in a form</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="requery.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

