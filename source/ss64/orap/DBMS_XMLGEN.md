---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_XMLGEN</h1> 
<p>Convert the results of an SQL query to XML format.<br>
  In general, use DBMS_XMLGEN instead of DBMS_XMLQUERY wherever possible. </p>
<pre>Subprocedures:

newContext Function 
             Create a new context handle from a passed-in SQL query.
             The context handle can be used for the rest of the functions. 

setRowTag    Set the name of the element enclosing each row of the result.
             The default tag is ROW. 

setRowSetTag Set the name of the element enclosing the entire result.
             The default tag is ROWSET. 

getXML       Append the XML to the CLOB passed in.
             Use the getNumRowsProcessed function to figure out if any rows were appended. 

getXML Function 
             Returns the XML as a CLOB. 

getNumRowsProcessed Function  
             Get the number of SQL rows that were processed in the last call to getXML. 

setMaxRows 
             Set the maximum number of rows to be fetched each time. 

setSkipRows 
             Set the number of rows to skip every time before generating the XML.
             The default is 0. 

setConvertSpecialChars 
             Sets whether special characters such as $, which are non-XML characters, 
             should be converted to their escaped representation.

useItemTagsForColl 
             Force the use of the collection column name appended with the tag _ITEM
             for collection elements. 

restartQUERY 
             Restart the query to start fetching from the beginning. 

closeContext Close the context and release all resources.  </pre>
<p><span class="body">For full documentation of the packaged procedures 
  above see the Oracle Manual:<br>
  "Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
  <br>
  </b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
  <i>by Steven Feuerstein et al</i><b><br>
  </b></span></p>
<pre><span class="body"><b>Related Commands:<br></b><br></span></pre>
<p><span class="body"><b>Related Packages:</b></span> </p>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_XMLGEN.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

