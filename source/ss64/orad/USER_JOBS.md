---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>USER_JOBS </h1><p> All jobs owned by this user </p> 
 
<pre>Columns
   ___________________________
 
   JOB
      Identifier of job. Neither import/export nor repeated executions change it.
   LOG_USER
      USER who was logged in when the job was submitted
   PRIV_USER
      USER whose default privileges apply to this job
   SCHEMA_USER
      select * from bar means select * from schema_user.bar
   LAST_DATE
      Date that this job last successfully executed
   LAST_SEC
      Same as LAST_DATE. This is when the last successful execution started.
   THIS_DATE
      Date that this job started executing (usually null if not executing)
   THIS_SEC
      Same as THIS_DATE. This is when the last successful execution started.
   NEXT_DATE
      Date that this job will next be executed
   NEXT_SEC
      Same as NEXT_DATE. The job becomes due for execution at this time.
   TOTAL_TIME
      Total wallclock time spent by the system on this job,in seconds
   BROKEN
      If Y,no attempt is being made to run this job. See dbms_jobq.broken(job).
   INTERVAL
      A date function
   FAILURES
      How many times has this job started and failed since its last success?
   WHAT
      Body of the anonymous PL/SQL block that this job executes
   NLS_ENV
      alter session parameters describing the NLS environment of the job
   MISC_ENV
      a versioned raw maintained by the kernel
   INSTANCE
      Instance number restricted to run the job

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="USER_JOBS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

