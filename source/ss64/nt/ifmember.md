---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>IFMEMBER (<a href="../links/windows.html#kits">Windows 2003 Resource Kit</a>)</h1>
<p>Find out if the current user is a member of one or more groups.</p>
<pre>Syntax
      IFMEMBER [<i>options</i>] <i>Group</i> [ <i>Group2 Group3</i>...]

Options:
        /verbose or /v   : print all matches.
        /list    or /l   : print all groups user is a member of</pre>
<p>The %ERRORLEVEL% return code shows how many of the listed groups the currently 
logged-in user is a member of.</p>
<p>To also test for nested permissions use <a href="../vb/syntax-ismember.html">VBScript</a> or PowerShell <a href="../ps/get-adgroupmember.html">Get-adGroupMember</a>.<br>
<br>
<b>Examples</b><br>
<br>
<span class="code">IFMEMBER /v /l "MyDomain\Administrators"<br>
IF ERRORLEVEL 1 echo This user is an Administrator</span><br>
<br>Notice that the syntax here is the opposite to most other  commands in that an %errorlevel% of 1 = Success<br>
<br>A good way to utilise IFMEMBER is through <a href="syntax-conditional.html">conditional</a> execution...<br>
<br>
<span class="code">IFMEMBER Administrators || ECHO Error is 1 so [%Username%] is an Admin<br>
<br>
IFMEMBER Administrators &amp;&amp; ECHO Error is 0 so [%Username%] is NOT an 
Admin </span></p>
<p><i class="quote">“The euro will raise the citizens' awareness of their belonging to one Europe more than any other integration step to date” ~ Gerhard Schroeder</i><br>
<br>
<b><span class="body">Related:</span></b></p>
<p><span class="body"><a href="net.html">NET</a> GROUP - Add or remove a user from a group<br>
<a href="http://www.joeware.net/freetools/">Joeware.net</a> - MemberOf.exe - Like 
IFMEMBER but able to handle nested AD groups</span></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ifmember.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

