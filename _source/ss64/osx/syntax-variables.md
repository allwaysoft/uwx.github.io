---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Variable substitution</h1>

<p>Shell and environment variables: </p>
<p>The shell maintains a list of variables, each of which has as value a list of zero or more words.  </p>
<p>The values of shell variables can be displayed and changed with the <a href="echo.html">echo</a>, <a href="set.html">set</a> and <a href="unset.html">unset</a> commands. </p>
<p>The system maintains its own list of `environment' variables. These can be displayed and changed with <span class="code"><a href="printenv.html">printenv</a></span>, <span class="code">setenv</span> and <span class="code">unsetenv</span>.<br>
<br>       
(+) Variables may be made read-only with  <span class="code">set  -r</span> (q.v.)   </p>
<p>Read-only       
variables  may not be modified or unset; attempting to do so will cause       
an error.  Once made read-only, a variable cannot be made writable,  so <span class="code">set  -r</span> should be used with caution.  Environment variables cannot be       
made read-only.<br>
<br>       
Some variables are set  by  the shell  or  referred  to  by  it.   For       
instance,  the  <b>argv</b> variable is an image of the shell's argument list,       
and words of this variable's value are referred to  in special  ways.       
Some  of  the variables referred to by the shell are toggles; the shell       
does not care what their value is, only whether they are  set  or  not.<br>       
For  instance,  the  <b>verbose</b>  variable is a toggle which causes command       
input to be echoed.  The <b>-v</b> command line  option  sets  this  variable. <b>Special</b> <b>shell</b>  <b>variables</b>  lists all variables which are referred to by       
the shell.<br>
<br>       
Other operations treat variables numerically.  The `@' command  permits       
numeric calculations to be performed and the result assigned to a variable.  Variable values are, however, always  represented  as  (zero  or       
more) strings.  For the purposes of numeric operations, the null string       
is considered to be zero, and the second and subsequent words of multi-word values are ignored.<br>
<br>       
After  the input line is aliased and parsed, and before each command is       
executed, variable substitution is performed keyed by  `$'  characters.       
This  expansion can be prevented by preceding the `$' with a `\' except       
within `"'s where it <i>always</i> occurs, and within `''s  where  it  <i>never</i> occurs.  Strings quoted by ``' are interpreted later (see <b>Command</b> <b>sub</b><b>stitution</b> below) so `$' substitution does not occur there until later,       
if  at  all.  A `$' is passed unchanged if followed by a blank, tab, or       
end-of-line.<br>
<br>       
Input/output redirections are recognized before variable expansion, and       
are  variable  expanded separately.   Otherwise,  the command name and       
entire argument list are expanded together.  It is  thus  possible  for       
the  first  (command)  word  (to  this point) to generate more than one       
word, the first of which becomes the command  name,  and  the  rest  of       
which become arguments.<br>
<br>       
Unless  enclosed in " or given the :q modifier the results of variable substitution may eventually be command and filename  substituted.       
Within  ",  a variable whose value consists of multiple words expands       
to a (portion of a) single word, with the words of the variable's value       
separated  by blanks.  When the `:q' modifier is applied to a substitution the variable will expand to multiple words with  each  word  separated  by  a blank and quoted to prevent later command or filename substitution.<br>
<br>       
The following metasequences are provided for introducing variable  values into the shell input.  Except as noted, it is an error to reference       
a variable which is not set.</p>
<pre>   $<i>name</i>
   ${<i>name</i>}</pre>
