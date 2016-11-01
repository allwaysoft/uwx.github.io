---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.SetOrderBy</h1>
<p> Apply a sort to the active datasheet, form or report (Access 2010+).</p>
<pre>Syntax
      DoCmd.SetOrderBy(<i>OrderBy, ControlName</i>)

Key
   <i>OrderBy</i>    A string expression that includes the name
              of the field or fields on which to sort records
              and the optional ASC or DESC keywords.

  <i>ControlName</i> If provided and the active object is a form or
              report, the name of the control that corresponds
              to the subform or subreport that will be sorted.

              If empty and the active object is a form or report,
              the parent form or report is sorted.</pre>
<p>To sort by more than one field name, separate the names with a comma.</p>
<p>By default the records are sorted  in ascending order. To sort  in descending order, add <span class="code">DESC</span> to the end of the <i>OrderBy</i> argument</p>
<p><b>Example</b></p>
<p>'Sort the records by Last name and then first name:<br>
<span class="code">DoCmd.SetOrderBy "LastName DESC, FirstName ASC"</span></p>
<p class="quote"><i>“At school, new ideas are thrust at you every day. Out in the world, you'll have to find the inner motivation to search for new ideas on your own” ~ Bill Watterson</i></p>
<p><b>Related:</b></p>
<p><a href="select.html">Select</a> (SQL) - Retrieve data from one or more tables or queries.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="setorderby.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

