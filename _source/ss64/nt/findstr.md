---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>FINDSTR</h1> 
<p>Search for strings in files.</p>
<pre>Syntax
      FINDSTR <i>string</i>(s) [<i><a href="path.html#pathname">pathname</a></i>(s)]
         [/R] [/C:"<i>string</i>"] [/G:<i>StringsFile</i>] [/F:<i>file</i>] [/D:<i>DirList</i>]
            [/A:<i>color</i>] [/OFF[LINE]] [<i>options</i>]

Key
   <i>string</i>      Text to search for.
   <i>pathname</i>(s) The file(s) to search. 
   /C:<i>string</i>   Use <i>string</i> as a literal search string (may include spaces).
   /R          Use <i>string</i> as a regular expression.
   /G:<i>StringsFile</i>  Get search string from a file (/ stands for console).
   /F:<i>file</i>     Get a list of pathname(s) from a file (/ stands for console).
   /d:<i>dirlist</i>  Search a comma-delimited list of directories.
   /A:<i>color</i>    Display filenames in <a href="color.html">colour</a> (2 hex digits)

<i>options</i> can be any combination of the following switches:<br>
   /I   Case-insensitive search.
   /S   Search subfolders.
   /P   Skip any file that contains non-printable characters
   /OFF[LINE] Do not skip files with the OffLine <a href="attrib.html">attribute</a> set.
   /L   Use search string(s) literally.
   /B   Match pattern if at the Beginning of a line.
   /E   Match pattern if at the END of a line.
   /X   Print lines that match exactly.
   /V   Print only lines that do NOT contain a match.
   /N   Print the line number before each line that matches.
   /M   Print only the filename if a file contains a match.
   /O   Print character offset before each matching line.</pre>
<p> If more than one file is searched, the results will be prefixed with the filename where the text was found.</p>
<h2>Option syntax</h2>
<blockquote>
<p>  Options can be prefixed with either <span class="code">/</span> or <span class="code">-</span><br>
Options can also be concatenated after a single / or -.  However, the concatenated option list can contain at most one  multicharacter option such as <span class="code">OFF</span> or <span class="code">F:</span>, and the multi-character option  must be the last option in the list.</p>
<p>The following are all equivalent ways of expressing a case  insensitive regex search for any line that contains both "hello" and  "goodbye" in any order<br>
</p>
<blockquote>
<p class="code">/i /r /c:"hello.*goodbye" /c:"goodbye.*hello"<br>
-i -r -c:"hello.*goodbye" /c:"goodbye.*hello"<br>
/irc:"hello.*goodbye" /c:"goodbye.*hello"</p>
</blockquote>
</blockquote>
<h2>Regular Expressions (Search for patterns of text)</h2>
<blockquote>
<p>FINDSTR  can use the following metacharacters which have special meaning either as an operator or delimiter.  FINDSTR support for regular expressions is limited
and non-standard, only the following metacharacters are supported:</p>
<pre> .         Wildcard: any character

 *         Repeat: zero or more occurances of previous character or class

 ^         Line position: beginning of line
 $         Line position: end of line

 [class]   Character class: any one character in set
 [^class]  Inverse class: any one character not in set

 [x-y]     Range: any characters within the specified range

 \x        Escape: literal use of metacharacter x

 \&lt;xyz     Word position: beginning of
 xyz\&gt;     Word position: end of word
</pre>
<p>Metacharacters are most powerful when they are used together. 
  For example, the combination of the wildcard character (.) and repeat (*) character 
  is similar in effect to the filename wildcard (*.*)</p>
