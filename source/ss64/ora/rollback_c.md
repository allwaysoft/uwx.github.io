---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE ROLLBACK SEGMENT</h1> 
<p> Create a Rollback Segment (RBS)<br>
  <br>
  Syntax:</p>
<pre>   CREATE [PUBLIC] ROLLBACK SEGMENT <i>rbs_name</i> <i>option(s)</i>

   Options:
      TABLESPACE <i>tablespace_name</i>
      STORAGE <a href="clause_storage.html">storage_clause</a>
</pre>
<p>A public RBS is available for use by more than one instance</p>
<p>If you use rollback segments to manage undo space, you are operating in <i> manual </i>undo management mode. </p>
<p>If you use an undo tablespace, you are operating in <i>automatic </i>undo management mode. You determine the mode at instance startup using the UNDO_MANAGEMENT <a href="syntax-initora.html">initialization parameter</a>.</p>
<p class="quote">"I don't want to achieve immortality through my work; I want to achieve immortality through not dying" ~ Woody Allen </p>
<p><b>Related Commands:</b><br>
<br>
<a href="syntax-initora.html">init.ora</a> - ROLLBACK_SEGMENTS = rb1, 
rb2… <br>
<a href="rollback_a.html">ALTER ROLLBACK SEGMENT</a> <br>
<a href="rollback_d.html">DROP ROLLBACK SEGMENT</a> <br>
<br>
<b>Related Views:</b></p>
<pre> <a href="../orad/DBA_ROLLBACK_SEGS.html">DBA_ROLLBACK_SEGS</a>
 <a href="../orav/V$ROLLNAME.html">V$ROLLNAME</a>
 <a href="../orav/V$ROLLSTAT.html">V$ROLLSTAT</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rollback_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

