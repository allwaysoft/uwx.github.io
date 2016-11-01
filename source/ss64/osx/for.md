---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>for</h1>
<p>Loop command.</p>
<pre>Syntax
      for <var>name</var> [in <var>words</var> ...]; do <var>commands</var>; done</pre>
<p>Expand <var>words</var>, and execute <var>commands</var> once for each member in the resultant list, with <var>name</var> bound to the current member.</p>
<p>When a wildcard is introduced, then words will match against filenames, * will match every file in the directory.</p>
<pre>for thisfile in *; do
   echo "found $thisfile"
done</pre>
<p>If <samp>`in <var>words</var>'</samp> is not present, the <code>for</code> command executes the <var>commands</var> once for each positional parameter that is set, as if <samp>`in "$@"'</samp> had been specified (see section <a href="http://tiswww.case.edu/php/chet/bash/bashref.html#SEC25">Special Parameters</a>). The return status is the exit status of the last command that executes. If there are no items in the expansion of <var>words</var>, no commands are executed, and the return status is zero. An alternate form of the <code>for</code> command is also supported: </p>
<pre>for (( <var>expr1</var> ; <var>expr2</var> ; <var>expr3</var> )) ; do <var>commands</var> ; done</pre>
<p>First, the arithmetic expression <var>expr1</var> is evaluated according to the rules described below . The arithmetic expression <var>expr2</var> is then evaluated repeatedly until it evaluates to zero. <br>
    <br>
  Each time <var>expr2</var> evaluates to a non-zero value, <var>commands</var> are executed and the arithmetic expression <var>expr3</var> is evaluated. If any expression is omitted, it behaves as if it evaluates to 1. <br>
    <br>
  The return value is the exit status of the last command in <var>list</var> that is executed, or false if any of the expressions is invalid. </p>
<p>for is a bash builtin command </p>
<p><b>Examples</b></p>
<pre>#! /bin/bash<br># List of manufacturers<br>for manufacturer in Apple Sony "Hewlett Packard" Nokia<br>do<br>  echo "Manufacturer is:" $manufacturer<br>done
</pre>
<p># The above can also be written as a single line...<br>
<span class="code">for manufacturer in Apple Sony "Hewlett Packard" Nokia; do echo "Manufacturer is:" $manufacturer;done<br>
</span><br>
<br>
# Rename a bunch of iPhone screenshot files from IMG_0001.PNG, IMG_0002.PNG...<br>
# to ScreenShot01.png,ScreenShot01.png...</p>
<pre>for name in IMG*PNG<br>do
  # Work out the new name<br>  newname="$(echo $name | <a href="sed.html">sed</a> "s/IMG_00/ScreenShot/;s/PNG/png/")"

  # Move/rename the files<br>  echo "renaming $name as $newname"<br>  <a href="mv.html">mv</a> $name $newname<br>done
</pre>
<p class="quote"><i>"In expanding the field of knowledge, we but increase the horizon of ignorance" ~ Henry Miller </i> </p>
<p><b>Related:</b></p>
<p>
<a href="break.html">break</a> - Exit from a loop<br>
<a href="while.html">while</a> - Execute commands <br>
continue - Resume the next iteration of a while or foreach loop</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="for.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
