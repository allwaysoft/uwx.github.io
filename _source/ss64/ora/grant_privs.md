---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>Privileges </h1> 
<p>List of  privileges that can be <a href="grant.html">granted</a> to a user (or to a user role)<br>
  <br>
  <i>clusters,contexts, database, links, dimensions, directories, indexes, materialized views, operators, outlines, procedures, profiles, roles, rollback segments, sequences, sessions, synonyms, tables, tablespaces, triggers, types, users and views…</i></p>
<p>CREATE CLUSTER Create clusters in grantee's schema<br>
CREATE ANY CLUSTER Create a cluster in any schema. Behaves similarly to CREATE ANY TABLE.<br>
ALTER ANY CLUSTER Alter clusters in any schema<br>
DROP ANY CLUSTER Drop clusters in any schema</p>
<p>CONTEXTS:<br>
  CREATE ANY CONTEXT Create any context namespace<br>
DROP ANY CONTEXT Drop any context namespace</p>
<p>DATABASE:</p>
<p>  ALTER DATABASE Alter the database<br>
  ALTER SYSTEM Issue ALTER SYSTEM statements<br>
  AUDIT SYSTEM Issue AUDIT sql_statements statements</p>
<p>DATABASE LINKS:</p>
<p>CREATE DATABASE LINK Create private database links in grantee's schema<br>
CREATE PUBLIC DATABASE LINK Create public database links<br>
DROP PUBLIC DATABASE LINK Drop public database links</p>
<p>DEBUGGING:<br>
DEBUG CONNECT SESSION Connect the current session to a debugger that uses the Java Debug Wire Protocol (JDWP).<br>
DEBUG ANY PROCEDURE Debug all PL/SQL and Java code in any database object; displayinformation on all SQL statements executed by the application Note: Granting this privilege is equivalent to granting the DEBUG object privilege on all applicable objects in the database.</p>
<p>DIMENSIONS:<br>
CREATE DIMENSION Create dimensions in the grantee's schema<br>
CREATE ANY DIMENSION Create dimensions in any schema<br>
ALTER ANY DIMENSION Alter dimensions in any schema<br>
DROP ANY DIMENSION Drop dimensions in any schema</p>
<p>DIRECTORIES<br>
CREATE ANY DIRECTORY Create directory database objects<br>
DROP ANY DIRECTORY Drop directory database objects</p>
<p>INDEXTYPES:<br>
CREATE INDEXTYPE Create an indextype in the grantee's schema<br>
CREATE ANY INDEXTYPE Create an indextype in any schema<br>
ALTER ANY INDEXTYPE Modify indextypes in any schema<br>
DROP ANY INDEXTYPE Drop an indextype in any schema<br>
EXECUTE ANY INDEXTYPE Reference an indextype in any schema</p>
<p>INDEXES:</p>
<p>  CREATE ANY INDEX Create in any schema a domain index or an index on any table in any schema<br>
  ALTER ANY INDEX Alter indexes in any schema<br>
  DROP ANY INDEX Drop indexes in any schema<br>
  QUERY REWRITE Enable rewrite using a materialized view, or create a function-based index, when that materialized view or index references tables and views that are in the grantee's own schema<br>
  GLOBAL QUERY REWRITE Enable rewrite using a materialized view, or create a function-based index, when that materialized view or index references tables or views in any schema</p>
<p>LIBRARIES:<br>
CREATE LIBRARY Create external procedure/function libraries in grantee's schema<br>
CREATE ANY LIBRARY Create external procedure/function libraries in any schema<br>
DROP ANY LIBRARY Drop external procedure/function libraries in any schema</p>
<p>MATERIALIZED VIEWS:</p>
<p>  CREATE MATERIALIZED VIEW Create a materialized view in the grantee's schema<br>
  CREATE ANY MATERIALIZED VIEW Create materialized views in any schema<br>
  ALTER ANY MATERIALIZED VIEW Alter materialized views in any schema<br>
  DROP ANY MATERIALIZED VIEW Drop materialized views in any schema<br>
  QUERY REWRITE Enable rewrite using a materialized view, or create a function-based index, when that materialized view or index references tables and views that are in the grantee's own schema<br>
  GLOBAL QUERY REWRITE Enable rewrite using a materialized view, or create a function-based
