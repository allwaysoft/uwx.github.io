---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.Rename</h1>
<p> Carry out the Rename action in Visual Basic.</p>
<pre>Syntax
      DoCmd.Rename(<i>NewName</i>, <i>ObjectType</i>, <i>OldName</i>)

Key
   <i>NewName</i>    The new name for the object, a string expression.

   <i>ObjectType</i> An <a href="acobjecttype.html">AcObjectType</a> constant for the type of object to rename.
              default = acDefault.

   <i>OldName</i>    A valid object name of the type specified by <i>ObjectType</i>, a string expression.</pre>
<p>Use the Rename method to rename a specified database object. </p>
<p>If the ObjectType and OldName arguments are left blank (the default constant, acDefault, is assumed for ObjectType), Microsoft Access will rename the object currently selected in the Database window. </p>
<p>To select an object in the Database window, you can use the SelectObject method with the In Database Window argument set to Yes (True).</p>
<p><b>Examples</b></p>
<p>'Change the table named "Staff table" to T_Employees<br>
<span class="code">DoCmd.Rename "Staff Table", acTable, "T_Employees"</span></p>
<p class="quote"><i class="quote">“We may dig in our heels and dare life never to change, but, all the same, it changes under our feet like sand under the feet of a sea gazer as the tide runs out. Life is forever undermining us. Life is forever washing away our castles, reminding us that they were, after all, only sand and sea water” - Erica Jong (Parachutes and Kisses)</i></p>
<p><b>Related:</b></p>
<p><a href="close.html">Close</a>            - Close a form/report/window.<br>
<a href="deleteobject.html">DeleteObject</a>   - Delete an object.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

