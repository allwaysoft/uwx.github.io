---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-BitsTransfer</h1> 
<p>Retrieve the associated BitsJob object for an existing Background Intelligent Transfer Service (BITS) transfer job.</p>
<pre>Syntax
      Get-BitsTransfer [[-Name] <i>string</i>[]] [-AllUsers] [<a href="common.html"><i>CommonParameters</i></a>]

      Get-BitsTransfer [-JobId] <i>Guid</i>[] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -AllUsers
       Return BITS transfer jobs that are owned by all users.
       If this parameter is not specified, only jobs that are owned by the current
       user are returned. This parameter requires administrative credentials.

   -JobId <i>Guid</i>[]
       Filter the returned BITS jobs by job ID.
       Only the BITS jobs that include a job ID in this array are returned.
       If BitsJob objects are piped to this cmdlet, their job IDs are used as the values of this parameter.

   -Name <i>string</i>[]
       Filter the returned BITS jobs based on job name.
       Only BITS jobs with job names that match a name in this array are returned.
       Accepts standard wildcard characters asterisk (*) and question mark (?).
       Or use a range operator such as "[a-r]".

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Get-BitsTransfer  retrieves a set of BITS transfer jobs. By default, the cmdlet returns only the jobs that are owned by the current user. The returned jobs can be filtered by name or ID. The jobs are represented by BitsJob objects.</p>
<p><b>Examples</b></p>
<p>Complete all the BITS transfer jobs that are owned by the current user:</p>
<p><span class="code">PS C:\&gt; Get-BitsTransfer | Complete-BitsTransfer</span></p>
<p>Complete all the BITS transfer jobs on the computer:</p>
<p><span class="code">PS C:\&gt; $myJob = Get-BitsTransfer -AllUsers<br>
PS C:\&gt; Complete-BitsTransfer -BitsJob $myJob</span></p>
<p>Complete the BITS transfer job called 'SS64':</p>
<p><span class="code">PS C:\&gt; Get-BitsTransfer -Name SS64 | Complete-BitsTransfer</span></p>
<p class="quote"><i>“No law can give power to private persons; every law transfers power from private persons to government” ~ Isabel Paterson</i></p>
<p><b>Related:</b></p>
<p><a href="set-bitstransfer.html">Set-BitsTransfer</a> - Configure BITS transfer jobs<br>
<a href="bits.html">BITS PowerShell cmdlets</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-bitstransfer.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

