---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> DROP DEFAULT</h1>
<p>Remove user-defined default(s) from the current database.</p>
<pre>Syntax
      DROP DEFAULT { [<i>schema_name</i>.] <i>default_name</i> } [ ,...n ] [ ; ]

Key:
    <i>schema_name</i>    The schema to which the default belongs
    <i>default_name</i>   Name of an existing default

Defaults must comply with the rules for identifiers.
</pre>
<p><b>Example</b></p>
<pre>DROP DEFAULT price_dflt;</pre>
<p class="quote"><i>"Small is beautiful" ~ E. F.Schumacher</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="default_c.html">CREATE DEFAULT</a><br>sp_help - List the defaults that exist <br>
  sp_unbindefault - Unbind the default from a column or an alias data type.<br>
Equivalent Oracle command:  <a href="../ora/table_a.html">ALTER TABLE</a> ... DEFAULT</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

