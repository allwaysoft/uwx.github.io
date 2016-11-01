---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PERMS.exe (<a href="../links/windows.html#kits">2003 Resource Kit</a>)</h1>
<p>Display a user’s ACL access permissions for a file.<br>
Output from PERMS can be incomplete in cases where a user has inherited permission through membership of a group.</p>
<pre>Syntax
      PERMS [<i>account</i>] [<i>path</i>] options<br>
Key<br>   <i>account</i> : username or [domain\|computer\]username 

   <i>path</i>    : name of a file or folder in any legal format
             including UNC names
             <a href="syntax-wildcards.html">Wildcards</a> are permitted.

   /i      : interactively logged on to the computer
             where the path resides.
             (rather than being connected via the network)

   /s      : include subfolders

The output access mask uses the following abbreviations: 

  R  Read file/folder.
  W  Write file/folder.   
  X  Execute file.  
  D  Delete file or folder. Can be inherited from the parent
     via 'Delete Subfolder and Files' permission.
  P  Change Permission.  
  O  Take Ownership.   
  A  General All  
  -  No Access
  *  The specified user is the owner of the file or folder.  
  #  A group the user is a member of owns the file or folder.  
  ?  Permisssions cannot be determined. </pre>
<p class="quote"><i>"Microsoft allowed us to change our startup screen, but we don’t think we should have to ask permission every time we want to make some minor software modification. Windows is an operating system, not a religion" ~ Ted Waitt, Gateway Chairman </i></p>
<p><b>Related:</b></p>
<p><a href="gpresult.html">GPRESULT</a> - Display  Resultant Set of Policy information for a remote user and computer.<br>
  <a href="ntrights.html">NTRIGHTS</a> - Edit user account rights<br>
  <a href="cacls.html">CACLS</a> - Display or modify Access Control Lists 
  (ACLs) for files and folders<br>
<a href="subinacl.html">SUBINACL</a> - Change an ACL's user/domain (use when 
  the file owner has moved to a new domain)<br>
  <a href="xcacls.html">XCACLS</a> - Display or modify Access Control Lists (ACLs) 
  for files and folders<br>
Powershell <a href="../ps/set-acl.html">Set-Acl</a> - Set permissions<br>
  Equivalent bash command (Linux):<a href="../bash/export.html"> 
  </a><a href="../bash/chmod.html">chmod</a> - Change access permissions</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="perms.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

