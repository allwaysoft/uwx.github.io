---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>RunSql</h1>
<p> Run an SQL query.</p>
<pre>Syntax
      DoCmd.RunSQL(<i>SQLStatement, UseTransaction</i>)

Key
   <i>SQLStatement</i>    A string expression that's a valid SQL
                   statement for an action or DDL query.

   <i>UseTransaction</i>  Use <u>True</u> (-1) to include this query in
                   a transaction.
                   False (0) = don’t use a transaction</pre>
<p> The maximum length of <i>sqlstatement</i>  is 32,768 characters.</p>
<p><b>Examples</b></p>
<p>'Run an <a href="update.html">UPDATE</a> query <br>
<span class="code">Dim strSQL As String <br>
<br>
strSQL = "UPDATE T_Patients SET T_Patients.status = 2 " &amp; _ <br>
"WHERE T_Patients.status = 1 " <br>
<br>
DoCmd.RunSQL strSQL</span></p>
<p class="quote"><i>“Run rabbit – run rabbit – Run! Run! Run!” ~ Flanagan and Allen.</i></p>
<p><b>Related:</b></p>
<p>RunDataMacro - Run a named data macro.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="runsql.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

