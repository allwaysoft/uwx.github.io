---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.CopyDatabaseFile</h1>
<p> Copy the database connected to the current project to a  SQL Server database file for export.</p>
<pre>Syntax
      DoCmd.CopyDatabaseFile(<i>DatabaseFileName</i>,
                     <i>OverwriteExistingFile</i>, <i>DisconnectAllUsers</i>)

Key
   DatabaseFileName      The name of the file (and path) to which
                         the current database is copied.
                         default=current directory.

   OverwriteExistingFile Determines whether Access will overwrite any
                         existing file specified by <i>DatabaseFileName</i>.
                         True to overwrite the existing file.

   DisconnectAllUsers    Determines whether Access disconnects any users
                         connected to the current database in order to
                         make the copy.  True to disconnect users.

</pre>
<p> The file name of the file must have an <span class="code">.mdf</span> extension.</p>
<p>To succeed, Access must be able to lock the destination file and have full access to the source database (no pending design sessions.)</p>
<p><i>DisconnectAllUsers</i> might fail if any users have an exclusive lock on any database objects. </p>
<p>The current user for the Access project will need system administrator privileges for the database server.</p>
<p><b>Example</b></p>
<p class="code">DoCmd.CopySQLDatabaseFile 
DatabaseFileName:="C:\Demo\SS64.mdf", _<br>
OverwriteExistingFile:=True, 
DisconnectAllUsers:=True</p>
<p class="quote"><i>“We could have saved the Earth but we were too damned cheap” ~ Kurt Vonnegut, Jr.</i></p>
<p>&nbsp;</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="copydatabasefile.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

