---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem --><h1>Error: "You tried to assign the null value to a variable that is not a variant data type"</h1>
<p>This error is often produced when working with 'Required' database fields, if the required item is missing/NULL it will raise an engine-level error.</p>
<p>Here is an example of trapping this error, the Form_error routine should be assigned to the <span class="code">On Error</span> event of the Form:</p>
<pre>Private Sub Form_Error(DataErr As Integer, Response As Integer)

Dim strControl As String
 
strControl = Screen.ActiveControl.Name
 
If <b>DataErr = 515</b> Then
    If MsgBox("This field cannot be empty" &amp; vbCrLf &amp; "Press OK to continue (undo) or Cancel to abort completely", vbOKCancel, "Error") = 2 Then
        Me.Undo
    Else
        Me(<a href="syntax-references.html">strControl</a>).Undo
    End If
Response = acDataErrContinue
End If

End Sub</pre>
<p>This error can also be generated by VBA code which assigns values of the wrong data type.</p>
<p class="quote"><i>“Measuring programming progress by lines of code is like measuring aircraft building progress by weight” ~ Bill Gates </i></p>
<p><b>Related</b>:</p>
<p><a href="syntax-null.html">NULL values</a> - Dealing with NULL values.<br>
<a href="syntax-odbc-error.html">Error trapping ODBC errors</a><br>
<a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.<br>
</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>
