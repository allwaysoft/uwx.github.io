---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_REPAIR</h1> 
<p>Data corruption repair procedures that enable you to detect and 
  repair corrupt blocks in tables and indexes.</p>
<pre>Subprocedures:

ADMIN_TABLES        Provides administrative functions for the DBMS_REPAIR
                    package repair and orphan key tables, including create,
                    purge, and drop functions. 

CHECK_OBJECT        Detect and report corruptions in a table or index. 

DUMP_ORPHAN_KEYS    Report on index entries that point to rows in corrupt
                    data blocks. 

FIX_CORRUPT_BLOCKS  Mark blocks as software corrupt that have been previously
                    detected as corrupt by CHECK_OBJECT. 

REBUILD_FREELISTS   Rebuild an object's freelists. 

SKIP_CORRUPT_BLOCKS Set whether to ignore blocks marked corrupt during table
                    and index scans or to report ORA-1578 when blocks marked
                    corrupt are encountered. 

SEGMENT_FIX_STATUS  Fix the corrupted state of a bitmap entry.  </pre>
<p><span class="body">For full documentation of the packaged procedures above see the Oracle Manual:<br>
  "Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
  <br>
  </b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
  <i>by Steven Feuerstein et al</i></span></p>
<pre><span class="body"><b>Related</b></span><span class="body"><b>:</b></span> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_REPAIR.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

