---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.Logevent</h1> 
<p>Log an event in the Windows  event log.</p>
<pre>Syntax 
       <i>objShell</i>.LogEvent intType, strMessage [,strTarget]

Arguments:

   objShell    A WScript.Shell object

   intType     The type of the event is specified by
               (see details below).

   strMessage  The message string is specified by.

   strTarget   The name of the system where the event should be logged
               (default is local system).

intType    
  0  SUCCESS
  1  ERROR
  2  WARNING
  4  INFORMATION
  8  AUDIT_SUCCESS
 16  AUDIT_FAILURE

Returns True if an event is logged sucessfully, otherwise it returns False.
</pre>
<p><b>Examples</b></p>
<pre>Set objShell = CreateObject("WScript.Shell")
objShell.LogEvent 4, "Script started."
objShell.LogEvent 2, "An error occured."
objShell.LogEvent 0, "Something worked."
objShell.LogEvent 1, "Something failed."</pre>
<p class="quote"><i>“You are no bigger then the things that annoy you” ~ Jerry Bundsen</i></p>
<p>  Equivalent Windows CMD command: <a href="../nt/eventcreate.html">EVENTCREATE</a> - Add a message to the Windows event log.
<!-- #BeginLibraryItem "/Library/foot_vb.lbi" --></p><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

