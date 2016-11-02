---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>QGREP (<a href="../links/windows.html#kits">2003 Resource Kit</a>)</h1>
<p>Search file(s) for lines that match a given pattern.</p>
<pre>Syntax
      QGREP [<i>options</i>] [-e <i>string</i>] [-f <i>file</i>] [-i <i>file</i>] [<i>strings</i>] [<i>files</i>]

Key:
      -L     Search strings literally.
      -X     Treat search strings as regular expressions.
      -B     Match pattern at beginning of line. 
      -E     Match pattern at end of line. 
      -y     Treat upper and lower-case as equivalent.

      -x     Print lines that match exactly.
      -l     Print only the file name if the file contains a match.
      -n     Print line numbers before each matching line.
      -O     Print seek offset before each matching line.
      -v     Print only lines that do not contain a match.
      -z     Print matching lines in MSC error message format. 

   -e <i>string</i> Treat the next argument as a literal search string. 
   -f <i>file</i>   Read search strings from file. 
   -i <i>file</i>   Read file list from file. 
   <i>strings</i>   Specifies the search string(s).
   <i>files</i>     The file(s) to search, which can include <a href="syntax-wildcards.html">wildcard</a> characters
             (* and ?)</pre>
<p> <b>Examples:</b><br>
<br>
Find either arg1 or arg2 in FileName.txt: <br>
<span class="code"><br>
qgrep "arg1 arg2" FileName.txt</span><br>
<br>
Find arg1 arg2 in FileName: <br>
<br>
<span class="code">qgrep -e "arg1 arg2" FileName.txt</span><br>
<br>
White space separates search strings unless the argument is prefixed with -e.<br>
So to find either "all" or "out" in x.y, use:<br>
<br>
<span class="code">QGREP "all out" x.y</span><br>
<br>
While to find "all out" use:<br>
<br>
<span class="code">QGREP -e "all out" x.y</span><br>
</p>
<p><i class="quote">grep is simply an odd concatenation of the phrase "grab regular expression"</i><br>
<br>
<b>Related:</b></p>
<p><a href="findstr.html">FINDSTR</a> - Search for strings in files<br>
Powershell: <a href="../ps/where-object.html">Where-Object </a>- Filter objects passed along the pipeline.<br>
Equivalent bash command (Linux): <a href="../bash/grep.html">grep</a> - Search file(s) for lines that match a given pattern</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="qgrep.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

