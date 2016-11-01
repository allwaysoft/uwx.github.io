---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> DROP EVENT NOTIFICATION</h1>
<p>Remove an event notification trigger from the current database.</p>
<pre>Syntax
      DROP EVENT NOTIFICATION <i>notification_name</i> [,...n ]<br>      ON { SERVER | DATABASE | QUEUE <i>queue</i> }[;]

Key:
    <i>notification_name</i>  Name of the event notification to remove.
    SERVER             Apply to the current server
    DATABASE           Apply to the current database
    <i>queue</i>              The name of the queue</pre> 
<p>Options must must be specified as they originally were when the event notification was created.
  
</p>
<p><b>Example</b></p>
<pre>DROP EVENT NOTIFICATION testnotify</pre>
<p class="quote"><i>"Even a minor event in the life of a child is an event of that
  child's world and thus a world event" ~  Gaston Bachelard</i></p>
<p><b>Related:</b></p>
<p>  <a href="eventnotif_c.html">CREATE EVENT NOTIFICATION</a><br>
  ALTER ANY DATABASE EVENT NOTIFICATION (Database) <br>
ALTER ANY EVENT NOTIFICATION (Server)</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="eventnotif_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

