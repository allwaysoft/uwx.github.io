---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>EXEC[UTE] (SQL*Plus command)</h1> 
<p>Execute a PL/SQL function or procedure.<br>
  <br>
  Syntax:</p>
<pre>   EXEC statement

   EXEC [:bind_variable :=] package.procedure;

   EXEC [:bind_variable :=] package.function(parameters);
</pre>
<p>The length of the EXEC command cannot exceed the length defined by SET LINESIZE.<b><br>
  <br>
  </b>If the EXEC command is too long to fit on one line, use the SQL*Plus continuation 
  character (a hyphen) -<b> <br>
  <br>
  Example<br>
  </b><br>
  <span class="code">SQL&gt; EXEC :answer := EMP_PAY.BONUS('SMITH')</span></p>
<p>Executing  directly from the shell (in this case Windows): </p>
<p><span class="code">C:\&gt; echo execute demoProc|<a href="syntax-sqlplus.html">sqlplus</a> demo/password</span><br>
<br>
<i class="quote">"Everyone wants results, but no one is willing to do what it takes to 
get them" ~ Dirty Harry</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="exec_imm.html">EXECUTE IMMEDIATE</a><br>
<a href="../orap/index.html">PL/SQL Packages</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

