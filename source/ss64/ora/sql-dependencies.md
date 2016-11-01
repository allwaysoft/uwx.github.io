---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>dba_dependencies.sql</h1> 
<p>The SQL*Plus script below will display dependencies between objects.</p>
<pre>-- dba_dependencies.sql
-- Jared Still (jaredstill.com)
-- base query from Jacques Kilchoer
-- 11/07/2006 - jkstill - added no_merge hints
--   encapsulated into inline view
--   added 'level'
--   display child DDL time
--
-- call on the command line:
--   @dba_dependencies <i>OWNER OBJECT</i>
-- if not on the command line, user will be
-- prompted for values

prompt Dependencies for Owner?:

col cowner noprint new_value uowner
set term off feed off
select upper('&amp;1') cowner from dual;
set term on feed on

prompt Dependencies for Object?:

col cobject noprint new_value uobject
set term off feed off
select upper('&amp;2') cobject from dual;
set term on feed on

set line 142 pages 60

column display_parent format a58
column display_child format a58
column referenced_owner noprint
column referenced_object noprint
column referenced_type noprint
column owner noprint
column object noprint
column type noprint
column last_ddl_time format a22 head 'CHILD DDL TIME'

undef 1 2

with dependencies as (
        -- top down through the heirarchy
        select /*+ no_merge */
                referenced_type || ' "' || referenced_owner || '"."' ||
                referenced_name || '"' as parent,
                type || ' "' || owner || '"."' || name || '"' as child,
                level hlevel,
                referenced_owner, referenced_name, referenced_type,
                owner, name, type
        from <a href="../orad/DBA_DEPENDENCIES.html">dba_dependencies</a>
        start with
                referenced_owner = '&amp;&amp;uowner'
                and referenced_name = '&amp;&amp;uobject'
        connect by
                referenced_owner = prior owner
                and referenced_name = prior name
                and referenced_type = prior type
        union
        -- bottom up through the heirarchy
        select /*+ no_merge */
                referenced_type || ' "' || referenced_owner || '"."' ||
                referenced_name || '"' as parent,
                type || ' "' || owner || '"."' || name || '"' as child,
                level hlevel,
                referenced_owner, referenced_name, referenced_type,
                owner, name, type
        from <a href="../orad/DBA_DEPENDENCIES.html">dba_dependencies</a>
        start with
                owner = '&amp;&amp;uowner'
                and name = '&amp;&amp;uobject'
        connect by
                owner = prior referenced_owner
                and name = prior referenced_name
                and type = prior referenced_type
        order by 1, 2
)
select lpad(' ',2*d.hlevel,' ') || d.parent display_parent, d.child 
display_child, o.last_ddl_time 
from dependencies d, dba_objects o
where o.owner = d.owner
and o.object_type = d.type
and d.name = o.object_name
order by parent, child
/</pre>
<p>(<a href="http://www.freelists.org/post/oracle-l/Shared-Pool-causing-packages-to-automatically-go-invalid,4">source</a>)</p>
<p><i class="quote">“Faith does not consist in the belief that we are saved; it consists in the belief that we are loved” - Alexandre Vinet</i><br>
<br>
<b>Related:</b></p>
<p><a href="../orad/DBA_DEPENDENCIES.html">DBA_DEPENDENCIES</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="sql-dependencies.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

