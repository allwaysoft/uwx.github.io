---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>Save and Restore Windows Printer Connections </h1> 
<p>The three scripts below allow you to save the current users Printer Connections (Print Mappings) to a text file, and later to restore those same Printer Connections by reading the text file. The scripts also save and restore the users choice of <i>default</i> printer. </p>
<p>This can be useful if you need to delete the users profile (reprofile) or delete and re-create a user account, or  to copy Printer Connections between user accounts. (The text file is stored in %HOMESHARE% rather than %USERPROFILE% because reprofiling will normally delete everything in %USERPROFILE%.)</p>
<p>[PrintSave.cmd]</p>
<pre>cscript PrintQueues.vbs &gt;"%HOMESHARE%\myprinters.txt"</pre>
<p>[PrintQueues.vbs]</p>
<pre>Option Explicit
On Error Resume Next

Dim strDefaultPrinter,objWMIService,colInstalledPrinters, objPrinter

' 1. Get the name of the default Printer        ###
strDefaultPrinter = DefaultPrinter

' 2. WMI query for current printer connections  ###

strComputer = "."
Set objWMIService = GetObject("winmgmts:" _
&amp; "{impersonationLevel=impersonate}!\\" &amp; strComputer &amp; "\root\cimv2")
Set colInstalledPrinters = objWMIService.ExecQuery _
("Select * from Win32_Printer")

' 3. Main Loop through printer collection       ###

For Each objPrinter in colInstalledPrinters
   If Left(objPrinter.Name, 2) = "\\" Then 'Work only on network printers
      'Echo the printer name
      If strDefaultPrinter = objPrinter.Name Then
        Wscript.Echo objPrinter.Name &amp; " DEFAULT"
      Else Wscript.Echo objPrinter.Name
      End If

   End If 'End of check for network printers
Next 'End of the loop through the printer collection

'-----------------
' Functions
'-----------------
'Return the default printer
Function DefaultPrinter
    Dim strComputer
    Dim Result
    
    strComputer = "."
    Result = ""
    
    Set objWMIService = GetObject("winmgmts:" _
&amp; "{impersonationLevel=impersonate}!\\" &amp; strComputer &amp; "\root\cimv2")
    Set colInstalledPrinters = objWMIService.ExecQuery _
     ("Select * from Win32_Printer")
    For Each objPrinter in colInstalledPrinters
        If objPrinter.Default = True Then
         Result = objPrinter.Name
        End If
    Next
    DefaultPrinter = Result
End Function</pre>
<p>[PrintRestore.cmd]</p>
<pre>@echo off
Setlocal
:: Restore printer drive mappings from myprinters.txt

set _vbs=%temp%\RestorePrinterConnections.vbs
Echo On Error resume Next &gt; %_vbs%
Echo Dim WshNetwork &gt;&gt; %_vbs%
Echo Set WshNetwork = CreateObject("WScript.Network") &gt;&gt; %_vbs%

for /f "usebackq tokens=1,2" %%G in ("%HOMESHARE%\myprinters.txt") do call :map %%G %%H
cscript %_vbs%
Del %_vbs%
goto:eof

:map
Echo %1
Echo WshNetwork.AddWindowsPrinterConnection "%1" &gt;&gt; %_vbs%
if /i "%2"=="Default" echo WshNetwork.SetDefaultPrinter "%1" &gt;&gt; %_vbs%</pre>
<p><b>Example</b></p>
<p>List  the printer connections for the current user:</p>
<p><span class="code">C:\&gt; cscript PrintQueues.vbs</span></p>
<p>Save all network printer connections to the file %HOMESHARE%\myprinters.txt</p>
<p><span class="code">C:\&gt; PrintSave </span></p>
<p>Install a set of   printer connections by reading the file %HOMESHARE%\myprinters.txt</p>
<p class="code">C:\&gt; PrintRestore</p>
<p class="quote"><i>“Do you know the difference between education and experience? Education is when you read the fine print; experience is what you get when you don’t” ~ Pete Seeger</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-qchange.html">qchange.vbs</a> - Re-assign network printer connections<br>
<a href="../nt/printbrm.html">PRINTBRM</a> - Print queue Backup/Recovery</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

