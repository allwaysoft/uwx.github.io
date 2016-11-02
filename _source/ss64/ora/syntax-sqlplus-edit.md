---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Editing SQL scripts in SQL*Plus </h1> 
<p> To run your operating system's default text editor from the SQL*Plus command-line type Edit:<br>
<span class="code">SQL &gt; EDIT</span></p>
<p>The  variable <span class="code">_EDITOR</span>, can be used to setup a preferred text editor, for example,  define <a href="../bash/vi.html">vi</a> as the SQL*Plus editor:</p>
<p class="code">DEFINE _EDITOR = vi</p>
<p> or define Metapad.exe as the SQL*Plus editor:</p>
<p class="code">DEFINE _EDITOR = Metapad.exe</p>
<p>Include an editor definition like the above in your user profile (<span class="code">login.sql</span>) or site profile (<span class="code">$ORACLE_HOME/sqlplus/admin/glogin.sql</span>) so that it is always enabled when you start SQL*Plus.</p>
<p>To create a new script with a text editor, enter EDIT followed by the name of the new file:</p>
<p class="code">SQL &gt; EDIT myscript.sql </p>
<p>The new file will be created in the current directory (wherever you started SQL*Plus) <br>
When you save the script with the text editor, it is saved back into the same file.</p>
<p>You must include a semicolon at the end of each SQL command and a slash (/) on a line by itself after each PL/SQL block in the file. </p>
<p>You can include multiple SQL commands and PL/SQL blocks in a script.</p>
<p>In addition to external editors it is also possible to use the (rather limited) set of editing commands within SQL*Plus itself.</p>
<blockquote>
<p><span class="code">A <i>text</i> </span>Append <i>text</i> at the end of the current line</p>
<p><span class="code">C/<i>old</i>/<i>new</i> </span>Change <i>old</i> to <i>new</i> in the current line</p>
<p><span class="code">C/<i>text</i> </span>Delete <i>text</i> from the current line</p>
<p><span class="code">DEL</span> Delete the current line</p>
<p><span class="code">L</span> List all lines in the SQL buffer</p>
<p><span class="code">CLEAR BUFFER</span> Delete all lines</p>
</blockquote>
<p><b>Related</b></p>
<p><a href="syntax-sqlplus.html">SQL*Plus</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-sqlplus-edit.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

