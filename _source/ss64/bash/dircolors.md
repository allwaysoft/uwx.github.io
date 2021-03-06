---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>dircolors</h1> 
<p>Color setup for `ls', outputs a sequence of shell commands to 
set up the terminal for color output from `ls' (and `dir', etc.).</p>
<pre>Syntax

      eval `dircolors [<i>options</i>]... [<i>file</i>]`
</pre>
<p><span class="body">  If FILE is specified, `dircolors' reads it to determine which colors
  to use for which file types and extensions.  Otherwise, a precompiled<br>
  database is used.  For details on the format of these files, run
  `dircolors --print-database'.<br>
    <br>
  The output is a shell command to set the `LS_COLORS' environment
  variable.  You can specify the shell syntax to use on the command line,
  or `dircolors' will guess it from the value of the `SHELL' environment
  variable.</span></p>
<pre>Options 

 -b
 --sh
 --bourne-shell
     Output Bourne shell commands.  This is the default if the `SHELL'
     environment variable is set and does not end with `csh' or `tcsh'.

 -c 
 --csh
 --c-shell
     Output C shell commands.  This is the default if `SHELL' ends with
     `csh' or `tcsh'.

 -p
 --print-database
     Print the (compiled-in) default color configuration database.  This
     output is itself a valid configuration file, and is fairly
     descriptive of the possibilities.</pre>
<p class="quote">"How beautiful the leaves grow old. How full of light and color are their last days" ~ John Burroughs</p>
<p><b>Related:</b><br>
<br>
<a href="ls.html">ls</a> - List information about FILEs<br>
Equivalent Windows command:<a href="../nt/color.html"> COLOR</a> - Change colour of the CMD window</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dircolors.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

