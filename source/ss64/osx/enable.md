---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>enable /disable</h1> 
<p>Enable and disable builtin shell commands</p>
<pre>Syntax
      enable [-adnps] [-f <i>filename</i>] [<i>name</i> ...]

Key

   -f <i>filename</i> Load the new builtin command name from shared object filename,
               on systems that support dynamic loading.

   -d <i>name</i>     Delete a builtin previously loaded with -f.

   -n          List all disabled builtins

   -n <i>name</i>     Each <i>name </i>is disabled; otherwise, names are enabled.

   -a          List all builtins with enabled/disabled state of each.

   -p          List all enabled builtins.

 &lt;no options&gt;  List all enabled builtins.

   -s          List only the POSIX special builtins.</pre>
<p>Disabling a builtin allows a  disk  command  which
has  the  same name as a shell builtin to be executed without specifying a full pathname, even
though the shell normally searches for builtins before disk commands.  </p>
<p> <b>Examples</b></p>
<p>Use the <span class="code">test</span> binary found via the PATH instead of the shell builtin version<br>
<br>
<span class="code">$ enable -n test<br>
<br>
</span>To restore the builtin version:</p>
<p><span class="code">$ enable test</span><br>
<br>
The return value is 0 unless a <i>name</i> is not a shell builtin or there is an error loading a new builtin from a shared object.</p>
<p class="quote"><i>“I really believe in completely being naive and having high hopes when meeting someone new. I can kind of re-do my stupidity or my naivete. It pisses me off to think that we’re conditioned to push away bad feelings and to think that anything that’s uncomfortable is something to be avoided. When things are really bad nowadays, I recognize the value in it because it’s me filling my quota - it’s going to make my joy more intense later” ~ Fiona Apple</i>.</p>
<p><b>Related:</b></p>
<p><a href="lpr.html">lpr</a> - Print files <a href="lprm.html"><br>
lprm</a> - Remove jobs from the print queue<br>
<a href="lpstat.html">lpstat</a> - Printer status information</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="enable.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
