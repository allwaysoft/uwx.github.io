---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>history</h1> 
<p>Command Line history</p>
<pre>Syntax
      history 
      history [n]
      history -c
      history -d <i>offset</i>
      history [-anrw] [<i>filename</i>]
      history -ps <i>arg</i>

Key
   -c   Clear the history list. This can be combined with the other
        options to replace the history list completely.

   -d offset 
        Delete the history entry at position offset. 
        offset should be specified as it appears when the history is displayed. 

   -a   Append the new history lines (history lines entered since 
        the beginning of the current Bash session) to the history file. 

   -n   Append the history lines not already read from the history file 
        to the current history list. These are lines appended to the 
        history file since the beginning of the current Bash session. 

   -r   Read the current history file and append its contents to the history list. 

   -w   Write out the current history to the history file. 

   -p   Perform history substitution on the args and display the result 
        on the standard output, without storing the results in the history list. 

   -s   The args are added to the end of the history list as a single entry. 
 </pre>
<p>With no options, display the history list with line numbers. Lines 
  prefixed with with a `*' have been modified. An argument of n lists only the 
  last n lines. <br>
  When any of the `-w', `-r', `-a', or `-n' options are used, if filename is given, 
  then it is used as the history file. If not, then the value of the HISTFILE 
  variable is used.
</p><h2>Recalling a previous command</h2>
<blockquote>
<p> Pressing the UP arrow will return to previous commands.<br>
  <br>
  To return to a previously entered command, type ctrl-r and then begin typing 
  the command. This will finish the command for you as you type. If you can remember 
  to use ctrl-r, it will become invaluable for repeating longer commands. <br>
  <br>
  To find a specific command among many previous commands; pipe history through 
  grep:<br>
history|<a href="grep.html">grep</a> -i <i>first few letters of command</i></p>
</blockquote>
<h2>History Expansion</h2>
<blockquote>
<p>  History expansions introduce words from the history list into the input stream, 
  making it easy to repeat commands, insert the arguments to a previous command 
  into the current input line, or fix errors in previous commands quickly. <br>
  <br>
  History expansion takes place in two parts. The first is to determine which 
  line from the history list should be used during substitution. The second is 
  to select portions of that line for inclusion into the current one. <br>
  <br>
  The line selected from the history is called the event, and the portions of 
  that line that are acted upon are called words. Various modifiers are available 
  to manipulate the selected words. The line is broken into words (several words 
  surrounded by quotes are considered one word). <br>
  <br>
  History expansions are introduced by the appearance of the history expansion 
  character, which is `!' by default. Only `\' and `'' can be used to escape the 
  history expansion character. <br>
  <br>
  Several shell options settable with the <a href="shopt.html">shopt</a> builtin 
  can be used to tailor the behavior of history expansion. <br>
  <br>
  The `-p' option to the history builtin command can be used to see what a history 
  expansion will do before using it. <br>
  <br>
  The `-s' option to the history builtin can be used to add commands to the end 
  of the history list without actually executing them, so that they are available 
for subsequent recall.</p>
</blockquote>
<h2>Event Designators </h2>
<blockquote>
<p>  An event designator is a reference to a command line entry in the history list. 
  <br>
