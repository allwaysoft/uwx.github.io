---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>chown</h1> 
<p>Change  owner, change the user and/or group ownership of each given File to a new Owner.<br>
Chown can also change the ownership of a file to match the user/group of an existing reference file.</p>
<pre>SYNTAX
      chown [<i>Options</i>]... <i>NewOwner File</i>...

      chown [<i>Options</i>]... :Group <i>File</i>...

      chown [<i>Options</i>]... --reference=RFILE <i>File</i>...

   If used, NewOwner specifies the new owner and/or group as follows
   (with no embedded white space):

     [OWNER] [ [:.] [GROUP] ]

   Some examples of how the owner/group can be specified:

     OWNER
     If only an OWNER (a user name or numeric user id) is given, that
     user is made the owner of each given file, and the files' group is
     not changed.

     OWNER.GROUP
     OWNER:GROUP
     If the OWNER is followed by a colon or dot and a GROUP (a group
     name or numeric group id), with no spaces between them, the group
     ownership of the files is changed as well (to GROUP).

     OWNER.
     OWNER:
     If a colon or dot but no group name follows OWNER, that user is
     made the owner of the files and the group of the files is changed
     to OWNER's login group.

     .GROUP
     :GROUP
     If the colon or dot and following GROUP are given, but the owner
     is omitted, only the group of the files is changed; in this case,
     `chown' performs the same function as `<a href="chgrp.html">chgrp</a>'.

OPTIONS:

-c
--changes
     Verbosely describe the action for each FILE whose ownership
     actually changes.

--dereference
     Do not act on symbolic links themselves but rather on what they
     point to.

-f
--silent
--quiet
     Do not print error messages about files whose ownership cannot be
     changed.

-h
--no-dereference
     Act on symbolic links themselves instead of what they point to.
     This is the default.  This mode relies on the `lchown' system call.
     On systems that do not provide the `lchown' system call, `chown'
     fails when a file specified on the command line is a symbolic link.
     By default, no diagnostic is issued for symbolic links encountered
     during a recursive traversal, but see `--verbose'.

--reference=<i>FILE</i>
     Use the user and group of the reference <i>FILE</i> instead of an explicit
     <i>NewOwner</i> value.

-R
--recursive
     Recursively change ownership of directories and their contents. 

-v
--verbose
     Verbosely describe the action (or non-action) taken for every FILE.
     If a symbolic link is encountered during a recursive traversal on
     a system without the `lchown' system call, and `--no-dereference'
     is in effect, then issue a diagnostic saying neither the symbolic
     link nor its referent is being changed.</pre>
<p class="quote"><i>“It is in men as in soils where sometimes there is a vein of gold which the owner knows not” ~ Jonathan Swift </i></p>
<p><b>Related:</b><br>
<br>
<a href="chgrp.html">chgrp</a> - Change group ownership<br>
<a href="chmod.html">chmod</a> - Change access permissions <br>
<a href="syntax-permissions.html">bash syntax - Permissions</a><br>
Equivalent Windows command:<a href="../nt/xcacls.html"> XCACLS</a> - Change file permissions </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="chown.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

