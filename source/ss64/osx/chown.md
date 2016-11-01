---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>chown</h1> 
<p>Change file owner and/or group.</p>
<pre>Syntax 
      chown [-fhv] [-R [-H | -L | -P]] <i>owner</i>[:<i>group]</i> <i>file</i> ...

      chown [-fhv] [-R [-H | -L | -P]] :<i>group</i> <i>file </i>...

Options

   -R         Recurse: Change the mode of file hierarchies rooted in the files
              instead of just the files themselves.

   -R -H      Follow symbolic links on the command line
              (by default Symbolic links within the tree are not followed.)      
   -R -L      All symbolic links are followed.
   -R -P      No symbolic links are followed. (default)
   
   -f         Do not display a diagnostic message if chmod could not modify the
              mode for <i>file</i>.

   -h         If the file is a symbolic link, change the mode of the link
              itself rather than the file that the link points to.

   -v         Verbose, show filenames as the mode is modified*</pre>
<p>The owner and group operands are both optional; however, at least one
must be specified. If the group operand is specified, it must be preceded by a colon (<span class="code">:</span>)</p>
<p>* The -v option is non-standard and its use in scripts is not recommended.</p>
<p>The ownership of a file can only be altered by a super-user 
  for obvious security reasons.</p>
<p><b>Notes</b></p>
<p> Previous versions of the chown utility used the dot (<span class="code">.</span>) 
  character to distinguish the group name. This has been changed to be a colon 
  (:) character so that user and group names can contain the dot character.  </p>
<p>The -v option is non-standard and its use in scripts is 
  not recommended.</p>
<p>The owner/group can be either a numeric ID or a name. If a user/group name is also a numeric user ID, the operand is used as a user name. </p>
<p>chown  exits 0 on success, and &gt;0 if an error occurs.</p>
<p><b>Examples</b><br>
  <br>
  Assign Ursula as the owner of "MyFile.txt" file in the Shared directory. </p>
<p class="code">$ sudo chown Ursula /Users/Shared/MyFile.txt </p>
<p>Assign Ursula as the owner, and staff as the group for everything in the "tmp" 
  folder</p>
<p class="code">$ sudo chown -R Ursula:staff /Users/Shared/tmp/</p>
<p>Reset the permissions on the entire home folder for the currently logged in user ($USER) this will reset the  user ID number (UID) for all files. POSIX file permissions only use the UID, not the UserName or GUID.</p>
<p class="code">$ sudo chown -R $USER ~$USER</p>
<p> <i class="quote">“I never, ever say “I can't" about anything. I might say “I don't have the authority to make that decision” or “Building A is too heavy for me to lift” or "I will need training before I pilot that space shuttle” - Mike Huber</i><br>
<br>
<b> Related:</b><br>
<br>
<a href="chflags.html">chflags</a> - Change a file or folder's flags. <br>
<a href="chgrp.html">chgrp</a> - Change group ownership<br>
<a href="chmod.html">chmod</a> - Change access permissions <br>
<a href="umask.html">umask</a> - Users file creation mask</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="chown.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
