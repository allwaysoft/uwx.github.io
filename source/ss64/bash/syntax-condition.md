---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem -->
<h1>Conditional expressions / Comparison Operators</h1>
<p>Conditional expressions are often used by <a href="syntax-brackets.html">bracketed</a> expressions and the <a href="test.html"><code>test</code></a> builtin.</p>
<dl>
<dt><code>-a <i>file</i></code>
</dt><dd>True if <i>file</i> exists. 
</dd><dt><code>-b <i>file</i></code>
</dt><dd>True if <i>file</i> exists and is a block special file. 
</dd><dt><code>-c <i>file</i></code>
</dt><dd>True if <i>file</i> exists and is a character special file. 
</dd><dt><code>-d <i>file</i></code>
</dt><dd>True if <i>file</i> exists and is a directory. 
</dd><dt><code>-e <i>file</i></code>
</dt><dd>True if <i>file</i> exists. 
</dd><dt><code>-f <i>file</i></code>
</dt><dd>True if <i>file</i> exists and is a regular file. 
    
</dd><dt><code>-g <i>file</i></code>
</dt><dd>True if <i>file</i> exists and its set-group-id bit is set. 
</dd><dt><code>-h <i>file</i></code>
</dt><dd>True if <i>file</i> exists and is a symbolic link. 
    
</dd><dt><code>-k <i>file</i></code>
</dt><dd>True if <i>file</i> exists and its "sticky" bit is set. 
</dd><dt><code>-p <i>file</i></code>
</dt><dd>True if <i>file</i> exists and is a named pipe (FIFO). 
    
</dd><dt><code>-r <i>file</i></code>
</dt><dd>True if <i>file</i> exists and is readable. 
</dd><dt><code>-s <i>file</i></code>
</dt><dd>True if <i>file</i> exists and has a size greater than zero. 
</dd><dt><code>-t <i>fd</i></code>
</dt><dd>True if file descriptor <i>fd</i> is open and refers to a terminal. 
</dd><dt><code>-u <i>file</i></code>
</dt><dd>True if <i>file</i> exists and its set-user-id bit is set. 
</dd><dt><code>-w <i>file</i></code>
</dt><dd>True if <i>file</i> exists and is writable. 
</dd><dt><code>-x <i>file</i></code>
</dt><dd>True if <i>file</i> exists and is executable. 
</dd><dt><code>-O <i>file</i></code>
</dt><dd>True if <i>file</i> exists and is owned by the effective user id. 
</dd><dt><code>-G <i>file</i></code>
</dt><dd>True if <i>file</i> exists and is owned by the effective group id. 
</dd><dt><code>-L <i>file</i></code>
</dt><dd>True if <i>file</i> exists and is a symbolic link. 
    
</dd><dt><code>-S <i>file</i></code>
</dt><dd>True if <i>file</i> exists and is a socket. 
</dd><dt><code>-N <i>file</i></code>
</dt><dd>True if <i>file</i> exists and has been modified since it was last read. 
</dd><dt><code><i>file1</i> -nt <i>file2</i></code>
</dt><dd>True if <i>file1</i> is newer (according to modification date) than <i>file2</i>. 
</dd><dt><code><i>file1</i> -ot <i>file2</i></code>
</dt><dd>True if <i>file1</i> is older than <i>file2</i>. 
    
</dd><dt><code><i>file1</i> -ef <i>file2</i></code>
</dt><dd>True if <i>file1</i> and <i>file2</i> have the same device and inode numbers. 
</dd><dt><code>-o <i>optname</i></code>
</dt><dd>True if shell option <i>optname</i> is enabled. The list of options appears in the description of the <samp>`-o'</samp> option to <a href="set.html"><code>set</code></a>. 
</dd><dt><code>-z <i>string</i></code>
</dt><dd>True if  NULL, that is, if the length of <i>string</i> is zero.
</dd><dt><code>-n <i>string</i></code>
</dt><dd>True if the length of <i>string</i> is non-zero (not NULL). 
</dd><dt><code><i>string1</i> == <i>string2</i></code>
</dt><dd>True if the strings are equal. <samp>`='</samp> may be used in place of <samp>`=='</samp>. 
</dd><dt><code><i>string1</i> != <i>string2</i></code>
</dt><dd>True if the strings are not equal. 
</dd><dt><code><i>string1</i> &lt; <i>string2</i></code>
</dt><dd>True if <i>string1</i> sorts before <i>string2</i> lexicographically in the current locale. 
</dd><dt><code><i>string1</i> &gt; <i>string2</i></code>
</dt><dd>True if <i>string1</i> sorts after <i>string2</i> lexicographically in the current locale. 
</dd><dt><code><i>arg1</i> OP <i>arg2</i></code>
</dt><dd><code>OP</code> is one of <samp>`-eq'</samp>, <samp>`-ne'</samp>, <samp>`-lt'</samp>, <samp>`-le'</samp>, <samp>`-gt'</samp>, or <samp>`-ge'</samp>. These arithmetic binary operators return true if <i>arg1</i> is equal to, not equal to, less than, less than or equal to, greater than, or greater than or equal to <i>arg2</i>, respectively. <i>Arg1</i> and <i>arg2</i> may be positive or negative integers. </dd>
</dl>
<p><span class="code">&nbsp;! </span>"not" -- reverse the sense of the tests above.<br>
Try to avoid double negatives, they can usually be replaced with a single test.</p>
<p>If the <i>file</i> argument to one of the primaries is one of:<br>
  <span class="code">/dev/stdin<br>
  /dev/stdout<br>
  /dev/stderr</span><br>
  file descriptor 0, 1, or 2, respectively, is checked.<br>
  If the <i>file</i> argument to one of the primaries is of the form<span class="code"> /dev/fd/<i>N </i></span>, 
  then file descriptor <i class="code">N</i> is checked. </p>
<p><b>Related:</b></p>
<p><a href="syntax-execute.html">Conditional Execution</a> command-A AND/OR command-B<br>
<a href="if.html">if</a> - Conditionally perform a command<br>
Windows equivalent:  <a href="../nt/syntax-conditional.html">Conditionals</a> - IF THEN ELSE Execution<br>
</p>
<!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-condition.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
