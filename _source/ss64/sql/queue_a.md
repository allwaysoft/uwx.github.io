---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER QUEUE</h1>
<p>Change the properties of a message queue.</p>
<pre>Syntax
      ALTER QUEUE [<i>database</i>.[<i>schema</i>]. | <i>schema</i>.] <i>queue</i>
      [ WITH
        [ STATUS = {<u>ON</u> | OFF}  [ , ] ]
        [ RETENTION = {ON | <u>OFF</u>} [ , ] ] 
        [ ACTIVATION (
           { [ STATUS = {<u>ON</u> | OFF} , ] 
              PROCEDURE_NAME = [<i>database</i>.[<i>schema</i>]. | <i>schema</i>.] <i>stored_procedure</i> ,
              MAX_QUEUE_READERS = <i>max_readers</i> , 
              EXECUTE AS { SELF | '<i>user_name</i>' | OWNER } 
           | DROP }
               ) ]
      ]
        [ ON { <i>filegroup</i> | [DEFAULT] } ] 
      [;]

Key<i>
   queue</i>     The queue to be altered.
   database  Database containing the queue.
   STATUS    The queue is available (ON) or unavailable (OFF).
   RETENTION Retain all queue Messages using the conversations ends.
             (This can reduce performance)
   STATUS    When STATUS = OFF, the queue does not activate the stored procedure.
   MAX_QUEUE_READERS  Instances of the stored procedure that may run at the same time (0-32767)
   SELF      Run the stored procedure as the user who executes the CREATE QUEUE statement.
   OWNER     Run the stored procedure as the owner of the queue.
   DROP      Delete all activation info associated with the queue.</pre>
<p>  When a queue is unavailable, the Service Broker will hold its messages  in the transmission queue for the database.</p>
<p>Example</p>
<pre>ALTER QUEUE MyQueue<br>    WITH ACTIVATION (<br>        PROCEDURE_NAME = MyDatabase.dbo.my_new_proc ,<br>        EXECUTE AS 'MyDbAccount') ;
</pre>
<p class="quote"><i>"An Englishman, even if he is alone, forms
an orderly queue of one" - George Mikes </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="queue_c.html">CREATE QUEUE</a><br>
  <a href="queue_d.html">DROP QUEUE</a>  <br>
  sys.transmission_queue  <br>
Equivalent Oracle command:  <a href="../orap/DBMS_JOB.html">DBMS_JOB</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="queue_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

