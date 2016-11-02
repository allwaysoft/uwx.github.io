---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.CancelEvent</h1>
<p>Cancel the event that caused Microsoft Access to run the procedure containing this method.  </p>
<pre>Syntax
      DoCmd.CancelEvent</pre>
<p>In forms,  the CancelEvent action is often used in a validation macro with the <span class="code">BeforeUpdate</span> event property. When a user enters data in a control or record, Access runs the macro before saving the data to the database. If the data fails the validation conditions in the macro, the CancelEvent action cancels the save.</p>
<p>All events that can be canceled in Visual Basic have a Cancel argument. You can use this argument instead of the CancelEvent method to cancel the event. The KeyPress event and MouseDown event (for right-clicking only) can be canceled only in macros, not event procedures, so you must use the CancelEvent action in a macro to cancel these events.</p>
<p>For events that can't be canceled, the default behavior occurs before the procedure runs.</p>
<p><b>Example</b></p>
<p>Double-clicking a word that the insertion point is on in a text box, Access normally selects the word. You can cancel this default behavior in the procedure for the DblClick event and perform some other action, such as opening a form. </p>
<p class="quote"><i>“A bad beginning makes a bad ending” ~ Euripides</i></p>
<p><b>Related:</b></p>
<p><a href="doevents.html">DoEvents</a> - Allow the operating system to process other events.<br>
<a href="onclick.html">OnClick, OnOpen</a> - Events.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="cancelevent.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

