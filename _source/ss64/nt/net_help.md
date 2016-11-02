---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NET Help </h1> 
<p>The <a href="net.html">NET Command</a> is used to display help 
  as follows: <br>
  <br>
  The syntax for displaying help differs from other  commands:<br>
  <br>
  Provide <i>brief</i> help with any NET command</p>
<blockquote>
  <p>NET option suboption <b>/?</b><br>
    <br>
    e.g. <br>
    NET CONFIG SERVER /? </p>
</blockquote>
<p>Provide <i>detailed</i> help with any NET command </p>
<blockquote>
  <p>NET option suboption <b>/HELP </b><br>
    or<br>
    NET HELP option suboption<br>
    <br>
    e.g. <br>
    NET CONFIG SERVER /HELP<br>
    NET HELP CONFIG SERVER</p>
</blockquote>
<p>To provide help with a Windows error message (Typically the 4 
  digit number from the Event Viewer system log)</p>
<blockquote>
  <p>NET HELPMSG message#<br>
    e.g.<br>
    NET HELPMSG 2184 </p>
</blockquote>
<p>Explanation of how to read NET HELP screens.</p>
<blockquote>
  <p>NET HELP SYNTAX </p>
</blockquote>
<p>To display NET Help one screen at a time:</p>
<blockquote>
  <p>NET HELP option | MORE </p>
</blockquote>
<p> <b>Related:<br>
  </b> <br>
  HELP<br>
  START - HELP (GUI based help)<br>
  Equivalent bash command (Linux): command -?</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="net_help.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

