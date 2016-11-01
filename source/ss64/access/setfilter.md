---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.SetFilter</h1>
<p>  Apply a filter  to a table, form, or report. (Access 2010 and above) </p>
<pre>Syntax
      DoCmd.SetFilter(<i>FilterName</i>, <i>WhereCondition</i>, <i>ControlName</i>)

Key
   <i>FilterName</i>      The name of a filter or query in the current database.
                   When using this method to apply a server filter, the
                   FilterName argument must be blank. (String)

   <i>WhereCondition</i>  A valid SQL WHERE clause without the word WHERE.

   <i>ControlName</i>     The name of the control that corresponds to the
                   subform or subreport to be filtered.
                   If empty, the current object is filtered.</pre>
<p>At least one of the two SetFilter method arguments must be supplied. If you enter a value for both arguments, the <span class="code"><i>WhereCondition</i></span> argument is applied to the filter.</p>
<p>The SetFilter action can be applied to a form or a report to restrict or sort the records displayed.</p>
<p>When a form or report is saved, Access saves any filter/WHERE condition currently defined in that object, but will not apply the filter automatically the next time the form is opened (although it will automatically apply any sort you applied to the object before it was saved). </p>
<p>The maximum length of the <span class="code"><i>WhereCondition</i></span> argument is 32,768 characters.</p>
<p><b>Example</b></p>
<p>Displays only records that begin with "SS64"</p>
<p class="code">DoCmd.SetFilter WhereCondition:="[Product Code] Like ""SS64*"""</p>
<p class="quote"><i>“To be without some of the things you want is an indispensable part of happiness” ~ Bertrand Russell</i></p>
<p><b>Related:</b></p>
<p><a href="applyfilter.html">.ApplyFilter</a>  - Apply a filter to the records being displayed.<br>
<a href="showallrecords.html">.ShowAllRecords</a>  - Remove any applied filter.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="setfilter.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

