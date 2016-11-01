---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>id</h1> 
<p>User identity - display the user and group names (and IDs)<br>
  The <span class="code">groups</span> utility has been obsoleted by id, and is equivalent to `id 
-Gn [<i>user</i>]' </p>
<pre>Syntax
      id [<i>user</i>]
      id -A
      id -G [-n] [<i>user</i>]
      id -M
      id -P [<i>user</i>]
      id -g [-nr] [<i>user</i>]
      id -p [<i>user</i>]
      id -u [-nr] [<i>user</i>]

Options
   -A     Display the process audit user ID and other process audit properties, which requires privilege.

   -G     Display the different group IDs (effective, real and supplementary)
         as white-space separated numbers, in no particular order.

   -M     Display the MAC label of the current process.

   -P     Display the id as a password file entry.

   -g     Display the effective group ID as a number.

   -n     Display the name of the user or group ID for the -G, -g and -u
          options instead of the number.  If any of the ID numbers cannot
          be mapped into names, the number will be displayed as usual.

   -p     Make the output human-readable.  If the user name returned by
          getlogin(2) is different from the login name referenced by the
          user ID, the name returned by getlogin(2) is displayed, preceded
          by the keyword `login'.  The user ID as a name is displayed,
          preceded by the keyword `uid'.  If the effective user ID is
          different from the real user ID, the real user ID is displayed as
          a name, preceded by the keyword `euid'.  If the effective group
          ID is different from the real group ID, the real group ID is displayed
          as a name, preceded by the keyword `rgid'.  The list of
          groups to which the user belongs is then displayed as names, preceded
          by the keyword `groups'.  Each display is on a separate line.

   -r     Display the real ID for the -g and -u options instead of the
         effective ID.

   -u     Display the effective user ID as a number.   </pre>
<p>Displays the user and group names and numeric IDs, of the calling 
process, to the standard output.</p>
<p> If the real and effective IDs are different, both are displayed, 
  otherwise only the real ID is displayed.</p>
<p>The id utility exits 0 on success, and &gt;0 if an error occurs.</p>
<p> If a <i>user</i> (login name or user ID) is specified, the user 
  and group IDs of that user are displayed. In this case, the real and effective 
IDs are assumed to be the same.</p>
<p class="quote"><i>"There is no monument dedicated to the memory of a committee" 
  ~ Lester 
  J. Pourciau</i></p>
<p><b>Related:</b></p>
<p>
<a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/id.1.html">id man page</a> - Apple.com<br>
The historic <span class="code">groups</span> command is equivalent to <span class="code">id -Gn [user]</span><br>
The historic <span class="code">whoami</span> command is equivalent to <span class="code">id -un</span><br>
<a href="who.html">who</a> - Print all users currently logged in<br>
<span class="code">whoami </span>- Print real user name.<br>
Equivalent (Linux) bash command:<a href="../bash/who.html">who</a> - Print all users currently logged in</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="id.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
