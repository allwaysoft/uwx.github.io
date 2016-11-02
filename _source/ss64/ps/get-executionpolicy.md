---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-ExecutionPolicy</h1> 
<p>Get the  current execution policy for the shell.</p>
<pre>Syntax
      Get-ExecutionPolicy [[-Scope] <i>ExecutionPolicyScope</i>]
         [-List] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -List<br>       Get all execution policy values for the session listed in precedence order.
       By default gets only the effective execution policy.

   -Scope <i>ExecutionPolicyScope</i><br>       Get the execution policy in the specified scope.
       By default gets only the effective execution policy for the current session.

       Valid values:<br>        <br>         MachinePolicy  Set by a Group Policy for all users of the computer.<br>         UserPolicy     Set by a Group Policy for the current user of the computer.<br>         Process        Set for the current PowerShell process.<br>         CurrentUser    Set for the current user.<br>         LocalMachine   Set for all users of the computer.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  The execution policy is determined by execution policies (set  using <a href="set-executionpolicy.html">Set-ExecutionPolicy</a>) and the Group Policy settings for the PowerShell execution policy. The default value is "Restricted."</p>
<p><b>Example</b></p>
<p>Get    the current execution policy for the shell:</p>
<p><span class="code">PS C:\&gt; get-executionpolicy</span></p>
<p>Set a new user preference for the shell execution policy and then display the effective execution policy.<br> 
In this example, because there is no Group Policy setting, the
user preference is the effective policy for the shell:</p>
<p><span class="code">PS C:\&gt; set-executionpolicy RemoteSigned<br> 
PS C:\&gt; get-executionPolicy</span></p>
<p class="quote"><i>#Run baby run baby run baby run,
Baby run# ~ Sheryl Crow</i></p>
<p><b>Related:</b><br>
  <br>
<a href="set-executionpolicy.html">Set-ExecutionPolicy</a> - Change the execution policy (user preference)<br>
<a href="set-authenticodesignature.html">Set-AuthenticodeSignature</a> - Place a signature in a PowerShell script or other file<br>
about_signing</p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

