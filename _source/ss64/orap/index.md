

<h1>Oracle Supplied Packages</h1> 
<p> Packages marked <b>*</b> are new in 9.2</p>
<pre>Package       Description

<a href="DBMS_ALERT.html">DBMS_ALERT</a>    Notify a database event (asynchronous)

<a href="DBMS_APPLICATION_INFO.html">DBMS_APPLICATION_INFO</a>
              Register an application name with the database
              for auditing or performance tracking.
              Application info can be pushed into <a href="../orav/V$SESSION.html">V$SESSION</a>/<a href="../orav/V$SESSION_LONGOPS.html">V$SESSION_LONGOPS</a>
 
<a href="DBMS_AQ.html">DBMS_AQ</a>       Add a message (of a predefined object type) onto a queue 
              or dequeue a message.
 
<a href="DBMS_AQADM.html">DBMS_AQADM</a>    Administer a queue or queue table 
              for messages of a predefined object type.
 
<a href="DBMS_AQELM.html">DBMS_AQELM</a>    Configure Advanced Queuing
              asynchronous notification by e-mail and HTTP. <b>*</b>
 
<a href="DBMS_BACKUP_RESTORE.html">DBMS_BACKUP_RESTORE</a>
              Normalize filenames on Windows NT platforms.
 
<a href="DBMS_DDL.html">DBMS_DDL</a>      Access SQL DDL statements from a stored procedure,
              provides special administration operations 
              not available as DDLs.
 
<a href="DBMS_DEBUG.html">DBMS_DEBUG</a>    Implement server-side debuggers and provide a way to 
              debug server-side PL/SQL program units. 
 
<a href="DBMS_DEFER.html">DBMS_DEFER</a>    User interface to a replicated transactional deferred 
              RPC facility. Requires the Distributed Option. 
 
<a href="DBMS_DEFER_QUERY.html">DBMS_DEFER_QUERY</a>
              Permit querying the deferred remote procedure calls (RPC)
              queue data that is not exposed through views.
              Requires the Distributed Option. 
 
<a href="DBMS_DEFER_SYS.html">DMBS_DEFER_SYS</a>
              The system administrator interface to a replicated 
              transactional deferred RPC facility.
              Requires the Distributed Option.
 
<a href="DBMS_DESCRIBE.html">DBMS_DESCRIBE</a>
              Describe the arguments of a stored procedure
              with full name translation and security checking.
 
<a href="DBMS_DISTRIBUTED_TRUST_ADMIN.html">DBMS_DISTRIBUTED_TRUST_ADMIN</a>
              Maintain the Trusted Database List, which is used to 
              determine if a privileged database link from a particular 
              server can be accepted.

<a href="http://www.google.com/search?q=DBMS_ENCODE">DBMS_ENCODE</a>   Encode???
 
<a href="DBMS_FGA.html">DBMS_FGA</a>      Fine-grained security functions. <b>*</b>
 
<a href="DBMS_FLASHBACK.html">DMBS_FLASHBACK</a>
              Flash back to a version of the database at a specified
              wall-clock time or a specified system change 
              number (SCN).<b> *</b>
 
<a href="DBMS_HS_PASSTHROUGH.html">DBMS_HS_PASSTHROUGH</a>
              Send pass-through SQL statements to non-Oracle systems.
              (via Heterogeneous Services)
 
<a href="DBMS_IOT.html">DBMS_IOT</a>      Create a table into which references to the chained rows 
              for an Index Organized Table can be placed using the 
              ANALYZE command. 
 
<a href="DBMS_JOB.html">DBMS_JOB</a>      Schedule PL/SQL procedures that you want performed at 
              periodic intervals; also the job queue interface. 
 
<a href="DBMS_LDAP.html">DBMS_LDAP</a>     Functions and procedures to access data from
              LDAP servers. <b>*</b>
 
<a href="DBMS_LIBCACHE.html">DBMS_LIBCACHE</a>
              Prepares the library cache on an Oracle instance by 
              extracting SQL and PL/SQL from a remote instance and
              compiling this SQL locally without execution. <b>*</b>
 
<a href="DBMS_LOB.html">DBMS_LOB</a>      General purpose routines for operations on Oracle Large
              Object (LOBs) datatypes - BLOB, CLOB (read-write),
              and BFILEs (read-only). 
 
<a href="DBMS_LOCK.html">DBMS_LOCK</a>     Request, convert and release locks through Oracle Lock 
              Management services.
 
