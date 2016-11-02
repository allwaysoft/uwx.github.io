---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>uuencode, uudecode</h1> 
<p>Encode/decode a binary file</p>
<pre>Syntax
      uuencode [-m] [-o <i>output_file</i>] [<i>file</i>] <i>name</i>

      uudecode [-cips] [<i>file</i> ...]

      uudecode [-i] -o <i>output_file</i> [<i>file</i>]

Options uuencode:<i>
</i>
     -m     Use the Base64 method of encoding, rather than the traditional
            <b>uuencode</b> algorithm.

     -o <i>output</i>_<i>file</i>
            Output to <i>output</i>_<i>file</i> instead of standard output.

Options uudecode:

     -c     Decode more than one uuencode'd file from <i>file</i> if possible.

     -i     Do not overwrite files.

     -o <i>output</i>_<i>file</i>
            Output to <i>output</i>_<i>file</i> instead of any pathname contained in the
            input data.

     -p     Decode <i>file</i> and write output to standard output.

     -s     Do not strip output pathname to base filename.  By default
            <b>uudecode</b> deletes any prefix ending with the last slash '/' for
            security purpose.</pre>
<p>The uuencode and uudecode utilities are used to transmit binary files over transmission mediums that do not support other than simple ASCII data. </p>
<p>The uuencode utility reads <span class="code">file</span> (or by default the standard input) and writes an encoded version to the standard output, or <span class="code">output_file</span> if one has been specified. The encoding uses only printing ASCII characters and includes the mode of the file and the operand <span class="code">name</span> for use by uudecode. </p>
<p>The uudecode utility transforms uuencoded files (or by default, the standard input) into the original form. The resulting file is named either <span class="code">name</span> or (depending on options passed to uudecode) <span class="code">output_file</span> and will have the mode of the original file except that setuid and execute bits are not retained. The uudecode utility ignores any leading and trailing lines. </p>
<p><b>Examples</b></p>
<p> The following example packages up a source tree, compresses it, uuencodes
it and mails it to a user on another system.  When uudecode is run on the
target system, the file ``src_tree.tar.Z'' will be created which may then
be uncompressed and extracted into the original tree.</p>
<pre>    tar cf - src_tree | compress |
    uuencode src_tree.tar.Z | mail sys1!sys2!user</pre>
<p> The following example unpack all uuencode'd files from your mailbox into
your current working directory:<br>
</p>
<pre>    uudecode -c &lt; $MAIL
</pre>
<p> The following example extract a compress'ed tar archive from your mailbox:<br>
</p>
<pre>    uudecode -o /dev/stdout &lt; $MAIL | zcat | tar xfv -    </pre>
<p class="quote"><i>“One of the main causes of the fall of the Roman Empire was that, lacking zero, they had no way to indicate successful termination of their C programs” ~ Robert Firth</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/uuencode.1.html">uuencode man page</a> - Apple.com<br>
basename - return filename or directory portion of pathname<br>
compress(1), mail(1)<br>
uucp - Unix to Unix copy</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
