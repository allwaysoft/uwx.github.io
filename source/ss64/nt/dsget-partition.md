---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsget.html">DSGET</a> Partition (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Display Partition(s) from active directory.</p>
<pre>Syntax
      DSGET Partition <i>ObjectDN</i> [-dn] [-qdefault] [-qTmbstnWt] [-topobjowner <i>Display</i>]
               [{-s <i>Server</i> | -d <i>Domain</i>}] [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
  	               [-c] [-q] [-l] [{-uc | -uco | -uci}]

Key

  <i>ObjectDN</i>  Distinguished Name of the partition to view.

  -qdefault Display the default quota that applies to any security principal.

 -qTmbstnWt Display the Tombstone Weight Percent (0-100) The effect of the Quota limit for tombstone (deleted) objects.
            A weight of 100 % will treat tombstone objects the same as normal objects.
            A weight of 50 % will allow twice as many tombstone objects.
            e.g. a limit of 500 with -qTmbstnWt 50 will allow 400 objects + 200 tombstone objects

 -topobjowner Display a sorted list of security principals(users, computers etc)
            that own the largest number of directory objects across all directory
            partitions on the server and the number of objects they own.
            The number of accounts to list is specified by <i>Display</i>.
            0 = Display all object owners
            Default = 10 principals.

   -s       Server to connect to (Default=the domain controller in the logon domain.)
   -d       Domain to connect to

   -u       Username with which the user logs on to a remote server. 
   -p       Password     (UserName or Domain\UserName or Username@domain.com)

   -c       Report errors, but continue with the next object after any error (when you specify multiple objects)
            by default dsget will exit when the first error occurs.
   -q       Quiet, suppress all output
   -l       Display entries in a list format. By default, dsget outputs a table format.

   -uc      Unicode format
   -uco     Unicode format for output only
   -uci     Unicode format for input only</pre>
<p>Dsget can accept <span class="code">stdin</span> from the keyboard, from a redirected file, or as <a href="syntax-redirection.html">piped</a> output from another command e.g. <a href="dsquery.html">DSQuery</a></p>
<p> <span class="code">-topobjowner</span> will override any other parameters specified, dsget will display only the results of -topobjowner.</p>
<p><b>Examples</b></p>
<p>Display all directory partitions in the current domain that begin with "SS64", and  display the top three object owners from each partition:</p>
<p class="code">C:\&gt; dsquery server -part SS64* | dsget server -part | dsget partition -topjobowner 3</p>
<p class="quote"><i>“Love's dominion, like a king's, admits of no partition” ~ Ovid</i></p>
<p> <b>Related:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>

<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsget-partition.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

