---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.SetParameter</h1>
<p> Set a parameter before opening a Form, Report or macro (Access 2010+).</p>
<pre>Syntax
      DoCmd.SetParameter(<i>Name, Expression</i>)

Key
   <i>Name</i>       The name of the parameter.
              The name must match the name of the parameter
              expected by the <a href="browseto.html">BrowseTo</a>, <a href="openform.html">OpenForm</a>, OpenQuery,
              <a href="openreport.html">OpenReport</a>, or RunDataMacro method.

   <i>Expression</i> An expression that evaluates to a value to
              assign to the parameter.</pre>
<p>Calls  the SetParameter method once for each parameter you need.</p>
<p>Each call to SetParameter will add or update a single parameter in an internal parameters collection. The parameters collection is passed to the BrowseTo, OpenForm, OpenQuery, OpenReport, or RunDataMacro method. When the method is run the parameters collection supplies the needed parameters. When the method is finished the parameters collection is cleared.</p>
<p>To be sure the  parameters have not been cleared (by some other form/procedure), your calls to SetParameter should immediately precede BrowseTo, OpenForm, OpenQuery, OpenReport, or RunDataMacro.</p>
<p><b>Example</b></p>
<p class="code">Private Sub cmdOpenOrder_Click() <br>
DoCmd.SetParameter "prmOrderID", Me!txtOrderId <br>
DoCmd.OpenForm "frmOrders"<br>
End Sub </p>
<p class="quote"><i>“The aim of science is not to open the door to infinite wisdom but to set a limit to infinite error” ~ Bertolt Brecht (Life of Galileo)</i></p>
<p><b>Related:</b></p>
<p><a href="openform.html">OpenForm</a> - Open a form.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="setparameter.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

