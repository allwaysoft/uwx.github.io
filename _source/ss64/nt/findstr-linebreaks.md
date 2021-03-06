---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="findstr.html">FINDSTR</a> - Searching across Line Breaks</h1> 
<p> FINDSTR breaks lines immediately after every &lt;LF&gt;. The presence or absence of &lt;CR&gt; has no impact on line breaks.</p>
<p> The<span class="code"> . </span>regex metacharacter does not  match  &lt;CR&gt; or &lt;LF&gt;. But it is possible to search across a line  break using a command line search string. Both the &lt;CR&gt; and  &lt;LF&gt; characters must be matched explictly. If a multi-line match  is found, only the 1st line of the match is printed. FINDSTR then  doubles back to the 2nd line in the source and begins the search all  over again - sort of a "look ahead" type feature.</p>
<p>Assume TEXT.TXT has these contents (could be Unix or Windows style)</p>
<pre>A
A
A
B
A
A </pre>
<p>Then this script</p>
<pre>@echo off
setlocal
::Define LF variable containing a linefeed (0x0A)
set LF=^

::Above 2 blank lines are critical - do not remove

::Define CR variable containing a carriage return (0x0D)
for /f %%a in ('copy /Z "%~dpf0" nul') do set "CR=%%a"

setlocal enableDelayedExpansion
::regex "!CR!*!LF!" will match both Unix and Windows style End-Of-Line
findstr /n /r /c:"A!CR!*!LF!A" TEST.TXT </pre>
<p>gives these results</p>
<pre>1:A
2:A
5:A </pre>
<p>Searching accross line breaks using the /G:<i>FILE</i> option is imprecise  because the only way to match &lt;CR&gt; or &lt;LF&gt; is via a regex  character class range expression that sandwiches the EOL characters. For &lt;LF&gt; (Ascii <span class="code">0x0A</span>) the range is the 3 characters <span class="code">0x09 - 0x0B</span>. For &lt;CR&gt; (Ascii <span class="code">0x0D</span>) the range is the 3 characters <span class="code">0x0C - 0x0E</span> but  the next printable character is a ! (<span class="code">0x21</span>). </p>
<ul>
  <li>
    <p><span class="code">[&lt;TAB&gt;-&lt;0x0B&gt;]</span> matches &lt;LF&gt;, but it also matches &lt;TAB&gt; and &lt;0x0B&gt;</p>
  </li>
  <li>
    <p><span class="code">[&lt;0x0C&gt;-!]</span> matches &lt;CR&gt;, but it also matches &lt;0x0C&gt; and !</p>
    <p>Note - the above are symbolic representations of the regex byte stream since I can't graphically represent the characters.</p>
  </li>
</ul>
<p>Credits:<br>
  Dave Benham - List of    <a href="http://stackoverflow.com/questions/8844868/what-are-the-undocumented-features-and-limitations-of-the-windows-findstr-comman">undocumented features and limitations of FINDSTR </a>from <a href="http://stackoverflow.com/">StackOverflow</a><br>
  <span class="quote"><br>
  <i>“They come from the end of the line, most of 'em. Small towns you never  heard of: Pulaski, Tennessee; Brandon, Mississippi; Pork Van, Utah;  Wampum, Pennsylvania. Two years' high school's about it, maybe if  they're lucky a job waiting for them back at a factory, but most of 'em  got nothing. They're poor, they're the unwanted, yet they're fighting  for our society and our freedom. It's weird, isn't it? They're the  bottom of the barrel and they know it. Maybe that's why they call  themselves grunts, cause a grunt can take it, can take anything. They're  the best I've ever seen, Grandma. The heart &amp; soul.” ~ Platoon</i> </span><br>
<br>
<b> Related:</b><br>
<br>
<a href="findstr.html">FINDSTR</a> - Search for a text string in a file.<br> 
<a href="../ascii.html">ASCII Table</a><br>
Equivalent bash command (Linux): <a href="../bash/grep.html">grep</a> - Search file(s) for lines that match a given pattern</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="findstr-linebreaks.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
