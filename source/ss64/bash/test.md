---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>test</h1> 
<span class="body">Evaluate a conditional expression <var>expr</var>. </span><br>
<pre>Syntax
      test <i>expr</i><br>         [ <i>expr</i>

Options</pre>
<p>Each operator and operand must be a separate argument. When the <code>[</code> 
  form is used, the last argument to the command must be a <code>]</code>. Expressions 
  can be combined using the following operators, listed in decreasing order of 
  precedence. </p>
<dl> 
  <dd> 
    <dl compact=""> 
      <dt><code>! <var>expr</var></code> 
    </dt></dl>
  </dd><dd> 
    <pre>True if <var>expr</var> is <b>false</b>.</pre>
  </dd>
  <dt><code>( <var>expr</var> )</code> </dt>
  <dd> 
    <pre>Returns the value of <var>expr</var>. This can be used to override the
normal precedence of operators. </pre>
  </dd>
  <dt><code><var>expr1</var> -a <var>expr2</var></code> </dt>
  <dd> 
    <pre>True if both <var>expr1</var> <b>and</b> <var>expr2</var> are true.</pre>
  </dd>
  <dt><code><var>expr1</var> -o <var>expr2</var></code> </dt>
  <dd> 
    <pre>True if either <var>expr1</var> <b>or</b> <var>expr2</var> is true.</pre>
  </dd>
</dl>
<p><span class="body">The <code>test</code> and <code>[</code> builtins evaluate 
  conditional expressions using a set of rules based on the number of arguments.</span> 
</p>
<dl> 
  <dd> 
    <dl compact=""> 
      <dt><span class="body">0 arguments </span>
      </dt><dd> 
        <p><span class="body">The expression is false. </span></p>
      </dd><dt><span class="body">1 argument </span>
      </dt><dd> 
        <p><span class="body">The expression is true if and only if the argument 
          is not null. </span></p>
      </dd><dt><span class="body">2 arguments </span>
      </dt><dd> 
        <p><span class="body">If the first argument is <samp>`!'</samp>, the expression 
          is true if and only if the second argument is null. If the first argument 
          is one of the unary conditional operators, the expression is true if 
          the unary test is true. If the first argument is not a valid unary operator, 
          the expression is false. </span></p>
      </dd><dt><span class="body">3 arguments </span>
      </dt><dd> 
        <p><span class="body">If the second argument is one of the binary conditional 
          operators, the result of the expression is the result of the binary 
          test using the first and third arguments as operands. If the first argument 
          is <samp>`!'</samp>, the value is the negation of the two-argument test 
          using the second and third arguments. If the first argument is exactly 
          <samp>`('</samp> and the third argument is exactly <samp>`)'</samp>, 
          the result is the one-argument test of the second argument. Otherwise, 
          the expression is false. The <samp>`-a'</samp> and <samp>`-o'</samp> 
          operators are considered binary operators in this case. </span></p>
      </dd><dt><span class="body">4 arguments </span>
      </dt><dd> 
        <p><span class="body">If the first argument is <samp>`!'</samp>, the result 
          is the negation of the three-argument expression composed of the remaining 
          arguments. Otherwise, the expression is parsed and evaluated according 
          to precedence using the rules listed above. </span></p>
      </dd><dt><span class="body">5 or more arguments </span>
      </dt><dd> 
        <p><span class="body">The expression is parsed and evaluated according 
          to precedence using the rules listed above.</span></p>
      </dd>
    </dl>
</dd></dl>
<p>The above applies to the BOURNE shell built-in, the BASH `test' 
  command has the following additional options:</p>
<p><span class="body"><b>File type tests </b><br>
  <br>
  These options test for particular types of files. All cases will only return
  True (0) if the file exists.</span></p>
<pre>`-b <i>file</i>'
     True if <i>file</i> is a Block special device.

`-c <i>file</i>'
     True if <i>file</i> is a Character special device.

`-d <i>file</i>'
     True if <i>file</i> is a Directory.

`-e <i>file</i>'
     True if <i>file</i> Exists.

`-f <i>file</i>'
     True if <i>file</i> is a regular File.

`-g <i>file</i>'
     True if <i>file</i> has its set-group-id bit set.

`-G <i>file</i>'
     True if <i>file</i> is owned by the current effective group id.

`-k <i>file</i>'
     True if <i>file</i> has its "sticky" bit set.

`-h <i>file</i>'
`-L <i>file</i>'
     True if <i>file</i> is a symbolic Link.

`-O <i>file</i>'
     True if <i>file</i> is owned by the current effective user id.

`-p <i>file</i>'
     True if <i>file</i> is a named Pipe.

`-r <i>file</i>'
     True if <i>file</i> is readable.

`-S <i>file</i>'
     True if <i>file</i> is a Socket.

`-s <i>file</i>'
     True if <i>file</i> has a Size greater than zero.

`-t [FD]'
     True if FD is opened on a terminal.  If FD is omitted, it defaults
     to 1 (standard output).

`-u <i>file</i>'
     True if <i>file</i> has its set-user-id bit set.

`-w <i>file</i>'
     True if <i>file</i> is writable.

`-x <i>file</i>'
     True if <i>file</i> is executable.

`<i>file</i>1 -ef <i>file</i>2'
     True if <i>file</i>1 and <i>file</i>2 have the same device and inode numbers,
     i.e., if they are hard links to each other.</pre>
<p><span class="body"><b>File Age</b><br>
These options test  the file modification date.</span></p>
<pre>`<i>file</i>1 -nt <i>file</i>2'
     True if <i>file</i>1 is newer than <i>file</i>2.

`<i>file</i>1 -ot <i>file</i>2'
     True if <i>file</i>1 is older than <i>file</i>2.</pre>
<p><span class="body"> <b>String tests</b><br>
  These options test string characteristics. Strings are not quoted for `test', 
  though you can quote them to protect characters with special meaning 
  to the shell, e.g., spaces.</span> </p>
<pre>`-z <i>String</i>'
     True if the length of <i>String</i> is zero.

`-n <i>String</i>'
`<i>String</i>'
     True if the length of <i>String</i> is nonzero.

`<i>String</i>1 = <i>String</i>2'
     True if the strings are equal.

`<i>String</i>1 != <i>String</i>2'
     True if the strings are not equal.</pre>
<p><span class="body"> <b>Numeric tests</b><br>
  Numeric relationals. The arguments must be entirely numeric (possibly negative), 
  or the special expression `-l STRING', which evaluates to the length of STRING.</span> 
</p>
<pre>`ARG1 -eq ARG2'
`ARG1 -ne ARG2'
`ARG1 -lt ARG2'
`ARG1 -le ARG2'
`ARG1 -gt ARG2'
`ARG1 -ge ARG2'
     These arithmetic binary operators return true if ARG1 is equal,
     not-equal, less-than, less-than-or-equal, greater-than, or
     greater-than-or-equal than ARG2, respectively.

   For example:

     test -1 -gt -2 &amp;&amp; echo yes
     =&gt; yes
     test -l abc -gt 1 &amp;&amp; echo yes
     =&gt; yes
     test 0x100 -eq 1
     error--&gt; test: integer expression expected before -eq</pre>
<p><b><span class="body">  Examples</span></b></p>
<pre>$ ls -al<br>total 67

drwxr-xr-x  18 root    root   4096  Jun 9 21:12 ./<br>drwxr-xr-x  18 root    root   4096  Jun 9 21:12 ../<br>-rw-rw-rw-   1 simon users  4096  Jun 9  07:30  london<br>-rwsrwsrwx   1 simon users  4096  Jun 9  07:32  aberdeen<br>-rw-------   1 simon users  4096  Jun 9  07:29  bristol<br>-rw-r--r--   1 simon   users  4096  Jun 9  07:29  bath<br>$</pre>
<p>$ test -r paris<br>
  $ echo $?<br>
  1<br>
$</p>
<p>Because the file `paris' is not Readable, the value returned
is false (non zero)<br>
</p>
<pre>if [ "$LOGNAME" <b>=</b> "scott" ]<br>then<br>    echo "Logged in as Scott"<br>else<br>  echo "incorrect user"<br>fi</pre>
<p>If the logname variable = scott then the test returns TRUE (0)</p>
<p class="quote"><i>"The test of a vocation is the love of the drudgery it involves" ~ Logan Pearsall</i></p>
<p><b>Related:</b><br>
<br>
<a href="case.html">case</a> - Conditionally perform a command<br>
<a href="cmp.html">cmp</a> - Compare two files<br>
<a href="expr.html">expr</a> - Evaluate expressions<br>
<a href="eval.html">eval</a> - Evaluate several commands/arguments <br>
<a href="for.html">for</a> - Expand <var>words</var>, and execute <var>commands</var> 
<br>
<a href="if.html">if</a> - Conditionally perform a command  <br>
pathchk - Check file name portability<br>
Equivalent Windows command: <a href="../nt/if.html">IF</a> - Conditionally perform a command</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="test.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

