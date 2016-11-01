---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>ECHO</h1> 
<p>Display messages on screen, turn command-echoing on or off. </p>
<pre>Syntax
      ECHO [ON | OFF] 
      ECHO [<i>message</i>] 
Key
   ON      : Display each line of the batch on screen (default)
   OFF     : Only display the command output on screen
   <i>message</i> : a string of characters to display</pre>
<p>Type ECHO without parameters to display the current echo setting 
(ON or OFF).<br>
<br>
In most batch files you will want ECHO OFF, turning it ON can be useful when 
debugging a problematic batch script.<br>
<br>
In a batch file, the @ symbol is the same as ECHO OFF applied to the current 
line only.<br>
<br>
Normally a command is executed and takes effect from the next line onwards, 
@ is a rare example of a command that takes effect immediately.<br>
<br>
Command characters will normally take precedence over the ECHO statement<br>
e.g. The redirection and pipe characters: &amp; &lt; &gt; | ON OFF<br><br>
To override this behaviour you can <a href="syntax-esc.html#escape">escape</a> each command character with ^ as follows:</p>
<pre>   ECHO Nice ^&amp;Easy
   ECHO Salary is ^&gt; Commision
   ECHO Name ^| Username ^| Expiry Date
   ECHO:Off On Holiday</pre>
<h2>Echo text into a FILE</h2>
<blockquote>
<p> The general syntax is<br>   
<span class="code">Echo This is some Text <b>&gt;</b> FileName.txt</span></p>
<p>To avoid extra spaces: <br>
<span class="code">Echo Some more text<b>&gt;</b>FileName.txt</span></p>
</blockquote>
<h2>Echo a Variable</h2>
<blockquote>
<p> To display a department variable:<br>
<br>
<span class="code">ECHO %_department%</span><br>
<br>
An alternative is to separate with<span class="code"> : </span>instead of a space, this has some <a href="https://groups.google.com/forum/?hl=en#!msg/alt.msdos.batch.nt/VhNXmRQEcVk/J3-C8ViGOD0J">performance benefits</a>.</p>
<p><span class="code">ECHO:%_department%</span></p>
<p>If the variable does not exist - ECHO will simply return the text "%_department%"<br><br>
This can be extended to search and <a href="syntax-replace.html">replace</a> parts of a variable or display <a href="syntax-substring.html">substrings</a> of a variable.</p>
</blockquote>
<h2>Echo a file</h2>
<blockquote>
<p> Use the <a href="type.html">TYPE</a> command.</p>
</blockquote>
<h2>Echo a sound</h2>
<blockquote>
<p> The following command in a batch file will trigger the default beep on most PC's</p>
<pre>ECHO ^G</pre>
<p>  To type the <a href="http://en.wikipedia.org/wiki/Bell_character">BELL</a> character use Ctrl-G or 'Alt' key, and 7 on the numeric keypad. (<a href="../ascii.html">ascii</a> 7)<br><br>
Alternatively using Windows Media Player:<br>
<span class="code">START/min "C:\Program Files\Windows Media Player\wmplayer.exe" %windir%\media\chimes.wav</span></p>
</blockquote>
<h2>Echo a blank line</h2>
<blockquote>
<p> The following  in a batch file will produce an empty line:<br>
<span class="code">Echo.</span><br>
or<br>
<span class="code">Echo:</span><br>
The second option is better, because <span class="code">Echo.</span> will search for a file named "echo" if the file is found that raises an error.<br>
If the 'echo' file does not exist then the command does work, but this still makes <span class="code">Echo.</span> slightly slower than<span class="code"> echo:</span></p>
<p>To ECHO text <i>without</i> including a CR/LF (<a href="https://groups.google.com/forum/#!msg/microsoft.public.win2000.cmdprompt.admin/CHS0gwjZQDA/L85IIcFcLgkJ">source</a>)<br>
<span class="code">&lt;nul (set/p _any_variable=string to emit)</span><br>
</p>
</blockquote>
<h2>Echo text into a stream</h2>
<blockquote>
<p>Streams allow one file to contain several separate forks of information (like the macintosh resource fork) <br>
<br>
The general syntax is</p>
</blockquote>
<pre>   Echo Text_String &gt; FileName:StreamName</pre>
<blockquote>
<p>Only the following commands support the File:Stream syntax - ECHO, MORE, FOR<br><br>
Creating streams:</p>
<pre>Echo This is stream1 &gt; myfile.dat:stream1 
Echo This is stream2 &gt; myfile.dat:stream2  </pre>
</blockquote>
<h2> Displaying streams:</h2>
<pre>   More &lt; myfile.dat:stream1 
   More &lt; myfile.dat:stream2
   
   FOR /f "delims=*" %%G in (myfile.dat:stream1) DO echo %%G
   FOR /f "delims=*" %%G in (myfile.dat:stream2) DO echo %%G</pre>
<blockquote>
<p> A data stream file can be successfully copied and renamed despite the fact that most applications and commands will report a zero length file. The file size can be calculated from remaining free space. The file must always reside on an NTFS volume.</p>
</blockquote>
<p>ECHO is an <a href="syntax-internal.html">internal</a> command.</p>
<p class="quote"><i>“The only thing that helps me pass the time away; is knowing I'll be back at Echo Beach some day”  ~ Martha and the Muffins</i></p>
<p> <b>Related:</b><br>
<br><a href="set.html">SET</a> - Create and display environment variables<br>
<a href="type.html">TYPE</a> - Display the contents of a text file<br>
<a href="bigtext.cmd.txt">BigText.cmd</a> - Batch file to echo giant size characters<br>
<a href="net.html">NET SEND</a> %COMPUTERNAME%<br>
<span class="code">SoundRecorder.exe</span> - Record<br>
<a href="https://support.microsoft.com/kb/177795">Q177795</a>  - Large vs Small fonts<br>
<a href="https://support.microsoft.com/kb/901115">Q901115</a> - 
Terminal Services/Citrix client makes beep sounds<br>
Equivalent PowerShell cmdlet: <a href="../ps/write-host.html">Write-Host</a><br>
Equivalent bash command: <a href="../bash/echo.html">echo</a> - Display message on screen</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
