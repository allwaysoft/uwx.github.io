---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>SetFocus</h1>
<p> Move the focus to a specific control on a form. </p>
<pre>Syntax
      <i>Object</i>.SetFocus

Key
   <i>Object</i>   The control to receive focus.
</pre>
<p>Use the SetFocus method when you want all user input to be directed at a specific object.</p>
<p>Reading some control  properties requires the control to have the focus. For example, a text box must have the focus before you can read its Text property.</p>
<p>Setting some control properties requires  the control to NOT have the focus. For example, you can’t set a control’s Visible or Enabled properties to False (0) when that control has the focus.</p>
<p>You can move the focus only to a visible control or form. A form and controls on a form aren’t visible until the form's Load event has finished. Use the Repaint method before SetFocus to ensure the control is visible.</p>
<p>If a form contains no enabled controls, then SetFocus will set focus to the form itself.</p>
<p>If a form contains one or more enabled controls attempting to move the focus to the form, will set focus to the control on the form that last received  focus.</p>
<p>SetFocus is used when <a href="openform.html">opening multiple copies of the same Access form</a>.</p>
<p>To move the focus to a control on a subform, first move the focus to the subform control and then a second SetFocus for the control on the subform.</p>
<p>SetFocus is the preferred method for moving  focus, rather than DoCmd.GoToControl</p>
<p><b>Examples</b></p>
<pre>Me!txtSurname.SetFocus

Forms!frmPayroll!txtSurname.SetFocus</pre>
<p class="quote"><i>“When you write down your ideas you automatically focus your full attention on them. Few if any of us can write one thought and think another at the same time. Thus a pencil and paper make excellent concentration tools” ~ Michael Leboeuf</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-references.html">Access Form References</a> - Reference controls on subforms.<br>
<a href="sendkeys.html">SendKeys</a> - Send one or more keystrokes to the active window as if typed at the keyboard.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="setfocus.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

