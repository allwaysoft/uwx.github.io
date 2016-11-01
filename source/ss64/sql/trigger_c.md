---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE TRIGGER</h1>
<p>Create a DML or DDL trigger. </p>
<pre>Syntax for DML Trigger (INSERT, UPDATE, or DELETE)

      CREATE TRIGGER [ <i>schema</i>.] <i>trigger</i>
         ON { <i>table</i> | <i>view</i> } 
            [WITH <i>trigger_option</i> [ ,...n ] ]
               {FOR | AFTER | INSTEAD OF} 
                  { [INSERT] [, ] [UPDATE] [, ] [DELETE] } 
                     [WITH APPEND ] [ NOT FOR REPLICATION]
                        AS { <i>sql_statement</i>  [;] [,...<i>n</i>] | EXTERNAL NAME <i>assembly.class.method</i> [;] }


Syntax for DDL Trigger (CREATE, ALTER, DROP, GRANT, DENY, REVOKE, or UPDATE STATISTICS)

      CREATE TRIGGER <i>trigger</i> 
         ON { ALL SERVER | DATABASE } 
            [WITH <i>trigger_option</i> [,...<i>n</i>] ]
               {FOR | AFTER } { <i>event_type</i> | <i>event_group</i> } [,...<i>n</i>]
                  AS { <i>sql_statement</i>  [;] [,...<i>n</i>] | EXTERNAL NAME <i>assembly.class.method</i>  [;] }

trigger_option:
    [ ENCRYPTION ]
    [ EXECUTE AS <i>Clause</i> ]
</pre>
<p>    Arguments:<br>
  <span class="code"><i>table / view</i></span> - The table or view on which the DML trigger is executed (trigger table.)<br>
<span class="code">DATABASE</span> - Apply the scope of a DDL trigger to the current database.<br>
<span class="code">ALL SERVER</span> - Apply the scope of a DDL trigger to the current server.<br>
<span class="code">WITH ENCRYPTION</span> - Encrypt the text of the CREATE TRIGGER statement.<br>
<span class="code">EXECUTE AS</span> - The security context under which the trigger will execute.<br>
<span class="code">AFTER</span> - The DML trigger will fire after the triggering SQL statement has executed successfully.(default)<br>
<span class="code">INSTEAD OF</span> - The DML trigger is executed <b>instead of </b>the triggering SQL statement.<br>
<span class="code">DELETE / INSERT/UPDATE</span> - The statements that activate the DML trigger.<br>
<span class="code"><i>event_type</i></span> - Name of a T-SQL language event (Create../Alter../Drop..) that, after execution, will cause a DDL trigger to fire.<br>
<span class="code"><i>event_group</i></span> - Name of a predefined grouping of T-SQL language events. Trigger fires after execution of any event in the group.<br>
<span class="code"><i>sql_statement</i></span> - The trigger conditions and actions. </p>
<p>Example</p>
<pre>CREATE TRIGGER MyTrigger<br>ON MySchema.MyTable
AFTER INSERT
AS<br>   EXEC msdb.dbo.sp_send_dbmail<br>        @profile_name = 'Database Administrator',<br>        @recipients = 'name@somewhere.com',<br>        @body = 'email message goes here.',<br>        @subject = 'New record added';<br>GO</pre>
<p class="quote"><i># When they kick at your front door,
  How you gonna come?<br>
  With your hands on your head,
  Or on the trigger of your gun #
  - The Clash,
  London Calling</i></p>
<p><b>Related:</b></p>
<p>  <a href="trigger_a.html">ALTER TRIGGER</a><br>
  <a href="trigger_e.html">ENABLE TRIGGER</a><br>
<a href="trigger_dis.html">DISABLE TRIGGER</a><br>
  <a href="trigger_d.html">DROP TRIGGER</a>  <br>
  sys.triggers  <br>
sp_settriggerorder<br>
<a href="table_c.html">CREATE TABLE</a> <br>
COLUMNS_UPDATED<br>
TRIGGER_NESTLEVEL<br>
EVENTDATA<br>
Equivalent Oracle command: <a href="../ora/trigger_c.html">CREATE TRIGGER</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="trigger_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

