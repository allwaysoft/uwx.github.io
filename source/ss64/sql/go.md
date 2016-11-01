---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>GO</h1>
<p>Send the current batch of T-SQL statements to an instance of SQL Server.</p>
<pre>Syntax
      GO [--<i>comment</i>]

Key<i>
   </i><i>comment</i>    Optional comment text.</pre>
<p>    The scope of local (user-defined) variables is limited to a batch, and cannot be referenced after a GO command.<br>
Execution of a stored procedure after the first statement in a batch must include the EXECUTE keyword.</p>
<p>Example</p>
<pre>DECLARE @MyString VARCHAR(20)<br>SELECT @MyString = 'Hello World'
PRINT @MyString
GO
-- Next line will error because the variable was declared before this batch.
PRINT @MyString
GO</pre>
<p class="quote"><i>"Do not go gentle into that good night" -  Dylan Thomas</i></p>
<p><b>Related commands:</b></p>
<p> <a href="commit.html">COMMIT</a><br>
Equivalent Oracle (SQL*Plus) command:  STA[RT]     - Run an SQL Script (@)</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="go.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

