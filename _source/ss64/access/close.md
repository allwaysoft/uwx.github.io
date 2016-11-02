---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.Close</h1>
<p> Close a form, report or window.</p>
<pre>Syntax
      DoCmd.Close(<i>ObjectType</i>, <i>ObjectName</i>, <i>Save</i>)

Key
   <i>ObjectType</i>   An <a href="acobjecttype.html">AcObjectType</a> constant that represents the type of object to close.

   <i>ObjectName</i>   A string expression that's the valid name of
                an object of the type selected by the <i>objecttype</i> argument.

   <i>Save</i>         Whether or not to save changes to the object:
                  <u>acSavePrompt</u> (0)<br>                  acSaveYes (1)	<br>                  acSaveNo (2)
</pre>
<p> The Close method can be used to close either a specified  Access window or the active window (if <i>ObjectType</i> and <i>ObjectName</i>  are left blank).</p>
<p>The <i>Save</i> options will save any design changes that have been made to the form/report, this option does not save the record data.</p>
<p>If a form is closed without first saving the record, Access will attempt to save the record but this can fail - if a required field is missing any changes made to the record will be aborted and no error will be displayed.</p>
<ul>
<li>If the record is explicitly saved (with acCmdSaveRecord) but a required field is missing then an error will be raised.</li>
<li>If the record is explicitly saved via the GUI but a required field is missing then Access displays an alert.</li>
</ul>
<p>A good practice is to  use <span class="code">RunCommand acCmdSaveRecord</span>  immediately before calling .Close. This will cause a run-time error if one or more required fields are Null. This is illustrated in the following example.</p>
<p><b>Examples</b></p>
<p>'Save the current record and close the current window<br>
<span class="code">On Error GoTo Err_handler</span><b><br>
</b><span class="code">DoCmd.RunCommand acCmdSaveRecord <br>
DoCmd.Close</span></p>
<p>'Close the form frmPatientDetails, without saving any form design changes:<br>
<span class="code">DoCmd.Close acForm, "frmPatientDetails", acSaveNo</span></p>
<p>'Close the active object, without saving any form design changes:<br>
<span class="code">DoCmd.Close , , acSaveNo</span></p>
<p>A function to close any form without saving design changes</p>
<pre>Public Sub CloseMe(frmMe As Form)
  DoCmd.Close ObjectType:=acForm, ObjectName:= frmMe.Name, Save:=acSaveNo
End Sub</pre>
<p>' Call this with <span class="code">CloseMe Me</span></p>
<p class="quote"><i>“A good opening and a good ending make for a good film provide they come close together” ~ Federico Fellini</i></p>
<p><b>Related:</b></p>
<p><a href="maximise.html">Maximize</a> - Enlarge the active window.<br>
<a href="minimise.html">Minimize</a> - Minimise a window.<br>
<i>RecordSet</i>.Close - Close a recordset
</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="close.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

