---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>system_profiler</h1> 
<p>Report system hardware and software configuration.</p>
<pre>Syntax
      system_profiler [-usage]

      system_profiler [-listDataTypes]

      system_profiler [-xml] <i>dataType1</i> ... <i>dataTypeN</i>

      system_profiler [-xml] [-detailLevel <i>level</i>]

Options
   -xml                Generate a report in XML format.  If the XML report
                       is redirected to a file with a ".spx" suffix that
                       file can be opened with System Profiler.app.

   -listDataTypes      List the available datatypes.

   -detailLevel <i>level</i>  The level of detail for the report:

                         mini       report with no personal information
                         basic      basic hardware and network information
                         full       all available information

   -usage              Print usage info and examples.</pre>
<p>system_profiler is a replacement for /usr/sbin/AppleSystemProfiler.</p>
<p><b>Examples</b></p>
<p> Generate a text report with the standard detail level.<br>
<span class="code">$ system_profiler</span></p>
<p> Generate a short report containing no personal information.<br>
<span class="code">$ system_profiler -detailLevel mini</span></p>
<p> Show a list of the available data types.<br>
<span class="code">$ system_profiler -listDataTypes</span></p>
<p>Generate a text report containing only software and network data.<br>
<span class="code">$ system_profiler SPSoftwareDataType SPNetworkDataType</span></p>
<p>Create an XML file which can be opened by System Profiler.app<br>
<span class="code">$ system_profiler -xml &gt; MyReport.spx</span></p>
<p class="quote"><i>“Why a four-year-old child could understand this report...<br>
Run out and find me a four-year-old child. I can't make head nor tail out of it” - Groucho Marx</i></p>
<p><b>Related:</b></p>
<p><a href="uname.html">uname</a> - Print operating system name.<br>
<a href="serverinfo.html">serverinfo</a> - Server information.<br>
<a href="who.html">who</a> - Print who is currently logged in.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="system_profiler.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
