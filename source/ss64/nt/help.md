---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>HELP</h1> 
<p>Online help for MS Windows - most  commands will give help when 
  run with /? or -? (COMMAND /? or COMMAND -?)<br>
  <br>
  GUI Help is available from START - Help or by running the help files directly:<br>
  <br>
  C:\WINDOWS\help\ntcmds.chm<br>
  C:\WINDOWS\help\ntdef.chm<br>
  C:\WINDOWS\help\ntchowto.chm<br>
  C:\WINDOWS\help\nthelp.chm<br>
C:\WINDOWS\help\ntshared.chm </p>
<pre>Syntax
      WINHELP [<i>options</i>] <i>helpfile</i>.hlp

      WINHLP32.exe [<i>options</i>] <i>helpFile</i>

In XP:    C:\WINDOWS\PCHealth\HelpCtr\Binaries\HelpCtr.exe

options:

-H    show help about help

-G[n] Build a .gid file and quit,
      If a number is specified, it determines which extensible tab to
      display by default the first time the help file is opened.
      A value of 1 would be the first tab beyond the Find tab.
      This command cannot be used with -S.

-S    Create a .gid file without showing an animated icon. 
      Cannot be used with -G. (winhlp32 only)

-W window 
      Specify the window for displaying the topic.
      This command cannot be used with -P.

-P    Show the topic in a pop-up window. 
      This command cannot be used with -W. 
      You must use the -P switch in combination with the 
      -N (context number) or -I (topic ID) switch.

-N contextNum | -I topicID
      Specify the topic to open using either a topic number, 
      (defined in the [MAP] section of the HPJ file.)
      or a topic ID string 
      (# footnote in the topic).

-K keyword 
      Specify the topic to open using a keyword.
      This command cannot be used with -N or -I.
</pre>
<p>Powershell: <a href="../ps/get-help.html">Get-Help</a> - Open the help file<br>
Equivalent bash command (Linux): man pages</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

