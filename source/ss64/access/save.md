---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Save</h1>
<p> Save a database object.</p>
<pre>Syntax
      DoCmd.Save(<i>ObjectType, ObjectName</i>)

Key
   <i>ObjectType</i>   An <a href="acobjecttype.html">AcObjectType</a> constant that specifies the
                type of object to save.

   <i>ObjectName</i>   The name of the object to save.</pre>
<p> The specified object must be open for the Save method to have any effect. The save method does not work for objects in Print Preview or Design View. </p>
<p>To save the current record (which is not a database object), the preferred syntax is</p>
<p> <span class="code">If Me.Dirty = True Then Me.Dirty = False </span><br>
or <br>
<span class="code">If Me.Dirty Then Me.Dirty = False</span></p>
<p>Which means "if the record has changes that can be saved, then save them." Setting the me.dirty property will work even if the form does not have focus. Also <span class="code">me.dirty</span> does not throw an error if there are no changes waiting to be saved, so it is  more robust than calling the menu command <span class="code">acCmdSaveRecord</span>.</p>
<p><b>Examples</b></p>
<p class="code">DoCmd.Save acForm, "frmPatients"</p>
<p class="quote"><i>“God save the Queen – Send her victorious – Happy and glorious – Long to reign over us: God save the Queen” ~ British National Anthem.</i></p>
<p><b>Related:</b></p>
<p><span class="code"><a href="runcommand.html">RunCommand</a> acCmdSaveRecord</span><br>
<span class="code">Me.Dirty</span><br>
<a href="undo.html">Undo</a> - Undo the last data edit.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="save.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

