---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Prompt Statement variables</h1> 
<p>There are several variables that can be set to control the appearance of the bach command prompt: PS1, PS2, PS3, PS4 and PROMPT_COMMAND the contents are executed just as if they had been typed on the command line.</p>
<p>PS1 – Default interactive prompt (this is the variable most often customized) <br>
PS2 – Continuation interactive prompt (when a long command is broken up with<span class="code"> \ </span>at the end of the line) default="&gt;" <br>
PS3 – Prompt used by “select” loop inside a shell script<br>
PS4 – Prompt used when a shell script is executed in debug mode (“<a href="set.html">set</a> -x” will turn this on) default ="++"<br>
PROMPT_COMMAND -  
If this variable is set and has a non-null value, then  it will be executed   just before  the PS1 variable.</p>
<p>Set your prompt by changing the value of the PS1 environment variable, as follows:</p>
<p class="code">$ export PS1="My simple prompt&gt; "<br>
&gt;</p>
<p>This change can be made permanent by placing the "export" definition in your <span class="code"><a href="syntax-bashrc.html">~/.bashrc</a></span> file.</p>
<h2>Special prompt variable characters: </h2>
<pre> \d   The date, in "Weekday Month Date" format (e.g., "Tue May 26"). 

 <b>\h</b>   The <b>hostname</b>, up to the first . (e.g. deckard) 
 \H   The hostname. (e.g. deckard.SS64.com)

 \j   The number of jobs currently managed by the shell. 

 \l   The basename of the shell's terminal device name. 

 \s   The name of the shell, the basename of <code>$0</code> (the portion following 
      the final slash). 

 \t   The time, in 24-hour HH:MM:SS format. 
 \T   The time, in 12-hour HH:MM:SS format. 
 \@   The time, in 12-hour am/pm format. 

 <b>\u</b>   The <b>username</b> of the current user. 

 \v   The version of Bash (e.g., 2.00) 

 \V   The release of Bash, version + patchlevel (e.g., 2.00.0) 

 <b>\w</b>   The current <b>working directory</b>. 
 \W   The basename of <code>$PWD</code>. 

 \!   The history number of this command. 
 \#   The command number of this command. 

 \$   If you are not root, inserts a "$"; if you are root, you get a "#"  (root uid = 0) 

 \<i>nnn</i>   The character whose ASCII code is the octal value <var>nnn</var>. 

 \n   A newline. 
 \r   A carriage return. 
 \e   An escape character (typically a color code). 
 \a   A bell character.
 \\   A backslash. 

 \[   Begin a sequence of non-printing characters. (like color escape sequences). This
      allows bash to calculate word wrapping correctly.

 \]   End a sequence of non-printing characters.</pre>
