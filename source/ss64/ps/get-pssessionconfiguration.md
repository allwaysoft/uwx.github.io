---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-PSSessionConfiguration</h1> 
<p>Get the session configurations that have been registered on the local computer.<br> 
This is an advanced cmdlet for system administrators to manage custom session configurations for their users.</p>
<pre>Syntax
      Get-PSSessionConfiguration [[-Name] <i>string</i>[]] [<i>CommonParameters</i>]

Key
   -Name
       Get only the session configurations with the specified name or pattern.
       Enter one or more session configuration names.
       Wildcards are permitted.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> <b>Examples</b></p>
<p>Get the session configurations on the computer: </p>
<pre>PS C:&gt; get-pssessionconfiguration</pre>
<p>Get only the session configurations with names that begin with "Microsoft".:</p>
<pre>PS C:&gt; get-pssessionconfiguration -name Microsoft*</pre>
<p>Get the resource URI of a session configuration. :</p>
<pre>PS C:&gt; (get-PSSessionConfiguration -name CustomShell).resourceURI</pre>
<p>For more examples, see: get-help Get-PSSessionConfiguration -detailed</p>
<p class="quote"><i>"All of Western logic is based upon the law of
contradiction -- if two things contradict, then
at least one of them is false. But Islamic logic
is dualistic; two things can contradict each
other and both are true" ~ Bill Warner</i></p>
<p><b>Related:</b></p>
<p>   <a href="enable-pssessionconfiguration.html">Enable-PSSessionConfiguration</a> - Enable PS session configuration <br>
<a href="register-pssessionconfiguration.html">Register-PSSessionConfiguration</a> - Create and register a new PS session configuration</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-pssessionconfiguration.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

