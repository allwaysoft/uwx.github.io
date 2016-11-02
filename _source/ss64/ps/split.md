
f<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Split()</h1> 
<p>Split string(s) into substrings.</p>
<pre>Syntax
      .<span class="code">Split(<i>strSeparator</i> [, <i>MaxSubstrings</i>] [, <i>Options</i>])
</span>
      <i>String</i> -<span class="code">Split <i>strSeparator</i> [, <i>MaxSubstrings</i>] [, <i>Options</i>]</span><i>

      String</i> -<span class="code">Split {<i>scriptblock</i>} [,</span><i><span class="code"> MaxSubstrings</span></i><span class="code">]</span><i>

      </i>-<span class="code">Split <i>String</i></span>

Key<i>
   strSeparator  </i>The character used to split up each string, by default whitespace (space/newline/tab).

<i>   MaxSubstrings</i>  The maximum number of substrings, by default all.

Options
   "SimpleMatch [,IgnoreCase]"

   "[<u>RegexMatch</u>][,IgnoreCase] [,CultureInvariant]
   [,IgnorePatternWhiteSpace] [,ExplicitCapture]
   [,<u>SingleLine</u> | MultiLine]"</pre>
<p><u><span class="code">RegexMatch</span></u> is the default - match with regular expression.<br>
<span class="code">SimpleMatch</span> uses simple string comparison when evaluating <i>strSeparator</i><br>
  <span class="code">IgnoreCase</span> will force Case insensitive matching even if -cSplit is specified.<br>
  <span class="code">CultureInvariant</span> will ignore cultural differences when evaluating <i>strSeparator</i>.<br>
  <span class="code">IgnorePatternWhiteSpace</span> will ignore unescaped whitespace and comments.<br>
  <span class="code">MultiLine</span> recognises the start and end of Lines and Strings.<br>
  <span class="code">SingleLine</span> recognises the start and end of Strings.<br>
</p>
<p>When the strings are split the <i>strSeparator</i> is omitted from all the substrings.<br>
</p>
<p><b>Examples</b></p>
<p>Split a string by the<span class="code"> - </span>character:</p>
<p class="code">PS C:\&gt; "abc-def" -split "-"<br>
  abc<br>
  def</p>
<p>Split a string by the<span class="code"> \ </span>character, note this has to be doubled:</p>
<p class="code">PS C:\&gt; "abc\def" -split "\\"<br>
  abc<br>
def</p>
<p>Split a string by a space:</p>
<p class="code">PS C:\&gt; $demo = "abc def" <br>
  PS C:\&gt; $demo.split()<br>
  abc<br>
def</p>
<p>Chain <span class="code">.split()</span> to split by multiple characters, here " and ' :</p>
<p class="code">PS C:\&gt; $demo = "abc""def'ghi" <br>
PS C:\&gt; $demo.Split("""").Split("'")<br>
abc<br>
def<br>
ghi
<br>
</p>
<p>Split up a Mac address and convert each number:</p>
<p class="code">$MacAddress ="12-34-56-78-9A-BC"<br>
($MacAddress.split('-') | foreach {[byte] ('0x' + $_)} )<br>
18 <br>
52<br>
86<br>
120<br>
154<br>
188</p>
<p>Split up the pathext environment variable:</p>
<p class="code">PS C:\&gt; $env:pathext -split ';'<br>
<span class="code">PS C:\&gt; </span>$env:pathext -split ';' <a href="replace.html">-replace</a> '\.','*.' </p>
<p>When using Split() against a text file or the string output of a command, you are dealing with an <a href="syntax-arrays.html">array</a>. PowerShell automatically converts each line of the text file to an element of the array. This makes the file easy to work with, but you do have to specify the line that you want to split.</p>
<p class="code">PS C:\&gt; $demo = get-content C:\demo\sales.txt<br>
PS C:\&gt; $demo[2].split()</p>
<p>Or  split all the lines and match  the tokens you want to retrieve:</p>
<p class="code">$data = get-content C:\demo\sales.txt<br>
$data | foreach {<br>
&nbsp;&nbsp;&nbsp;$items = $_.split("=")<br>
&nbsp;&nbsp; if ($items[0] -eq "ProductA"){Echo $items[1]}<br>
 }<br>
</p>
<p>If the string you're splitting is a Windows path, you may want to use the specialised <a href="split-path.html">Split-Path</a> command.</p>
<p class="quote">“Let the gentle bush dig its root deep and spread upward to split the boulder” ~ Carl Sandburg</p>
<p><b>Related:</b></p>
<p><a href="syntax-methods.html">PowerShell Methods</a><br>
  help about_split
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="split.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

