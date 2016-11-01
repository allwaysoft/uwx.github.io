---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>export</h1> 
<p>Set an environment variable. The supplied <i>names</i> are marked for automatic export to the environment of subsequently executed commands.</p>
<pre>Syntax
      export [-fn] [<i>name</i>[=<i>word</i>]] ...<br>
      export -p

Key
   -f   The <i>names </i>refer to functions.

 <i>word</i>   The value of the variable is set to <i>word</i>.

   -n   Remove the export property from each <i>name</i>.

   -p   Print a list of all the names exported in this shell.
        This is also the default action if no <i>name </i>is given</pre>
<p>export returns an exit status of
0 unless an invalid option is encountered, one of the names is  not  a  valid  shell  variable
name, or -f is supplied with a name that is not a function.</p>
<p> export is a bash built in command. (in tcsh you would use setenv instead) </p>
<p class="quote"><i>"Power tends to corrupt, absolute power corrupts absolutely" ~ Lord 
  Acton</i></p>
<p><b>Related:</b></p>
<p>  
<a href="set.html">set</a> - Set a shell variable <br> 
<a href="unset.html">unset</a> - Remove variable or function names</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="export.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
