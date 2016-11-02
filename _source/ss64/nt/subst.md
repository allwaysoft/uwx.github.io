---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>SUBST</h1> 
<p>Substitute a drive letter for a network or local path.</p>
<pre>Syntax
      SUBST <i>drive_letter</i>: <i>path</i>
   
      SUBST 
   
      SUBST <i>drive_letter</i>: /D

Key
   SUBST with no parameters will display current SUBST drives

   /D : Delete the drive_letter substitution.</pre>
<p>The SUBST command can be used to map a drive letter to a LOCAL folder on the same machine. In early versions of Windows SUBST also provided some drive mapping options that are now covered by <a href="net_share.html">NET USE</a>.<br>
<br>
 If the network resource is unavailable (ie the server is down) SUBST will continually 
retry - unlike NET USE which will try to connect once and fail - a subst'd drive that is not 
available will badly impact performance of the computer.</p>
<p>  When SUBST is used against a local shared folder, it will create 
  a RECYCLER for that drive. The RECYCLER is not removed when the drive substitution 
is removed, but can be deleted manually.</p>
<p>Bugs: <a href="https://support.microsoft.com/kb/218740">creating</a>, <a href="https://support.microsoft.com/kb/246887">accessing</a> and <a href="https://support.microsoft.com/kb/258625">deleting</a> drive mappings with SUBST. </p>
<p>Undocumented behaviour: if a drive is substed using characters other than <a href="http://ss64.org/viewtopic.php?id=1599">A-Z</a> ($,#, :, !, 0-9) it will not appear in Windows Explorer or in the drives reported by SUBST.<br>
  <br>
  <i class="quote">"A man should never be ashamed to own he has been in the wrong, which 
  is saying in other words, that he is wiser today than he was yesterday" 
  ~ Alexander 
  Pope (thoughts on various subjects) </i> <br>
  <br>
  <b>Related:</b><br>
  <br>
<a href="net_share.html">NET USE</a> - Map a drive letter to a network drive</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
