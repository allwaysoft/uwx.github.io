---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PATH</h1> 
<p>Display or set a search path for executable files</p>
<pre>Syntax
      PATH <i>pathname</i> [;<i>pathname</i>] [;<i>pathname</i>] [;<i>pathname</i>]...
      PATH
      PATH ;

Key
   pathname : drive letter and/or folder
    ;       : the command 'PATH ;' will clear the path</pre>
<p> PATH without parameters will display the current path.<br>
<br>
The %PATH% environment variable contains a list of folders. When a command is issued at the CMD prompt, the operating system will first look for an executable file in the current folder, if not found it will scan %PATH% to find it. </p>
<p>Use the PATH command to display or change the list of folders stored in the %PATH% <a href="syntax-variables.html">environment variable</a>.</p>
<p>It is important that the pathnames are  delimited with semicolons NOT by quotes.<br>
PowerShell in particular will ignore any path node delimited by double quotes.</p>
<p>To view each item on a single line use this:</p>
<p><span class="code">for %G in ("%path:;=" "%") do @echo %G</span></p>
<p>Or in a batch file: </p>
<p><span class="code">for %%G in ("%path:;=" "%") do @echo %%G</span><br>
<br>
To add items to the current path, include %PATH% in your new setting.<br>
For Example:<br>
<br>
<span class="code">PATH=%PATH%;C:\Program Files\My Application</span></p>
<p>Note you do <a href="http://blogs.msdn.com/oldnewthing/archive/2006/09/29/776926.aspx">not need</a> to surround each part of the path with double quotes, PATH will  automatically treat spaces as part of the filename.</p>
<h2>  Permanent Changes</h2>
<blockquote>
<p>  Changes made using the PATH command are NOT permanent, they apply to the current CMD prompt only and remain only until the CMD window is closed.<br>
  <br>
  To permanently change the PATH use <br>
  <br>
  Control Panel, System, Environment, System Variables<br>
  Control Panel, System, Environment, User Variables<br>
  <br>
The <span class="code">%PATH%</span> variable is set as both a system and user variable, the 2 values are combined to give the PATH for the currently logged in user. This is explained in full by MS Product Support Article <a href="https://support.microsoft.com/kb/100843">Q100843</a></p>
<p>Be wary of using commands like <a href="setx.html">SETX</a> to modify the PATH - the User path can be edited, but the System path remains read-only for most users. If you try to delete an old value and add a new one it is very common for the 'delete' to fail and the 'add' to succeed, resulting in duplicate values being added to the path.</p>
<p> If you are trying to modify the path to add settings for a single application, a reasonably safe method is to use a second variable:<br>
e.g.</p>
<p class="code">SetX MYAPP "C:\Program Files\My App" -m</p>
<p>Now include your new variable in the path like so <span class="code">...C:\Windows\system32;%MYAPP%</span><br>
<br>
You can now easily change that one variable <span class="code">%MYAPP%</span> at any time in the future and the PATH will reflect the new value.</p>
<ul>
<li>Changing a variable in the Control Panel will not affect any CMD prompt that is already open, only new CMD prompts will get the new setting.<br>
</li>
<li>To change a system variable you must have administrator rights<br>
</li>
<li>  If your system has an AUTOEXEC.BAT file then any PATH setting in AUTOEXEC.BAT will also be appended to the %PATH% environment variable. This is to provide compatibility with old installation routines which need to set the PATH. All other commands in AUTOEXEC.BAT are ignored.</li>
</ul>
</blockquote>
<h2><a id="dpath"></a>Dpath</h2>
<blockquote>
<p>DPATH is an undocumented internal utility that allows the <a href="type.html">TYPE</a> command to read data files in specified directories as if they were in in the current directory. On some OS's this is also implemented as the now deprecated APPEND command. The list of directories is held in the %DPATH% <a href="syntax-variables.html">environment variable</a> which works just like the %PATH% variable,   delimited with semicolons (not quotes).  Syntax: <span class="code">DPATH <i>pathname</i>  [;<i>pathname</i>]...</span><br>
<br>
To type any file on the path:</p>
<p class="code">C:\batch\&gt; type win.ini<br>
The system cannot find the file specified.<br>
C:\batch\&gt; dpath %path% <br>
C:\batch\&gt; type win.ini</p>
</blockquote>
<h2><a id="pathname"></a>Terminology - filename, path, pathname</h2>
<blockquote>
<p> For a file stored as:<br>
<span class="code">C:\Program Files\Windows Media Player\wmplayer.exe</span><br>
<br>
The Drive is:<br>
<span class="code">C:</span><br>
<br>
The Filename is:<br>
<span class="code">wmplayer.exe</span></p>
<p>The File Extension is:<br>
<span class="code">.exe</span><br>
<br>
The Path is:<br>
<span class="code">\Program Files\Windows Media Player\</span></p>
<p>The Pathname is<br>
<span class="code">C:\Program Files\Windows Media Player\wmplayer.exe</span></p>
<p>(so Drive + Path + Filename = Pathname)</p>
<p>If a file reference uses only the filename rather than a full pathname, then that will work only if the file is in the <a href="cd.html">current directory</a> or is listed in the PATH.</p>
</blockquote>
<h2>Errorlevels</h2>
<blockquote>
<p> When <a href="cmd.html">CMD Command Extensions</a> are enabled (the default)</p>
<p>If the Path was successfully changed <a href="errorlevel.html">%ERRORLEVEL%</a> = 0<br>
If Path could not be changed = 1</p>
</blockquote>
<p>PATH is an <a href="syntax-internal.html">internal</a> command.<br>
  <br>
  <i class="quote">“If you do not love your job, change it. Instead of pushing paper, push ideas. Instead of sitting down, stand up and be heard. Instead of complaining, contribute. don’t get stuck in a job description” - <a href="http://www.socresonline.org.uk/1/4/1.html">Microsoft job advert</a> </i> <br>
  <br>
  <b>Related:</b><br>
  <br>
  <a href="set.html">SET</a> - Display, set, or remove environment variables.<br>
  PATHMAN -  Resource Kit utility - modify system and user paths. Pathman can resolve duplicate characters, and can improve performance by removing duplicate paths. For details see Pathman.wri in the resource kit.<br>
<a href="http://msdn.microsoft.com/en-us/library/ms682586(v=vs.85).aspx">DLL Search order</a> - SafeDllSearchMode (Win XP) <br>
  <a href="http://www.westmesatech.com/misctools.html">Fix Path</a> - Bill Stewart's path utility<br>
  Powershell: <span class="code">DIR Env:</span> or <span class="code">"$Env:path"<br>
</span><a href="https://en.wikipedia.org/wiki/Path_%28computing%29">Path (computing)</a> - Wikipedia<br>
  Equivalent bash command (Linux):<a href="../bash/export.html"> </a>
  <a href="../bash/env.html">env</a> - Display, set, or remove environment variables - <code>PATH/CDPATH/MAILPATH</code> </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

