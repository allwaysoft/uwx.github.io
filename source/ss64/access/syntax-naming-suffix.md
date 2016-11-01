---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem --><h1>The Reddick <a href="syntax-naming.html">VBA Naming Conventions</a> - Suffixes</h1>
<p>Suffixes modify the base name of an object, indicating additional information about a variable. You’ll likely create your own suffixes that are specific to your development work. <b>Table 4</b> lists some generic VBA suffixes.</p>
<p><b>Table 4.</b> Commonly used suffixes.</p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody><tr>
<th><p>Suffix</p></th>
<th><p>Object Type</p></th>
</tr>
<tr>
<td><p>Min</p></td>
<td><p>The absolute first element in an array or other kind of list.</p></td>
</tr>
<tr>
<td><p>First</p></td>
<td><p>The first element to be used in an array or list during the current operation.</p></td>
</tr>
<tr>
<td><p>Last</p></td>
<td><p>The last element to be used in an array or list during the current operation.</p></td>
</tr>
<tr>
<td><p>Lim</p></td>
<td><p>The upper limit of elements to be used in an array or list. Lim isn’t a valid index. Generally, Lim equals Last + 1.</p></td>
</tr>
<tr>
<td><p>Max</p></td>
<td><p>The absolutely last element in an array or other kind of list.</p></td>
</tr>
<tr>
<td><p>Cnt</p></td>
<td><p>Used with database elements to indicate that the item is a Counter. Counter fields are incremented by the system and are numbers of either type Long or type ReplicationId.</p></td>
</tr>
</tbody></table>
<p>Here are some examples:</p>
<p class="code">iastrNamesMin</p>
<p class="code">iastrNamesMax</p>
<p class="code">iaintFontSizesFirst</p>
<p class="code">igphsGlyphCollectionLast</p>
<p class="code">lngCustomerIdCnt</p>
<p class="code">varOrderIdCnt</p>
<p>Copyright © 1995 Greg Reddick. You can freely distribute this document.</p>
<p><b>Related:</b></p>
<ol>
<li><a href="syntax-naming-variables.html">Introduction - Variable and Procedure names</a></li>
<li><a href="syntax-naming-prefix.html">Prefixes</a></li>
<li>Suffixes</li>
<li><a href="syntax-naming-object-vars.html">Object variables and DAO</a> - variables</li>
<li><a href="syntax-naming-database.html">Database Explorer objects</a> - Table, Query, Form etc </li>
<li><a href="syntax-naming-objects.html">Object Names</a></li></ol><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="syntax-naming-suffix.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