index, when that materialized view or index references tables or views in any schema<br>
ON COMMIT REFRESH Create a refresh-on-commit materialized view on any table in the database Alter a refresh-on-demand materialized on any table in thedatabase to refresh-on-commit<br>
FLASHBACK ANY TABLE Issue a SQL flashback query on any table, view, or materialized view in any schema. (This privilege is not needed to execute the DBMS_FLASHBACK procedures.)</p>
<p>OPERATORS:</p>
<p>  CREATE OPERATOR Create an operator and its bindings in the grantee's schema<br>
  CREATE ANY OPERATOR Create an operator and its bindings in any schema<br>
  DROP ANY OPERATOR Drop an operator in any schema<br>
  EXECUTE ANY OPERATOR Reference an operator in any schema</p>
<p>OUTLINES:</p>
<p>  CREATE ANY OUTLINE Create public outlines that can be used in any schema that uses outlines<br>
  ALTER ANY OUTLINE Modify outlines<br>
  DROP ANY OUTLINE Drop outlines</p>
<p>PROCEDURES:</p>
<p>  CREATE PROCEDURE Create stored procedures, functions, and packages in grantee's schema<br>
  CREATE ANY PROCEDURE Create stored procedures, functions, and packages in any schema<br>
  ALTER ANY PROCEDURE Alter stored procedures, functions, or packages in any schema<br>
  DROP ANY PROCEDURE Drop stored procedures, functions, or packages in any schema<br>
  EXECUTE ANY PROCEDURE Execute procedures or functions (standalone or packaged) Reference public package variables in any schema</p>
<p>PROFILES:</p>
<p>  CREATE PROFILE Create profiles<br>
  ALTER PROFILE Alter profiles<br>
  DROP PROFILE Drop profiles</p>
<p>ROLES:</p>
<p>  CREATE ROLE Create roles<br>
  ALTER ANY ROLE Alter any role in the database<br>
  DROP ANY ROLE Drop roles<br>
  GRANT ANY ROLE Grant any role in the database</p>
<p>ROLLBACK SEGMENTS:</p>
<p>  CREATE ROLLBACK SEGMENT Create rollback segments<br>
  ALTER ROLLBACK SEGMENT Alter rollback segments<br>
  DROP ROLLBACK SEGMENT Drop rollback segments</p>
<p>SEQUENCES:</p>
<p>  CREATE SEQUENCE Create sequences in grantee's schema<br>
  CREATE ANY SEQUENCE Create sequences in any schema<br>
  ALTER ANY SEQUENCE Alter any sequence in the database<br>
  DROP ANY SEQUENCE Drop sequences in any schema<br>
  SELECT ANY SEQUENCE Reference sequences in any schema</p>
<p>SESSIONS:</p>
<p>  CREATE SESSION Connect to the database<br>
  ALTER RESOURCE COST Set costs for session resources<br>
  ALTER SESSION Issue ALTER SESSION statements<br>
  RESTRICTED SESSION Logon after the instance is started using the SQL*Plus STARTUP RESTRICT statement</p>
<p>SYNONYMS:</p>
<p>  CREATE SYNONYM Create synonyms in grantee's schema<br>
  CREATE ANY SYNONYM Create private synonyms in any schema<br>
  CREATE PUBLIC SYNONYM Create public synonyms<br>
  DROP ANY SYNONYM Drop private synonyms in any schema<br>
  DROP PUBLIC SYNONYM Drop public synonyms</p>
