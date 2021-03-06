---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Tablespaces</h1>
<p>A tablespace is a logical storage unit - multiple application objects (e.g. tables) can be stored in one tablespace. A database can contain multiple tablespaces.</p>
<p>A tablespace can be online or offline (not accessible), and can  contain one or more datafiles, each of which can be online or offline.</p>
<p>There is no relationship between a tablespace and a <a href="syntax-secure.html">schema</a>.
Objects in the same schema can be in different tablespaces, and a tablespace can hold objects from different schemas.<br>
<br>
A tablespace can be set to <abbr title="ALTER TABLESPACE tablespace_name READ ONLY"><i>read-only</i></abbr> to eliminate the need to perform backup and recovery of large, static portions of the database.</p>
<p>A tablespace can be set to <abbr title="ALTER TABLESPACE tablespace_name TEMPORARY"><i>temporary </i></abbr>to optimise it for the storage of temporary objects. See the section below for more details.</p>
<p> Tablespaces can use one of two methods to keep track of free and used space:
  <i>Dictionary-managed </i>or <i>Locally managed </i>- this is chosen when the tablespace is created and cannot be altered at a later date.</p>
<h2>Locally Managed Tablespaces (LMT's)</h2>
<p>  When creating an LMT, the storage parameters NEXT, PCTINCREASE, MINEXTENTS, MAXEXTENTS, and DEFAULT STORAGE are not required (invalid syntax).</p>
<p>An LMT can have either <i>uniform </i>or <i>variable </i>extent sizes. Variable extents are determined automatically by the system. When you create the tablespace, the UNIFORM or AUTOALLOCATE (system-managed) clause specifies the type of allocation.</p>
<p>- For uniform extents, you can specify an extent size or use the default size, which is 1 MB. Temporary tablespaces that manage their extents locally can only use this type of allocation. </p>
<p>  - For system-managed extents, you can specify the size of the initial extent and Oracle determines the optimal size of additional extents, with a minimum extent size of 64 KB. This is the default for permanent tablespaces. </p>
<p>When you create a locally managed tablespace using the <a href="tablespace_c.html">CREATE TABLESPACE</a> statement, the SEGMENT SPACE MANAGEMENT clause lets you specify how free and used space within a segment is to be managed:</p>
<blockquote>
<p>SEGMENT SPACE MANAGEMENT MANUAL - Use free lists for managing free space within segments. Free lists are lists of data blocks that have space available for inserting rows. (This is the default.)<br>
<br>
SEGMENT SPACE MANAGEMENT AUTO - Use bitmaps to automatically manage the free space within segments.</p>
<p class="code">CREATE TABLESPACE mytbs1<br>
DATAFILE '/u01/oracle/data/mytbs01.dbf' SIZE 500M<br>
EXTENT MANAGEMENT LOCAL<br>
SEGMENT SPACE MANAGEMENT AUTO;</p>
<p>See also:<br>
<a href="../orap/DBMS_SPACE.html">dbms_space.space_usage</a><br>
<a href="../orad/DBA_TABLESPACES.html">dba_tablespaces</a>.SEGMENT_SPACE_MANAGEMENT</p>
</blockquote>
<h2>Temporary Datafiles</h2>
<p>  Locally managed temporary tablespaces have temporary datafiles (tempfiles), which are similar to ordinary datafiles except that:<br>
- You cannot create a tempfile with the <a href="database_a.html">ALTER DATABASE</a> statement.<br>
- You cannot rename a tempfile or set it to read-only.<br>
  - Tempfiles are always set to NOLOGGING mode.<br>
  - When you create or resize tempfiles, they are not always guaranteed allocation of disk space for the file size specified. On certain file systems (for example,
    UNIX) disk blocks are allocated not at file creation or resizing, but before the blocks are accessed. <br>
  - Tempfile information is shown in the dictionary view <a href="../orad/DBA_TEMP_FILES.html">DBA_TEMP_FILES</a> and the dynamic performance view <a href="../orav/V$TEMPFILE.html">V$TEMPFILE</a>, but not
in <a href="../orad/DBA_DATA_FILES.html">DBA_DATA_FILES</a> or the <a href="../orav/V$DATAFILE.html">V$DATAFILE</a> view.<br>
Note:
this arrangement enables fast tempfile creation and resizing; however, the disk could run of space later when the tempfiles are accessed.</p>
<h2>Dictionary Managed Tablespace</h2>
<p>  A tablespace that uses the data dictionary to manage its extents has incremental extent sizes, which are determined by the storage parameters INITIAL, NEXT, and PCTINCREASE. These can be adjusted to control the extent sizes. When additional space is needed, the NEXT and PCTINCREASE parameters determine the sizes of new extents.</p>
<h2>System Tablespace</h2>
<p>Every Oracle database contains a tablespace named SYSTEM, which Oracle creates automatically when the database is created. <br>
The SYSTEM tablespace always contains the data dictionary tables for the entire database. <br>
All data stored on behalf of stored PL/SQL program units (procedures, functions, packages, and triggers) resides in the SYSTEM tablespace.<br>
The SYSTEM tablespace is always online when the database is open.</p>
<h2>Temporary Tablespace</h2>
<p>  A temporary tablespace is optimised for the storage of temporary data - this is most often required when sorting large data sets.<br>
Specify a default temporary tablespace when  creating a database, using the DEFAULT TEMPORARY TABLESPACE extension to the   <a href="database_c.html">CREATE DATABASE</a> statement.<br>
<br>
If you drop the default temporary tablespace, the SYSTEM tablespace will be used as default temporary tablespace. However this is not recommended and in future releases, might not be allowed. You cannot make the default temporary tablespace permanent or take it offline.</p>
<p>To change a user account to use a non-default temp tablespace<br>
<span class="code"><a href="user_a.html">ALTER USER</a> &lt;user_account&gt; SET TEMPORARY TABLESPACE &lt;temp_tbsp&gt;</span></p>
<h2>Transport of Tablespaces between Databases</h2>
<p>  Moving data by transporting tablespaces can  be orders of magnitude faster than either export/import or unload/load of the same data, because transporting a tablespace involves only copying datafiles and integrating the tablespace metadata. </p>
<p>You can move a tablespace from one Oracle database to another  (without copying or moving any files) or you can clone (copy) the tablespace.</p>
<p>   Transporting tablespaces  will only work between databases on the same platform. </p>
<p>When you transport tablespaces you can also move index data, so you do not have to rebuild the indexes after importing or loading the table data.<br>
<br>
<i class="quote">"…This sense of order is what makes freedom possible. There are 11 political parties in Denmark because there is only one way to eat lunch. You don't eat at your desk or as you drive and you don't walk down the street munching a hot dog. You eat at a table with a napkin and a knife and fork and candle" ~ Garrison Keillor </i><br>
<br>
<b>Related</b></p>
<p><a href="tablespace_c.html">CREATE TABLESPACE</a><br>
<a href="syntax-architecture.html">Oracle Architecture diagram</a> (11g)</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-tablespaces.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