<pre>.*         Match any string of characters</pre>
<p>The .* expression can be useful within a larger expression, for 
example <span class="code">a.*b</span> will match any string beginning with A and ending with B.</p>
<p>FINDSTR does not support alternation with the pipe character (<span class="code">|</span>) multiple Regular Expressions can be separated with spaces, just the same as separating multiple words (assuming you have not specified a literal search with /C) but this might not be useful if the regex itself contains spaces.</p>
<p>FINDSTR does not support <a href="../ascii.html">UTF-16</a> files, but <a href="find.html">FIND</a> does.</p>
</blockquote> 
<h2>Regex Line Position anchors <span class="code">^</span> and <span class="code">$</span></h2>
<blockquote>
<p>  <span class="code">^</span> matches beginning of input stream as well as any position  immediately following a &lt;LF&gt;. Since FINDSTR also breaks lines  after &lt;LF&gt;, a simple regex of "<span class="code">^</span>" will always match all lines  within a file, even a binary file.</p>
<p><span class="code">$</span> matches any position immediately preceding a &lt;CR&gt;. This means that a regex search string containing <span class="code">$</span> will never match any lines within a Unix style text file, nor will it  match the last line of a Windows text file if it is missing the EOL  marker of &lt;CR&gt;&lt;LF&gt;.</p>
<p>Note - As detailed further below, piped and redirected input to FINDSTR can have &lt;CR&gt;&lt;LF&gt; appended that is not in the source. This can impact a regex search that uses <span class="code">$</span>.</p>
<p>Any search string with characters before <span class="code">^</span> or after <span class="code">$</span> will always fail to find a match.</p>
</blockquote>
<h2>Positional Options <span class="code">/B /E /X</span></h2>
<blockquote>
<p>  The positional options work the same as <span class="code">^</span> and <span class="code">$</span>, except they also work for literal search strings.</p>
<p><span class="code">/B</span> functions the same as ^ at the start of a regex search string.</p>
<p><span class="code">/E</span> functions the same as $ at the end of a regex search string.</p>
<p><span class="code">/X</span> functions the same as having both ^ at the beginning and $ at the end of a regex search string.</p>
<p><a href="findstr-escapes.html">FINDSTR - Escapes and Length limits</a> - 
More detail of how to use search strings that include quotes and/or backslashes. Also maximum Search String length limits vary with OS version.</p>
<p><a href="findstr-linebreaks.html">FINDSTR - Searching across line breaks</a></p>
</blockquote>
<h2>Regex character class ranges [x-y]</h2>
<blockquote>
<p>  Character class ranges do not work as expected. See this Q/A on Stack Exchange: <a href="http://stackoverflow.com/questions/2635740/why-does-findstr-not-handle-case-properly-in-some-circumstances">Why does findstr not handle case properly (in some circumstances)?</a></p>
<p>The problem is FINDSTR does not collate the characters by their byte  code value (commonly thought of as the ASCII code, but ASCII is only  defined from 0x00 - 0x7F). Most regex implementations would treat [A-Z]  as all upper case English capital letters. But FINDSTR uses a collation  sequence that roughly corresponds to how SORT works. So [A-Z] includes  the complete English alphabet, both upper and lower case (except for  "a"), as well as non-English alpha characters with diacriticals.</p>
<p>The FINDSTR regex sorts lower case before upper case. So <span class="code">findstr /nrc:"^[A-a]"</span> will find nothing, but <span class="code">findstr /nrc:"^[a-A]"</span> will match.</p>
</blockquote>
<h2>Default type of search: Literal vs Regular Expression</h2>
<blockquote>
<p> <span class="code">/C:"string"</span> - The default match like  /L literal, but will also accept spaces. </p>
<p><span class="code">/R /C:"Search string"</span> - This will perform a Regex match, but will also accept spaces in the search string.</p>
<p><span class="code">"string argument"</span> - The default depends on the content of the very first search string. (Remember that &lt;space&gt; is used to delimit search strings.)  If the first search string is a valid regular expression that contains  at least one un-escaped meta-character, then all search strings are  treated as regular expressions. Otherwise all search strings are treated  as literals. For example, "51.4 200" will be treated as two regular expressions because the first string contains an un-escaped dot, whereas "200 51.4" will be treated as two literals because the first string does not contain any meta-characters.</p>
<p><span class="code">/G:file</span> - The default depends on the content of the  first non-empty line in the file. If the first search string is a valid  regular expression that contains at least one un-escaped meta-character,  then all search strings are treated as regular expressions. Otherwise  all search strings are treated as literals.</p>
<p>Recommendation - Always explicitly specify <span class="code">/L</span> literal option or <span class="code">/R</span> regular expression option when using "string argument" or <span class="code">/G:file</span>.</p>
</blockquote>
<h2>Searching for Spaces</h2>
<blockquote>
<p>When the search <i>string</i> contains multiple words, separated with 
spaces, then FINDSTR will return lines that contain either word (OR).<br>
A literal search (<span class="code">/C:"<i>string"</i></span>) will reverse this behaviour and allow searching for a phrase or sentence. A literal search also allow searching for punctuation characters.</p>
<p>e.g. a text file <span class="code">Demo.txt</span> contains the following</p>
<p><i>The quick brown fox<br>
The really ^brown^ fox</i></p>
<p> Match the first line with: <span class="code">FINDSTR /L /C:"quick brown" Demo.txt</span><br>
Match the second line with: <span class="code">FINDSTR /L /C:"^brown" Demo.txt</span><br>
</p>
</blockquote>
<h2>FINDSTR Output</h2>
<blockquote>
<p>The format of matching line output from FINDSTR is:</p>
<blockquote>
<p class="code"><i>filename</i>:<i>lineNumber</i>:<i>lineOffset</i>:<i>text</i></p>
</blockquote>
<p>where</p>
<blockquote>
<p><i class="code">fileName</i> = The name of the file containing  the matching line. The file name is not printed if the request was  explicitly for a single file, or if searching piped input or redirected  input. When printed, the fileName will always include any path  information provided. Additional path information will be added if the  /S option is used. The printed path is always relative to the provided  path, or relative to the current directory if none provided.</p>
<p><i class="code">lineNumber</i> = The line number of the  matching line represented as a decimal value with 1 representing the 1st  line of the input. Only printed if /N option is specified.</p>
<p><i class="code">lineOffset</i> = The decimal byte offset of  the start of the matching line, with 0 representing the 1st character of  the 1st line. Only printed if /O option is specified.</p>
<p><i><span class="code">text</span></i> = The binary representation of the  matching line, including any &lt;CR&gt; and/or &lt;LF&gt;. </p>
</blockquote>
<p>Nothing is  left out of the binary output, such that this example that matches all  lines will produce an exact binary copy of the original file:</p>
<pre>FINDSTR "^" FILE &gt;FILE_COPY </pre>
</blockquote>
<h2><a id="script"></a>Using a script file </h2>
<blockquote>
<p>  Multiple search criteria can be specified with a script file <span class="code">/G</span><br>
Multiple FileNames to search can be specified with <span class="code">/F</span><br>
<br>
When preparing a source or script file, place each filename or search criteria on a new line.<br>
If several filenames are to be searched they must all exist or FINDSTR will fail with an error. <br>
<br>
For example: to use the search criteria in Criteria.txt to search the files listed in Files.txt:<br>
<span class="code"><br>
FINDSTR /g:Criteria.txt /f:Files.txt</span></p>
</blockquote>
<h2>Piping and Redirection</h2>
<blockquote>
<p>A text file can be piped or redirected into FINDSTR:</p>
<ul>
<li>Data stream from a pipe <span class="code">TYPE file.txt | FINDSTR "searchString"</span></li>
<li>Stdin via redirection <span class="code">FINDSTR "searchString" &lt;file.txt</span></li>
</ul>
<p>The various data source specifications are mutually exclusive - FINDSTR can only work with one of the following:   filename argument(s), /F:file option, redirected input, or piped input.</p>
<p>Piped and Redirected input can have &lt;CR&gt;&lt;LF&gt; appended:</p>
<ul>
<li>  If the input is piped in and the last character of the stream is not &lt;LF&gt;, then FINDSTR will automatically append &lt;CR&gt;&lt;LF&gt; to the input. (XP, Vista and Windows 7.)</li>
<li>If the input is redirected and the last character of the file is not &lt;LF&gt;, then FINDSTR will automatically append &lt;CR&gt;&lt;LF&gt; to the input. (Vista only), Note that in this case XP and Windows 7/2008 will <b>not</b> alter redirected input which can cause FINDSTR to hang indefinitely.</li>
</ul>
</blockquote>
<h2>Errorlevel</h2>
<blockquote>
<p>FINDSTR will set <span class="code"><a href="errorlevel.html">%ERRORLEVEL%</a></span> as follows:</p>
<blockquote>
<p> <span class="code">0 </span>(False) a match is found in at least one line of at least one file.<br>
<span class="code">1 </span>(True) if a match is not found in any line of any file, (or if the file is not found at all).<br>
<span class="code">2 </span>Wrong syntax     <br>
An  invalid switch will only print an error message in error stream.</p>
</blockquote>
<p class="code">Echo 12G6 |FindStr /R "[0-9]" <br>
If %ERRORLEVEL% EQU 0 echo The string contains one or more  numeric characters</p>
<p class="code">Echo 12G6 |FindStr /R "[^0-9]" <br>
  If %ERRORLEVEL% EQU 0 echo The string contains one or more non numeric characters</p>
