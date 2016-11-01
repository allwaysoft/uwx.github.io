---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem --><h1>Globally replace the Font on all Access  forms.
</h1>
<p>In Windows 7,  the  bitmap fonts <i>MS Sans Serif</i>, <i>MS Serif</i> and <i>Courier</i> will not always resize to match the  per-user <a href="../nt/syntax-dpi.html">DPI setting</a>, This is because the size of bitmap fonts is set (and fixed) during setup, which can cause <a href="http://blogs.msdn.com/b/developingfordynamicsgp/archive/2009/11/25/windows-7-bitmap-fonts-and-microsoft-dynamics-gp.aspx">unexpected</a> results.</p>
<p>In Access 2010 ClearType is defaulted to ON even if disabled in the OS (<a href="http://superuser.com/questions/405066/what-are-all-the-places-where-cleartype-can-be-disabled"><span class="code">RespectSystemFontSmooth</span></a>)<br>
In Access 2013 
ClearType is disabled due to incompatibility with tablets (which can be rotated) <br>
 This means that fonts from the ClearType font collection (Calibri, Cambria etc) will not look so good in Office 2013.</p>
<p> To replace the  font used in an existing database, the code below can be used to globally replace with a suitable True Type font such as <i>Microsoft Sans Serif</i>.</p>
<pre>Public Sub UpdateFonts()
On Error Resume Next

' Warning: this will globally change the selected font across all forms in the database.
' It is strongly recommended that you backup the database before running.

Dim dbs As Object
Dim obj As AccessObject
Dim frm As Form
Dim ctl As Control

Set dbs = Application.CurrentProject
' Loop through the AllForms collection.
For Each obj In dbs.AllForms
    DoCmd.OpenForm obj.name, acDesign
    Set frm = Forms(obj.name)
	
    ' Loop through the controls on each form
    For Each ctl In frm.Controls

        ' Change the Font of text boxes etc
        If ctl.ControlType = acTextBox Or ctl.ControlType = acComboBox Or ctl.ControlType = acListBox Or ctl.ControlType = acLabel Then
            If ctl.FontName = "<b>MS Sans Serif</b>" Then
                ctl.FontName = "<b>Microsoft Sans Serif</b>"
            End If
        End If
    Next
    
    Set ctl = Nothing

    ' Save the form
    DoCmd.Close acForm, obj.name, acSaveYes

Next obj
End Sub</pre>
<p class="quote"><i>"Type design is one of the most visible and widespread forms of graphic expression in daily life. It is still not noticed by all readers of newspapers, magazines or books. Nevertheless letter forms reflect the style of a period, and its cultural background. We are surrounded by them everywhere" ~ Hermann Zapf</i></p>
<p><b>Related</b></p>
<p><a href="http://support.microsoft.com/kb/2396756">Q2396756</a> - Applications using Bitmap Font &amp; DPI<br>
<a href="../nt/syntax-dpi.html">DPI display settings </a></p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="syntax-fonts.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

