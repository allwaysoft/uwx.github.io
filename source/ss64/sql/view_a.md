---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER VIEW</h1>
<p>Modify an existing view.</p>
<pre>Syntax
      ALTER VIEW [<i>schema</i>.] <i>view</i> [ (<i>column </i>[,...<i>n</i>] ) ] 
         [WITH [ENCRYPTION] [SCHEMABINDING] [VIEW_METADATA] [,...<i>n</i>] ] 
            AS <i>select_statement </i>[;]
               [WITH CHECK OPTION]

Key<i>
   view</i>    Name of the view to be altered.

   column  Name to be used for a column in a view. 
           defaults to the same name as the column(s) in the SELECT statement.

   select_statement The view definition. This SELECT statement can reference
                    more than one table/view. Appropriate permissions are required.
                    cannot include a COMPUTE or ORDER BY clause (unless SELECT TOP..)

   CHECK OPTION   Enforce the criteria set with select_statement even
                  when modifying the data. This only affects the view not the underlying table.

   ENCRYPTION     Encrypts the text of the CREATE VIEW statement. 

   SCHEMABINDING  Bind the view to the schema of the underlying table or tables.

   VIEW_METADATA  Return metadata information about the view to client APIs
                  this allows updatable client-side cursors to address the view.</pre>
<p> If a view is dropped and re-created, any GRANT or similar permission statements applied to the view must be re-entered. <br>
Using ALTER VIEW will retain all the permission settings. </p>
<p>Example</p>
<pre>ALTER VIEW emp_view<br>AS <br>SELECT c.FirstName, c.LastName, s.StaffID<br>FROM MySchema.Staff S 
JOIN MySchema.Customers c 
on c.CustomerID = c.StaffID ;<br>GO</pre>
<p class="quote"><i># We always did feel the same, We just saw it from a different point of view# - Bob Dylan, Tangled Up In Blue</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="view_c.html">CREATE VIEW</a><br>
  <a href="view_d.html">DROP VIEW</a><br>
  sp_refreshview  <br>
  sys.views<br>
Equivalent Oracle command:  <a href="../ora/view_a.html">ALTER VIEW </a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="view_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

