---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>FileSystemObject</h1> 
<p>Work with Drives, Folders and Files.</p>
<pre><i>Object heirarchy:
</i>
 FileSystemObject
 FileSystemObject.Drives
 FileSystemObject.Drives.item
 FileSystemObject.GetFolder<br> FileSystemObject.GetFile
</pre>
<p>Once a File System Object has been opened you can use <i>Methods</i> and <i>Properties</i> to work with  folders and files:</p>
<p><b>FileSystemObject </b>Methods<b>: </b></p>
<pre>.BuildPath(<i>strPath</i>, <i>strFileName</i>)
.CopyFile(<i>Source</i>, <i>Dest </i>[,<i>Overwrite</i> <span class="body">(True/False)</span>]
.CopyFolder(<i>Source</i>, <i>Dest </i>[,<i>Overwrite</i> <span class="body">(True/False)</span>]
.CreateFolder(<i>Path</i>)
.CreateTextFile(FileName [,Overwrite <span class="body">(True/False)</span> [, Unicode <span class="body">(True/False)</span>]])
.DeleteFile(<i>FileSpec</i>, <i>Force</i> <span class="body">(True/False)</span>)
.DeleteFolder(<i>FileSpec</i>, <i>Force</i> <span class="body">(True/False)</span>)
.DriveExists(<i>strDrive</i>) <span class="body">(True/False)</span>
.FileExists(<i>strFile</i>) <span class="body">(True/False)</span>
.FolderExists(strFolder) <span class="body">(True/False)</span>
.GetAbsolutePathName(<i>strPath</i>)<span class="body"> - Returns a <i>string</i> with the full drive, path, and file names: Drive:\Path\To\File.Ext</span>
.GetBaseName(<i>strPath</i>)<span class="body"> - Returns a <i>string</i> with the file name, without the extension: <i>File</i></span>
.GetDrive(<i>strDrive</i>) <span class="body">- Returns an <i>object</i> referring to a drive</span>
.GetDriveName(<i>strDrive</i>) <span class="body">- Returns a <i>string</i> referring to a drive. <i>Drive</i>:</span>
.GetExtensionName(<i>strPath</i>)<span class="body"> - Returns a <i>string</i> referring to the extension of the file. <i>Ext</i></span>
.GetFile(<i>strPath</i>) <span class="body">- Returns an <i>object</i> referring to a file.</span>
.GetFileName(<i>strPath</i>) <span class="body">- Returns a <i>string</i> referring to a file. <i>File.Ext</i></span>
.GetFolder(<i>strPath</i>) <span class="body">- Returns an <i>object</i> referring to the path.</span>
.GetParentFolderName(<i>strPath</i>) <span class="body">- Returns a <i>string</i> referring to the path. \Path\To\</span>
.GetSpecialFolderName(<i>FolderType</i>) <span class="body">FolderType=SystemFolder/TemporaryFolder/WindowsFolder</span>
.GetStandardStream(Type [,Unicode <span class="body">(True/False)</span>])
.GetTempName()
.MoveFile(<i>Source</i>, <i>Dest</i>)
.MoveFolder(<i>Source</i>, <i>Dest</i>)
.OpenTextFile(<i>strFile</i> [,IOMode<span class="body"> (8=append, 1=<u>Read</u>, 2=Write)</span> [,Create <span class="body">(True/False)</span> [,Format <span class="body">(0=Ascii, -1=Unicode, -2=default)</span>]]])
</pre>
<p><b>Drive </b>Properties<b>: </b></p>
<pre>AvailableSpace, DriveLetter, DriveType, FileSystem, FreeSpace,IsReady, 
Path, RootFolder, SerialNumber, ShareName, TotalSize, VolumeName</pre>
<p><b>DrivesCollection </b>properties<b>:</b> <span class="code">Count, Item</span></p>
<p><b>File </b>Properties<b>:</b></p>
<pre>Attributes, DateCreated, DateLastAccessed, DateLastModified,Drive,
Name, ParentFolder, Path, ShortName, ShortPath, Size, Type
<span class="body">File Methods:</span> .copy, .Delete, .Move, .OpenAsTextStream
</pre>
<p><b>Folder </b>Properties<b>:</b></p>
<pre>Attributes, DateCreated, DateLastAccessed, DateLastModified,Drive,
Files, IsRootFolder, Name, ParentFolder, Path,
ShortName, ShortPath, Size, SubFolders, Type
<span class="body">Folder Methods:</span> .copy, .CreateTextFile, .Delete, .Move
</pre>
<p><b>FoldersCollection </b>properties<b>:</b> <span class="code">Count, Item</span><br>
<span class="body">FoldersCollection Methods: </span><span class="code">Add</span></p>
<p><b>Examples</b></p>
<p>Create a text file:</p>
<p class="code">Dim objFS, objFile<br>Set objFS = CreateObject("Scripting.FileSystemObject")<br>
Set objFile = objFS.CreateTextFile("C:\work\demo.txt")<br>
objFile.WriteLine("some sample text")</p>
<p>Open an existing file:</p>
<pre>Dim objFS, objFile
Set objFS = CreateObject("Scripting.FileSystemObject")
Set objFile = objFS.GetFile("C:\Work\Sample.xls")
WScript<a href="echo.html">.Echo</a> objFile.DateCreated &amp; objFile.Name
</pre>
<p> Check drive space:</p>
<pre>Dim objFS, objDrive, objDriveCount
Set objFS = CreateObject("Scripting.FileSystemObject")
Set objDriveCount = objFS.Drives
Set objDrive = objFS.Drives("C")
WScript<a href="echo.html">.Echo</a> objDriveCount &amp; " Free Space " &amp; objDrive.AvailableSpace</pre>
<p class="quote"><i>“Is not the whole world a vast house of assignation of which the filing system has been lost?” ~ Quentin Crisp</i></p>
<p><b>Related:</b></p>
<p><a href="stdoutread.html">.ReadLine</a> - Accept user text input<br>
<a href="syntax-errors.html">Syntax - error codes</a><br>
<a href="mapnetworkdrive.html">.MapNetworkDrive</a> - Drive Map<br>
Equivalent PowerShell cmdlet: <a href="../ps/get-item.html">Get-Item</a> / <a href="../ps/get-childitem.html">Get-ChildItem</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="filesystemobject.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

