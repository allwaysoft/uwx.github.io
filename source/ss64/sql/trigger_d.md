---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP TRIGGER</h1>
<p>Remove one or more triggers from the current database.</p>
<pre>Syntax
   DML Trigger: (INSERT, UPDATE, DELETE)
     DROP TRIGGER [<i>schema</i>.]<i>trigger</i> [,...n ] [ ; ]

   DDL Trigger: (CREATE, ALTER, DROP, GRANT, DENY, REVOKE, UPDATE)
     DROP TRIGGER <i>trigger</i> [,...n ] ON DATABASE [; ]
     DROP TRIGGER <i>trigger</i> [,...n ] ON ALL SERVER [; ]

Key<i>
   trigger</i>    Name of the trigger to remove
   DATABASE   Apply to the current database
   ALL SERVER Apply to the current server</pre>
<p>    When a table is dropped, all associated triggers are automatically dropped.</p>
<p>Examples</p>
<pre>DROP TRIGGER MyTrigger</pre>
<p class="quote"><i>"A business that makes nothing but money is a poor kind of business" - Henry Ford</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="trigger_c.html">CREATE TRIGGER</a><br>
  <a href="trigger_a.html">ALTER TRIGGER</a><br>
  <a href="trigger_dis.html">DISABLE TRIGGER</a>  <br>
  sys.triggers  <br>
Equivalent Oracle command:  <a href="../ora/trigger_d.html">DROP TRIGGER</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="trigger_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

