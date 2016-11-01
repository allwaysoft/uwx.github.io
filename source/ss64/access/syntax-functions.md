---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem --><h1>Microsoft Access functions</h1>
<p>A VBA Function can be created either within a single form or report or in a stand-alone module, which can then be called from anywhere in the database. The key difference between a Sub() and a Function() is that functions return a value.</p>
<pre>Syntax
      [Public | Private ] Function <b><i>name</i></b>([<i>arg_List</i>]) 
        <i>code_block</i>
        [<b><i>name</i></b>=<i>expression</i>]
      End Function

Key
   Public      Extend the scope of this function to all procedures in the project.
   Private     Restrict the scope of this function to procedures within the same module.

   <i>name</i>        The name of the function.
 
   <i>arg_List</i>    Argument variabless passed to the function, comma separated.
               By default, each local variable=argument (ByRef)
               To have each local variable=value of the argument prefix the 
               argument with 'ByValue'.
   <i>code_block</i>  Program code
   <i>expression</i>  The value to return.
</pre>
<p> Example<br>
</p>
<pre>Dim intResult as Integer

intResult = DemoFunc(5,10)
msgbox intResult
 
Function DemoFunc(x,y)
    DemoFunc = x + y
End Function</pre>
<p>Most functions can be used in both VBA and in a  query by adding the function (and it's parameters) to the 'field' line in the query design view.</p>
<p>For example using the builtin <a href="format.html">Format()</a> and <a href="datediff.html">DateDiff()</a> functions: </p>
<p><img src="query.png" alt="Select Query" width="889" height="372"></p>
<p>If one or more table columns are used as function parameters, then the function will return a different value for each row of the result set. So the query above will return different results for every row in the table that has a different Purchase_Date.</p>
<p>When a function is used that has no parameters such as <span class="code">Now()</span> then it will return the same value for every row returned by the query.  Some VBA functions will be considered 'unsafe expressions' when used within an SQL query.</p>
<p>You can prefix the expression with a meaningful name or allow Access to assign a name automatically <span class="code">Expr1:</span> , <span class="code">Expr2:</span> ... </p>
<p class="quote"><i>“Measuring programming progress by lines of code is like measuring aircraft building progress by weight” ~ Bill Gates </i></p>
<p><b>Related:</b></p>
<p><a href="format.html">Format</a> - Format a Number/Date/Time.<br>
<a href="now.html">Now</a> - Return the current date and time.<br>
<a href="sum.html">Sum</a> (SQL) - Add up the values in a query result set.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="syntax-functions.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
