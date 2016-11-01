---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_XMLSAVE</h1> 
<p>XML to database-type functionality.</p>
<pre>Subprocedures:

newContext Function
              Create a save context and return the context handle. 

closeContext  Close or de-allocate a particular save context. 

setRowTag     Name the tag used in the XML document to enclose the XML elements
              corresponding to database records 

setIgnoreCase 

setDateFormat Describes to the XSU the format of the dates in the XML document. 

setBatchSize  Change the batch size used during DML operations. 

setCommitBatch 
              Set the commit batch size. 

setUpdateColumn 
              Add a column to the update column list. 

clearUpdateColumnList 
             Clears the update column list. 

setKeyColumn 
             Add a column to the key column list. 

clearKeyColumnList 
             Clear the key column list. 

insertXML Function
             Insert the XML document into the table specified at the
             context creation time.   

updateXML Function
             Update the table specified at the context creation time
             with data from the XML document.  

deleteXML Function
             Delete records specified by data from the XML document,
             from the table specified at the context creation time. 
</pre>
<p><span class="body">For full documentation of the packaged procedures 
  above see the Oracle Manual:<br>
  "Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
  <br>
  </b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
  <i>by Steven Feuerstein et al</i><b><br>
  <br>
  </b><i>"Until a business returns a profit that is greater than its cost of capital, 
  it operates at a loss. <br>
  Never mind that it pays taxes as if it had a genuine profit. <br>
  The enterprise still returns less to the economy than it devours in resources...<br>
  Until then it does not create wealth; it destroys it." - Peter Drucker, Harvard 
  Business Review </i><b><br>
  </b></span></p>
<pre><span class="body"><b>Related Commands:<br></b><br></span></pre>
<p><span class="body"><b>Related Packages:</b></span> </p>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

