---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE DATABASE LINK</h1> 
<p>Create a Database Link.<br>
  <br>
  Syntax:</p>
<pre>   CREATE [SHARED][PUBLIC] DATABASE LINK <i>link_name</i>
     [CONNECT TO CURRENT_USER]
        [USING '<i>connect_string</i>']

   CREATE [SHARED][PUBLIC] DATABASE LINK <i>link_name</i>
      [CONNECT TO <i>user</i> IDENTIFIED BY <i>password</i>]
      [AUTHENTICATED BY <i>user</i> IDENTIFIED BY <i>password</i>]
         [USING '<i>connect_string</i>']</pre>
<p>Periods are allowed within a <i>link_name</i>  so a dblink called MY<b>.</b>LINK is valid.</p>
<p>If not already setup, ensure the database has a <a href="syntax-tnsnames.html">global name</a>.<br>
e.g.<br>
<span class="code">ALTER DATABASE rename global_name to SS64.WORLD</span></p>
<p><b>Example</b></p>
<p class="code"> CREATE Public Database Link SS64 <br>
Connect To scott Identified By demo <br>
Using test;<br>
<br>
SELECT count(*) from table@ss64;</p>
<p><i class="quote">"During my service in the U.S. Congress, I took the initiative in creating the Internet" ~ Al Gore </i><br>
  <br>  <b>Related Commands:</b><br>
  <br>
  <a href="link_d.html">DROP DATABASE LINK</a><br>
  <a href="session_a.html">ALTER SESSION</a> CLOSE DATABASE LINK <i>link_name</i><br>
  <a href="../orap/DBMS_HS_PASSTHROUGH.html">DBMS_HS_PASSTHROUGH</a> <br>
<br>
<b>Related Views:</b></p>
<pre><a href="../orad/DBA_DB_LINKS.html">DBA_DB_LINKS</a>        <a href="../orad/ALL_DB_LINKS.html">ALL_DB_LINKS</a>        <a href="../orad/USER_DB_LINKS.html">USER_DB_LINKS</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

