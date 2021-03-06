---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> ALTER  ASSEMBLY</h1>
<p>Alter  the SQL Server catalog properties of an assembly, add or remove files associated with the assembly. </p>
<pre>Syntax
      ALTER ASSEMBLY <i>assembly</i>
        [FROM <i>client_assembly_specifier</i> | <i>assembly_bits</i> ]
           [WITH <i>assembly_option</i> [ ,...n ] ]
              [DROP FILE { file_name [ ,...n ] | ALL } ]
                 [ADD FILE FROM 
                  { <i>client_file_specifier</i> [ AS <i>file_name</i> ] 
                    | file_bits AS file_name 
                  } [,...n ] 
                 ] [ ; ]
Key:
<i>   assembly
</i>        The assembly you want to modify. (Must already exist)

   <i>client_assembly_specifier</i>
       The network or local location where the assembly being refreshed is located:
        '\\<i>computer</i>\<i>share</i>\[<i>path</i>\]<i>manifest_file_name</i>'
        '[<i>local_path</i>\]<i>manifest_file_name</i>'

<i>   assembly_bits</i>
       The binary value for the assembly:
       {<i>varbinary_literal</i> | <i>varbinary_expression</i>}

<i>   assembly_option</i>
       PERMISSION_SET = { SAFE | EXTERNAL_ACCESS | UNSAFE } 
      | VISIBILITY = { ON | OFF } 
      | UNCHECKED DATA
</pre>
<p><b>Permissions:</b> <br>
  Visibility is required when creating CLR functions, stored procedures,
   triggers, user-defined types, and user-defined aggregate functions.
(but not for calling by other assemblies.)</p>
<p>The UNCHECKED DATA option will postpone consistency checks of table rows until a later time, if any CHECK constraints are present, they are disabled and marked untrusted. Use this feature with great caution. </p>
<p>DROP FILE will remove one or more files associated with the assembly. DROP FILE.. ADD FILE.. will  execute the drop first, this lets you  replace a file with the same name.</p>
<p><b>Examples</b></p>
<pre class="code" id="ctl00_LibFrame_MainContent_ctl10other" space="preserve">ALTER ASSEMBLY MyClass1<br>ADD FILE FROM 'C:\MyProject\ClassASM1.cs';

ALTER ASSEMBLY MyClass2 
FROM 'C:\MyProject\Samples\ClassASM2.dll'</pre>
<p class="quote"><i>"Until all the powerful are just, the weak will be
secure only in the strength of this Assembly" ~ John F. Kennedy, address to the UN
General Assembly</i></p>
<p><b>Related commands:</b><br>
  <br>
  <a href="assembly_c.html">CREATE ASSEMBLY</a><br>
  <a href="assembly_d.html">DROP ASSEMBLY</a><br>
  <a href="function_c.html">CREATE FUNCTION<br>
  </a><a href="procedure_c.html">CREATE PROCEDURE</a><br>
  <a href="trigger_c.html">CREATE TRIGGER</a><br>
  <a href="type_c.html">CREATE TYPE</a><br>
  <a href="aggregate_c.html">CREATE AGGREGATE</a><br>
sys.assembly_files</p>
<p>  <b>Equivalent Oracle command</b>:</p>
<p><a href="../bash/export.html">  </a><a href="../ora/package_c.html">CREATE PACKAGE/BODY</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="assembly_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

