---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>FIND</h1> 
<p>Search for a text string in a file &amp; display all the lines 
where it is found.</p>
<pre>Syntax
      FIND [/V] [/C] [/N] [/I] "<i>string</i>" [<i><a href="path.html#pathname">pathname</a></i>(s)]<br>
Key<br>   "<i>string</i>"   : The text string to find (must be in quotes).<br>
   [<i>pathname</i>] : A drive/file(s) to search (<a href="syntax-wildcards.html">wildcards</a> accepted).

   /V  : Display all lines NOT containing the specified string.<br><br>   /C  : Count the number of lines containing the string.<br>
   /N  : Display Line numbers.<br>
   /I  : Ignore the case of characters when searching for the string.</pre>
<p> If a [pathname] is not specified, FIND will prompt for text input 
or will accept text piped from another command.<br>
(use CTRL-Z to end manual text input)</p>
<p>If  searching for text that contains quote characters <span class="code">"</span> , they should be escaped by doubling to <span class="code">""</span></p>
<p>The FIND command will output a string of 10 dashes <span class="code">----------</span> followed by the filename being searched, followed by any matching lines of text in the file.</p>
<h2>Errorlevel</h2>
<blockquote>
<p>FIND will return an <a href="errorlevel.html">ErrorLevel</a> as follows:</p>
<p> <span class="code">0 </span>String found in at least one of the files.<br>
<span class="code">1 </span>String not found<br>
<span class="code">2 </span> If any  files in the list do not exist or if no files match a wildcard mask. An invalid switch is given.</p>
</blockquote>
<h2>Limitations</h2>
<blockquote>
<p> Find does not support wildcards, use <a href="findstr.html">FINDSTR</a> instead.</p>
<p>Although FIND can be used to scan large files, it will not detect any string 
that is positioned more than 1070 characters along a single line (with no carriage 
return) This makes it of limited use in searching binary or <a href="http://www.theregister.co.uk/2003/04/25/writing_history_with_microsofts_office/">XML</a> file types.</p>
</blockquote>
<p><b>Examples:</b><br>
  <br>
If names.txt contains the following:</p>
<pre>  Joe Bloggs, 123 Main St, Dunoon 
  Arnold Jones, 127 Scotland Street, Edinburgh</pre>
<p> To search for "Jones" in names.txt</p>
<pre>C:\&gt; FIND "Jones" names.txt<br><br>---------- NAMES.TXT
Arnold Jones, 127 Scotland Street, Edinburgh</pre>
<p>If you want to pipe the output from a command into FIND use this syntax</p>
<pre>C:\&gt; TYPE names.txt | FIND "Jones" </pre>
<p>You can also redirect like this</p>
<pre>C:\&gt; FIND /i "Jones" &lt; names.txt &gt;logfile.txt</pre>
<p>To search a folder for files that contain a given search string:</p>
<pre>C:\&gt; FOR %G IN (*.txt) do (find /n /i "SearchWord" "%G")
</pre>
<p>Count the number of lines in a file:</p>
<pre>C:\&gt; TYPE myfile.txt | FIND "" /v /c</pre>
<p class="quote">“Instead of getting married again, I'm going to find a woman I don’t like and just give her a house” - Lewis Grizzard </p>
<b>Related:</b><br>
<br>
<a href="findstr.html">FINDSTR</a> - Search for strings in files, supports regular expressions.<br>
<a href="attrib.html">ATTRIB</a> - Find filename (rather than searching the file contents.)<br>
<a href="syntax-redirection.html">Redirection</a> - Spooling output to a file, piping input.<br>
<a href="syntax-esc.html">Escape chars, delimiters and quotes</a><br>
  <a href="http://www.agentransack.com/">Agent Ransack</a> - Free File Searching Utility.<br>
  Powershell: <a href="../ps/where-object.html">Where-Object </a>- Filter  objects passed along the  pipeline.<br>
Equivalent bash command (Linux): awk/<a href="../bash/awk.html">gawk</a> - Find and Replace text within file(s)
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
