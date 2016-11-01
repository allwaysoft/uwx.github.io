---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> CREATE FULLTEXT CATALOG</h1>
<p>Create a full-text catalog for the database. </p>
<pre>Syntax
      CREATE FULLTEXT CATALOG <i>catalog</i>
         [ON FILEGROUP <i>filegroup</i> ]
            [IN PATH '<i>rootpath</i>']
               [WITH ACCENT_SENSITIVITY = {ON|OFF}]
                  [AS DEFAULT] [AUTHORIZATION <i>owner</i> ]

Key:
    <i>catalog</i>    Name of the catalog to create
    rootpath   The local root directory for the catalog.
    AS DEFAULT Specify that this is the default catalog.
</pre> 
<p>After creating a  catalog, one or more full-text indexes may be associated with it.</p>
<p>Example</p>
<pre>CREATE FULLTEXT CATALOG MyCatalog AS DEFAULT; </pre>
<p class="quote"><i>"The greatest Christmas gift can't be purchased in a store, ordered from a
  catalog, wrapped in a pretty package with a fancy bow ... but it can be seen
  in the eyes of a child, heard in the words of kindness &amp; felt in the embrace
of a friend" ~ anon </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="fulltext_c.html">CREATE FULLTEXT INDEX</a><br>
  <a href="fulltextcat_a.html">ALTER FULLTEXT CATALOG</a><br>
  <a href="fulltextcat_d.html">DROP FULLTEXT CATALOG</a>  <br>
Equivalent Oracle commands:  Oracle Text / InterMedia / ConText </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="fulltextcat_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

