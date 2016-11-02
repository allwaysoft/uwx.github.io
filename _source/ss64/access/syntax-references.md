---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem --><h1>Microsoft Access Form References </h1>
<h2>Absolute references</h2>
<blockquote>
<p>Controls on a form:</p>
<p class="code">Forms!frmMain!txtControlName<br>
Forms!frmMain!txtControlName.<i>enabled = </i>True</p>
<p>Controls on a Sub form:</p>
<p class="code">Forms!frmMain!Subform1.Form!txtControlName<br>
Forms!frmMain!Subform1.Form!txtControlName.<i>enabled</i> = True</p>
<p>If the name is unique, shortcut naming will also work, so the above can be simplified to:</p>
<p class="code">Forms![frmMain]![Subform1]![txtControlName]</p>
<p>To refer to other control properties replace .<i>enabled</i> with the property name you need.</p>
<p>The default property is always .<i>value</i> (you can include .<i>value</i> if you want to make this absolutely clear.)</p>
<p>Properties of the whole FORM:</p>
<p class="code">Forms!frmMain.<i>RecordSource</i></p>
<p>e.g. <span class="code">Forms!frmMain.RecordSource = “select * from my_table;”</span></p>
<p>Properties of a whole Sub form:</p>
<p class="code">Forms!frmMain!Subform1.Form.<i>RecordSource</i></p>
<p>To refer to other form properties replace <i>.RecordSource</i> with the property name you need.</p>
</blockquote>
<h2>Relative references </h2>
<blockquote>
<p>Controls on a form:</p>
<p class="code">Me!txtControlName</p>
<p>Controls on a Sub form:</p>
<p class="code">Me!Subform1.Form!txtControlName<br>
Me!Subform1.Form!txtControlName.<i>enabled = </i>True</p>
<p>Controls on a Parent form:</p>
<p class="code">Me.Parent!txtControlName</p>
<p>In these examples txtControlName is whatever name you have given the control e.g. txtSurname</p>
<p>To refer to other control properties replace .<i>enabled</i> with the property name you need.</p>
<p>e.g. <span class="code">txtControlName.<i>Visible</i></span> or <span class="code">txtControlName.<i>BackColor</i></span></p>
<p>Properties of the whole FORM:</p>
<p class="code">Me.<i>RecordSource</i></p>
<p>Properties of a Sub form:</p>
<p class="code">Me!Subform1.Form.<i>RecordSource</i></p>
<p>Refer to properties of a Parent form:</p>
<p class="code">Me.Parent.<i>RecordSource</i></p>
<p>To refer to other form properties replace <span class="code"><i>.RecordSource</i></span> with the relevant property name.</p>
</blockquote>
<h2>Sub-Sub forms</h2>
<blockquote>
<p>Nesting a subform inside another subform is rare, but for the sake of completion..</p>
<p>For these examples Subform1 is the name of a subform control on frmMain, Subform2 is the name of another subform control placed on Subform1. The name of form <u>controls</u> need not be the same as the name of the <u>forms</u>.</p>
<p>Controls on a nested Sub-Sub form:</p>
<p class="code">Forms!frmMain!Subform1.Form!Subform2.Form!txtControlName<br>
Me!Subform1.Form!Subform2.Form!txtControlName</p>
<p>Properties of a nested Sub-Sub form:</p>
<p class="code">Forms!frmMain!Subform1.Form!Subform2.Form.<i>RecordSource<br>
</i>Me!Subform1.Form!Subform2.Form.<i>RecordSource</i></p>
<p>The parent of a&nbsp;Parent:</p>
<p class="code">Me.Parent.Parent!txtControlName<br>
Me.Parent.Parent.<i>RecordSource</i></p>
</blockquote>
<p>Using a relative reference on a form ensures that nothing will break if the form is renamed.</p>
<p>If you are writing an expression as part of an SQL statement, then use an absolute reference. </p>
<p>When referring to subforms, the subform object (on the main form) can have a different name to the form itself.  
For example when frmOrderLines is added to frmOrders as a subform, the new subform object could be called sfrOrderLines.<br>
In the  examples above we refer to the subform <i>object </i>name.</p>
<h2>VBA Variables</h2>
<p>An alternate syntax for VBA only, is written like: <span class="code">Forms("frmMain").ControlName </span><br>
This syntax  allows you to use a variable as part of the reference: <span class="code">Forms(strMyVariable).ControlName </span></p>
<p><b>Related:</b></p>
<p><a href="setfocus.html">SetFocus</a> - Move focus to a specified field or control<br> 
<a href="http://support.microsoft.com/default.aspx?scid=kb;en-us;209207">Q209207</a> - Command-line switches for MS Access<br>
<a href="syntax-datatypes.html">Naming conventions</a> - A copy of the famously detailed Reddick VBA Naming convention.<br>
<a href="http://office.microsoft.com/en-us/access/HP051868521033.aspx">Microsoft Office online</a> - Referring to an object or its properties in expressions</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

