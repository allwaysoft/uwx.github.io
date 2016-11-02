---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>VBScript isMember function </h1> 
<p>Some <a href="function.html">functions</a> to determine group membership.</p>
<p>You can find an excellent, tried and tested VBScript program to enumerate members of a group<br>
over at hilltop labs - <a href="http://www.rlmueller.net/Programs/EnumGroup2.txt">http://www.rlmueller.net/Programs/EnumGroup2.txt</a></p>
<p>Example</p>
<p>List all members of group64<br>
<br>
<span class="code">cscript //nologo EnumGroup2.vbs "group64"</span></p>
<h2>IsMember</h2>
<p>There are several approaches for checking group membership in VBScript - consider if you need to check Local or Domain groups, and to include or not include nested permissions.</p>
<p> There are also <a href="http://www.rlmueller.net/MemberOf.htm">some gotchas</a> to consider - when enumerating the members of a group it is possible that nothing will be returned, one member is returned or multiple members returned. Test your code with all these possibilities.</p>
<p>Richard mueller has <a href="http://www.rlmueller.net/freecode1.htm">a number of IsMember scripts</a></p>
<blockquote>
<p>Test group membership <a href="http://www.rlmueller.net/Programs/IsMember1.txt">for a single user</a>.</p>
<p>Test group membership (including nested groups)<a href="http://www.rlmueller.net/Programs/IsMember2.txt"> for a single user or computer</a>.<br>
</p>
</blockquote>
<p><b>Related</b></p>
<p><a href="../nt/ifmember.html">IFMEMBER</a> - Is the current user a member of a group.<br>
Powershell equivalent: <a href="../ps/get-adgroupmember.html">Get-adGroupMember -Recursive</a> - Get the members of an AD group.</p>
<p class="quote"><i>“If I had to live my life again, I'd make the same mistakes, only sooner” ~ Tallulah Bankhead.</i></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-ismember.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

