---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>
Arrays</h1> 
<p>Bash provides one-dimensional array variables. Any variable can be used as 
  an array; the <a href="declare.html">declare</a> builtin 
  will explicitly declare an array. There is no maximum limit on the size of an 
  array, nor any requirement that members be indexed or assigned contiguously. 
  Arrays are zero-based. </p>
<p>An array is created automatically if any variable is assigned to using the 
  syntax 
</p><pre>name[<var>subscript</var>]=<var>value</var></pre>
<p>The <var>subscript</var> is treated as an arithmetic expression that must evaluate 
  to a number greater than or equal to zero. To explicitly declare an array, use 
</p><pre>declare -a <var>name</var>
</pre>
<p>The syntax 
</p><pre>declare -a <var>name</var>[<var>subscript</var>]</pre>
<p>is also accepted; the <var>subscript</var> is ignored. Attributes can be specified 
  for an array variable using the <a href="declare.html">declare</a> and 
  <a href="readonly.html">readonly</a> builtins. Each attribute 
  applies to all members of an array. </p>
<p>Arrays are assigned to using compound assignments of the form 
</p><pre>name=(value<var>1</var> ... value<var>n</var>)</pre>
<p>where each <var>value</var> is of the form <code>[[<var>subscript</var>]=]</code><var>string</var>. 
  If the optional subscript is supplied, that index is assigned to; otherwise 
  the index of the element assigned is the last index assigned to by the statement 
  plus one. Indexing starts at zero.<br>
  This syntax is also accepted by the <a href="declare.html">declare</a> 
  builtin. <br>
  Individual array elements can be assigned to using the <code>name[</code><var>subscript</var><code>]=</code><var>value</var> 
  syntax introduced above. </p>
<p>Any element of an array can be referenced using <code>${name[</code><var>subscript</var><code>]}</code>. 
  <br>
  <br>
  The braces are required to avoid conflicts with the shell's filename expansion 
  operators. <br>
  <br>
  If the <var>subscript</var> is <samp>`@'</samp> or <samp>`*'</samp>, the word 
  expands to all members of the array <var>name</var>. These subscripts differ 
  only when the word appears within double quotes. If the word is double-quoted, 
  <code>${name[*]}</code> expands to a single word with the value of each array 
  member separated by the first character of the <code>IFS</code> variable, and 
  <code>${name[@]}</code> expands each element of <var>name</var> to a separate 
  word. <br>
  When there are no array members, <code>${name[@]}</code> expands to nothing. 
  This is analogous to the expansion of the special parameters <samp>`@'</samp> 
  and <samp>`*'</samp>. <code>${#name[</code><var>subscript</var><code>]}</code> 
  expands to the length of <code>${name[</code><var>subscript</var><code>]}</code>. 
  If <var>subscript</var> is <samp>`@'</samp> or <samp>`*'</samp>, the expansion 
  is the number of elements in the array. <br>
  <br>
  Referencing an array variable without a subscript is equivalent to referencing 
  element zero. </p>
<p>The <a href="unset.html">unset</a> builtin is used to destroy arrays. 
  <a href="unset.html">unset</a> <var>name[subscript]</var> destroys the 
  array element at index <var>subscript</var>.<br>
  <br>
  <a href="unset.html">unset</a> <var>name</var>, where <var>name</var> 
  is an array, removes the entire array. A subscript of <samp>`*'</samp> or <samp>`@'</samp> 
  also removes the entire array. </p>
<p>The <a href="declare.html">declare</a>, <a href="local.html">local</a>, 
  and <a href="readonly.html">readonly</a> builtins each accept a <samp>`-a'</samp> 
option to specify an array. </p>
<p>The contents of the directory stack are also visible as the value of the <code>DIRSTACK</code> 
  shell variable.</p>
<p><b>Related</b>:<br>
  <br>
  The <a href="read.html">read</a> builtin accepts a <samp>`-a'</samp> 
  option to assign a list of words read from the standard input to an array, and 
  can read values from the standard input into individual array elements. <br>
  The <a href="set.html">set</a> and <a href="declare.html">declare</a> 
  builtins display array values in a way that allows them to be reused as input. <br>
Windows equivalent commands: <a href="../nt/set.html">
  SET</a> / <a href="../nt/setlocal.html">SETLOCAL</a> - Display, set, or remove Windows  environment variables.</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-arrays.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

