---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_DESCRIBE</h1> 
<p>Get information about a PL/SQL object.</p>
<pre>Contains only one procedure: DESCRIBE_PROCEDURE

The package declares two PL/SQL table types which are used 
to hold data returned by its OUT parameters.

TYPE VARCHAR2_TABLE IS TABLE OF VARCHAR2(30)
    INDEX BY BINARY_INTEGER;

TYPE NUMBER_TABLE IS TABLE OF NUMBER
    INDEX BY BINARY_INTEGER;</pre>
<p><b><br></b>For full documentation of the packaged procedure above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b><br><br>
  </b><i>"I have a lot of street smarts because of the neighbourhood I grew 
  up in" - <a href="http://www.amazon.com/exec/obidos/ASIN/B00004Z4T0/ss64">Jennifer 
  Lopez</a></i><b><br>
  <br>
Related Commands:<br><br></b><a href="../ora/desc.html">DESC</a></p>
<p><b>Related Views</b></p>
<pre>                      <a href="../orad/ALL_ARGUMENTS.html">ALL_ARGUMENTS</a>        <a href="../orad/USER_ARGUMENTS.html">USER_ARGUMENTS</a>
 <a href="../orad/DBA_OBJECTS.html">DBA_OBJECTS</a>          <a href="../orad/ALL_OBJECTS.html">ALL_OBJECTS</a>          <a href="../orad/USER_OBJECTS.html">USER_OBJECTS</a>         <a href="../orad/SYS_OBJECTS.html">SYS_OBJECTS</a> 
 <a href="../orad/DBA_SOURCE.html">DBA_SOURCE</a>           <a href="../orad/ALL_SOURCE.html">ALL_SOURCE</a>           <a href="../orad/USER_SOURCE.html">USER_SOURCE</a> </pre>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_DESCRIBE.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

