---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="findstr.html">FINDSTR</a> - Escapes and Length limits</h1> 
<p>FindStr Search strings that include quotes and or backslashes must be escaped as follows.</p>
<h2>Escaping Quote within command line search strings</h2>
<p>Quotes within command line search strings must be escaped with backslash like <span class="code">\"</span><br>
  This is true for both literal and regex search strings.<br>
Each quote can be escaped for the shell (CMD.EXE  or PowerShell) parser, but this has nothing to do with FINDSTR. For example, to search  for a single quote you could use:</p>
<p><span class="code">C:&gt; FINDSTR \^" Demofile.txt<br>
  <br>
  </span>or in PowerShell:<br>
  <span class="code">PS C:&gt; FINDSTR \`" Demofile.txt</span></p>
<h2>Escaping Backslash within command line literal search strings</h2>
<p>  Backslash in a literal search string must generally be escaped with backslash like<span class="code"> \\</span></p>
<p>But there is a special case when the search string contains the following form:</p>
<p class="code">[quote][any set of chars][1 or more backslashes][quote]</p>
<p>Each backslash in <span class="code">[1 or more backslashes]</span> must be double escaped as<span class="code"> \\\\</span></p>
<p>Any backslash in <span class="code">[any set of chars]</span> is escaped normally as <span class="code">\\</span> as long as the last character in the set is not a backslash.</p>
<p>The quotes are escaped normally as <span class="code">\"</span></p>
<p>For example,<span class="code"> "\a\b\\"</span> is escaped as <span class="code">\"\\a\\b\\\\\\\\\"</span></p>
<p>As previously noted, one or more escaped quotes will also require escaping with ^ for the CMD parser</p>
<h2>Escaping Backslash within command line regex search strings</h2>
<p>  Backslash in a regex must be either double escaped like <span class="code">\\\\</span>, or else single escaped within a character class set like <span class="code">[\\]</span></p>
<h2>Escaping Quote and Backslash within /G:<i>FILE</i> literal search strings</h2>
<p>  Standalone quotes and backslashes within a literal search string file specified by /G:file need not be escaped, but they can be.</p>
<p><span class="code">"</span> and <span class="code">\"</span> are equivalent.</p>
<p><span class="code">\ </span>and <span class="code">\\</span> are equivalent.</p>
<p>If the intent is to find <span class="code">\\</span>, then at least the leading backslash must be escaped. Both<span class="code"> \\\</span> and <span class="code">\\\\</span> work.</p>
<p>If the intent is to find <span class="code">\"</span>, then at least the leading backslash must be escaped. Both <span class="code">\\"</span> and <span class="code">\\\"</span> work.</p>
<h2>Escaping Quote and Backslash within /G:<i>FILE</i> regex search strings</h2>
<p>  This is the one case where the escape sequences work as expected based  on the documentation. Quote is not a regex metacharacter, so it need not  be escaped (but can be). Backslash is a regex metacharacter, so it must  be escaped.</p>
<h2>Character limits for /G:<i>FILE</i> search strings</h2>
<p> The nul (0x00) character can appear in the file, but it functions like  the C string terminator. The nul character is not searched. Any  characters after a nul character are treated as a different search  string as if they were on another line.</p>
<p>The &lt;CR&gt; and &lt;LF&gt; characters are treated as line  terminators that terminate a search string, and are not included in the  search.</p>
<p>All other single byte characters work perfectly within a file based search string.</p>
<h2>Character limits for command line search strings</h2>
<p>  The null character (0x00) cannot appear in a search string. Any other  single byte character can appear in the string (0x01 - 0xFF). However,  not all characters will match themselves. This limitation is the same  for literal and regex searches.</p>
<p>Here is a complete list of characters that do not match themselves.  Each character is represented as the decimal byte code value. The first  code is the search character and the second code is the character it  matches. Note - This list was compiled on a U.S. machine. I do not know what impact other languages may have on this list.</p>
<pre>158 matches 080     199 matches 221     226 matches 071
169 matches 170     200 matches 043     227 matches 112
176 matches 221     201 matches 043     228 matches 083
177 matches 221     202 matches 045     229 matches 115
178 matches 221     203 matches 045     231 matches 116
179 matches 221     204 matches 221     232 matches 070
180 matches 221     205 matches 045     233 matches 084
181 matches 221     206 matches 043     234 matches 079
182 matches 221     207 matches 045     235 matches 100
183 matches 043     208 matches 045     236 matches 056
184 matches 043     209 matches 045     237 matches 102
185 matches 221     210 matches 045     238 matches 101
186 matches 221     211 matches 043     239 matches 110
187 matches 043     212 matches 043     240 matches 061
188 matches 043     213 matches 043     242 matches 061
189 matches 043     214 matches 043     243 matches 061
190 matches 043     215 matches 043     244 matches 040
191 matches 043     216 matches 043     245 matches 041
192 matches 043     217 matches 043     247 matches 126
193 matches 045     218 matches 043     249 matches 250
194 matches 045     219 matches 221     251 matches 118
195 matches 043     220 matches 095     252 matches 110
196 matches 045     222 matches 221     254 matches 221
197 matches 043     223 matches 095
198 matches 221     224 matches 097 </pre>
<p>Any character &gt;0 not in the list above can be searched, including  &lt;CR&gt; and &lt;LF&gt;. The easiest way to search such characters is  to get them into an environment variable and use delayed expansion  within the search string.</p>
<h2>Search String length limits</h2>
<p> On Vista and Windows7/2008 the maximum allowed length for a single search string is 511  bytes. If any search string exceeds 511 then the result is a FINDSTR: Search string too long. error with ERRORLEVEL 2.</p>
<p>When doing a regular expression search, the maximum search string  length is 254. A regular expression with length between 255 and 511 will  result in a FINDSTR: Out of memory error with ERRORLEVEL 2. A regular expression length &gt;511 results in the FINDSTR: Search string too long. error.</p>
<p>On Windows XP the maximum search string length is<a href="https://groups.google.com/forum/#!topic/alt.msdos.batch.nt/n36VGULacVU">127 bytes</a> for both literal and regex searches.</p>
<h2>Line Length limits</h2>
<p> Files specified as a command line argument or via the <span class="code">/F:FILE</span> option  have no known line length limit. Searches were successfully run against a  128MB file that did not contain a single &lt;LF&gt;.</p>
<p>Piped data and Redirected input is limited to 8191 bytes per line.  This limit is a "feature" of FINDSTR. It is not inherent to pipes or  redirection. FINDSTR using redirected stdin or piped input will never  match any line that is &gt;=8k bytes. Lines &gt;= 8k generate an error  message to stderr, but ERRORLEVEL is still 0 if the search string is  found in at least one line of at least one file.</p>
<p>Credits:<br>
  Dave Benham - List of    <a href="http://stackoverflow.com/questions/8844868/what-are-the-undocumented-features-and-limitations-of-the-windows-findstr-comman">undocumented features and limitations of FINDSTR </a>from <a href="http://stackoverflow.com">StackOverflow</a><br>
  <span class="quote"><br>
  <i>“Getting it round a corner is like trying to get my wardrobe up a fire  escape. It's very hard work, and it's hard to see where you're going” ~Jeremy Clarkson (reviewing the BMW Z8)</i> </span><br>
<br>
<b> Related:</b><br>
<br>
<a href="findstr.html">FINDSTR</a> - Search for a text string in a file.<br>
<a href="syntax-esc.html">Escape characters</a><br>
Equivalent bash command (Linux): <a href="../bash/grep.html">grep</a> - Search file(s) for lines that match a given pattern</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="findstr-escapes.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