<blockquote>
<p>Using <b>single</b> quotes instead of <a href="syntax-quoting.html">double quotes</a> when exporting your PS variables is recommended, it makes the prompt a tiny bit faster to evaluate plus you can then do an <span class="code">echo&nbsp;$PS1</span> to see the current prompt settings.</p>
<p>Command/History Numbers</p>
<p>The command number and the <a href="history.html">history</a> number are usually different: the history number of a command is its position in the history list, which can include commands restored from the history file, while the command number is the position in the sequence of commands executed. </p>
<p>After the string is decoded, it is expanded via parameter expansion, command substitution, arithmetic expansion, and quote removal, subject to the value of the <code>promptvars</code> shell option.</p>
</blockquote>
<h2>Color Codes (ANSI Escape Sequences)</h2>
<blockquote>
<p> Foreground colors, Normal (non-bold) is the default, so the <span class="code">0;</span> prefix is optional.</p>
<p><span class="code">\e[0;30m</span> = Dark Gray<br>
<span class="code">\e[1;30m</span> = Bold Dark Gray<br>
<span class="code">\e[0;31m</span> = <span class="red">Red</span><br>
<span class="code">\e[1;31m</span> = Bold Red<br>
<span class="code">\e[0;32m</span> = <span class="green">Green</span><br>
<span class="code">\e[1;32m</span> = Bold Green<br>
<span class="code">\e[0;33m</span> = <span class="yellow">Yellow</span><br>
<span class="code">\e[1;33m</span> = Bold Yellow<br>
<span class="code">\e[0;34m</span> = <span class="blue">Blue</span><br>
<span class="code">\e[1;34m</span> = Bold Blue<br>
<span class="code">\e[0;35m</span> = <span class="purple">Purple</span><br>
<span class="code">\e[1;35m</span> = Bold Purple<br>
<span class="code">\e[0;36m</span> = <span class="turquoise">Turquoise</span><br>
<span class="code">\e[1;36m</span> = Bold Turquoise<br>
<span class="code">\e[0;37m</span> = Light Gray<br>
<span class="code">\e[1;37m</span> = Bold Light Gray</p>
<p>Background colors:</p>
<p><span class="code">\e[40m</span> = Dark Gray<br>
<span class="code">\e[41m</span> = <span class="red">Red</span><br>
<span class="code">\e[42m</span> = <span class="green">Green</span><br>
<span class="code">\e[43m</span> = <span class="yellow">Yellow</span><br>
<span class="code">\e[44m</span> = <span class="blue">Blue</span><br>
<span class="code">\e[45m</span> = <span class="purple">Purple</span><br>
<span class="code">\e[46m</span> = <span class="turquoise">Turquoise</span><br>
<span class="code">\e[47m</span> = Light Gray</p>
<p>An alternative, more portable and   more intuitive method of setting colors is to use <a href="tput.html">tput</a>, this will read the terminfo database with all the escape codes necessary for interacting with your terminal. <br>
If you use tput instead of hard-coding the escape sequences, you can set the TERM variable to control whether color codes are output. This also makes the output portable to terminals other than xterm.</p>
</blockquote>
<p><b>Examples</b></p>
<p>Set a prompt like: [username@hostname:~/CurrentWorkingDirectory]$ </p>
<p class="code">export PS1='<b>[</b>\u<b>@</b>\h:\w<b>]</b>\$ '</p>
<p>Set a prompt in color, note the escapes for the non printing characters [ ] , these ensure that readline can keep track of the cursor position correctly.</p>
<p class="code">export PS1='<b>\[</b>\e[31m<b>\]</b>\u@\h:\w<b>\[</b>\e[0m<b>\]</b> '</p>
<p>Set a prompt with both foreground and background  colors, set via <a href="tput.html">tput</a>:</p>
<p class="code">magenta=$(tput setaf 5)<br>
blue=$(tput setaf 4) <br>
reset=$(tput sgr0)<br>
export PS1='<b>[</b>\[<span class="magenta">$magenta</span>\]<b>\u</b>\[$reset\]<b>@</b>\[<span class="magenta">$magenta</span>\]\h\[$reset\]:\[<span class="blue">$blue</span>\]<b>\w</b>\[$reset\]<b>]\</b>\$ '</p>
<p><span class="quote">“There is a time for departure even when there's no certain place to go”  ~ Tennessee Williams</span></p>
<p><b>Related</b>:<br>
  <br>
  <a href="env.html">env</a> - Display, set, or remove environment variables<a href="export.html"> 
  <br>
  export</a> - Set an environment variable<br>
<a href="https://www.kirsle.net/wizards/ps1.html">Bash $PS1 generator</a> - Generate a custom colorful bash prompt. (tput codes)<br>
<a href="http://bashrcgenerator.com/">bashrc $PS1 generator</a> - Generate a custom colorful bash prompt. (<i>XX</i>m escape color codes)<br>
<a href="http://tldp.org/HOWTO/Bash-Prompt-HOWTO/index.html">Bash Prompt HowTo</a><br>
Windows equivalent: <a href="../nt/prompt.html">PROMPT</a> - Change the command prompt</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-prompt.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
