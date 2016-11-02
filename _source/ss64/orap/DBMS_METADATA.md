---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_METADATA</h1> 
<p>Retrieve complete database object definitions (metadata) from 
  the dictionary</p>
<pre>Subprocedures:

OPEN           Specify the type of object to be retrieved, the version of
               its metadata, and the object model. 

SET_FILTER     Specify restrictions on the objects to be retrieved, for example,
               the object name or schema. 

SET_COUNT      Specify the maximum number of objects to be retrieved in a single
               FETCH_xxx call. 

GET_QUERY      Return the text of the queries that are used by FETCH_xxx. 

SET_PARSE_ITEM Enable output parsing by specifying an object attribute to be
               parsed and returned. 

ADD_TRANSFORM  Specify a transform that FETCH_xxx applies to the XML representation
               of the retrieved objects. 

SET_TRANSFORM_PARAM Specify parameters to the XSL-T stylesheet identified by
               transform_handle. 

FETCH_xxx      Return metadata for objects meeting the criteria established by
               OPEN, SET_FILTER, SET_COUNT, ADD_TRANSFORM, and so on. 

CLOSE          Invalidate the handle returned by OPEN and clean up the associated
               state.  

GET_XML and GET_DDL Functions 
               Return the metadata for the specified object as XML or DDL.  
<span class="body"><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b></b><b><br>
Related Commands:<br></b><br></span></pre>
<p><span class="body"><b>Related Views:</b></span> </p>
<pre>                                                                <a href="../orad/DICTIONARY.html">DICTIONARY</a> 
                                                                <a href="../orad/DICT_COLUMNS.html">DICT_COLUMNS</a> 
 <a href="../orad/DBA_OBJECTS.html">DBA_OBJECTS</a>          <a href="../orad/ALL_OBJECTS.html">ALL_OBJECTS</a>          <a href="../orad/USER_OBJECTS.html">USER_OBJECTS</a>         <a href="../orad/SYS_OBJECTS.html">SYS_OBJECTS</a> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_METADATA.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

