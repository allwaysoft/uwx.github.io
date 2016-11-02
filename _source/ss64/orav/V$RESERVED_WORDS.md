---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$RESERVED_WORDS </h1>  
 <p> List of reserved words - these words should not be used for object or variable names  you create or passwords you set.</p> 
 
<pre>Columns
   ___________________________
 
   KEYWORD
   LENGTH
   RESERVED
   RES_TYPE   (Y/N Oracle 10g or above)
   RES_ATTR   (Y/N Oracle 10g or above)
   RES_SEMI   (Y/N Oracle 10g or above)
   DUPLICATE  (Y/N Oracle 10g or above)

</pre>
<p><b>Examples</b></p>
<p>-- Find a keyword:</p>
<p>select keyword<br>
  from V$RESERVED_WORDS <br>
  where keyword ='pctincrease';</p>
<p>-- Examples of reserved words/keywords that throw an error:</p>
<p>SQL&gt; create table <b>user</b>(<b>test</b> varchar2(10));<br>
  create table user(test varchar2(10))<br>
  *<br>
  ERROR at line 1:<br>
ORA-00903: invalid table name</p>
<p>SQL&gt; create table <b>test</b>(<b>user</b> varchar2(10));<br>
  create table test(user varchar2(10))<br>
  *<br>
  ERROR at line 1:<br>
  ORA-00904: : invalid identifier<br>
</p>
<p>  -- Examples of reserved words/keywords that <i>don't</i> throw an error :<br>
  -- (these can still cause problems)</p>
<p>SQL&gt; create table <b>type</b>(<b>sid</b> varchar2(3), <b>id</b> varchar2(3),
<b>data</b> varchar2(3));</p>
<p>Table created.</p>
<p><br>
-- Find any tables, views etc with reserved words:</p>
<p>SQL&gt; select 
  object_name,object_type,owner,keyword<br>
  from dba_OBJECTS,v$reserved_words <br>
  where object_name=keyword<br>
  and owner = 'MY_SCHEMA';<br>
  <br>
Table created.<br>
</p>
<p>-- Find columns in any table with reserved words:</p>
<p>select<br>
  table_name,column_name,owner,keyword<br>
  from dba_TAB_COLUMNS,v$reserved_words <br>
  where column_name=keyword<br>
and owner = 'MY_SCHEMA';</p>
<p>If you run the two scripts above against the SYS schema you will find many
  system views and tables which contain reserved words and keywords. This is
  to be expected - they are 'reserved' for use by Oracle.</p>
<p>In addition to  reserved words, Oracle implicitly generates system 
  names beginning with "SYS_"  Oracle discourages you from using this
prefix.</p>
<p><b></b></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

