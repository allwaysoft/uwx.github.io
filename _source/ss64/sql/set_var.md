---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>SET @local_variable</h1>
<p>Set a local variable, previously created with Declare</p>
<pre>Syntax
      SET @<i>local_variable</i> [:: <i>property</i> | <i>field</i> ]
         = <i>expression</i> | <i>udt_name</i> { . | :: } <i>method </i>(<i>argument </i>[ ,...<i>n</i> ] ) 

      SET @<i>cursor_variable</i> = @<i>cursor_variable</i> | <i>cursor</i> 

      SET @<i>cursor_variable</i> =  CURSOR [ FORWARD_ONLY | SCROLL ] 
         [STATIC | KEYSET | DYNAMIC | FAST_FORWARD ] 
            [READ_ONLY | SCROLL_LOCKS | OPTIMISTIC ]  [TYPE_WARNING ] 
               FOR <i>select_statement</i> 
                  [FOR { READ ONLY | UPDATE [ OF <i>column</i> [ ,...n ] ] } ]  
 

Key
   property     Property of a user-defined type.
   field        Public field of a user-defined type.
   udt_name     Name of a Common Language Runtime user-defined type.
   {. | ::}     A method (static :: or non-static .) of a CLR user-define type.
   method       A method of a user-defined type, the arguments modify its state.
   CURSOR       Cursor declaration.
   SCROLL       Allow all cursor fetch options: FIRST, LAST, NEXT, PRIOR, RELATIVE, ABSOLUTE.
   FAST_FORWARD A FORWARD_ONLY, READ_ONLY cursor with optimizations enabled.
   FORWARD_ONLY Only allow FETCH NEXT.
   STATIC       Non-updatable cursor, uses a temporary table in tempdb.
   KEYSET       Fix the membership and order of rows in the cursor.
   DYNAMIC      Reflect all data changes made to the rows.
   SCROLL_LOCKS Lock the rows as they are read into the cursor.
   OPTIMISTIC   Do not lock rows as they are read into the cursor.
   TYPE_WARNING Send a warning message if the cursor is implicitly converted.
   FOR          A SELECT statement to define the cursor result set.
   UPDATE       Define updatable columns within the cursor. default=all cols.</pre>

<p>     In SQL Server 2005, both FAST_FORWARD and FORWARD_ONLY cursor options  can be used in the same DECLARE CURSOR statement.</p>
<p>Example</p>
<pre>DECLARE @myvar char(20);<br>SET @myvar = 'Hello World';<br>SELECT @myvar;<br>GO</pre>
<p class="quote"><i>"Come on baby, light my fire,
Try to set the night on fire" ~ The Doors </i></p>
<p><b>Related commands:</b></p>
<p> DECLARE  <br>
  <a href="execute.html">EXECUTE</a><br>
  <a href="select.html">SELECT</a><br>
  <a href="set.html">SET</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set_var.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

