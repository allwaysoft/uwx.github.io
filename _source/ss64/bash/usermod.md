---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>usermod</h1> 
<p>Modify user account information. </p>
<pre>Syntax
      usermod [<i>options</i>] [<i>user</i>]

Options
  -c <i>comment</i>    Comment field.

  -d <i>dir</i>        Home directory.

  -e <i>date</i>       Account expiration date.
                date is in the format MM/DD/YYYY.
                Two-digit year fields are also accepted.
                The value is stored as the number of days since January 1, 1970.
                This option requires the use of shadow passwords.

  -f <i>days</i>       Permanently disable account this many days after the
                password has expired. A value of -1 disables this feature.
                This option requires the use of shadow passwords.

  -g <i>group</i>      Initial group name or ID number.
                If a different default group has not been specified using the -D option,

  -G <i>groups</i>     Supplementary groups given by name or number in a comma-separated
                list with no whitespace. The <i>user </i>will be removed from any groups to
                which they currently belong that are not included in <i>groups</i>.

  -l <i>name</i>       Login name. This cannot be changed while the user is logged in.

  -o            Override. Accept a nonunique uid with the -u option. (Probably a bad idea.)

  -s <i>shell</i>      Login shell.

  -u <i>uid</i>        Numerical user ID. The value must be unique unless the -o option is used.
                The default value is the smallest ID value greater than 99 and greater
                than every other uid.</pre>
<p class="quote"><i>“They have rights who dare maintain them” ~ James Russell Lowell </i></p>
<p><b>Related bash commands</b>:</p>
<p><a href="userdel.html">userdel</a> - Delete a user account<br>
<a href="useradd.html">useradd</a> - add user account<br>
Equivalent Windows command: <a href="../nt/dsmod-user.html">dsmod </a>- Modify active directory object.</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="usermod.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

