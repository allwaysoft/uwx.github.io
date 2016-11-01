---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.OpenQuery</h1>
<p> Open a query.</p>
<pre>Syntax
      DoCmd.OpenQuery(<i>QueryName, View, DataMode</i>)


Key
   <i>QueryName</i>      The name of the query to open.<i>

   View</i>           An <a href="acview.html">AcView constant</a> that specifies the view
                  in which the query will open. Default=<span class="input">acViewNormal</span>

   <i>DataMode</i>       An <a href="acopendatamode.html">AcOpenDataMode</a> constant that specifies the
                  data entry mode for the query.
                  The default value is acEdit.</pre>
<p>Use OpenQuery to open a select or crosstab query in Datasheet view, Design view, or Print Preview. <br>
This action will run an action query.</p>
<p><b>Examples</b></p>
<p>Open qryDemo and enable the user to view but not to edit or add records:<br>
<span class="code">DoCmd.OpenQuery "qryDemo", , acReadOnly</span><span class="code"></span></p>
<p class="quote">“I get all the news I need from the weather report” ~&nbsp;Paul Simon </p>
<p><b>Related:</b></p>
<p><a href="openreport.html">OpenReport</a> - Open a report<br>
<a href="openform.html">OpenForm</a> -  Open a form.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

