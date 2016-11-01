---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapl.lbi" --><!-- #EndLibraryItem --><h1>Stored Procedures and PL/SQL</h1>
<p>Both Procedures and Functions contain SQL and PL/SQL code - they are identical
  except that functions always return a <b> value </b>to the caller.
  Optional parameters can be supplied in order to
input (or output) values.</p>
<p>Procedures and functions are created
  in a user's schema and stored   (in compiled form) inside the database.</p>
<p><b>Packages</b><br>
  Packages provide a method of encapsulating and storing related procedures and
    functions together in
  the database. Packages help to keep code routines properly organized.</p>
<p>All objects within a package are parsed, compiled,
    and loaded into memory together - this helps performance.</p>
<p>A package consists of two parts: the specification and the body. The specification
declares <b> public </b>constructs of the package. <br>
This arrangement minimises the need to recompile procedures during development and provides more flexibility in referencing public/private procedures and local/global
variables.<br> 
Granting the <a href="../ora/syntax-secure.html">privilege</a> to use a package makes all constructs of the package accessible to the grantee.</p>
<p><b>PL/SQL</b> - Procedural Language Extension to SQL<br>
  PL/SQL is Oracle's procedural language extension to SQL. As described above, PL/SQL packages can be stored centrally in the database or alternatively,
    front end applications can send PL/SQL to the database.</p>
<p>To minimise network traffic and maximise performance use stored procedures, or failing that, send 'blocks' of PL/SQL rather than individual SQL statements.<br>
    <br>
  By applying suitable <a href="../ora/syntax-secure.html">permissions,</a> access to data can be restricted so that users may access a set of data <i>only </i>via
  a specific PL/SQL routine.<br>
    <br>
  Both stored procedures and PL/SQL triggers are stored within the database in a compiled form called P code (pseudocode.)</p>
<p><b>Advanced Queuing</b><br>
  Oracle Advanced Queuing allows distributed applications to communicate asynchronously using messages. Messages are queued for deferred
    processing by the Oracle server. This can take the place of additional software such as transaction processing monitors or messaging
    middleware.</p>
<p><span class="quote"><i>"Ugly programs are like ugly suspension bridges:
      they're much more
liable to collapse than pretty ones, because the way humans  perceive beauty
      is intimately related to our ability to process and understand complexity"
      ~ Eric
S. Raymond, (Why Python?</i>)</span><br>
  <br>
<b>Related</b></p>
<p><a href="../orap/">Oracle Supplied Packages</a><br>
<a href="../oraplsql/">PL/SQL commands</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

