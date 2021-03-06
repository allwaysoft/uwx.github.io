---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CONNECT</h1> 
<p>Start a user session.<br>
  <br>
  Syntax:</p>
<pre>Connecting from an SQL Prompt:

   CONNECT "<i>username</i>"
   CONNECT "<i>username</i>/<i>password</i>"
   CONNECT "<i>username</i>/<i>password</i>@<i>connect_string</i>"
   CONNECT "<i>username</i>/<i>password</i>@<i>connect_string</i> AS SYSDBA"
   CONNECT / AS SYSDBA

Starting SQL*Plus:

   SQLPLUS  [<i>option</i>] "&lt;username&gt;" [&lt;start&gt;]
   SQLPLUS  [<i>option</i>] "<i>username</i>/<i>password</i>" [&lt;start&gt;]
   SQLPLUS  [<i>option</i>] "<i>username</i>/<i>password</i>@<i>connect_string</i>" [&lt;start&gt;]
   SQLPLUS  [<i>option</i>] "<i>username</i>/<i>password</i>@<i>connect_string</i> AS SYSDBA" [&lt;start&gt;]
   SQLPLUS                     -- Interactive logon
   SQLPLUS /NOLOG [&lt;start&gt;]    -- Don't login to a database
   SQLPLUS -H                  -- Display SQL*Plus Help
   SQLPLUS -V                  -- Display SQL*Plus version
<i>
  Options</i>
     "-L"      Attempt log on just once
     "-M &lt;o&gt;"  Use HTML markup options &lt;o&gt;
     "-R &lt;n&gt;"  Use restricted mode &lt;n&gt;
     "-S"      Use silent mode
     /         Login without using TNS (i.e on the server) ORACLE_SID
     /NOLOG    Don't login to a database

  &lt;start&gt;  ::=
      @&lt;filename&gt;[.&lt;ext&gt;] [&lt;parameter&gt; …]
      @&lt;URI&gt;
</pre>
<p>  CONNECT can be abbreviated as CONN<br>
  To connect as System Operator rather than DBA, replace SYSDBA with SYSOPER in the syntax above.</p>
<p><b>Examples</b></p>
<p class="code">SQL&gt; sqlplus "system/manager@ss64.com"<br>
<br>
SQL&gt; sqlplus <br>
SQL&gt; connect "system/manager@ss64.com"<br>

<br>
SQL&gt; sqlplus "sys/manager@ss64.com AS SYSDBA"<br>
<br>
C:\&gt; Set oracle_sid=ss64<br>
C:\&gt; Set LOCAL=%oracle_sid%<br>
SQL&gt; sqlplus <br>
SQL&gt; connect "system/manager"</p>
<p>Passing a username/password on the command line will (on many operating systems) make the password visible in the list of active processes. To minimise the chance of any third party seeing this, use a <i>here string</i> as follows:</p>
<p>Windows:</p>
<p class="code">@echo off<br>
Set oracle_sid=ss64<br>
Set LOCAL=%oracle_sid%<br>
(<br>
Echo connect system/manager;<br>
Echo @sql_update.sql;<br>
Echo Exit;<br>
) | <b>Sqlplus</b> /nolog</p>
<p>Bash:</p>
<p class="code">#! /bin/bash<br>
ORACLE_SID=ss64<br>
<b>Sqlplus</b> -s /nolog &lt;&lt;eof <br>
Connect system/manager;<br>
@sql_update.sql;<br>
Exit;<br>
eof </p>
<p><i><span class="quote">“Everything is connected to everything else” - Barry Commoner (Three laws of Ecology)</span></i><b><br>
<br>
Related:<br>
</b> <br>
<a href="commit.html">COMMIT</a><br>
<a href="syntax-sqlplus.html">DISCONNECT</a><br>
<a href="rollback.html">ROLLBACK</a><br>
<a href="http://ss64.com/ora/syntax-sqlplus.html">Show user</a> - display the username currently connected
<br>
<a href="system_a.html">ALTER SYSTEM</a> ENABLE RESTRICTED SESSION <br>
<a href="transaction_s.html">SET TRANSACTION</a> <br>
<a href="syntax-sqlplus-edit.html">Editing SQL scripts in SQL*Plus</a><br><br>
<b>Related Views:</b></p>
<p class="code"><a href="../orad/DBA_PENDING_TRANSACTIONS.html">DBA_PENDING_TRANSACTIONS</a><br>                                           
<a href="../orad/USER_RESOURCE_LIMITS.html">USER_RESOURCE_LIMITS</a><br>
<a href="../orav/V$SESSION.html">V$SESSION</a><br> 
<a href="../orav/V$SESSION_CONNECT_INFO.html">V$SESSION_CONNECT_INFO</a><br> 
<a href="../orav/V$SESSION_LONGOPS.html">V$SESSION_LONGOPS</a>
<!-- #BeginLibraryItem "/Library/foot_ora.lbi" --></p><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>


