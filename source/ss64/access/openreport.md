---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.OpenReport</h1>
<p> Open a report.</p>
<pre>Syntax
      DoCmd.OpenReport(<i>ReportName, View, FilterName, WhereCondition</i>,
                     <i>  WindowMode, OpenArgs</i>)


Key
   <i>ReportName</i>     The name of the report to open.<i>

   View</i>           An <a href="acview.html">AcView constant</a> that specifies the view
                  in which the report will open. Default=<span class="input">acViewNormal</span>

   <i>FilterName</i>     The name of a query saved in the current database.

   <i>WhereCondition</i> An SQL WHERE clause (without the word WHERE.)

   <i>WindowMode</i>     An <a href="acwindowmode.html">AcWindowMode</a> constant that specifies the
                  window mode in which the report opens.
                  default = acWindowNormal.

   <i>OpenArgs</i>       A string expression that is used to set the report’s
                  OpenArgs property. This can then be used by code
                  in a report module.</pre>
<p>Use OpenReport to open a report in Design view or Print Preview, or to print the report immediately.</p>
<p><b>Examples</b></p>
<p><span class="code"></span>'Open rptTravel<span class="code"><br>
DoCmd.OpenReport "rptTravel", acViewNormal</span></p>
<p class="quote">“I get all the news I need from the weather report” ~&nbsp;Paul Simon </p>
<p><b>Related:</b></p>
<p><a href="openform.html">OpenForm</a> - Open a form.<br>
<a href="setparameter.html">SetParameter</a> - Set a parameter before opening a Form or Report.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="openreport.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

