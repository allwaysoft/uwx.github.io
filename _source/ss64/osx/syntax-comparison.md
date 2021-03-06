---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Logical, arithmetical and comparison operators</h1>
<p>These operators are similar to those of C and have the same precedence.<br>
They include<br>
</p>
<pre>  ||  &amp;&amp;  |  ^   &amp;  ==  !=  =~  !~  &lt;=  &gt;=  &lt;  &gt; &lt;&lt;  &gt;&gt;  +  -  *   /  %  !  ~  (  )

       Here the precedence increases to the right, == !=  =~  and !~,
       &lt;=  &gt;=  &lt; and  &gt;,  &lt;&lt; and &gt;&gt;, + and -, * / and %
       being, in groups, at the same level.  The == != =~ and !~ operators
       compare  their  arguments as strings; all others operate on numbers.
       The operators '=~' and '!~' are like '!=' and '=='  except  that
       the  right hand side is a glob-pattern against which the left hand
       operand is matched. This reduces the need for use of the <a href="switch.html">switch</a> builtin
       command in shell scripts when all that is really needed is pattern
       matching.

       Strings which begin with '0' are considered  octal  numbers.   Null  or
       missing  arguments  are considered '0'.  The results of all expressions
       are strings, which represent decimal numbers.  It is important to  note
       that  no   two  components of an expression can appear in the same word;
       except when adjacent to components of expressions which  are  syntacti-
       cally  significant  to the parser ('&amp;' '|' '&lt;' '&gt;' '(' ')') they should
       be surrounded by spaces.

   <b>Command</b> <b>exit</b> <b>status</b>

       Commands can be executed in expressions and their exit status  returned
       by enclosing them in braces ('{}').  Remember that the braces should be
       separated from the words of the command by spaces.  Command  executions
       succeed, returning true, i.e., '1', if the command exits with status 0,
       otherwise they fail, returning false, i.e., '0'.   If more detailed sta-
       tus information is required then the command should be executed outside
       of an expression and the <b>status</b> shell variable examined.

   <b>File</b> <b>inquiry</b> <b>operators</b>
       Some of these operators perform true/false tests on files  and  related
       objects.   They are of the form <b>-</b><i>op</i> <i>file</i>, where <i>op</i> is one of

     <b>r</b>   Read access
     <b>w</b>   Write access
     <b>x</b>   Execute access
     <b>X</b>   Executable  in the path or shell builtin, e.g., '-X ls' and '-X
         ls-F' are generally true, but '-X /bin/ls' is not (+)
     <b>e</b>   Existence
     <b>o</b>   Ownership
     <b>z</b>   Zero size
     <b>s</b>   Non-zero size (+)
     <b>f</b>   Plain file
     <b>d</b>   Directory
     <b>l</b>   Symbolic link (+) *
     <b>b</b>   Block special file (+)
     <b>c</b>   Character special file (+)
     <b>p</b>   Named pipe (fifo) (+) *
     <b>S</b>   Socket special file (+) *
     <b>u</b>   Set-user-ID bit is set (+)
     <b>g</b>   Set-group-ID bit is set (+)
     <b>k</b>   Sticky bit is set (+)
     <b>t</b>   <i>file</i> (which must be a digit) is an open file descriptor  for  a
         terminal device (+)
     <b>R</b>   Has been migrated (convex only) (+)
     <b>L</b>   Applies  subsequent  operators in a multiple-operator test to a
         symbolic link rather than to the file to which the link  points
         (+) *

       <i>file</i>  is command and filename expanded and then tested to see if it has
       the specified relationship to the real user.  If <i>file</i> does not exist or
       is  inaccessible   or, for the operators indicated by '*', if the speci-
       fied file type does not exist on the current system, then all enquiries
       return false, i.e., '0'.

       These  operators may be combined for conciseness: '-<i>xy</i> <i>file</i>' is equiva-
       lent to '-<i>x</i> <i>file</i> &amp;&amp; -<i>y</i> <i>file</i>'.  (+) For example, '-fx' is true  (returns
       '1') for plain executable files, but not for directories.

       <b>L</b> may be used in a multiple-operator test to apply subsequent operators
       to a symbolic link rather than to the file to which  the   link  points.
       For  example, '-lLo' is true for links owned by the invoking user.  <b>Lr</b>,
       <b>Lw</b> and <b>Lx</b> are always true for links and false for non-links.  <b>L</b>  has  a
       different  meaning  when it is the last operator in a multiple-operator
       test; see below.

       It is possible but not useful, and  sometimes  misleading,  to  combine
       operators  which   expect <i>file</i> to be a file with operators which do not,
       (e.g., <b>X</b> and <b>t</b>).   Following <b>L</b> with a non-file operator can lead to par-
       ticularly strange results.

       Other  operators   return   other information, i.e., not just '0' or '1'.
       (+) They have the same format as before; <i>op</i> may be one of

     <b>A</b>     Last file access time, as the number of seconds  since  the epoch
     <b>A:</b>    Like <b>A</b>, but in timestamp format, e.g., 'Fri May 14 16:36:10  1993'
     <b>M</b>     Last file modification time
     <b>M:</b>    Like <b>M</b>, but in timestamp format
     <b>C</b>     Last inode modification time
     <b>C:</b>    Like <b>C</b>, but in timestamp format
     <b>D</b>     Device number
     <b>I</b>     Inode number
     <b>F</b>     Composite <b>f</b>ile identifier, in the form <i>device</i>:<i>inode</i>
     <b>L</b>     The name of the file pointed to by a symbolic link
     <b>N</b>     Number of (hard) links
     <b>P</b>     Permissions, in octal, without leading zero
     <b>P:</b>    Like <b>P</b>, with leading zero
     <b>P</b><i>mode</i>   Equivalent to '-P <i>file</i> &amp; <i>mode</i>', e.g., '-P22  <i>file</i>'  returns '22'
             if  <i>file</i> is writable by group and other, '20' if by
              group only, and '0' if by neither
     <b>P</b><i>mode</i><b>:</b>  Like <b>P</b><i>mode</i><b>:</b>, with leading zero
     <b>U</b>     Numeric userid
     <b>U:</b>    Username, or the numeric userid if the username is unknown
     <b>G</b>     Numeric groupid
     <b>G:</b>    Groupname, or the  numeric  groupid  if  the   groupname  is unknown
     <b>Z</b>     Size, in bytes
</pre>
<p> Only one of these operators may appear in a multiple-operator test, and
it must be the last.  Note that <b>L</b> has a different meaning at the end of
and  elsewhere  in  a  multiple-operator   test.  Because '0' is a valid
return value for many of these operators, they do not return  '0'  when
they fail: most return '-1', and <b>F</b> returns ':'.<br>
<br>
If  the  shell  is  compiled  with POSIX defined (see the <b>version</b> shell
variable), the result of a file inquiry is based on the permission bits
of  the  file  and not on the result of the <b>access(2)</b> system call.  For
example, if one tests a file with <b>-w</b> whose permissions would ordinarily
allow writing but which is on a file system mounted read-only, the test
will succeed in a POSIX shell but fail in a non-POSIX shell.<br>
<br>
File inquiry operators can also be evaluated with the <i>filetest</i>  builtin
command</p>
<p><b>Related commands</b>:<br>
  <br>
  <a href="syntax.html">OS X Syntax</a></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-comparison.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
