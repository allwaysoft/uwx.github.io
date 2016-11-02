---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>COMMENT</h1> 
<p>Add a comment to the data dictionary:<br>
  <br>
  Syntax:</p>
<pre>   COMMENT ON TABLE [schema.]<i>table</i> IS '<i>text</i>'
   COMMENT ON TABLE [schema.]<i>view</i> IS '<i>text</i>'
   COMMENT ON TABLE [schema.]<i>materialized_view</i> IS '<i>text</i>'

   COMMENT ON COLUMN [schema<i>.</i>]<i>table.column</i> IS '<i>text</i>'
   COMMENT ON COLUMN [schema.]<i>view.column</i> IS '<i>text</i>'
   COMMENT ON COLUMN [schema.]<i>materialized_view.column</i> IS '<i>text</i>'</pre>
<p>To drop a comment from the database, set it to the empty 
  string ' '<br>
  <br>
<b>Example</b></p>
<p>COMMENT ON COLUMN supplies.part_no IS ’The six digit part number’;</p>
<p>You can view comments by querying the data dictionary views listed below. <br>
<br>
<i class="quote"> "Don't let it end like this. Tell them I said something" ~ last words of Pancho Villa </i><b><br>
<br>
Related Commands:<br>
<br>
</b><a href="table_c.html">CREATE TABLE</a><b><br>
</b><a href="syntax-sqlplus-remark.html">SQL Plus REM statements</a></p>
<p><b>Related Views:</b></p>
<pre> <a href="../orad/COL.html">COL</a> 
<a href="../orad/DICTIONARY.html">DICTIONARY</a> 
<a href="../orad/DICT_COLUMNS.html">DICT_COLUMNS</a> 
<a href="../orad/DBA_COL_COMMENTS.html">DBA_COL_COMMENTS</a>     <a href="../orad/ALL_COL_COMMENTS.html">ALL_COL_COMMENTS</a>     <a href="../orad/USER_COL_COMMENTS.html">USER_COL_COMMENTS</a> 
<a href="../orad/DBA_TAB_COMMENTS.html">DBA_TAB_COMMENTS</a>     <a href="../orad/ALL_TAB_COMMENTS.html">ALL_TAB_COMMENTS</a>     <a href="../orad/USER_TAB_COMMENTS.html">USER_TAB_COMMENTS</a> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="comment.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