</blockquote>
<h2>Bugs</h2>
<blockquote>
<p> On XP and Windows 7. If the last character of a file used as redirected input does not end with &lt;LF&gt;, then FINDSTR will hang indefinitely once it reaches the end of the redirected file.</p>
<p>FINDSTR cannot search for null bytes  commonly found in Unicode files.</p>
<p>Specifying multiple literal search strings can give unreliable results. The following  FINDSTR example fails to find a match, even though it should:</p>
<pre>echo ffffaaa|findstr /l "ffffaaa faffaffddd" </pre>
<p>This bug has been confirmed on Windows Server 2003, Windows XP, Vista, and Windows 7.</p>
<p>Based on experiments, FINDSTR can fail if all of the following conditions are met:</p>
<ul>
<li>The search is using multiple literal search strings</li>
<li>The search strings are of different lengths</li>
<li>A short search string has some amount of overlap with a longer search string</li>
<li>The search is case sensitive (no /I option)</li>
</ul>
<p>It seems to always be the shorter search strings that fails, for more info see: <a href="http://stackoverflow.com/questions/8921253/why-doesnt-this-findstr-example-with-multiple-literal-search-strings-find-a-mat/8921279#8921279">FINDSTR fails to match multiple literal search strings</a></p>
<p>In early versions of <span class="code">FindStr /F:file</span> a path length of more than 80 chars 
will be truncated.</p>
</blockquote>
<h2>Examples:</h2>
<p>Search for "granny" OR "Smith" in the files Apples.txt or Pears.txt </p>
<p><span class="code">FINDSTR "granny Smith" Apples.txt Pears.txt</span> <br>
<br>
Search for "granny Smith" in Contacts.txt (effectively the same as the <a href="find.html">FIND</a> command) </p>
<p><span class="code">FINDSTR /C:"granny Smith" Contacts.txt</span><br>
<br>
Search every file in the current folder and all subfolders for the word "Smith", regardless of upper/lower case, note that <span class="code">/S</span> will only search below the <i>current </i>directory:<br>
<span class="code"><br>
FINDSTR /s /i smith *.*</span></p>
<p>Join two files,  return only the lines that they both have in common:</p>
<p><span class="code">FINDSTR /g:"file1.txt" "file2.txt"</span><br>
<br>
Search all the text files in the current folder for the string "fiona", display the filenames in White on Green. 
</p>
<p><span class="code">FINDSTR /A:2F /C:fiona *.txt</span></p>
<p>Read the file Z:\source.txt, remove all the blank lines and write to Z:\result.txt</p>
<p> <span class="code">FINDSTR /v "^$" Z:\source.txt &gt;Z:\result.txt</span><br>
<br>
To find every line in novel.txt containing the word SMITH, preceeded by any number of spaces, 
and to prefix each line found with a consecutive number:<br>
<span class="code"><br>
FINDSTR /b /n /c:" *smith" novel.txt</span><br>
<br>
Finding a string only if surrounded by the standard <a href="syntax-esc.html">delimiters</a><br>
Find the word "computer", but not the words "supercomputer" 
or "computerise":<br>
<span class="code"><br>
FINDSTR "\&lt;computer\&gt;" C:\work\inventory.txt</span><br>
<br>
Find 
any  words that begin with the letters 'comp', such as 'computerise' 
or 'compete'<br>
<br>
<span class="code">FINDSTR "\&lt;comp.*" C:\work\inventory.txt</span></p>
<p>Find any positive integers in the file sales.txt and include any lines that are a zero (0): <br>
<br>
<span class="code">FINDSTR /r "^[1-9][0-9]*$ ^0$" Sales.txt</span></p>
<p>Credits:<br>
Dave Benham - List of    <a href="http://stackoverflow.com/questions/8844868/what-are-the-undocumented-features-and-limitations-of-the-windows-findstr-comman">undocumented features and limitations of FINDSTR </a>from <a href="http://stackoverflow.com">StackOverflow</a><br>
<span class="quote"><br>
<i>“Twenty years from now, you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines, sail away from the safe harbour. Catch the trade winds in your sails. Explore. Dream. Discover” ~ Mark Twain</i> </span><br>
<br>
<b> Related:</b></p>
<p><a href="findstr-escapes.html">FINDSTR - Escapes and Length limits</a><br>
  <a href="findstr-linebreaks.html">FINDSTR - Searching across line breaks</a>  <br>
  <a href="find.html">FIND</a> - Search for a text string in a file.<br>
  VBScript: <a href="../vb/syntax-replace.html"> Find and Replace
  </a><br>
  Powershell: <a href="../ps/syntax-regex.html">Regular Expressions </a><br>
  Powershell: <a href="../ps/where-object.html">Where-Object </a>- Filter objects passed along the pipeline.<br>
  Equivalent bash command (Linux): <a href="../bash/grep.html">grep</a> - Search file(s) for lines that match a given pattern</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="findstr.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
