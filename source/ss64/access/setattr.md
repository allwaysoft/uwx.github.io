---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>SetAttr</h1>
<p>  Set the attributes of a file.</p>
<pre>Syntax
      SetAttr <i>path</i>, <i>attributes</i>

Key
   <i>path</i>       The path to the file/folder.

  <i>attributes</i>  The file attributes to set.</pre>
<p>Available file attributes:</p>
<blockquote>
<table class="parm_values" border="1" cellpadding="4" cellspacing="0" width="400">
<tbody><tr>
  <th>VBConstant</th>
  <th>Value</th>
  <th>Description</th>
</tr>
<tr>
  <td>vbNormal</td>
  <td>0</td>
  <td>Normal</td>
</tr>
<tr>
  <td>vbReadOnly</td>
  <td>1</td>
  <td>Read-only</td>
</tr>
<tr>
  <td>vbHidden</td>
  <td>2</td>
  <td>Hidden</td>
</tr>
<tr>
  <td>vbSystem</td>
  <td>4</td>
  <td>System file</td>
</tr>
<tr>
  <td>vbDirectory</td>
  <td>16</td>
  <td>Directory or folder</td>
</tr>
<tr>
  <td>vbArchive</td>
  <td>32</td>
  <td>File has been changed since last backup</td>
</tr>
<tr>
  <td>vbAlias</td>
  <td>64</td>
  <td>File name is an alias</td>
</tr>
</tbody></table>
</blockquote>
<p> The SetAttr() function can be used in VBA.</p>
<p><b>Example</b></p>
<p>'Set a file as Read-Only and Hidden<span class="code">:<br>
SetAttr "C:\docs\demo.doc", vbReadOnly + vbHidden</span></p>
<p class="quote"><i>“False face must hide what the false heart doth know” ~ William Shakespeare</i></p>
<p><b>Related:</b></p>
<p><a href="getattr.html">GetAttr</a> - Get file/folder attributes</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="setattr.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

