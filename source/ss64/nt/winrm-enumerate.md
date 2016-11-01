---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="winrm.html">WINRM</a> enumerate </h1> 
<p>List instances of <i>RESOURCE_URI</i>, 
  the instances returned can be limited  using a filter and dialect (if supported by the 
resource).</p>
<pre>Syntax
      winrm enum[erate] <i>RESOURCE_URI</i> [-ReturnType:<i>Value</i>] [-Shallow]<br>         [-BasePropertiesOnly] [-<i>SWITCH</i>:<i>VALUE</i> [-<i>SWITCH</i>:<i>VALUE</i>] ...]

Key
   -ReturnType  An optional switch that determines the type of data returned.
                Possible options are 'Object', 'EPR'  and 'ObjectAndEPR'. Default is Object
                If Object is specified or if switch is omitted, then only the objects are
                returned.
                If EPR is specified, then only the EPRs (End point reference) of the
                objects are returned. EPRs contain information about the resource URI and
                selectors for the instance.
                If ObjectAndEPR is specified, then both the object and the associated EPRs
                are returned.

   -Shallow     Enumerate only instances of the base class specified in the resource URI.
                If this flag is not specified, instances of the base class specified in 
                the resource URI and all its derived classes are returned.

   - BasePropertiesOnly  Include only those properties that are part of the base class
                         specified in the resource URI. When -Shallow is specified,
                         this flag has no effect.</pre>
<p> <b>Examples</b></p>
<p class="code"> winrm enum winrm/config/resource<br>
winrm enum winrm/config/listener<br>
winrm enum winrm/config/plugin<br>
winrm enum wmicimv2/Win32_Service<br>
winrm enum shell/cmd -remote:srv.corp.com<br>
winrm enum winrm/config/service/certmapping<br>
winrm enum winrm/config/winrs/customremoteshell</p>
<p class="quote"><i>“That's the whole problem with science. You've got a bunch of empiricists trying to describe things of unimaginable wonder” ~ Bill Watterson</i></p>
<p><b>Related:</b></p>
<p>  <a href="winrs.html">WINRS</a> - Windows Remote Shell<br>
<a href="winrm.html">WINRM</a> - Windows Remote Management, manage active remote shells &amp; WinRS configuration.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="winrm-enumerate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

