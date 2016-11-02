---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>readonly</h1> 
<span class="body">Mark variables/functions as readonly. </span><br>
<pre>Syntax
      readonly [-apf] [<i>name</i>] ... 

Options
      -f   Each name refers to a shell function
      -a   Each name refers to an array variable
      -p   Print a list of all readonly names (This is the default)</pre>
<p> The values of these names can not be changed by subsequent assignment.<br>
<br>
The `-p' option causes output to be displayed in a format that can be reused as input. <br>
<br>
The return status is zero unless an invalid option is supplied, one of the name arguments is not a valid shell variable or function name, or the `-f' option is supplied with a name that is not a shell function. </p>
<p>readonly is a bash builtin command.<br>
<br>
<i class="quote">"The stupid neither forgive nor forget, the naive forgive and forget, the wise forgive but do not forget" ~ Thomas Szasz (The second sin)</i> </p>
<p><b>Related:</b><br>
<br>
<a href="chmod.html">chmod</a> - Change access permissions<br>
<a href="env.html">env</a> - Display, set, or remove environment variables <br>
<a href="export.html"> export</a> - Set an environment variable <br>
<a href="function.html">function</a> - Define Function Macros <br>
<a href="hostname.html">hostname</a> - Print or set system name<br>
<a href="local.html">local</a> - Create variables<br>
printenv - Print environment variables <br>
<a href="shift.html">shift</a> - Shift positional parameters <br>
Equivalent PowerShell cmdlet: <a href="../ps/set-variable.html">Set-Variable</a> -option:ReadOnly</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="readonly.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

