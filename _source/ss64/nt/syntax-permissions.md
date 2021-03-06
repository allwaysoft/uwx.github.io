---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Permissions and Privileges</h1>
<p>Permissions can be set on Files and Folders with <a href="cacls.html">CACLS</a> 
  or <a href="xcacls.html">XCACLS</a>.<br>
  <br>
  Permissions can be None, Read, Change or Full <br>
  'Full' being the same as 'Change'' plus the right to administer e.g. grant additional 
  users rights to read the file.<br>
  <br>
  Permissions can be assigned to individual users or to groups. <br>
  <br>
  If a user has no rights to the files in a folder the security tab in the GUI 
  will not appear (if you have no rights to even list the file names then you 
  have no rights to list the security attributes either.) <br>
  <br>
  Ownership of a file will override all access permissions - administrators can 
  take ownership of any file. <a href="subinacl.html">SUBINACL</a> can change 
  ownership from the command line. <br>
  Newly created files will be owned by the account used to create them (unless 
  the account is an administrator).</p>
<p> There are 4 <a href="syntax-groups.html">types of group</a>: Local Machine, 
   Local Domain, 
    Global Domain, 
Universal</p>
<h2>Create Local Users and Local Groups</h2>
<blockquote>
<p>Control Panel - admin tools - computer management - local users 
  and groups <br>
  ( not available on a Domain Controller )</p>
<pre>or from the command line...
<a href="net_useradmin.html">NET localgroup</a> </pre>
</blockquote>
<h2>Create Global Domain groups and Local Domain groups  </h2>
<blockquote>
<p>Control Panel - admin tools - Active directory users and computers 
- Users </p>
<pre>or from the command line...
<a href="net_useradmin.html">NET localgroup</a> /domain
<a href="net_useradmin.html">NET group</a> /domain</pre>
</blockquote>
<h2> 
Best Practice</h2>
<blockquote>
<p>A recommended  arrangement is to assign file and print permissions with one set of groups (Resources), and assign user membership with a separate set of groups (Teams), then assign rights 
  by making each team group a member of the relevant resource group(s).</p>
<p>  Advantages<br>
  - No duplication of file ACLs no matter how many teams are granted access to the folder - this reduces the size of the File Allocation Table - less fragmentation of the FAT will improve fileserver performance.<br>
- Avoid  problems where an ACL change fails because some files are open/in use, with this arrangement, most administrative changes can be made by adding and removing Users from Team groups  rather than editing ACL's on disk.<br>
  - You can view/audit all permissions in Active Directory without having to search through 
millions of file ACLs - this makes auditing easier.</p>
</blockquote>
<p class="quote"><i>“Of manners gentle, of affections mild; In wit a man, simplicity a child” - Alexander Pope</i></p>
<p><b>See also</b></p>
<p><a href="syntax-groups.html">Groups</a> - Full description of AD Local Domain groups, Global and Universal groups.<br>
<a href="syntax-security_groups.html">Built-in Groups</a> - Built-In Users and Security Groups.<br>
<a href="https://support.microsoft.com/kb/271876">Q271876</a> - Large Numbers of ACEs in ACLs Impair Directory Service Performance (slow logon times) <br>
<a href="https://support.microsoft.com/kb/909264">Q909264</a> - Naming conventions in Active Directory for computers, domains, sites, and OUs </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

