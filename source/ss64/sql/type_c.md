---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE TYPE</h1>
<p>Create an alias data type or  user-defined type (CLR) in the current database.</p>
<pre>Syntax
      CREATE TYPE [<i>schema</i>.] <i>type</i> 
         FROM <i>base_type 
</i>            [ ( <i>precision</i> [ , <i>scale</i> ] )  ]
               [<u>NULL</u> | NOT NULL] [;]

      CREATE TYPE [<i>schema</i>.] <i>type</i>
         EXTERNAL NAME <i>assembly_name</i> [.<i>class</i>] [;]

Key<i>
   type </i>      Name of the type (alias or user-defined) to create.
   base_type  A SQL Server supplied data type on which <i>type </i>is to be based.
   precision  The max no. of decimal digits that can be stored, 
               both to the left and to the right of the decimal point.
   scale      The max no. of decimal digits that can be stored to the
               right of the decimal point ( &lt;= precision)
   NULL       Whether or not the type can hold a null value.
   assembly_name Assembly that references the implementation of the user-defined type
                 in the common language runtime. </pre>
<p>    The 'public' database role is not automatically granted REFERENCES permission on types that are created by using CREATE TYPE. </p>
<p>Example</p>
<pre>CREATE TYPE SS64<br>FROM varchar(25) NOT NULL ;</pre>
<p class="quote"><i>"A chic type, a rough type, an odd type - but never a stereotype"
- Jean-Michel Jarre </i></p>
<p><b>Related commands:</b></p>
<p>  <span class="body">sp_addtype</span><br>
  <a href="type_d.html">DROP TYPE</a>  <br>
  <a href="assembly_c.html">CREATE ASSEMBLY</a><br>
  EVENTDATA()  <br>
Equivalent Oracle command:  CREATE TYPE</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="type_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

