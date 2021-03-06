---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> CREATE  ASSEMBLY</h1>
<p>Upload an assembly that was previously compiled as a .dll file from managed code for use inside an instance of SQL Server.</p>
<p>An Assemby object is a managed application module, other objects may  reference this module -  stored procedures, triggers, CLR functions, user-defined aggregates/types.</p>
<pre>Syntax
      CREATE ASSEMBLY <i>assembly_name</i>
         [ AUTHORIZATION <i>owner_name</i> ]
             FROM { &lt;<i>client_assembly_specifier</i>&gt; | &lt;<i>assembly_bits</i>&gt; [ ,...n ] }
               [WITH PERMISSION_SET = { <u>SAFE</u> | EXTERNAL_ACCESS | UNSAFE } ]
                  [ ; ]

   &lt;client_assembly_specifier&gt; :: =
        '[\\computer_name\]share_name\[path\]manifest_file_name'
        | '[local_path\]manifest_file_name'

   &lt;assembly_bits&gt; :: =
   { varbinary_literal | varbinary_expression }

Key:
   <i>assembly_name</i>  The (unique) name of the assembly.
   <i>owner_name</i>     The usernname or role as owner of the assembly.
   <i>client_assembly_specifier</i>  The local path or network location for the assembly being uploaded.
                  A fixed string or an expression evaluating to a fixed string. (Assembly manifest filename)
   <i>assembly_bits</i>  List of binary values that make up the assembly and it's 
                  dependent assemblies, starting with the root-level assembly.
   PERMISSION_SET SAFE      Restrictive code access permissions, no access to external files/networks.
   PERMISSION_SET EXTERNAL_ACCESS Allow some external system resources, files/networks/Registry
   PERMISSION_SET UNSAFE unrestricted access to resources
</pre>
<p><b>Permissions:</b> <br>
  CREATE ASSEMBLY<br>
  EXTERNAL ACCESS ASSEMBLY for PERMISSION_SET = EXTERNAL_ACCESS<br>
SYSADMIN fixed server role for PERMISSION_SET = UNSAFE</p>
<p><i>owner_name </i>must either be the name of a role of which the current user is a member, or the current user must have IMPERSONATE permission on <i>owner_name</i>. If not specified, ownership is given to the current user.<br>
  <br>
    When accessing <i>client_assembly_specifier</i>, SQL Server will impersonate either the security context of the current Windows login or the security context of the SQL Server service account.</p>
<p><b>Example</b></p>
<pre class="code" id="ctl00_LibFrame_MainContent_ctl10other" space="preserve">CREATE ASSEMBLY MyDemo<br>FROM 'C:\democode\HelloWorld.dll'<br>WITH PERMISSION_SET = SAFE;</pre>
<p class="quote"><i>"Until all the powerful are just, the weak will be secure only in the strength of this Assembly" ~ John F. Kennedy, address to the UN General Assembly</i></p>
<p><b>Related commands:</b><br>
  <br>
  <a href="assembly_a.html">ALTER ASSEMBLY</a><br>
  <a href="assembly_d.html">DROP ASSEMBLY</a><br>
  <a href="function_c.html">CREATE FUNCTION<br>
  </a><a href="procedure_c.html">CREATE PROCEDURE</a><br>
  <a href="trigger_c.html">CREATE TRIGGER</a><br>
  <a href="type_c.html">CREATE TYPE</a><br>
<a href="aggregate_c.html">CREATE AGGREGATE</a></p>
<p>  <b>Equivalent Oracle command</b>:</p>
<p><a href="../bash/export.html">  </a><a href="../ora/package_c.html">CREATE PACKAGE/BODY</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="assembly_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

