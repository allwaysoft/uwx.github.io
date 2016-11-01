---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>getopts</h1> 
<span class="body">getopts is used by shell scripts to parse positional parameters.</span><br>
<pre>Syntax
      getopts <i>optstring</i> <i>name</i> [<i>args</i>]

Options
      optstring : The option characters to be recognized

      If a character is followed by a colon, the option is expected to 
      have an argument, which should be separated from it by white space. 
      The colon (`:') and question mark (`?') can not be used as option characters.</pre>
<p>Each time it is invoked, getopts places the next option in the shell variable name, initializing name if it does not exist, and the index of the next argument 
  to be processed into the variable OPTIND. OPTIND is initialized to 1 each time the shell or a shell script is invoked. </p>
<p>When an option requires an argument, getopts places that argument into the variable OPTARG. The shell does not reset OPTIND automatically; it must be manually 
  reset between multiple calls to getopts within the same shell invocation if a new set of parameters is to be used. </p>
<p>When the end of options is encountered, getopts exits with a return value greater than zero. </p>
<p>OPTIND is set to the index of the first non-option argument, and name is set to `?'. getopts normally parses the positional parameters, but if more arguments 
  are given in args, getopts parses those instead. </p>
<p>getopts can report errors in two ways. If the first character of optstring is a colon, silent error reporting is used. In normal operation diagnostic messages 
are printed when invalid options or missing option arguments are encountered. 
<br>
<br>
If the variable OPTERR is set to 0, no error messages will be displayed, even if the first character of optstring is not a colon. <br>
If an invalid option is seen, getopts places `?' into name and, if not silent, prints an error message and unsets OPTARG. <br>
If getopts is silent, the option character found is placed in OPTARG and no diagnostic message is printed. If a required argument is not found, and getopts 
is not silent, a question mark (`?') is placed in name, OPTARG is unset, and a diagnostic message is printed. <br>
If getopts is silent, then a colon (`:') is placed in name and OPTARG is set to the option character found. </p>
<p>getopts is a bash built in command.</p>
<p class="quote"><i>"A man is only as faithful as his options" ~ Bill Mayher</i></p>
<p><b>Related:</b><br>
<br>
<a href="export.html">export</a> - Set an environment variable<br>
<a href="shift.html">shift</a> - Shift positional parameters <br>
Equivalent Windows commands: 
<a href="for.html">FOR</a> - Conditionally perform a command several times</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="getopts.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

