---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> DROP  ASSEMBLY</h1>
<p>Remove an assembly and all its associated files from the current database. </p>
<pre>Syntax
      DROP ASSEMBLY <i>assembly</i> [,...n ]
         [WITH NO DEPENDENTS ] [ ; ]

Key
   WITH NO DEPENDENTS  Drop only <i>assembly_name</i> and none of the dependent/referenced assemblies.
                       default is to drop all dependent assemblies. </pre>
<p>DROP ASSEMBLY returns an error if the assembly is referenced by another assembly  in the database or if it is used by a CLR function, procedure, trigger, user-defined type or aggregate in the current database.</p>
<p>DROP ASSEMBLY does not interfere with any code referencing the assembly that is currently running. <br>
After DROP ASSEMBLY executes, any new attempts to invoke the assembly code will fail.</p>
<p><b>Example</b></p>
<pre class="code" id="ctl00_LibFrame_MainContent_ctl10other" space="preserve">DROP ASSEMBLY MyCode</pre>
<p class="quote"><i>"One of the healthiest ways to gamble is with a spade and a package of garden seeds" ~ Dan Bennett</i></p>
<p><b>Related commands:</b><br>
  <br>
  <a href="assembly_c.html">CREATE ASSEMBLY</a><br>
  <a href="assembly_a.html">ALTER ASSEMBLY</a><br>
  <br>
  <b>Equivalent Oracle command</b>:</p>
<p><a href="../bash/export.html">  </a><a href="../ora/package_d.html">DROP PACKAGE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="assembly_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

