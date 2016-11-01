---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>GetAttr</h1>
<p>  Returns an integer that represents the attributes of a file or folder.</p>
<pre>Syntax
      GetAttr (<i>path</i>)

Key
   <i>path</i>  The path to the file/folder.
</pre>
<p>The GetAttr() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a> (VBConstants can only be referenced in VBA code).</p>
<p>GetAttr will return one or a combination of the following values:</p>
<blockquote>
<table class="parm_values" border="1" cellpadding="4" cellspacing="0" width="400">
<tbody><tr>
  <th>VBConstant</th>
  <th>Value</th>
  <th>Explanation</th>
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
<p> To test if a folder (or server) exists at all, you can use this function <a href="http://allenbrowne.com/func-11.html">from Allen Browne</a></p>
<pre>Function FolderExists(strPath As String) As Boolean
   On Error Resume Next     
   FolderExists = ((<a href="getattr.html">GetAttr</a>(strPath) And vbDirectory) = vbDirectory) 
End Function</pre>
<p><b>Example</b></p>
<p class="code">Dim intDemo as integer </p>
<p class="code"> intDemo = GetAttr ("C:\docs\demo.doc")</p>
<p class="quote"><i>“If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people” ~ Chinese Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="int.html">Int</a> - Return the integer portion of a number.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="getattr.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

