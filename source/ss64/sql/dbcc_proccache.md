---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC PROCCACHE</h1>
<p>Display information about the procedure cache (in table format)</p>
<pre>Syntax
      DBCC PROCCACHE [WITH NO_INFOMSGS]

Key:
	 NO_INFOMSGS - Suppress all information messages (severity 0-10)</pre>
<p> All output figures are Totals:</p>
<blockquote>
  <p>proc cache size<br>
    Entries in the procedure cache.</p>
  <p>proc cache used<br>
    Entries that are currently being used.</p>
  <p>num proc buffs<br>
    Pages used by all entries in the procedure cache.</p>
  <p>num proc buffs used<br>
    Pages used by all entries that are currently being used.</p>
  <p>proc cache active / num proc buffs active<br>
    For backward compatibility only. </p>
</blockquote>
<p class="quote"><i>“Misrepresentation and deception are standard operating procedure for this administration, which - to an extent never before seen in U.S. history - systematically and brazenly distorts the facts.” - Paul Krugman (NY Times)</i></p>
<p>  Equivalent Oracle command:  Select from <a href="../orav/V$SYSSTAT.html">V$SYSSTAT</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_proccache.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

