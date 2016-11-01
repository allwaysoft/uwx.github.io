---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="wmic.html">WMIC</a></h1>
<p> WMIC Global Options are used to set  properties
of the WMIC environment. You can pull data from a remote machine/node (or even
  a list of machines) you can also  redirect output to a file. By default WMIC
  will retrieve data from the local machine and display on screen only.</p>
<pre>Syntax
    WMIC [<i>global_switches</i>] &lt;<i><a href="wmic.html">command</a></i>&gt;

    WMIC [<i>global_switch</i>:<i>value</i>] [<i>global_switch</i>:<i>value</i>] &lt;<i><a href="wmic.html">command</a></i>&gt;

    WMIC CONTEXT
<i>
global_switches</i>:

 /NODE         Servers to operate against:
                  @filename
                  machine_id &lt;,machine id list&gt;
 /FAILFAST     FailFast mode:(timeout for connection to remote machine)
                  ON, <u>OFF</u>
 /LOCALE       Language id.
                  (ms_409=US)
 /OUTPUT       Mode for output redirection:
                  <u>STDOUT</u>, CLIPBOARD, &lt;filename&gt;
 /APPEND       Mode for output redirection:
                  <u>STDOUT</u>, CLIPBOARD, &lt;filename&gt;
 /RECORD       Log all input commands and output:
                  &lt;FilePath&gt;
 /INTERACTIVE  Interactive mode:(prompt before WMI schema changes)
                  ON, <u>OFF</u>
 /USER         User for this session:
                  &lt;domain&gt;\&lt;userid&gt;
 /PASSWORD     Password for session login.
                  &lt;password&gt;
 /PRIVILEGES   Enable or disable all privileges:
                  ENABLE, DISABLE
 /NAMESPACE    Path for the namespace the alias operates against.
 /ROLE         Path for the role containing the alias definitions.
 /TRACE        Output debugging information to stderr.
                  ON, <u>OFF</u>
 /IMPLEVEL     Client impersonation level:
                  Anonymous,Identify,<u>Impersonate</u>,Delegate
 /AUTHLEVEL    Client authentication level:
                  Default,None,Connect,Call,<u>Pkt</u>,Pktintegrity,Pktprivacy
 /AGGREGATE    Aggregate mode: (column titles)
                  <u>ON</u>, OFF

 <b>CONTEXT</b>   - Display the current state of all global switches.

 CLASS     - Escape to full WMI schema.
 PATH      - Escape to full WMI object paths.

 QUIT/EXIT - Exit WMIC</pre>
<p>  <b>Notes<br>
</b>  If any value
e.g. a <i>path</i> or <i>machine_id</i> contains special characters like '-' or
'/' <br>
Enclose
  the  value in double
quotes<br>
  <br>
  <i class="quote">"The price of anything is the amount of life you exchange for
  it" ~ Henry David Thoreau</i><br>
  <br>
  <b>Related:</b><br>
  <br>
  <a href="wmic.html">WMIC</a> - Main page with Examples<br>
MOF (Managed Object Format) - A language that describes management
  information. The MOF syntax is a way to
describe object definitions in textual form.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="wmicglobal.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

