---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>passwd</h1> 
<p>Modify a user password.<br>
  First, the user is prompted for their current password. If the current password 
  is correctly typed, a new password is requested. The new password must be entered 
twice to avoid typing errors.</p>
<pre>Syntax
      passwd [-i <i>infosystem</i>] [-l <i>location</i>] [-u <i>authname</i>] [name]

Key
    -i <i>infosystem</i>
           This option specifies where the password update should be applied.
          Under Mac OS X 10.5 and later, supported directory systems are:

            PAM   (default)  Pluggable Authentication Modules.
            opendirectory    A system conforming to Open Directory APIs and supporting
                             updates (including LDAP, etc).
                             If no -l option is specified, the search node is used.
            file  The local flat-files (included for legacy configurations).
            nis   A remote NIS server containing the user's password.

    -l <i>location</i>
          This option causes the password to be updated in the given location
          of the chosen directory system.
            for file,
                  location can be a file name (/etc/master.passwd is the
                  default)
            for nis,
                  location can be a NIS domainname
            for opendirectory,
                  location can be a directory node name
            for PAM,
                  location is not used

     -u <i>authname</i>
            This option specifies the user name to use when authenticating to
            the directory node.

     <i>user</i>  This optional argument specifies the user account whose password
           will be changed.  This account's current password might be required,
           even when run as the super-user, depending on the directory system.</pre>
<p>The new password should be at least six characters long and not 
  purely alphabetic. Its total length should be less than _PASSWORD_LEN (currently 
  128 characters) although some infosystems allow longer passwords. </p>
<p>Numbers, upper case letters and meta characters are encouraged. 
  Once the password has been verified, passwd communicates the new password information 
  to the authenticating host.</p>
<p><b>Files<br>
  </b>/etc/master.passwd The user database <br>
  /etc/passwd A Version 7 format password file <br>
  /etc/passwd.XXXXXX Temporary copy of the password file<b><br>
  <br>
  </b><i class="quote">"Chico : you can't come in unless you give the password... <br>
  Well, what is the password?... I got it! Haddock! - Groucho 
  Marx</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/passwd.1.html">passwd man page</a> - Apple.com<br>
openssl passwd - compute the hash of a password<br>
<a href="chgrp.html">chgrp</a> - Change group ownership<br>
<a href="chmod.html">chmod</a> - Change access permissions<br>
<a href="chown.html">chown</a> - Change file owner and group<br>
<a href="dsenableroot.html">dsenableroot</a> - Enable root access<br>
<a href="quota.html">quota</a> - Display disk usage and limits<br>
<a href="who.html">who</a> - Print who is currently logged in<br>
chpass - unix password change (not really used under OS X)<br>
<a href="login.html">login</a> - log into the computer<br>
<a href="../pass/pass.html">Password generator </a><br>
<a href="http://support.apple.com/kb/HT1352">kb/HT1352</a> - Firmware password protection in  OS X</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="passwd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
