---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>getopts</h1> 
<p>Parse positional parameters.</p>
<pre>Syntax
      getopts <i>optstring</i> <i>name</i> [<i>args</i>]

Key
   optstring   The option characters to be recognized</pre>
<p>getopts  is  used  by shell procedures to parse positional parameters.  <i>optstring</i> contains the option characters to be recognized; if a character is followed  by  a  colon,  the  option  is
expected to have an argument, which should be separated from it by white space.  The colon and question mark characters can not be used as option  characters.   </p>
<p>Each  time  it  is  invoked,
getopts  places  the  next option in the shell variable <i>name</i>, initializing <i>name</i> if it does not exist, and the index of the next argument to be processed into the variable OPTIND.  OPTIND is
initialized to 1 each time the shell or a shell script is invoked.  </p>
<p>When an option requires an argument, getopts places that argument into the variable OPTARG.  The  shell  does  not  reset
OPTIND  automatically;  it must be manually reset between multiple calls to getopts within the same shell invocation if a new set of parameters is to be used.</p>
<p> When the end of options is encountered, getopts exits with a return value greater than zero. OPTIND is set to the index of the first non-option argument, and <i>name</i> is set to ?.</p>
<p> getopts normally parses the positional parameters ($0 - $9), but if more arguments are given in <i>args</i>, getopts parses those instead.</p>
<p> getopts can report errors in two ways. If the first character of <i>optstring</i> is a colon, silent error reporting is used. In normal operation diagnostic messages are printed when invalid
options or missing option arguments are encountered. If the variable OPTERR is set to 0, no error messages will be displayed, even if the first character of <i>optstring</i> is not a colon.</p>
<p> If an invalid option is seen, getopts places ? into <i>name</i> and, if not silent, prints an error message and unsets OPTARG. If getopts is silent, the option character found is placed in
OPTARG and no diagnostic message is printed.</p>
<p> If a required argument is not found, and getopts is not silent, a question mark (?) is placed in <i>name</i>, OPTARG is unset, and a diagnostic message is printed. If getopts is silent, then a
colon (:) is placed in <i>name</i> and OPTARG is set to the option character found.</p>
<p> getopts returns true if an option, specified or unspecified, is found. It returns false if the end of options is encountered or an error occurs.</p>
<p> getopts is a bash built in command: <span class="code"> $ help getopts</span></p>
<p class="quote"><i>“Music is your own experience, your own thoughts, your wisdom. If you don't live it, it won't come out of your horn. They teach you there's a boundary line to music. But, man, there's no boundary line to art” ~ Charlie Parker</i></p>
<p><b>Related:</b></p>
<p>
<a href="getopt.html">getopt</a> - Parse positional parameters</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="getopts.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
