---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC CHECKCONSTRAINTS - Check the integrity of table constraints.</h1>
<pre>Syntax
      <b>DBCC CHECKCONSTRAINTS</b>
         [('<i>table</i>' | <i>table_id </i>| '<i>constraint</i>' | <i>constraint_id</i>) ]
            [WITH 
               [ { ALL_CONSTRAINTS | ALL_ERRORMSGS } ]
                  [ , ] [ NO_INFOMSGS ] 
            ]
 Key:
   ALL_CONSTRAINTS - Check disabled constraints in addition to enabled constraints 
                     has no effect when a constraint name is specified.
   ALL_ERRORMSGS   - Return all rows that violate constraints in the table being checked.
                     default = first 200 rows.
</pre>
<p class="quote"><i>"The practice of both mathematics and art requires a blend of 
discipline and vision--a delicate balancing of constraint and freedom" ~ Ivars Peterson</i></p>
<p>  <b>Related</b></p>
<p><a href="dbcc_checktable.html">DBCC CHECKTABLE</a> - Check integrity of a table or indexed view.</p>
<p><b>Equivalent Oracle commands</b>:</p>
<p> <a href="../ora/table_a_cons.html">ALTER TABLE</a> MODIFY CONSTRAINT VALIDATE</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_checkconstraints.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

