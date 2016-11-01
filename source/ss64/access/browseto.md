---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.BrowseTo</h1>
<p> Navigate between objects. (Access 2010) </p>
<pre>Syntax
      DoCmd.BrowseTo(<i>ObjectType</i>, <i>ObjectName</i>, <i>PathtoSubformControl</i>,
                           <i>WhereCondition, Page, DataMode</i>)

Key
   <i>ObjectType</i>   The object type to browse:
                acBrowseToForm (2) or acBrowseToReport (3)

<i>   ObjectName</i>   The object that loads inside the subform control referenced
                by the <i>PathtoSubformControl</i> argument.

   <i>PathtoSubformControl</i>
                If specified, the path from the main form of the
                application to the target subform control that loads the
                object specified by <i>ObjectName</i>.

   <i>WhereCondition</i>
                If specified, replaces the Where condition of the
                object record source.

   <i>Page</i>         If specified, sets the page of the continuous form that will be made the current page. This argument is Web only.

   <i>DataMode</i>     If specified, the data entry mode of the form <a href="acformopendatamode.html">AcFormOpenDataMode</a>.</pre>
<p>BrowseTo can be used to  navigate between objects in place e.g. navigate from form1 to form2 without opening  a new window. You can also change the source object of a subform control by specifying <span class="code"><i>PathToSubFormControl</i></span>. </p>
<p>The <span class="code"><i>PathToSubFormControl</i></span> argument must include the parent form/control names as in the following example:</p>
<p class="code">frmMainForm.SubFormCtrl1&gt;Form2.SubFormCtrl2&gt;Form3.SubFormCtrl3</p>
<p><b>Example</b></p>
<p>Opens frmSales in Add-Data mode in the "sfrNavigation" subform control on the form "frmMain".</p>
<p class="code">DoCmd.BrowseTo ObjectType:=acBrowseToForm, _ <br>
ObjectName:="frmSales", _ <br>
PathToSubformControl:="frmMain.sfrNavigation", _ <br>
WhereCondition:="", _ <br>
Page:="", _ <br>
DataMode:=acFormAdd</p>
<p class="quote"><i>“A careful driver is one who honks his horn when he goes through a red light” ~ Henry Morgan</i></p>
<p><b>Related:</b></p>
<p><a href="setparameter.html">SetParameter</a> - Set a parameter before opening a Form or Report.<br>
<a href="syntax-references.html">Syntax - Form references </a><br>
.NavigateTo - Display a database object in the Navigation Pane.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="browseto.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

