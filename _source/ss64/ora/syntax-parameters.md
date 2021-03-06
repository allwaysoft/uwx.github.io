---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Server Parameters</h1>
<p>Oracle Server parameters allow you to modify many aspects of the Oracle server (<a href="syntax-initora.html">full list</a>). </p>
<p>To see the current value of any parameter:</p>
<pre> select name,value<br> from   <a href="../orav/V$PARAMETER.html">v$parameter</a><br> where  name='Some_Parameter';</pre>
<h2>Changing a Parameter value </h2>
<p>Use the <a href="system_a.html">ALTER SYSTEM</a> command to set  parameters: </p>
<p class="code"> ALTER SYSTEM set <i>parameter</i> = <i>value</i> SCOPE = MEMORY;<br>
  ALTER SYSTEM set <i>parameter</i> = <i>value</i> SCOPE = SPfile;<br>
ALTER SYSTEM set <i>parameter</i> = <i>value</i> SCOPE = BOTH;</p>
<p> -- MEMORY - This affects the database now; but will not remain after a
  restart. <br>
  -- SPfile - This does not change the instance immediately, but  will modify
  the SPfile takes effect after a restart. <br>
  -- BOTH - change both the current instance and the spfile. </p>
<p>Some parameters can be modified immediately with ALTER SYSTEM,  some can only be modified for a single session with ALTER SESSION. Static parameters must be modified with scope=SPfile</p>
<h2>Restoring the DEFAULT Parameter values</h2>
<p>For <i>string</i> parameters, setting to an empty string will restore the
  default.<br>
<span class="code">ALTER SYSTEM SET <i>parameter</i> = '' scope=SPfile;</span></p>
<p>For any parameter the RESET option will restore the default.<br>
  <span class="code">ALTER SYSTEM RESET <i>parameter</i> scope=SPfile sid='*' ; </span></p>
<p>note<br>
  When resetting a parameter,
you must specify sid=mySid or sid='*' even for non-RAC instances. </p>
<h2>Managing parameter files</h2>
<p>In Oracle9i and above, the SPfile is stored in a binary format
        on the server. You no longer need to have a local copy  to start the database
    remotely. This also means that changes made via  ALTER SYSTEM will persist across server restarts - without any need to remember to edit
    a separate init.ora file. <br>
</p>
<p>A <b>Pfile</b> (old style text init.ORA) can be created with the
   command: <br>
  <br>
  <span class="code"><a href="pfile.html">CREATE Pfile</a> = '<i>pfilename</i>' FROM SPfile = '<i>SPfilename</i>';</span></p>
<p>An <b>SPfile</b> (binary) can be created with the command: </p>
<p class="code"> <a href="spfile.html">CREATE SPfile</a> = '<i>SPfilename</i>' FROM Pfile ='<i>pfilename</i>';</p>
<p>  To create an SPfile, the database need not be started, the old Pfile format is largely for backwards compatibility with older releases. </p>
<p>If the system has both a Pfile and an SPfile, then Oracle will  use the SPfile.</p>
<p>If the system has both a generic init.ora and an SID-specific parameter file,  Oracle will use the SID-specific file.</p>
<p>SID specific:<br>
  spfile<i>SID</i>.ora or init<i>SID</i>.ora </p>
<p>Generic:<br>
  spfile.ora or init.ora</p>
<p>The location for all parameter files is:<br>
  <span class="code">ORACLE_HOME\database (Windows)<br>
  ORACLE_HOME/dbs (Unix/Linux)</span></p>
<p class="code">e.g.<br>
C:\oracle\ora11\database\spfileMYDB.ora<br>
C:\oracle\ora11\database\initMYDB.ora</p>
<p>To use an SPfile in a non standard location you can cheat  by creating an init.ora containing just one line:<br>
<span class="code">SPfile='C:\adminfiles\SPfilelive.ora'</span><br>
For this to work - make sure you don't also have an SPfile in the default location.</p>
<p>To startup a database with an SPfile:<br>
<span class="code">SQL&gt; <a href="startup.html">startup</a> </span></p>
<p>To startup a database with a Pfile, use the <span class="code">Pfile=</span> option :<br>
<span class="code">SQL&gt; <a href="startup.html">startup</a> pfile=<i>filename</i></span></p>
<p><b>Examples</b></p>
<blockquote>
  <p class="code">ALTER SYSTEM SET log_archive_format = "live%S.arc" SCOPE = SPfile;</p>
  <p class="code">ALTER SYSTEM SET shared_pool_size=64M
    scope=both</p>
  <p class="code">SELECT name, value from v$parameter where name = 'SPfile'; </p>
  <p class="code">  show parameter SPfile; </p>
<p class="code">ALTER SYSTEM SET OPTIMIZER_MODE = "all_rows" SCOPE = SPfile;</p>
</blockquote>
<p>'Internal' parameters (starting with _ ) should not be modified unless advised by Oracle Support. </p>
<p>The default value for many of these parameters does vary across Operating System platforms.</p>
<p class="quote"><i>"Happiness, wealth, and success are by-products 
of goal setting; they cannot be the goal themselves" ~ Denis Waitley,
The Joy of Working </i></p>
<p><b>Related </b><br>
  <a href="../orav/V$PARAMETER.html">V$PARAMETER</a><br>
  <a href="../orav/V$SPPARAMETER.html">V$SpPARAMETER</a><br>
  <a href="system_a.html">ALTER SYSTEM</a><br>

<a href="syntax-architecture.ppt">Oracle Memory Architecture</a> (Powerpoint)</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

