---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Array Variables</h1>
<p>tcsh provides one-dimensional array variables. Any variable may be used as 
  an array; the <a href="set.html">set</a> builtin will explicitly declare 
  an array. </p>
<p>An array is created automatically if any variable is assigned to using the 
  syntax 
</p><pre>set <var>name</var>[<var>subscript</var>]=<i>word</i> ...</pre>
<p>The <var>subscript</var> is treated as an arithmetic expression that must evaluate 
  to a number greater than or equal to zero. 
</p><p>The tcsh shell also provides the following syntax:
</p><pre><b>   @                     </b>Print the values of all shell variables.

   <b>@</b> <i>name</i> <b>=</b> <i>expr</i>         Assign the value of <i>expr</i> to <i>name</i>.

   <b>@</b> <i>name</i>[<i>index</i>] <b>=</b> <i>expr</i>  Assign the value of <i>expr</i> to the <i>index</i>'th component of <i>name</i>
                         both <i>name</i> and its <i>index</i>'th component must already exist.

   <b>@</b> <i>name</i><b>++</b>|<b>--           </b>Increment (`++') or decrement (`--') <i>name</i>

   <b>@</b> <i>name</i>[<i>index</i>]<b>++</b>|<b>--</b>    Increment (`++') or decrement (`--') its <i>index</i>'th component.</pre>
<p> <i>expr</i> may contain the operators `*', `+', etc., as in C. If <i>expr</i> 
  contains `&lt;', `&gt;', `&amp;' or `' then at least that part of <i>expr</i> 
  must be placed within `()'. </p>
<p>The space between `@' and <i>name</i> is required. </p>
<p>The spaces between <i>name</i> and `=' and between `=' and <i>expr</i> are 
  optional. </p>
<p>Components of <i>expr</i> must be separated by spaces.</p>
<p>Referencing an array variable without a subscript is equivalent to referencing 
  element zero. </p>
<p>The <a href="unset.html">unset</a> builtin is used to destroy arrays:<br>
  unset <var>name[subscript]</var> destroys the array element at index <var>subscript</var>.<br>
  unset <var>name</var>, where <var>name</var> is an array, removes the entire 
  array.</p>
<p><b>Related commands</b>:<br>
<a href="set.html">set</a> - Set a shell variable = value<br>
<a href="unset.html">unset</a> - Remove variable or function names</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-arrays.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