<p>TABLES:</p>
<p>  Note: For external tables, the only valid privileges are <i>CREATE ANY TABLE, ALTER ANY TABLE, DROP ANY<br>
  TABLE, </i>and<i> SELECT ANY TABLE.</i><br>
  CREATE TABLE Create tables in grantee's schema<br>
  CREATE ANY TABLE Create tables in any schema. The owner of the schema containing the table must have space quota on the tablespace to contain the table.<br>
  ALTER ANY TABLE Alter any table or view in any schema<br>
  BACKUP ANY TABLE Use the Export utility to incrementally export objects from the schema of other users<br>
  DELETE ANY TABLE Delete rows from tables, table partitions, or views in any schema<br>
  DROP ANY TABLE Drop or truncate tables or table partitions in any schema<br>
  INSERT ANY TABLE Insert rows into tables and views in any schema<br>
  LOCK ANY TABLE Lock tables and views in any schema<br>
  SELECT ANY TABLE Query tables, views, or materialized views in any schema<br>
  FLASHBACK ANY TABLE Issue a SQL flashback query on any table, view, or materialized view in any schema. (This privilege is not needed to execute the DBMS_FLASHBACK procedures.)<br>
  UPDATE ANY TABLE Update rows in tables and views in any schema</p>
<p>TABLESPACES:</p>
<p>  CREATE TABLESPACE Create tablespaces<br>
  ALTER TABLESPACE Alter tablespaces<br>
  DROP TABLESPACE Drop tablespaces<br>
  MANAGE TABLESPACE Take tablespaces offline and online and begin and end tablespace backups<br>
  UNLIMITED TABLESPACE Use an unlimited amount of any tablespace. This privilege overrides any specific quotas assigned. If you revoke this privilege from a user, then the user's schema objects remain but further tablespace allocation is denied unless authorized by specific tablespace quotas. You cannot grant this system privilege to roles.</p>
<p>TRIGGERS:</p>
<p>  CREATE TRIGGER Create a database trigger in grantee's schema<br>
  CREATE ANY TRIGGER Create database triggers in any schema<br>
  ALTER ANY TRIGGER Enable, disable, or compile database triggers in any schema<br>
  DROP ANY TRIGGER Drop database triggers in any schema<br>
  ADMINISTER DATABASE TRIGGER Create a trigger on DATABASE. (You must also have the CREATE TRIGGER or CREATE ANY TRIGGER privilege.)</p>
<p>TYPES:</p>
<p>CREATE TYPE Create object types and object type bodies in grantee's schema<br>
  CREATE ANY TYPE Create object types and object type bodies in any schema<br>
  ALTER ANY TYPE Alter object types in any schema<br>
  DROP ANY TYPE Drop object types and object type bodies in any schema<br>
  EXECUTE ANY TYPE Use and reference object types and collection types in any schema, and invoke methods of an object type in any schema if you make the grant to a specific user. If you grant EXECUTE ANY TYPE to a role, then users holding the enabled role will not be able to invoke methods of an object type in any schema.<br>
  UNDER ANY TYPE Create subtypes under any nonfinal object types.</p>
<p>USERS:</p>
<p>CREATE USER Create users. This privilege also allows the creator to: Assign quotas on any tablespace, Set default and temporary tablespaces, Assign a profile as part of a CREATE USER statement<br>
  ALTER USER Alter any user. This privilege authorizes the grantee to:Change another user's password or authentication method, Assign quotas on any tablespace, Set default and temporary tablespaces, Assign a profile and default roles<br>
  BECOME USER Become another user. (Required by any user performing a fulldatabase import.)<br>
  DROP USER Drop users</p>
<p>VIEWS:</p>
<p>  CREATE VIEW Create views in grantee's schema<br>
  CREATE ANY VIEW Create views in any schema<br>
  DROP ANY VIEW Drop views in any schema<br>
  UNDER ANY VIEW Create subviews under any object views<br>
  FLASHBACK ANY TABLE Issue a SQL flashback query on any table, view, or materialized view in any schema. (This privilege is not needed to execute the DBMS_FLASHBACK procedures.)</p>
