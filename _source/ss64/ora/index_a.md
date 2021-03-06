---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER INDEX</h1> 
<p>Change the properties of an index.<br>
  <br>
Syntax:</p>
<pre>   ALTER INDEX [<i>schema</i>.]<i>index</i> <i>options</i></pre>
<p>Options: <br>
  The <i>options</i> used with this command can be any
   combination of the following</p>
<pre>    ENABLE
    DISABLE
    COALESCE
    UNUSABLE
    RENAME TO <i>new_index_name</i>

    [NO]LOGGING
    PCTFREE int
    PCTUSED int
    INITRANS int
    MAXTRANS int
    STORAGE <a href="clause_storage.html">storage_clause</a>

    ALLOCATE EXTENT [SIZE <i>int</i> K | M]
    ALLOCATE EXTENT [DATAFILE 'filename']
    ALLOCATE EXTENT [INSTANCE <i>int</i>]

    DEALLOCATE UNUSED
    DEALLOCATE UNUSED KEEP <i>int</i> K | M

    [NO]MONITORING USAGE
    UPDATE BLOCK REFERENCES

    <u>NOPARALLEL</u>
    PARALLEL <i>int</i>

    MODIFY PARTITION <i>partition</i> COALESCE
    MODIFY PARTITION <i>partition</i> UNUSABLE
    MODIFY PARTITION <i>partition</i> UPDATE BLOCK REFERENCES
    MODIFY PARTITION <i>partition</i> PARAMETERS ('alter_partition_params')
    MODIFY PARTITION <i>partition</i> <i>partition_options</i>

    <i>partition_options</i>:
        ALLOCATE EXTENT [SIZE <i>int</i> K | M]
        ALLOCATE EXTENT [DATAFILE 'filename']
        ALLOCATE EXTENT [INSTANCE <i>int</i>]
        DEALLOCATE UNUSED
        DEALLOCATE UNUSED KEEP <i>int</i> K | M
        [NO]LOGGING
        PCTFREE <i>int</i>
        PCTUSED <i>int</i>
        INITRANS <i>int</i>
        MAXTRANS <i>int</i>
        STORAGE <a href="clause_storage.html">storage_clause</a>

    RENAME [SUB]PARTITION <i>old_name</i> TO <i>new_name</i>

    DROP PARTITION <i>partition</i>

    SPLIT PARTITION <i>partition</i> AT (<i>value_list</i>)
       [INTO (<i>ptn_descr1</i>, <i>ptn_descr2</i>)] [<u>NOPARALLEL</u>|PARALLEL int]

<i>        ptn_descr</i>:
           PARTITION [<i>partition</i> <i>attrib_options</i>]

    MODIFY DEFAULT ATTRIBUTES [FOR PARTITION <i>partition</i>] <i>attrib_options</i>

<i>    attrib_options:</i>
        TABLESPACE {<i>tablespace</i>|DEFAULT}
        [NO]LOGGING
        PCTFREE <i>int</i>
        PCTUSED <i>int</i>
        INITRANS <i>int</i>
        MAXTRANS <i>int</i>
        STORAGE <a href="clause_storage.html">storage_clause</a>

    MODIFY SUBPARTITION <i>subpartition</i> UNUSABLE
    MODIFY SUBPARTITION <i>subpartition</i> <i>sub_partition_options

    sub_partition_options:</i>
        ALLOCATE EXTENT [SIZE int K | M]
        ALLOCATE EXTENT [DATAFILE 'filename']
        ALLOCATE EXTENT [INSTANCE <i>int</i>]
        DEALLOCATE UNUSED
        DEALLOCATE UNUSED KEEP <i>int</i> K | M

    REBUILD [<i>rebuild_options</i>]
    REBUILD NOREVERSE [<i>rebuild_options</i>]
    REBUILD REVERSE [<i>rebuild_options</i>]
    REBUILD [SUB]PARTITION partition [<i>rebuild_options</i>]

