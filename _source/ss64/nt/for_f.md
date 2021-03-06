---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="for.html">FOR</a> /F</h1>
<p>Loop command: against a set of files - conditionally perform a command against each item.</p>
<pre>Syntax
        FOR <b>/F</b> ["<i>options</i>"] %%<i>parameter</i> IN (<i>filenameset</i>) DO <i>command</i> 
      
        FOR <b>/F </b>["<i>options</i>"] %%<i>parameter</i> IN ("Text string to process") DO <i>command</i>

Key   
   options:
      delims=<i>xxx </i>&nbsp; The delimiter character(s) (default = a space)

      skip=<i>n</i>       A number of lines to skip at the beginning of the file. 
                    (default = 0)
 
      eol=;        Character at the start of each line to indicate a comment 
                   The default is a semicolon ; 

      tokens=<i>n</i>     Specifies which numbered items to read from each line 
                  (default = 1)

      usebackq     Use the alternate quoting style:                        
                   - Use double quotes for long file names in "<i>filenameset</i>".
                   - Use single quotes for 'Text string to process'
                   - Use back quotes for `<a href="for_cmd.html">command to process</a>`

   <i>Filenameset</i>    A set of one or more files.

   <i>command</i>        The command to carry out, including any                  
                  command-line parameters.
  
   %%<i>parameter</i>    A replaceable parameter:               
                  in a batch file use %%G (on the command line %G)</pre>
