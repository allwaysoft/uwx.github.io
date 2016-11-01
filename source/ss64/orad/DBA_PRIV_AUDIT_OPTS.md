---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_PRIV_AUDIT_OPTS </h1><p> Describes current system privileges being audited across the system and by user </p> 
 
<pre>Columns
   ___________________________
 
   USER_NAME
      "User name if by user auditing. "ANY
   PROXY_NAME
      Name of the proxy user if auditing is being done for operations being done on behalf of a client. Null if auditing is being done for operations done by theclient directly
   PRIVILEGE
      Name of the system privilege being audited
   SUCCESS
      Mode for WHENEVER SUCCESSFUL system auditing
   FAILURE
      Mode for WHENEVER NOT SUCCESSFUL system auditing

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_PRIV_AUDIT_OPTS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