<i>    rebuild_options</i>:
        ONLINE
        COMPUTE STATISTICS
        TABLESPACE tablespace_name
        <u>NOPARALLEL</u>
        PARALLEL <i>int</i>
        [NO]LOGGING
        COMPRESS <i>int</i>
        NOCOMPRESS
        PCTFREE <i>int</i>
        PCTUSED <i>int</i>
        INITRANS <i>int</i>
        MAXTRANS <i>int</i>
        PARAMETERS ('<i>odci_parameters</i>')
        STORAGE <a href="clause_storage.html">storage_clause</a></pre>
<p>More than one ALLOCATE EXTENT option should be specified 
  in the same clause e.g. <br>
  ALLOCATE EXTENT SIZE 200K Datafile 'MyFile.idx'<br>
  <br>
  <i class="quote">"We trained hard, but it seemed that every time we were beginning to 
  form up into teams we would be reorganised. I was to learn later in life that 
  we tend to meet any new situation by re-organising, and a wonderful method it 
  can be for creating the illusion of progress while producing confusion, inefficency 
  and demoralisation" ~ Caius Petronius (A.D. 66)</i><br>
  <br>
<b> Related:</b></p>
<p><a href="analyze.html">ANALYZE</a> INDEX COMPUTE STATISTICS<br>
  <a href="index_c.html">CREATE INDEX</a><br>
<a href="index_d.html">DROP INDEX</a>
</p>
<p class="code">&nbsp;<a href="../orad/DBA_INDEXES.html">DBA_INDEXES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_INDEXES.html">ALL_INDEXES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_INDEXES.html">USER_INDEXES</a> <br>                                                                
 &nbsp; &nbsp;&nbsp;<a href="../orad/INDEX_HISTOGRAM.html">INDEX_HISTOGRAM</a> <br>                                                                
 &nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/INDEX_STATS.html">INDEX_STATS</a> <br> 
 &nbsp;<a href="../orad/DBA_INDEXTYPES.html">DBA_INDEXTYPES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_INDEXTYPES.html">ALL_INDEXTYPES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_INDEXTYPES.html">USER_INDEXTYPES</a> <br> 
 &nbsp;<a href="../orad/DBA_INDEXTYPE_OPERATORS.html">DBA_INDEXTYPE_OPERATORS</a>&nbsp;&nbsp;<a href="../orad/ALL_INDEXTYPE_OPERATORS.html">ALL_INDEXTYPE_OPERATORS</a>&nbsp;&nbsp;<a href="../orad/USER_INDEXTYPE_OPERATORS.html">USER_INDEXTYPE_OPERATORS</a> <br> 
 &nbsp;<a href="../orad/DBA_IND_COLUMNS.html">DBA_IND_COLUMNS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_IND_COLUMNS.html">ALL_IND_COLUMNS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_IND_COLUMNS.html">USER_IND_COLUMNS</a> <br> 
 &nbsp;<a href="../orad/DBA_IND_EXPRESSIONS.html">DBA_IND_EXPRESSIONS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_IND_EXPRESSIONS.html">ALL_IND_EXPRESSIONS</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_IND_EXPRESSIONS.html">USER_IND_EXPRESSIONS</a> <br> 
 &nbsp;<a href="../orad/DBA_IND_PARTITIONS.html">DBA_IND_PARTITIONS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_IND_PARTITIONS.html">ALL_IND_PARTITIONS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_IND_PARTITIONS.html">USER_IND_PARTITIONS</a> <br> 
&nbsp;<a href="../orad/DBA_IND_SUBPARTITIONS.html">DBA_IND_SUBPARTITIONS</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_IND_SUBPARTITIONS.html">ALL_IND_SUBPARTITIONS</a>&nbsp;&nbsp;<a href="../orad/USER_IND_SUBPARTITIONS.html">USER_IND_SUBPARTITIONS</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

