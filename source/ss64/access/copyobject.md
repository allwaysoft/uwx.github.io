---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.CopyObject</h1>
<p> Copy a database  object to a different Access database or to the same database or Access project (.adp) under a new name.</p>
<pre>Syntax
      DoCmd.CopyObject(<i>DestinationDatabase</i>, <i>NewName</i>,
                     <i>SourceObjectType</i>, <i>SourceObjectName</i>)

Key
   <i>DestinationDatabase</i>
                    A string expression that's the valid path and
                    file name for the destination database
                    To select the current database, leave this argument blank.

                    In an Access project/library (.adp) leave this argument blank.

   <i>NewName</i>          The new name for the object to copy.
                    default=same name as source.

  <i>SourceObjectType</i>  An <a href="acobjecttype.html">AcObjectType</a> constant that represents the type
                    of object to copy.

  <i>SourceObjectName</i>  The name of an object to copy.</pre>
<p> Either <i>destinationdatabase</i> or <i>newname</i>  (or both) must be specified.</p>
<p>If  <i>sourceobjecttype</i> and <i>sourceobjectname</i> arguments are left blank,  Access will copy the object selected in the Database window. </p>
<p>To select an object in the Database window, you can use the SelectObject action or SelectObject method with the <i>In Database Window</i> argument set to Yes (True).</p>
<p><b>Example</b></p>
<p class="code">DoCmd.CopyObject, "T_Patients Copy", acTable, "T_Patients"</p>
<p class="quote"><i>“We could have saved the Earth but we were too damned cheap” ~ Kurt Vonnegut, Jr.</i></p>
<p><b>Related:</b></p>
<p><a href="deleteobject.html">DeleteObject</a> - Delete an object </p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="copyobject.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