<p>FOR /F processing of a text file consists of reading the file, one line of text at a time and then breaking the line up into individual items of data called 'tokens'. The DO command is then executed  with the parameter(s) set to the token(s) found.<br>
<br>
By default, /F breaks up the line at each blank space <span class="code">" "</span>, and any blank lines are skipped, this default parsing behavior can be changed by applying one or more of the <span class="code">"<i>options</i>"</span> parameters. 
The option(s) must be contained within "a pair of quotes"</p>
<p>Within a FOR loop the visibility of FOR variables is controlled via SETLOCAL <a href="delayedexpansion.html">EnableDelayedExpansion</a></p>
<h2>usebackq</h2>
<blockquote>
<p>This option is useful when dealing with a <i>filenameset</i> that is a long filename containing spaces, it allows you to put double quotes around the filename.
The backquote character <span class="code">`</span> is just below the ESC key on most keyboards.<br>
Filenames which don't contan spaces can still be referenced without using  quotes.</p>
<p>Usebackq can be abbreviated to <span class="code">useback</span> (undocumented.)</p>
</blockquote>
<h2>Skip</h2>
<blockquote>
<p>SKIP will skip processing a number of lines from the beginning of the file.<br>
SKIP includes empty lines, but after the SKIP is complete, FOR /F ignores (does not iterate) empty lines.</p>
</blockquote>
<h2>eol</h2>
<blockquote>
<p>The default end-of-line character is a semicolon ';' when the FOR command reads a text file (or even a character string), any line that STARTS with the eol character will be ignored. In other words it is treated as a comment. <br>
Use <span class="code"> eol=X</span> to change the eol character to X. </p>
<p>Often you will want to turn this feature off so that every line of your data file is processed,  in theory "eol=" should turn this feature off, but in practice this fails to work correctly - it will set eol to whatever the next character is, often the quote or space character. One workaround  is to set eol to some unusual character that you don’t expect to ever encounter in the data file e.g. <span class="code">"eol=€"</span> or <span class="code">"eol=¬"</span>. Another method is to   escape every <a href="syntax-esc.html#delimiters">delimiter</a><span class="code"> For /f tokens^=*^ delims^=^ eol^= %%a in (file.txt) do...</span> (see forum for a <a href="http://ss64.org/viewtopic.php?id=1544">discussion</a> of this)</p>
</blockquote>
<h2>Delims</h2>
<blockquote>
<p>More than one delimiter can be specified so a string like '<span class="code">abcd+efg+hijk;lmno;pqr</span>' can be broken up using <span class="code">"delims=;+"</span>. </p>
<p>You can use any character as a delimiter, but they are case sensitive.<br>
If you don’t specify delims it will default to <span class="code">"delims=&lt;tab&gt;&lt;space&gt;"</span><br>
<br>
n.b. some text editors will  enter the TAB character as a series of spaces, specifying more than one delimiter has been known to cause problems with some data sets.</p>
</blockquote>
<h2>Tokens</h2>
<blockquote>
<p>  <span class="code">tokens=2,4,6</span> will cause the second, fourth and sixth items on each line to be processed.<br>
<br>
<span class="code">tokens=2-6</span> will cause the second, third, fourth, fifth and sixth items on each 
line to be processed.<br>
<span class="code"><br>
tokens=*</span> will cause all items on each line to be processed.<br>
<br>
<span class="code">tokens=3*</span> will process the third token and the 4th + all subsequent items, this can also be written as <span class="code">tokens=3,*</span><br>
<br>
Each token specified will cause a corresponding parameter letter to be allocated. The letters used for tokens are case sensitive.<br>
<br>
If the last character in the <span class="code">tokens=</span> string is an asterisk, then additional 
parameters are allocated for all the remaining text on the line.</p>
<p>The following <a href="../ascii.html">ASCII characters</a> can be used as FOR tokens:<br>
ASCII 63 - 93 inclusive, 31 tokens:<span class="code"> ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \ ]</span><br>
ASCII 95-123 inclusive, 29 tokens:<span class="code"> _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z {</span><br>
(there are <a href="http://stackoverflow.com/a/8520993/1720814">a few</a> other characters that can be used, but require <a href="syntax-esc.html#escape">escaping</a>)</p>
<p>A single FOR /F command can never parse more than 31 tokens, to use more  requires a <a href="http://stackoverflow.com/a/8520993/1720814">workaround</a> with multiple FOR commands.</p>
<p>Matching the same token more than once (<span class="code">tokens=1,2,1</span>) can give <a href="http://stackoverflow.com/questions/25950181/why-for-f-sets-empty-values-for-repeated-numbers-in-the-rest-of-tokens">unpredictable</a> results. Token variables can of course be used multiple times: <span class="code">Echo %%G %%H %%G</span><br>
<br>
FOR tokens variables (or parameter names) are global, so in complex scripts which <a href="call.html">call</a> one FOR statement from within another FOR statement you can refer to both sets of parameters.</p>
</blockquote>
<p>The precedence/priority of FOR command options is: usebackq &gt; skip &gt; delims &gt;  eol &gt; tokens<br>
</p>
<p><b>Examples</b></p>
<p>Extracting data from this  text file which contains characters and commas (but no spaces or other punctuation): 
</p><p><span class="code">January,Snowy,02<br>
February,Rainy,15<br>
March,Sunny,25<br>
<br>
FOR /F "tokens=1,3 delims=," %%G IN (weather.txt) DO @echo %%G %%H<br>
<br>
</span>The tricky part is splitting up each the line into the right tokens, in this case I'm splitting on the comma character ',' 
this splits the line into 3 chunks of text and we pull out the first and third items with "tokens=1,3"</p>
<table width="400" border="1">
  <tbody><tr>
    <td>token=1 (%%G)</td>
    <td>token=2</td>
    <td>token=3 (%%H)</td>
</tr>
  <tr>
    <td>&nbsp;</td>
    <td>(ignored)</td>
    <td>&nbsp;</td>
</tr>
<tr>
<td>January</td>
<td>&nbsp;</td>
<td>02</td>
</tr>
<tr>
<td>February</td>
<td>&nbsp;</td>
<td>15</td>
</tr>
<tr>
<td>March</td>
<td>&nbsp;</td>
<td>25</td>
</tr>
</tbody></table>
<p> %%G is  declared in the FOR statement and %%H is implicitly declared via the tokens= option.</p>
<p>An alternative way to retrieve the same data would be: <br>
<span class="code">FOR /F "tokens=1,2,3 delims=," %%G IN (weather.txt) DO @echo %%G %%I</span></p>
<h2>Splitting a string that includes spaces.</h2>
<blockquote>
<p>This can be done just as above, replacing "<span class="code">delims=,"</span> with "<span class="code">delims= "</span></p>
<p>It is possible to specify either the <span class="code">tokens=</span> and/or <span class="code">delims=</span> options in any order, but whenever both <span class="code">delims</span> and <span class="code">tokens</span> are specified, they must be separated by a space, this space will NOT count as a token. For this reason it is recommended to always place delims as the last option before the closing quotation, it is much easier to see what is happening with one space  (or no spaces) at the end  of the string.</p>
</blockquote>
<h2>Parse a text string</h2>
<blockquote>
<p>  A string of text will be treated just like a single line of input from a file, the string must be enclosed in double quotes (or single quotes with usebackq).<br>
  <br>
  Echo just the date from the following string </p>
<p><span class="code">FOR /F "tokens=4 delims=," %%G IN ("deposit,$4500,123.4,12-AUG-09") 
DO @echo Date paid %%G</span></p>
</blockquote>
<h2>Parse the output of a command: </h2>
<blockquote>
<p class="code">FOR /F %%G IN ('"C:\program Files\command.exe"') DO ECHO %%G</p>
</blockquote>
<h2>Parse the contents of a file:
</h2>
<blockquote>
<p class="code">FOR /F "tokens=1,2* delims=," %%G IN (C:\MyDocu~1\mytex~1.txt) DO ECHO %%G</p>
<p class="code"><span class="code">FOR /F "usebackq tokens=1,2* delims=," %%G IN ("C:\My Documents\my textfile.txt") DO ECHO %%G</span></p>
</blockquote>
<h2>Filenameset</h2>
<blockquote>
<p>To specify an exact set of files to be processed, such as all .MP3 files in a folder including subfolders and sorted by date - just use the <a href="dir.html">DIR /b</a> command to create the list of filenames  ~ and use <a href="for_cmd.html">this variant of the FOR command</a> syntax. </p>
</blockquote>
<h2>Unicode</h2>
<blockquote>
<p>Many of the newer commands and utilities (e.g. <a href="wmic.html">WMIC</a>) output text files in unicode format, these cannot be read by the FOR command which expects <a href="../ascii.html">ASCII</a>. <br>
To convert the file format use the <a href="type.html">TYPE</a> command.</p>
</blockquote>
<h2>Errorlevel</h2>
<blockquote>
<p>If no data was processed then FOR /F will return ERRORLEVEL = 1</p>
</blockquote>
<p>FOR is an <a href="syntax-internal.html">internal</a> command.<br>
<br>
<span class="quote"><i>“It's completely intuitive; it just takes a few days to learn, but then it's completely intuitive” - Terry Pratchett.</i></span><i><br>
</i><br>
<b>Related:</b><br>
<br>
<a href="for.html">FOR</a> - Loop commands<br>
<a href="for2.html">FOR</a> - Loop through a set of files in one folder<br>
<a href="for_r.html">FOR /R</a> - Loop through files (recurse subfolders) <a href="for_d.html"><br>
FOR /D</a> - Loop through several folders<br>
<a href="for_l.html">FOR /L</a> - Loop through a range of numbers<br>
<a href="for_cmd.html">FOR /F</a> - Loop through the output of a command<br>
<a href="forfiles.html">FORFILES</a> - Batch process multiple files<br>
<a href="if.html">IF</a> - Conditionally perform a command <br>
<a href="setlocal.html">SETLOCAL</a> - Control the visibility of environment variables inside a loop<br>
Powershell: <a href="../ps/foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline<br>
Equivalent bash command (Linux): <a href="../bash/for.html">for</a> - Expand <var>words</var>, and execute <var>commands</var></p>
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
