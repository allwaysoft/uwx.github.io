---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER PROCEDURE</h1>
<p>Modify a previously created  stored procedure. </p>
<pre>Syntax
      ALTER PROC[EDURE] [<i>schema</i>.]<i>procedure </i> 
         [ { @<i>parameter</i> [<i>schema</i>.]<i>data_type</i> } 
             [VARYING ] [ = <i>default</i> ] [ OUT[PUT] ]
         ] [ ,...<i>n</i> ] 
         [WITH <i>Option</i> [,...<i>n</i> ]]
      AS { <i>sql_statement</i> [;][ ...<i>n</i> ] | EXTERNAL NAME <i>assembly.class.method</i> }
      [;]

   Options: 
      ENCRYPTION
      RECOMPILE
      <a href="clause_execute_as.html">EXECUTE_AS_Clause</a>
      [FOR REPLICATION]

   sql_statement 
      [BEGIN] <i>statements</i> [END]

Key<i>
   @parameter</i>   A local parameter in the procedure.
   VARYING      The result set contents may vary: a cursor parameter dynamically constructed by the procedure. 
   default      A default value for the parameter. A constant or NULL
   OUTPUT       Indicates an output parameter.
   RECOMPILE    Do not cache a plan for this procedure - compile at run time.
   ENCRYPTION   Encrypt the text of the CREATE PROCEDURE statement.
   FOR REPLICATION Execute only during replication.
   EXTERNAL NAME   Reference to a method of a .NET Framework assembly.
</pre>
<p>Example</p>
<pre>ALTER PROCEDURE Sales.GetPartsOfType<br>    @PartCode nvarchar(50) <br>AS <br>    SELECT PartCode, Description<br>    FROM Sales.parts<br>    WHERE PartCode = @PartCode;<br>GO</pre>
<p class="quote"><i>"Love is not love<br>
Which alters when it alteration finds" ~ Shakespeare (Sonnet 116) </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="procedure_c.html">CREATE PROCEDURE</a><br>
  <a href="execute.html">EXEC</a> - Execute procedure
  <br>
  <a href="procedure_d.html">DROP PROCEDURE</a>  <br>
  sys.sql_modules - view procedure definition <br>
Equivalent Oracle command:  <a href="../ora/procedure_a.html">ALTER PROCEDURE </a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="procedure_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

