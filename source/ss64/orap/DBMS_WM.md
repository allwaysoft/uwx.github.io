---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_WM</h1> 
<p>Database Workspace Manager. <br>
  The Oracle database can hold different versions of the same row in one or more 
  workspaces (read-consistent views). <br>
  Users of the database can then change these versions independently.</p>
<pre>Subprocedures:

AlterSavepoint CreateSavepoint DeleteSavepoint 
AlterWorkspace CreateWorkspace RemoveWorkspace RemoveWorkspaceTree 

BeginResolve 
CommitResolve 

CompressWorkspace
CompressWorkspaceTree
CopyForUpdate 

DisableVersioning 
EnableVersioning 
FreezeWorkspace 

GetConflictWorkspace Function
GetDiffVersions Function
GetLockMode Function
GetMultiWorkspaces Function
GetOpContext Function
GetPrivs Function
GetWorkspace Function

GotoDate 
GotoSavepoint 
GotoWorkspace 

GrantSystemPriv 
GrantWorkspacePriv 

IsWorkspaceOccupied Function
LockRows 
MergeTable 
MergeWorkspace 

RefreshTable 
RefreshWorkspace 

ResolveConflicts 

RevokeSystemPriv 
RevokeWorkspacePriv 

RollbackResolve 
RollbackTable 
RollbackToSP 
RollbackWorkspace 

SetConflictWorkspace 
SetDiffVersions 
SetLockingOFF 
SetLockingON 
SetMultiWorkspaces 
SetWoOverwriteOFF 
SetWoOverwriteON 
SetWorkspaceLockModeOFF 
SetWorkspaceLockModeON 

UnfreezeWorkspace 
UnlockRows  </pre>
<p>For full documentation of the packaged procedures 
  above see the Oracle Manual:<br>
  "Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
  <br>
  </b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
  <i>by Steven Feuerstein et al</i><b><br>
  </b></p>
<pre><span class="body"><b>Related Commands:<br></b><br></span></pre>
<p><span class="body"><b>Related Packages:</b></span> </p>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_WM.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

