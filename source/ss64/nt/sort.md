---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>SORT</h1> 
<p> Sort will accept a redirected or piped file input and TYPE the 
file, sorted line by line.</p>
<pre>Syntax
      SORT [<i>options</i>] 

<i>Options</i><br>   /R  : Reverse sort order (Z to A, 9 to 0)<br>
   /+<i>n</i> : Sort the file ignoring the first one or more characters in each row.
         The default (/+1) will sort using all characters in each row.
          /+2 will start comparing at the second character, /+3 the third etc.
         Lines with fewer than <i>n</i> characters collate before other lines.

   /L[OCALE] <i>locale</i>

         Override the system default locale with
         The "C" locale yields a faster 
         collating sequence.
         The sort is always case insensitive.

   /M[EMORY] <i>kilobytes</i>

         The amount of RAM to use for the sort.
         The best performance is usually achieved by
         not specifying a memory size. 

         SORT will only create a temporary file 
         when required by limitations in available memory.

  /REC[ORD_MAXIMUM] <i>characters</i> 

         The maximum number of characters in a row or record
         (default 4096, maximum 65535)

  [drive:][<i>pathname</i>]

         The file to be sorted.
         If not specified, the standard input is sorted.
         Specifying an input file is faster than
         redirecting the same file as standard input.

   /T[EMPORARY] [<i>drive</i>:][<i>path</i>]

         The path of the directory to hold
         SORT's working storage, in case the data
         does not fit in RAM.  The default is %temp%

   /O[UTPUT] [<i>drive</i>:][<i>pathname</i>]

         The file where the sorted input is to be stored.
         If not specified, the data is written to standard output.
         Specifying an output file is faster than redirecting
         standard output to a file.

   /C[ASE_SENSITIVE]

         Case sensitive sort. (undocumented switch in Win7 and above)

   /U[NI_OUTPUT]

         Output in unicode. (undocumented switch in Win7 and above)
</pre>
<p> Redirecting a file into SORT<b><br>
  </b><br>
  <span class="code">SORT &lt; pathname</span><br>
  <br>
  Piping a command into SORT<br>
<br>
<span class="code">command | SORT</span><br>
<br>
Piping the output from SORT into a file<br>
<br>
<span class="code">command | SORT &gt; pathname2<br>

SORT &lt; pathname &gt; pathname2</span><br>
<br>
Piping the output from SORT and appending to an existing file<br>
  <br>
  <span class="code">command | SORT &gt;&gt; pathname2<br>
  SORT &lt; pathname &gt;&gt; pathname2 </span><br>
  <br>
  <i class="quote">"Cultivate peace and order before confusion and disorder" ~ Tao 
  Teh Ching</i><br>
  <b><br>
  Related:</b><br>
  <br>
  <a href="type.html">TYPE</a> - Display the contents of a text file<br>
  <a href="syntax-redirection.html">Redirection</a> - Redirect files, command 
  output and error messages<br>
Powershell: <a href="../ps/sort-object.html">Sort-Object</a>  - Sort objects by property value (sort) <br>
Equivalent bash command (Linux): <a href="../bash/sort.html">sort</a> - Sort text files</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="sort.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

