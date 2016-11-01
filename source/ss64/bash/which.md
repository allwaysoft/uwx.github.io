---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>which</h1> 
<p>Locate a program file in the user's path. </p>
<p>For each of its arguments which prints to stdout the full path 
  of the executable(s). It does this by searching the directories listed in the 
environment variable PATH.</p>
<pre>Syntax
      which [<i>options</i>] [--] <i>program_name</i> [...]

Options
    --all, -a
        Print all matching executables in PATH, not just the
        first.

    --read-alias, -i
        Read aliases from stdin, reporting matching ones on
        stdout.  This is useful in combination with using an
        alias for which itself. For example
        alias which='alias | which -i'.

    --skip-alias
        Ignore option --read-alias, if any.  This is useful to
        explicity search for normal binaries, while using the
        --read-alias option in an alias for which.

    --skip-dot
        Skip directories in PATH that start with a dot.

    --skip-tilde
        Skip directories in PATH that start with a tilde and
        executables which reside in the HOME directory.

    --show-dot
        If a directory in PATH starts with a dot and a matching 
        executable was found for that path, then print
        "./program_name" rather than the full path.

    --show-tilde
        Output a tilde when a directory matches the HOME
        directory.  This option is ignored when which is
        invoked as root.

    --tty-only
        Stop processing options on the right if not on tty.

    --version, -v, -V
        Print version information on standard output then exit
        successfully.

    --help
        Print usage information on standard output then exit
        successfully.

RETURN VALUE
       Which returns the number of failed arguments, or -1 when
       no programname was given.

EXAMPLE
       A useful way to use this utility is by adding an alias for
       which like the following:

       alias which='which --tty-only --show-tilde --show-dot'

       This will print the readable ~/ and ./ when starting which
       from  your prompt, while still printing the full path when
       used from a script:

              &gt; which q2
              ~/bin/q2
              &gt; echo `which q2`
              /home/carlo/bin/q2

       Aliases are also supported, through the use  of  an  alias
       for  which  itself.   An  example  alias for which that is
       using this feature is as follows:

       alias which='alias | which --tty-only --read-alias --show-tilde --show-dot'

       This will print the output of alias for  each  alias  that
       matches  one  of  the given arguments.  For example, using
       this alias on itself in a tcsh:

              $ alias which alias \| /usr/bin/which -i !\*
              $ which which
              which   (alias | ./which -i !*)
                      /usr/bin/which

BUGS
       The HOME directory is determined by looking for  the  HOME
       environment  variable,  which  aborts  when  this variable
       doesn't exist.  Which will consider two equivalent  directories  
       to  be  different when one of them contains a path
       with a symbolic link.</pre>
<p><i class="quote">"A man should never be ashamed to own he has been in the 
wrong, which is saying in other words, that he is wiser today than he was yesterday" ~ Alexander Pope (thoughts on various subjects) </i><br>
<br>
<b> Related:</b><br>
<br>
<a href="pwd.html">pwd</a> - Print Working Directory <br>
<a href="hash.html">hash</a> - Remember the full pathname of a name argument 
<br>
pathchk - Check file name portability <br>
<a href="whereis.html">whereis</a> - Search the user's $path, man pages and source files for a program<br>
Equivalent Windows commands: <a href="../nt/where.html">WHERE</a> - Locate and display files in a directory 
tree.<br>
Equivalent PowerShell cmdlet: <span class="code">(<a href="../ps/get-command.html">get-command</a> $file).Definition</span><br>
Equivalents in Batch/Perl/VBScript - <a href="http://www.robvanderwoude.com/unixports.php#WHICH">WHICH Scripts</a></p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="which.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

