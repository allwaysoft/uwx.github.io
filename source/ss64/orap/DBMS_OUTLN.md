---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_OUTLN</h1> 
<p>Manage stored outlines. Synonymous with OUTLN_PKG</p>
<pre>Subprocedures:

DROP_BY_CAT        Drop outlines that belong to a specified category. 

DROP_COLLISION     Drop an outline with an ol$.hintcount value that
                   does not match the number of hints for that outline in ol$hints. 

DROP_EXTRAS        Clean up after an import by dropping extra hint tuples
                   not accounted for by hintcount.  

DROP_UNREFD_HINTS  Drop hint tuples that have no corresponding outline in
                   the OL$ table. 

DROP_BY_CAT        Drop outlines that have never been applied in the
                   compilation of an SQL statement.  

UPDATE_BY_CAT      Change the category of an outline. 

GENERATE_SIGNATURE Generate a signature for the specified SQL text.  
<span class="body"><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b><br>
Related Commands:</b><br></span></pre>
<p><span class="body"><b>Related Views:</b></span> </p>
<pre> <a href="../orad/DBA_OUTLINES.html">DBA_OUTLINES</a>                              <a href="../orad/USER_OUTLINES.html">USER_OUTLINES</a> 
 <a href="../orad/DBA_OUTLINE_HINTS.html">DBA_OUTLINE_HINTS</a>                         <a href="../orad/USER_OUTLINE_HINTS.html">USER_OUTLINE_HINTS</a> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_OUTLN.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

