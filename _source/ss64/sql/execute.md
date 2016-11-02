---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>EXECUTE</h1>
<p>Execute a stored procedure or function.</p>
<pre>Syntax
 stored procedure or function

      [EXEC[UTE]
         { 
           [@<i>return_status</i> = ]
              {<i>module</i> [;<i>number </i>] | @<i>module_name_var </i>} 
                [[@<i>parameter </i>= ]
                   {<i>value</i> 
                   | @<i>variable </i>[ OUTPUT ] 
                   | [ DEFAULT ] 
                   }
           ]
             [ ,...<i>n</i> ] [ WITH RECOMPILE ]
         } [;]

Character string
     EXEC[UTE] 
        ( { @<i>string_variable</i> | [ N ]'<i>tsql_string</i>' } [ + ...<i>n</i> ] )
           [ AS { LOGIN | USER } = ' <i>name</i> ' ] [;]

Pass-through command (linked server)
     EXEC[UTE]
        ( { @<i>string_variable</i> | [ N ] '<i>command_string </i>[ ? ] ' } [ + ...<i>n</i> ]
           [ { , { <i>value</i> | @<i>variable</i> [ OUTPUT ] } } [ ...<i>n</i> ] ]
        ) 
        [AS { LOGIN | USER } = '<i>name</i>' ]
           [AT <i>linked_server_name</i> ] [;]

Key:
    return_status    Return status of a module (integer variable) 
    number           int. used to group procedures (optional, deprecated )
    module_name_var  locally defined variable 
    value            If parameter names are not specified, values must be supplied
                     (in the order defined in the module.)
    OUTPUT           The module or command string returns a parameter.
    DEFAULT          The default value of the parameter as defined in the module. 
    name             A valid sysadmin user/login name.  (not a built-in account)
</pre> 
<p><b>Example</b></p>
<pre>-- run procedure passing '5' as a parameter value
EXEC dbo.MyProcedure 5;<br>GO

-- run procedure passing 'ABC764' as a parameter value
EXEC Sales.GetPartsOfType @PartCode = N'ABC764';
GO</pre>
<p class="quote"><i>“The villainy you teach me, I will execute, and it shall go hard but I will better the instruction” ~ Shakespeare (The Merchant of Venice)</i></p>
<p><b>Related:</b></p>
<p>  <a href="executeas.html">EXECUTE AS</a><br>
Equivalent Oracle command: <a href="../ora/exec.html">EXECUTE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="execute.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

