---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>DELPROF (XP/<a href="../links/windows.html#kits">2003 Server Resource Kit</a>  - <a href="http://www.microsoft.com/en-gb/download/details.aspx?id=5405">download</a>)</h1>
<p>Delete windows user profiles. </p>
<p>Does <u>not</u> work with Windows 7 or later. <br>
In the Windows 7 GUI right-click My Computer | Properties | Advanced | User Profiles | <i>account </i>| Delete</p>
<pre>Syntax
      DELPROF [<i>options days</i>]

Key
   /Q      Quiet, no confirmation.

   /I      Ignore errors and continue deleting.

   /P      Prompts for confirmation before deleting each profile.

   /C:\\<i>computer_name</i>
           Delete profiles on a remote computer.

   /D:<i>Number_of_days</i>
           Only delete profiles that have been inactive for
           'X' Number of days (or greater)

   /R      Delete roaming profile cache only</pre>
<p><b>Example:</b><br><br>
<span class="code">delprof /D:14</span><br>
<br>
<i class="quote">“The best way to destroy the capitalist system is to debauch the currency” ~  John Keynes </i> </p>
<p><b>Related:</b><br>
<br>
<a href="del.html">DEL</a> - Delete one or more files<br>
<a href="del.html">DELTREE</a> - Delete a folder and all subfolders <br>
<a href="rd.html">RD</a> - Delete folders or entire folder trees<br>
<a href="http://helgeklein.com/free-tools/delprof2-user-profile-deletion-tool/">Delprof2</a> - Windows XP / Windows 7 / 2008 R2 (unofficial Helge Klein)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="delprof.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

