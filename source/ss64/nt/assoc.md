---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>ASSOC</h1>  
<p>Display or change the association between a file extension and a fileType</p>
<pre>Syntax
   ASSOC .ext = [<i>fileType</i>]
   ASSOC
   ASSOC .ext
   ASSOC .ext =

Key
    .ext      : The file extension
    fileType  : The type of file </pre>
<p>A file extension is the last few characters in a FileName after the period. <br>
So a file called JANUARY.HTML has the file extension .HTML<br>
<br>
The File extension is used by Windows NT to determine the type of information stored in the file and therefore which application(s) will be able to display 
the information in the file. File extensions are not case sensitive and are not limited to 3 characters.<br><br>
More than one file extension can be associated with the same File Type.<br>
e.g. both the extension .JPG and the extension .JPEG can be associated with the File Type "jpegfile"<br>
<br>
At any one time a given file extension can only be associated with one File Type.<br>
e.g. If you change the extension .JPG so it is associated with the File Type "txtfile" then it's normal association with "jpegfile" will 
disappear. Removing the association to "txtfile" does not restore the association to "jpegfile"<br>
<br>
File Types can be displayed in the Windows Explorer GUI: [View, Options, File Types] however the spelling is usually different to that expected by the ASSOC 
command e.g. the File Type "txtfile" is displayed in the GUI as "Text Document"and "jpegfile" is displayed as "image/jpeg"<br>
<br>
The command ASSOC followed by just a file extension will display the current File Type for that extension. <br>
<br>
ASSOC without any parameters will display all the current file associations.<br>
<br>
ASSOC with ".ext=" will delete the association for that file extension.</p>
<p>Did you leave the <b>Always Use This Program To Open This File </b>option turned on? <br>
To change it back so it prompts you to specify a program each time, just delete the association for that file type<br>
<span class="code">ASSOC .ext=</span><br>
[where .ext is the file extension].<br>
Now when you double-click on a file of that type, the system will ask you what program you want to use. </p>
<p>An association can be set for files with no file extension using<span class="code"> .=</span></p>
<p>e.g. associate all no-extension files with notepad:<br>
<span class="code"> ASSOC .=txtfile</span><br>
<br>
Using the ASSOC command will edit values stored in the registry at HKey_Classes_Root\.&lt;file extension&gt; <br>
Therefore it's possible to use registry permissions to protect a file extension and prevent any file association changes.</p>
<h2>Errorlevels</h2>
<blockquote>
<p> When <a href="cmd.html">CMD Command Extensions</a> are enabled (the default)</p>
<p>If the file  Association was successfully changed <a href="errorlevel.html">%ERRORLEVEL%</a> = 0<br>
If file Association could not be changed = 1</p>
</blockquote>
<p><b>Examples:</b><br>
<br>
View file associations:<br>
<br>
<span class="code">ASSOC .txt<br>
ASSOC .doc<br>
ASSOC &gt;backup.txt</span><br>
<br>
Add file associations:<br>
<br>
<span class="code">ASSOC .txt=txtfile<br>
ASSOC .DIC=txtfile<br>
ASSOC .html=Htmlfile</span><br>
<br>
Delete a file association: <br>
<br>
<span class="code">ASSOC .html=</span></p>
<p>Repair .REG and .EXE file associations:</p>
<p class="code">ASSOC .EXE=exefile<br>
ASSOC .REG=regfile</p>
<p>Digging through CLASSES_ROOT entries often reveals more than one shell for the same application, for example <span class="code">[open]</span> and <span class="code">[play]</span> these can have subtle differences, changing the default action for a file extension can even invoke a different executable.</p>
<p>ASSOC is an <a href="syntax-internal.html">internal</a> command.</p>
<p><i class="quote">“Of all forms of caution, caution in love is perhaps the most fatal to true happiness” - Bertrand Russell </i> <br>
<br>
<b>Related:</b><br>
<br>
<a href="ftype.html">FTYPE</a> - Edit file types (used in file extension associations)<br>
<a href="http://www.dougknox.com/xp/file_assoc.htm">Windows XP default File Associations</a> -
Doug Knox<br>
Batch file to list the <a href="fassoc.txt">application associated</a> with a file extension<br>
<a href="associate.html">ASSOCIAT</a> - One step file association (Resource Kit)<br>
<a href="https://support.microsoft.com/kb/162059">Q162059</a> - Associate Internet Explorer with MS Office files</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="assoc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

