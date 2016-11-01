---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>shasum</h1> 
<p>Print or Check SHA Checksums.</p>
<pre>Syntax
      shasum [<i>OPTION</i>] [<i>FILE</i>]...

      shasum [<i>OPTION</i>] --check [<i>FILE</i>]

Options
   -a, --algorithm    1 (default), 224, 256, 384, 512
   -b, --binary       Read files in binary mode (default on DOS/Windows)
   -c, --check        Check SHA sums against given list
   -p, --portable     Read files in portable mode
                      produces same digest on Windows/Unix/Mac
   -t, --text         Read files in text mode (default)

   The following two options are useful only when verifying checksums:

   -s, --status       don't output anything, status code shows success
   -w, --warn         warn about improperly formatted SHA checksum lines

   -h, --help         Display help and exit
   -v, --version      Output version information and exit

   With no FILE, or when FILE is -, read standard input.</pre>
<p>The sums are computed as described in FIPS PUB 180-2.  When checking,
        the input should be a former output of this program.  The default mode
        is to print a line with checksum, a character indicating type (`*'
for binary, `?' for portable, ` ' for text), and name for each FILE.</p>
<p>The shasum script provides the easiest and most convenient way to
compute SHA message digests.  Rather than writing a program, the user
simply feeds data to the script via the command line, and waits for the
results to be printed on standard output.  Data can be fed to shasum
through files, standard input, or both.</p>
<p> The following command shows how easy it is to compute digests for
typical inputs such as the NIST test vector "abc":</p>
<p class="code"> perl -e "print qw(abc)" | shasum</p>
<p> Or, if you want to use SHA-256 instead of the default SHA-1, simply
say:</p>
<p class="code"> perl -e "print qw(abc)" | shasum -a 256</p>
<p> Since shasum uses the same interface employed by the familiar sha1sum
program (and its somewhat outmoded anscestor md5sum), you can install
this script as a convenient drop-in replacement.</p>
<p>shasum is implemented using the Perl module Digest::SHA or        Digest::SHA::PurePerl.  author:         Mark Shelor Copyright (c) 2003-2008 </p><p><b>Examples</b></p>
<p>Calculate the sha-256 checksum for example.txt</p>
<p><span class="code">$ shasum -a 256 example.txt</span><br>
<br>Or using an <a href="alias.html">alias</a>:<br>
<br>
<span class="code">$ alias sha256='shasum -a 256'<br>
$ sha256 example.txt</span></p>
<p class="quote"><i>“In expanding the field of knowledge, we but increase the horizon of ignorance” ~ Henry Miller </i> </p>
<p><b>Related:</b></p>
<p><span class="code">openssl sha1 example.txt</span><br>
sha256sum (coreutils)</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="shasum.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
