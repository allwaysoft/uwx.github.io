---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.TransferSQLDatabase</h1>
<p> Copy an entire SQL Server database.</p>
<pre>Syntax
      DoCmd.TransferSQLDatabase(<i>Server, Database, UseTrustedConnection,
                                Login, Password, TransferCopyData</i>)

Key
   <i>Server</i>       The name of the SQL Server to which the database will be transferred.

   <i>Database</i>     The name of the new database on the specified server.

   <i>UseTrustedConnection</i>
                True if the current connection is using a login with system
                administrator privileges. If this argument is not True, you
                must specify a login and password.

   <i>Login</i>        The name of a login on the destination server with
                system administrator privileges.
                If UseTrustedConnection is True, this argument is ignored.

  <i>Password</i>      The password for the login specified in Login.

  <i>TransferCopyData
              </i>  True if all data in the database is to be transferred to the
                destination. If this argument is not True, only the
                database schema will be transferred.</pre>
<p>TransferSQLDatabase requires that the user has system administrator login rights on the destination server.</p>
<p>The destination database cannot already exist on the destination server.</p>
<p>There are many other methods of transferring databases between SQL Server instances, (Import/Export and <a href="http://en.wikipedia.org/wiki/SQL_Server_Integration_Services">SSIS</a>) these tools might be a better choice if you want the data moves to be scripted as an overnight batch job. </p>
<p><b>Example</b></p>
<p>'Transfer the current SQL Server database to a new SQL Server database called SS64 on the server Server64. The data is copied along with the database schema.<br>
<span class="code"> DoCmd.TransferCompleteSQLDatabase 
Server:="Server64", _ <br>
Database:="SS64", 
UseTrustedConnection:=True, 
TransferCopyData:=False </span></p>
<p class="quote"><i>“The interesting thing is that there are so few important decisions. You don’t have to go in the ‘right’ direction, you don’t have to enter the ‘right’  business. What you have to do is have made a decision as to what you’re going to do and then you just have to figure out how to succeed at it” ~ Ken Oshman</i></p>
<p><b>Related:</b></p>
<p><a href="transferdatabase.html">TransferDatabase</a> - Import or export data to/from another database.<br>
<a href="transferspreadsheet.html">TransferSpreadsheet</a> - Import or export data to/from a spreadsheet file.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="transfersqldatabase.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

