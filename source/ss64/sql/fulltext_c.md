---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE FULLTEXT INDEX</h1>
<p>Create a full-text index on  a table. One full-text index with  one or more columns is allowed per table.</p>
<pre>Syntax
      CREATE FULLTEXT INDEX ON <i>table</i>
         [<b>(</b><i>column</i> [TYPE COLUMN <i>type_column_name</i>] [LANGUAGE <i>language_term</i>]
             [,...<i>n</i>]<b>)</b>]
               KEY INDEX <i>index</i>
                  [ON <i>fulltext_catalog</i>]
                     [WITH CHANGE_TRACKING <i>tracking_option</i>]

tracking_option:
       MANUAL
       AUTO
       OFF [, NO POPULATION]

Key:
    type_column_name  The column in <i>table </i>that holds the document type of <i>column</i>.
    language_term     The locale identifier (LCID)
	 index             The unique key index on <i>table</i>
    fulltext_catalog  The full-text catalog, must already exist.
    CHANGE_TRACKING   Maintain a list of changes to the indexed data. </pre> 
<p>Example</p>
<pre>CREATE FULLTEXT INDEX ON MySchema.MyTable(Column1) KEY INDEX ui_identity_column;<br>GO</pre>
<p class="quote"><i>"The greatest Christmas gift can't be purchased in a store, ordered from a
  catalog, wrapped in a pretty package with a fancy bow ... but it can be seen
  in the eyes of a child, heard in the words of kindness &amp; felt in the embrace
of a friend" ~ anon </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="fulltext_a.html">ALTER FULLTEXT INDEX</a><br>
  <a href="fulltext_d.html">DROP FULLTEXT INDEX</a>  <br>
  <a href="grant.html">GRANT Object</a> permissions  <br>
Equivalent Oracle commands:  Oracle Text / InterMedia / ConText </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="fulltext_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

