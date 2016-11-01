---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER JAVA</h1> 
<p>Alter Java source.<br>
  <br>
  Syntax:</p>
<pre>   ALTER JAVA {SOURCE|CLASS} [<i>schema</i>.]<i>object_name</i>
      [RESOLVER (( match_string, schema_name )…)]
         {COMPILE|RESOLVE}

   ALTER JAVA {SOURCE|CLASS} [<i>schema</i>.]<i>object_name</i>
      [RESOLVER (( match_string, schema_name )…)]
         AUTHID{CURRENT_USER|DEFINER}</pre>
<p>COMPILE and RESOLVE are synonymous - compile the object source code or when
  applied to a class, resolve referenced names.</p>
<p>AUTHID CURRENT_USER - methods of the class
execute with the privileges of the CURRENT_USER.</p>
<p>AUTHID DEFINER -   methods of the class
execute with the privileges of the user who defined it.</p>
<p><b>Related Commands:</b><br>
<br>
JAVA - <a href="java_c.html">CREATE JAVA</a> <br>
JAVA - <a href="java_d.html">DROP JAVA</a><br>
<br>
<b>Related Views:</b></p>
<p>&nbsp;&nbsp;<span class="code"><a href="../orad/DBA_JAVA_POLICY.html">DBA_JAVA_POLICY</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_JAVA_POLICY.html">USER_JAVA_POLICY</a> </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

