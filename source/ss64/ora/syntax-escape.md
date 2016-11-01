---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Escape characters </h1> 
<p>How to deal with special characters. (<span class="code"> &amp; ' _ % </span>)  </p>
<p><b>Quote character </b></p>
<blockquote>
<p>To escape quotation marks, use two quotes for every one you want displayed:</p>
<p class="code">SQL&gt; SELECT '<i>The game is done! </i><b>'</b>'I''ve won, I''ve won!'<b>'</b> <i>quoth she, and whistles thrice.</i>' AS demo FROM DUAL;</p>
<p>The game is done! 'I've won, I've won!' quoth she, and whistles thrice.</p>
</blockquote>
<p><b>Wildcard characters</b></p>
<blockquote>
<p>The wildcard character<span class="code"> _ </span>is used to match  one character<br>
The wildcard character<span class="code"> % </span>is used to match any characters. These <a href="syntax-functions.html#like">wildcards</a> can be escaped in SQL:</p>
<p class="code">SET ESCAPE '\';<br>
SELECT name FROM emp <br>
WHERE id LIKE '%\%%';</p>
</blockquote>
<p><b>Ampersand (&amp;) characters</b> in SQL*Plus</p>
<blockquote>
<p>The <span class="code">&amp;</span> symbol is the default SQL*Plus  substitution variable prefix, if you need to use an actual <span class="code">&amp;</span> in an SQL statement, then the <a href="syntax-sqlplus.html">SQL*Plus</a> DEFINE setting can  change the prefix character to something else:</p>
<p class="code">SET DEFINE ~<br>
SELECT 'Profit &amp; Loss' FROM dual;</p>
<p>Starting a new SQL*Plus session will reset the default (&amp;) escape character. </p>
<p>Other methods:</p>
<p>Set  an escape character and then escape the &amp;:</p>
<p class="code">SET ESCAPE '\'<br>
SELECT '\&amp;something' FROM dual;</p>
<p>Don't scan for substitution variables:</p>
<p class="code">SET SCAN OFF<br>
SELECT '&amp;something' x FROM dual;</p>
</blockquote>
<p><b>Related</b></p>
<p><a href="syntax-reserved.html">Reserved keywords</a><br>
<a href="syntax-functions.html">SQL Functions</a>, (Sum, <a href="syntax-to_date.html">to_date</a>, <a href="syntax-to_char.html">to_char</a> etc)</p>
<!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-escape.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

