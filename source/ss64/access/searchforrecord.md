---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.SearchForRecord</h1>
<p> Search for a specific record (Access 2007+).</p>
<pre>Syntax
      DoCmd.SearchForRecord(<i>ObjectType, ObjectName,
                            Record, WhereCondition</i>)

Key
   <i>ObjectType</i>  An <a href="acdataobjecttype.html">AcDataObjectType</a> constant that specifies
               the type of database object to search.
               default = acActiveDataObject.<i>

   ObjectName</i>  The database object that contains the record
               to search for.

   <i>Record</i>      An <a href="acrecord.html">AcRecord</a> constant that specifies the 
               starting point and direction of the search.
               default = acFirst.

   <i>WhereCondition</i>
               A string used to locate the record.
               Like a WHERE clause in an SQL statement,
               but without the word WHERE.</pre>
<p> The object specified in the <i>ObjectName</i> argument must be open before this action is run. Otherwise, an error occurs.</p>
<p>If the criteria in the <i>WhereCondition</i> argument are not met, the focus will remain on the current record.</p>
<p>The SearchForRecord method is similar to the FindRecord method, but SearchForRecord has more powerful search features. SearchForRecord supports logical operators, such as &lt;, &gt;, AND, OR, and BETWEEN. The FindRecord method only matches strings that equal, start with, or contain the string being searched for.</p>
<p><b>Example</b></p>
<p>'Find the first matching Order:<br>
<span class="code">DoCmd.SearchForRecord acDataForm, "frmOrders", acFirst, "[OrderID] = " &amp; Me!txtOrderID</span></p>
<p class="quote"><i>“Twenty years from now, you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines, sail away from the safe harbour. Catch the trade winds in your sails. Explore. Dream. Discover” ~ Mark Twain</i></p>
<p><b>Related:</b></p>
<p><a href="gotorecord.html">GoToRecord</a> - Move to a specific record in a dataset.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="searchforrecord.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

