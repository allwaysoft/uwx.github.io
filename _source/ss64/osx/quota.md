---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>quota</h1> 
<p>Display disk usage and limits.</p>
<pre>Syntax
     quota [-g] [-u] [-v | -q]

     quota [-u] [-v | -q] <i>user</i>

     quota [-g] [-v | -q] <i>group</i>

Options
     -g       Print group quotas for the group of which the user is a member.

     -u       Print user quotas (the default)

     -v       quota will display quotas on filesystems where no storage is allocated.

     -q       Print a more terse message, containing only information on
              filesystems where usage is over quota.</pre>
<p>Only the super-user can  use the -u flag and the optional user argument to view the limits of other users. </p>
<p>Non-super-users can use the -g flag and optional <i>group</i> argument to view only the limits of groups of which they are members. </p>
<p>The -q flag takes precedence over the -v flag. Quota reports the quotas of all the filesystems that have a mount option file located at its root. If quota exits with a non-zero status, then one or more filesystems are over quota.</p>
<p>FILES <br>
Each of the following quota files is located at the root of the mounted filesystem. The mount option files are empty files whose existence indicates that quotas are to be enabled for that filesystem. </p>
<pre>.quota.user        Data file containing user quotas 
.quota.group       Data file containing group quotas 
.quota.ops.user    Mount option file used to enable user quotas 
.quota.ops.group   Mount option file used to enable group quotas </pre>
<p class="quote"><i>“Conventional wisdom says to know your limits. To know them you must find them first. Finding your limits generally involves getting in over your head and hoping you live long enough to benefit from the experience. That's the fun part” ~ Drew Marold.</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/quota.1.html">quota man page</a> - Apple.com<br>
quotactl - manipulate filesystem quotas<br>
quotacheck - filesystem quota consistency checker<br>
repquota - summarize quotas (report)<br>
edquota - edit user quotas<br>
quotaon, quotaoff - turn filesystem quotas on and off</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="quota.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
