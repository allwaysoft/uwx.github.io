---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>TypeName</h1> 
<p>Return variable type (variant subtype).</p>
<pre>Syntax 
      TypeName(<i>varname</i>)

Key
   <i>varname</i>    The name of the variable
</pre>
<p>TypeName() has the following return values:
</p>
<table>
  <tbody><tr>
  <th>Value</th>
  <th>Description</th></tr>
  <tr>
  <td>Byte</td>
  <td>Byte value</td></tr>
  <tr>
  <td>Integer</td>
  <td>Integer value</td></tr>
  <tr>
  <td>Long</td>
  <td>Long integer value</td></tr>
  <tr>
  <td>Single</td>
  <td>Single-precision floating-point value</td></tr>
  <tr>
  <td>Double</td>
  <td>Double-precision floating-point value</td></tr>
  <tr>
  <td>Currency</td>
  <td>Currency value</td></tr>
  <tr>
  <td>Decimal</td>
  <td>Decimal value</td></tr>
  <tr>
  <td>Date</td>
  <td>Date or time value</td></tr>
  <tr>
  <td>String</td>
  <td>Character string value</td></tr>
  <tr>
  <td>Boolean</td>
  <td>Boolean value; True or False</td></tr>
  <tr>
  <td>Empty</td>
  <td>Uninitialized</td></tr>
  <tr>
  <td>Null</td>
  <td>No valid data</td></tr>
  <tr>
  <td>&lt;object type&gt;</td>
  <td>Actual type name of an object</td></tr>
  <tr>
  <td>Object</td>
  <td>Generic object</td></tr>
  <tr>
  <td>Unknown</td>
  <td>Unknown object type</td></tr>
  <tr>
  <td>Nothing</td>
  <td>Object variable that has been explicitly set to Nothing, or has been set to return the value of a function that returned Nothing </td></tr>
  <tr>
  <td>Error</td>
  <td>Error</td></tr>
  <tr>
  <td>Variant()</td>
  <td>A Variant array</td></tr>
</tbody></table>
<p><b>Examples</b></p>
<p><span class="code">Dim MyType</span><br>
<span class="code">MyType = TypeName("SS64") ' Returns "String".<br>
MyType = TypeName(4) ' Returns "Integer".<br>
MyType = TypeName(37.50) ' Returns "Double".</span></p>
<p class="quote"><i>“Who looks outside, dreams; who looks inside, awakes” - Carl Gustav Jung</i></p>
<p><b>Related:</b></p>
<p><a href="dim.html">Dim</a> - Declare a new variable or array variable<br>

Equivalent in PowerShell: Use a <a href="../ps/syntax-compare.html">comparison operator</a> <span class="code">$myvar -is [bool]</span></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="typename.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

