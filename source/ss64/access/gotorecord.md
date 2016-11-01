---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.GoToRecord</h1>
<p> Go to a specific record.</p>
<pre>Syntax
      DoCmd.GoToRecord(<i>ObjectType, ObjectName,
                            Record, Offset</i>)

Key
   <i>ObjectType</i> An <a href="acdataobjecttype.html">AcDataObjectType</a> constant that specifies
              the type of database object to search.
              default = acActiveDataObject.<i>

   ObjectName</i> The name of an object of the type selected by
              the <i>objecttype</i> argument.

   <i>Record</i>     An <a href="acrecord.html">AcRecord</a> constant that specifies the 
              starting point and direction of the search.
              default = acFirst.

   <i>Offset</i>     A numeric expression that represents the number
              of records to move forward or backward if you
              specify acNext or acPrevious for the <i>record</i> argument,
              or the record to move to if you specify acGoTo.
              The expression must result in a valid record number.</pre>
<p> The object specified in the <i>ObjectName</i> argument must be open before this action is run. Otherwise, an error occurs.</p>
<p>You can use the GoToRecord method to make a record on a hidden form the current record if you specify the hidden form in the <i>objecttype</i> and <i>objectname</i> arguments.</p>
<p>The SearchForRecord method is similar to the FindRecord method, but SearchForRecord has more powerful search features. SearchForRecord supports logical operators, such as &lt;, &gt;, AND, OR, and BETWEEN. The FindRecord method only matches strings that equal, start with, or contain the string being searched for.</p>
<p><b>Example</b></p>
<p>'Make the 64th record in the form frmEmployees current:<br>
DoCmd.GoToRecord acDataForm, "frmEmployees", acGoTo, 64 </p>
<p class="quote"><i>“Twenty years from now, you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines, sail away from the safe harbour. Catch the trade winds in your sails. Explore. Dream. Discover” ~ Mark Twain</i></p>
<p><b>Related:</b></p>
<p><a href="searchforrecord.html">SearchForRecord</a> - Search for a specific record.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="gotorecord.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

