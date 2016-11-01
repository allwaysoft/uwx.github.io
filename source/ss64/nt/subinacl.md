---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>SUBINACL.exe (<a href="/links/windows.html#news">Windows 2003 Resource kit</a>)</h1>
<p><a href="http://go.microsoft.com/fwlink/?LinkID=23418">Download
    latest version</a> (2004)<br>
  Display or modify Access Control
  Entries (ACEs) for file and folder Permissions, Ownership and Domain.<br>
  <br>
  Access Control Lists apply only to files stored on an NTFS formatted drive, 
  each ACL determines which users (or groups of users) can read or edit the file. 
  When a new file is created it normally inherits ACL's from the folder where 
it was created.</p>
<pre>Syntax
      SUBINACL [/noverbose] /<i>object_type</i> <i>object_name</i> [/<i>action</i>=<i>parameter</i>] [/help]

Key
   object_type: <b> service</b>        e.g.  /service Messenger \\ServerName\Messenger
                 <b>keyreg</b>         e.g.  /keyreg HKEY_CURRENT_USER\Software
                                      /keyreg \\Srv\HKEY_LOCAL_MACHINE\KeyPath
                 <b>file</b>           e.g.  /file *.obj  /file c:\test.txt
                                      /file \\ServerName\Share\Path
                 <b>subdirectories</b> manipulate files in specified directory and all subdirectories

   object_name : This will vary according to the object_type - see the examples above

   action      : <b>setowner</b>=owner
                 will change the owner of the object e.g. /setowner=MyDomain\Administrators

                 <b>replace</b>=SamName\OldAccount=DomainName\New_Account
                 will replace all ACE (Audit and Permissions) in the object
                 e.g. /replace=MyOldDomain\Finance=NEWDOM\Finance

                 <b>changedomain</b>=OldDomainName=NewDomainName
                 will replace all ACEs with a Sid from OldDomainName
                 with the equivalent Sid found in NewSamServer 
                 e.g. /changedomain=MyOldDomain=NEWDOMAIN
                 This option requires a trust relationship with the server containing the object.

  Help           Run SUBINACL /Help (or SUBINACL /Help /<i>action</i>) for more
                 detail on the many other options.</pre>
<p>SUBINACL is a powerful command that can do everything cacls and xcacls can do and more besides.</p>
<p>When running subinacl against a subfolder, its important to include the trailing backslash, (or <span class="code">\*.*</span>) if this is missed out subinacl will interpret the path as a filename and search the entire drive for it, this can be very slow!</p>
<p><b>Examples:</b><br>
<br>
<span class="body">Save permissions to a log file:</span><br>
<span class="code">subinacl /noverbose /nostatistic /outputlog=SS64.log /subdirectories "C:\Program Files\My Folder\*.*" /display</span></p>
<p class="code"><span class="body">Restore Permissions from a log file:</span><br>
subinacl /nostatistic /playfile SS64.log </p>
<p>Change owner :<br>
<span class="code">subinacl /file C:\demofile.doc /setowner=SS64Dom\AliceT</span><br>
</p>
<p class="quote"><i>“It's easier to ask forgiveness than it is to get permission” ~ Rear Admiral Grace Hopper</i></p>
<p><b>Related:</b></p>
<p><a href="takeown.html">TAKEOWN</a> - Take ownership of a file<br>
<a href="attrib.html">ATTRIB</a> - Display or change file attributes<br>
<a href="cacls.html">CACLS</a> - Change file permissions<br>
<a href="xcacls.html">XCACLS</a> - Display or modify Access Control Lists (ACLs) for files and folders<br>
<a href="perms.html">PERMS</a> - Show permissions for a user<br>
FIXACLS - Restore default privs (Resource Kit supplement 2)<br>
SHOWACL - Show file Access Control Lists (Windows 2000)<br>
<a href="xcacls.html">XCACLS</a> - Display or modify Access Control Lists (ACLs) for files and folders<br>
<a href="https://support.microsoft.com/kb/288129">Q288129</a> - Grant users the right to manage services<br>
Powershell: <a href="../ps/set-acl.html">Set-Acl</a> - Set permissions<br>
Equivalent bash command (Linux): <a href="../bash/chmod.html">chmod</a> - Change access permissions</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

