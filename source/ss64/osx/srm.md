---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>srm</h1> 
<p>Securely remove files or directories.  srm  removes  each  specified file by overwriting, renaming, and truncating it before unlinking. This        prevents other people from undeleting or recovering any information about the file from  the  command        line.</p>
<pre>Syntax
      srm [<i>OPTION</i>]... <i>FILE</i>...

Options
   -d, --directory
              Ignored (for compatibility with rm(1))

   -f, --force
              Ignore nonexistent files, never prompt

   -i, --interactive
              Prompt before any removal

   -r, -R, --recursive
              Remove the contents of directories recursively

   -s, --simple
              Only overwrite with a single pass of random data

   -m, --medium
              Overwrite  the file with 7 US DoD compliant passes (0xF6, 0x00, 0xFF, random, 0x00, 0xFF, ran-dom) random)
              dom)

   -z, --zero
              After overwriting, zero blocks used by file

   -n, --nounlink
              Overwrite file, but do not rename or unlink it

   -v, --verbose
              Explain what is being done

   --help     Display this help and exit

   --version
              output version information and exit</pre>
<p>srm,  like  every  program  that uses the getopt function to parse its arguments, lets you use the --option -option        option to indicate that all following arguments are non-options.  To remove a file called '-f' in the        current directory, you could type either "srm -- -f" or "srm ./-f".</p>
<p>srm can not remove write protected files owned by another user, regardless of the permissions on  the        directory containing the file.        The  -s  option  overrides  the -m option, if both are present.  If neither is specified, the 35-pass        Gutmann algorithm is used.</p>
<p class="quote"><i>“The psychic task which a person can and must set for himself is not to feel secure, but to be able to tolerate insecurity” ~ Erich Fromm</i></p><p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/srm.1.html">srm man page</a> - Apple.com<br>
<a href="rm.html">rm</a> - Remove files<br>
<a href="rmdir.html">rmdir</a> - Remove empty folder<br>
</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="srm.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
