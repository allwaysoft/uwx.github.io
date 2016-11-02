---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>Trace Flags</h1>  
<table>
  <tbody><tr>
    <th>#</th>
    <th>Flag</th>
    <th>&nbsp;</th>
  </tr>
  <tr>
    <td>260</td>
    <td>Print versioning information about extended stored procedure DLLs.</td>
    <td>global or session</td>
  </tr>
  <tr>
    <td>1204</td>
    <td>Returns the resources and types of locks participating in a deadlock and also the current command affected.</td>
    <td>global</td>
  </tr>
  <tr>
    <td>1211</td>
    <td>Disable all lock escalation.<br>
    This trace flag may reduce performance. <br>
    Takes precedence over flag 1224</td>
    <td>global or session</td>
  </tr>
  <tr>
    <td>1222</td>
    <td>Return the resources,command and lock types   that are participating in a deadlock (XML).</td>
    <td>global</td>
  </tr>
  <tr>
    <td>1224</td>
    <td>Disable lock escalation based on the number of locks.<br>
    Helps avoid "out-of-locks" errors when many locks are being used.</td>
    <td>global</td>
  </tr>
  <tr>
    <td>4616</td>
    <td>Makes server-level metadata visible to application roles.<br>
      i.e
      Revert to pre- SQL Server 2005 behavior.</td>
    <td>global</td>
  </tr>
  <tr>
    <td>2528</td>
    <td>Disable parallel checking of objects by DBCC CHECK commands.<br>
      Parallel DBCC should typically be left enabled. 
    </td>
    <td>global or session</td>
  </tr>
  <tr>
    <td>3205</td>
    <td>Disable hardware compression for tape drivers.</td>
    <td>global or session</td>
  </tr>
  <tr>
    <td>3625</td>
    <td>Limit the amount of information returned in error messages.</td>
    <td>global</td>
  </tr>
  <tr>
    <td>7806</td>
    <td>Enable a dedicated administrator connection (DAC) on SQL Server Express. </td>
    <td>global</td>
  </tr>
</tbody></table>
<p class="quote"><i>"I pledge allegiance to my Flag and the Republic for which it stands, one nation, indivisible, with liberty and justice for all" ~ Francis Bellamy (1892)</i></p>
<p></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

