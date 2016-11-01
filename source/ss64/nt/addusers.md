---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>ADDUSERS.exe (<a href="../links/windows.html#kits">Windows 2000 Resource Kit</a>)</h1>
<p>Automate the creation of a large number of users. Addusers will still work in XP/2003 for later OS's consider using a PowerShell script with <a href="../ps/new-aduser.html">New-ADUser</a>, <a href="../ps/set-adaccountpassword.html">Set-ADAccountPassword</a>, <a href="../ps/add-adprincipalgroupmembership.html">Add-ADPrincipalGroupMembership</a> and <a href="../ps/enable-adaccount.html">Enable-ADAccount</a></p>
<pre>Syntax

  Create Users:
            AddUsers /c <i>filename</i> [/s:x] [/?] <i>Domain</i> <i>Password_options</i>
  Dump to file:
            AddUsers /d{:u} <i>filename</i> [/s:x] [/?] <i>Domain</i> <i>Password_options</i>
  Erase Users:
            AddUsers /e <i>filename</i> [/s:x] [/?] <i>Domain</i> <i>Password_options</i>
key

   <i>Filename</i>   - The <b>comma-delimited</b> file that AddUsers uses for data.

   /s:<i>x</i>       - Change the delimiter character used in <i>filename</i> to <i>x</i>.
                e.g. /s:~ would make the delimiter "~" 
 
   <i>Domain</i>     - Query the Primary Domain Controller (PDC) of <i>domain</i>.
                You can also use \\Servername to specify the machine where user accounts are created or read. 
                AddUsers will use the local computer by default (if you do not specify <i>Domain</i>)

   /c         - Create user accounts, local groups, and global groups as specified by <i>filename</i>.

   /d{:u}     - Dump user accounts, local groups, and global groups to <i>filename</i>.</pre>
<blockquote>
  <blockquote>
<p>The (:u) is an optional switch that causes current accounts to be written to the specified file in Unicode text format. Choosing to dump current user accounts does not save the account's passwords or any security information for the
accounts.<br>
Note: Password information is not saved in a user account dump and if you use the same file to create accounts, all passwords of newly created accounts will be empty.
To back up security information for accounts, use a Tape Backup.</p>
  </blockquote>
</blockquote>
<pre>   /e         - Erase the user accounts specified in the file name. 
                CAUTION: Be careful when erasing user accounts, as it is not possible to recreate
                an account with the same SID. This option will not erase built-in accounts. 

<i> Password_options</i>
   /p:        - Set account creation options, used along with any combination of the following:
      * l     - Users do not have to change passwords at next logon.
      * c     - Users cannot change passwords.
      * e     - Passwords never expire. (implies l option)
      * d     - Accounts disabled.
                By default, all created users are required to change their password at logon.
</pre>
<p>
<b>Example<br> 
</b>Create a comma-delimited text file, which contains the new users to be created. Following the Syntax  as follows:</p>
<p>[Users]<br>
User Name,Full name, Password, Description, HomeDrive, Homepath, Profile, Script</p>
<p>e.g.</p>
<p>[User]<br>
jimmye,James Edward Phillip II,,,,,,<br>
alexd,Alex Denuur,,,E:\,E:\users\alexd,,<br>
ronj,Ron Jarook,ChangeThis,,E:\,E:\users\ronj,,<br>
sarahs,Sarah Smith,,,,,,<br>
u0123,Mike Olarte,,,,,,</p>
<p>Save the file as C:\Users.txt and execute the command</p>
<p class="code">AddUsers MyDomain /c c:\Users.txt /p:e</p>
<p class="quote">“That’s two hours I’ll never get back, is a favorite thing for an angry person to say about a movie he hates. But the thing is, every two hours are two hours he’ll never get back” - Charlie Kaufman</p>
<p><b>Related:</b><br>
<br>
<a href="http://support.microsoft.com/?id=199878">Q199878</a> - further examples of ADDUSERS<br>
<a href="dsadd.html">DSADD</a> - Add user (computer, group..) in active directory<br>
<a href="csvde.html">CSVDE</a> -   
Import and export from Active Directory.<br>
Equivalent bash command (Linux): <a href="../bash/useradd.html">useradd</a> - Create new user accounts</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="addusers.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

