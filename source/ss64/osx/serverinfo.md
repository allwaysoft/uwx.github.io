---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>serverinfo</h1> 
<p>Server information.</p>
<pre>Syntax
      serverinfo [<i>options</i>] <i>command</i>

Options:
    --quiet|-q
        Prevent status messages from being printed to stdout

Available commands (there must be exactly one):
    --hardware
        Returns status 0 if executed on server hardware
    --software [<i>PATH</i>]
        Returns status 0 if the root volume has a server OS installed
        Use optional argument PATH to specify mountpoint of alternate volume
    --configured [<i>PATH</i>]
        Returns status 0 if the server is configured
        Use optional argument PATH to specify mountpoint of alternate volume
    --perfmode
        Returns status 0 if the server performance mode is enabled
    --setperfmode BOOL
        Enables the server performance mode if BOOL is true
        All other values will disable the server performance mode
        Valid values of true (case-insensitive): TRUE, YES, enabled, on, 1
        Returns status 0 if the mode is changed successfully
    --prefix
        Prints the server install path prefix
    --productname
        Prints the server product name
    --shortversion
        Prints the short version
    --buildversion
        Prints the build version
    --minimumserverversion
        Prints the minimum server version for this os
    --plist
        Prints a plist containing server information about the running system
    --help|-h
        Prints this usage message</pre>
<p>The -q quiet mode is intended for use in shell script conditionals.</p>
<p><b>Examples</b></p>
<p> Is performance mode enabled?:<br>
<span class="code">$ if serverinfo -q --perfmode; then echo Performance mode enabled; else echo disabled; fi</span></p>
<p> Are we running on server hardware?:<br>
<span class="code">$ serverinfo --hardware<br>
$ 
if serverinfo -q --hardware; then echo Running on server hardware; fi</span></p>
<p class="quote"><i class="quote">“The measure of your quality as a public person, as a citizen, is the gap between what you do and what you say” ~   Ramsey Clark </i></p><p><b>Related:</b></p>
<p><a href="system_profiler.html">system_profiler</a> - Report system configuration<br>
<a href="uname.html">uname</a> - Print operating system name.<br>
hostname -  Print or set system name.</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="serverinfo.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
