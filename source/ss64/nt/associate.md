---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>ASSOCIATE.exe (<a href="../links/windows.html#kits">NT/2000 Resource Kit</a>)</h1> 
<p>One step file association.<br>
  <br>
  This utility does the job of both ASSOC and FTYPE, in one step. ASSOCIATE assigns 
  an extension directly with an executable application. This is done by automatically 
  adding a new FileType to the system registry.</p>
<pre>Syntax
      ASSOCIATE .ext <i>filename</i> [/q /d /f]

Key
   .ext     : Extension to be associated.
   filename : Executable program to associate .ext with.
   /q       : Quiet - Suppress interactive prompts.
   /f       : Force - Force overwrite or delete without questions.
   /d       : Delete - Delete the association.</pre>
<p>A file extension is the last few characters in a FileName after 
  the period. <br>
  So a file called JANUARY.HTML has the file extension .HTML<br>
  <br>
  The File extension is used by Windows NT to determine the type of information 
  stored in the file and therefore which application(s) will be able to display 
  the information in the file. File extensions are not case sensitive and are 
  not limited to 3 characters.<br>
  <br>
  <b>Example: adding a File Association</b><br>
  <br>
  To add the File Type "SQLfile"=Notepad.exe and also set the File Association 
  of .SQL="SQLfile" run this command:<br>
  <br>
  <span class="code">ASSOCIATE .SQL Notepad.exe </span><br>
  <br>
  <b>Example: Removing a File Association</b><br>
  <br>
  <span class="code">ASSOCIATE .SQL /d</span><br>
  <br>
  Note that /d will delete the File Association but will NOT delete the File Type. 
  <br>
  <br>
  File types created by Associate.exe are always given a name in the form xxxfile, 
  where xxx is the file extension. <br>
  <br>
  <i class="quote">“The earth does not belong to man.... man belongs to the earth”  ~ Chief Seattle</i><br>
  <br>
  <b>Related:</b><br>
  <br>
  <a href="assoc.html">ASSOC</a> - Change file extension associations<br>
  <a href="ftype.html">FTYPE</a> - Display or modify file types used in file 
  extension associations<br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="associate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

