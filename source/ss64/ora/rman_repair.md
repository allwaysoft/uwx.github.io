---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> REPAIR FAILURE</h1>
<p>Repair database failures identified by the Data Recovery Advisor.</p>
<pre>Syntax
      REPAIR FAILURE [USING ADVISE OPTION <i>integer</i>]
         [NOPROMPT] [PREVIEW]

Key
   USING ADVISE OPTION  Specify a repair option by its option number
                        (not its failure number).
                        obtain the numbers via <a href="rman_advise.html">ADVISE FAILURE</a>

   NOPROMPT             Suppress the confirmation prompt.

   PREVIEW              Do not make any repairs and generate a script
                        with all repair actions and comments.
</pre>
<p>The recommended workflow is to run the following commands in an <a href="rman.html">RMAN</a> session: <a href="rman_list.html"><br>
LIST FAILURE</a> to display failures, then <a href="rman_advise.html">ADVISE FAILURE</a> to display repair options, and REPAIR FAILURE to fix the failures.</p>
<p>By default the script is displayed to standard output. You can use the SPOOL command to write the script to an editable file.</p>
<p>The target database instance must be started. The target database must be a single-instance database and must not be a physical standby database, although it can be a logical standby database.</p>
<p>In the 11g release, Data Recovery Advisor only supports single-instance databases. Oracle Real Application Clusters (Oracle RAC) databases are not supported.<br>
You should review the official Oracle documentation for your Platform/Version before running any repair operation on a live server.</p>
<p><b>Example</b></p>
<p class="code">RMAN&gt; LIST FAILURE;<br>
RMAN&gt; ADVISE FAILURE;<br>
RMAN&gt; REPAIR FAILURE PREVIEW;<br>
RMAN&gt; REPAIR FAILURE;</p>
<p class="quote"><i>“What breaks in a moment may take years to mend” ~ Swedish Proverb</i></p>
<p><b>Related Commands:<br>
<br>
</b> <a href="rman.html">RMAN</a><br>
<a href="rman_advise.html">ADVISE FAILURE</a> - Display repair options (11g Data Recovery Advisor)</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rman_repair.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

