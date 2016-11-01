---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Select - Subquery </h1>
<p> A subquery is a query within a query, it can be used to answer multiple-part questions. For example, to find all products made by the same manufacturer as product #45364:  first use a subquery to determine the manufacturer of product #45364, then write the parent SELECT statement to return all the matching products.</p>
<pre>Syntax
      <i>comparison</i> [ANY | ALL | SOME] (<i>sqlstatement</i>)

      <i>expression</i> [NOT] IN (<i>sqlstatement</i>)

      [NOT] EXISTS (<i>sqlstatement</i>)

Key
   <i>comparison</i>   An expression and a comparison operator that compares
                the expression with the results of the subquery.

   <i>expression</i>   An expression for which the result set of the subquery
                is searched.

   <i>sqlstatement</i> A <a href="select.html">SELECT</a> statement, following the same format and rules
                as any other SELECT statement.</pre>
<p>The <span class="code">ALL</span> predicate will retrieve only those records in the main query that satisfy the comparison with ALL the records retrieved by the subquery.</p>
<p>The <span class="code">ANY</span> or <span class="code">SOME</span> predicate, which are synonymous, will retrieve records in the main query that satisfy the comparison with ANY records retrieved by the subquery.</p>
<p>The <span class="code">IN</span> predicate will retrieve only those records in the main query for which some record in the subquery contains an equal value.</p>
<p>The <span class="code">EXISTS</span> predicate is a true/false comparison - whether the subquery returns any records.</p>
<p> Subqueries  require you to write SQL, they can't be written with drag and drop in the QBE grid.</p>
<p><b>Examples</b></p>
<p class="code">SELECT UnitPrice FROM PRODUCTS<br>
WHERE UnitPrice &lt; ALL
(SELECT TOP 5 UnitPrice
FROM Products
ORDER BY UnitPrice DESC)<br>
ORDER BY UnitPrice DESC;</p>
<p class="code">SELECT * <br>
FROM Employees<br>
WHERE EmployeeID IN
(SELECT EmployeeID
FROM Orders 
WHERE CustomerID = 'ALFKI');</p>
<p class="code">' Delete invoices that have been receipted <br>DELETE FROM tblInvoice<br>
WHERE  EXISTS<br>
(SELECT InvoiceID 
FROM tblReceipts
WHERE tblReceipts.InvoiceID = tblInvoice.InvoiceID); </p>
<p class="quote"><i>“We are in the process of creating what deserves to be called the idiot culture. Not an idiot sub-culture, which every society has bubbling beneath the surface and which can provide harmless fun; but the culture itself. For the first time, the weird and the stupid and the coarse are becoming our cultural norm, even our cultural ideal” ~ Carl Bernstein</i></p>
<p><b>Related:</b></p>
<p><a href="avg.html">Avg()</a>  - Average<br>
<a href="delete.html">Delete</a> - Delete records.<br>
<a href="insert.html">Insert</a> - Add records to a table (append query).<br>
<a href="select.html">Select</a> - Retrieve data from one or more tables or queries.<br>
<a href="select-into.html">Select Into</a> - Make-table query.<br>
<a href="transform.html">Transform</a> - Create a crosstab query.<br>
<a href="union.html">Union</a> - Combine the results of two SQL queries.<br>
<a href="update.html">Update</a> - Update existing field values in a table.<br>
<a href="http://allenbrowne.com/subquery-01.html">Allen Browne</a> - SubQuery examples </p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="select-subquery.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

