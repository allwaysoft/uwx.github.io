---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>kextfind</h1> 
<p>Find kernel extensions (kexts) based on a variety of criteria      and print information.</p>
<pre>Syntax:

     kextunload [<i>options</i>] [--] [<i>kext </i>...]

Options

    kext     Unload the loaded kext whose bundle identifier matches the
              CFBundleIdentifier of kext.  All instances of IOService sub-
              classes defined by the loaded kext and in the IOService plane of
              the I/O Registry are terminated; the kext is checked to make
              sure no instances of its libkern C++ classes remain; the kext's
              C++ static destructores and module stop routine are invoked;
              then the kext's executable and IOKitPersonalities are unloaded
              from the kernel.  Failure at any stage prevents kext unload.

     -b <i>identifier</i>, -bundle-id <i>identifier</i>
              Unload executable and IOKitPersonalities (as described immedi-
              ately above) for the kext whose CFBundleIdentifier is
              identifier.

     -c <i>classname</i>, -class <i>classname</i>
              Terminate all instances of class classname that are in the
              IOService plane of the I/O Registry, if possible, but do not
              unload the defining kext or its IOKitPersonalities.  New load
              requests for devices that were driven by these terminated
              instances may result in the same class being instantiated at any
              time.

     -h, -help
              Print a help message describing each option flag and exit with a
              success result, regardless of any other options on the command
              line.

     -m <i>identifier</i>
              Same as -b (remains for backward compatibility).

     -p, -personalities-only
              Terminate services and remove personalities only; do not unload
              kexts.

     -q, -quiet
              Quiet mode; print no informational or error messages.

     -v [0-6 | 0x####], -verbose [0-6 | 0x####]
              Verbose mode; print information about program operation.  Higher
              levels of verbosity include all lower levels.  By default
              kextunload prints only warnings and errors.  You can specify a
              level from 0-6, or a hexadecimal log specification (as described
              in kext_logging(8)). The levels of verbose output are:

              0            Print only errors (that is, suppress warnings); see
                           also -quiet.

              1 (or none)  Print basic information about program operation.

              2            Prints information about unload stages.

              3            Prints information about removal of personalities.

              4            Prints information about module stop functions and
                           C++ class destruction.

              5            Prints detailed information internal operations
                           such as bookkeping.

              6            Identical to level 5 for kextunload.

              Unlike in other kext tools, the -verbose flag in kextunload
              applies to all kexts (that is, it turns on hexadecimal bit 0x8
              by default).  See kext_logging(8) for more information on ver-
              bose logging.</pre>
<p>The kextunload program is used to terminate and unregister I/O Kit objects associated with a kernel extension (kext) and to unload the code and personalities for that kext.</p>
<p> kextunload must run with <a href="sudo.html">superuser</a> privileges.</p>
<p> If another loaded kext has a dependency on the kext being unloaded, the unload will fail.  You can determine whether a kext has dependents using the kextstat(8) tool.      kextunload is a formal interface for unloading kexts in the Darwin OS and in Mac OS X.  Software and installers can rely on its presence and invoke it in order to unload kexts.  Note that long options are present as of Mac OS X 10.6 (Snow Leopard).</p>
<h2>Exit Code</h2>
<blockquote>
<p>kextunload exits with a zero status upon success, or prints an error mes-      sage and exits with a nonzero status upon failure.</p>
</blockquote>
<h2>Bugs</h2>
<blockquote>
<p>Many single-letter options are inconsistent in meaning with (or directly      contradictory to) the same letter options in other kext tools.</p>
</blockquote>
<p><b>Examples</b></p>
<p>Unload the Macally ICE keyboard driver</p>
<p class="code">$ sudo kextunload /System/Library/Extensions/ICEKey.kext</p>
<p class="quote"><i>"To be a traveler—and novelists are often travelers—is to be constantly reminded of the simultaneity of what is going on in the world, your world and the very different world you have visited and from which you have returned home” ~ Susan Sontag</i></p><p><b>Related:</b></p>
<p><a href="kextfind.html">kextfind</a> - List kernel extensions.<br>
<a href="kextstat.html">kextstat</a> - Display status of loaded kernel extensions.<br>
kextutil - load, diagnose problems with, and generate symbols for kernel      extensions.<br>
<a href="find.html">find</a> - Search for files that meet a desired criteria<br>
<a href="xargs.html">xargs</a> - Execute utility - passing arguments</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="kextunload.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