<a href="DBMS_LOGMNR.html">DBMS_LOGMNR</a>   Functions to initialize and run the log reader. 
 
<a href="DBMS_LOGMNR_CDC_PUBLISH.html">DBMS_LOGMNR_CDC_PUBLISH</a>
              Identify new data that has been added to, modified, or 
              removed from, relational tables and publish the changed 
              data in a form that is usable by an application. <b>*</b>
 
<a href="DBMS_LOGMNR_CDC_SUBSCRIBE.html">DBMS_LOGMNR_CDC_SUBSCRIBE</a>
              View and query the change data that was captured 
              and published with the DBMS_LOGMNR_CDC_PUBLISH package. <b>*</b>
 
<a href="DBMS_LOGMNR_D.html">DBMS_LOGMNR_D</a>
              Query the dictionary tables of the current database, and 
              create a text based file containing their contents.
 
<a href="DBMS_METADATA.html">DBMS_METADATA</a>
              Retrieve complete database object definitions (metadata) 
              from the dictionary. <b>*</b>
 
<a href="DBMS_MVIEW.html">DBMS_MVIEW</a>    Refresh snapshots that are not part of the same 
              refresh group and purge logs. DBMS_SNAPSHOT is a synonym.
 
<a href="DBMS_OBFUSCATION_TOOLKIT.html">DBMS_OBFUSCATION_TOOLKIT</a>
              Procedures for Data Encryption Standards.
 
<a href="DBMS_ODCI.html">DBMS_ODCI</a>     Get the CPU cost of a user function based on the 
              elapsed time of the function. <b>*</b>
 
<a href="DBMS_OFFLINE_OG.html">DBMS_OFFLINE_OG</a>
              Public APIs for offline instantiation of master groups.
 
<a href="DBMS_OFFLINE_SNAPSHOT.html">DBMS_OFFLINE_SNAPSHOT</a>
              Public APIs for offline instantiation of snapshots.
 
<a href="DBMS_OLAP.html">DBMS_OLAP</a>     Procedures for summaries, dimensions, and query rewrites.
 
<a href="DBMS_ORACLE_TRACE_AGENT.html">DBMS_ORACLE_TRACE_AGENT</a>
              Client callable interfaces to the Oracle TRACE
              instrumentation within the Oracle7 Server.
 
<a href="DBMS_ORACLE_TRACE_USER.html">DBMS_ORACLE_TRACE_USER</a>
              Public access to the Oracle release 7 Server 
              Oracle TRACE instrumentation for the calling user.
 
<a href="DBMS_OUTLN.html">DBMS_OUTLN</a>    Interface for procedures and functions associated with 
              management of stored outlines. Synonymous with OUTLN_PKG
 
<a href="DBMS_OUTLN_EDIT.html">DBMS_OUTLN_EDIT</a>
              Edit an invoker's rights package. <b>*</b>
 
<a href="http://www.google.com/search?q=DBMS_OUTPUT+site%3Aoracle.com">DBMS_OUTPUT</a>   Accumulate information in a buffer so that it can be 
              retrieved out later.
 
<a href="DBMS_PCLXUTIL.html">DBMS_PCLXUTIL</a> Intra-partition parallelism for creating partition-wise 
              local indexes.
 
<a href="DBMS_PIPE.html">DBMS_PIPE</a>     A DBMS pipe service which enables messages to be sent 
              between sessions.
 
<a href="DBMS_PROFILER.html">DBMS_PROFILER</a> A Probe Profiler API to profile PL/SQL applications
              and identify performance bottlenecks.
              To install this run profload.sql(as SYS) and proftab.sql(as user)
 
<a href="DBMS_RANDOM.html">DBMS_RANDOM</a>   A built-in random number generator.
              Options to generate random numbers within a range or distribution.
 
<a href="DBMS_RECTIFIER_DIFF.html">DBMS_RECTIFIER_DIFF</a>
              APIs used to detect and resolve data inconsistencies 
              between two replicated sites.
 
