---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE FUNCTION</h1>
<p>Create a user-defined function.</p>
<pre>Syntax
      CREATE FUNCTION [<i>schema</i>.] <i>function
         </i>( [@<i>parameter</i> [ AS ][<i>type_schema</i>.] <i>parameter_data_type</i>  [= default ]
            [ ,...n ]
           ])
      RETURNS
          <i>r</i><i>eturn_clause...
      </i>[;]


Key:
    <i>function</i>            Name of the function(s) to add.
    <i>schema</i>              The schema to which the user-defined function belongs.
    parameter_data_type The data type of the function (not timestamp) 
                        CLR functions, accept a limited range of data types.</pre> 
<p>The details of the return clause will vary for Scalar, Inline/Multistatement Table-valued,  or CLR functions.<br>
See SQL Server books online or the resources on the<a href="../links/sql.html"> SQL Links</a> page </p>
<p class="quote"><i>"Form follows function" - Louis H. Sullivan </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="function_a.html">ALTER FUNCTION</a><br>
  <a href="function_d.html">DROP FUNCTION</a>  <br>
Equivalent Oracle commands:  <a href="../ora/function_c.html">CREATE FUNCTION </a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="function_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

