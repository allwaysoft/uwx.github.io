---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1><a href="ls.html">ls</a> environment variables </h1> 
<p> The following environment variables affect the execution of ls (and ls-F):</p>
<pre>The following environment variables affect the execution of ls (and ls-F):

     BLOCKSIZE
           If the environment variable BLOCKSIZE is set, the block
           counts (see -s) will be displayed in units of that size block.

     CLICOLOR
           Use ANSI color sequences to distinguish file types.  See
           LSCOLORS below.  In addition to the file types mentioned
           in the -F option some extra attributes (setuid bit set,
           etc.) are also displayed.   The colorization is dependent
           on a terminal type with the proper termcap(5) capabili-
           ties.  The default ``cons25'' console has the proper
           capabilities, but to display the colors in an xterm(1),
           for example, the TERM variable must be set to
           `xterm-color'.  Other terminal types might require similar
           adjustments.  Colorization is silently disabled if
           the output isn't directed to a terminal unless the
           <i>CLICOLOR_FORCE</i> variable is defined.

     CLICOLOR_FORCE
           Color sequences are normally disabled if the output isn't
           directed to a terminal.  This can be overridden by set-
           ting this flag.  The TERM variable still needs to refer-
           ence a color capable terminal however otherwise it is not
           possible to determine which color sequences to use.

     COLUMNS
           If this variable contains a string representing a decimal
           integer, it is used as the column position width for displaying
           multiple-text-column output.  The ls utility calculates
           how many pathname text columns to display based
           on the width provided.  (See -C and -x.)

     LANG
           The locale to use when determining the order of day and
           month in the long -l format output.  See environ(7) for
           more information.

     LISTLINKS
          If the `listlinks' shell variable is set,  ls-F will identify symbolic links
          in more detail (only on systems that have them, of course):

          @   Symbolic link to a non-directory
          &gt;   Symbolic link to a directory
          &amp;   Symbolic link to nowhere

          listlinks also slows down ls-F and causes partitions holding files
          pointed to by symbolic links to be mounted.

     LISTFLAGS
          If  the   `listflags' shell variable is set to `x', `a' or `A', or
          any combination thereof (e.g., `xA'), they are used as flags to ls-F,
          making it act like `ls -xF', `ls -Fa', `ls -FA' or a combination (e.g., `ls -FxA').
          On machines where `ls -C'  is  not the default, ls-F acts like `ls -CF', 
          unless listflags contains an `x', in which case it acts like `ls -xF'.  

          ls-F  passes  its arguments  to  ls(1)  if it is given any switches,
          so `alias ls  ls-F' generally does the right thing.
        
          The ls-F builtin can list files using different colors  depend-
          ing  on the filetype or extension.  See the color tcsh variable
          and the LSCOLORS environment variable (below).

     LSCOLORS
           The value of this variable describes what color to use
           for which attribute when colors are enabled with
           CLICOLOR.   This string is a concatenation of pairs of the
           format fb, where f is the foreground color and b is the
           background color.

           The color designators are as follows:

            a    black
            b    red
            c    green
            d    brown
            e    blue
            f    magenta
            g    cyan
            h    light grey
            A    bold black, usually shows up as dark grey
            B    bold red
            C    bold green
            D    bold brown, usually shows up as yellow
            E    bold blue
            F    bold magenta
            G    bold cyan
            H    bold light grey; looks like bright white
            x    default foreground or background

           Note that the above are standard ANSI colors.  The actual
           display can differ depending on the color capabilities of
           the terminal in use.

           The order of the attributes are as follows:

            1.   directory
            2.   symbolic link
            3.   socket
            4.   pipe
            5.   executable
            6.   block special
            7.   character special
            8.   executable with setuid bit set
            9.   executable with setgid bit set
            10.   directory writable to others, with sticky bit
            11.   directory writable to others, without sticky
            bit

           The default is "exfxcxdxbxegedabagacad", i.e. blue fore-
           ground and default background for regular directories,
           black foreground and red background for setuid executa-
           bles, etc.

     LS_COLWIDTHS
           If this variable is set, it is considered to be a colon-
           delimited list of minimum column widths.  Unreasonable
           and insufficient widths are ignored (thus zero signifies
           a dynamically sized column).  Not all columns have
           changeable widths.    The fields are, in order: inode,
           block count, number of links, user name, group name,
           flags, file size, file name.

     TERM  The CLICOLOR functionality depends on a terminal type
           with color capabilities.

     TZ    The timezone to use when displaying dates.    See
           environ(7) for more information.</pre>
<p class="quote"><i>"If the doors of perception were cleansed every thing would appear to man as it is, infinite" - William Blake</i></p>
<p><b>Related:</b><br>
<br>
<a href="dir.html">dir</a> - Briefly list directory contents<br>
<a href="ls.html">ls</a> - List information about FILEs<br>
<a href="wc.html">wc</a> - Print byte, word, and line counts <br>
Equivalent Windows commands: <a href="../nt/dir.html">
DIR</a> - Display a list of files and folders</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="lsenv.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

