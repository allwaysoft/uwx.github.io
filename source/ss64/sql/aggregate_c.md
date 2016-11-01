---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1> CREATE  AGGREGATE</h1>
<p>Create a user-defined aggregate function. Binding the function will  require   CREATE ASSEMBLY.</p>
<pre>Syntax
      CREATE AGGREGATE [ <i>schema_name</i> . ] <i>aggregate_function_name</i>
          (@param_name &lt;<i>input_sqltype</i>&gt; )
      RETURNS &lt;<i>return_sqltype</i>&gt;
      EXTERNAL NAME <i>assembly_name</i> [ .<i>class_name</i> ]

      &lt;<i>input_sqltype</i>&gt; ::=
              <i>system_scalar_type</i> | { [ <i>udt_schema_name</i>. ] <i>udt_type_name</i> }

      &lt;<i>return_sqltype</i>&gt; ::=
              <i>system_scalar_type</i> | { [ <i>udt_schema_name</i>. ] <i>udt_type_name</i> }

Key
   @param_name         A parameter in the user-defined aggregate (@ as the first character)
                       value supplied by the user when the function is executed.
				  
   system_scalar_type  Any SQL Server system scalar data type
				  
   udt_schema_name     Schema to which the CLR user-defined type belongs, default=current user schema
   
   udt_type_name       CLR user-defined type already created in the current database. 
	
   assembly_name [ .class_name ] 
                       Assembly to bind with the user-defined aggregate function and,
                       optionally, the name of the schema to which the assembly belongs
                       and the assembly class that implements the user-defined aggregate
	                      default class_name=same as aggregate_name.</pre>
<p>
  Examples</p>
<pre>  CREATE AGGREGATE myFunction(@input varchar(500))
  RETURNS varchar(500)
  EXTERNAL NAME [myAssembly].[ss64.StringUtils.myFunction];
  GO</pre>
<p class="quote"><i>"The world 
  is moved along not only by the mighty shoves of its heroes, but also by
the aggregate of the tiny pushes of each honest worker" ~ Helen Keller </i></p>
<p><b>Related commands:</b><br>
  <br>
  <a onclick="javascript:TrackThisClick('ctl00_LibFrame_MainContent_ctl00','ctl00_LibFrame_MainContent_ctl00::ctl00_LibFrame_MainContent_ctl01',this.href);" href="aggregate_d.html">DROP AGGREGATE</a><br>
  <a href="assembly_c.html">CREATE ASSEMBLY</a>  <br>
  <br>
  <b>Equivalent Oracle command</b>:<a href="../bash/export.html"><br>
  <br>
  </a><a href="../ora/function_c.html">CREATE FUNCTION</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="aggregate_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

