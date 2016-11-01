---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapl.lbi" --><!-- #EndLibraryItem --><h1>CURSORS </h1> 
<p>Declare and OPEN a cursor:</p>
<pre><b>DECLARE</b> a cursor

  CURSOR <i>cursor_name</i>
     IS <i>select_statement</i>;

  CURSOR <i>cursor_name</i>
     [(<i>parameter_name</i> <i>datatype</i>, ...)]
        IS <i>select_statement</i>;

note: the "<i>select_statement</i>" cannot include an INTO clause.

Cursor parameters follow the syntax
   <i>cursor_parameter</i> [IN] <i>datatype</i> [{:= | DEFAULT} <i>expr</i>]
</pre>
<p> Cursor parameters are passed positionally when the cursor is opened,
each parameter that was declared must have a corresponding parameter 
in the OPEN statement.<br>
</p>
<pre><b>OPEN</b> a cursor

  OPEN <i>cursor_name</i>;
or
  OPEN <i>cursor_name</i> <i>param1 param2</i>...;</pre>
<p> <span class="body"><b> <br>
  Related:</b></span></p>
<p><span class="body"><a href="ref_cursor_declare_open.html">Open a REF cursor</a></span><span class="body"><br>
</span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

