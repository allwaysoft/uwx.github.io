---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.DeleteObject</h1>
<p> Delete a database  object.</p>
<pre>Syntax
      DoCmd.DeleteObject(<i>ObjectType</i>, <i>ObjectName</i>)

Key
   <i>ObjectType</i>  An <a href="acobjecttype.html">AcObjectType</a> constant that represents the type
                    of object to copy.

   <i>ObjectName</i>  The name of an object to delete.</pre>
<p> Either <i>destinationdatabase</i> or <i>newname</i>  (or both) must be specified.</p>
<p>If  <i>sourceobjecttype</i> and <i>sourceobjectname</i> arguments are left blank,  Access will delete the object selected in the Database window. </p>
<p>To select an object in the Database window, you can use the SelectObject action or SelectObject method with the <i>In Database Window</i> argument set to Yes (True).</p>
<p><b>Example</b></p>
<p class="code">DoCmd.DeleteObject acTable, "T_Patients"</p>
<p class="quote"><i>“It devoured my paper, it was a really good paper” - <a href="http://en.wikipedia.org/wiki/Ellen_Feiss">Ellen Feiss</a></i></p>
<p><b>Related:</b></p>
<p><a href="copyobject.html">CopyObject</a> - Copy an Access database object<br>
<a href="rename.html">Rename</a> -        Rename an object.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="deleteobject.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

