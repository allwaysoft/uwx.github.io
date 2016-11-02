---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> CREATE DEFAULT</h1>
<p>  A default specifies the value to be inserted into a column whenever no value is  supplied. </p>
<p>This command  will be removed in a future version of  SQL Server. <b>Avoid using this command </b>in new development work, and plan to modify any application that currently uses it.</p>
<pre>Syntax
      CREATE DEFAULT [<i>schema</i>.] <i>default_name <br></i>         AS <i>constant_expression </i>[;]

Key:
    <i>default_name</i>         Name of the default.
<i>    constant_expression</i>  An expression containing only constant values</pre>
<p>You can create a DEFAULT definition as part of the table definition when you create a table. If a table already exists, you can add a DEFAULT definition to it. Each column in a table can contain one DEFAULT definition.</p>
<p class="quote"><i>"Small is beautiful" ~ E. F.Schumacher</i></p>
<p><b>Related:</b></p>
<p>  sp_help - List the defaults that exist <br>
  sp_unbindefault - Unbind the default from a column or an alias data type.<br>
  <a href="default_d.html">DROP DEFAULT</a><br>
  Equivalent Oracle command:  <a href="../ora/table_a.html">ALTER TABLE</a> ... DEFAULT</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

