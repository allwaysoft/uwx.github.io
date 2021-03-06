---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>tput</h1> 
<p>Set terminal-dependent capabilities, color, position.</p>
<pre>Syntax
      tput [-T<i>type</i>] <i>capname</i> [<i>parms</i> ... ]
      tput [-T<i>type</i>] init
      tput [-T<i>type</i>] reset
      tput [-T<i>type</i>] longname
      tput -S  &lt;&lt;
      tput -V

Key

   -Ttype  Indicates the type of terminal.  Normally this option is  unnecessary
           because the default is taken from the environment variable TERM.
           f -T is specified, then the shell  variables  LINES and COLUMNS will be
           ignored,and the operating system will not be queried for the actual screen size.

   <i>capname</i>
           Indicates the capability from the terminfo database.
           When termcap  support is compiled in, the termcap name for the capability
           is also accepted.
           Typical capabilities include:
             tput setab <i>color</i>  Set ANSI Background color
             tput setaf <i>color</i>  Set ANSI Foreground color
             tput blink   Set blink mode
             tput bold    Set bold mode
             tput dim     Set half-bright mode
             tput smul    Set underline mode
             tput rmul    Exit underline mode
             tput rev     Reverse mode
             tput smso    Set standout mode
             tput rmso    Exit standout mode
             tput sgr0    Reset all attributes
             tput cols    Display the number of columns
             tput lines   Display the number of lines

   <i>parms</i>   If the capability is a string that takes parameters,  the  arguments
           parms will be instantiated into the string.

   -S      Allow more than one capability per invocation of tput. The capabilities must
           be passed to  tput  from  the  standard  input instead  of  from the command
           line (see example).  Only one capname is allowed per line.

   -V      Reports the version of ncurses which was used in  this  program, and exits.

   init    If the terminfo database is present and an entry for the user's
           terminal exists (see -Ttype, above), output the terminal's initialization strings
           and turn tabs expansion on or off according to the specification in the entry

   reset   Instead of putting out initialization strings, the terminal's reset strings
           will be output if present (rs1, rs2, rs3, rf).  If the reset strings are not
           present, but initialization strings are, the initialization  strings will be
           output. Otherwise, reset acts identically to init.

   longname
           If the terminfo database is present and an entry for the user's  terminal exists
           (see -Ttype above), then the long name of the terminal will be put out.
           The long name is the last name in the first line of the terminal's description in
           the  terminfo  database [see term(5)].

       If  tput  is invoked by a link named reset, this has the same effect as
       tput reset.  See tset for comparison, which has similar behavior.</pre>
<h2> Color Codes</h2>
<blockquote>
<p> Black  = 0  <br>
Red  = 1  <br>
Green = 2  <br>
Yellow  = 3  <br>
Blue  = 4<br>
Magenta  = 5<br>
Cyan  = 6<br>
White  = 7<br>
Reset to default color = 9</p>
</blockquote>
<p>Colours set with tput can be used as part of a <a href="syntax-prompt.html">$PS Prompt Statement variable</a>, if you do this,   store the output of tput  into a variable, which is then used when $PS1 is expanded. Storing the values means we <a href="http://mywiki.wooledge.org/BashFAQ/037">don't</a> have to fork a <span class="code">tput</span> process multiple times every time the prompt is displayed.</p>
<p>tput is part of the ncurses package and is supplied with most Linux distributions.</p>
<p><b>Examples</b></p>
<p> Echo the clear-screen sequence for the current terminal.<br>
<span class="code">tput clear</span></p>
<p>Set the foreground colour to Red.<br>
<span class="code">tput setaf 1</span></p>
<p>Print the number of columns for the current terminal.<br>
<span class="code">tput cols </span></p>
<p><i class="quote">“You are capable of more than you know. Choose a goal that seems right for you and strive to be the best, however hard the path. Aim high” ~ 
</i><i class="quote">Edward O. Wilson</i><br>
<br>
<b>Related:</b></p>
<p><a href="syntax-prompt.html">$PS Prompt Statement variables</a></p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="tput.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

