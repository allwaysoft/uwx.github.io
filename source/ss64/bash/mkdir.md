---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>mkdir</h1> 
<p>Create new folder(s), if they do not already exist.</p>
<pre>Syntax
      mkdir [<i>Options</i>] <i>folder</i>...

      mkdir "<i>Name with spaces</i>"

Options
  -m, --mode=<i>MODE</i>   set permission mode (as in <a href="chmod.html">chmod</a>), not rwxrwxrwx - umask
  -p, --parents     no error if existing, make parent directories as needed
      --verbose     print a message for each created directory</pre>
<p>  mkdir creates the standard entries<span class="code"> . </span>(dot) for the current folder 
  and<span class="code"> ..</span> (dot dot) for its parent<br>
  <br>
  A folder name that includes spaces can appear in some applications
  as "Name%20with%20spaces" This is because 20 is the <a href="../ascii.html">Ascii code</a> for a space in Hex.</p>
<p class="quote"><i>"The best way to predict the future is to create it" ~ Peter Drucker</i></p>
<p><b>Related:</b><br>
<br>
<a href="cd.html">cd</a> - Change Directory<br>
<a href="rm.html">rm</a> - Remove files<br>
<a href="rmdir.html">rmdir</a> - Remove folder(s)<br>
Equivalent Windows commands: 
<a href="../nt/md.html">MD</a> - Create new folders </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mkdir.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

