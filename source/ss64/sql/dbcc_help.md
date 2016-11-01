---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC HELP </h1>
<p>Help and syntax information for DBCC commands.</p>
<pre>Syntax
      DBCC HELP ('<i>dbcc_command</i>') [WITH NO_INFOMSGS ]

      DBCC HELP (@<i>dbcc_command_var</i>) [WITH NO_INFOMSGS ]

      DBCC HELP ('?')  [WITH NO_INFOMSGS ]

Key:
   WITH NO_INFOMSGS - Suppress all information messages (severity levels 0-10)
   dbcc_command     - The DBCC 'xyz' command</pre>
<p>Examples</p>
<pre>DBCC HELP ('?')<br>GO

DBCC HELP ('USEROPTIONS')
GO

DECLARE @help_var sysname
   SET @help_var = 'CHECKALLOC'
   DBCC HELP (@help_var)
 GO</pre>
<p class="quote"><i>"It is our special duty, that if anyone needs our help, we should give
  him such help to the utmost of our power" ~ Cicero </i></p>
<p> 
Equivalent Oracle command: HELP <i>topic</i> - In SQL*Plus</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_help.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

