---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Loops and subroutines</h1> 
<p> There are 2 ways to conditionally process commands in a batch file<br>
  <br>
  <a href="if.html">IF</a> xxx ELSE yyy - will conditionally perform a command 
  (or a set of commands)<br>
  <br>
  <a href="for.html">FOR</a> aaa <b>DO</b> xxx - will conditionally perform 
  a command several times (for a set of data, or a set of files)<br>
  <br>
  Either of these can be combined with the <a href="call.html">CALL</a> 
command to run a subroutine like this:</p>
<pre>   @echo off
   IF EXIST C:\pagefile.sys <b>CALL</b> :s_page_on_c
   IF EXIST D:\pagefile.sys <b>CALL</b> :s_page_on_d
   GOTO :eof
  
   :s_page_on_c
   echo pagefile found on C: drive
   GOTO :eof
 
   :s_page_on_d
   echo pagefile found on D: drive</pre>
<p>Without the <b>: </b>a second batch file will be called  ... </p>
<pre>   @ECHO off
   IF EXIST C:\pagefile.sys <b>CALL</b> Second_Batch.cmd</pre>
<p> If the code does not need to return then use the <a href="goto.html">GOTO</a> 
statement like this:</p>
<pre>   @ECHO off
   IF EXIST C:\pagefile.sys <b>GOTO</b> s_page_on_c 
   ECHO pagefile not found
   GOTO :eof
   
   :s_page_on_c
   ECHO pagefile found</pre>
<p>To call a second batch file in a separate 
  shell use <a href="cmd.html">CMD</a> An important difference between 
CALL and CMD is the exit behaviour if an error occurs.</p>
<pre>   @ECHO off
   IF EXIST C:\pagefile.sys <b>CMD /C </b>Second_Batch.cmd
</pre>
<p class="quote"><i>"I knew of one little DO loop that ran for 48 hours, cost $14,000 and did 
nothing" ~ Richard Keeler</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-args.html">Syntax: Parameters</a> - Command Line Parameters %1 %~f1 <br>
<a href="syntax-functions.html">Syntax: Functions</a> - How to package blocks of code</p>
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-loops.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

