---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem -->
<h1>Command substitution</h1>
<blockquote>
<p> Command substitution allows the output of a command to replace the command 
  itself. <br>
<br>
Command substitution occurs when a command is enclosed as follows:</p>
<pre>$(command) 
or 
`command`</pre>
<p>Bash performs the expansion by executing command and replacing the command 
  substitution with the standard output of the command, with any trailing newlines 
  deleted. </p>
<p> Embedded newlines are not deleted, but they can be removed during word splitting. <br>
The command substitution <span class="code">$(cat file)</span> can be replaced by the equivalent but faster <span class="code">$(&lt; file)</span>. <br>
<br>
When the old-style backquote form of substitution is used, backslash retains 
  its literal meaning except when followed by `$', ``', or `\'. The first backquote 
  not preceded by a backslash terminates the command substitution. When using 
  the $(command) form, all characters between the parentheses make up the command; 
  none are treated specially. <br>
<br>
Command substitutions can be nested. To nest when using the backquoted form, 
  escape the inner backquotes with backslashes. <br>
<br>
If the substitution appears within double quotes, word splitting and filename 
expansion are not performed on the results.</p>
</blockquote>
<h2>Process substitution operators:</h2>
<blockquote>
<p> <span class="code">&nbsp;&lt;(<i>command</i>) </span></p>
<p> <span class="code"> &nbsp;&gt;(<i>command</i>) </span></p>
<p><i>command</i> can be any command that produces output on stdout. Bash execs the command, creates a named pipe from the output, and replaces the operator with the name of that pipe. You can then read stdout from that pipe as you would from a regular file. When execution is finished,  the named pipe is removed automatically.</p>
</blockquote>
<p><b>Examples</b></p>
<p>Diff the output of two processes:</p>
<p class="code">$ diff &lt;(/sbin/lsmod) &lt;(ssh sys1 /sbin/lsmod)</p>
<p>To do this without using   process substitution would require using a temporary file.</p>
<p>Merge and sort a selection of files:</p>
<pre>$ sort -m &lt;(zcat file.1.gz) &lt;(zcat file.2.gz) &lt;(zcat file.3.gz) ... | gzip -c &gt; merged.gz</pre>
<p> <b>Related:</b></p>
<p><a href="syntax-redirection.html">Redirection and Process Substitution</a><br>
<a href="http://support.apple.com/kb/ht1528">ht1528</a> - Enabling and using the 'root' user in Mac OS X<br>
</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
