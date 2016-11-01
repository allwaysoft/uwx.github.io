---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem -->
<h1>kextstat</h1> 
<p>Display status of loaded kernel extensions (kexts).</p>
<pre>Syntax:
      kextstat [-a] [-h] [-k] [-l] [-b <i>identifier</i>] ...

Key
   -a, -arch
               Print the architecture of the kext.

   -b <i>identifier</i>, -bundle-id <i>identifier</i>
               Display the status of only the kext with the given bundle iden-
               tifier.  This option trumps the -no-kernel option; if both are
               given and a kernel component is specified, its information is
               shown.

   -h, -help
               Print a help message describing each option flag and exit with
               a success result, regardless of any other options on the com-
               mand line.

   -k, -no-kernel
               Don't show information for built-in components of the kernel.

   -l, -list-only
               Print the list of loaded kexts only and omit the header (useful
               for running output through text-analysis tools).

   -s, -sort
               Sort the list by load address.</pre>
<p>The kextstat utility displays the status of any kexts currently loaded in      the kernel.  <br>
The following information is shown for each loaded kext: </p>
<pre>     Index     The load index of the kext (used to track linkage references).
               Gaps in the list indicate kexts that have been unloaded.

     Refs      The number of references to this kext by others.  If nonzero,
               the kext cannot be unloaded.

     Address   The address in kernel space where the kext has been loaded.

     Size      The number of bytes of kernel memory that the kext occupies.
               If this is zero, the kext is a built-in part of the kernel that
               has a record as a kext for resolving dependencies among kexts.

     Wired     The number of wired bytes of kernel memory that the kext occu-
               pies.

     Architecture (if the -a option is used)
               The architecture of the kext.

     Name      The CFBundleIdentifier of the kext.

     (Version)
               The CFBundleVersion of the kext.

     <i>Linked Against</i>
               The index numbers of all other kexts that this kext has a ref-
               erence to.</pre>
<p>When troubleshooting a Mac, it can be helpful to list the active kernel extensions, particularly third party kexts.</p>
<p>The kextstat utility exits with a status of 0 on success and with a      nonzero status if an error occurs.</p>
<p><b>Examples</b></p>
<p>List only third party kernel extensions: <br>
<span class="code">$ kextstat | grep -v com.apple</span></p>
<p class="quote"><i>"The wheel is an extension of the foot, the book is an extension of the eye; clothing, an extension of the skin, electric circuitry, an extension of the central nervous system” ~ Marshall McLuhan</i></p><p><b>Related:</b></p>
<p><a href="kextfind.html">kextfind</a> - List kernel extensions.<br>
<a href="kextunload.html">kextunload</a> - Terminate driver instances and unload kernel extensions.<br>
<a href="find.html">find</a> - Search for files that meet a desired criteria.<br>
<a href="xargs.html">xargs</a> - Execute utility - passing arguments.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="kextstat.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
