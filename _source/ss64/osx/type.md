---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>type</h1> 
<p>Describe a command.</p>
<pre>Syntax
       type [-aftpP] <i>name</i> [<i>name</i> ...]

Options
     With no options, indicate how each <i>name</i> would be interpreted if used as a command name.

     -t   Print a string describing the file type</pre>
<blockquote>
<blockquote>
<p>The string  printed is  one  of: <b>alias, keyword, function, builtin</b>, 
or <b>file</b> if <i>name </i>is an alias, shell reserved word, function, builtin, or disk file, respectively. 
If the <i>name</i> is not found, then nothing is printed, and an exit status of false is returned. </p>
</blockquote>
</blockquote>
<pre>     -p  Print the path of the disk file that <i>name</i> would execute as a command.
         returns nothing if `type -t name' would not return <b>file</b>.

     -P  Force a PATH search for each <i>name</i>, even if `type -t name' would not return <b>file</b>.</pre>
<blockquote>
<blockquote>
<p>If a command is hashed, -p and -P print the hashed value, not necessarily  the file that appears first in PATH. </p>
</blockquote>
</blockquote>
<pre>     -a  Prints all the places that contain an executable named <i>name</i>. </pre>
<blockquote>
<blockquote>
<p>This  includes  aliases and functions,  if  and only if the -p option is not also used.  <br>
The table of hashed commands is not consulted when using -a. </p>
</blockquote>
</blockquote>
<pre>    -f  Suppress shell function lookup, as with the command builtin.</pre>
<p>type returns true if any of the arguments are found, false if none are found.</p>
<p>type is a bash built in command.</p>
<p><b>Examples:</b></p>
<pre> $ type -a grep
 grep is /usr/bin/grep
 
 $ type type<br> type is a shell builtin

 $ type lsl
 lsl is a function
 lsl ()
 {
    ls -l $1
 }</pre>
<p class="quote"><i>"Character is not made in a crisis - it is only exhibited" ~ Robert Freeman </i></p>
<p><b>Related:</b></p>
<p><a href="which.html">which</a> - Locate a program file in the user's path <br>
<a href="ls.html">ls</a> - List information about file(s) <br>
<a href="locate.html">locate</a> - Find files</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="type.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
