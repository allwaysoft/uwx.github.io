---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem --><h1>The Reddick <a href="syntax-naming.html">VBA Naming Conventions</a> - Prefixes</h1>
<p>Prefixes modify an object tag to indicate more information about an object.</p>
<p>Arrays of objects prefix</p>
<p>Arrays of an object type use the prefix “a”. For example:</p>
<p class="code">aintFontSizes</p>
<p class="code">astrNames</p>
<p>Index prefix</p>
<p>You indicate an index into an array by the prefix “i,” regardless of the datatype of the index. You can also use the index prefix to index into other enumerated objects, such as a collection of user-defined classes. For example:</p>
<p class="code">iaintFontSizes</p>
<p class="code">iastrNames</p>
<p class="code">igphsGlyphCollection</p>
<p>Prefixes for scope and lifetime</p>
<p>Three levels of scope exist for each variable in VBA: Public, Private, and Local. A variable also has a lifetime of the current procedure or the length of the program. Use the prefixes in <b>Table 2</b> to indicate scope and lifetime.</p>
<p><b>Table 2.</b> Prefixes for scope and lifetime.</p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody><tr>
<th><p>Prefix</p></th>
<th><p>Object Type</p></th>
</tr>
<tr>
<td><p>(none)</p></td>
<td><p>Local variable, procedure-level lifetime</p></td>
</tr>
<tr>
<td><p>s</p></td>
<td><p>Local variable, program-level lifetime (static variable)</p></td>
</tr>
<tr>
<td><p>m</p></td>
<td><p>Private (module) variable, program-level lifetime</p></td>
</tr>
<tr>
<td><p>g</p></td>
<td><p>Public (global) variable, program-level lifetime</p></td>
</tr>
</tbody></table>
<p>You also use the “m”" and “g” constants with other objects, such as constants, to indicate their scope. For example:</p>
<p class="code">intLocalVariable</p>
<p class="code">mintPrivateVariable</p>
<p class="code">gintPublicVariable</p>
<p class="code">mconPi</p>
<p>Other prefixes</p>
<p><b>Table 3 </b>lists and describes some other prefixes.</p>
<p><b>Table 3.</b> Other commonly-used prefixes.</p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody><tr>
<th><p>Prefix</p></th>
<th><p>Object Type</p></th>
</tr>
<tr>
<td><p>c</p></td>
<td><p>Count of some object type</p></td>
</tr>
<tr>
<td><p>h</p></td>
<td><p>Handle to a Windows object</p></td>
</tr>
<tr>
<td><p>r</p></td>
<td><p>Parameter passed by reference</p></td>
</tr>
</tbody></table>
<p>Here are several examples:</p>
<p class="code">cstrArray</p>
<p class="code">hwndForm</p>
<p>Copyright © 1995 Greg Reddick. You can freely distribute this document.</p>
<p><b>Related</b></p>
<ol>
<li><a href="syntax-naming-variables.html">Introduction - Variable and Procedure names</a></li>
<li>Prefixes</li>
<li><a href="syntax-naming-suffix.html">Suffixes</a></li>
<li><a href="syntax-naming-object-vars.html">Object variables and DAO</a> - variables</li>
<li><a href="syntax-naming-database.html">Database Explorer objects</a> - Table, Query, Form etc </li>
<li><a href="syntax-naming-objects.html">Object Names</a></li></ol><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

