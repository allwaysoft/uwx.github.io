---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>getopt</h1> 
<p>Parse positional parameters.<br>
  Break up the options in a command line (for easy parsing by shell procedure), 
and check for legal options.</p>
<pre>Syntax
      args=`getopt <i>optstring</i> $*` ; errcode=$?; set -- $<i>args</i>

Options<i>
</i>   <i>Optstring</i>  A string of recognized option letters 
              either individual characters or characters followed by a colon 
              to indicate an argument is to follow.
              e.g. an option string  x recognizes an option "-x",
              and an option string  x: recognizes an option and argument "-x <i>argument</i>".
              It does not matter if the argument has leading white space.

   --        This special option is used to delimit the end of the options.
             getopt will place  `--' in the arguments at the end of the options,
             or recognize it if used  explicitly. 

($1 $2 ...)   The shell arguments  are reset so that each
              option is preceded by a `-' and in its own shell argument; 
              each option argument is also in its own shell argument.</pre>
<p><b>Examples</b><br>
<br>
The following code fragment shows how one might process the arguments for
a command that can take the options -a and -b, and the option -o, which requires an argument.</p>
<pre>     args=`getopt abo: $*`
     # you should not use `getopt abo: "$@"` since that would parse
     # the arguments differently from what the set command below does.
     if [ $? != 0 ]
     then
       echo 'Usage: ...'
       exit 2
     fi
     set -- $args
     # You cannot use the set command with a backquoted getopt directly,
     # since the exit code from getopt would be shadowed by those of set,
     # which is zero by definition.
     for i
     do
       case "$i"
       in
         -a|-b)
           echo flag $i set; sflags="${i#-}$sflags";
           shift;;
         -o)
           echo oarg is "'"$2"'"; oarg="$2"; shift;
           shift;;
         --)
           shift; break;;
       esac
     done
     echo single-char flags: "'"$sflags"'"
     echo oarg is "'"$oarg"'"

     This code will accept any of the following as equivalent:

     cmd -aoarg file file
     cmd -a -o arg file file
     cmd -oarg -a file file
     cmd -a -oarg -- file file</pre>
<p class="quote"><i>“You spend a good piece of your life gripping a baseball and in the end it turns out that it was the other way around all the time” ~ Jim Bouton </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/getopt.1.html">getopt man page</a> - Apple.com<br>
<a href="getopts.html">getopts</a> - Parse positional parameters</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
