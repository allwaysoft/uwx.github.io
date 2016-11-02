---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>MORE</h1> 
<p>Display output one screen at a time. MORE can be used to run any executable command 
(or batch file) and pause the screen output one screen at a time. MORE can also 
be used to <a href="type.html">TYPE</a> the contents of any file to the screen.</p> 
<pre>Syntax
      <b><i>command</i> | MORE</b> [/E [/C] [/P] [/S] [/Tn] [+n]]

      <b>MORE</b> [/E [/C] [/P] [/S] [/Tn] [+n]] <b>&lt; Pathname</b>

      <b>MORE</b> /E [/C] [/P] [/S] [/Tn] [+n] [<b>Pathname</b>(s)]

Key
   <i>command</i>  : Any executable command or batch file

   Pathname : The file to be displayed. (if more than one separate with spaces)

   /E       : Enable extended features

   /E /C    : Clear screen before displaying page

   /E /P    : Expand FormFeed characters

   /E /S    : Squeeze multiple blank lines into a single line

   /E /Tn   : Expand tabs to n spaces (default 8)

   /E +n    : Start displaying the first file at line n</pre>
<p> You can create an environment variable called <span class="code">%MORE%</span> and use this to supply any of the above switches.</p>
<p>More will convert any TAB characters to spaces in the output.</p>
<p> When MORE is used without any redirection symbols it will display the percent complete 
e.g.<br>
<br>
<span class="code">MORE /E myfile.txt<br>
--More (17%) --</span><br>
<br>
If extended features are enabled, (/E) the following keystrokes can be used at the <span class="code">-- More --</span> prompt:</p>
<pre>  &lt;space&gt;   Display next page
  &lt;return&gt;  Display next line
  Q         Quit
  P n       Display next n lines
  S n       Skip next n lines
  F         Display next file
  =         Show line number
  ?         Show help line</pre>
<p>  In PowerShell use<span class="code"> | <a href="../ps/out-host.html">Out-Host</a> -Paging</span> in preference to MORE, it will start to yield results immediately through the PowerShell pipeline, without waiting first to collect all the incoming data.
</p>
<p><b>Examples</b></p>
<p>Convert a Unix text file (LF line endings) to Windows text file (CR/LF)<br>
</p>
<pre>TYPE UnixFile.txt | MORE /E /P &gt; WindowsFile.txt</pre>
<p><span class="quote"><i>“less is more” ~ <a href="http://www.greatbuildings.com/cgi-bin/gbi.cgi/Lake_Shore_Drive_Apts.html/cid_lake_shore_001.gbi">Ludwig Mies van der Rohe</a> </i> </span><br>
<br>
<b> Related:</b></p>
<p><a href="type.html">TYPE</a> - display files<br>
<a href="echo.html">ECHO</a> - display variables<br>
List - Text Display and Search Tool (<a href="../links/windows.html#kits">Win 
2K ResKit</a>) <br>
Equivalent bash command (Linux): <a href="../bash/more.html">more</a> / <a href="../bash/less.html">less</a> - Display output one screen at a time<br>
Equivalent PowerShell: 
<span class="code"><a href="../ps/out-host.html">Out-Host</a> -Paging</span></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="more.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
