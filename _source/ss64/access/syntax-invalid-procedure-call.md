---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem --><h1>Run-time Error 5 "Invalid Procedure Call or Argument"</h1>
<p>In Microsoft Access the error "<i>Invalid Procedure Call or Argumen</i>t" (sometimes followed by a "<i>File Not Found</i>" Error ) can have several possible causes. One or other of the  remedies below will usually resolve this.</p>
<h2>1) VBA References</h2>
<p>These references might need updating when Access has just been upgraded or moved between machines running different versions of Microsoft Access. It is a good idea to document the references that you use.</p>
<p>To see the libraries an Access project has referenced, open any code window (Ctrl+G), and choose <span class="code">Tools | References</span></p>
<p>If any references display "MISSING REFERENCE", make a note of the name, uncheck it and then scroll down to find an equivalent valid reference, most often a slightly newer version.
</p>
<p>The essential references are:</p>
<blockquote>
<p><span class="code">Visual Basic For Applications<br>
<br>
Microsoft Access xx.x Object Library<br>
<br>
Microsoft DAO 3.x Object Library</span><br>
or
<br>
<span class="code">Microsoft Office xx.x Access database engine</span></p>
</blockquote>
<p>Those will allow you to write VBA code, address built-in access objects (forms etc) and read/write to ACCDB/MDB file respectively. Access will not let you remove these 3 libraries from your database.</p>
<p>Other very common references:</p>
<blockquote>
<p><span class="code">OLE Automation</span> (Fonts, Pictures)</p>
<p><span class="code">Microsoft Office xx.x Data Access Components Installed Version<br>
</span>(ActiveX Data Objects/ADO, OLE DB, and ODBC) </p>
</blockquote>
<p>Compile all modules after adjusting references. <br>
</p>
<h2>2) Rebuild</h2>
<p>Create a new database file and import all the objects into it.</p>
<h2>3) Decompile</h2>
<p>Backup the database and <a href="http://trigeminal.com/usenet/usenet004.asp?1033">decompile</a> it with a command like this:</p>
<p><span class="code">"C:\Program Files\Microsoft Office\Office14\MSACCESS.EXE" "C:\work\ss64.mdb" /decompile </span><br>
Adjust the path to match your database and version of Microsoft Office. </p>
<p>If the database contains any startup code hold down the shift key to bypass it.</p>
<p> Once the database has been decompiled, close the Access instance completely.</p>
<p>Open a new Access instance, again hold down the shift key to bypass any startup code, and then compact and repair the database.</p>
<p> You can now recompile the VBA code by opening any module and selecting <span class="code">Debug | Compile</span></p>
<h2>4) Registry</h2>
<p>Close Access, back up and then delete the following registry key:<br>
<span class="code">[HKEY_CURRENT_USER\Software\Microsoft\Office\14.0\Access]</span><br>
Adjust the path to match your version of Microsoft Office.<br>
</p>
<h2>5) Reinstall the latest Microsoft Office service pack.</h2>
<h2>6) Corrupt form</h2>
<p>It is possible for the metadata around Access forms to become  corrupt, make a backup of the entire Access database, delete the last few forms that have been edited (making a careful note of the names). Now copy and paste the form(s) back from the backup copy, n.b. don't use the import feature. This will rebuild the metadata around the form.</p>
<p class="quote"><i>“Measuring programming progress by lines of code is like measuring aircraft building progress by weight” ~ Bill Gates </i></p>
<p><b>Related</b>:</p>
<p><a href="http://support.microsoft.com/kb/825796">Q825796</a> - Access References that you must set (2003)<br></p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="syntax-invalid-procedure-call.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>

