---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>IEXPRESS.exe</h1>
<p> Create a self extracting ZIP file archive. <br>
In Windows Vista and greater iexpress.exe must be run with elevated permissions, or from an elevated command prompt. </p>
<pre>Syntax
      IEXPRESS [ /N [/Q] [/M] ] <i><a href="iexpress-sed.html">SED_filename</a></i>
         [/O:<i>Override_SED_filename</i>, <i>OverrideSectionName</i>] [/D:directory]

Key:

  /N   Build package now (SED filename must be specified)
  /Q   Quiet mode when using /N
  /M   Use minimised windows when using /N
  /O   Specify overrideSED file and section
  /D   Override directory for exe stub

When running the created self extracting archive, the following options can be used:

  /Q            Quiet mode
  /T:<i>Full_path</i>  A Temporary working folder
  /C            Extract files only, when used with /T
  /C:<i>cmd</i>        Override the install command defined by the author.

  /R:N    Never restart the computer after installation.
  /R:A    Ask to restart the computer after installation.
  /R:S    Restart the computer after installation without prompting the user.</pre>
<p>Running IExpress with no options will launch a GUI wizard<b>.</b></p>
<p>The error message "<i>Unable to open the report file</i>..." typically means that iexpress needs to be elevated.</p>
<p>Early versions of iexpress were supplied with the Internet Explorer administration kit (IE 5 and IE 6).</p>
<p><b>Examples</b></p>
<p>Create a zip archive:</p>
<p class="code">iexpress.exe</p>
<p>Extract an archive, run any installation program specified and then prompt to reboot:</p>
<p class="code">demo.exe /R:A</p>
<p><span class="quote">“He can compress the most words into the smallest ideas of any man I ever met”  ~ Abraham Lincoln (attr.)</span><br>
<b><br>
Related:</b></p>
<p><a href="http://technet.microsoft.com/library/Dd346761">iexpress setup switches</a> (IE 6)<br>
<a href="makecab.html">MAKECAB</a> - Create compressed .CAB file.<br>
<a href="http://www.mdgx.com/INF_web/">INF + SED</a> (Self Extraction Directive) file functions</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="iexpress.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

