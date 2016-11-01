---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> ALTER FULLTEXT CATALOG</h1>
<p>Create a full-text catalog for the database. </p>
<pre>Syntax
      ALTER FULLTEXT CATALOG <i>catalog</i> 
         {REBUILD [ WITH ACCENT_SENSITIVITY = {ON | OFF} ]
         | REORGANIZE
         | AS DEFAULT 
         }
Key:
    <i>catalog</i>    Name of the catalog to create
    AS DEFAULT Specify that this is the default catalog.
</pre> 
<p>Example</p>
<pre>ALTER FULLTEXT CATALOG MyCatalog AS DEFAULT; </pre>
<p class="quote"><i>"The greatest Christmas gift can't be purchased in a store, ordered from a
  catalog, wrapped in a pretty package with a fancy bow ... but it can be seen
  in the eyes of a child, heard in the words of kindness &amp; felt in the embrace
of a friend" ~ anon </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="fulltext_c.html">CREATE FULLTEXT INDEX</a><br>
  <a href="fulltextcat_c.html">CREATE FULLTEXT CATALOG</a><br>
  <a href="fulltextcat_d.html">DROP FULLTEXT CATALOG</a>  <br>
  Equivalent Oracle commands:  Oracle Text / InterMedia / ConText </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

