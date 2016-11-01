---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>export</h1> 
<p>Set an environment variable. Mark each <var>name</var> to be passed to child processes in the environment.</p>
<pre>Syntax
      export [-fn] [-p] [<var>name</var>[=<var>value</var>]]

Options
      -f   The <var>name</var>s refer to shell functions; 
           otherwise the names refer to shell variables
      -n   No longer mark each <var>name</var> for export.
      -p   Display output in a form that can be reused as input. </pre>
<p> If no <var>names</var> are supplied, or if the `-p' option is given, a list 
  of exported names is displayed. </p>
<p>The return status is zero unless an invalid option is supplied, one of the 
  names is not a valid shell variable name, or `-f' is supplied with a name that 
  is not a shell function.</p>
<p>export is a bash built in command.<br>
  <br>
  Example - local variables</p>
<pre>old_file=export.csv
new_file=last.csv
mv $old_file $new_file</pre>
<p>Example - global variables</p>
<pre>mydepartment=Sales ; export mydepartment
mycustomer='Brown Brothers' ; export mycustomer</pre>
<p class="quote"><i>"Laughter is America's most important export" ~</i><i> Walt Disney</i>
</p>
<p><b>Related:</b><br>
  <br>
  <a href="env.html">env</a> - Display, set, or remove environment variables<br>
  <a href="echo.html">echo</a> - Display message on screen <br>
  <a href="hostname.html">hostname</a> - Print or set system name<br>
  <a href="local.html">local</a> - Create variables <br>
  printenv - Print environment variables <br>
  <a href="readonly.html">readonly</a> - Mark variables/functions as readonly 
  <br>
  <a href="shift.html">shift</a> - Shift positional parameters<br>
  <a href="unset.html">unset</a> - Remove variable or function names <br>
Equivalent Windows command: <a href="../nt/setx.html">SETX</a> - Set environment variables permanently</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="export.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

