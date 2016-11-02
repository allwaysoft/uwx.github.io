---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>declare</h1> 
<p>Declare variable(s) and/or give them attributes.</p>
<pre>Syntax
      declare [-afFirtx] [-p] [<i>name</i>[=<i>value</i>] ...]
<br>      typeset [-afFirtx] [-p] [<i>name</i>[=<i>value</i>] ...]

Key
   -a     Each <i>name</i> is an array variable.
<br>   -f     Use function names only.

   -F     Inhibit the display of function definitions (implies -f)
          only the function name and attributes are printed.<br>
   -i     The variable is treated as an integer; arithmetic evaluation (see ARITHMETIC EVALUATION)
          is performed when the variable is assigned a <i>value</i>.<br>
   -r     Make names readonly.  These names cannot then be assigned values by subsequent assignment<br>          statements or unset.<br>
   -t     Give each name the trace attribute.
          Traced functions inherit the DEBUG and RETURN traps from the calling shell.
          The trace attribute has no  special  meaning  for variables.<br>
   -x     Mark names for export to subsequent commands via the environment.

   -p     Display the attributes and values of each name.
          When -p is used, additional options are ignored. </pre>
<p> If no names are given then display the values
of variables. </p>
<p>Using `+' instead of `-' turns off the attribute instead, e.g. <span class="code">+i</span> means don't treat as an integer - one exception is that +a can not
be used to destroy an array variable. </p>
<p>When used in a function, makes each name local, as with
the <a href="local.html">local</a> command. </p>
<p>If a variable name is followed by <span class="code">=<i>value</i></span>, the value of the variable is set
to <span class="code"><i>value</i></span></p>
<p>The return value is 0 unless an invalid option is encountered, an attempt is made
to define a function using ``-f foo=bar'', an attempt is made to assign a value to a readonly
variable, an attempt is made to assign a value to an array variable without using the compound
assignment syntax (see Arrays above), one of the names is not a valid shell variable name, an
attempt is made to turn off readonly status for a readonly variable, an attempt is made to
turn off array status for an array variable, or an attempt is made to display a non-existent
function with -f.</p>
<p>If the extdebug shell option is
enabled using shopt, the source file name and line number where the function is defined are
displayed as well. </p>
<p>declare is a bash builtin command</p>
<p class="quote"><i>“I have nothing to declare but my genius” - Oscar Wilde</i></p>
<p><b>Related:</b></p>
<p>
<a href="for.html">for</a> - Expand <var>words</var>, and execute <var>commands</var><br>
<a href="while.html">while</a> - Loop to execute commands<br>
until - Loop to execute commands</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="declare.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
