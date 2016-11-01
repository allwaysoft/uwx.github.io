---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$SQLTEXT_WITH_NEWLINES </h1>  
 <p> SQL statements including newline characters.</p> 
 
<pre>Columns
   ___________________________
 
   ADDRESS
   HASH_VALUE
   COMMAND_TYPE
   PIECE
   SQL_TEXT</pre>
<p> This view can be used to construct the entire text for each session's actual SQL statement, via adp-gmbh.ch</p>
<pre>set serveroutput on size 1000000

declare
  v_stmt     varchar2(16000);
  v_sql_text v$sqltext_with_newlines.sql_text%type;
  v_sid      v$session.sid%type;
begin
  for r in <b>(</b>
    select 
        sql_text,s.sid
    from 
      v$sqltext_with_newlines t, 
      v$session s 
    where 
      s.sql_address=t.address
    order by s.sid, piece<b>)</b> loop

    v_sid := nvl(v_sid,r.sid);

    if v_sid &lt;&gt; r.sid then
      dbms_output.put_line(v_sid);
      put_line(v_stmt,100);
      v_sid  := r.sid; 
      v_stmt := r.sql_text;
    else
      v_stmt := v_stmt || r.sql_text;
    end if;
    
  end loop;
  dbms_output.put_line(v_sid);
  dbms_output.put_line(v_stmt,100);

end;
/</pre>
<p><b>Related:</b></p><pre><a href="V$OPEN_CURSOR.html">V$OPEN_CURSOR</a> 
<a href="V$SQL.html">V$SQL</a> 
<a href="V$SQLAREA.html">V$SQLAREA</a> 
<a href="V$SQLTEXT.html">V$SQLTEXT</a> 
<a href="V$SQL_BIND_DATA.html">V$SQL_BIND_DATA</a> 
<a href="V$SQL_BIND_METADATA.html">V$SQL_BIND_METADATA</a> 
<a href="V$SQL_CURSOR.html">V$SQL_CURSOR</a> 
<a href="V$SQL_SHARED_MEMORY.html">V$SQL_SHARED_MEMORY</a></pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$SQLTEXT_WITH_NEWLINES.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

