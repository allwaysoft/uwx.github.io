---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC CLEANTABLE</h1>
<p>Reclaim space from dropped variable-length columns in a table or indexed view.</p>
<pre>Syntax
      DBCC CLEANTABLE
       ( { '<i>database</i>' | <i>database_id </i>| 0 }
         , { '<i>table</i>' | <i>table_id </i>| '<i>view</i>' | <i>view_id </i>}
            [ , batch_size]
       ) [WITH NO_INFOMSGS]

 Key:
    batch_size   - The no. of rows to process per transaction.
                    default (or if 0 is specified) = whole table
    NO_INFOMSGS  - Suppress all information messages.
</pre>
<p>If 0 is specified, the current database will be used.</p>
<p>Example</p>
<pre>DBCC CLEANTABLE ('MyDatabase','MySchema.MyTable', 0)<br>WITH NO_INFOMSGS;<br>GO</pre>
<p class="quote"><i>"It's hard to be funny when you have to be clean" ~ Mae West.</i></p>
<p>  <b>Equivalent Oracle command</b>:</p>
<p> <a href="../ora/tablespace_a.html">ALTER TABLESPACE</a> COALESCE</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_cleantable.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