<a href="DBMS_REDEFINITION.html">DBMS_REDEFINITION</a>
              Reorganise a table (change it's structure) while it's
              still online and in use. <b>*</b>
 
<a href="DBMS_REFRESH.html">DBMS_REFRESH</a>  Create groups of snapshots that can be refreshed together
              to a transactionally consistent point in time.
              Requires the Distributed Option. 
 
<a href="DBMS_REPAIR.html">DBMS_REPAIR</a>   Repair data corruption.
 
<a href="DBMS_REPCAT.html">DBMS_REPCAT</a>   Administer and update the replication catalog and environment. 
              Requires the Replication Option.
 
<a href="DBMS_REPCAT_ADMIN.html">DBMS_REPCAT_ADMIN</a>
              Create users with the privileges needed by the symmetric 
              replication facility. Requires the Replication Option.
 
<a href="DBMS_REPCAT_INSTANTIATE.html">DBMS_REPCAT_INSTATIATE</a>
              Instantiates deployment templates.
              Requires the Replication Option.
 
<a href="DBMS_REPCAT_RGT.html">DBMS_REPCAT_RGT</a>
              Define and maintain refresh group templates. 
              Requires the Replication Option.

<a href="DBMS_REPUTIL.html">DBMS_REPUTIL</a>
              Generate shadow tables, triggers, and packages 
              for table replication.
 
<a href="DBMS_RESOURCE_MANAGER.html">DBMS_RESOURCE_MANAGER</a>
              Maintain plans, consumer groups, and plan directives; 
              also provides semantics so that you may group together 
              changes to the plan schema. 
 
<a href="DBMS_RESOURCE_MANAGER_PRIVS.html">DBMS_RESOURCE_MANAGER_PRIVS</a>
              Maintain privileges associated with resource consumer groups. 
 
<a href="DBMS_RESUMABLE.html">DBMS_RESUMABLE</a>
              Suspend large operations that run out of space or reach space 
              limits after executing for a long time, fix the problem, and 
              make the statement resume execution.
 
<a href="DBMS_RLS.html">DBMS_RLS</a>      Row level security administrative interface.
 
<a href="DBMS_ROWID.html">DBMS_ROWID</a>    Procedures to create rowids and to interpret their contents. 
 
<a href="DBMS_SESSION.html">DBMS_SESSION</a>  Access to SQL ALTER SESSION statements, and other session 
              information, from stored procedures.
 
<a href="DBMS_SHARED_POOL.html">DBMS_SHARED_POOL</a>
              Keep objects in shared memory, so that they will not be aged
              out with the normal LRU mechanism.
 
<a href="DBMS_MVIEW.html">DBMS_SNAPSHOT</a>
              Synonym for DBMS_MVIEW
 
<a href="DBMS_SPACE.html">DBMS_SPACE</a>    Segment space information not available through standard SQL.
              How much space is left before a new extent gets allocated?
              How many blocks are above the segments High Water Mark?
              How many blocks are in the free list(s)
 
<a href="DBMS_SPACE_ADMIN.html">DBMS_SPACE_ADMIN</a>
              Tablespace and segment space administration not available 
              through the standard SQL.
 
<a href="DBMS_SQL.html">DBMS_SQL</a>      Use dynamic SQL to access the database.
 
DBMS_STANDARD 
              Language facilities that help your application interact 
              with Oracle.
 
<a href="DBMS_STATS.html">DBMS_STATS</a>    View and modify optimizer statistics gathered for database objects.
              In a small test environment this allows faking the stats
              to simulate running a large production database.
 
<a href="DBMS_TRACE.html">DBMS_TRACE</a>    Routines to start and stop PL/SQL tracing.
 
<a href="DBMS_TRANSACTION.html">DBMS_TRANSACTION</a>
              Access to SQL transaction statements from stored 
              procedures and monitors transaction activities.
 
<a href="DBMS_TRANSFORM.html">DBMS_TRANSFORM</a>
              An interface to the message format transformation features 
              of Oracle Advanced Queuing. <b>*</b>
 
<a href="DBMS_TTS.html">DBMS_TTS</a>      Check if a transportable set is self-contained.
 
<a href="DBMS_TYPES.html">DBMS_TYPES</a>    Constants, which represent the built-in and user-defined types.

<a href="http://www.google.com/search?q=DBMS_URL">DBMS_URL</a>      Oracle Spatial connection_type ??

<a href="DBMS_UTILITY.html">DBMS_UTILITY</a>  Utility routines, Analyze, Time, Conversion etc.
 
<a href="DBMS_WM.html">DBMS_WM</a>       Database Workspace Manager (long transactions) <b>*</b>
 
<a href="DBMS_XMLGEN.html">DBMS_XMLGEN</a>   Convert the results of a SQL query to a canonical XML format. <b>*</b>
 
<a href="DBMS_XMLGEN.html">DMBS_XMLQUERY</a>
              Database-to-XMLType functionality. <b>*</b>
 
<a href="DBMS_XMLSAVE.html">DBMS_XMLSAVE</a>
              XML-to-database-type functionality. <b>*</b>
 
<a href="DEBUG_EXTPROC.html">DEBUG_EXTPROC</a>
              Debug external procedures on platforms with debuggers 
              that can attach to a running process.
 
<a href="DBMS_OUTLN.html">OUTLN_PKG</a>     Synonym of DBMS_OUTLN.
 
PLITBLM       Handle index-table operations.(Don't call directly)

<a href="http://www.google.com/search?q=SDO_CS">SDO_CS</a>,<a href="http://www.google.com/search?q=SDO_GEOM">SDO_GEOM</a>,<a href="http://www.google.com/search?q=SDO_LRS">SDO_LRS</a>,<a href="http://www.google.com/search?q=SDO_MIGRATE">SDO_MIGRATE</a>,<a href="http://www.google.com/search?q=SDO_TUNE">SDO_TUNE</a>
              see Oracle Spatial User's Guide and Reference 
              Spatial packages are installed in user MDSYS with public synonyms.

STANDARD      Types, exceptions, and subprograms which are
              available automatically to every PL/SQL program. 

<a href="UTL_COLL.html">UTL_COLL</a>      Collection locators - query and update from a PL/SQL program.
 
<a href="UTL_ENCODE.html">UTL_ENCODE</a>    Encode RAW data into a standard encoded format
              so that the data can be transported between hosts. <b>*</b>
 
<a href="UTL_FILE.html">UTL_FILE</a>      Read and write OS text files via PL/SQL. 
              A restricted version of standard OS stream file I/O. 
 
<a href="UTL_HTTP.html">UTL_HTTP</a>      Enable HTTP callouts from PL/SQL and SQL to access data 
              on the Internet or to call Oracle Web Server Cartridges.
 
<a href="UTL_INADDR.html">UTL_INADDR</a>    A procedure to support internet addressing.
 
<a href="UTL_PG.html">UTL_PG</a>        Convert COBOL numeric data into Oracle numbers 
              and convert Oracle numbers into COBOL numeric data. 
 
<a href="UTL_RAW.html">UTL_RAW</a>       SQL functions for RAW datatypes that concat, 
              substr, etc. to and from RAWS.
 
<a href="UTL_REF.html">UTL_REF</a>       Enable a PL/SQL program to access an object by providing a 
              reference to the object.
 
<a href="UTL_SMTP.html">UTL_SMTP</a>      Send SMTP email. The mailer program needs to run on the server,
              but can be invoked from a client.
 
<a href="UTL_TCP.html">UTL_TCP</a>       Simple TCP/IP-based communication between servers and the outside world.  
 
<a href="UTL_URL.html">UTL_URL</a>       Escape and unescape mechanism for URL characters. 
 
<a href="http://www.google.com/search?q=ANYDATA+TYPE">ANYDATA</a> TYPE  A self-describing data instance TYPE.
 
<a href="http://www.google.com/search?q=ANYDATASET+TYPE">ANYDATASET</a> TYPE
              Describe a given TYPE plus a set of data instances of that type.
 
<a href="http://www.google.com/search?q=ANYTYPE+TYPE">ANYTYPE</a> TYPE  Contains a type description of any persistent SQL type,
              named or unnamed, including object types and collection types.</pre>
<p> 
  <b>See also</b><br>
  <br>
  <a href="../ora/exec.html">EXEC</a> - Execute a PL/SQL package<br>
  <a href="../ora/desc.html">DESC</a> - Describe a package<br>
  <br>
  <b>Related Views</b></p>
<pre>                      <a href="../orad/ALL_ARGUMENTS.html">ALL_ARGUMENTS</a>        <a href="../orad/USER_ARGUMENTS.html">USER_ARGUMENTS</a>
 <a href="../orad/DBA_OBJECTS.html">DBA_OBJECTS</a>          <a href="../orad/ALL_OBJECTS.html">ALL_OBJECTS</a>          <a href="../orad/USER_OBJECTS.html">USER_OBJECTS</a>         <a href="../orad/SYS_OBJECTS.html">SYS_OBJECTS</a> 
                      ALL_PROCEDURES       USER_PROCEDURES
 <a href="../orad/DBA_SOURCE.html">DBA_SOURCE</a>           <a href="../orad/ALL_SOURCE.html">ALL_SOURCE</a>           <a href="../orad/USER_SOURCE.html">USER_SOURCE</a> 
</pre><!-- #BeginLibraryItem "/Library/foot_menu.lbi" --><hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

