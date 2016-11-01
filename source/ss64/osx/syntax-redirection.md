---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Redirection and Process Substitution</h1>

<p>Both the input and output of a command may be <var>redirected</var>:</p>
<pre><i> command</i>  &gt;  <i>filename</i>    Redirect command output (stdout) into a file

 <i>command</i>  &gt;  /dev/null    Discard stdout of <i>command</i>

 <i>command</i>  2&gt; <i>filename</i>    Redirect error output (stderr) to a file

 <i>command</i>  2&gt;&amp;1 <i>filename</i>  Redirect stderr to stdout 

 <i>command</i>  1&gt;&amp;2 <i>filename</i>  Redirect stdout to stderr

 <i>command</i>  &gt;&gt; <i>filename</i>    Redirect command output and APPEND into a file

 <i>command</i>  &lt;  <i>filename</i>    Redirect a file into a command

 <i>command</i>1  &lt; (<i>command2</i>)  Redirect the output of <i>command2</i> as file input to <i>command1</i>

 <i>command1</i> | <a href="tee.html">tee</a> <i>filename</i> | <i>command2</i>    Redirect <i>command1</i> into <i>filename</i> AND <i>command2

 command1 | command2</i>     Redirect stdout of <i>command1</i> to <i>command2

 command1 |&amp; command2</i>    Redirect stdERR of <i>command1</i> to <i>command2</i>

 <i>command1 ; command2</i>     Run <i>command1</i> and then <i>command2

 command1 &amp;&amp; command2</i>    Run <i>command2</i> only if <i>command1 is successful

 command1 || command2</i>    Run <i>command2</i> only if <i>command1</i> is NOT successful

 <i>command &amp;</i>               Run <i>command</i> in a subshell

 <i>command &amp;&gt;</i> <i>filename</i>     Redirect every output of <i>command</i> to <i>filename</i>
</pre>
<p> Builtin commands are executed within the shell.  If any component of a
pipeline except the last is a builtin command, the pipeline is executed
in a subshell.<br>
<br>
Parenthesized commands are always executed in a subshell.<br>
</p>
<pre>    (cd; pwd); pwd

       thus  prints  the  home directory, leaving you where you were (printing
       this after the home directory), while

    cd; pwd

       leaves you in the home  directory.   Parenthesized  commands  are  most
       often used to prevent cd from affecting the current shell.</pre>
