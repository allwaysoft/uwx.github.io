---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> ADVISE FAILURE</h1> 
<p>Display repair options for the specified failures. This command prints a summary of the failures identified by the Data Recovery Advisor and implicitly closes all open failures that are already fixed.</p>
<pre>Syntax
      ADVISE FAILURE [{ALL | CRITICAL | HIGH | LOW | <i>failure_no</i> [,<i>failure_no</i>]…}]
        [EXCLUDE FAILURE <i>failure_no</i> [,<i>failure_no</i>]… ]

Key
   ALL           List options that repair all open failures together.
   CRITICAL      List options that repair only critical failures.
   HIGH          List options that repair only failures with HIGH priority.
   LOW           List options that repair only failures with LOW priority.
   <i>failureNumber</i> List options that repair only the specified failures.
   EXCLUDE FAILURE <i>failureNumber </i>
                 Exclude the specified failures from the list.</pre>
<p>The recommended workflow is to run the following commands in an <a href="rman.html">RMAN</a> session: <a href="rman_list.html"><br>
LIST FAILURE</a> to display failures, then ADVISE FAILURE to display repair options, and <a href="rman_repair.html">REPAIR FAILURE</a> to fix the failures.</p>
<p>You can only use ADVISE FAILURE with no options when a LIST FAILURE command was previously executed in the current session.<br>
RMAN must be connected to a target database. See the CONNECT and RMAN commands to learn how to connect to a database as TARGET.</p>
<p>The target database instance must be started. The target database must be a single-instance database and must not be a physical standby database, although it can be a logical standby database.</p>
<p>In the 11g release, Data Recovery Advisor only supports single-instance databases. Oracle Real Application Clusters (Oracle RAC) databases are not supported.<br>
You should review the official Oracle documentation for your Platform/Version before running any repair operation on a live server.</p>
<p><b>Examples</b></p>
<p class="code">RMAN&gt; LIST FAILURE;<br>
RMAN&gt; ADVISE FAILURE;</p>
<p class="quote"><i>“Men never plan to be failures; they simply fail to plan to be successful” ~ William Arthur Ward</i></p>
<p><b>Related Commands:<br>
<br>
</b> <a href="rman.html">RMAN</a><br>
<a href="rman_repair.html">REPAIR FAILURE</a> - Repair database failures (11g Data Recovery Advisor)</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rman_advise.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