</p>
<pre>!             Start a history substitution, except when followed by a space, 
              tab, the end of the line, `=' or `('. 

!n            Refer to command line n. 

!-n           Refer to the command n lines back. 

!!            Refer to the previous command. This is a synonym for `!-1'. 

!string       Refer to the most recent command starting with string. 

!?string[?]   Refer to the most recent command containing string. 
              The trailing `?' can be omitted if the string is followed 
              immediately by a newline. 

^string1^string2^   Quick Substitution. Repeat the last command, replacing string1 
                    with string2. Equivalent to !!:s/string1/string2/. 

!#            The entire command line typed so far. </pre>
</blockquote>
<h2> Word Designators</h2>
<blockquote>
<p>  Word designators are used to select desired words from the event. A `:' separates 
  the event specification from the word designator. It can be omitted if the word 
  designator begins with a `^', `$', `*', `-', or `%'. Words are numbered from 
  the beginning of the line, with the first word being denoted by 0 (zero). Words 
  are inserted into the current line separated by single spaces. </p>
<pre>For example, 

!!      designates the preceding command. When you type this, the 
        preceding command is repeated in toto. 

!!:$    designates the last argument of the preceding command. 
        This can be shortened to !$. 

!fi:2   designates the second argument of the most recent command 
        starting with the letters fi. 

Here are the word designators: 

0 (zero) The 0th word. For many applications, this is the command word.

<i>n</i>        The <i>n</i>th word. 

^        The first argument; that is, word 1. 

$        The last argument. 

%        The word matched by the most recent `?string?' search. 

x-y      A range of words; `-y' abbreviates `0-y'. 

*        All of the words, except the 0th. This is a synonym for `1-$'. 
         It is not an error to use `*' if there is just one word in the event;
         the empty string is returned in that case. 

x*       Abbreviates `x-$' 

x-       Abbreviates `x-$' like `x*', but omits the last word.

If a word designator is supplied without an event specification, 
the previous command is used as the event.</pre>
</blockquote>
<h2>Modifiers</h2>
<blockquote>
<p>
After the optional word designator, you can add a sequence of one or more of the 
following modifiers, each preceded by a `:'. </p>
<pre>h   Remove a trailing pathname component, leaving only the head. 

t   Remove all leading pathname components, leaving the tail. 

r   Remove a trailing suffix of the form `.suffix', leaving the basename. 

e   Remove all but the trailing suffix. 

p   Print the new command but do not execute it. 

q   Quote the substituted words, escaping further substitutions. 

x   Quote the substituted words as with `q', but break into words at
    spaces, tabs, and newlines.

s/old/new/ 
    Substitute new for the first occurrence of old in the event line. 
    Any delimiter can be used in place of `/'. The delimiter can be 
    quoted in old and new with a single backslash. 
    If `&amp;' appears in new, it is replaced by old. 
    A single backslash will quote the `&amp;'. 
    The final delimiter is optional if it is the last character on the input line. 

&amp;   Repeat the previous substitution. 

g   Cause changes to be applied over the entire event line. 
    Used in conjunction with `s', as in gs/old/new/, or with `&amp;'.</pre>
</blockquote>
<h2>History Configuration</h2>
<blockquote>
<p><span class="code">export HISTCONTROL=erasedups<br>
export HISTSIZE=10000<br>
shopt -s histappend</span></p>
<p># Remove duplicates from history (when a new item is added).<br>
# Increase the history size.<br>
# Append history to ~/.bash_history. when you exit a shell<br>
From Allan Odgaard’s excellent <a href="http://blog.macromates.com/2008/working-with-history-in-bash/">Working With History in Bash</a></p>
<p><span class="code">set show-all-if-ambiguous on</span> - Alters the default behavior of the completion functions. If set to ‘on’, words which have more than one possible completion cause the matches to be listed immediately instead of ringing the bell.<span class="code"><br>
set completion-ignore-case on</span> - Case insensitive matching (Readline).<br>
</p>
</blockquote>
<p><b>Examples (bang commands) </b></p>
<p>The following bang commands work in not just bash but also  tcsh and zsh too.<br>
Not every
bang command will work in every shell, but these are pretty universal . </p>
<p>assume these are the last
  three commands you ran:</p>
<p class="code"> % which firefox<br>
  % make<br>
  % ./foo -f foo.conf<br>
% vi foo.c bar.c</p>
<p>Getting stuff from the last command:</p>
<pre> Full line: % !!            becomes: % vi foo.c bar.c
 Last arg : % svn ci !$     becomes: % svn ci bar.c
 All args : % svn ci !*     becomes: % svn ci foo.c bar.c
 First arg: % svn ci !!:1   becomes: % svn ci foo.c</pre>
<p>Accessing commandlines by pattern:</p>
<pre> Full line: % !./f          becomes: % ./foo -f foo.conf
 Full line: % vi `!whi`     becomes: % vi `which firefox`
 Last arg : % vi !./f:$     becomes: % vi foo.conf
 All args : % ./bar !./f:*  becomes: % ./bar -f foo.conf
 First arg: % svn ci !vi:1  becomes: % svn ci foo.c</pre>
<p>Example from Kevin Lyda  (Irish Linux Users' Group)<br>
  Various shells have options that can affect this. Be careful with
  shells that let you share history among instances. Some shells also<br>
  allow bang commands to be expanded with tabs or expanded and reloaded
on the command line for further editing when you press return.</p>
<p><i class="quote">"I never cared for fashion much, amusing little seams and witty little pleats: it was the girls I liked" ~ David Bailey </i><br>
<br>
<b> Related:</b></p>
<p><a href="set.html">set -o history</a> - Enable/Disable history<br>
set history = 8 - Set the size of the history list.<br>
fc - Fix History Command<br>
<a href="syntax-bashrc.html">bashrc</a> - Set <span class="code">history</span> commands at every login.<br>
<a href="bind.html">bind</a> - Set or display readline key bindings to recall history.<br>
<a href="hash.html">hash</a> - Remember the full pathname of a name argument<br>
<a href="time.html">time</a> - Measure Program Resource Use <br>
Equivalent Windows PowerShell cmdlet: 
<a href="../ps/get-history.html">Get-History</a> - Get commands entered during the current session.</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

