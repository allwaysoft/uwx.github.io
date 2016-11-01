---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.OpenForm</h1>
<p> Open a form.</p>
<pre>Syntax
      DoCmd.OpenForm(<i>FormName, View, FilterName, WhereCondition</i>,
                     <i>DataMode, WindowMode, OpenArgs</i>)


Key
   <i>FormName</i>       The name of the form to open.<i>

   View</i>           An <a href="acformview.html">AcFormView constant</a> that specifies the view
                  in which the form will open. Default=<span class="input">acNormal</span>

   <i>FilterName</i>     The name of a query saved in the current database.

   <i>WhereCondition</i> An SQL WHERE clause (without the word WHERE.)

   <i>DataMode</i>       An <a href="acformopendatamode.html">AcFormOpenDataMode</a> constant that specifies the
                  data entry mode for the form.
                  applies only to forms opened in Form or Datasheet view.

   <i>WindowMode</i>     An <a href="acwindowmode.html">AcWindowMode</a> constant that specifies the
                  window mode in which the form opens.
                  default = acWindowNormal.

   <i>OpenArgs</i>       A string expression that is used to set the form’s
                  OpenArgs property. This can then be used by code
                  in a form module.</pre>
<p>Use OpenForm to open a form in Form view, form Design view, Print Preview, or Datasheet view.</p>
<h2>Open the same form more than once</h2>
<blockquote>
<p>To open the same form twice, requires using a  form variable/reference, the Set statement creates a temporary copy of the form in memory.</p>
<p>In the declarations section:</p>
<p class="code">Option Explicit <br>
Dim frmX as Form</p>
<p>In the OnClick property of a command button: </p>
<pre>Private Sub cmdDemo_Click()    
  Set frmX = New <b>Form_</b>frmDemo
  frmX.<a href="setfocus.html">setfocus</a>
End Sub </pre>
</blockquote>
<p><b>Examples</b></p>
<p>'Open frmAppointments and display records for the current patient: <br>
<span class="code">DoCmd.OpenForm "frmAppointments", , , "PatientID=" &amp; Me!txtPatientID<br>
<br>
</span>'Open frmTravel and display all the records<span class="code"><br>
DoCmd.OpenForm "frmTravel"</span></p>
<p class="quote">“I get all the news I need from the weather report” ~&nbsp;Paul Simon </p>
<p><b>Related:</b></p>
<p><a href="https://support.microsoft.com/en-gb/kb/210248">Q210248</a> - How to Open Multiple Instances of a Form<br>
<a href="openreport.html">OpenReport</a> - Open a report<br>
<a href="setparameter.html">SetParameter</a> - Set a parameter before opening a Form or Report.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="openform.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

