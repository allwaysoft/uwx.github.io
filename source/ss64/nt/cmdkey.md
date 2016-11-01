---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>CMDKEY.exe (Windows 2003+)</h1>
<p> Create, list or delete stored user names, passwords or credentials.</p>
<pre>Syntax
      cmdkey [{/add:<i>TargetName</i>|/generic:<i>TargetName</i>}]
         {/smartcard|/user:<i>UserName</i> [/pass:Password]}
            [/delete{:<i>TargetName</i>|/ras}]
               /list:<i>TargetName</i>

Key:
   /add            Add a user name and password to the list.

   <i>TargetName</i>      The computer or domain name that this entry will be associated with.

   /generic        Add generic credentials to the list (used by <a href="mstsc.html">RDC</a>).

   /smartcard      Retrieve the credential from a smart card.

   /user:<i>UserName</i>  The user or account name to store with this entry.
                   If UserName is not supplied, it will be requested.

   /pass:<i>Password</i>  The password to store with this entry. If Password is not supplied, it will be requested.

   /delete:        Delete a user name and password from the list.
                   If TargetName is specified, that entry will be deleted.
                   If /ras is specified, the stored remote access entry will be deleted.

   /list           Display the list of stored user names and credentials.
                   If <i>TargetName</i> is not specified, all stored user names and credentials will be listed.</pre>
<p>The credentials created by CMDKEY can also be created and edited in the GUI Control Panel | Credential Manager </p>
<p>Credentials setup as type <span class="code">/generic:TERMSRV</span> will be used by <a href="mstsc.html">Remote Desktop Connection</a>, so you will be able to connect as the given user without being prompted for a password. If the password is changed you will need to update the stored credential.</p>
<p>By default the credentials are stored in <span class="code">C:\users\<i>username</i>\AppData\Roaming\Microsoft\Credentials\</span><br>
(around 400 bytes per credential)</p>
<p>If more than one smart card is found, cmdkey will prompt the user to specify which one to use.<br>
Once stored, passwords are not displayed by cmdkey.<b><br>
<br>
Examples:</b><br>
<br>
Display a list of stored user names and credentials:<br>
<span class="code">cmdkey /list</span></p>
<p>Add a generic <span class="code">TERMSRV</span> credential for user PeteZ (on domain dom64) to access the computer Server64:<br>
<span class="code">cmdkey /generic:TERMSRV/<i>Server64</i> /user:dom64\PeteZ /pass:p4g67hjyy23</span></p>
<p>Delete the stored <span class="code">TERMSRV</span> credential   for Server64:<br>
<span class="code">cmdkey /delete TERMSRV/Server64</span></p>
<p>Add a user name and password for user Kate to access computer Server64 with the password z5rd63hGtjH7:<br>
<span class="code">cmdkey /add:server64 /user:Kate /pass:z5rd63hGtjH7</span></p>
<p>Add a user name  for user Kate to access computer Server64  and prompt for a password whenever Server64 is accessed:<br>
<span class="code">cmdkey /add:server64 /user:Kate</span></p>
<p>Delete the stored credential   for Server64:<br>
<span class="code">cmdkey /delete:Server64</span></p>
<p><i class="quote">“The stupid neither forgive nor forget, the naive forgive and forget, the wise forgive but do not forget” ~ Thomas Szasz (The second sin)</i> <br>
<b><br>
Related:<br>
</b><br>
<a href="cipher.html">CIPHER</a> - Encrypt or Decrypt files/folders</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