<p> The NOCLOBBER option can prevent you from overwriting an existing file. </p>
<h2>Process substitution</h2>
<blockquote>
<p>Piping the stdout of a command into the stdin of another is a powerful technique. But, what if you need to pipe the stdout of multiple commands? This is where process substitution comes in. Process substitution feeds the output of a process (or processes) into the stdin of another process. </p>
<p>Template - command list enclosed within parentheses:</p>
<p> <span class="code">&gt;(<i>command_list</i>) </span></p>
<p class="code">&lt;(<i>command_list</i>)</p>
</blockquote>
<h2>Redirecting Input/Output: </h2>
<blockquote>
<p>The standard input and standard output of a command may be redirected
with the following syntax:<br>
</p>
</blockquote>
<pre>       &lt; <i>name</i>  Open file <i>name</i> (which is first variable, command  and  filename
        expanded) as the standard input.

       &lt;&lt; <i>word</i> Read  the  shell input up to a line which is identical to <i>word</i>.
        <i>word</i> is not subjected to variable, filename or command  substi-
        tution, and each input line is compared to <i>word</i> before any sub-
        stitutions are done on this input line. Unless a quoting  \,
        ",  '  or ` appears in <i>word</i> variable and command substitution is
        performed on the intervening  lines,  allowing  \  to
        quote  $,  \  and `.  Commands which are substituted have
        all blanks, tabs, and newlines preserved, except for the  final
        newline which  is dropped.  The resultant text is placed in an
        anonymous temporary file which is given to the command as stan-
        dard input.

       &gt; <i>name</i>
       <i>&gt;!</i> <i>name</i>
       <i>&gt;&amp;</i> <i>name</i>
       <i>&gt;&amp;!</i> <i>name</i>
        The file <i>name</i> is used as standard output.  If the file does not
        exist then it is created; if the file exists, it is  truncated,
        its previous contents being lost.

        If  the shell variable <b>noclobber</b> is set, then the file must not
        exist or be a character special  file  (e.g.,  a  terminal  or
        `/dev/null')  or an error results.  This helps prevent acciden-
        tal destruction of files.  In this case the `!' forms  can  be
        used to suppress this check.

        The  forms  involving '&amp;' route the diagnostic output into the
        specified file  as  well  as  the  standard  output.   <i>name</i>  is
        expanded in the same way as '&lt;' input filenames are.

       &gt;&gt; <i>name</i>
       <i>&gt;&gt;&amp;</i> <i>name</i>
       <i>&gt;&gt;!</i> <i>name</i>
       <i>&gt;&gt;&amp;!</i> <i>name</i>
        Like  '&gt;', but appends output to the end of <i>name</i>.  If the shell
        variable <b>noclobber</b> is set, then it is an error for the file <i>not</i>

        to exist, unless one of the '!' forms is given.</pre>
<blockquote>
<p> A  command  receives  the environment in which the shell was invoked as
modified by the input-output parameters and the presence of the command
in  a pipeline. Thus, unlike some previous shells, commands run from a
file of shell commands have no access to the text of  the  commands  by
default;  rather they receive the original standard input of the shell.</p>
<p> The `&lt;&lt;' mechanism should be used to present inline data.  This permits
shell command scripts to function as components of pipelines and allows
the shell to block read its input.   Note  that the  default  standard
input  for  a command run detached is <i>not</i> the empty file <i>/dev/null</i>, but
the original standard input of the shell.  If this is a terminal and if
the  process  attempts to read from the terminal, then the process will
block and the user will be notified .<br>
<br>
Diagnostic output may be directed through a pipe with the standard output.  Simply use the form `|&amp;' rather than just `|'.<br>
<br>
The  shell  cannot  presently  redirect diagnostic output without also
redirecting standard output, but 
`(<i>command</i>  &gt;  <i>output-file</i>)  &gt;&amp; <i>error-</i><i>file</i>'  is often an acceptable
workaround.  Either <i>output-file</i> or <i>error-</i><i>file</i> may be `/dev/tty' to
send output to the terminal.</p>
</blockquote>
<p>In all the descriptions above, if the file descriptor number is omitted, and the first character of the redirection operator is <samp>`&lt;'</samp>, the redirection refers to the standard input (file descriptor 0). If the first character 
of the redirection operator is <samp>`&gt;'</samp>, the redirection refers to the standard output (file descriptor 1). </p>
<h2><a href="syntax-here.html">Here Documents</a></h2>
<blockquote>
<p>This type of redirection instructs the shell to read input from the current 
  source until a line containing only <var>word</var> (with no trailing blanks) 
  is seen. All of the lines read up to that point are then used as the standard 
  input for a command. </p>
<p>The format of here-documents is as follows: 
</p>
<pre>&lt;&lt;[-]<var>word</var>
        <var>here-document</var>
<var>delimiter</var></pre>
<p>No parameter expansion, command substitution, arithmetic expansion, or filename 
  expansion is performed on <var>word</var>. If any characters in <var>word</var> 
  are quoted, the <var>delimiter</var> is the result of quote removal on <var>word</var>, 
  and the lines in the here-document are not expanded. If <var>word</var> is unquoted, 
  all lines of the here-document are subjected to parameter expansion, command 
  substitution, and arithmetic expansion. In the latter case, the character sequence 
  <code>\newline</code> is ignored, and <samp>\</samp> must be used to quote 
  the characters <samp>\</samp>, <samp>$</samp>, and <samp>`</samp>.</p>
</blockquote>
<p> <b>Related:</b></p>
<p><a href="syntax-substitution.html">Command Substitution</a><br>
<a href="syntax.html">OS X Syntax</a></p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-redirection.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
