---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>Clause: Execute As </h1>
<p>Define the execution context of a  user-defined Procedure, Queue, Trigger or Function (except inline table-valued functions.)</p>
<pre>Functions, Stored Procedures, and DML Triggers
   EXEC[UTE] AS { CALLER | SELF | OWNER | '<i>user_name</i>' } 

DDL Triggers with Database Scope
   EXEC[UTE] AS { CALLER | SELF | '<i>user_name</i>' } 

DDL Triggers with Server Scope
   EXEC[UTE] AS { CALLER | SELF | 'I' } 

Queues
   EXEC[UTE] AS { SELF | OWNER | '<i>user_name</i>' } yntax
      </pre>
<p>CALLER - Execute in the context of the caller of the module. <br>SELF - Execute in the context of the person creating or altering the module. <br>
  OWNER - Execute in the context of the current owner of the module. 
</p>
<p>Specify a login or user that has the least privileges required to perform the operations defined in the module. </p>
<p class="quote"><i>"People have this obsession. They want you to be like you were
  in 1969. They want you to, because otherwise their youth goes with
  you. It's very selfish, but it's understandable"
~ Mick Jagger </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="revert.html">REVERT</a><br>
  <a href="executeas.html">EXECUTE AS</a><br>
  <a href="procedure_c.html">CREATE PROCEDURE</a>  <br>
  </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

