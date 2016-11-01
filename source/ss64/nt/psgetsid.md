---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PsGetSid (<abbr title="Download the PsTools suite"><a href="http://technet.microsoft.com/en-us/sysinternals">PsTools</a></abbr>)</h1>
<p>Display the SID of a computer or a user.</p>
<pre>Syntax
      psgetsid [\\<i>computer</i>[,<i>computer</i>[,...] | @<i>get_file</i>] [-u <i>user</i> [-p <i>passwd</i>]]] [<i>account</i>|<i>SID</i>]

Options:

   <i>computer</i>   The remote computer on which to list files. Default = local system 

   @<i>get_file</i>  Get the SID of every computer listed in the text file specified.
              
   -p <i>passwd</i>  Specify a password for <i>user</i> (optional). Passed as clear text.
              If omitted, you will be prompted to enter a hidden password.

   -u <i>user</i>    Specify a username for login to remote computer(optional).

   <i>account</i>    The user account to resolve to a user SID

   <i>SID</i>        A User account <b>S</b>ystem <b>Id</b>entifier 

   -accepteula Suppress the display of the license dialog.</pre>
<p> Specify a user name if the account you are running from doesn't have administrative privileges on the computer you want to query.</p>
<p>When launched for the first time, PsGetSid will create the regkey <br>
<span class="code">HKCU\Software\Sysinternals\PsGetSid\EulaAccepted=0x01</span><br>
<br>
<b>Examples:</b><br><br>
Get the SID of \\workstation64:</p>
<p class="code"> psgetsid \\workstation64 </p>
<p>Get the domain SID for the domain: Niamod</p>
<p class="code"> psgetsid Niamod</p>
<p>Get the SID for the currently logged-in user </p>
<p class="code">psgetsid %username%<span class="quote"></span></p>
<p class="quote">“From the first time I saw Sid Caesar be funny I knew that's what I had to do”  ~ Billy Crystal</p>
<p><b>Related:</b></p>
<p><a href="http://forum.sysinternals.com/faq-common-pstools-issues_topic15920.html">FAQ: Common PSTools Issues</a><br>
<a href="systeminfo.html">SYSTEMINFO</a> - List system configuration<br>
<a href="https://support.microsoft.com/kb/243330">Q243330</a> - Well-known security identifiers (sids) in Windows operating systems</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="psgetsid.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

