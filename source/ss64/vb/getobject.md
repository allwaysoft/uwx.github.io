---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>WScript.GetObject </h1> 
<p>Retrieve an Automation object (assumes there is a current instance 
  of the object)</p>
<pre>Syntax 
      Set objObject = Wscript.GetObject(<i>strPathname</i> [,<i>strProgID</i>] ], [<i>strPrefix</i>])

Arguments:

   strPathname : The pathname of the file containing the object to retrieve. 
                 (required)

   strProgID   : The program identifier (ProgID) of the object. 

   strPrefix   : A prefix for subroutine names (optional)
                 e.g. if strPrefix is "MYOBJ_" and the object fires an event
                 named "OnBegin," WSH calls the subroutine "MYOBJ_OnBegin" 

   objObject is an Automation object. </pre>
<p> GetObject is a wscript method.<br>
</p>
<p class="quote"><i>“When I take action I'm not going to fire a $2 million missile at a $10 empty tent and hit a camel in the butt. It's going to be decisive” ~ George W Bush, 2001</i></p>
<p><b>Related:</b>
</p><p><a href="createobject.html">.CreateObject</a> - Create a WSH automation object<br>
.ConnectObject - Connect to a COM object<br>
.DisconnectObject - Disconnect  from a COM object<br>
<!-- #BeginLibraryItem "/Library/foot_vb.lbi" --></p><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="getobject.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