<p>MISCELLANEOUS:</p>
<p>ANALYZE ANY Analyze any table, cluster, or index in any schema<br>
AUDIT ANY Audit any object in any schema using AUDIT schema_objects statements<br>
COMMENT ANY TABLE Comment on any table, view, or column in any schema<br>
EXEMPT ACCESS POLICY Bypass fine-grained access control<br>
Caution: This is a very powerful system privilege, as it lets the grantee bypass application-driven security policies.<br>
FORCE ANY TRANSACTION Force the commit or rollback of any in-doubt distributed transaction in the local database, Induce the failure of a distributed transaction<br>
FORCE TRANSACTION Force the commit or rollback of grantee's in-doubt distributed transactions in the local database<br>
GRANT ANY OBJECT PRIVILEGE Grant any object privilege. Revoke any object privilege that was granted by the object owner or by some other user with the GRANT ANY OBJECT PRIVILEGE privilege<br>
GRANT ANY PRIVILEGE Grant any system privilege<br>
RESUMABLE Enable resumable space allocation<br>
SELECT ANY DICTIONARY Query any data dictionary object in the SYS schema. This privilege lets you selectively override the default FALSE setting of the O7_DICTIONARY_ACCESSIBILITY initialization parameter.</p>
<p><i> <span class="quote">“A people that values its privileges above it's principles soon loses both” ~ Dwight D. Eisenhower </span></i><br>
<br>
<b>Related Commands:</b><br>
<br>
<a href="audit.html">AUDIT</a><br>
<a href="role_c.html">CREATE ROLE</a> <br>
<a href="user_c.html">CREATE USER</a>  <br>
<a href="grant.html">GRANT</a>  <br>
<a href="revoke.html">REVOKE</a> <b><br>
</b>ORA-01031 - Insufficient privileges </p>
<p><b>Related Views:</b></p>
<p class="code"> <a href="../orad/DBA_COL_PRIVS.html">DBA_COL_PRIVS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_COL_PRIVS.html">ALL_COL_PRIVS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_COL_PRIVS.html">USER_COL_PRIVS</a>&nbsp;<br>
  <a href="../orad/COLUMN_PRIVILEGES.html">COLUMN_PRIVILEGES</a> <br>                      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_COL_PRIVS_MADE.html">ALL_COL_PRIVS_MADE</a>&nbsp;&nbsp;<a href="../orad/USER_COL_PRIVS_MADE.html">USER_COL_PRIVS_MADE</a> <br>                      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_COL_PRIVS_RECD.html">ALL_COL_PRIVS_RECD</a>&nbsp;&nbsp;<a href="../orad/USER_COL_PRIVS_RECD.html">USER_COL_PRIVS_RECD</a> <br>
  <a href="../orad/DBA_ROLE_PRIVS.html">DBA_ROLE_PRIVS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_ROLE_PRIVS.html">USER_ROLE_PRIVS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ROLE_ROLE_PRIVS.html">ROLE_ROLE_PRIVS</a> <br>
  <a href="../orad/DBA_SYS_PRIVS.html">DBA_SYS_PRIVS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_SYS_PRIVS.html">USER_SYS_PRIVS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ROLE_SYS_PRIVS.html">ROLE_SYS_PRIVS</a> <br>                                                                
  <a href="../orad/SESSION_PRIVS.html">SESSION_PRIVS</a> <br>
 <a href="../orad/DBA_TAB_PRIVS.html">DBA_TAB_PRIVS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_TAB_PRIVS.html">ALL_TAB_PRIVS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_TAB_PRIVS.html">USER_TAB_PRIVS<br>
 </a>
 <a href="../orad/TABLE_PRIVILEGES.html">TABLE_PRIVILEGES</a> <br>                                                                
  <a href="../orad/ROLE_TAB_PRIVS.html">ROLE_TAB_PRIVS</a> <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="../orad/ALL_TAB_PRIVS_MADE.html">ALL_TAB_PRIVS_MADE</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_TAB_PRIVS_MADE.html">USER_TAB_PRIVS_MADE</a> <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="../orad/ALL_TAB_PRIVS_RECD.html">ALL_TAB_PRIVS_RECD</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_TAB_PRIVS_RECD.html">USER_TAB_PRIVS_RECD</a> </p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