<blockquote>
<p> Substitutes the words of the value of variable <i>name</i>, each separated  by a blank.  Braces insulate <i>name</i> from following characters which would otherwise be part of it.  Shell variables have
names consisting of up to 20 letters and digits starting with a
letter. The underscore character is considered a  letter.   If <i>name</i>  is  not  a shell variable, but is set in the environment,<br>
then that value is returned (but `:' modifiers  and  the  other 
forms given below are not available in this case).<br>
</p>
</blockquote>
<pre>   $<i>name</i>[<i>selector</i>]
   ${<i>name</i>[<i>selector</i>]}</pre>
<blockquote>
<p> Substitutes  only  the  selected  words from the value of <i>name</i>.
The <i>selector</i> is subjected to $ substitution and  can consist<br>
of  a  single  number  or  two numbers separated by a '-'.  The
first word of a variable's value is numbered '1'.  If the first
number  of  a range is omitted it defaults to '1'.  If the last
member of a range is omitted  it  defaults  to  '$#<i>name</i>'.   The<i>selector</i> '*' selects all words. It is not an error for a range
to be empty if the second argument is omitted or in range.<br>
</p>
</blockquote>
<pre>   $0</pre>
<blockquote>
<p> Substitutes the name of the file from which  command  input  is
being read.  An error occurs if the name is not known.<br>
</p>
</blockquote>
<pre>   $<i>number</i>
   ${<i>number</i>}</pre>
<blockquote>
<p> Equivalent to '$argv[<i>number</i>]'.<br>
</p>
</blockquote>
<pre>   $*</pre>
<blockquote>
<p> Equivalent to `$argv', which is equivalent to `$argv[*]'.<br>
<br>
The  ':'  modifiers  described  under <b>History</b> <b>substitution</b>, except for
':p', can be applied to the substitutions above.  More than one can be
used.   (+)  Braces  may  be needed to insulate a variable substitution
from a literal colon just as with <b>History</b> <b>substitution</b> (q.v.); any modifiers must appear within the braces.<br>
</p>
</blockquote>
<pre>   The following substitutions can not be modified with `:' modifiers.

   $?<i>name</i>
   ${?<i>name</i>}</pre>
<blockquote>
<p> Substitutes the string `1' if <i>name</i> is set, `0' if it is not.
$?0     Substitutes  `1' if the current input filename is known, `0' if
it is not.  Always `0' in interactive shells.<br>
</p>
</blockquote>
<pre>   $#<i>name</i>
   ${% raw %}{#{% endraw %}<i>name</i>}
        Substitutes the number of words in <i>name</i>.

   $#   Equivalent to `$#argv'. (+)

   $%<i>name</i>
   ${% raw %}{%{% endraw %}<i>name</i>}
        Substitutes the number of characters in <i>name</i>.  (+)

   $%<i>number</i>
   ${% raw %}{%{% endraw %}<i>number</i>}
        Substitutes the number of characters in $argv[<i>number</i>].  (+)
   $?   Equivalent to `$status'.  (+)
   $$   Substitutes the (decimal) process number of the (parent) shell.
   $!   Substitutes the (decimal) process number of the last background
        process started by this shell.  (+)
   $_   Substitutes the command line of the last command executed.  (+)
   $&lt;</pre>
<p> Substitutes  a  line  from  the standard input, with no further
interpretation thereafter.  It can be used  to  read  from  the<br>
keyboard in a shell script.  (+) While <i>csh</i> always quotes $&lt;, as
if it were equivalent to `$&lt;:q', <i>tcsh</i> does  not.   Furthermore,<br>
when <i>tcsh</i>  is waiting for a line to be typed the user may type
an interrupt to interrupt the sequence into which the  line  is<br>
to be substituted, but <i>csh</i> does not allow this.<br>
</p>
<pre>       The  editor  command <i>expand-variables</i>, normally bound to `^X-$', can be
       used to interactively expand individual variables.</pre>
<h2>Command, filename and directory stack substitution</h2>
<blockquote>
<p> The remaining substitutions are applied selectively to the arguments of
builtin commands.   This  means that portions of expressions which are
not evaluated are not subjected to  these  expansions.  For  commands
which  are  not internal to the shell, the command name is substituted
separately from the argument list.  This occurs very late, after input-output redirection is performed, and in a child of the main shell.</p>
</blockquote>
<h2>Command substitution</h2>
<blockquote>
<p> Command substitution  is  indicated by a command enclosed in<span class="code"> `</span>.  The
output from such a command is broken into  separate  words  at  blanks,
tabs  and  newlines, and null words are discarded.  The output is variable and command substituted and put in place of the original string.<br>
<br>
Command substitutions inside double  quotes  (<span class="code">"</span>)  retain  blanks  and       
tabs; only newlines force new words.  The single final newline does not       
force a new word in any case.  It is thus possible for a  command  substitution  to  yield only part of a word, even if the command outputs a       
complete line.</p>
</blockquote>
<h2>Filename substitution</h2>
<blockquote>
<p> If a word contains any of the characters <span class="code">*, ?, [ or { </span>or begins       
with  the  character  <span class="code">~</span> it is a candidate for filename substitution,       
also known as `globbing'.  This word is then regarded as a pattern       
(`glob-pattern'),  and replaced with an alphabetically sorted list of       
file names which match the pattern.<br>
<br>       
In matching filenames, the character<span class="code"> . </span>at the beginning of a filename       
or  immediately following  a<span class="code"> / </span>, as well as the character<span class="code"> / </span>must be       
matched explicitly.  <br>
The character<span class="code"> * </span>matches any  string  of  characters,  including the null string.  <br>
The character<span class="code"> ? </span>matches any single       
character.  <br>
The sequence <span class="code">[...]</span> matches  any  one  of  the  characters       
enclosed.   Within  <span class="code">[...]</span>,  a pair  of  characters  separated by -       
matches any character lexically between the two.<br>
<br>       
(+) Some glob-patterns can be negated: The  sequence  <span class="code">[^...]</span> matches       
any  single  character <i>not</i> specified by the characters and/or ranges of       
characters in the braces.<br>
<br>       
An entire glob-pattern can also be negated with <span class="code">^</span>:</p>
<pre>    &gt; echo *
    bang crash crunch ouch
    &gt; echo ^cr*
    bang ouch

    Glob-patterns which do not use ?, *, or [] or which use  {}  or
       ~ (below) are not negated correctly.</pre>
<p>The  metanotation  <span class="code">`a{b,c,d}e'</span> is a shorthand for <span class="code">`abe ace ade'</span>.  Left-
to-right order is preserved: <span class="code">`/usr/source/s1/{oldls,ls}.c'</span>  expands  to
<span class="code">`/usr/source/s1/oldls.c /usr/source/s1/ls.c'</span>. The results of matches
are  sorted  separately at  a  low  level  to  preserve  this order:<br>
`../{memo,*box}'  might expand to `../memo ../box ../mbox'.  (Note that
`memo' was not sorted with the results of matching `*box'.)  It is  not
an  error  when this construct expands to files which do not exist, but
it is possible to get an error from a command  to  which  the  expanded
list  is  passed.  This construct may be nested.  As a special case the
words `{', `}' and `{}' are passed undisturbed.<br>
<br>
The character<span class="code"> ~ </span>at the beginning of a filename refers to home directories.  Standing  alone,  i.e.,<span class="code"> ~ </span>, it expands to the invoker's home
directory as reflected in the value of the <b>home</b> shell  variable.   When
followed by a name consisting of letters, digits and - characters the
shell searches for a user with that name  and  substitutes  their  home
directory;  thus `<span class="code">~ken</span>' might expand to `<span class="code">/usr/ken</span>' and `<span class="code">~ken/chmach</span>' to
`<span class="code">/usr/ken/chmach</span>'.  If the character<span class="code"> ~ </span>is  followed  by  a  character
other  than  a letter or<span class="code"> / </span>or appears elsewhere than at the beginning
of a word, it is left undisturbed.   A  command like  `setenv  MANPATH
/usr/man:/usr/local/man:~/lib/man'  does not, therefore, do home directory substitution as one might hope.<br>
<br>
It is an error for a glob-pattern containing <span class="code">*, ?, [ or ~</span>, with
or without <span class="code">^</span>, not to match any files. However, only one pattern in a
list of glob-patterns must match a file (so that,  e.g.,  `rm  *.a  *.c
*.o'  would  fail  only if there were no files in the current directory
ending in <span class="code">.a, .c, or .o</span>), and if the <b>nonomatch</b> shell variable  is
set  a  pattern (or  list  of  patterns) which matches nothing is left
unchanged rather than causing an error.<br>
<br>
The <b>noglob</b> shell variable can be set to prevent filename  substitution,
and  the <i>expand-glob</i> editor command, normally bound to `^X-*', can be
used to interactively expand individual filename substitutions.</p>
</blockquote>
<h2>Directory stack substitution (+)</h2>
<blockquote>
<p> The directory stack is a list of directories, numbered from zero,  used
by  the <i>pushd</i>, <i>popd</i> and <i>dirs</i> builtin commands (q.v.). <i>dirs</i> can print,
store in a file, restore and clear the directory stack at any time, and
the <b>savedirs</b> and <b>dirsfile</b> shell  variables  can be set to store the
directory stack automatically on logout and restore it on  login.   The<br>
<b>dirstack</b> shell variable can be examined to see the directory stack and
set to put arbitrary directories into the directory stack.<br>
<br>
The character<span class="code"> = </span>followed by one or more digits expands to an entry in
the  directory stack.  The special case<span class="code"> =- </span>expands to the last directory in the stack.  For example,</p>
<pre>    &gt; dirs -v
    0    /usr/bin
    1    /usr/spool/uucp
    2    /usr/accts/sys
    &gt; echo =1
    /usr/spool/uucp
    &gt; echo =0/calendar
    /usr/bin/calendar
    &gt; echo =-
    /usr/accts/sys</pre>
<p>The <b>noglob</b> and <b>nonomatch</b> shell variables  and  the <i>expand-glob</i> editor
command apply to directory stack as well as filename substitutions.</p>
</blockquote>
<h2> Other substitutions (+)</h2>
<blockquote>
<p> There are several more transformations involving filenames, not strictly related to the above but mentioned here for completeness. <i>Any</i> filename  can be  expanded  to a full path when the <b>symlinks</b> variable
(q.v.) is set to `expand'.  Quoting prevents this  expansion,  and  the <i>normalize-path</i> editor command does it on demand.  The <i>normalize-command</i> editor command expands commands in PATH into  full  paths  on  demand.<br>
Finally, <i>cd</i> and <i>pushd</i> interpret  `-'  as  the old working directory
(equivalent to the shell variable <b>owd</b>). This is not a substitution  at
all,  but  an abbreviation recognized by only those commands.  Nonetheless, it too can be prevented by quoting.</p>
</blockquote>
<p><b>Related:</b>
</p><p><a href="syntax.html">OS X Syntax</a><br>
List of all <a href="syntax-env_vars.html">Environment variables</a><br>
<a href="env.html">env</a> - List or Set environment variables</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-variables.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
